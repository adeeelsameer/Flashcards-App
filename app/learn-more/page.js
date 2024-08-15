import React from 'react';

const FaqPage = () => {
    const faqs = [
        {
            question: "How do I upgrade to a paid plan after using the 5 free flashcards?",
            answer: "You can upgrade to a paid plan by going to the subscription page in your account settings and selecting a plan that suits your needs. Stripe will handle the payment securely."
        },
        {
            question: "What payment methods are accepted for upgrading to a premium account?",
            answer: "We accept all major credit and debit cards through Stripe"
        },
        {
            question: "Will I be automatically charged after my free trial ends?",
            answer: "No, you will not be automatically charged. You will need to manually upgrade to a paid plan after your trial ends to continue using more flashcards."
        },
        {
            question: "Can I cancel my subscription at any time?",
            answer: "Yes, you can cancel your subscription at any time through your account settings. Your access to the premium features will continue until the end of your current billing cycle."
        },
        {
            question: "What happens if my payment fails?",
            answer: "If your payment fails, we will notify you via email. You will have a grace period to update your payment information and avoid interruption to your service."
        },
        {
            question: "Is there a refund policy if I’m not satisfied with the paid plan?",
            answer: "Yes, we offer a refund within the first 7 days of your subscription if you're not satisfied. Please contact our support team for assistance."
        },
        {
            question: "How can I update my billing information or payment method?",
            answer: "You can update your billing information or payment method by going to your account settings and selecting the 'Payment Information' section."
        }
    ];

    return (
        <div>
            <h1>Frequently Asked Questions</h1>
            <div>
                {faqs.map((faq, index) => (
                    <div key={index}>
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqPage;
