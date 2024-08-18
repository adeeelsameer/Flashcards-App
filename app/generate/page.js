'use client'

import { useState, useEffect, useRef } from 'react';
import { db } from '@/firebase';
import {
  TextField,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Grid,
  Card,
  CardContent,
  Box,
  CircularProgress,
  CardActionArea,
  Fab,
} from '@mui/material';
import { Add as AddIcon, Visibility as VisibilityIcon } from '@mui/icons-material';
import { useUser } from '@clerk/nextjs';
import { collection, getDoc, getDocs, doc, setDoc } from "firebase/firestore";
import ResponsiveAppBar from '../components/Appbar';

export default function Generate() {
  const { user } = useUser();
  const [text, setText] = useState('');
  const [flashcards, setFlashcards] = useState([]);
  const [setName, setSetName] = useState('');
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [flashcardSets, setFlashcardSets] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const flashcardsRef = useRef(null);

  useEffect(() => {
    const fetchFlashcardSets = async () => {
      if (!user) return;

      try {
        const userDocRef = doc(db, 'users', user.id);
        const flashcardSetsCollection = collection(userDocRef, 'flashcardSets');
        const querySnapshot = await getDocs(flashcardSetsCollection);

        const sets = querySnapshot.docs.map(doc => doc.id);
        setFlashcardSets(sets);
      } catch (error) {
        console.error('Error fetching flashcard sets:', error);
      }
    };

    fetchFlashcardSets();
  }, [user]);

  const handleOpenCreateDialog = () => setCreateDialogOpen(true);
  const handleCloseCreateDialog = () => setCreateDialogOpen(false);

  const handleOpenSaveDialog = () => setSaveDialogOpen(true);
  const handleCloseSaveDialog = () => setSaveDialogOpen(false);

  const handleSubmit = async () => {
    if (!text.trim()) {
      alert('Please enter some text to generate flashcards.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        body: text,
      });

      if (!response.ok) {
        throw new Error('Failed to generate flashcards');
      }

      const data = await response.json();
      setFlashcards(data);
      setText('');
      setCreateDialogOpen(false);

      setTimeout(() => {
        const offset = 100;
        const elementPosition = flashcardsRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
    } catch (error) {
      console.error('Error generating flashcards:', error);
      alert('An error occurred while generating flashcards. Please try again.');
    } finally {
      setLoading(false);
    }
  };


  const handleCardClick = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const saveFlashcards = async () => {
    if (!setName.trim()) {
      alert('Please enter a name for your flashcard set.');
      return;
    }

    if (flashcards.length === 0) {
      alert('There are no flashcards to save.');
      return;
    }

    try {
      const userDocRef = doc(db, 'users', user.id);
      const setDocRef = doc(userDocRef, 'flashcardSets', setName);

      const setDocSnap = await getDoc(setDocRef);
      if (setDocSnap.exists()) {
        alert("A flashcard set with this name already exists.");
        return;
      }

      await setDoc(setDocRef, { flashcards });

      alert('Flashcards saved successfully!');
      handleCloseSaveDialog();
      setSetName('');
      window.location.href = '/flashcards';
    } catch (error) {
      console.error('Error saving flashcards:', error);
      alert('An error occurred while saving flashcards. Please try again.');
    }
  };

  return (
    <Box width="100vw" height="100vh" sx={{ backgroundImage: 'linear-gradient(to right, #121212, #2c2c2c)', color: 'white' }}>
      <ResponsiveAppBar />

      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} sx={{
        textAlign: 'center', my: 4, pt: {
          xs: '56px', md: '64px'
        }, height: {
          xs: 'calc(100vh - 56px)',
          md: 'calc(100vh - 64px)',
        },
      }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#f0f0f0' }}>
          Generate Flashcards
        </Typography>

        <Typography variant="h6" sx={{ color: '#b0b0b0', mb: 2 }}>
          Use the + button to create a new flashcard.
        </Typography>

        {flashcardSets.length > 0 && (<Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: '#bb86fc',
              color: 'white',
              px: 3,
              py: 1,
              borderRadius: '20px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
              transition: 'background-color 0.3s, transform 0.3s',
              '&:hover': {
                backgroundColor: '#3700b3',
                transform: 'scale(1.05)',
              },
            }}
            href="/flashcards"
          >
            View Saved Flashcards
          </Button>
        </Box>)}
      </Box>

      {flashcards.length > 0 && (
        <Box ref={flashcardsRef} sx={{ mt: 10, p: 2 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 3, color: '#f0f0f0' }}>
            Generated Flashcards
          </Typography>
          <Grid container spacing={3}>
            {flashcards.map((flashcard, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{
                  backgroundColor: '#1f1f1f', color: '#bb86fc', borderRadius: '15px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  }
                }}>
                  <CardActionArea onClick={() => { handleCardClick(index) }}>
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
            ))}
          </Grid>

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="primary" sx={{
              backgroundColor: '#bb86fc',
              color: 'white',
              px: 3,
              py: 1,
              borderRadius: '20px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
              transition: 'background-color 0.3s, transform 0.3s',
              '&:hover': {
                backgroundColor: '#3700b3',
                transform: 'scale(1.05)',
              },
            }} onClick={handleOpenSaveDialog}>
              Save Flashcards
            </Button>
          </Box>
        </Box>
      )}

      <Fab color="primary" aria-label="add" onClick={handleOpenCreateDialog} sx={{
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

      <Dialog open={createDialogOpen} onClose={handleCloseCreateDialog} PaperProps={{ sx: { backgroundColor: '#1f1f1f', color: '#f0f0f0' } }}>
        <DialogTitle sx={{ color: '#bb86fc' }}>Generate Flashcards</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: '#b0b0b0' }}>
            Enter your flashcard topic. Be as detailed as you'd like.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Enter text"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
            sx={{ mt: 2, bgcolor: '#333', color: '#f0f0f0', borderRadius: '4px' }}
            InputLabelProps={{ style: { color: '#b0b0b0' } }}
            InputProps={{ style: { color: '#f0f0f0' } }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCreateDialog} sx={{ color: '#b0b0b0' }}>Cancel</Button>
          <Button onClick={handleSubmit} sx={{ color: '#bb86fc' }}>
            {loading ? <CircularProgress size={24} sx={{ color: '#bb86fc' }} /> : 'Generate'}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={saveDialogOpen} onClose={handleCloseSaveDialog} PaperProps={{ sx: { backgroundColor: '#1f1f1f', color: '#f0f0f0' } }}>
        <DialogTitle sx={{ color: '#bb86fc' }}>Save Flashcard Set</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: '#b0b0b0' }}>
            Please enter a name for your flashcard set.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Set Name"
            type="text"
            fullWidth
            sx={{ bgcolor: '#333', borderRadius: '4px', color: '#f0f0f0' }}
            value={setName}
            onChange={(e) => setSetName(e.target.value)}
            InputLabelProps={{ style: { color: '#b0b0b0' } }}
            InputProps={{ style: { color: '#f0f0f0' } }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSaveDialog} sx={{ color: '#b0b0b0' }}>Cancel</Button>
          <Button onClick={saveFlashcards} sx={{ color: '#bb86fc' }}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box >
  );
}
