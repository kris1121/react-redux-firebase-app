import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyDeIZCmhPpGRK5iW97pG1TZydwxQhX8J-w",
    authDomain: "mario-plan-6da67.firebaseapp.com",
    databaseURL: "https://mario-plan-6da67.firebaseio.com",
    projectId: "mario-plan-6da67",
    storageBucket: "mario-plan-6da67.appspot.com",
    messagingSenderId: "976401564732",
    appId: "1:976401564732:web:cbd1d6b1d6d400d34f6f39",
    measurementId: "G-Y5RQ622392"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
//   firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase