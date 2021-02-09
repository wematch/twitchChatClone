import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyAEvuoYawQl-UdSB6k3HsFVUoP_1bWVHVQ",
  authDomain: "twitchchatclone.firebaseapp.com",
  databaseURL: "https://twitchchatclone-default-rtdb.firebaseio.com",
  projectId: "twitchchatclone",
  storageBucket: "twitchchatclone.appspot.com",
  messagingSenderId: "495494140434",
  appId: "1:495494140434:web:1dc91d75f70942d6347ecb",
  measurementId: "G-K4566TYGCW",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
