import React, { useState } from "react";
// ========= Импорты картинок =========
import settings from "../../../public/buttons/settings.svg";
import plus from "../../../public/buttons/plus.svg";
import rating from "../../../public/buttons/rating.svg";
import gold from "../../../public/icons_main/gold.svg";
import diamond from "../../../public/icons_main/diamond.svg";
// ====================================
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
        <div>99</div>
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
