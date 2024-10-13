// ProgressBar.jsx
import { Cell } from "@vkontakte/vkui";
import React from "react";

const ProgressBar = ({ value, maxValue, level }) => {
  const progress = (value / maxValue) * 100;

  return (
    <div
      style={{
        width: "170px",
        backgroundColor: "#e0e0e0",
        borderRadius: "5px",
        overflow: "hidden",
        boxShadow: "inset 0 1px 2px rgba(0,0,0,0.2)",
        height: "20px", // Задаём высоту прогресс-бара
        position: "relative",
        display: "flex",
        userSelect: "none",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: "blue",
          height: "100%",
          transition: "width 0.3s ease-in-out",
          display: "flex",
          justifyContent: "center",
          alignItems: "center ",
        }}
      >
        <div
          style={{
            position: "absolute",
            transform: "translateX(-50%)",
            left: "50%",

            color: "red",
          }}
        >
          {`${level} lvl`}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
