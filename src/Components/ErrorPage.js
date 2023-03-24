import React from "react";

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="errorPage">
      <div className="wrapper">
        <div className="errorPageImage">
          <img src="./assets/error404Picture.jpg" alt="" />
        </div>
        <div className="errorPageContent">
          <h1>
            <p>404</p>
            <span>Page Not Found</span>
          </h1>
          <p>
            Publishing industries for previewing layouts & visual mockups used.
          </p>
          <Link to="/" aria-label="Navigate to jobi home page" title="Home">
            <p>Go Back</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
