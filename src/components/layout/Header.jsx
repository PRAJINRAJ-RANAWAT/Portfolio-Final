import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { navItems } from "../../data/site";
import { profile } from "../../data/profile";
import ThemeToggle from "../ui/ThemeToggle";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 bg-light/95 dark:bg-dark/95 border-b border-black/10 dark:border-white/10 backdrop-blur-sm font-mont transition-[padding] duration-300 ${
        scrolled ? "py-3" : "py-5"
      } px-6 sm:px-6 md:px-8 lg:px-12 xl:px-20`}
    >
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between">
        <NavLink to="/" className="font-black text-lg tracking-tight" onClick={() => setMobileOpen(false)}>
          {profile.name.split(" ")[0]}
          <span className="text-accent font-mono">.</span>
        </NavLink>

        <nav className="hidden sm:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `relative font-mono text-xs uppercase tracking-widest font-bold py-1 transition-colors ${
                  isActive ? "text-accent-ink dark:text-accent" : "hover:text-accent-ink dark:hover:text-accent"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.title}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-accent transition-all duration-300 ease-quart ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn-sm px-4 py-2 font-mono text-xs uppercase tracking-wider"
            >
              Resume
            </a>
          )}
          <ThemeToggle />
        </div>

        <div className="sm:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="brutal-btn-sm w-10 h-10 !p-0"
          >
            {mobileOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-light dark:bg-dark border-b-4 border-dark dark:border-light px-6 py-6">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `font-mont font-black text-2xl ${isActive ? "text-accent-ink dark:text-accent" : ""}`
                }
              >
                {item.title}
              </NavLink>
            ))}
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="font-mont font-black text-2xl"
              >
                Resume ↗
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
