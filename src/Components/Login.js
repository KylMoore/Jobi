import React from "react";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="loginForm">
        <div className="wrapper">
          <div className="loginHeader">
            <h2>Hi, Welcome Back!</h2>
            <p>
              Still don't have an account?{" "}
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
              <label htmlFor="name" required>
                Name*
              </label>
              <input type="text" name="name" />
            </div>
            <div className="signUpFormPadding">
              <label htmlFor="password" required>
                Password*
              </label>
              <input type="text" name="password" />
            </div>
            <div className="keepLoggedIn">
              <div>
                <input type="checkbox" name="keepLoggedIn" />
                <label htmlFor="keepLoggedIn">Keep me logged in</label>
              </div>
              <a href="">Forget password?</a>
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
                Login with Google
              </button>

              <button>
                <img src="./assets/facebook.svg" alt="facebook logo" />
                Login with Facebook
              </button>
            </div>
            <p>
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
