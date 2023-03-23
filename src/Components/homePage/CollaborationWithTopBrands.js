import React from "react";
import { Link } from "react-router-dom";

const CollaborationWithTopBrands = () => {
  return (
    <section className="collaborationWithTopBrandsSection">
      <div className="wrapper">
        <div className="collaborationWithTopBrandsContainer">
          <div className="collaborationWithTopBrandsImageContainer">
            <img src="./assets/jobiMap.svg" alt="" />
          </div>
          <div className="collaborationWithTopBrandsContentContainer">
            <h4>Top Brand</h4>
            <h2>Collaboration with Top Brands.</h2>
            <p>
              We collaborate with a number of tier companies on imagining the
              future of work, have a look.
            </p>
            <Link>
              <p>Learn More</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationWithTopBrands;
