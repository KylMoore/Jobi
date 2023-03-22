import React from "react";

const HowItWorks = () => {
  return (
    <section className="howItWorks">
      <div className="wrapper">
        <div className="howItWorksHeader">
          <h2>
            How's it work?
            <img
              className="threeLines"
              src="../assets/threeLinesGreen.svg"
              alt=""
            />
          </h2>
        </div>
        <div className="howItWorksContent">
          <ul>
            <li>
              <img src="./assets/personIcon.svg" alt="person icon" />
              <h4>Create Account</h4>
              <p>It's very easy to open an account and start your journey </p>
            </li>
            <img className="arrowRight" src="./assets/arrowRight.svg" alt="" />
            <li>
              <img src="./assets/paperIcon.svg" alt="paper icon" />
              <h4>Complete your Profile</h4>
              <p>
                Complete your profile with all the info to get attention of the
                client
              </p>
            </li>
            <img className="arrowRight" src="./assets/arrowRight.svg" alt="" />
            <li>
              <img src="./assets/pencilIcon.svg" alt="pencil icon" />
              <h4>Apply for job or hire</h4>
              <p>
                Apply & get your preferable jobs with all the requirements and
                get it
              </p>
            </li>
          </ul>
        </div>
      </div>
      <img className="smallBgShape" src="./assets/smallBgShape.svg" alt="" />
      <img className="squiggle" src="../assets/Shape.svg" alt="" />
    </section>
  );
};

export default HowItWorks;
