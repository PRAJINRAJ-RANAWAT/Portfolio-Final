import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionEyebrow from "../ui/SectionEyebrow";
import ExperienceRoad from "./ExperienceRoad";
import { experiences } from "../../data/experience";
import { profile } from "../../data/profile";

gsap.registerPlugin(ScrollTrigger);

const VISIBLE_BULLETS = 2;

const ExperienceCard = ({ exp, index, itemRef }) => {
  const [expanded, setExpanded] = useState(false);
  const extra = exp.bullets.length - VISIBLE_BULLETS;
  const visibleBullets = expanded ? exp.bullets : exp.bullets.slice(0, VISIBLE_BULLETS);
  const alignRight = index % 2 === 1;

  return (
    <li
      ref={itemRef}
      className={`experience-item relative z-10 w-full self-start lg:w-[46%] ${alignRight ? "lg:self-end" : ""}`}
    >
      <div className="brutal-card p-6">
        <h3 className="font-bold text-lg font-mont">
          {exp.role}
          {exp.org && (
            <>
              {" "}
              @{" "}
              <span className="text-accent-ink dark:text-accent underline decoration-dotted underline-offset-[4px]">
                {exp.org}
              </span>
            </>
          )}
        </h3>
        <p className="font-mono text-[10px] uppercase tracking-wider text-gray-500 mt-1">
          {exp.start} – {exp.end} · {exp.location} · {exp.mode}
        </p>
        <ul className="list-disc pl-4 space-y-1 mt-4 text-sm text-gray-700 dark:text-gray-300">
          {visibleBullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
        {extra > 0 && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="mt-3 font-mono text-xs uppercase tracking-wider text-accent-ink dark:text-accent hover:underline"
          >
            {expanded ? "Show less" : `+${extra} more`}
          </button>
        )}
      </div>
    </li>
  );
};

const Experience = () => {
  const listRef = useRef(null);
  const roadContainerRef = useRef(null);
  const educationRef = useRef(null);
  const itemRefs = useRef([]);
  itemRefs.current = experiences.map((_, i) => itemRefs.current[i] || React.createRef());

  const roadNodes = [
    ...experiences.map((_, i) => ({ ref: itemRefs.current[i], side: i % 2 === 0 ? "left" : "right" })),
    ...(profile.education ? [{ ref: educationRef, side: experiences.length % 2 === 0 ? "left" : "right" }] : []),
  ];

  useEffect(() => {
    const items = listRef.current.querySelectorAll(".experience-item");
    gsap.fromTo(
      items,
      { opacity: 0, x: (i) => (i % 2 === 0 ? -60 : 60) },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: listRef.current, start: "top 85%" },
      }
    );
  }, []);

  return (
    <section className="py-16">
      <SectionEyebrow>Where I have worked</SectionEyebrow>
      <h2 className="text-3xl sm:text-4xl font-black font-mont mb-3">Experience</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-10">
        Roles where I've turned ideas into shipped, working software.
      </p>

      <div ref={roadContainerRef} className="relative">
        <ExperienceRoad containerRef={roadContainerRef} nodes={roadNodes} />

        <ol ref={listRef} className="relative flex flex-col gap-6 lg:gap-10">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={`${exp.org}-${exp.role}`}
              exp={exp}
              index={index}
              itemRef={itemRefs.current[index]}
            />
          ))}
        </ol>

        {profile.education && (
          <div ref={educationRef} className="experience-item relative z-10 brutal-card p-6 mt-10 max-w-xl">
            <span className="brutal-chip mb-3">Education</span>
            <h3 className="font-bold text-lg font-mont">{profile.education.degree}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{profile.education.school}</p>
            <p className="font-mono text-[10px] uppercase tracking-wider text-gray-500 mt-2">
              {profile.education.start} – {profile.education.end} · {profile.education.location} ·{" "}
              {profile.education.detail}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
