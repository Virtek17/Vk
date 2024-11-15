import { useState } from "react";
import boosterIcon from "../../assets/icons_shop/booster.svg";
import gold from "../../assets/icons_shop/gold.svg";
import img1 from "../../assets/icons_shop/worn.svg";
import img2 from "../../assets/icons_shop/purchased.svg";

const Clothes = ({ img, booster, onButtonClick, value, price, balance }) => {
  const handleClick = () => {
    if (booster.isPurchased || balance >= price) {
      onButtonClick();
    }
    // booster.isWorn ? setTextState("Купленно") : setTextState("Надето");
  };

  return (
    <div className="shop_items_style">
      <div className="imgBg">
        <img src={img} alt="одежда" />
      </div>

      <div className="characteristics">
        <div className="characteristics_items">
          <img src={boosterIcon} alt="Бустер" />+{value}
        </div>

        <div className="characteristics_items">
          <img src={gold} alt="Бустер" className="leftIcon" />
          {price}
        </div>
        <div className="characteristics_items">
          <div className="items_state">
            {booster.isPurchased && <img src={booster.imgState} alt="" />}

            <span>{booster.textState}</span>
          </div>
        </div>
      </div>

      <button
        className={!booster.isPurchased ? "btnBuy" : "btnBuy purchased"}
        onClick={handleClick}
        disabled={!booster.isPurchased && balance < price}
      >
        {booster.text}
      </button>
    </div>
  );
};

export default Clothes;
