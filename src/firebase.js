import Firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyDfhFG5B-xO8ep5p3t6lftu43Vs8iGf18U",
    authDomain: "mobile-flashcards-5dc80.firebaseapp.com",
    databaseURL: "https://mobile-flashcards-5dc80.firebaseio.com",
    projectId: "mobile-flashcards-5dc80",
    storageBucket: "mobile-flashcards-5dc80.appspot.com",
    messagingSenderId: "737630528024",
    appId: "1:737630528024:web:d0b66c0ccce5500b8e196d"
};

let app = Firebase.initializeApp(firebaseConfig);

export const db = app.database()
