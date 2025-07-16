import { Github, Linkedin } from "lucide-react";

import Typescript from "/public/images/icons/typescript.svg";
import ReactIcon from "/public/images/icons/react.svg";
import Nextjs from "/public/images/icons/nextjs.svg";
import SQL from "/public/images/icons/sql.webp";
import HTML from "/public/images/icons/html.svg";
import CSS from "/public/images/icons/css.svg";
import Kotlin from "/public/images/icons/kotlin.png";
import Java from "/public/images/icons/java.svg";
import TailwindCSS from "/public/images/icons/tailwindcss.png";
import Figma from "/public/images/icons/figma.webp";
import Python from "/public/images/icons/python.svg";
import Git from "/public/images/icons/git.svg";
import LangGraph from "/public/images/icons/langgraph.png";
import SQLAlchemy from "/public/images/icons/sqlalchemy.png";
import JetpackCompose from "/public/images/icons/jetpackcompose.png";
import FlaskLight from "/public/images/icons/flask-light.webp";
import FlaskDark from "/public/images/icons/flask-dark.png";
import AWSLight from "/public/images/icons/aws-light.png";
import AWSDark from "/public/images/icons/aws-dark.png";
import Docker from "/public/images/icons/docker.png";
import Postman from "/public/images/icons/postman.webp";
import GCP from "/public/images/icons/gcp.png";
import Jupyter from "/public/images/icons/jupyter.png";
import HTMLCSSJavaScript from "/public/images/icons/htmlcssjavascript.png";



import LogoSeaBridge from "/public/images/logos/logo-seabridge-sustainability.jpeg";
import LogoGreenClub from "/public/images/logos/logo-greenclub.png";
import LogoLifeguard from "/public/images/logos/logo-lifeguard.png";

import PacMan from "/public/images/projects/pac-man.png";
import Asteroids from "/public/images/projects/asteroids.svg";
import BigRedBeli1 from "/public/images/projects/big-red-beli-1.svg";
import BigRedBeli2 from "/public/images/projects/big-red-beli-dark-2.svg";
import GymCrowd1 from "/public/images/projects/gymcrowd-1.svg";
import GymCrowd2 from "/public/images/projects/gymcrowd-2.svg";



import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,  
} from "@/lib/types";

export const NAV_LINKS = [
  // {
  //   label: "Home",
  //   href: "#home",
  // },
  {
    label: "Experience",
    href: "#experiences",
  },
  {
    label: "Beyond",
    href: "#beyond",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/camdenkeller",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/camdenkeller",
  },
];

export const LANGUAGES: TechDetails[] = [
  {
    label: "Python",
    logo: Python,
    url: "https://www.python.org/",
  },
  {
    label: "Java",
    logo: Java,
    url: "https://www.java.com/en/",
  },
  {   
    label: "SQL",
    logo: SQL,
    url: "https://www.geeksforgeeks.org/sql/sql-tutorial/",
  },
  {
    label: "Typescript",
    logo: Typescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "Kotlin",
    logo: Kotlin,
    url: "https://kotlinlang.org/",
  },
  {
    label: "HTML/CSS/JS",
    logo: HTMLCSSJavaScript,
    url: "https://html-css-js.com/",
  },
];

export const FRAMEWORKS_LIBRARIES: TechDetails[] = [
  {
    label: "Flask",
    logo: FlaskLight,
    darkModeLogo: FlaskDark,
    url: "https://flask.palletsprojects.com/en/stable/",
  },
  {
    label: "SQLAlchemy",
    logo: SQLAlchemy,
    url: "https://www.sqlalchemy.org/",
  },
  {
    label: "LangGraph",
    logo: LangGraph,
    url: "https://www.langchain.com/langgraph",
  },
  {
    label: "React.js",
    logo: ReactIcon,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: Nextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Tailwind CSS",
    logo: TailwindCSS,
    url: "https://tailwindcss.com/",
  },
  // {
  //   label: "Jetpack Compose",
  //   logo: JetpackCompose,
  //   url: "https://developer.android.com/compose",
  // },
];

export const TOOLS_PLATFORMS: TechDetails[] = [
  {
    label: "AWS",
    logo: AWSLight,
    darkModeLogo: AWSDark,
    url: "https://aws.amazon.com/",
  },
  {
    label: "Git",
    logo: Git,
    url: "https://git-scm.com/",
  },
  {
    label: "Docker",
    logo: Docker,
    url: "https://www.docker.com/",
  },
  {
    label: "Postman",
    logo: Postman,
    url: "https://www.postman.com/",
  },
  // {
  //   label: "GCP",
  //   logo: GCP,
  //   url: "https://cloud.google.com/",
  // },
  // {
  //   label: "Figma",
  //   logo: Figma,
  //   url: "https://www.figma.com/",
  // },
  // {
  //   label: "Jupyter",
  //   logo: Jupyter,
  //   url: "https://jupyter.org/",
  // },

];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoSeaBridge,
    logoAlt: "SeaBridge logo",
    position: "Software Engineer Intern @ SeaBridge Sustainability",
    startDate: new Date(2025, 4),
    currentlyWorkHere: true,
    summary: [
      "Co-leading a team building AI tools that automate ESG reporting and help companies track sustainability performance",
    ],
  },
  {
    logo: LogoGreenClub,
    logoAlt: "SeaBridge logo",
    position: "Software Developer @ Cornell GreenClub",
    startDate: new Date(2025, 1),
    currentlyWorkHere: true,
    summary: [
      "Built frontend for carbon-cutting routing tool and led a design process grounded in real user needs",
    ],
  },
  {
    logo: LogoLifeguard,
    logoAlt: "Lifeguard logo",
    position: "Ocean Lifeguard",
    startDate: new Date(2024, 4),
    endDate: new Date(2024, 7),
    summary: [
      "Protected thousands of beachgoers each day and mentored younger team members in safety, teamwork, and leadership",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Big Red Beli – Backend Developer",
    description:
      "A social app for reviewing Cornell dining spots and keeping up with friends’ food ratings",
    url: "https://github.com/lshen0/hack-challenge#",
    previewImage: BigRedBeli1,
    additionalImages: [BigRedBeli2],
    technologies: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "RESTful APIs",
      "Docker",
      "Google Cloud",
    ],
  },
  {
    name: "Pac-Man – Game Developer",
    description:
      "An arcade game with strategic ghost movement powered by custom AI and pathfinding",
    previewImage: PacMan,
    technologies: [
      "Java",
      "Dijkstra's Algorithm",
      "Priority Queue",
      "Artificial Intelligence",
      "Swing",
    ],
  },
  {
    name: "GymCrowd – Android Developer",
    description:
      "A real-time gym tracker to help students avoid peak hours through live occupancy updates",
    url: "#",
    previewImage: GymCrowd1,
    additionalImages: [GymCrowd2],
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Model-View-ViewModel",
      "Android Studio",
      "API endpoints",
    ],
  },
  {
    name: "Asteroids – Game Developer",
    description:
      "A retro-style game with custom mechanics for movement, spawning, firing, and collisions",
    previewImage: Asteroids,
    technologies: [
      "Python",
      "Model-View-Controller",
      "JSON Parsing", 
      "Vectors",
      "Kivy", 
    ],
  },
];
