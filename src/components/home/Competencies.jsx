import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionEyebrow from "../ui/SectionEyebrow";
import FloatingCard from "../ui/FloatingCard";
import { competencies } from "../../data/competencies";
import { POP_COLORS } from "../../utils/colors";

gsap.registerPlugin(ScrollTrigger);

const Competencies = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current.querySelectorAll(".competency-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
      }
    );
  }, []);

  return (
    <section className="py-16">
      <SectionEyebrow>What I bring</SectionEyebrow>
      <h2 className="text-3xl sm:text-4xl font-black font-mont mb-3">Core Competencies</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-10">
        The stack and skills I reach for most, grouped by what they let me build.
      </p>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {competencies.map((c, i) => (
          <FloatingCard
            key={c.title}
            as="article"
            floatDelay={i * 0.6}
            className="competency-card brutal-card p-6 flex flex-col isolate"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-2xl"
              style={{ backgroundColor: POP_COLORS[c.color] }}
            />
            <h3 className="font-mont font-black text-xl mb-4">{c.title}</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {c.tags.map((tag) => (
                <span key={tag} className="brutal-chip">
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-auto border-l-4 border-dark dark:border-light bg-white/50 dark:bg-white/10 rounded-r-lg pl-3 py-2 text-sm">
              {c.blurb}
            </p>
          </FloatingCard>
        ))}
      </div>
    </section>
  );
};

export default Competencies;
