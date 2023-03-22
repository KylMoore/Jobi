import React from "react";

const FindTheBestTalentedExpert = () => {
  return (
    <section className="findTheBestTalentedExpertSection">
      <div className="wrapper">
        <div className="findTheBestTalentedExpertSectionHeader">
          <h2>
            Find the best talented expert in jobi
            <img
              className="shapeDarkGreen"
              src="./assets/shapeDarkGreen.svg"
              alt=""
            />
          </h2>

          <div className="findTheBestTalentedExpertSectionButtons">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </button>
          </div>
        </div>
        <ul>
          <li>
            <img src="./assets/womanHeadshot1.jpg" alt="" />
            <h4>Julie Ake</h4>
            <p>Product Designer</p>
          </li>
          <li>
            <img src="./assets/manHeadshot1.jpg" alt="" />
            <h4>Juan Marko</h4>
            <p>JavaScript Developer</p>
          </li>
          <li>
            <img src="./assets/womanHeadshot2.jpg" alt="" />
            <h4>Elizabeth Foster</h4>
            <p>UI/UX Designer</p>
          </li>
          <li>
            <img src="./assets/manHeadshot2.jpg" alt="" />
            <h4>Rashed Ka</h4>
            <p>Marketing Expert</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FindTheBestTalentedExpert;
