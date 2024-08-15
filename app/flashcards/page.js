'use client'

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { db } from '@/firebase';
import {
  Container,
  CardActionArea,
  Typography,
  Grid,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { collection, getDocs, doc, deleteDoc, setDoc, getDoc } from 'firebase/firestore';

export default function Flashcard() {
  const { user } = useUser();
  const [flashcardSets, setFlashcardSets] = useState([]);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [currentSet, setCurrentSet] = useState(null);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    async function getFlashcardSets() {
      if (!user) return;
      
      const userDocRef = doc(db, 'users', user.id);
      const flashcardSetsRef = collection(userDocRef, 'flashcardSets');
      
      const querySnapshot = await getDocs(flashcardSetsRef);
      const sets = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      
      setFlashcardSets(sets);
    }

    getFlashcardSets();
  }, [user]);

  const handleCardClick = (id) => {
    window.location.href = `/flashcard?id=${id}`;
  };

  const handleEditClick = (set) => {
    setCurrentSet(set);
    setNewName(set.id);
    setEditDialogOpen(true);
  };

  const handleDeleteClick = (set) => {
    setCurrentSet(set);
    setDeleteDialogOpen(true);
  };

  const handleEditSubmit = async () => {
    if (flashcardSets.some(set => set.id === newName && set.id !== currentSet.id)) {
      alert('A flashcard set with this name already exists.');
      return;
    }

    try {
      const userDocRef = doc(db, 'users', user.id);
      const oldSetDocRef = doc(userDocRef, 'flashcardSets', currentSet.id);
      const newSetDocRef = doc(userDocRef, 'flashcardSets', newName);

      // Fetch the existing document data using getDoc
      const setDocSnap = await getDoc(oldSetDocRef);
      const setDocData = setDocSnap.data();

      // Create a new document with the new name
      await setDoc(newSetDocRef, setDocData);

      // Delete the old document
      await deleteDoc(oldSetDocRef);

      // Update state
      setFlashcardSets(flashcardSets.map(set => set.id === currentSet.id ? { ...set, id: newName } : set));
      setEditDialogOpen(false);
    } catch (error) {
      console.error('Error updating document: ', error);
      alert('Failed to update the flashcard set name.');
    }
  };

  const handleDeleteSubmit = async () => {
    try {
      const userDocRef = doc(db, 'users', user.id);
      const setDocRef = doc(userDocRef, 'flashcardSets', currentSet.id);

      await deleteDoc(setDocRef);
      setFlashcardSets(flashcardSets.filter(set => set.id !== currentSet.id));
      setDeleteDialogOpen(false);
    } catch (error) {
      console.error('Error deleting document: ', error);
      alert('Failed to delete the flashcard set.');
    }
  };

  return (
    <Container maxWidth="md">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcard Sets
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {flashcardSets.length > 0 ? (
          flashcardSets.map((flashcardSet, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardActionArea onClick={() => handleCardClick(flashcardSet.id)}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {flashcardSet.id} {/* Display the document ID as the name */}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                  <Button variant="outlined" color="primary" onClick={() => handleEditClick(flashcardSet)}>
                    Edit
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={() => handleDeleteClick(flashcardSet)}>
                    Delete
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          <Box sx={{ textAlign: 'center', width: '100%', mt: 4 }}>
            <Typography variant="h6" color="textSecondary">
              No flashcard sets found.
            </Typography>
          </Box>
        )}
      </Grid>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle>Edit Flashcard Set Name</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="New Set Name"
            type="text"
            fullWidth
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Delete Flashcard Set</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this flashcard set?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteSubmit} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
