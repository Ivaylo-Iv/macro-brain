import React from "react";

const Rank = ({ nameU, entries }) => {
  return (
    <div id="rank">
      <h2>
        {nameU}, your current entry count is <span>{entries}</span>
      </h2>
    </div>
  );
};

export default Rank;
