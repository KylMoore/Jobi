import React from "react";
import { initializeApp } from "@firebase/app";
import { useRef } from "react";

const SignUp = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();

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
          <form className="signUpForm2">
            <div className="signUpForm2Padding">
              <label htmlFor="name" ref={nameRef} required>
                Name*
              </label>
              <input type="text" name="name"></input>
            </div>
            <div className="signUpForm2Padding">
              <label htmlFor="email" ref={emailRef} required>
                Email*
              </label>
              <input type="email" name="email"></input>
            </div>
            <div className="signUpForm2Padding">
              <label htmlFor="password" ref={passwordRef} required>
                Password*
              </label>
              <input type="password" name="password"></input>
            </div>

            <div className="registerTermAgreement">
              <input type="checkbox" name="agreeToTerms"></input>
              <label htmlFor="keepLoggedIn">
                By Hitting the "Register" button, you agree to the{" "}
                <a href="">Terms Conditions</a> & <a href="">Privacy Policy</a>
              </label>
            </div>
            <button className="loginButton" type="submit">
              Login
            </button>

            <div className="signUpLines">
              <img src="./assets/horizontalLine.svg" alt />
              <p>Or</p>
              <img src="./assets/horizontalLine.svg" alt />
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
              Have an account? <a href="#">Sign in</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
