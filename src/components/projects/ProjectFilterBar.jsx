import React from "react";

const ProjectFilterBar = ({ categories, counts, active, onChange }) => (
  <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2 mb-10">
    {categories.map((category) => {
      const isActive = category === active;
      return (
        <button
          key={category}
          type="button"
          aria-pressed={isActive}
          onClick={() => onChange(category)}
          className="brutal-chip"
          style={
            isActive
              ? { backgroundColor: "var(--color-accent)", color: "#000", transform: "translate(2px,2px)", boxShadow: "none" }
              : undefined
          }
        >
          {category} <span className="opacity-60 tabular-nums">{counts[category] ?? 0}</span>
        </button>
      );
    })}
  </div>
);

export default ProjectFilterBar;
