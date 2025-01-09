import { initializeApp } from "firebase/app";
import {
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { connectDatabaseEmulator, getDatabase } from "firebase/database";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyA7nL_3JNhwL3jQVlMktlXrznTs8KzZsu8",
  authDomain: "my-closet-b86ea.firebaseapp.com",
  projectId: "my-closet-b86ea",
  storageBucket: "my-closet-b86ea.firebasestorage.app",
  messagingSenderId: "869342760125",
  appId: "1:869342760125:web:b50b2865735b6c78033bd4",
  databaseURL: "https://my-closet-b86ea-default-rtdb.firebaseio.com/",
});

const db = getDatabase();
// if (location.hostname === "localhost") {
//   // Point to the RTDB emulator running on localhost.
//   connectDatabaseEmulator(db, "127.0.0.1", 9000);
// }

export const auth = getAuth(firebaseApp);
// connectAuthEmulator(auth, "http://localhost:9099");

export const loginEmailAndPassword = async (auth, email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Login error:", error.message);
    throw error;
  }
};

export const createAccount = async (auth, email, password) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Register error:", error.message);
    throw error;
  }
};

export const logout = (auth, navigate) => {
  signOut(auth)
    .then(() => {
      console.log(auth.currentUser);
      navigate("/login");
    })
    .catch((error) => {
      console.error("Logout error:", error.message);
    });
};
