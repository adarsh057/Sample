import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



export const firebaseConfig ={
    apiKey: "AIzaSyBgp649eVQr4OTt4CZ9LnikPs5QDFPJ-0k",
  authDomain: "otpone-b7442.firebaseapp.com",
  projectId: "otpone-b7442",
  storageBucket: "otpone-b7442.appspot.com",
  messagingSenderId: "991636960379",
  appId: "1:991636960379:web:b2d4d2c85ac870b1a21ede",
  measurementId: "G-9Z6SJ18XZ5"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}