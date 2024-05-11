// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF_4PwHaFYejpj_JYgaA5pDV4SyicIo2M",
  authDomain: "cars-talog.firebaseapp.com",
  projectId: "cars-talog",
  storageBucket: "cars-talog.appspot.com",
  messagingSenderId: "862346088885",
  appId: "1:862346088885:web:840dd9db456834ad3549fc",
  measurementId: "G-X8MP59200M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)