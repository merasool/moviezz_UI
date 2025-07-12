import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2cR3WQUDbuCUYPNSvOvgLdUvho8_y31s",
  authDomain: "movie-app-6bf18.firebaseapp.com",
  projectId: "movie-app-6bf18",
  storageBucket: "movie-app-6bf18.firebasestorage.app",
  messagingSenderId: "796039686186",
  appId: "1:796039686186:web:aabf725580b5874ad37b53",
  measurementId: "G-S3R60FMQXJ"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
