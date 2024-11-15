import React from "react";
import booster from "../../assets/icons_shop/booster.svg";
import timer from "../../assets/icons_shop/timer.svg";
import gold from "../../assets/icons_shop/gold.svg";

const Buster = ({ className, img, price, time, value, onClick }) => {
  return (
    <div className={className}>
      <div className="imgBg">
        <img
          src={img}
          alt="eat"
          style={{ maxWidth: "80px", maxHeight: "80px" }}
        />
      </div>

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
