import React from "react";
import booster from "../../../public/icons_shop/booster.svg";
import timer from "../../../public/icons_shop/timer.svg";
import gold from "../../../public/icons_shop/gold.svg";

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
          <img src={booster} alt="icon" />+{value}
        </div>

        <div className="characteristics_items">
          <img src={timer} alt="icon" />
          {time} сек
        </div>

        <div className="characteristics_items">
          <img src={gold} alt="icon" className="leftIcon" />
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
