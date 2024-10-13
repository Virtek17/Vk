import React from "react";
import { Image } from "@vkontakte/vkui";

const Buster = ({ className, name, coast, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <Image keepAspectRatio src={name} alt="eat" widthSize={50} noBorder />
      <button className="btnBuy">{coast}$</button>
    </div>
  );
};

export default Buster;
