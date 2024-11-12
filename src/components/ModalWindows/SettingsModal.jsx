import React from "react";
import music from "../../assets/buttons/music.svg";
import sound from "../../assets/buttons/sound.svg";

const SettingsModal = () => {
  return (
    <div className="settingsRow">
      <div>
        <img src={sound} alt="sound" />
      </div>
      <div>
        <img src={music} alt="music" />
      </div>
    </div>
  );
};

export default SettingsModal;
