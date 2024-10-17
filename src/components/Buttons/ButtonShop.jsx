import { widthHalfInterval } from "@vkontakte/vkui/dist/lib/adaptivity/breakpoints";
import shopBtn from "../../assets/shopBtn.svg";
import { Image } from "@vkontakte/vkui";
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
