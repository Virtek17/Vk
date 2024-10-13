import React, { useState, useEffect } from "react";
import Buster from "../Busters/Buster";
import "../../style/shopGrid.css";
import eat1 from "../../assets/shop/eat1.svg";
import eat2 from "../../assets/shop/eat2.svg";
import eat3 from "../../assets/shop/eat3.svg";
import eat4 from "../../assets/shop/eat4.svg";
import eat5 from "../../assets/shop/eat5.svg";

import eat6 from "../../assets/shop/eat6.svg";
import eat7 from "../../assets/shop/eat7.svg";
import eat8 from "../../assets/shop/eat8.svg";
import eat9 from "../../assets/shop/eat9.svg";
import eat10 from "../../assets/shop/eat10.svg";

import eat11 from "../../assets/shop/eat11.svg";

export default function ShopModal({ activeBust }) {
  return (
    <div className="shop_container">
      <Buster
        activeBust={activeBust}
        className="shop_items_style"
        name={eat1}
        coast={10}
      />
      <Buster className="shop_items_style" name={eat2} coast={300} />
      <Buster className="shop_items_style" name={eat3} coast={190} />
      <Buster className="shop_items_style" name={eat4} coast={123} />
      <Buster className="shop_items_style" name={eat5} coast={50} />
      <Buster className="shop_items_style" name={eat6} coast={70} />
      <Buster className="shop_items_style" name={eat7} coast={89} />
      <Buster className="shop_items_style" name={eat8} coast={800} />
      <Buster className="shop_items_style" name={eat9} coast={122} />
      <Buster className="shop_items_style" name={eat10} coast={210} />
      <Buster className="shop_items_style" name={eat11} coast={190} />
    </div>
  );
}
