'use client'
import {
    Button,
    Typography,
    Grid,
    Card,
    CardContent,
    Box,
    Container,
    AppBar,
    Toolbar,
} from '@mui/material'
import { styled } from '@mui/material/styles';
import ResponsiveAppBar from '../components/Appbar';

export default function Pricing() {
    const PlanCard = styled(Card)(({ theme }) => ({
        backgroundColor: '#1f1f1f', // dark background
        color: '#bb86fc', // primary color for text
        borderRadius: '10px',
        padding: '20px',
        textAlign: 'center',
        minHeight: '400px', // Increased min height for longer appearance
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        transition: 'transform 0.3s, background-color 0.3s',
        '&:hover': {
            transform: 'scale(1.05)',
            backgroundColor: '#3700b3', // darker shade on hover
        },
    }));

    const PlanContainer = styled(Grid)(({ theme }) => ({
        marginTop: '40px', // Increased margin for more space
        justifyContent: 'center',
    }));

    return (
        <Box sx={{ backgroundColor: '#121212', color: '#f0f0f0', minHeight: '100vh' }}>
            <ResponsiveAppBar /> {/* Navbar */}

            <Container maxWidth="lg" sx={{ paddingTop: '80px' }}> {/* Add paddingTop to account for the navbar */}
                <Box sx={{ my: 6, textAlign: 'center' }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Pricing
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, color: '#b0b0b0' }}>
                        Choose the plan that best suits your needs. Each plan comes with its own set of features to help you maximize your learning.
                    </Typography>

                    <PlanContainer container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={4}>
                            <PlanCard>
                                <CardContent>
                                    <Typography variant="h5" component="div" gutterBottom>
                                        Bronze Plan
                                    </Typography>
                                    <Typography variant="h6" sx={{ color: '#b0b0b0' }}>
                                        FREE
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Access to 50 flashcards
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Limited daily tests (5 tests/day)
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Custom flashcard creation
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            marginTop: '20px',
                                            backgroundColor: '#bb86fc',
                                            color: '#121212',
                                            '&:hover': {
                                                backgroundColor: '#f0f0f0', // Change hover color for visibility
                                                color: '#121212',
                                            },
                                        }}
                                    >
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
                                    <Typography variant="h6" sx={{ color: '#b0b0b0' }}>
                                        $5/month
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Access to 100 flashcards
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Enhanced review mode with spaced repetition
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Custom flashcard creation
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            marginTop: '20px',
                                            backgroundColor: '#bb86fc',
                                            color: '#121212',
                                            '&:hover': {
                                                backgroundColor: '#f0f0f0', // Change hover color for visibility
                                                color: '#121212',
                                            },
                                        }}
                                    >
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
                                    <Typography variant="h6" sx={{ color: '#b0b0b0' }}>
                                        $20/month
                                    </Typography>
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
                                    <Button
                                        variant="contained"
                                        sx={{
                                            marginTop: '20px',
                                            backgroundColor: '#bb86fc',
                                            color: '#121212',
                                            '&:hover': {
                                                backgroundColor: '#f0f0f0', // Change hover color for visibility
                                                color: '#121212',
                                            },
                                        }}
                                    >
                                        Join Waitlist
                                    </Button>
                                </CardContent>
                            </PlanCard>
                        </Grid>
                    </PlanContainer>
                </Box>
            </Container>
        </Box>
    )
}
