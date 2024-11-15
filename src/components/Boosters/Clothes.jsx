import boosterIcon from "../../../public/icons_shop/booster.svg";
import gold from "../../../public/icons_shop/gold.svg";

const Clothes = ({ img, booster, onButtonClick, value, price, balance }) => {
  const handleClick = () => {
    if (booster.isPurchased || balance >= price) {
      onButtonClick();
    }
  };

  return (
    <div className="shop_items_style">
      <div className="product_container">
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
      </div>

      <button
        className="btnBuy"
        onClick={handleClick}
        disabled={!booster.isPurchased && balance < price}
      >
        {booster.text}
      </button>
    </div>
  );
};

export default Clothes;
