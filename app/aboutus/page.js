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
      <TeamSection >
        <Heading variant="h4" component="h1" gutterBottom mt="50px">
          Meet the Devs
        </Heading>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <TeamMember>
              <StyledAvatar src="/images/Adil_Sameer.jpg" alt="Adil Sameer" />
              <Typography variant="h6">Adil Sameer</Typography>
              <Typography variant="body1">Computer Science @ University of British Columbia | Front-End Developer | UI Design Enthusiast</Typography>
            </TeamMember>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TeamMember>
              <StyledAvatar src="/images/Bhavana_Gupta.jpg" alt="Bhavana Gupta" />
              <Typography variant="h6">Bhavana Gupta</Typography>
              <Typography variant="body1">Data Science @ IIT Madras | CS @ SAU | Python, ML, and Web Developer | Top Programming Voice</Typography>
            </TeamMember>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TeamMember>
              <StyledAvatar src="/images/Rabia_Ghafoor.jpeg" alt="Rabia Ghafoor" />
              <Typography variant="h6">Rabia Ghafoor</Typography>
              <Typography variant="body1">Computer Science @ IU Bloomington | President @ INgineering at IU</Typography>
            </TeamMember>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TeamMember>
              <StyledAvatar src="/images/Vivek_Vardhan_Kalyanapu.png" alt="Vivek Vardhan" />
              <Typography variant="h6">Vivek Vardhan Kalyanapu</Typography>
              <Typography variant="body1">Master’s in CS @ University of Alabama at Birmingham | ECE @ GITAM | Full Stack | React, Node.js, AWS</Typography>
            </TeamMember>
          </Grid>
        </Grid>
      </TeamSection>
    </Box>
  );
}
