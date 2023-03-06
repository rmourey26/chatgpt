// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC06RGHeE0kBAKkJWDDsJ9X3AvK817h5Rw",
  authDomain: "quantumone-364019.firebaseapp.com",
  projectId: "quantumone-364019",
  storageBucket: "quantumone-364019.appspot.com",
  messagingSenderId: "20750751707",
  appId: "1:20750751707:web:d93029ded07baeb0dd79fe",
  measurementId: "G-EH3MFLRYSW"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
