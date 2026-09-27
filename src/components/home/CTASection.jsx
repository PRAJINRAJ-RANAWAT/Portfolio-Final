import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="py-16">
    <div className="brutal-card p-10 sm:p-6 text-center bg-dark text-light dark:bg-light dark:text-dark">
      <h2 className="text-2xl sm:text-3xl font-black font-mont mb-3">Let's build something.</h2>
      <p className="text-gray-300 dark:text-gray-600 mb-6 max-w-xl mx-auto">
        Have a project in mind, or just want to talk about AI agents and full-stack builds? I'd love to hear from
        you.
      </p>
      <Link to="/contact" className="brutal-btn bg-accent text-black">
        Contact me
      </Link>
    </div>
  </section>
);

export default CTASection;
