import React from "react";

const HowItWorks = () => {
  return (
    <section className="howItWorks">
      <div className="wrapper">
        <h2>How's it work?</h2>
        <ul>
          <div className="howItWorksContent">
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
          </div>
        </ul>
      </div>
    </section>
  );
};

export default HowItWorks;
