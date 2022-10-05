import React from "react";
import "./apps.css";

const Apps = () => {
  return (
    <div className="apps">
      <h1>Apps</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
      <div className="container">
        <div className="row1">
          <div className="beeApp">YourBee</div>
          <div className="fitnessApp">YourFitness</div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
