'use client';

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
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  CircularProgress,
} from '@mui/material';
import { collection, getDocs, doc, deleteDoc, setDoc, getDoc } from 'firebase/firestore';
import ResponsiveAppBar from '../components/Appbar';
import { Add as AddIcon } from '@mui/icons-material';
// import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';

export default function Flashcard() {
  const { user } = useUser();
  const [flashcardSets, setFlashcardSets] = useState([]);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
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
      if (sets.length === 0) {
        window.location.href = '/generate';
      }
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

    setLoading(true);

    try {
      const userDocRef = doc(db, 'users', user.id);
      const oldSetDocRef = doc(userDocRef, 'flashcardSets', currentSet.id);
      const newSetDocRef = doc(userDocRef, 'flashcardSets', newName);

      const setDocSnap = await getDoc(oldSetDocRef);
      const setDocData = setDocSnap.data();

      await setDoc(newSetDocRef, setDocData);

      await deleteDoc(oldSetDocRef);

      setFlashcardSets(flashcardSets.map(set => set.id === currentSet.id ? { ...set, id: newName } : set));
      setEditDialogOpen(false);
    } catch (error) {
      console.error('Error updating document: ', error);
      alert('Failed to update the flashcard set name.');
    }
    finally {
      setLoading(false);
    }
  };

  const handleDeleteSubmit = async () => {
    try {
      const userDocRef = doc(db, 'users', user.id);
      const setDocRef = doc(userDocRef, 'flashcardSets', currentSet.id);

      setLoading(true);

      await deleteDoc(setDocRef);
      const updatedFlashcardSets = flashcardSets.filter(set => set.id !== currentSet.id);
      setFlashcardSets(updatedFlashcardSets);
      setDeleteDialogOpen(false);
      if (updatedFlashcardSets.length === 0) {
        window.location.href = '/generate';
      }
    } catch (error) {
      console.error('Error deleting document: ', error);
      alert('Failed to delete the flashcard set.');
    }
    finally {
      setLoading(false);
    }
  };

  return (
    // <>
    //   <SignedIn>
    <Box sx={{ backgroundImage: 'linear-gradient(to right, #121212, #2c2c2c)', color: 'white', minHeight: '100vh' }}>
      <ResponsiveAppBar />

      <Container maxWidth="md" sx={{ pt: '80px' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', color: '#f0f0f0', m: 4 }}>
          <b>Flashcard Sets</b>
        </Typography>

        <Grid container spacing={3}>
          {flashcardSets.length > 0 ? (
            flashcardSets.map((flashcardSet, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{
                  backgroundColor: '#1f1f1f', color: '#bb86fc', borderRadius: '15px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  }
                }}>
                  <CardActionArea onClick={() => handleCardClick(flashcardSet.id)}>
                    <CardContent>
                      <Typography sx={{
                        fontSize: "20px",
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                        p: "20px",
                        color: '#f0f0f0',
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}>
                        {flashcardSet.id}
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

              <CircularProgress size={24} sx={{ color: '#bb86fc' }} />

            </Box>
          )}
        </Grid>
      </Container>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)} PaperProps={{ sx: { backgroundColor: '#1f1f1f', color: '#f0f0f0' } }}>
        <DialogTitle sx={{ color: '#bb86fc' }}>Edit Flashcard Set Name</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="New Set Name"
            type="text"
            fullWidth
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            sx={{ bgcolor: '#333', borderRadius: '4px', color: '#f0f0f0' }}
            InputLabelProps={{ style: { color: '#b0b0b0' } }}
            InputProps={{ style: { color: '#f0f0f0' } }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)} sx={{ color: '#b0b0b0' }}>Cancel</Button>
          <Button onClick={handleEditSubmit} sx={{ color: '#bb86fc' }}>
            {loading ? <CircularProgress size={24} sx={{ color: '#bb86fc' }} /> : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)} PaperProps={{ sx: { backgroundColor: '#1f1f1f', color: '#f0f0f0' } }}>
        <DialogTitle sx={{ color: '#bb86fc' }}>Delete Flashcard Set</DialogTitle>
        <DialogContent>
          <Typography sx={{ color: '#b0b0b0' }}>Are you sure you want to delete this flashcard set?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)} sx={{ color: '#b0b0b0' }}>Cancel</Button>
          <Button onClick={handleDeleteSubmit} sx={{ color: '#bb86fc' }}>
            {loading ? <CircularProgress size={24} sx={{ color: '#bb86fc' }} /> : 'Delete'}
          </Button>
        </DialogActions>
      </Dialog>

      <Fab color="primary" aria-label="add" href="/generate" sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        bgcolor: '#bb86fc',
        color: '#121212',
        '&:hover': {
          bgcolor: '#3700b3',
          transform: 'scale(1.1)',
        },
        transition: 'transform 0.3s ease-in-out',
      }}>
        <AddIcon />
      </Fab>
    </Box>
    //   </SignedIn>
    //   <SignedOut>
    //     <RedirectToSignIn />
    //   </SignedOut>
    // </> 
  );
}
