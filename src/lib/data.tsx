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
import FillerIcon from "/public/images/icons/filler.svg";
import OCaml from "/public/images/icons/ocaml.webp";
import FastAPI from "/public/images/icons/fastapi.svg";
import MongoDB from "/public/images/icons/mongodb.svg";
import NumPy from "/public/images/icons/numpy.svg";
import Pandas from "/public/images/icons/pandas.svg";
import ScikitLearn from "/public/images/icons/scikit-learn.svg";

import LogoSeaBridge from "/public/images/logos/logo-seabridge-sustainability.jpeg";
import LogoGreenClub from "/public/images/logos/logo-greenclub.png";
import LogoLifeguard from "/public/images/logos/logo-lifeguard.png";
import LogoCMSX from "/public/images/logos/logo-cmsx.svg";
import LogoLockheed from "/public/images/logos/logo-lockheed-v2.png";
import LogoGeneralDynamics from "/public/images/logos/logo-general-dynamics-v2.png";

import PacMan from "/public/images/projects/pac-man.png";
import Asteroids from "/public/images/projects/asteroids.svg";
import BigRedBeli1 from "/public/images/projects/big-red-beli-1.svg";
import BigRedBeli2 from "/public/images/projects/big-red-beli-dark-2.svg";
import GymCrowd1 from "/public/images/projects/gymcrowd-1.svg";
import GymCrowd2 from "/public/images/projects/gymcrowd-2.svg";
import FillerProject from "/public/images/projects/filler.svg";
import TerminalTok1 from "/public/images/projects/terminaltok1.png";
import TerminalTok2 from "/public/images/projects/terminaltok2.png";
import TerminalTok3 from "/public/images/projects/terminaltok3.png";

import { ExperienceDetails, ProjectDetails, TechDetails } from "@/lib/types";

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
    label: "TypeScript",
    logo: Typescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "OCaml",
    logo: OCaml,
    url: "https://ocaml.org/",
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
    label: "FastAPI",
    logo: FastAPI,
    url: "https://fastapi.tiangolo.com/",
  },
  {
    label: "SQLAlchemy",
    logo: SQLAlchemy,
    url: "https://www.sqlalchemy.org/",
  },
  {
    label: "React",
    logo: ReactIcon,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: Nextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "LangGraph",
    logo: LangGraph,
    url: "https://www.langchain.com/langgraph",
  },
  {
    label: "NumPy",
    logo: NumPy,
    url: "https://numpy.org/",
  },
  {
    label: "Pandas",
    logo: Pandas,
    url: "https://pandas.pydata.org/",
  },
  {
    label: "scikit-learn",
    logo: ScikitLearn,
    url: "https://scikit-learn.org/stable/",
  },
];

export const TOOLS_PLATFORMS: TechDetails[] = [
  {
    label: "AWS",
    logo: AWSLight,
    darkModeLogo: AWSDark,
    url: "https://aws.amazon.com/",
  },
  {
    label: "GCP",
    logo: GCP,
    url: "https://cloud.google.com/",
  },
  {
    label: "Docker",
    logo: Docker,
    url: "https://www.docker.com/",
  },
  {
    label: "MongoDB",
    logo: MongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Git",
    logo: Git,
    url: "https://git-scm.com/",
  },
  {
    label: "Postman",
    logo: Postman,
    url: "https://www.postman.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoLockheed,
    logoAlt: "Lockheed Martin logo",
    secondaryLogo: LogoGeneralDynamics,
    secondaryLogoAlt: "General Dynamics logo",
    company: "Lockheed Martin & General Dynamics",
    position: "Software Engineer Intern",
    startDate: new Date(2026, 5),
    endDate: new Date(2026, 7),
    logoUrl: "https://www.lockheedmartin.com/en-us/index.html",
    secondaryLogoUrl: "https://gdmissionsystems.com/",
    summary: [
      "Developing C2BMC software to integrate sensor, interceptor, and communications systems for real-time ballistic missile defense coordination",
    ],
  },
  {
    logo: LogoCMSX,
    logoAlt: "CMSX logo",
    company: "CMSX",
    position: "Software Engineer",
    startDate: new Date(2025, 8),
    currentlyWorkHere: true,
    summary: [
      "Maintain Cornell’s course management system: 8,000+ students, 100+ courses, 100,000+ line codebase",
      "Revived dormant PeopleSoft Enrollment Sync project, developing JUnit and Selenium test suites",
      "Resolved authorization vulnerabilities, late-submission inconsistencies, and input validation issues",
    ],
    url: "https://www.cs.cornell.edu/projects/cms/cmsx/",
  },
  {
    logo: LogoSeaBridge,
    logoAlt: "SeaBridge logo",
    company: "SeaBridge Sustainability",
    position: "Software Engineer Intern",
    startDate: new Date(2025, 4),
    endDate: new Date(2025, 8),
    summary: [
      "Co-led 8-person team to deliver MVP of [enterprise RAG platform](https://www.seabridge.ai/) to automate ESG reporting",
      "Architected data ingestion pipeline with AWS S3, Lambda, and MongoDB to process 5,000+ documents",
      "Shipped 5 LangGraph AI agents for data extraction and analysis, saving 400 analyst hours annually",
    ],
    url: "https://www.seabridgesustainability.com/services",
  },
  {
    logo: LogoGreenClub,
    logoAlt: "GreenClub logo",
    company: "Cornell GreenClub",
    position: "Technical Lead ([pathOS](https://www.pathos.earth/))",
    startDate: new Date(2025, 1),
    currentlyWorkHere: true,
    summary: [
      "Lead full-stack development of route optimization platform reducing 10+ tons of CO2 emissions annually",
      "Built physics-informed machine learning model to predict fuel consumption with less than 4% error",
      "Reduced AWS costs by 90% via Wake-on-Demand, using EC2 hibernation, Lambda, and EventBridge",
    ],
    url: "https://www.joingreenclub.com/",
  },
  {
    logo: LogoLifeguard,
    logoAlt: "Lifeguard logo",
    company: "City of Seal Beach",
    position: "Ocean Lifeguard",
    startDate: new Date(2024, 4),
    endDate: new Date(2024, 7),
    summary: [
      "Ensured beach safety and responded to emergencies as part of a team serving 3,000+ beachgoers daily",
      "Mentored 18 junior lifeguards in ocean rescue skills, teamwork, and early leadership development",
    ],
    url: "https://www.sealbeachca.gov/Departments/Marine-Safety-Lifeguards",
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "TerminalTok",
    dates: "Nov 2025 – Dec 2025",
    description: "A terminal-based social platform with live messaging, media streaming, personalized recommendations, and our dinosaur game",
    previewImage: TerminalTok1,
    additionalImages: [TerminalTok2, TerminalTok3],
    githubUrl: "https://github.com/CamdenKeller/TerminalTok",
    youtubeUrl: "https://www.youtube.com/watch?v=JJSdvPSbKjI",
    technologies: [
      "OCaml",
      "Concurrency",
      "Matrix Factorization",
      "Collaborative Filtering",
      "Recommendation Engine",
    ],
  },
  {
    name: "Big Red Beli",
    dates: "Apr 2025 – May 2025",
    description: "A social app for reviewing Cornell dining spots and keeping up with friends’ food ratings",
    githubUrl: "https://github.com/lshen0/hack-challenge#",
    previewImage: BigRedBeli1,
    additionalImages: [BigRedBeli2],
    technologies: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "Docker",
      "GCP",
      "RESTful APIs",
      "Relational Database Design",
    ],
  },
  {
    name: "Pac-Man",
    dates: "Apr 2025 – May 2025",
    description: "A classic Pac-Man game showcasing intelligent ghosts designed to systematically track down the player",
    previewImage: PacMan,
    technologies: [
      "Java",
      "Swing",
      "AI Pathfinding",
      "Dijkstra’s Algorithm",
      "Custom Priority Queue",
      "Simulation Testing",
    ],
  },
  {
    name: "GymCrowd",
    dates: "Oct 2024 – Dec 2024",
    description: "A real-time gym tracker to help students avoid peak hours through live occupancy updates",
    previewImage: GymCrowd1,
    additionalImages: [GymCrowd2],
    githubUrl: "https://github.com/CamdenKeller/GymCrowd",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Android Studio",
      "MVVM Architecture",
      "API Integration",
    ],
  },
  {
    name: "Asteroids",
    dates: "Oct 2024 – Nov 2024",
    description: "An interactive arcade-style space shooter where players pilot a spaceship, evade asteroids, and compete for high scores",
    previewImage: Asteroids,
    technologies: [
      "Python",
      "Kivy",
      "Physics Engine",
      "Sound Effects",
      "Animations",
      "MVC Architecture",
      "JSON Parsing",
    ],
  },
];
