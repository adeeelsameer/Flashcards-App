import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { SignIn } from '@clerk/nextjs';
import ResponsiveAppBar from '@/app/components/AppbarLogin';

export default function SignInPage() {
  return (
    <Container
      maxWidth="100vw"
      disableGutters
      sx={{
        height: '100vh',
        overflow: 'hidden',
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
          mt: { xs: '64px', md: '80px' },
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#f0f0f0' }}>
          Sign In
        </Typography>
        <Box sx={{ width: '100%', maxWidth: '400px', mt: 1 }}>
          <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        </Box>
      </Box>
    </Container>
  );
}
