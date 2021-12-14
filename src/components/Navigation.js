import React from "react";
import "../style/navigation.css";
import Brain from "../img/brain.png";
import Tilt from "react-parallax-tilt";
import Rank from "../components/Rank";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav>
        <div className="in-nav">
          <div className="section-1">
            <Tilt>
              <img src={Brain} alt="logo" />
            </Tilt>
            <h1>Macro Brain</h1>
          </div>
          <div className="section-2">
            <Rank />
            <p onClick={() => onRouteChange("signin")}>Sign Out</p>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav>
        <div className="in-nav">
          <div className="section-1">
            <Tilt>
              <img src={Brain} alt="logo" />
            </Tilt>
            <h1>Macro Brain</h1>
          </div>
          <div className="section-2">
            <Rank />
            <p onClick={() => onRouteChange("signup")}>Sign Up</p>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navigation;
