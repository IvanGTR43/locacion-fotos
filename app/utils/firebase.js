import firebase from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyCQVru7pRF84ubVrfAVdz9Kh5GPBwhwvhA",
    authDomain: "locaciones-32537.firebaseapp.com",
    projectId: "locaciones-32537",
    storageBucket: "locaciones-32537.appspot.com",
    messagingSenderId: "1060275077682",
    appId: "1:1060275077682:web:6b7fde3d7609e890e9722b"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)