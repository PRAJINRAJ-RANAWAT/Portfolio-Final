
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  foodapp,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  formbuilder,
  mui,
  langgraph,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  codeagent,
  
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI-ML Developer",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "langgraph",
    icon: langgraph,
  },
  
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Tekisky",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];



const projects = [
  {
    name: "FormCraft",
    description:
      "FormCraft is an AI-powered MERN app that generates responsive web forms from natural language prompts, featuring dynamic fields, real-time previews, and secure MySQL storage.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "groq ai",
        color: "green-text-gradient",
      },
 
    ],
    image: formbuilder,
    source_code_link: "https://github.com/PRAJINRAJ-RANAWAT/FormCraft-Dynamic-Form-Builder",
  },
  {
    name: "Code Assistant",
    description:
      "LangGraph Code Assistant is an AI-powered Streamlit app that generates clean Python code from natural language prompts, auto-fixes errors, and lets you debug and download scripts easily.",
    tags: [
      {
        name: "langgraph",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: codeagent,
    source_code_link: "https://github.com/PRAJINRAJ-RANAWAT/Langgraph-Code-Assistant",
  },
  {
    name: "Tomato",
    description:
      "Go-Groove is your ultimate destination for premium products across various categories. Whether you're a savvy shopper or a professional, enhance, and simplify your lifestyle—all in one place!",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      
    ],
    image: foodapp,
    source_code_link: "https://github.com/PRAJINRAJ-RANAWAT/Food-Delivery-Website",
  },
];

export { services, technologies, experiences, projects };
