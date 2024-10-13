import React from "react";
import { Image } from "@vkontakte/vkui";
import "../style/main.css";

const MainContent = ({
  handleClick,
  score,
  bust,
  level,
  images,
  isZoomed,
  particles,
}) => {
  return (
    <div className="MyMain">
      <Image
        onClick={handleClick}
        keepAspectRatio
        src={images[level - 1] || images[2]}
        alt="Тапни monkey"
        widthSize={150}
        noBorder
        className={isZoomed ? "zoomed" : ""}
        style={{ userSelect: "none" }}
      >
        {particles.map((particle) => (
          <p
            key={particle.id}
            className="particle"
            style={{
              top: `${particle.y}px`,
              left: `${particle.x}px`,
              color: particle.color,
            }}
          >
            {`+${bust}`}
          </p>
        ))}
      </Image>
    </div>
  );
};

export default MainContent;
