
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAdLS8TQ0d3OhauckerC0TTCqdkmq4V304",
    authDomain: "fg-musica.firebaseapp.com",
    projectId: "fg-musica",
    storageBucket: "fg-musica.appspot.com",
    messagingSenderId: "257212842681",
    appId: "1:257212842681:web:76cc0e67bc21c7ba8fd168"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)