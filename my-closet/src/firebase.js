import {initializeApp} from "firebase/app";
import {connectAuthEmulator,
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut} from "firebase/auth";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyA7nL_3JNhwL3jQVlMktlXrznTs8KzZsu8",
    authDomain: "my-closet-b86ea.firebaseapp.com",
    projectId: "my-closet-b86ea",
    storageBucket: "my-closet-b86ea.firebasestorage.app",
    messagingSenderId: "869342760125",
    appId: "1:869342760125:web:b50b2865735b6c78033bd4"
});

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

