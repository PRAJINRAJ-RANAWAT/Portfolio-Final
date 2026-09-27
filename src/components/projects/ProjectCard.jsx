import React from "react";
import { popColorAt } from "../../utils/colors";

const ProjectCard = ({ project, index = 0 }) => {
  const backing = popColorAt(index);

  return (
    <article className="brutal-card p-6 sm:p-5 isolate relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-2xl"
        style={{ backgroundColor: backing }}
      />
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:gap-8">
        <div className="flex-1 min-w-0">
          {project.links.repo ? (
            <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="inline-block">
              <h3 className="font-black font-mont text-xl sm:text-2xl hover:underline decoration-4 underline-offset-4">
                {project.title}
              </h3>
            </a>
          ) : (
            <h3 className="font-black font-mont text-xl sm:text-2xl">{project.title}</h3>
          )}
          <p className="mt-3 text-sm font-medium border-l-4 border-dark dark:border-light bg-white/40 dark:bg-white/10 rounded-r-lg pl-4 py-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="w-full flex flex-col items-start gap-4 lg:w-[280px] lg:shrink-0 lg:items-end">
          <div className="flex flex-wrap items-center justify-start gap-2 lg:justify-end">
            {project.badge && (
              <span className="brutal-chip">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse border border-black motion-reduce:animate-none" />
                {project.badge}
              </span>
            )}
            {project.tags.map((tag) => (
              <span key={tag} className="brutal-chip">
                {tag}
              </span>
            ))}
          </div>

          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn bg-dark text-light dark:bg-light dark:text-dark"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
