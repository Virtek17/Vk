import React from "react";
import { Image } from "@vkontakte/vkui";
import settings from "../assets/icons/settings.svg";
import rating from "../assets/icons/rating.svg";
import gold from "../assets/icons/gold.svg";
import diamond from "../assets/icons/diamond.svg";

const UiHeader = ({ children, balans }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        fontSize: "12px",
        backgroundColor: "#7E9999",
        width: "100%",
        borderBottom: "5px solid #F4F1E4",
        height: "97px",
      }}
    >
      <Image src={rating} size={32} noBorder />

      <div
        style={{
          fontSize: "20px",
          display: "flex",
          alignItems: "center",
          columnGap: "10px",
        }}
      >
        <div>0</div>
        <img src={diamond} />
      </div>

      {children}

      <div
        style={{
          fontSize: "20px",
          display: "flex",
          alignItems: "center",
          columnGap: "10px",
        }}
      >
        <div>{balans}</div>
        <img src={gold} />
      </div>

      <Image src={settings} size={32} noBorder />
    </div>
  );
};

export default UiHeader;
