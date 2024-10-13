import { widthHalfInterval } from "@vkontakte/vkui/dist/lib/adaptivity/breakpoints";
import shopBtn from "../../assets/shopBtn.svg";
import { Image } from "@vkontakte/vkui";
export default function ShopButton({ onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <img src={shopBtn} style={{ width: "60px" }} />
    </div>
  );
}
