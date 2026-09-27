import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionEyebrow from "../ui/SectionEyebrow";
import { workflow } from "../../data/workflow";

gsap.registerPlugin(ScrollTrigger);

const Workflow = () => {
  const listRef = useRef(null);

  useEffect(() => {
    const rows = listRef.current.querySelectorAll(".workflow-row");
    gsap.fromTo(
      rows,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: listRef.current, start: "top 85%" },
      }
    );
  }, []);

  return (
    <section className="py-16">
      <SectionEyebrow>Development Pipeline</SectionEyebrow>
      <h2 className="text-3xl sm:text-4xl font-black font-mont mb-3">How I Bring Your Vision To Life</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-10">
        A transparent, iterative workflow focused on quality, speed, and measurable results.
      </p>

      <div ref={listRef} className="border-t-2 border-dark/15 dark:border-light/15">
        {workflow.map((item) => (
          <div
            key={item.step}
            className="workflow-row group"
            style={{ "--row-grad": `linear-gradient(90deg, ${item.gradient[0]}, ${item.gradient[1]})` }}
          >
            <span className="workflow-num">{item.step}</span>
            <div className="flex-1 min-w-0">
              <h3 className="flex items-center gap-2 font-mont font-black text-xl">
                <span className="w-3 h-3 rounded-full border-2 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 group-hover:text-black mt-1 transition-colors duration-200">
                {item.description}
              </p>
            </div>
            <span className="workflow-arrow" aria-hidden="true">
              →
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;
