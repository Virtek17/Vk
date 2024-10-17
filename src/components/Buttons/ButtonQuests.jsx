import { Image } from "@vkontakte/vkui";
import questsBtn from "../../assets/quests.svg";
export default function QuestButton({ onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        userSelect: "none",
        paddingTop: "34px",
      }}
    >
      <img src={questsBtn} style={{ width: "55px" }} />
    </div>
  );
}
