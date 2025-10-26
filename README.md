# ⚡ Flashcards-App

**Flashcards-App** is a powerful AI-powered SaaS application that generates personalized flashcards using AI. Built with **Next.js**, **Clerk**, **Firebase**, **OpenAI**, and **Stripe**, this app delivers a seamless and secure experience for learners and educators alike.

Link to the website: https://flashcards-zeta-ten.vercel.app/

---

## 🔑 Key Features

- 🎯 **AI Flashcard Generation**  
  Automatically generate high-quality flashcards using OpenAI's GPT model.

- 👥 **User Authentication with Clerk**  
  Fast and secure authentication, account management, and session handling.

- 🔐 **Secure Data Storage**  
  Store user-generated flashcards and data safely with Firebase Firestore.

- 💳 **Flexible Subscription Tiers**  
  Monetization through Stripe-powered Bronze, Silver, and Gold plans.

- 📱 **Responsive UI**  
  Optimized layout for both desktop and mobile experiences.

---

## 🛠️ Getting Started

### ✅ Prerequisites

Before you begin, ensure you have the following:

- [Node.js](https://nodejs.org/) installed
- A [Firebase](https://firebase.google.com/) project with Firestore enabled
- An [OpenAI](https://platform.openai.com/signup) API key
- A [Stripe](https://dashboard.stripe.com/register) account
- A [Clerk](https://clerk.dev/) account for authentication

---

### 📦 Running the app

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Rabia-Ghafoor/Flashcards-App.git
   cd Flashcards-App

   npm install
   
    # Firebase
    NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key

    # OpenAI
   ```

2. **Create Environment Variables**
    ```env
    NEXT_PUBLIC_OPENAI_API_KEY=your-openai-api-key
    
    # Clerk
    NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-frontend-api
    CLERK_API_KEY=your-clerk-api-key
    
    # Stripe
    STRIPE_SECRET_KEY=your-stripe-secret-key
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
    ```
3. **Start the development server**
   ```bash
   npm run dev
   ```

    Visit http://localhost:3000 in your browser to view the app.

### 🤝 Contributing
We welcome contributions! If you would like to report a bug or request a feature, please open an issue or submit a pull request.

