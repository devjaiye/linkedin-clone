import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCdQQ8rigZ6UYdpV-e5ElEcmpIpoKcGNtk",
  authDomain: "linkedin-clone-25bff.firebaseapp.com",
  projectId: "linkedin-clone-25bff",
  storageBucket: "linkedin-clone-25bff.appspot.com",
  messagingSenderId: "667064524195",
  appId: "1:667064524195:web:638921216539ce27b00e16"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}