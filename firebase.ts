import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnUZHUI8E_aY6pYYkD4Qi61x4hDStRBbU",
  authDomain: "chatgpt-clone-8e998.firebaseapp.com",
  projectId: "chatgpt-clone-8e998",
  storageBucket: "chatgpt-clone-8e998.appspot.com",
  messagingSenderId: "678812836532",
  appId: "1:678812836532:web:ac86c6c457388a5df5ade1",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
