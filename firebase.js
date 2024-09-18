import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu1x50C_rO6IWINUhsohZcZJ10iHOHNqU",
  authDomain: "ai-chatbot-b25c8.firebaseapp.com",
  projectId: "ai-chatbot-b25c8",
  storageBucket: "ai-chatbot-b25c8.appspot.com",
  messagingSenderId: "741194314088",
  appId: "1:741194314088:web:453dc03e55adb31115e6dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {app, auth, provider};