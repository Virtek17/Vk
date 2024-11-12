import React from "react";
import { Image } from "@vkontakte/vkui";

const Buster = ({ className, name, coast, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <img
        src={name}
        alt="eat"
        style={{ maxWidth: "80px", maxHeight: "80px" }}
      />
      <button className="btnBuy">{coast}$</button>
    </div>
  );
};

export default Buster;
