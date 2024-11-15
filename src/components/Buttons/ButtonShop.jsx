import shopBtn from "../../../public/buttons/shop.svg";

export default function ShopButton({ onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        userSelect: "none",
        paddingTop: "35px",
      }}
    >
      <img src={shopBtn} style={{ width: "60px" }} />
    </div>
  );
}
