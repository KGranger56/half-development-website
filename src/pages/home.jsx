import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="col-1">
        <h1>
          This is <br />
          <span className="title">Halfdevelopment.</span>
        </h1>
        <p className="companyInfo">
          Lorem ipsum dolor sit amet, consectetur sadipiscing elit, sed diam nonumy eirmod
          tempor invidunt
        </p>
        <button className="ourTeam">Our Team</button>
      </div>
      <div className="col-2">
        <img
          src="https://i3.lensdump.com/i/1PYX2c.png"
          alt="1PYX2c.png"
          border="0"
          className="eclipse"
        />
        <img
          src="https://i1.lensdump.com/i/1PoTm3.png"
          alt="1PoTm3.png"
          border="0"
          className="phone"
        />
        <p className="makeYours">
          Create your
          <br />
          <span className="phoneText">own App </span>right <br />
          now.
        </p>
      </div>
    </div>
  );
};

export default Home;
