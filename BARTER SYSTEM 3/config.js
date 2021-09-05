import firebase from "firebase"
require("@firebase/firestore")


var firebaseConfig = {
    apiKey: "AIzaSyAHRUVOO9rCSpfeJUBls5jS9Ukjm5N6b_M",
    authDomain: "grocery-78.firebaseapp.com",
    projectId: "grocery-78",
    storageBucket: "grocery-78.appspot.com",
    messagingSenderId: "73727840677",
    appId: "1:73727840677:web:dd4e870cefc059c688584c"
  };
  
 if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
 }

  export default firebase.firestore()