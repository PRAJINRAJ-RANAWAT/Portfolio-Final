import React from "react";
import Hero from "../components/home/Hero";
import Competencies from "../components/home/Competencies";
import TechSkillCards from "../components/home/TechSkillCards";
import Experience from "../components/home/Experience";
import HackathonShowcase from "../components/home/HackathonShowcase";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Workflow from "../components/home/Workflow";
import BlogPreview from "../components/home/BlogPreview";
import CTASection from "../components/home/CTASection";

const Home = () => (
  <>
    <Hero />
    <Competencies />
    <TechSkillCards />
    <Experience />
    <HackathonShowcase />
    <FeaturedProjects />
    <Workflow />
    <BlogPreview />
    <CTASection />
  </>
);

export default Home;
