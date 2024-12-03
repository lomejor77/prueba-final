// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxoqFgSPFFMFRuZhhEtuFlf3X-NJ4LPoA",
    authDomain: "prueba7-35a64.firebaseapp.com",
    projectId: "prueba7-35a64",
    storageBucket: "prueba7-35a64.firebasestorage.app",
    messagingSenderId: "836668433956",
    appId: "1:836668433956:web:f9a1b65a5be5e4ed39dab1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp