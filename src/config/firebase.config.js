import {getApps, getApp, initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCN1ZWZlpJPVAFlLjLOQbZ72OnSvjyBFeY",
    authDomain: "react-codepen.firebaseapp.com",
    projectId:"react-codepen",
    storageBucket:"react-codepen.appspot.com",
    messagingSenderId: "890250574437",
    appId: "1:890250574437:web:5a664efe52edcc2c65e48c"
  };

  const app =  initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const db = getFirestore(app);

  export {app, auth, db};