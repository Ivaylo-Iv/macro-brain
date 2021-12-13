import React from "react";
import "../style/ImgLinkForm.css";

const ImgLinkForm = () => {
  return (
    <div className="form-wrapper">
      <h2>This Magick Brain will detect faces in your pictures.</h2>
      <div>
        <input type="text" placeholder="Paste an image url" />
        <button>Detect</button>
      </div>
    </div>
  );
};

export default ImgLinkForm;
