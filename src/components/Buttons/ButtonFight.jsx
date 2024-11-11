import fightBtn from "../../../public/buttons/fightBtn.svg";
import btnFightBg from "../../../public/background/btnFightBg.svg";

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
