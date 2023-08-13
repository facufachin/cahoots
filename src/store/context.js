import React from 'react'
import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  databaseURL: "https://vialquiz-ea6a8.southamerica-east1.firebasedatabase.app",
  apiKey: "AIzaSyCVQuIPNV6lxmIXs2XHWUTzPkleI2Qo_o8",
  authDomain: "vialquiz-ea6a8.firebaseapp.com",
  projectId: "vialquiz-ea6a8",
  storageBucket: "vialquiz-ea6a8.appspot.com",
  messagingSenderId: "927740651049",
  appId: "1:927740651049:web:3c8f3912f9c20d859e5e38",
  measurementId: "G-5G5HCQLWSF"
};

firebase.initializeApp(firebaseConfig);

const StoreContext = React.createContext(firebase.firestore());
export const StoreProvider = StoreContext.Provider
export default StoreContext
