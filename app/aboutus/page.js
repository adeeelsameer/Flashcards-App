'use client'
import { Box, Typography, Grid, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

// Style for the section
const TeamSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#121212',
  color: 'white',
  padding: '40px 20px',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
}));

// Style for individual team member
const TeamMember = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '20px',
}));

// Team member headshot style
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: '120px',
  height: '120px',
  marginBottom: '10px',
}));

export default function AboutUs() {
  return (
    <TeamSection>
      <Typography variant="h4" component="h1" gutterBottom>
        Meet the Devs
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <TeamMember>
            <StyledAvatar src="/path-to-adil-headshot.jpg" alt="Adil Sameer" />
            <Typography variant="h6">Adil Sameer</Typography>
            <Typography variant="body1">This is a sample intro text</Typography>
          </TeamMember>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TeamMember>
            <StyledAvatar src="/path-to-bhavana-headshot.jpg" alt="Bhavana Gupta" />
            <Typography variant="h6">Bhavana Gupta</Typography>
            <Typography variant="body1">This is a sample intro text</Typography>
          </TeamMember>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TeamMember>
            <StyledAvatar src="/path-to-rabia-headshot.jpg" alt="Rabia Ghafoor" />
            <Typography variant="h6">Rabia Ghafoor</Typography>
            <Typography variant="body1">This is a sample intro text</Typography>
          </TeamMember>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TeamMember>
            <StyledAvatar src="/path-to-vivek-headshot.jpg" alt="Vivek Vardhan" />
            <Typography variant="h6">Vivek Vardhan</Typography>
            <Typography variant="body1">This is a sample intro text</Typography>
          </TeamMember>
        </Grid>
      </Grid>
    </TeamSection>
  );
}
