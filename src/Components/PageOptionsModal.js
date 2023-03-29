import React from "react";
import { Link } from "react-router-dom";

const PageOptionsModal = () => {
  return (
    <div className="pageOptionsModal">
      <ul>
        <li>
          <Link
            to="/aboutUs"
            aria-label="Navigate to about us page"
            title="About Us"
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            to="/pricing"
            aria-label="Navigate to pricing page"
            title="Pricing"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            to="*"
            aria-label="Navigate to error 404 page"
            title="Error Page"
          >
            Error 404
          </Link>
        </li>
        <li>
          <Link to="/blog" aria-label="Navigate to blog page" title="Blog">
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            aria-label="Navigate to contact page"
            title="Contact"
          >
            Contact us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PageOptionsModal;
