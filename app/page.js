'use client'
import Image from "next/image";
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ResponsiveAppBar from "./components/Navbar";

const HeartButton = styled('button')({
  position: 'fixed',
  bottom: 20,
  right: 20,
  backgroundColor: '#ff4081',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  width: 50,
  height: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '24px',
  cursor: 'pointer',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    backgroundColor: '#f50057',
  },
});

export default function Home() {
  const openWaitlist = () => {
    // Open the Tally form in a new tab
    window.open('https://tally.so/r/w7oa2A', '_blank');
  };

  return (
    <Box width="100vw" height="100vh" sx={{ backgroundImage: 'linear-gradient(to right, #121212, #2c2c2c)', color: 'white', overflow: 'hidden' }}>
      <ResponsiveAppBar />
      <Box display={"flex"} flexDirection="column" justifyContent={"center"} alignItems={"center"} sx={{
        textAlign: 'center', pt: {
          xs: '56px', md: '64px'
        }, height: {
          xs: 'calc(100vh - 56px)',
          md: 'calc(100vh - 64px)',
        },
      }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{
          color: '#bb86fc',
          textShadow: '0 0 10px #3700b3, 0 0 20px #3700b3, 0 0 30px #3700b3, 0 0 40px #bb86fc',
          fontFamily: 'Arial, sans-serif',
        }}>
          <b>Welcome to FLASHIFY.AI</b>
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{
          color: '#f0f0f0',
          textShadow: '0 0 10px #3700b3, 0 0 20px #3700b3, 0 0 30px #3700b3, 0 0 40px #bb86fc',
          fontFamily: 'Arial, sans-serif'
        }}>
          The easiest way to create flashcards using your text.
        </Typography>
        <Box display="flex" flexDirection="column" gap="16px">
          <Box mt="30px" display="flex" flexDirection="row" gap="16px">
            <Button variant="outlined" sx={{
              borderColor: '#bb86fc',
              color: '#bb86fc',
              "&:hover": { backgroundColor: '#3700b3', color: 'white', borderColor: '#3700b3' },
            }} href="/aboutus">
              Meet the Devs
            </Button>
            <Button variant="outlined" sx={{
              borderColor: '#bb86fc',
              color: '#bb86fc',
              "&:hover": { backgroundColor: '#3700b3', color: 'white', borderColor: '#3700b3' },
            }} onClick={openWaitlist}>
              Join Waitlist
            </Button>
          </Box>
          <Button variant="contained" sx={{
            backgroundColor: '#bb86fc',
            color: 'white',
            "&:hover": { backgroundColor: '#3700b3', color: 'white' },
          }} href="/generate">
            Get Started
          </Button>
        </Box>
      </Box>
      <Box sx={{ position: 'absolute', bottom: 0, width: '100%', py: 2, bgcolor: '#121212', textAlign: 'center' }}>
        <Typography variant="body2" sx={{ color: '#f0f0f0', fontFamily: 'Arial, sans-serif' }}>
          Made with ♡ by our team
        </Typography>
      </Box>
      <HeartButton
        data-tally-open="w7oa2A"
        data-tally-emoji-text="👋"
        data-tally-emoji-animation="wave"
        aria-label="Open Waitlist"
      >
        ❤️
      </HeartButton>
    </Box>
  );
}
