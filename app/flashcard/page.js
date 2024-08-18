'use client';

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
  const [flipped, setFlipped] = useState([]);

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

  const handleCardClick = (index) => {
    setFlipped((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <Box sx={{ backgroundImage: 'linear-gradient(to right, #121212, #2c2c2c)', color: 'white', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ backgroundColor: '#1f1f1f', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: '#f0f0f0' }}>
            Flashcard Sets
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ pt: '80px' }}>
        {selectedSet ? (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#f0f0f0' }}>
              {selectedSet.name}
            </Typography>
            <Grid container spacing={3}>
              {flashcards.length > 0 ? (
                flashcards.map((flashcard, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card sx={{
                      backgroundColor: '#1f1f1f', color: '#bb86fc', borderRadius: '15px',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      }
                    }}>
                      <CardActionArea onClick={() => handleCardClick(index)}>
                        <CardContent>
                          <Box sx={{
                            perspective: '1000px',
                            '& > div': {
                              transition: 'transform 0.6s',
                              transformStyle: 'preserve-3d',
                              position: 'relative',
                              width: '100%',
                              height: '250px',
                              transform: flipped[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                            },
                            '& > div>div': {
                              position: 'absolute',
                              width: '100%',
                              height: '100%',
                              backfaceVisibility: 'hidden',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              p: 2,
                            },
                            '& > div>div:nth-of-type(2)': {
                              transform: 'rotateY(180deg)',
                              backgroundColor: '#3700b3',
                            },
                          }}>
                            <div>
                              <div>
                                <Typography sx={{
                                  fontSize: "20px",
                                  textAlign: "center",
                                  wordBreak: "break-word",
                                  overflowWrap: "break-word",
                                  p: "20px",
                                  color: '#f0f0f0'
                                }}>
                                  {flashcard.front}
                                </Typography>
                              </div>
                              <div>
                                <Typography sx={{
                                  fontSize: "20px",
                                  textAlign: "center",
                                  wordBreak: "break-word",
                                  overflowWrap: "break-word",
                                  p: "20px",
                                  color: 'white'
                                }}>{flashcard.back}</Typography>
                              </div>
                            </div>
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))
              ) : (
                <Typography variant="h6" color="textSecondary" sx={{ mt: 4, textAlign: 'center' }}>
                  No flashcards found.
                </Typography>
              )}
            </Grid>
          </Box>
        ) : (
          <Grid container spacing={3} sx={{ mt: 4 }}>
            {flashcards.map((set) => (
              <Grid item xs={12} sm={6} md={4} key={set.id}>
                <Card sx={{
                  backgroundColor: '#1f1f1f', color: '#bb86fc', borderRadius: '15px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  }
                }}>
                  <CardActionArea onClick={() => window.location.href = `?id=${set.id}`}>
                    <CardContent>
                      <Typography sx={{
                        fontSize: "20px",
                        textAlign: "center",
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                        p: "20px",
                        color: '#f0f0f0'
                      }}>
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
    </Box>
  );
}
