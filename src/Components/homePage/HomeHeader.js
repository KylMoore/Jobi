import React from "react";

const HomeHeader = () => {
  return (
    <header>
      <div className="wrapper">
        <h1 className="firstH1">Find & Hire</h1>
        <h1 className="secondH1">Top 3% of experts on jobi</h1>
        <p className="firstHeaderP">
          We deliver blazing fast & striking work solutions
        </p>
        <div className="formContainer">
          <form>
            <div className="searchWhatAreYouLookingFor">
              <label htmlFor="jobType">What are you looking for?</label>
              <input id="jobType"></input>
            </div>
            <img src="../assets/line.svg" />
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
          <p className="secondHeaderP">
            <strong>Popular:</strong> Design, Art, Video Editing
          </p>
        </div>

        <img
          className="womanLaptop"
          src="../assets/womanLaptop.jpg"
          alt="woman using a laptop"
        />
        <img className="smallLines" src="../assets/smallBgShape.svg" alt="" />
        <img className="bigLines" src="../assets/BgShape.svg" alt="" />
      </div>
    </header>
  );
};

export default HomeHeader;
