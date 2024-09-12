import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
	apiKey: "AIzaSyDes5ceORDUrcFUiiClbIg5YwcJcBrsqRU",
	authDomain: "insta-clone-90351.firebaseapp.com",
	projectId: "insta-clone-90351",
	storageBucket: "insta-clone-90351.appspot.com",
	messagingSenderId: "360314413759",
	appId: "1:360314413759:web:a677e6c2cb6f9a96961c0a",
	measurementId: "G-3EK2ZD9BZM"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };







