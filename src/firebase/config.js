import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyB9jv7BKLAhobjU0MBEXS9cgoJVJcDD16E",
	authDomain: "react-firegram-c597a.firebaseapp.com",
	projectId: "react-firegram-c597a",
	storageBucket: "react-firegram-c597a.appspot.com",
	messagingSenderId: "158661631487",
	appId: "1:158661631487:web:c3591bd686b0cd2d4a9bca",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Use this variable to interact with the Storage (Store Images)
const projectStorage = firebase.storage();

// Use this variable to interact with the Firestore Database
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
