import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdcuK2n4cuigE54mS_KKSUFbzD2UdvBfo",
  authDomain: "proyecto-final-react-pereyra.firebaseapp.com",
  projectId: "proyecto-final-react-pereyra",
  storageBucket: "proyecto-final-react-pereyra.appspot.com",
  messagingSenderId: "161271563362",
  appId: "1:161271563362:web:550bb44d62a08725e3fd3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
