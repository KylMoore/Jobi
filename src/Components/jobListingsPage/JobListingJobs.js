import React from "react";

import JobListingJobsInfo from "./JobListingJobsInfo.js";

const jobListingJobs = () => {
  return (
    <div className="wrapper">
      <section className="jobListingJobsSection">
        <div className="jobListingJobsFilter">
          <h3>Filter By</h3>
          <form>
            <ul>
              <li>
                <h4>
                  Location{" "}
                  <button className="minusButton">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                    </svg>
                  </button>
                </h4>

                <select>
                  <option disabled>Please Select</option>
                </select>
              </li>
              <li>
                <h4>
                  Job Type{" "}
                  <button className="minusButton">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                    </svg>
                  </button>
                </h4>
                <div className="jobTypeChecklist">
                  <div className="jobTypeChecklistFlex">
                    <div className="jobTypeChecklistCheckbox">
                      <input type="checkbox" name="Fixed-Price"></input>
                      <label htmlFor="Fixed-Price">Fixed-Price</label>
                    </div>
                    <span>0</span>
                  </div>

                  <div className="jobTypeChecklistFlex">
                    <div className="jobTypeChecklistCheckbox">
                      <input type="checkbox" name="Fulltime"></input>
                      <label htmlFor="Fulltime">Fulltime</label>
                    </div>
                    <span>0</span>
                  </div>

                  <div className="jobTypeChecklistFlex">
                    <div className="jobTypeChecklistCheckbox">
                      <input type="checkbox" name="Part-time"></input>
                      <label htmlFor="Part-time">PartTime (20hr/week)</label>
                    </div>
                    <span>0</span>
                  </div>

                  <div className="jobTypeChecklistFlex">
                    <div className="jobTypeChecklistCheckbox">
                      <input type="checkbox" name="Freelance"></input>
                      <label htmlFor="Freelance">Freelance</label>
                    </div>
                    <span>0</span>
                  </div>
                </div>
              </li>
              <li>
                <h4>
                  Experience{" "}
                  <button className="minusButton">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                    </svg>
                  </button>
                </h4>
                <div className="jobTypeChecklist">
                  <div className="jobTypeChecklistFlex">
                    <div className="jobTypeChecklistCheckbox">
                      <input type="checkbox" name="Fresher"></input>
                      <label htmlFor="Fresher">Fresher</label>
                    </div>
                    <span>0</span>
                  </div>

                  <div className="jobTypeChecklistFlex">
                    <div className="jobTypeChecklistCheckbox">
                      <input type="checkbox" name="Intermediate"></input>
                      <label htmlFor="Intermediate">Intermediate</label>
                    </div>
                    <span>0</span>
                  </div>

                  <div className="jobTypeChecklistFlex">
                    <div className="jobTypeChecklistCheckbox">
                      <input type="checkbox" name="No-Experience"></input>
                      <label htmlFor="No-Experience">No-Experience</label>
                    </div>
                    <span>0</span>
                  </div>

                  <div className="jobTypeChecklistFlex">
                    <div className="jobTypeChecklistCheckbox">
                      <input type="checkbox" name="Internship"></input>
                      <label htmlFor="Internship">Internship</label>
                    </div>
                    <span>0</span>
                  </div>

                  <div className="jobTypeChecklistFlex">
                    <div className="jobTypeChecklistCheckbox">
                      <input type="checkbox" name="Expert"></input>
                      <label htmlFor="Expert">Expert</label>
                    </div>
                    <span>0</span>
                  </div>
                </div>
              </li>
              <li>
                <h4>
                  Salary{" "}
                  <button className="minusButton">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                    </svg>
                  </button>
                </h4>
                <div>Slider</div>
              </li>
              <li>
                <h4>
                  Category{" "}
                  <button className="minusButton">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                    </svg>
                  </button>
                </h4>
                <div className="jobTypeCategory">
                  <div className="jobTypeChecklistFlex">
                    <input type="checkbox" name="Development"></input>
                    <label htmlFor="Development">Development</label>
                  </div>

                  <div className="jobTypeChecklistFlex">
                    <input type="checkbox" name="UI/UX Design"></input>
                    <label htmlFor="UI/UX Design">UI/UX Design</label>
                  </div>

                  <div className="jobTypeChecklistFlex">
                    <input type="checkbox" name="Marketing"></input>
                    <label htmlFor="Marketing">Marketing</label>
                  </div>

                  <div className="jobTypeChecklistFlex">
                    <input type="checkbox" name="Telemarketing"></input>
                    <label htmlFor="Telemarketing">Telemarketing</label>
                  </div>

                  <div className="jobTypeChecklistFlex">
                    <input type="checkbox" name="Editing"></input>
                    <label htmlFor="Editing">Editing</label>
                  </div>

                  <div className="jobTypeChecklistFlex">
                    <input type="checkbox" name="Accounting"></input>
                    <label htmlFor="Accounting">Accounting</label>
                  </div>
                </div>
              </li>
              <li>
                <h4>
                  Tags{" "}
                  <button className="minusButton">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                    </svg>
                  </button>
                </h4>
                <div className="jobTypeCategory">
                  <div className="jobTypeChecklistFlex">
                    <input type="checkbox" name="tag1"></input>
                    <label htmlFor="tag1">tag1</label>
                  </div>

                  <div className="jobTypeChecklistFlex">
                    <input type="checkbox" name="tag2"></input>
                    <label htmlFor="tag2">tag2</label>
                  </div>

                  <div className="jobTypeChecklistFlex">
                    <input type="checkbox" name="tag3"></input>
                    <label htmlFor="tag3">tag3</label>
                  </div>

                  <div className="jobTypeChecklistFlex">
                    <input type="checkbox" name="tag4"></input>
                    <label htmlFor="tag4">tag4</label>
                  </div>

                  <div className="jobTypeChecklistFlex">
                    <input type="checkbox" name="tag5"></input>
                    <label htmlFor="tag5">tag5</label>
                  </div>

                  <div className="jobTypeChecklistFlex">
                    <input type="checkbox" name="tag6"></input>
                    <label htmlFor="tag6">tag6</label>
                  </div>
                </div>
              </li>
              <li>
                <button>Apply Filter</button>
              </li>
            </ul>
          </form>
        </div>
        <div className="jobListingJobsList">
          <div className="jobListingJobsListFilter">
            <div className="jobListingJobsListFilterLeft">
              <p>
                All <span>1000</span> jobs found
              </p>
            </div>
            <div className="jobListingJobsListFilterRight">
              <label htmlFor="datePosted">Date Posted:</label>
              <select name="datePosted">
                <option>Latest</option>
                <option>Past Week</option>
                <option>Past Month</option>
                <option>Past Year</option>
              </select>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="jobListingJobsListJobs">
            <ul>
              <JobListingJobsInfo />
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default jobListingJobs;
