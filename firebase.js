// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8jse5-Z5XLMSLm-rQI9m80OA5ZjTbOjA",
  authDomain: "damien-cheung.firebaseapp.com",
  projectId: "damien-cheung",
  storageBucket: "damien-cheung.appspot.com",
  messagingSenderId: "823449417777",
  appId: "1:823449417777:web:adc9743c3a68a9e8397d10",
  measurementId: "G-R3FRH6CZG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);