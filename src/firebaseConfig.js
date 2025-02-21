import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDis__3PGGJR1opt_UIDfqccA1_xnbOvjA",
  authDomain: "zombible.firebaseapp.com",
  projectId: "zombible",
  storageBucket: "zombible.appspot.com", // Corregido
  messagingSenderId: "913317319481",
  appId: "1:913317319481:web:732ed11501c73206ae4ee8",
  measurementId: "G-FQDHJZ2TY9"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Agregamos Firestore

export { db };
