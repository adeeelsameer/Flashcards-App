'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Success = () => {
    const router = useRouter();

    useEffect(() => {
        // logic to update the user's subscription status in Firebase
        // based on the checkout session ID
        const { session_id } = router.query;

        // Fetch the session details from Stripe or update Firebase here

    }, [router]);

    return (
        <div>
            <h1>Thank you for your purchase!</h1>
            <p>Your silver subscription has been activated.</p>
        </div>
    );
};

export default Success;
