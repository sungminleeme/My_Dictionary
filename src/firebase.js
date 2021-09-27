import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    // config
    apiKey: "AIzaSyA_S8oLUipe5IdmDUP5tIQYPUbODRk0y1g",
    authDomain: "my-dictionary-a0cde.firebaseapp.com",
    projectId: "my-dictionary-a0cde",
    storageBucket: "my-dictionary-a0cde.appspot.com",
    messagingSenderId: "704829435506",
    appId: "1:704829435506:web:78505d31b8d34057531ceb",
    measurementId: "G-SWH0MJWYT3"
      };

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export {firestore};