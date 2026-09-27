import React, { useEffect, useRef, useState } from "react";
import SectionEyebrow from "../ui/SectionEyebrow";
import { skillCards } from "../../data/skillCards";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const RADIUS = 480;
const AUTO_SPEED = 4; // deg / second

const SkillCardBody = ({ card }) => {
  const Icon = card.icon;
  return (
    <>
      <div className="flex items-start justify-between">
        <span className="bg-white text-black text-[10px] font-mono font-black uppercase tracking-wider px-2 py-1 rounded-md border-2 border-dark">
          {card.category}
        </span>
        <span className="font-mono text-xs font-black text-white/80">{card.code}</span>
      </div>
      <div className="mx-auto my-4 w-16 h-16 rounded-2xl bg-white border-2 border-dark flex items-center justify-center shadow-[3px_3px_0_0_#000]">
        <Icon className="w-9 h-9" style={{ color: card.gradient[1] }} />
      </div>
      <h3 className="font-mont font-black text-xl text-black">{card.name}</h3>
      <p className="text-xs text-black/70 font-medium mt-1 leading-snug">{card.description}</p>
      <div className="mt-auto pt-3 border-t-2 border-black/20 flex items-center justify-between">
        <span className="font-mono text-[10px] font-black uppercase tracking-wider text-black">{card.level}</span>
        <span className="font-mono text-[10px] font-black uppercase tracking-wider text-black">{card.years}</span>
      </div>
    </>
  );
};

const SkillCard = ({ card, angle }) => (
  <div
    className="skill-ring-card"
    style={{
      "--angle": `${angle}deg`,
      "--radius": `${RADIUS}px`,
      background: `linear-gradient(160deg, ${card.gradient[0]}, ${card.gradient[1]})`,
    }}
  >
    <SkillCardBody card={card} />
  </div>
);

const TechSkillCards = () => {
  const reducedMotion = useReducedMotion();
  const ringRef = useRef(null);
  const rotationRef = useRef(0);
  const dragState = useRef(null);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  const anglePerCard = 360 / skillCards.length;

  const applyRotation = () => {
    if (ringRef.current) {
      ringRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;
    }
  };

  useEffect(() => {
    if (reducedMotion) return undefined;

    const tick = (time) => {
      if (lastTimeRef.current == null) lastTimeRef.current = time;
      const dt = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;
      if (!dragging) {
        rotationRef.current += AUTO_SPEED * dt;
        applyRotation();
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
    };
  }, [dragging, reducedMotion]);

  const onPointerDown = (e) => {
    if (reducedMotion) return;
    dragState.current = { startX: e.clientX, startRotation: rotationRef.current };
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!dragState.current) return;
    const deltaX = e.clientX - dragState.current.startX;
    rotationRef.current = dragState.current.startRotation + deltaX * 0.35;
    applyRotation();
  };

  const endDrag = () => {
    dragState.current = null;
    setDragging(false);
  };

  if (reducedMotion) {
    return (
      <section className="py-16">
        <SectionEyebrow>Toolbox</SectionEyebrow>
        <h2 className="text-3xl sm:text-4xl font-black font-mont mb-3">Tech Skill Cards</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-10">
          The tools I reach for most, by category and experience level.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {skillCards.map((card) => (
            <div
              key={card.name}
              className="skill-ring-card !relative !top-0 !left-0 !transform-none"
              style={{ background: `linear-gradient(160deg, ${card.gradient[0]}, ${card.gradient[1]})` }}
            >
              <SkillCardBody card={card} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 text-center">
      <SectionEyebrow>Toolbox</SectionEyebrow>
      <h2 className="text-3xl sm:text-4xl font-black font-mont mb-3">Tech Skill Cards</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-14">
        Drag or swipe to spin the ring · Hover a card to press it
      </p>

      <div
        className="skill-ring-stage"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        <div ref={ringRef} className="skill-ring">
          {skillCards.map((card, i) => (
            <SkillCard key={card.name} card={card} angle={i * anglePerCard} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSkillCards;
