import React from "react";

const jobListingJobs = () => {
  return (
    <section className="jobListingJobsSection">
      <div className="jobListingJobsFilter">
        <h3>Filter By</h3>
        <form>
          <ul>
            <li>
              <h4>
                Location <img src="" alt="" />
              </h4>

              <select>
                <option disabled>Please Select</option>
              </select>
            </li>
            <li>
              <h4>
                Job Type <img src="" alt="" />
              </h4>
              <div className="jobTypeChecklist">
                <input type="checkbox" name="Fixed-Price"></input>
                <label htmlFor="Fixed-Price">Fixed-Price</label>
                <span>0</span>

                <input type="checkbox" name="Fulltime"></input>
                <label htmlFor="Fulltime">Fulltime</label>
                <span>0</span>

                <input type="checkbox" name="Part-time"></input>
                <label htmlFor="Part-time">PartTime</label>
                <span>0</span>

                <input type="checkbox" name="Freelance"></input>
                <label htmlFor="Freelance">Freelance</label>
                <span>0</span>
              </div>
            </li>
            <li>
              <h4>
                Experience <img src="" alt="" />
              </h4>
              <div className="jobTypeChecklist">
                <input type="checkbox" name="Fresher"></input>
                <label htmlFor="Fresher">Fresher</label>
                <span>0</span>

                <input type="checkbox" name="Intermediate"></input>
                <label htmlFor="Intermediate">Intermediate</label>
                <span>0</span>

                <input type="checkbox" name="No-Experience"></input>
                <label htmlFor="No-Experience">No-Experience</label>
                <span>0</span>

                <input type="checkbox" name="Internship"></input>
                <label htmlFor="Internship">Internship</label>
                <span>0</span>

                <input type="checkbox" name="Expert"></input>
                <label htmlFor="Expert">Expert</label>
                <span>0</span>
              </div>
            </li>
            <li>
              <h4>
                Salary <img src="" alt="" />
              </h4>
              <div>Slider</div>
            </li>
            <li>
              <h4>
                Category <img src="" alt="" />
              </h4>
            </li>
            <li>
              <h4>
                Tags <img src="" alt="" />
              </h4>
            </li>
            <li>
              <button>Apply Filter</button>
            </li>
          </ul>
        </form>
      </div>
      <div className="jobListingJobsList"></div>
    </section>
  );
};

export default jobListingJobs;
