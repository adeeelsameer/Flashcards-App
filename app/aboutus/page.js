'use client'
import { Box, Typography, Grid, Avatar, Fab } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ResponsiveAppBar from '../components/AppbarAboutUs';

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

const TeamMember = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '20px',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: '120px',
  height: '120px',
  marginBottom: '10px',
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#bb86fc',
  textShadow: '0 0 10px #3700b3, 0 0 20px #3700b3, 0 0 30px #3700b3, 0 0 40px #bb86fc',
  fontFamily: 'Roboto, sans-serif',
  marginBottom: theme.spacing(4),
}));

const StyledFab = styled(Fab)(({ theme }) => ({
  margin: '5px',
  backgroundColor: '#3700b3',
  color: '#f0f0f0',
  '&:hover': {
    backgroundColor: '#bb86fc',
  },
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
              <StyledAvatar src="/images/Adil_Sameer.jpg" alt="Adil Sameer" />
              <Typography variant="h6">Adil Sameer</Typography>
              <Typography variant="body1">Computer Science @ University of British Columbia | Front-End Developer | UI Design Enthusiast</Typography>
              <Box mt={2}>
                <StyledFab size="small" href="https://www.linkedin.com/in/muhammad-adil-sameer/" target="_blank">
                  <LinkedInIcon />
                </StyledFab>
              </Box>
            </TeamMember>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TeamMember>
              <StyledAvatar src="/images/Bhavana_Gupta.jpg" alt="Bhavana Gupta" />
              <Typography variant="h6">Bhavana Gupta</Typography>
              <Typography variant="body1">Data Science @ IIT Madras | CS @ SAU | Python, ML, and Web Developer | Top Programming Voice</Typography>
              <Box mt={2}>
                <StyledFab size="small" href="https://www.linkedin.com/in/bhavanagupta1st/" target="_blank">
                  <LinkedInIcon />
                </StyledFab>
              </Box>
            </TeamMember>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TeamMember>
              <StyledAvatar src="/images/Rabia_Ghafoor.jpeg" alt="Rabia Ghafoor" />
              <Typography variant="h6">Rabia Ghafoor</Typography>
              <Typography variant="body1">Computer Science @ IU Bloomington | President @ INgineering at IU | Interested in SWE and Product Management</Typography>
              <Box mt={2}>
                <StyledFab size="small" href="https://www.linkedin.com/in/rabiaaghafoor/" target="_blank">
                  <LinkedInIcon />
                </StyledFab>
              </Box>
            </TeamMember>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TeamMember>
              <StyledAvatar src="/images/Vivek_Vardhan_Kalyanapu.png" alt="Vivek Vardhan" />
              <Typography variant="h6">Vivek Vardhan Kalyanapu</Typography>
              <Typography variant="body1">Master’s in CS @ University of Alabama at Birmingham | ECE @ GITAM | Full Stack | React, Node.js, AWS</Typography>
              <Box mt={2}>
                <StyledFab size="small" href="https://www.linkedin.com/in/vivekvardhank/" target="_blank">
                  <LinkedInIcon />
                </StyledFab>

              </Box>
            </TeamMember>
          </Grid>
        </Grid>
      </TeamSection>
    </Box>
  );
}
