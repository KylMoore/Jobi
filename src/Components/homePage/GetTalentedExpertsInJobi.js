import React from "react";

const GetTalentedExpertsInJobi = () => {
  return (
    <section className="talentedExperts">
      <div className="wrapper talentedExpertsContainer">
        <div className="talentedExpertsImageContainer">
          <img
            src="./assets/peopleExperts.jpg"
            alt="headshots of talented experts"
          />
        </div>
        <div className="talentedExpertsContentContainer">
          <h2>Get over 50,000+ talented experts in jobi.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugit
            aliquid ex, neque blanditiis possimus. Laudantium culpa inventore
            optio quisquam!
          </p>
          <ul>
            <li>Seamless searching</li>
            <li>Get top 3% experts for you project</li>
            <li>Protected payments system</li>
          </ul>
          <button>Post a Job</button>
        </div>
      </div>
    </section>
  );
};

export default GetTalentedExpertsInJobi;
