import * as firebase from "firebase/app";
import "firebase/auth";

var config = {
    apiKey: "AIzaSyD_23UErWGrQS_Eyf4-QkWjdVbcmHm2nF4",
    authDomain: "hellornfb-9e006.firebaseapp.com",
    databaseURL: "https://hellornfb-9e006.firebaseio.com",
    projectId: "hellornfb-9e006",
    storageBucket: "hellornfb-9e006.appspot.com",
    messagingSenderId: "275535105592"
  };
  const  firebaseapp=firebase.initializeApp(config);
  export default firebaseapp;