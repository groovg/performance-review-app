// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "performance-review-app-e8627.firebaseapp.com",
  projectId: "performance-review-app-e8627",
  storageBucket: "performance-review-app-e8627.appspot.com",
  messagingSenderId: "701804720617",
  appId: "1:701804720617:web:18cb494332e598d6999b78",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const googleAuthProvider = new GoogleAuthProvider();
export const githubAuthProvider = new GithubAuthProvider();
