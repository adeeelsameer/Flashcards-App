import React from 'react'
import { Container, Box, Typography, AppBar, Toolbar, Button } from '@mui/material'
import { SignIn, SignUp } from '@clerk/nextjs'
import Link from 'next/link'
import ResponsiveAppBar from '@/app/components/Appbarsignup'

export default function SignUpPage() {
  return <Container
    maxWidth="100vw"
    disableGutters
    sx={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <ResponsiveAppBar />
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 64px)',
        px: 2,
        mt: { xs: '160px', md: '110px' },
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Sign Up
      </Typography>
      <Box sx={{ width: '100%', maxWidth: '400px', mt: 1 }}>
        <SignUp />
      </Box>
    </Box>
  </Container>
}