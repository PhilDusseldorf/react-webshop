// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnjV83fS8G8htM9EpgnMEPPSfgQTjcffg",
  authDomain: "react-webshop-db-3d89f.firebaseapp.com",
  projectId: "react-webshop-db-3d89f",
  storageBucket: "react-webshop-db-3d89f.appspot.com",
  messagingSenderId: "517975534258",
  appId: "1:517975534258:web:d9b884b418e577afe5b7ab",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) {
    console.log("error creating the user: no auth found!");
    return;
  }

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserDefault = async (email, password) => {
  let promise = undefined;
  if (!email || !password) {
    console.log("error creating the user: no email or password found!");
    return;
  }
    return await createUserWithEmailAndPassword(auth, email, password);
};
