import firebase from  'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyAxSyBmcXVYIkdzBjU4vOmN-SLVwr5ypjU",
    authDomain: "rn-timelime.firebaseapp.com",
    databaseURL: "https://rn-timelime.firebaseio.com",
    projectId: "rn-timelime",
    storageBucket: "rn-timelime.appspot.com",
    messagingSenderId: "427769882120",
    appId: "1:427769882120:web:f127e0516d4a41be0353bd",
    measurementId: "G-L4F7NZ57PN"
  })
  const database = firebase.database();
  export const auth = firebase.auth();
  export default database;
  