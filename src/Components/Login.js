import { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import React from "react";

const Login = ({ closeLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCrendentials) => {
        console.log(userCrendentials);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      onClick={() => {
        closeLogin(false);
      }}
      className="login"
    >
      <div
        className="loginForm"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="wrapper">
          <div className="loginHeader">
            <h2>Hi, Welcome Back!</h2>
            <p className="loginP">
              Still don't have an account?
              <Link
                to="/signUp"
                aria-label="Navigate to sign up page"
                title="Sign Up"
              >
                Sign up
              </Link>
            </p>
          </div>
          <form>
            <div className="signUpFormPadding">
              <label
                htmlFor="name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              >
                Email*
              </label>
              <input type="text" name="name" />
            </div>
            <div className="signUpFormPadding">
              <label htmlFor="password" required>
                Password*
              </label>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
              />
            </div>
            <div className="keepLoggedIn">
              <div>
                <input type="checkbox" name="keepLoggedIn" />
                <label htmlFor="keepLoggedIn">Keep me logged in</label>
              </div>
              <p>Forget password?</p>
            </div>
            <button className="loginButton" onSubmit={login} type="submit">
              Login
            </button>

            <div className="signUpLines">
              <img src="./assets/horizontalLine.svg" alt="" />
              <p>Or</p>
              <img src="./assets/horizontalLine.svg" alt="" />
            </div>

            <div className="signUpButtons">
              <button>
                <img src="./assets/google.svg" alt="google logo" />
                Login with Google
              </button>

              <button>
                <img src="./assets/facebook.svg" alt="facebook logo" />
                Login with Facebook
              </button>
            </div>
            <p className="loginP2">
              Don't have an account?{" "}
              <Link
                to="/signUp"
                aria-label="Navigate to sign up page"
                title="Sign Up"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
