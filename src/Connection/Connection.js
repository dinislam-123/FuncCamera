
import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyAQk0a1tg1D1_BUHikaepJGCtkYisjb4jo",
  authDomain: "reactbuysell.firebaseapp.com",
  databaseURL: "https://reactbuysell.firebaseio.com",
  projectId: "reactbuysell",
  storageBucket: "reactbuysell.appspot.com",
  messagingSenderId: "597664386430",
  appId: "1:597664386430:web:848f4ec10cd956f0f4372f"
};


let app = firebase.initializeApp(config)
export default firebase1 = app.database()
