import {initializeApp} from "firebase/app";
import {connectAuthEmulator, getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { connectDatabaseEmulator } from "firebase/database";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";



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
if (location.hostname === "localhost") {
    // Point to the RTDB emulator running on localhost.
    connectDatabaseEmulator(db, "127.0.0.1", 9000);
}

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(firebaseApp);

export const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, "http://localhost:9099");

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

export const logout = async (auth) => {
    await signOut(auth);
    console.log(auth.currentUser);
}

export const checkLoggedIn = (auth, navigate) => {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            navigate("/login");
        }
    });
};