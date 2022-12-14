// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMNZC6_VWua3wRRV8DhidefZk1DNqQfHk",
  authDomain: "react-e-commerce-6a492.firebaseapp.com",
  projectId: "react-e-commerce-6a492",
  storageBucket: "react-e-commerce-6a492.appspot.com",
  messagingSenderId: "944191725352",
  appId: "1:944191725352:web:9cf99569f5555b69d27a1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider =new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) =>{

    const userDocRef = doc(db,'users',userAuth.uid);

    const userData = await getDoc(userDocRef);

    if(!userData.exists()){

      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef,{
          displayName,email,createdAt
        })
      } catch (error) {
        console.log('error creating user', error.message)
        
      }

    }
    return userDocRef;


}