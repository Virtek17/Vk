import React from "react";
import { Image } from "@vkontakte/vkui";
import "../../style/main.css";
import tShirt from "../../../public/unit_clothes/tshirt.png";
import pants from "../../../public/unit_clothes/pants.png";
import sneakers from "../../../public/unit_clothes/sneakers.png";
import sneakers2 from "../../../public/unit_clothes/sneakers2.png";
import tShirt2 from "../../../public/unit_clothes/tshirt2.png";

const MainContent = ({
  handleClick,
  score,
  bust,
  level,
  images,
  isZoomed,
  particles,
  showTshirt,
  showPants,
  showSneaker,
  showSneaker2,
  showTshirt2,
}) => {
  return (
    <div className="MyMain" onClick={handleClick}>
      <Image
        keepAspectRatio
        // src={images[level - 1] || images[2]}
        src={images[0]}
        alt="Тапни monkey"
        widthSize={120}
        noBorder
        className={isZoomed ? "zoomed" : ""}
        style={{
          userSelect: "none",
          position: "relative",
          bottom: "20px",
          left: "-10px",
        }}
      >
        {particles.map((particle) => (
          <p
            key={particle.id}
            className="particle"
            style={{
              top: `${particle.y}px`,
              left: `${particle.x}px`,
              color: particle.color,
              fontFamily: "crooker",
              fontSize: "25px",
            }}
          >
            {`+${bust}`}
          </p>
        ))}

        <img
          src={tShirt}
          alt="футболка"
          className={`tshirt ${showTshirt ? "show" : ""}`}
        />
        <img
          src={pants}
          alt="штаны"
          className={`pants ${showPants ? "show" : ""}`}
        />
        <img
          src={sneakers}
          alt="кроссовки"
          className={`sneakers ${showSneaker ? "show" : ""}`}
        />
        <img
          src={sneakers2}
          alt="кроссовки"
          className={`sneakers2  ${showSneaker2 ? "show" : ""}`}
        />
        <img
          src={tShirt2}
          alt="футболка2"
          className={`tshirt2  ${showTshirt2 ? "show" : ""}`}
        />
      </Image>
    </div>
  );
};

export default MainContent;
