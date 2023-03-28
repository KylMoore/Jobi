import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <img src="./assets/jobiLogoLight.png" alt="Jobi Logo" />
        </li>
        <li>
          <a href="#">
            <img src="./assets/category.svg" alt="category button" />
          </a>
        </li>
      </ul>
      <ul>
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
          <button>Pages</button>

          {/* <Link to="/pages" aria-label="Navigate to Pages page" title="Pages">
            Pages
          </Link> */}
        </li>
      </ul>
      <ul>
        <li>
          <img src="../assets/Shape.svg" alt="" />
        </li>
      </ul>
      <ul>
        <li>
          <button className="postJobButton">Post Job</button>
        </li>
        <img className="line" src="../assets/line.svg" alt="" />
        <li>
          <button className="loginButton">Login</button>
        </li>
        <li>
          <button>Hire Top Talents</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
