import React from 'react'
import { Container, Box, Typography, Toolbar } from '@mui/material'
import { SignUp } from '@clerk/nextjs'
import ResponsiveAppBar from '@/app/components/Appbarsignup'

export default function SignUpPage() {
  return (
    <Container
      maxWidth="100vw"
      disableGutters
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ResponsiveAppBar />
      <Toolbar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1,
          px: 2,
          mt: '62px'
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Sign Up
        </Typography>
        <Box sx={{ width: '100%', maxWidth: '400px', mt: 1 }}>
          <SignUp path="/sign-up" />
        </Box>
      </Box>
    </Container>
  )
}
