import React from "react";
import { Image } from "@vkontakte/vkui";

const Assider = ({ minutesString, secondsString, purchasedBoosters }) => {
  return (
    <div className="asside">
      {purchasedBoosters.map((booster, index) => (
        <div key={index} className="asside_item">
          <Image src={booster.image} alt="Booster" size={48} noBorder />

          <div className="timeBuster">
            {minutesString}:{secondsString}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Assider;
