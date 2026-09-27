import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionEyebrow from "../ui/SectionEyebrow";
import ProjectCard from "../projects/ProjectCard";
import { projects } from "../../data/projects";

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjects = () => {
  const stackRef = useRef(null);
  const featured = projects.filter((p) => p.featured);

  useEffect(() => {
    const cards = stackRef.current.querySelectorAll(".featured-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: stackRef.current, start: "top 85%" },
      }
    );
  }, []);

  return (
    <section className="py-16">
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <SectionEyebrow>Selected work</SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl font-black font-mont mb-3">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            A few things I've built recently. Hover a card for a closer look.
          </p>
        </div>
        <Link to="/projects" className="brutal-btn-sm px-4 py-2 font-mono text-xs uppercase tracking-wider">
          View all →
        </Link>
      </div>

      <div ref={stackRef} className="flex flex-col gap-8">
        {featured.map((project, i) => (
          <div key={project.slug} className="featured-card">
            <ProjectCard project={project} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
