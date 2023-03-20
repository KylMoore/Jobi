import React from "react";
import { Link } from "react-router-dom";

const mostDemandingCategories = () => {
  return (
    <section>
      <div>
        <div>
          <h2>Most Demanding Categories</h2>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, rerum
            molestiae ut nesciunt reiciendis at...
          </p>
          <Link>Explore all fields</Link>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <Link>UI/UX Design</Link>
          </li>
          <li>
            <Link>Development</Link>
          </li>
          <li>
            <Link>Marketing</Link>
          </li>
          <li>
            <Link>Telemarketing</Link>
          </li>
          <li>
            <Link>Editing</Link>
          </li>
          <li>
            <Link>Accounting</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default mostDemandingCategories;
