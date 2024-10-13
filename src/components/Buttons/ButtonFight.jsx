import fightBtn from "../../assets/fightBtn.svg";
import { Image } from "@vkontakte/vkui";
export default function FightButton() {
  return (
    <div
      style={{
        width: "88px",
        height: "88px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
        cursor: "pointer",
        margin: "0 auto",
        position: "absolute",
        bottom: "96px",
        zIndex: "2",
        userSelect: "none",
      }}
    >
      <Image src={fightBtn} noBorder size={88} />
    </div>
  );
}
