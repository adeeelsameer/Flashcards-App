'use client'

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useSearchParams } from 'next/navigation';
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
} from '@mui/material';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

export default function Flashcard() {
  const { user } = useUser();
  const [flashcards, setFlashcards] = useState([]);
  const [selectedSet, setSelectedSet] = useState(null);

  const searchParams = useSearchParams();
  const search = searchParams.get('id');

  useEffect(() => {
    async function getFlashcardSetById(setId) {
      if (!setId || !user) return;

      const userDocRef = doc(db, 'users', user.id);
      const setDocRef = doc(userDocRef, 'flashcardSets', setId);
      const setDocSnap = await getDoc(setDocRef);

      if (setDocSnap.exists()) {
        setFlashcards(setDocSnap.data().flashcards || []);
        setSelectedSet({ id: setId, name: setDocSnap.data().name || setId });
      }
    }

    if (search) {
      getFlashcardSetById(search);
    } else {
      async function getFlashcardSets() {
        if (!user) return;
        const userDocRef = doc(db, 'users', user.id);
        const flashcardSetsRef = collection(userDocRef, 'flashcardSets');
        const querySnapshot = await getDocs(flashcardSetsRef);

        const sets = querySnapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name || doc.id,
        }));

        setFlashcards(sets);
        setSelectedSet(null);
      }

      getFlashcardSets();
    }
  }, [search, user]);

  return (
    <Container maxWidth="md">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcard Sets
          </Typography>
        </Toolbar>
      </AppBar>

      {selectedSet ? (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            {selectedSet.name}
          </Typography>
          <Grid container spacing={3}>
            {flashcards.length > 0 ? (
              flashcards.map((flashcard, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card>
                    <CardActionArea>
                      <CardContent>
                        <Typography variant="h5" component="div">
                          {flashcard.front}
                        </Typography>
                        <Typography variant="body1" component="div">
                          {flashcard.back}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography variant="h6" color="textSecondary" sx={{ mt: 4 }}>
                No flashcards found.
              </Typography>
            )}
          </Grid>
        </Box>
      ) : (
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {flashcards.map((set) => (
            <Grid item xs={12} sm={6} md={4} key={set.id}>
              <Card>
                <CardActionArea onClick={() => window.location.href = `?id=${set.id}`}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {set.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
