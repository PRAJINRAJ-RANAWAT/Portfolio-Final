import React, { useState } from "react";
import { CameraIcon } from "@heroicons/react/24/outline";
import SectionEyebrow from "../ui/SectionEyebrow";
import { hackathons } from "../../data/hackathons";

const HackathonShowcase = () => {
  const [active, setActive] = useState(0);
  const entry = hackathons[active];
  const metaFields = [
    ["Duration", entry.duration],
    ["Location", entry.location],
    ["Team", entry.team],
    ["Date", entry.date],
  ].filter(([, value]) => Boolean(value));

  return (
    <section className="py-16">
      <SectionEyebrow>Victory Archives</SectionEyebrow>
      <h2 className="text-3xl sm:text-4xl font-black font-mont mb-3">Hackathon Proof Of Work</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-10">
        Detailed breakdown of major victories, technologies used, and impact created.
      </p>

      {hackathons.length > 1 && (
        <div className="flex items-center gap-6 mb-10 overflow-x-auto no-scrollbar">
          {hackathons.map((h, i) => (
            <button
              key={h.title}
              type="button"
              onClick={() => setActive(i)}
              className="flex flex-col items-center gap-2 shrink-0"
            >
              <span
                className={`font-mono text-xs font-black px-3 py-1 border-2 border-dark dark:border-light rounded-md ${
                  i === active ? "bg-accent text-black" : "bg-transparent"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-gray-500">{h.date}</span>
            </button>
          ))}
        </div>
      )}

      <div className="brutal-card overflow-hidden">
        <div
          className="p-6 sm:p-8"
          style={{ background: `linear-gradient(120deg, ${entry.gradient[0]}, ${entry.gradient[1]})` }}
        >
          <span className="inline-block bg-white text-black text-[10px] font-mono font-black uppercase tracking-wider px-3 py-1 rounded-md border-2 border-dark mb-4">
            {entry.badge}
          </span>
          <h3 className="text-2xl sm:text-3xl font-black font-mont uppercase text-black">{entry.title}</h3>
          <p className="text-sm font-medium text-black/70 mt-1">{entry.eventLine}</p>
        </div>

        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            {metaFields.length > 0 && (
              <div className="grid grid-cols-2 gap-6 mb-6">
                {metaFields.map(([label, value]) => (
                  <div key={label}>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-gray-500 mb-1">{label}</p>
                    <p className="font-bold font-mont">{value}</p>
                  </div>
                ))}
              </div>
            )}

            {entry.features && (
              <div className="border-t border-dashed border-dark/30 dark:border-light/30 pt-6 mb-6">
                <p className="font-mono text-[10px] uppercase tracking-wider text-gray-500 mb-3">Key Features</p>
                <ul className="space-y-2">
                  {entry.features.map((f) => (
                    <li
                      key={f}
                      className="border-l-4 border-accent bg-black/5 dark:bg-white/5 rounded-r-md pl-3 py-2 text-sm"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {entry.techStack && (
              <>
                <p className="font-mono text-[10px] uppercase tracking-wider text-gray-500 mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {entry.techStack.map((t) => (
                    <span key={t} className="brutal-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="border-2 border-dashed border-dark/30 dark:border-light/30 rounded-2xl flex flex-col items-center justify-center gap-3 p-10 text-center min-h-[260px] text-gray-500">
            <CameraIcon className="w-10 h-10" />
            <p className="text-sm font-medium">Team photo coming soon</p>
          </div>
        </div>

        {entry.stats && (
          <div className="border-t border-dashed border-dark/30 dark:border-light/30 grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 sm:p-8">
            {entry.stats.map((s) => (
              <div key={s.label}>
                <p className="font-mont font-black text-2xl sm:text-3xl">{s.value}</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HackathonShowcase;
