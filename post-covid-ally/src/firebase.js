import firebase from 'firebase'

// firebase config copied from first making it
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBsFgfRytHdSYjTcENHQBKmMUSNs-FK6X4",
    authDomain: "post-covid-ally.firebaseapp.com",
    projectId: "post-covid-ally",
    storageBucket: "post-covid-ally.appspot.com",
    messagingSenderId: "671399219053",
    appId: "1:671399219053:web:0fa9e206919a0f91321464",
    measurementId: "G-3GMXRKZFSQ"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db, auth}