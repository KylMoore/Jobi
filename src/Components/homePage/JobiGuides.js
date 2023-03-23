import React from "react";

const JobiGuides = () => {
  return (
    <section className="jobiGuidesSection">
      <div className="wrapper">
        <div className="jobiGuidesHeader">
          <h2>Jobi Guides</h2>
          <button>Explore More</button>
        </div>
        <div className="jobiGuidesList">
          <div>
            <ul>
              <li>
                <img
                  src="./assets/workingOnLaptop.jpg"
                  alt="person working on a laptop"
                />
                <h5>Developer, Code</h5>
                <h4>Print, publishing visual layout mockups.</h4>
                <h6>
                  By <strong>Rashed Kabir</strong>
                </h6>
              </li>
              <li>
                <img
                  src="./assets/workingOnLaptop2.jpg"
                  alt="person working on a laptop"
                />
                <h5>Design, Art</h5>
                <h4>Designer's checklist for every UX/UI project.</h4>
                <h6>
                  By <strong>Julie Margot</strong>
                </h6>
              </li>
              <li>
                <img
                  src="./assets/workingOnLaptop3.jpg"
                  alt="person working on a laptop at a desk"
                />
                <h5>Solution, Work</h5>
                <h4>Make more productive work flow in few steps</h4>
                <h6>
                  By <strong>Jubayer Al Hasan</strong>
                </h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobiGuides;
