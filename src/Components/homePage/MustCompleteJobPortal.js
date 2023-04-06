import React from "react";

import { Link } from "react-router-dom";

const MustCompleteJobPortal = () => {
  return (
    <section className="mustCompleteJobPortalSection">
      <div className="wrapper">
        <div className="mustCompleteJobPortalHeader">
          <h2>Must complete job portal.</h2>
          <p>Sign up and start finding your job or talents.</p>
        </div>
        <div className="mustCompleteJobPortalButtons">
          <button className="mustCompleteJobPortalButton1">
            <Link
              to="/jobListings"
              aria-label="Navigate to job listings page"
              title="Job Listings"
            >
              Looking for a job?
            </Link>
          </button>
          <button className="mustCompleteJobPortalButton2">Post a job</button>
        </div>
      </div>
    </section>
  );
};

export default MustCompleteJobPortal;
