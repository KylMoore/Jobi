import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import React from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    // const auth = getAuth();
    // console.log(auth, name, email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCrendential) => {
        console.log(userCrendential);
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });
  };

  return (
    <section className="signUpSection">
      <div className="signUpHeader">
        <h1>Register</h1>
        <p>Create an account & Start posting or hiring talents</p>
        <img src="./assets/smallBgShape.svg" alt="" />
      </div>

      <div className="signUpForm">
        <div className="wrapper">
          <form className="signUpForm1">
            <h2>Create Account</h2>
            <fieldset>
              <input
                type="radio"
                id="candidates"
                name="candidateOrEmployer"
                value="candidates"
                defaultChecked
              />
              <label htmlFor="candidates">Candidates</label>
              <input
                type="radio"
                id="employer"
                name="candidateOrEmployer"
                value="employer"
              />
              <label htmlFor="employer">Employer</label>
            </fieldset>
          </form>
          <form onSubmit={signUp} className="signUpForm2">
            <div className="signUpForm2Padding">
              <label htmlFor="name" required>
                Name*
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
              ></input>
            </div>
            <div className="signUpForm2Padding">
              <label htmlFor="email" required>
                Email*
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              ></input>
            </div>
            <div className="signUpForm2Padding">
              <label htmlFor="password" required>
                Password*
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
              ></input>
            </div>

            <div className="registerTermAgreement">
              <input type="checkbox" name="agreeToTerms" required></input>
              <label htmlFor="keepLoggedIn">
                By Hitting the "Register" button, you agree to the{" "}
                <Link
                  to="/termsAndConditions"
                  aria-label="Navigate to terms and conditions page"
                  title="Terms And Conditions"
                >
                  Terms Conditions
                </Link>{" "}
                &{" "}
                <Link
                  to="/privacyPolicy"
                  aria-label="Navigate to privacy policy page"
                  title="Privacy Policy"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>
            <button className="loginButton" type="submit">
              Sign up
            </button>

            <div className="signUpLines">
              <img src="./assets/horizontalLine.svg" alt="" />
              <p>Or</p>
              <img src="./assets/horizontalLine.svg" alt="" />
            </div>

            <div className="signUpButtons">
              <button>
                <img src="./assets/google.svg" alt="google logo" />
                Signup with Google
              </button>

              <button>
                <img src="./assets/facebook.svg" alt="facebook logo" />
                Signup with Facebook
              </button>
            </div>
            <p>
              Have an account?{" "}
              <Link
                to="/signUp"
                aria-label="Navigate to sign up page"
                title="Sign Up"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
