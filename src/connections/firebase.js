import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV3_TaX2d9yY8rfKVkK1fpPO9aH5pQl-Q",
  authDomain: "chatnow-a2451.firebaseapp.com",
  projectId: "chatnow-a2451",
  storageBucket: "chatnow-a2451.appspot.com",
  messagingSenderId: "715220263111",
  appId: "1:715220263111:web:cf81dac310488966ad9ee2",
  measurementId: "G-CD896BSCV8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

