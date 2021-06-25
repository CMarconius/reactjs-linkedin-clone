import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNpxO1f9zRF9oIEiwU7QXT0T39_6OKAkU",
    authDomain: "cm-reactjs-linkedin-clone.firebaseapp.com",
    projectId: "cm-reactjs-linkedin-clone",
    storageBucket: "cm-reactjs-linkedin-clone.appspot.com",
    messagingSenderId: "158358487881",
    appId: "1:158358487881:web:84fcea2e9fcce5de1a9098",
    measurementId: "G-CNM2CW7HMS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;