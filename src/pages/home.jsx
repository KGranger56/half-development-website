import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>
        This is <br />
        <span className="title">Halfdevelopment.</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
        diam nonumy eirmod tempor invidunt
      </p>
      <button className="ourTeam">Our Team</button>
    </div>
  );
};

export default Home;
