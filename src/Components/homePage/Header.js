import React from "react";

const Header = () => {
  return (
    <header>
      <h1>Find & Hire</h1>
      <h1>Top 3% of experts on jobi</h1>
      <p>We deliver blazing fast & striking work solutions</p>
      <form>
        <label htmlFor="jobType">What are you looking for?</label>
        <input id="jobType"></input>
        <label htmlFor="jobCategory">Category</label>
        <select id="jobCategory">
          <option disabled value="">
            Please Select
          </option>
          <option value="webDesign">Web Design</option>
          <option value="architecture">Architecture</option>
          <option value="teacher">Teacher</option>
        </select>
        <button>Search</button>
      </form>
      <p>Popular: Design, Art, Video Editing</p>
      <img src="" alt="" />
    </header>
  );
};

export default Header;
