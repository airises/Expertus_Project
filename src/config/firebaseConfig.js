import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCCW2Fe3fXTGEpJ4F7rGUJjyiEfqhvzFCA",
  authDomain: "prof-photo-436bb.firebaseapp.com",
  projectId: "prof-photo-436bb",
  storageBucket: "prof-photo-436bb.appspot.com",
  messagingSenderId: "80196578718",
  appId: "1:80196578718:web:6ea42a4505e6406211ba8f",
  measurementId: "G-2YEHRHMJR4",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
