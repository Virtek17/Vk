import React from "react";

const BalansAndTimer = ({ score, minutesSting, seceondsString }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "10px 0px 10px 0px",
      }}
    >
      <div>Score: {score}</div>
      <div>
        {minutesSting}:{seceondsString}
      </div>
    </div>
  );
};

export default BalansAndTimer;
