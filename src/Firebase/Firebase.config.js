// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkNwCZmDo_YFcqJwmaf6tVKTuYNcnVpOc",
  authDomain: "playtimee-paradise.firebaseapp.com",
  projectId: "playtimee-paradise",
  storageBucket: "playtimee-paradise.appspot.com",
  messagingSenderId: "762589718930",
  appId: "1:762589718930:web:9ff85ae2882a6cca3c794b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;