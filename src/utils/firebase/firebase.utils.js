// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc,collection,writeBatch,query,getDocs} from 'firebase/firestore';

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

export const auth = getAuth(app);
export const signInWithGooglePopup = async () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalInformation) =>{

    const userDocRef = doc(db,'users',userAuth.uid);

    const userData = await getDoc(userDocRef);

    if(!userData.exists()){

      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef,{
          displayName,email,createdAt,...additionalInformation
        })
      } catch (error) {
        console.log('error creating user', error.message)
        
      }

    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPsw = async (email,password) =>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth,email,password);
}

export const mySignInWithUserAndPsw = async(email,password)=>{
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth,email,password);
}

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback);

export const addCollectionAndDocuments = async(collectionKey,objectsToAdd)=>{
  const collectionRef = collection(db,collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach(object=>{
    const docRef = doc(collectionRef,object.title.toLowerCase());
    batch.set(docRef,object);
    console.log('done!!');
  })

  await batch.commit();
}

export const getCategoriesAndDocuments = async()=>{
  const collectionRef = collection(db,'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc,docSnapshot)=>{
    const {title,items} = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  },{})

  return categoryMap;

}