'use client';

import { Button, Typography, Grid, Card, CardContent, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import ResponsiveAppBar from '../components/Appbar';
import getStripe from '@/utils/get-stripe.js'; // Import getStripe utility

export default function Pricing() {
    const PlanCard = styled(Card)(({ theme }) => ({
        backgroundColor: '#1f1f1f',
        color: '#bb86fc',
        borderRadius: '15px',
        padding: '30px',
        textAlign: 'center',
        minHeight: '500px', // Increased height for larger boxes
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.3s, background-color 0.3s',
        '&:hover': {
            transform: 'scale(1.05)',
            backgroundColor: '#3700b3',
        },
    }));

    const PlanContainer = styled(Grid)(({ theme }) => ({
        marginTop: '20px',
        justifyContent: 'center',
        alignItems: 'stretch',
    }));

    const handleSubmit = async () => {
        try {
            const checkoutSession = await fetch('/api/checkout_sessions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    priceId: 'price_1Poo9HLzH1ehy79qtV3ugR07',
                }),
            });

            if (!checkoutSession.ok) {
                throw new Error('Failed to create checkout session');
            }

            const checkoutSessionJson = await checkoutSession.json();

            const stripe = await getStripe();
            const { error } = await stripe.redirectToCheckout({
                sessionId: checkoutSessionJson.id,
            });

            if (error) {
                console.warn(error.message);
            }
        } catch (error) {
            console.error('Error in handleSubmit:', error);
        }
    };

    return (
        <Box sx={{ backgroundColor: '#121212', color: '#f0f0f0', minHeight: '100vh' }}>
            <ResponsiveAppBar />

            <Container maxWidth="lg" sx={{ paddingTop: '80px' }}>
                <Box sx={{ my: 6, textAlign: 'center' }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Pricing
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: '#b0b0b0' }}>
                        Choose the plan that best suits your needs. Each plan comes with its own set of features to help you maximize your learning.
                    </Typography>

                    <PlanContainer container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={4}>
                            <PlanCard>
                                <CardContent>
                                    <Typography variant="h5" component="div" gutterBottom>
                                        Bronze Plan
                                    </Typography>
                                    <Typography variant="h6" sx={{ color: '#b0b0b0', mb: 2, textAlign: 'center' }}>
                                        FREE
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        50 flashcards
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        5 tests/day
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Custom flashcards
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Basic progress tracking
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Community support
                                    </Typography>
                                </CardContent>
                                <Button
                                    variant="contained"
                                    sx={{
                                        marginTop: 'auto',
                                        backgroundColor: '#bb86fc',
                                        color: '#121212',
                                        '&:hover': {
                                            backgroundColor: '#f0f0f0',
                                            color: '#121212',
                                        },
                                    }}
                                >
                                    Choose Plan
                                </Button>
                            </PlanCard>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <PlanCard>
                                <CardContent>
                                    <Typography variant="h5" component="div" gutterBottom>
                                        Silver Plan
                                    </Typography>
                                    <Typography variant="h6" sx={{ color: '#b0b0b0', mb: 2, textAlign: 'center' }}>
                                        $5/month
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        100 flashcards
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Spaced repetition
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Custom flashcards with images
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Enhanced progress tracking
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Email support
                                    </Typography>
                                </CardContent>
                                <Button
                                    variant="contained"
                                    sx={{
                                        marginTop: 'auto',
                                        backgroundColor: '#bb86fc',
                                        color: '#121212',
                                        '&:hover': {
                                            backgroundColor: '#f0f0f0',
                                            color: '#121212',
                                        },
                                    }}
                                    onClick={handleSubmit}
                                >
                                    Choose Plan
                                </Button>
                            </PlanCard>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <PlanCard>
                                <CardContent>
                                    <Typography variant="h5" component="div" gutterBottom>
                                        Gold Plan
                                    </Typography>
                                    <Typography variant="h6" sx={{ color: '#b0b0b0', mb: 2, textAlign: 'center' }}>
                                        $20/month
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Unlimited flashcards
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        AI recommendations
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Advanced progress tracking
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Custom flashcards with images and audio
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Priority support
                                    </Typography>
                                </CardContent>
                                <Button
                                    variant="contained"
                                    sx={{
                                        marginTop: 'auto',
                                        backgroundColor: '#bb86fc',
                                        color: '#121212',
                                        '&:hover': {
                                            backgroundColor: '#f0f0f0',
                                            color: '#121212',
                                        },
                                    }}
                                >
                                    Join Waitlist
                                </Button>
                            </PlanCard>
                        </Grid>
                    </PlanContainer>
                </Box>
            </Container>
        </Box>
    );
}
