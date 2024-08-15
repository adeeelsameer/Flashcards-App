'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { Container, Box, Typography, AppBar, Toolbar, Button, Grid, Card, CardContent } from '@mui/material'
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { styled } from '@mui/material/styles'; // Changed import here
import ResponsiveAppBar from "./components/Navbar";

// Styled components for the plan cards
const PlanCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#ADD8E6', // light blue background
  color: '#0A3463', // dark blue text
  borderRadius: '10px',
  padding: '20px',
  textAlign: 'center',
  minHeight: '300px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

const PlanContainer = styled(Grid)(({ theme }) => ({
  marginTop: '20px',
  justifyContent: 'center',
}));

export default function Home() {

  const handleSubmit = async () => {
    const checkoutSession = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: { origin: 'http://localhost:3000' },
    })
    const checkoutSessionJson = await checkoutSession.json()

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    })

    if (error) {
      console.warn(error.message)
    }
  }

  return (
    <Box bgcolor={"black"} width="100%" height="100%" color="white">
      <ResponsiveAppBar></ResponsiveAppBar>
      <Box display={"flex"} flexDirection="column" justifyContent={"center"} alignItems={"center"} sx={{
        textAlign: 'center', my: 4, pt: {
          xs: '56px', md: '64px'
        }, height: {
          xs: 'calc(100vh - 56px)',
          md: 'calc(100vh - 64px)',
        },

      }} >
        <Typography variant="h2" component="h1" gutterBottom m="5px" sx={{
          color: '#fff',
          textShadow: '0 0 10px #29586c, 0 0 20px #29586c, 0 0 30px #29586c, 0 0 40px #87dafb, 0 0 70px #87dafb, 0 0 80px #87dafb, 0 0 100px #87dafb',
          fontFamily: 'Arial, sans-serif',
        }}>
          <b>Welcome to FLASHIFY</b>
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{
          color: '#fff',
          textShadow: '0 0 10px #29586c, 0 0 20px #29586c, 0 0 30px #29586c, 0 0 40px #87dafb, 0 0 70px #87dafb, 0 0 80px #87dafb, 0 0 100px #87dafb',
          fontFamily: 'Arial, sans-serif'
        }}>
          The easiest way to create flashcards using your text.
        </Typography>
        <Box m="30px">
          <Button variant="contained" color="primary" sx={{ mt: 2, mr: 2 }} href="/generate">
            Get Started
          </Button>

          <Button variant="outlined" color="primary" sx={{ mt: 2 }} href="/learn-more">
            Learn More
          </Button>
        </Box>
      </Box>

      <Box sx={{ my: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>Features</Typography>
        <Grid container spacing={4}>
          {/* Feature items */}
        </Grid>
      </Box>

      <Box sx={{ my: 6, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom>Pricing</Typography>
        <PlanContainer container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <PlanCard>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Bronze Plan
                </Typography>
                <Typography variant="h6">FREE</Typography>
                <Typography variant="body1" gutterBottom>
                  Access to 50 flashcards
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Limited daily tests (5 tests/day)
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Custom flashcard creation
                </Typography>
                <Button variant="contained" color="secondary" style={{ marginTop: '20px' }}>
                  Choose Plan
                </Button>
              </CardContent>
            </PlanCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <PlanCard>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Silver Plan
                </Typography>
                <Typography variant="h6">$5/month</Typography>
                <Typography variant="body1" gutterBottom>
                  Access to 100 flashcards
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Enhanced review mode with spaced repetition
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Custom flashcard creation
                </Typography>
                <Button variant="contained" color="secondary" style={{ marginTop: '20px' }}>
                  Choose Plan
                </Button>
              </CardContent>
            </PlanCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <PlanCard>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Gold Plan [Join Waitlist to Access]
                </Typography>
                <Typography variant="h6">$20/month</Typography>
                <Typography variant="body1" gutterBottom>
                  Access to unlimited flashcards
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Enhanced review mode with spaced repetition and AI recommendations
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Unlimited daily tests with adaptive difficulty
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Comprehensive statistics and progress tracking
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Custom flashcard creation with images
                </Typography>
                <Button variant="contained" color="secondary" style={{ marginTop: '20px' }}>
                  Join Waitlist
                </Button>
              </CardContent>
            </PlanCard>
          </Grid>
        </PlanContainer>
      </Box>
    </Box >
  );
}
