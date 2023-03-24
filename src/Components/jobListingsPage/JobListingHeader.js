import React from "react";

const jobListingHeader = () => {
  return (
    <header className="jobListingHeader">
      <div className="wrapper">
        <div className="jobListingContent">
          <h1 className="firstH1">Job Listing</h1>
          <p>We deliver blazing fast & striking work solutions</p>
        </div>
        <div className="jobListFormContainer">
          <form>
            <div className="searchWhatAreYouLookingFor">
              <label htmlFor="jobType">What are you looking for?</label>
              <input id="jobType"></input>
            </div>
            <img src="../assets/line.svg" alt="" />
            <div className="searchCategory">
              <label htmlFor="jobCategory">Category</label>
              <select id="jobCategory">
                <option disabled value="">
                  Please Select
                </option>
                <option value="Development">Development</option>
                <option value="UI/UXDesign">UI/UX Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Telemarketing">Telemarketing</option>
                <option value="Editing">Editing</option>
                <option value="Accounting">Accounting</option>
              </select>
            </div>
            <button>Search</button>
          </form>
        </div>
        <img className="smallLines" src="../assets/smallBgShape.svg" alt="" />
      </div>
    </header>
  );
};

export default jobListingHeader;
