if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
    apiKey: "AIzaSyB_BtQkV2JZypjz9PJwCm8eXfVxTA3qRS8",
    authDomain: "friendlychat-9ecdc.firebaseapp.com",
    databaseURL: "https://friendlychat-9ecdc.firebaseio.com",
    projectId: "friendlychat-9ecdc",
    storageBucket: "friendlychat-9ecdc.appspot.com",
    messagingSenderId: "249363397158"
});