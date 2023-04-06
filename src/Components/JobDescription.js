import React from "react";
import JobDescriptionHeader from "./jobDescriptionPage/JobDescriptionHeader";
import JobDescriptionInformation from "./jobDescriptionPage/JobDescriptionInformation";
import JobDescriptionRelatedJobs from "./jobDescriptionPage/JobDescriptionRelatedJobs";

const JobDescription = () => {
  return (
    <div>
      <JobDescriptionHeader />
      <JobDescriptionInformation />
      <JobDescriptionRelatedJobs />
    </div>
  );
};

export default JobDescription;
