import { useRef } from "react";

const GlowingGridCard = ({ children, index }) => {
  const cardRef = useRef();

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="glow-card-container cursor-pointer"
    >
      <div className="glow"></div>
      {children}
    </div>
  );
};

export default GlowingGridCard;
