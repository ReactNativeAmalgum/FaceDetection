// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1bUFNU7jppvdSWC32jASy__UX21sMdrA",
  authDomain: "facedetection-f14a2.firebaseapp.com",
  projectId: "facedetection-f14a2",
  storageBucket: "facedetection-f14a2.firebasestorage.app",
  messagingSenderId: "523973783362",
  appId: "1:523973783362:web:ec8169e6cb0dffe14222db",
  measurementId: "G-86N4TK3LQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);