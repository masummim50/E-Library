import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../Config/FirebaseConfig';
import {UserContext} from '../../App'

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
  }
  var googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn =()=> {
        firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
          const newUser = {name: result.user.displayName, email: result.user.email}
          setLoggedInUser(newUser)
        }).catch((error) => {
          console.log(error.message)
      });
  }
  return (
    <div>
      <h2>this is login page</h2>
      <button onClick={handleGoogleSignIn} className="btn btn-danger">Sign in with gmail</button>
    </div>
  );
};

export default Login;