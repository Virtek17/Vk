import React, { useState } from "react";
import settings from "../../assets/icons/settings.svg";
import rating from "../../assets/icons/rating.svg";
import gold from "../../assets/icons/gold.svg";
import diamond from "../../assets/icons/diamond.svg";
import plus from "../../assets/icons/plus.svg";
import SettingsModal from "../../components/ModalWindows/SettingsModal";

const UiHeader = ({ balans }) => {
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        fontSize: "12px",
        width: "100%",
        height: "97px",
      }}
    >
      <img src={rating} />

      <div className="buy_money">
        <img src={diamond} className="left" />
        <div>99к9</div>
        <img src={plus} alt="plus" className="right" />
      </div>

      <div className="buy_money">
        <img src={gold} className="left" />
        <div>{balans}</div>
        <img src={plus} alt="" className="right" />
      </div>

      <div style={{ position: "relative" }}>
        <img
          src={settings}
          onClick={() => setOpenSettings((prevState) => !prevState)}
        />

        {openSettings && <SettingsModal />}
      </div>
    </div>
  );
};

export default UiHeader;
