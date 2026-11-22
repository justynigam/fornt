import { BiLogoPostgresql } from "react-icons/bi"
import {
  FaAws,
  FaBrain,
  FaCodeBranch,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaLinkedinIn,
  FaNetworkWired,
  FaPython,
  FaServer,
  FaShieldHalved,
} from "react-icons/fa6"
import { BsFiletypeSql, BsCpu } from "react-icons/bs"
import {
  RiJavaLine,
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri"
import {
  SiCelery,
  SiCodechef,
  SiDjango,
  SiFastapi,
  SiGithubactions,
  SiNginx,
  SiOllama,
  SiPytorch,
  SiRedis,
  SiScikitlearn,
  SiSpringboot,
} from "react-icons/si"
import { TbBrandTypescript, TbGraph, TbHierarchy3 } from "react-icons/tb"
import { VscAzure, VscTerminalLinux } from "react-icons/vsc"
import { HiOutlineBriefcase, HiOutlineCodeBracket, HiOutlineDocumentText } from "react-icons/hi2"
import { resumePdfPath } from "../NigamData/data"
import type { IconType } from "react-icons"

export interface SkillItem {
  id: number
  icon: IconType
  text: string
  category:
    | "Languages & Databases"
    | "Generative AI & LLMs"
    | "Backend & Frameworks"
    | "ML Libraries"
    | "Cloud & DevOps"
    | "CS Fundamentals"
}

export const skillCategories = [
  "All",
  "Languages & Databases",
  "Generative AI & LLMs",
  "Backend & Frameworks",
  "ML Libraries",
  "Cloud & DevOps",
  "CS Fundamentals",
] as const

export const skills: SkillItem[] = [
  // Languages & Databases
  { id: 1, icon: FaPython, text: "Python", category: "Languages & Databases" },
  { id: 2, icon: BsFiletypeSql, text: "SQL", category: "Languages & Databases" },
  { id: 3, icon: BiLogoPostgresql, text: "PostgreSQL", category: "Languages & Databases" },
  { id: 4, icon: RiJavaLine, text: "Java", category: "Languages & Databases" },
  { id: 5, icon: TbBrandTypescript, text: "TypeScript", category: "Languages & Databases" },

  // Generative AI & LLMs
  { id: 6, icon: FaBrain, text: "Generative AI", category: "Generative AI & LLMs" },
  { id: 7, icon: FaBrain, text: "Machine Learning", category: "Generative AI & LLMs" },
  { id: 8, icon: SiOllama, text: "LLMs (Ollama)", category: "Generative AI & LLMs" },
  { id: 9, icon: FaDatabase, text: "RAG", category: "Generative AI & LLMs" },
  { id: 10, icon: TbHierarchy3, text: "Multi-Agent Systems", category: "Generative AI & LLMs" },
  { id: 11, icon: TbGraph, text: "LangGraph", category: "Generative AI & LLMs" },
  { id: 12, icon: FaBrain, text: "Prompt Engineering", category: "Generative AI & LLMs" },
  { id: 13, icon: FaDatabase, text: "Vector Search", category: "Generative AI & LLMs" },
  { id: 14, icon: FaShieldHalved, text: "Guardrails AI", category: "Generative AI & LLMs" },

  // Backend & Frameworks
  { id: 15, icon: SiFastapi, text: "FastAPI", category: "Backend & Frameworks" },
  { id: 16, icon: SiDjango, text: "Django REST", category: "Backend & Frameworks" },
  { id: 17, icon: SiSpringboot, text: "Spring Boot", category: "Backend & Frameworks" },
  { id: 18, icon: FaServer, text: "API Development", category: "Backend & Frameworks" },
  { id: 19, icon: FaServer, text: "REST APIs", category: "Backend & Frameworks" },
  { id: 20, icon: SiCelery, text: "Celery", category: "Backend & Frameworks" },
  { id: 21, icon: FaNetworkWired, text: "Microservices", category: "Backend & Frameworks" },
  { id: 22, icon: RiReactjsLine, text: "React.js", category: "Backend & Frameworks" },
  { id: 23, icon: RiNextjsLine, text: "Next.js", category: "Backend & Frameworks" },
  { id: 24, icon: RiTailwindCssFill, text: "Tailwind CSS", category: "Backend & Frameworks" },

  // ML Libraries
  { id: 25, icon: SiPytorch, text: "PyTorch", category: "ML Libraries" },
  { id: 26, icon: SiScikitlearn, text: "Scikit-learn", category: "ML Libraries" },
  { id: 27, icon: TbGraph, text: "NetworkX", category: "ML Libraries" },
  { id: 28, icon: FaBrain, text: "SHAP", category: "ML Libraries" },

  // Cloud & DevOps
  { id: 29, icon: FaAws, text: "AWS (EC2, S3, RDS, Lambda, ECS, CloudWatch)", category: "Cloud & DevOps" },
  { id: 30, icon: VscAzure, text: "Azure", category: "Cloud & DevOps" },
  { id: 31, icon: FaDocker, text: "Docker", category: "Cloud & DevOps" },
  { id: 32, icon: FaGitAlt, text: "Git", category: "Cloud & DevOps" },
  { id: 33, icon: SiGithubactions, text: "GitHub Actions", category: "Cloud & DevOps" },
  { id: 34, icon: FaCodeBranch, text: "CI/CD", category: "Cloud & DevOps" },
  { id: 35, icon: SiNginx, text: "Nginx", category: "Cloud & DevOps" },
  { id: 36, icon: SiRedis, text: "Redis", category: "Cloud & DevOps" },
  { id: 37, icon: VscTerminalLinux, text: "Linux", category: "Cloud & DevOps" },

  // CS Fundamentals
  { id: 38, icon: BsCpu, text: "Data Structures & Algorithms", category: "CS Fundamentals" },
  { id: 39, icon: FaNetworkWired, text: "System Design", category: "CS Fundamentals" },
  { id: 40, icon: FaServer, text: "Distributed Systems", category: "CS Fundamentals" },
  { id: 41, icon: BsCpu, text: "Operating Systems", category: "CS Fundamentals" },
  { id: 42, icon: FaNetworkWired, text: "Computer Networks", category: "CS Fundamentals" },
]

export interface ExperienceItem {
  id: number
  organization: string
  location: string
  period: string
  role: string
  projectOrDomain: string
  metrics: string[]
  bullets: string[]
  tags: string[]
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    organization: "Freelance",
    location: "Remote",
    period: "Feb '26",
    role: "Full Stack Developer",
    projectOrDomain: "OmniMU: Multi-Service Super-App Platform",
    metrics: ["Real-Time Dispatch", "KYC + GPS Tracking", "REST + Socket.IO"],
    bullets: [
      "Engineered RESTful backend APIs using Python, Django, and Django REST Framework for OmniMU, a multi-service super-app platform integrating ride booking, driver management, and real-time trip operations.",
      "Built a React Native mobile application with authentication, driver KYC onboarding, Google Maps integration, and GPS tracking.",
      "Implemented real-time driver matching and ride request dispatch using Socket.IO.",
      "Implemented trip lifecycle management and real-time communication using Socket.IO.",
    ],
    tags: [
      "Python",
      "Django",
      "Django REST Framework",
      "React Native",
      "Socket.IO",
      "Google Maps",
      "GPS Tracking",
    ],
  },
  {
    id: 2,
    organization: "Jenkins CI",
    location: "Remote",
    period: "Jan '26",
    role: "Open Source Contributor",
    projectOrDomain: "Systems Programming, Memory Optimization, CI/CD Tooling",
    metrics: ["50% Lower Memory", "35% Higher Stability", "7M+ Developers"],
    bullets: [
      "Diagnosed and resolved a critical memory leak in the Jenkins AI Chatbot Plugin (used by 7M+ developers) by implementing a session Time-To-Live (TTL) mechanism.",
      "Reduced memory usage by 50% through an automatic session expiry system that prevented unbounded heap growth in production.",
      "Improved plugin stability by 35% through automatic expiry of inactive sessions.",
      "Merged the fix into the upstream repository after collaborative code review with maintainers.",
    ],
    tags: [
      "Systems Programming",
      "Memory Optimization",
      "TTL Expiry",
      "CI/CD Tooling",
      "Open Source",
    ],
  },
]

export interface ProjectItem {
  id: number
  year?: string
  badge: string
  accent: "emerald" | "sky" | "amber" | "violet" | "rose"
  title: string
  status: boolean
  content: string
  highlights: string[]
  metrics: string[]
  github: string
  url?: string
  skill: string[]
}

export const projects: ProjectItem[] = [
  {
    id: 1,
    year: "2026",
    badge: "VECTORLESS RAG",
    accent: "emerald",
    title: "Autonomous Regulatory Auditing Platform",
    status: true,
    content:
      "Vectorless RAG compliance auditing platform modeling legal documents as PostgreSQL AST trees to preserve document structure and enable direct SQL querying with multi-agent LLM cross-examination.",
    highlights: [
      "Engineered a Vectorless RAG platform using FastAPI, LangGraph, and React, modeling legal documents as PostgreSQL AST trees to preserve structure and enable SQL querying.",
      "Reduced cross-examination latency by 65% through a multi-agent LLM framework for compliance audits.",
      "Enabled async scaling and live streaming of audit workloads by containerizing microservices using Docker Compose and AWS ECS.",
      "Achieved a 0.95+ Faithfulness score through Guardrails AI citation verification and hallucination control.",
    ],
    metrics: ["65% Latency Reduction", "0.95+ Faithfulness", "PostgreSQL AST"],
    github: "https://github.com/justynigam",
    skill: [
      "React",
      "FastAPI",
      "LangGraph",
      "PostgreSQL",
      "Redis",
      "Docker Compose",
      "AWS ECS",
      "Guardrails AI",
    ],
  },
  {
    id: 2,
    badge: "AUTONOMOUS CYBERSECURITY",
    accent: "violet",
    title: "Cybertwin",
    status: true,
    content:
      "Autonomous, event-driven cybersecurity and SOC triage platform featuring a Tri-Model Consensus engine, autoregressive behavioral digital twins, explainable SHAP ML, and one-click automated SOAR remediation playbooks.",
    highlights: [
      "Architected an autonomous, event-driven cybersecurity platform using FastAPI, React 19, PyTorch, XGBoost, PostgreSQL, and Redis Streams.",
      "Achieved 38.4 ms end-to-end inference latency and 2,450 events/sec throughput via an asynchronous Redis Streams and CPU-quantized worker pipeline.",
      "Engineered a Tri-Model Consensus engine (Autoencoder, Sequence Transformer, NetworkX) alongside autoregressive behavioral digital twins, attaining 95.8% precision, 93.4% recall, and 82% next-move prediction confidence while suppressing false positives to 1.1%.",
      "Accelerated SOC incident triage by integrating SHAP-based explainable ML, natural language alert generation, and one-click automated SOAR remediation playbooks within a containerized Docker and Render IaC deployment.",
    ],
    metrics: [
      "38.4ms Inference · 2,450 ev/s",
      "95.8% Precision · 1.1% FP",
      "82% Next-Move Confidence",
    ],
    github: "https://github.com/justynigam/AI-Cybertwin",
    skill: [
      "FastAPI",
      "React 19",
      "PyTorch",
      "XGBoost",
      "PostgreSQL",
      "Redis Streams",
      "NetworkX",
      "SHAP",
      "Docker",
      "Render IaC",
      "SOAR",
    ],
  },
  {
    id: 3,
    year: "2025",
    badge: "REGTECH · EXPLAINABLE ML",
    accent: "sky",
    title: "QERCAS: RegTech Platform",
    status: true,
    content:
      "Event-driven full-stack compliance and transaction risk analysis platform featuring explainable ML, graph neural analysis, automated AWS CI/CD, and post-quantum encrypted audit logs.",
    highlights: [
      "Architected an event-driven full-stack compliance platform using Django REST Framework, React, Celery, PostgreSQL, and Redis.",
      "Achieved 18 ms average API latency and sub-165 ms end-to-end transaction risk analysis through an event-driven Celery and Redis pipeline.",
      "Enabled automated CI/CD and background processing on AWS EC2 using Docker, Gunicorn, Nginx, and GitHub Actions.",
      "Strengthened auditability of risk decisions through SHAP-based explainable ML, graph analysis (PyTorch, NetworkX), and Kyber768 post-quantum encrypted audit logs.",
    ],
    metrics: ["18ms Avg API Latency", "<165ms Risk Pipeline", "Kyber768 PQC Logs"],
    github: "https://github.com/justynigam/QERCAS_RegTech-Platform",
    skill: [
      "React",
      "Django REST Framework",
      "Celery",
      "Redis",
      "PostgreSQL",
      "AWS EC2",
      "Docker",
      "Gunicorn",
      "Nginx",
      "GitHub Actions",
      "PyTorch",
      "NetworkX",
      "SHAP",
      "Kyber768",
    ],
  },
  {
    id: 4,
    year: "2025",
    badge: "MULTI-AGENT AI",
    accent: "amber",
    title: "The Bid Executor: AI RFP Engine",
    status: true,
    content:
      "Multi-agent AI RFP review engine built on state machines and local Ollama LLMs to automate parallel engineering analysis and generate quantified 0–100 business risk scores.",
    highlights: [
      "Architected a multi-agent AI app using state machines and local LLMs (Ollama) for parallel RFP analysis.",
      "Accelerated RFP reviews by automating manual engineering analysis through parallel multi-agent execution.",
      "Enabled concurrent user sessions by containerizing the full stack using Docker multi-stage builds.",
      "Generated quantified 0–100 risk scores for business decisions through automated multi-agent analysis.",
    ],
    metrics: ["0–100 Risk Scoring", "Parallel State Machines", "Local Ollama LLMs"],
    github: "https://github.com/justynigam/RFP-Engine",
    skill: ["Next.js 14", "Multi-Agent AI", "State Machines", "Docker", "Ollama"],
  },
  {
    id: 5,
    year: "2025",
    badge: "SMART TRAFFIC · CV AI",
    accent: "rose",
    title: "FineForce (Smart Traffic System)",
    status: true,
    content:
      "AI-powered traffic enforcement and command center that analyzes CCTV-captured images for violations like wrong-side driving, extracts license plates at 94% accuracy, and automates digital fine notices.",
    highlights: [
      "Built an AI-powered traffic enforcement system that analyzes CCTV-captured images to detect violations such as wrong-side driving and automatically extracts vehicle license plates with 94% accuracy.",
      "Automated the fine generation and notification workflow, generating violation details and sending digital fine notices to the registered vehicle owner’s email.",
      "Developed a real-time Leaflet.js command center with Supabase for violation records and evidence storage.",
    ],
    metrics: [
      "94% Plate Accuracy",
      "Automated Fine Notices",
      "Real-Time Leaflet Map",
    ],
    github: "https://github.com/justynigam/FineForce-Smart-traffic-penalty-enforcement-system",
    skill: ["React", "TypeScript", "Supabase", "Ollama", "Leaflet.js"],
  },
]

export const education = [
  {
    id: 1,
    institution: "Vellore Institute of Technology",
    location: "Bhopal, Madhya Pradesh",
    degree: "B. Tech in Computer Science and Engineering",
    period: "2023–2027 (Expected)",
    grade: "CGPA: 8.71",
  },
]

export const certifications = [
  {
    id: 1,
    issuer: "Oracle",
    title: "Oracle Certified Professional: APEX Cloud Developer",
    detail: "Cloud-native enterprise application development on Oracle APEX and Autonomous Database.",
  },
  {
    id: 2,
    issuer: "Oracle",
    title: "Oracle Certified Professional: AI Vector Search",
    detail: "Vector embeddings, semantic indexing, similarity search, and RAG workflows on Oracle Database.",
  },
  {
    id: 3,
    issuer: "Oracle",
    title: "Oracle Certified Professional: Generative AI",
    detail: "Large language models, prompt engineering, RAG architectures, and OCI Generative AI services.",
  },
  {
    id: 4,
    issuer: "Microsoft",
    title: "Microsoft Certified: Azure AI Apps and Agents Developer Associate",
    detail: "Building, deploying, and orchestrating cloud AI applications and autonomous agents on Azure.",
  },
]

export const achievements = [
  {
    id: 1,
    event: "FinWiz Hackathon 1.0",
    rank: "India Top 5 / 4,500",
    detail: "Finished in the India Top 5 among 4,500 participants (solo) in a national fintech challenge.",
  },
  {
    id: 2,
    event: "Johns Hopkins Health Hackathon",
    rank: "National Finalist · Top 60 / 600+",
    detail: "Selected as a National Finalist in the Top 60 of 600+ competing teams.",
  },
  {
    id: 3,
    event: "EY Techathon 6.0",
    rank: "Top 7% Globally",
    detail: "Ranked 4,776 out of 68,652 participants globally as a solo entry in a team-based format.",
  },
  {
    id: 4,
    event: "CodeChef",
    rank: "Max Rating 1466 · Rank 530",
    detail: "Achieved a max rating of 1466 and ranked 530 out of 21,170 globally.",
    link: "https://www.codechef.com/users/cyber_nl",
    handle: "@cyber_nl",
  },
]

export const hireText =
  "I’m open to software engineering internships, full-time roles, and select freelance engagements in Full-Stack Development, Backend Systems, and Applied Generative AI. If you’re building ambitious systems and need an engineer who ships end-to-end, let’s talk."

export const emailLink =
  "mailto:nigamlenka10@gmail.com?subject=Opportunity%20for%20Nigam%20Prasad%20Lenka"

export const navLinks = [
  {
    id: 1,
    name: "Experience",
    link: "#experience",
    icon: HiOutlineBriefcase,
    external: false,
  },
  {
    id: 2,
    name: "Projects",
    link: "#projects",
    icon: HiOutlineCodeBracket,
    external: false,
  },
  {
    id: 3,
    name: "GitHub",
    link: "https://github.com/justynigam",
    icon: FaGithub,
    external: true,
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nigam-prasad-lenka-ab29bb283",
    icon: FaLinkedinIn,
    external: true,
  },
  {
    id: 5,
    name: "CodeChef",
    link: "https://www.codechef.com/users/cyber_nl",
    icon: SiCodechef,
    external: true,
  },
  {
    id: 6,
    name: "Resume PDF",
    link: resumePdfPath,
    icon: HiOutlineDocumentText,
    external: true,
  },
]
