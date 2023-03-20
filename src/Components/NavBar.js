import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
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
          <Link
            to="/"
            aria-label="Navigate to jobi home page"
            title="Home"
            onClick={() => {}}
          ></Link>
          <a href="#">Home</a>
        </li>
        <li>
          <Link
            to="/jobListings"
            aria-label="Navigate to job listings"
            title="Job Listings"
          ></Link>
        </li>
        <li>
          <a href="#">Explore</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Pages</a>
        </li>
      </ul>
      <ul>
        <li>Post Job</li>
        <li>Login</li>
        <li>
          <button>Hire Top Talents</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
