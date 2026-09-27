import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "../../data/profile";

const ContactInfoPanel = () => (
  <div className="brutal-card p-6 flex flex-col gap-5">
    <span className="brutal-chip self-start">
      <span className="w-2 h-2 rounded-full bg-accent animate-pulse motion-reduce:animate-none" />
      {profile.status}
    </span>

    <div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-1">Email</p>
      <a href={`mailto:${profile.email}`} className="font-bold hover:underline break-all">
        {profile.email}
      </a>
    </div>

    <div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-1">Location</p>
      <p className="font-bold">{profile.location}</p>
    </div>

    <div className="flex gap-2 mt-2">
      <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="brutal-btn-sm w-10 h-10 !p-0">
        <FaGithub size={18} />
      </a>
      <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="brutal-btn-sm w-10 h-10 !p-0">
        <FaLinkedin size={18} />
      </a>
    </div>
  </div>
);

export default ContactInfoPanel;
