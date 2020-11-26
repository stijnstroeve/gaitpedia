import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBrXN5-hrOLGFlZjFnZ1iC8dBfYcP4mpF8",
    authDomain: "gaitpedia.firebaseapp.com",
    databaseURL: "https://gaitpedia.firebaseio.com",
    projectId: "gaitpedia",
    storageBucket: "gaitpedia.appspot.com",
    messagingSenderId: "1058140372059",
    appId: "1:1058140372059:web:1e9984c0e669a4d966937e",
    measurementId: "G-994L0ZW2L4"};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();