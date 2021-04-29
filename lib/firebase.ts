import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: "nf-2021.appspot.com",
	messagingSenderId: "520299075560",
	appId: "1:520299075560:web:26ed535af96d59d661765d",
	measurementId: "G-KCD0MRXX10",
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { auth, firestore, storage, googleAuthProvider };
