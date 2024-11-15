import React from "react";

const Particles = ({ particles }) => {
  return particles.map((particle) => (
    <p
      key={particle.id}
      className="particle"
      style={{
        top: `${particle.y}px`,
        left: `${particle.x}px`,
        color: particle.color,
      }}
    >
      {`+${particle.bust}`}
    </p>
  ));
};

export default Particles;
