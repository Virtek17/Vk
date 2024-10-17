import React from "react";
import spin from "../../assets/icons/spin.svg";

const ButtonSpin = () => {
  return (
    <div className="spinBg">
      <img src={spin} alt="spin" className="spiner" />
      <div className="timer timerSpinPosition">00:00</div>
    </div>
  );
};

export default ButtonSpin;
