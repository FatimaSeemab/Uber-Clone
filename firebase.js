// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider,getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1utWRs7T-plAUFpLNpZfW9EpC1dBWYLE",
  authDomain: "uber-clone-4355d.firebaseapp.com",
  projectId: "uber-clone-4355d",
  storageBucket: "uber-clone-4355d.appspot.com",
  messagingSenderId: "286106651255",
  appId: "1:286106651255:web:f9b669a02f364ac0ef1472",
  measurementId: "G-D6PCYZWS6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider=new GoogleAuthProvider()
const auth=getAuth()

export {app,auth,provider}