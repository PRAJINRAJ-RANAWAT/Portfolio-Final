import React, { useRef } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

// A "floating" card: gentle idle bob when at rest, pointer-tracked 3D tilt on hover.
// Disabled under prefers-reduced-motion.
const FloatingCard = ({ children, className = "", floatDelay = 0, style = {}, as: Tag = "div", ...rest }) => {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();

  const handleMouseMove = (e) => {
    if (reducedMotion || !ref.current) return;
    // Pause the idle bob keyframe while tilting, so it doesn't fight the
    // pointer-driven transform (a running CSS animation on `transform`
    // otherwise overrides the inline value every frame).
    ref.current.style.animationPlayState = "paused";
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 14;
    const rotateX = (0.5 - py) * 14;
    ref.current.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "";
    ref.current.style.animationPlayState = "running";
  };

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${className} ${reducedMotion ? "" : "will-change-transform"}`}
      style={{
        ...style,
        ...(reducedMotion
          ? {}
          : { animation: `car-bob 5s ease-in-out ${floatDelay}s infinite`, "--lift": "5px", "--sway": "0.6deg" }),
        transition: "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default FloatingCard;
