import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Login from "./Login";
import PageOptionsModal from "./PageOptionsModal";
import { auth } from "../firebase";

const NavBar = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openPages, setOpenPages] = useState(false);
  // const [currentUser, setCurrentUser] = useState("");

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     setCurrentUser(currentUser);
  //   });
  // }, []);

  const handleClick = () => {
    setOpenPages(!openPages);
  };

  return (
    <nav className="nav">
      <div className="hamburgerMenu">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      <ul className="navFirstImagesContainer">
        <li>
          <img
            className="jobiLogoLight"
            src="./assets/jobiLogoLight.png"
            alt="Jobi Logo"
          />
        </li>
        <li>
          <a className="categoryButton" href="home">
            <img src="./assets/category.svg" alt="category button" />
          </a>
        </li>
      </ul>
      <ul className="navAnchors">
        <li>
          <Link to="/" aria-label="Navigate to jobi home page" title="Home">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/jobListings"
            aria-label="Navigate to job listings"
            title="Job Listings"
          >
            Job
          </Link>
        </li>
        <li>
          <Link
            to="/explore"
            aria-label="Navigate to explore page"
            title="Explore"
          >
            Explore
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            aria-label="Navigate to Contact page"
            title="Contact Us"
          >
            Contact
          </Link>
        </li>
        <li>
          <button
            className="pagesButton"
            onClick={() => {
              handleClick();
            }}
          >
            Pages
            {openPages ? <PageOptionsModal /> : null}
          </button>
        </li>
      </ul>
      <ul className="navSecondImagesContainer">
        <li>
          <img className="navSquiggle" src="../assets/Shape.svg" alt="" />
        </li>
      </ul>
      <ul className="navLoginButtons">
        <li>
          <button className="postJobButton">Post Job</button>
        </li>
        <img className="line" src="../assets/line.svg" alt="" />
        <li>
          <button
            className="loginButton"
            onClick={() => {
              setOpenLogin(true);
            }}
          >
            Login
          </button>
          {openLogin && <Login closeLogin={setOpenLogin} />}
          {/* {currentUser && <p>{currentUser.email}</p>} */}
        </li>
        <li>
          <button>Hire Top Talents</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
