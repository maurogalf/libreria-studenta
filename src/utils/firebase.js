import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyA9CNwbwkCdfpuMco-i3qjL1aRkb0VrXQc",
    authDomain: "libreria-studenta.firebaseapp.com",
    projectId: "libreria-studenta",
    storageBucket: "libreria-studenta.appspot.com",
    messagingSenderId: "33913987585",
    appId: "1:33913987585:web:d226ccc8dbb410f2925600"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;