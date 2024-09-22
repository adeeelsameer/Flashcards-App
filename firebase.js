// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGRlkQebtre37-ylIFTi2Cx4-etEWE-AU",
    authDomain: "flashify-da544.firebaseapp.com",
    projectId: "flashify-da544",
    storageBucket: "flashify-da544.appspot.com",
    messagingSenderId: "554311383096",
    appId: "1:554311383096:web:142db6fbb4c52e64148ecd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }