import React from "react";

import JobListingHeader from "./jobListingsPage/JobListingHeader";
import MustCompleteJobPortal from "./homePage/MustCompleteJobPortal";
import JobListingJobs from "./jobListingsPage/JobListingJobs";

const JobListings = () => {
  return (
    <div>
      <JobListingHeader />
      <JobListingJobs />
      <MustCompleteJobPortal />
    </div>
  );
};

export default JobListings;
