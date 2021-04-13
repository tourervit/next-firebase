import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAPH5AX5EO3dJYZVB5PKzRKxCA7TCVywC0",
	authDomain: "nf-2021.firebaseapp.com",
	projectId: "nf-2021",
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

export { auth, firestore, storage };
