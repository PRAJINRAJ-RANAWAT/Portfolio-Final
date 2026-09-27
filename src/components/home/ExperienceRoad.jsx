import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { useReducedMotion } from "../../hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

// Draws a winding "road" SVG connecting a sequence of timeline nodes
// (alternating left/right), with a marker that travels along it on scroll.
// Desktop-only (the alternating layout it traces only exists at lg+).
const ExperienceRoad = ({ containerRef, nodes }) => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const markerRef = useRef(null);
  const [box, setBox] = useState(null);
  const [d, setD] = useState("");
  const reducedMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useLayoutEffect(() => {
    if (!isDesktop || !containerRef.current) return undefined;

    const measure = () => {
      const container = containerRef.current;
      if (!container) return;
      const cRect = container.getBoundingClientRect();
      const points = nodes
        .map(({ ref, side }) => {
          if (!ref.current) return null;
          const r = ref.current.getBoundingClientRect();
          const x = side === "left" ? r.right - cRect.left : r.left - cRect.left;
          const y = r.top + r.height / 2 - cRect.top;
          return { x, y };
        })
        .filter(Boolean);

      if (points.length < 2) return;

      let path = `M ${points[0].x} ${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        const p0 = points[i - 1];
        const p1 = points[i];
        const midY = (p0.y + p1.y) / 2;
        path += ` C ${p0.x} ${midY}, ${p1.x} ${midY}, ${p1.x} ${p1.y}`;
      }
      setD(path);
      setBox({ width: cRect.width, height: cRect.height });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(containerRef.current);
    const t = setTimeout(measure, 300); // re-measure after fonts/images settle
    return () => {
      ro.disconnect();
      clearTimeout(t);
    };
  }, [isDesktop, containerRef, nodes]);

  useEffect(() => {
    if (!isDesktop || reducedMotion || !d || !pathRef.current || !markerRef.current || !containerRef.current) {
      return undefined;
    }

    const pathEl = pathRef.current;
    const marker = markerRef.current;
    const total = pathEl.getTotalLength();

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 75%",
      end: "bottom 60%",
      scrub: 0.5,
      onUpdate: (self) => {
        const pt = pathEl.getPointAtLength(self.progress * total);
        marker.style.transform = `translate(${pt.x - 16}px, ${pt.y - 16}px)`;
      },
    });

    return () => trigger.kill();
  }, [isDesktop, reducedMotion, d, containerRef]);

  if (!isDesktop || !d || !box) return null;

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 pointer-events-none z-0"
      width={box.width}
      height={box.height}
      viewBox={`0 0 ${box.width} ${box.height}`}
      aria-hidden="true"
    >
      <path d={d} stroke="var(--color-pane-edge)" strokeWidth="26" fill="none" strokeLinecap="round" opacity="0.9" />
      <path d={d} stroke="#2b2b2b" strokeWidth="19" fill="none" strokeLinecap="round" />
      <path
        ref={pathRef}
        d={d}
        stroke="var(--color-accent)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="14 14"
        opacity="0.85"
      />
      <foreignObject ref={markerRef} width="32" height="32" style={{ overflow: "visible" }}>
        <div className="w-8 h-8 rounded-full bg-accent border-2 border-dark flex items-center justify-center shadow-[2px_2px_0_0_#000]">
          <RocketLaunchIcon className="w-4 h-4 text-black" />
        </div>
      </foreignObject>
    </svg>
  );
};

export default ExperienceRoad;
