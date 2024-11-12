// ProgressBar.jsx
import { Cell, filterFnForSelect } from "@vkontakte/vkui";
import React from "react";

const ProgressBar = ({ value, maxValue, level }) => {
  const progress = (value / maxValue) * 100;

  return (
    <div
      style={{
        width: "302px",
        backgroundColor: "#E0E3DF",
        borderRadius: "5px",
        overflow: "hidden",
        border: "3px solid #1D7D00",
        borderRadius: "19px",
        height: "39px",
        position: "relative",
        display: "flex",
        userSelect: "none",
        bottom: "62px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: "#4DE220",
          height: "100%",
          transition: "width 0.3s ease-in-out",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="progressBar_txt">{`${level} Уровень`}</div>
      </div>
    </div>
  );
};

export default ProgressBar;
