// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9HMDlkLgY0fmMZ2S_dx7n5ylT2iG09PA",
  authDomain: "my-portfolio--nextjs.firebaseapp.com",
  projectId: "my-portfolio--nextjs",
  storageBucket: "my-portfolio--nextjs.appspot.com",
  messagingSenderId: "399080272327",
  appId: "1:399080272327:web:e75a2b684b6ec81a25e9e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();


export { auth, googleProvider, db };
