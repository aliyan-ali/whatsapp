// import { initializeApp } from "firebase/app";
// import firebaseConfig from "./FirebaseInit";
// import {
//     getFirestore,
//     collection,
//     addDoc,
//     doc,
//     setDoc,
//     onSnapshot,
// } from "firebase/firestore";
// import {
//     getAuth,
//     signInWithEmailAndPassword,
//     createUserWithEmailAndPassword,
//     onAuthStateChanged,
// } from "firebase/auth";

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// // const storage = initializeApp.storage();


// export {
//     auth,
//     db,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     collection,
//     addDoc,
//     onAuthStateChanged,
//     doc,
//     setDoc,
//     onSnapshot,
//     storage
// };



import { initializeApp } from 'firebase/app';
import firebaseConfig from './FirebaseInit';
import {
    getFirestore,
    collection,
    addDoc,
    doc,
    setDoc,
    onSnapshot,
    query,
    where,
    getDocs,
    updateDoc,
    getDoc,
    deleteDoc, 
    serverTimestamp
} from 'firebase/firestore';
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export {
    auth,
    db,
    storage,
    ref,
    uploadBytes,
    getDownloadURL,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    collection,
    addDoc,
    onAuthStateChanged,
    doc,
    setDoc,
    onSnapshot,
    signOut,
    query,
    where,
    getDocs,
    updateDoc,
    getDoc,
    deleteDoc, 
    serverTimestamp
};