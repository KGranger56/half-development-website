import React from "react";
import { Link } from "react-router-dom";
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";*/
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <ul className="navList">
          <li>
            <Link to="/home" className="navHome">
              <div className="navBrand">
                <li className="navImg">
                  <img
                    src="https://i.lensdump.com/i/1z5h0v.png"
                    alt="1z5h0v.png"
                    border="0"
                    className="navLogo"
                  />
                </li>
                <li className="logoName">Halfdevelopment</li>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/home" className="navHome">
              Home
            </Link>
          </li>
          <li>
            <Link to="/apps" className="navApps">
              Apps
            </Link>
          </li>
          <li>
            <Link to="/team" className="navTeam">
              Team
            </Link>
          </li>
          <li>
            <Link to="/work" className="navWork">
              Work
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navContactUs">
              <button className="navContact">Contact Us</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
