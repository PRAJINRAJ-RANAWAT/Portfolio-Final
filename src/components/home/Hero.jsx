import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { profile } from "../../data/profile";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const Hero = () => {
  const photoColRef = useRef(null);
  const textColRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const [firstName, ...rest] = profile.name.split(" ");
  const lastName = rest.join(" ");

  useEffect(() => {
    if (reducedMotion) return;
    gsap.fromTo(
      photoColRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", delay: 0.1 }
    );
    gsap.fromTo(
      textColRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", delay: 0.25 }
    );
  }, [reducedMotion]);

  return (
    <section className="relative pt-8 pb-10 md:pt-16">
      <div className="flex flex-col md:flex-row items-center gap-10 md:min-h-[70vh]">
        <div ref={photoColRef} className="w-full md:w-2/5 flex justify-center p-2 sm:p-6">
          <div className="group relative w-full max-w-[380px]">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-4 sm:translate-y-4 rounded-2xl border-4 border-dark dark:border-light bg-pop-cyan"
            />
            <div
              className="relative aspect-square rounded-2xl border-4 border-dark dark:border-light overflow-hidden bg-light dark:bg-dark -rotate-2 group-hover:rotate-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 ease-quart motion-reduce:rotate-0 motion-reduce:transition-none flex items-center justify-center"
            >
              {profile.photo ? (
                <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover" />
              ) : (
                <span className="font-mont font-black text-8xl text-dark dark:text-light select-none">
                  {profile.initials}
                </span>
              )}
            </div>
          </div>
        </div>

        <div ref={textColRef} className="w-full md:w-3/5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-mont tracking-tight">
            HELLO, I&apos;M{" "}
            <span className="text-accent-ink dark:text-accent font-mono">{firstName.toUpperCase()}</span>
            {lastName ? "." : ""}
          </h1>
          <p className="font-mono text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mt-2 tracking-wide">
            {profile.tagline}
          </p>

          <div className="mt-6 space-y-4 text-sm md:text-base text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
            <p>{profile.bio[0]}</p>
            <p>
              {profile.employer?.name && (
                <>
                  I&apos;m currently working at{" "}
                  <span className="font-semibold text-accent-ink dark:text-accent underline decoration-dotted underline-offset-[5px]">
                    {profile.employer.name}
                  </span>
                  .{" "}
                </>
              )}
              {profile.bio[1]}
            </p>
            {profile.bio.slice(2).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="brutal-btn bg-accent text-black">
              View Projects
            </Link>
            <Link to="/contact" className="brutal-btn bg-light dark:bg-dark">
              Get in touch
            </Link>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn bg-light dark:bg-dark"
              >
                Resume ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
