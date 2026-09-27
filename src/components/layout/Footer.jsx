import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "../../data/profile";

const Footer = () => (
  <footer className="border-t-4 border-dark dark:border-light font-mont bg-light dark:bg-dark">
    <div className="max-w-[1440px] mx-auto px-6 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-6 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-3 text-sm text-center sm:text-left">
        <span className="font-mono text-xs uppercase tracking-widest">
          {new Date().getFullYear()} © All Rights Reserved
        </span>
        <span className="hidden sm:inline text-black/30 dark:text-white/30">|</span>
        <span>
          Built with <span className="text-base">💚</span> by{" "}
          <a href="/" className="font-bold text-accent-ink dark:text-accent underline-offset-4 hover:underline">
            {profile.name.split(" ")[0]}
          </a>
        </span>
      </div>

      <div className="flex items-center gap-2">
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="brutal-btn-sm w-10 h-10 !p-0"
        >
          <FaGithub size={18} />
        </a>
        <a
          href={profile.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="brutal-btn-sm w-10 h-10 !p-0"
        >
          <FaLinkedin size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
