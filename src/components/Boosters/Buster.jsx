import React from "react";
import busterIcon from "../../assets/icons/bustIcon.svg";
import timerIcon from "../../assets/icons/timerIcon.svg";
import cabinIcon from "../../assets/icons/cabinIcon.svg";

const Buster = ({ className, img, price, time, value, onClick }) => {
  return (
    <div className={className}>
      <img
        src={img}
        alt="eat"
        style={{ maxWidth: "80px", maxHeight: "80px" }}
      />
      <div className="characteristics">
        <div className="characteristics_items">
          <img src={busterIcon} alt="icon" />+{value}
        </div>

        <div className="characteristics_items">
          <img src={timerIcon} alt="icon" />
          {time} сек
        </div>

        <div className="characteristics_items">
          <img src={cabinIcon} alt="icon" className="leftIcon" />
          {price}
        </div>
      </div>
      <button className="btnBuy" onClick={onClick}>
        купить
      </button>
    </div>
  );
};

export default Buster;
