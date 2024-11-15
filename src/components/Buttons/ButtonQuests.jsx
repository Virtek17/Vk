import questsBtn from "../../../public/buttons/quests.svg";

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
