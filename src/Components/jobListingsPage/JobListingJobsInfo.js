import React from "react";

import { Link } from "react-router-dom";

const JobListingJobsInfo = () => {
  return (
    <section className="jobListingJobsInfoSection">
      <img src="" alt="Company Logo" />
      <div className="jobListingJobsInfoSectionLeftContent">
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
      </div>
      <div className="jobListingJobsInfoSectionMiddleContent">
        <p>Location</p>
        <p>
          <span>Salary</span>Experience
        </p>
      </div>
      <div className="jobListingJobsInfoSectionRightContent">
        <button className="bookmarkButton">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
          </svg>
        </button>
        <button className="applyButton">Apply</button>
      </div>
    </section>
  );
};

export default JobListingJobsInfo;
