import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./GlobalStyles";
import "./index.css";
import App from "./App";
import { FirebaseContext } from "./context/firebase";

var config = {
  apiKey: "AIzaSyBKnNom0bt1JdqAyb2JMJlwoHyZFaeQN70",
  authDomain: "netflix-clone-appu.firebaseapp.com",
  projectId: "netflix-clone-appu",
  storageBucket: "netflix-clone-appu.appspot.com",
  messagingSenderId: "304460498205",
  appId: "1:304460498205:web:f6101a15ab6f90bee94df4",
};
const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
