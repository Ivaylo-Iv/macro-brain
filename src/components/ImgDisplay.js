import React from "react";
import "../style/ImgDisplay.css";

const ImgDisplay = ({ imgLink, displayI, box }) => {
  return (
    <div className="img-display">
      <div>
        <img
          id="inputImage"
          src={imgLink}
          alt="img"
          style={{ display: displayI }}
        />
        <div
          style={{
            top: box.topRow,
            bottom: box.bottomRow,
            left: box.leftCol,
            right: box.rightCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ImgDisplay;
