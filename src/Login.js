import React from "react";
import Signup from "./Signup.js";

import "./Login.css";

export default function Login(props) {
  return (
    <div className="Login">
      <h1 className="Login__title">Sign Up as a New User</h1>
      <Signup />

      <br></br>
      <div className="Login__button" onClick={() => login("varun", "evan")}>
        Log in as <b>Varun</b>
      </div>
      <div className="Login__button" onClick={() => login("evan", "varun")}>
        Log in as <b>Evan</b>
      </div>
    </div>
  );
}

function login(userId, otherUserId) {
  window.location.href = `?userId=${userId}&otherUserId=${otherUserId}`;
}
