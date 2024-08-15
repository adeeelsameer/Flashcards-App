'use client'

import { useState, useEffect } from 'react'
import { db } from '@/firebase'
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
  AppBar,
  Toolbar,
  Box,
  CircularProgress,
  CardActionArea,
} from '@mui/material'
import {
  SignedIn,
  SignedOut,
  UserButton,
  useUser
} from '@clerk/nextjs'
import { collection, getDoc, getDocs, doc, setDoc } from "firebase/firestore";

export default function Generate() {
  const { user } = useUser();
  console.log(`user: ${JSON.stringify(user)}`)
  const [text, setText] = useState('')
  const [flashcards, setFlashcards] = useState([])
  const [setName, setSetName] = useState('')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [flashcardSets, setFlashcardSets] = useState([]);  
  const [flipped, setFlipped] = useState([])
  const [isFlipped, setIsFlipped] = useState(false)

  // Fetch flashcard sets when the component mounts
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
  
  const handleSetClick = (setName) => {
    window.location.href = `/flashcards/${setName}`;
  };

  const handleOpenDialog = () => setDialogOpen(true)
  const handleCloseDialog = () => setDialogOpen(false)

  const handleSubmit = async () => {
    if (!text.trim()) {
      alert('Please enter some text to generate flashcards.')
      return
    }

    setLoading(true) // Set loading state to true

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        body: text,
      })

      if (!response.ok) {
        throw new Error('Failed to generate flashcards')
      }

      const data = await response.json()
      setFlashcards(data)
      setText('')
    } catch (error) {
      console.error('Error generating flashcards:', error)
      alert('An error occurred while generating flashcards. Please try again.')
    } finally {
      setLoading(false) 
    }
  }

  const handleCardClick = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  }


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

      // Check if the flashcard set already exists
      const setDocSnap = await getDoc(setDocRef);
      if (setDocSnap.exists()) {
        alert("A flashcard set with this name already exists.");
        return;
      }

      // Save the flashcards directly under the setName document
      await setDoc(setDocRef, { flashcards });

      alert('Flashcards saved successfully!');
      handleCloseDialog();
      setSetName('');
      window.location.href = '/flashcards';
    } catch (error) {
      console.error('Error saving flashcards:', error);
      alert('An error occurred while saving flashcards. Please try again.');
    }
  };

  return (
    <Box width="100%" height="100%">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            FLASHIFY
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">Login</Button>
            <Button color="inherit" href="/sign-up">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx={{ my: 4 }}>
        {flashcardSets.length > 0 && (
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => window.location.href = '/flashcards'}
            >
              View Saved Flashcard Sets
            </Button>
          </Box>
        )}

        <Typography variant="h4" component="h1" gutterBottom>
          Generate Flashcards
        </Typography>
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          label="Enter text"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          sx={{
            mb: 2,
            bgcolor: "white", // Background color of the entire TextField
            "& .MuiOutlinedInput-root": {
              bgcolor: "black", // Background color of the input area
              "& fieldset": {
                borderColor: "white", // Border color
              },
              "&:hover fieldset": {
                borderColor: "white", // Border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "white", // Border color when focused
              },
            },
            "& .MuiInputBase-input": {
              color: "white", // Text color inside the input
            },
            "& .MuiInputLabel-root": {
              color: "white", // Label color
            },
          }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
          disabled={loading} // Disable button when loading
        >
          {loading ? <CircularProgress size={24} /> : 'Generate Flashcards'}
        </Button>
      </Box>

      {flashcards.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Generated Flashcards
          </Typography>
          <Grid container spacing={3}>
            {flashcards.map((flashcard, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardActionArea onClick={() => { handleCardClick(index) }}>
                    <CardContent>
                      <Box sx={{
                        perspective: '1000px',
                        '& > div': {
                          bgcolor: "blue",
                          transition: 'transform 0.6s',
                          transformStyle: 'preserve-3d',
                          position: 'relative',
                          width: '100%',
                          height: '500px',
                          boxShadow: '0 4px 8px 0 rgba(0,0,0, 0.2)',
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
                          padding: '2',
                          boxSizing: 'border-box',
                        },
                        '& > div>div:nth-of-type(2)': {
                          transform: 'rotateY(180deg)'
                        },
                      }}>
                        <div>
                          <div>
                            <Typography sx={{
                              fontSize: "30px",
                              textAlign: "center",
                              wordBreak: "break-word",
                              overflowWrap: "break-word",
                              p: "50px"
                            }}>
                              {flashcard.front}
                            </Typography>
                          </div>
                          <div>
                            <Typography sx={{
                              fontSize: "30px",
                              textAlign: "center",
                              wordBreak: "break-word",
                              overflowWrap: "break-word",
                              p: "50px"
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
        </Box>
      )}

      {flashcards.length > 0 && (
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" color="primary" onClick={handleOpenDialog}>
            Save Flashcards
          </Button>
        </Box>
      )}

      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Save Flashcard Set</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your flashcard set.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Set Name"
            type="text"
            fullWidth
            value={setName}
            onChange={(e) => setSetName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={saveFlashcards} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
