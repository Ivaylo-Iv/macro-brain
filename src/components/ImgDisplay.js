import React from "react";
import "../style/ImgDisplay.css";

const ImgDisplay = ({ imgLink, displayI }) => {
  return (
    <div className="img-display">
      <img src={imgLink} alt="img" style={{ display: displayI }} />
    </div>
  );
};

export default ImgDisplay;
