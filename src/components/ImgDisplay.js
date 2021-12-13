import React from "react";
import "../style/ImgDisplay.css";

const ImgDisplay = ({ imgLink }) => {
  return (
    <div className="img-display">
      <img src={imgLink} alt="img" />
    </div>
  );
};

export default ImgDisplay;
