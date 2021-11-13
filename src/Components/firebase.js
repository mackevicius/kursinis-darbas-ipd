import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDeHZ701IFPERbUQuGdvVDkuAdN1gd17N8",
  authDomain: "fundamentalkey.firebaseapp.com",
  projectId: "fundamentalkey",
  storageBucket: "fundamentalkey.appspot.com",
  messagingSenderId: "169365830357",
  appId: "1:169365830357:web:8e9bf6bf981dd41c8c405c",
  measurementId: "G-WYWRRP39MX",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();

export default app;
