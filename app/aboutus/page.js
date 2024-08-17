'use client'
import { Box, Typography, Grid, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import ResponsiveAppBar from '../components/AppbarAboutUs';

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

// Style for the heading
const Heading = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#bb86fc',
  textShadow: '0 0 10px #3700b3, 0 0 20px #3700b3, 0 0 30px #3700b3, 0 0 40px #bb86fc',
  fontFamily: 'Roboto, sans-serif',
  marginBottom: theme.spacing(4),
}));

export default function AboutUs() {
  return (
    <Box>
      <ResponsiveAppBar />
      <TeamSection>
        <Heading variant="h4" component="h1" gutterBottom>
          Meet the Devs
        </Heading>
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
    </Box>
  );
}
