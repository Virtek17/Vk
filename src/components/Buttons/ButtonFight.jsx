import fightBtn from "../../assets/fightBtn.svg";
import { Image } from "@vkontakte/vkui";
import btnFightBg from "../../assets/btnFightBg.svg";

export default function FightButton() {
  return (
    <div className="btn_fight">
      <img
        src={btnFightBg}
        alt=""
        style={{ postion: "relative", userSelect: "none" }}
      />
      <img
        src={fightBtn}
        alt=""
        style={{
          position: "absolute",
          left: "17px",
          top: "18px",
          cursor: "pointer",
          borderRadius: "250%",
          outline: "3px solid #E5782F",
          display: "flex",
          userSelect: "none",
        }}
      />
    </div>
  );
}
