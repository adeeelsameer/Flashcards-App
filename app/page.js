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
import ResponsiveAppBar from "./components/Navbar";


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


    </Box >
  );
}
