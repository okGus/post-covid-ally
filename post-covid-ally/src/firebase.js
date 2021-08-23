import firebase from 'firebase'

// firebase config copied from first making it
const firebaseApp = firebase.initializeApp({

})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db, auth}