import React from "react";

const TrustedByLeadingStartups = () => {
  return (
    <section className="trustedByLeadingStartups">
      <div className="wrapper">
        <div className="trustedByLeadingStartupsHeader">
          <h2>Trusted by leading startups.</h2>
          <div className="trustedByLeadingStartupsButtons">
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
        <div className="trustedByLeadingStartupsList">
          <ul>
            <li>
              <div className="companyHeading">
                <img src="" alt="" />
                <h3>monday.com</h3>
              </div>
              <p>
                "Seattle Opera simplifies performance planning with deski
                Esignature."
              </p>
              <h6>
                <strong>Rashid Kabir</strong>, Lead Designer
              </h6>
              <img className="lineBreak" src="./assets/lineBreak.svg" alt="" />
              <div className="starRanking">
                <p>4.5 Excellent</p>
                <img src="./assets/4star.svg" alt="4 stars out of five" />
              </div>
            </li>
            <li>
              <div className="companyHeading">
                <img src="" alt="" />
                <h3>ShipBob</h3>
              </div>
              <p>"How DocuSign CLM helps Celonis scale its global business."</p>
              <h6>
                <strong>Mark Joge</strong>, Marketing Cheif
              </h6>
              <img className="lineBreak" src="./assets/lineBreak.svg" alt="" />
              <div className="starRanking">
                <p>4.8 Awesome</p>
                <img src="./assets/5star.svg" alt="5 stars out of 5" />
              </div>
            </li>
          </ul>
        </div>
        <div className="logoList">
          <ul>
            <li>
              <a href="https:/google.com" target="_blank" rel="noreferrer">
                <img src="./assets/google.svg" alt="google logo" />
              </a>
            </li>
            <li>
              <a href="https:/shipbob.com" target="_blank" rel="noreferrer">
                <img src="./assets/shipbob.svg" alt="shipbob logo" />
              </a>
            </li>
            <li>
              <a href="https:/dribble.com" target="_blank" rel="noreferrer">
                <img src="./assets/dribble.svg" alt="dribble logo" />
              </a>
            </li>
            <li>
              <a href="https:/slack.com" target="_blank" rel="noreferrer">
                <img src="./assets/slack.svg" alt="slack logo" />
              </a>
            </li>
            <li>
              <a href="https:/vine.com" target="_blank" rel="noreferrer">
                <img src="./assets/vine.svg" alt="vine logo" />
              </a>
            </li>
            <li>
              <a href="https:/airbnb.com" target="_blank" rel="noreferrer">
                <img src="./assets/airbnb.svg" alt="airbnb logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrustedByLeadingStartups;
