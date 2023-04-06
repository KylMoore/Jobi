import React from "react";

import { Link } from "react-router-dom";

const JobDescriptionRelatedJobs = () => {
  return (
    <section className="relatedJobsSection">
      <div className="wrapper">
        <div className="relatedJobsHeader">
          <h2>Related Jobs</h2>
          <div className="findTheBestTalentedExpertSectionButtons">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="relatedJobsListing">
          <img src="" alt="Company Logo" />
          <div className="relatedJobsListingInfo">
            <h3>Job Type</h3>
            <h2>
              <Link
                to="/jobDescription"
                aria-label="Navigate to job description page"
                title="Job Description"
              >
                Job Title.
              </Link>
            </h2>
            <p>
              <span>Salary</span>Week/Hour/Yearly
            </p>
          </div>
          <div>
            <p>Location</p>
            <button className="applyButton">Apply</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDescriptionRelatedJobs;
