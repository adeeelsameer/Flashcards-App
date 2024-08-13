// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC92d453a_eM87XCP7A9yWw9IMLin19HQ",
  authDomain: "flashcard-cfe00.firebaseapp.com",
  projectId: "flashcard-cfe00",
  storageBucket: "flashcard-cfe00.appspot.com",
  messagingSenderId: "610969962472",
  appId: "1:610969962472:web:91750420a325d44d67c65d",
  measurementId: "G-PRT946302X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);