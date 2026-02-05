import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "bond-ee03b.firebaseapp.com",
  projectId: "bond-ee03b",
  storageBucket: "bond-ee03b.firebasestorage.app",
  messagingSenderId: "1021994570924",
  appId: "1:1021994570924:web:4555cd534661809dc43b09"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}


