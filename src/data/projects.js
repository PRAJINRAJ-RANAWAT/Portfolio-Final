import { formbuilder, codeagent, foodapp } from "../assets";

export const projects = [
  {
    slug: "protract",
    title: "PROTRACT",
    description:
      "An AI-powered real-time financial fraud detection system combining a Graph Neural Network with XGBoost and RAG-based explainability — 94% fraud classification accuracy across 10,000+ transactions and a 38% cut in false-positive alerts versus threshold baselines. Won 1st place among 1,200+ teams at HackNUThon 6.0.",
    tags: ["Python", "PyTorch", "GNN", "XGBoost", "FastAPI", "RAG"],
    image: null,
    links: {
      repo: null,
    },
    category: "Hackathon",
    featured: true,
    flagship: true,
    badge: "🏆 1st Place — HackNUThon 6.0",
  },
  {
    slug: "nexuscrm",
    title: "NexusCRM",
    description:
      "A scalable, multi-tiered CRM intelligence platform with a natural-language-to-SQL query engine built on LangChain, integrating live Salesforce REST API data with MySQL storage and AI-powered win-probability scoring — cut report generation time by ~65% for business users.",
    tags: ["Python", "LangChain", "SQL", "Docker"],
    image: null,
    links: {
      repo: null,
    },
    category: "AI",
    featured: true,
    flagship: false,
  },
  {
    slug: "paper2voice",
    title: "Paper2Voice",
    description:
      "A fault-tolerant, multimodal processing pipeline built with LangGraph that extracts findings from research papers, structures dual-speaker scripts, and synthesizes 44.1kHz audio — processed 30+ papers with zero pipeline failures at 2–12 minute end-to-end latency.",
    tags: ["Python", "LangGraph", "Gemini API"],
    image: null,
    links: {
      repo: null,
    },
    category: "AI",
    featured: true,
    flagship: false,
  },
  {
    slug: "formcraft",
    title: "FormCraft",
    description:
      "An AI-powered MERN app that generates responsive web forms from natural language prompts, with dynamic fields, real-time previews, and secure MySQL storage.",
    tags: ["React", "Node.js", "MySQL", "Groq AI"],
    image: formbuilder,
    links: {
      repo: "https://github.com/PRAJINRAJ-RANAWAT/FormCraft-Dynamic-Form-Builder",
    },
    category: "AI",
    featured: true,
    flagship: false,
  },
  {
    slug: "code-assistant",
    title: "Code Assistant",
    description:
      "A LangGraph-powered AI Streamlit app that generates clean Python code from natural language prompts, auto-fixes errors, and lets you debug and download scripts easily.",
    tags: ["LangGraph", "Streamlit", "OpenAI"],
    image: codeagent,
    links: {
      repo: "https://github.com/PRAJINRAJ-RANAWAT/Langgraph-Code-Assistant",
    },
    category: "AI",
    featured: false,
    flagship: false,
  },
  {
    slug: "tomato",
    title: "Tomato",
    description:
      "A food delivery web app covering browsing, cart management, and checkout across a range of product categories.",
    tags: ["React", "HTML", "CSS"],
    image: foodapp,
    links: {
      repo: "https://github.com/PRAJINRAJ-RANAWAT/Food-Delivery-Website",
    },
    category: "Personal",
    featured: false,
    flagship: false,
  },
];

export const projectCategories = ["All", "Hackathon", "AI", "Personal"];
