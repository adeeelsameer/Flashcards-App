'use client'
import {
    Button,
    Typography,
    Grid,
    Card,
    CardContent,
    Box,
    CardActionArea,
} from '@mui/material'
import {
    SignedIn,
    SignedOut,
    UserButton,
    useUser
} from '@clerk/nextjs'
import { styled } from '@mui/material/styles'; // Changed import here

export default function pricing() {
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
    return (
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
    )
}