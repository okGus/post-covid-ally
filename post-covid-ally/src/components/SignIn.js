import React from "react";
import "./form.css";
import firebase from "firebase";
import { auth } from "../firebase";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
function Signin() {
  const history = useHistory();
  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
    history.push("/");
  }
  return (
    <div className="form-container">
      <div className="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="Password" />
        </div>
      </div>
      <div className="footer">
        <Button type="button" className="btn">
          Login
        </Button>
        <Button onClick={signInWithGoogle}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Signin;
