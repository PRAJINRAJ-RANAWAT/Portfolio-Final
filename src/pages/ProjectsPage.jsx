import React, { useMemo, useState } from "react";
import SectionEyebrow from "../components/ui/SectionEyebrow";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectFilterBar from "../components/projects/ProjectFilterBar";
import { projects, projectCategories } from "../data/projects";

const ProjectsPage = () => {
  const [active, setActive] = useState("All");

  const counts = useMemo(() => {
    const c = { All: projects.length };
    projectCategories.forEach((cat) => {
      if (cat === "All") return;
      c[cat] = projects.filter((p) => p.category === cat).length;
    });
    return c;
  }, []);

  const flagship = projects.find((p) => p.flagship);
  const rest = projects.filter((p) => p !== flagship);
  const visible = rest.filter((p) => active === "All" || p.category === active);
  const showFlagship = flagship && (active === "All" || flagship.category === active);

  return (
    <section className="py-16">
      <SectionEyebrow>Full registry</SectionEyebrow>
      <h1 className="text-3xl sm:text-4xl font-black font-mont mb-3">Explore My Project Registry!</h1>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
        Every project I've shipped, filterable by category.
      </p>

      <ProjectFilterBar categories={projectCategories} counts={counts} active={active} onChange={setActive} />

      <div className="flex flex-col gap-8">
        {showFlagship && <ProjectCard project={flagship} index={0} />}
        {visible.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i + 1} />
        ))}
        {!showFlagship && visible.length === 0 && (
          <div className="brutal-card p-8 text-center text-gray-600 dark:text-gray-400">
            No projects in this category yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
