import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDes7ueMJtYVMXbuVo6E8NWW40zVAdydpU",
    authDomain: "whatsapp-clone-83577.firebaseapp.com",
    projectId: "whatsapp-clone-83577",
    storageBucket: "whatsapp-clone-83577.appspot.com",
    messagingSenderId: "403974368892",
    appId: "1:403974368892:web:5a5b75d774c4835fbda3f9",
    measurementId: "G-SC4B3WKCYW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

