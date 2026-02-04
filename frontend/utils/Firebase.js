import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "bearandbond.firebaseapp.com",
  projectId: "bearandbond",
  storageBucket: "bearandbond.firebasestorage.app",
  messagingSenderId: "588174887971",
  appId: "1:588174887971:web:080d6b62a4d31c35ecf596"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}


