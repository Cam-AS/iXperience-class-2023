// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAPBMbS64BYF6H5pGkA9i-Gda3wyGmeuaI',
  authDomain: 'task-list-s2.firebaseapp.com',
  projectId: 'task-list-s2',
  storageBucket: 'task-list-s2.appspot.com',
  messagingSenderId: '336927018243',
  appId: '1:336927018243:web:ba249824a4ea749c2a6d36',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
// const auth = getAuth(app);

export { db, storage };
