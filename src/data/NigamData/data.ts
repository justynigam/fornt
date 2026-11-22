import { FaGithub, FaLinkedinIn, FaPhone } from "react-icons/fa6"
import { MdOutlineMail } from "react-icons/md"
import { HiOutlineDocumentText } from "react-icons/hi2"
import { SiCodechef } from "react-icons/si"

export const resumePdfPath =
  "/assets/aistudio/Nigam_Prasad_Lenka_Resume_4508b7e3.pdf"

export const profileImagePath =
  "/assets/aistudio/photo_2026-11-22_11-37-34_f446291c.jpg"

export const nigamProfile = {
  fullName: "Nigam Prasad Lenka",
  shortName: "Nigam",
  initials: "NL",
  role: "Full Stack Developer & AI Systems Engineer",
  subtitle: "B.Tech CSE @ VIT Bhopal (CGPA: 8.71) · Bhopal, India",
  email: "nigamlenka10@gmail.com",
  phone: "+91 8260716163",
  phoneHref: "tel:+918260716163",
  github: "https://github.com/justynigam",
  githubHandle: "justynigam",
  linkedin: "https://www.linkedin.com/in/nigam-prasad-lenka-ab29bb283",
  codechef: "https://www.codechef.com/users/cyber_nl",
  codechefHandle: "cyber_nl",
  availabilityText: "Open to Opportunities",
  about: [
    "I'm Nigam Prasad Lenka, a Computer Science and Engineering undergraduate at Vellore Institute of Technology, Bhopal (2023–2027, CGPA 8.71), focused on full-stack engineering, distributed backend systems, and production Generative AI.",
    "I build event-driven backends and multi-agent LLM platforms using Python, FastAPI, Django REST Framework, TypeScript, React, Next.js, PostgreSQL, Redis, Docker, and AWS—delivering low-latency APIs, Vectorless RAG pipelines, and explainable ML workflows.",
    "Beyond client and personal systems, I contribute to open-source infrastructure like Jenkins CI (resolving a production memory leak affecting 7M+ developers) and compete solo in national and global hackathons.",
  ],
  contactText:
    "Feel free to reach out via email, phone, or LinkedIn for software engineering internships, full-time roles, AI systems collaborations, or freelance backend and full-stack builds.",
}

export const builderProfile = {
  fullName: "justynigam",
  shortName: "justynigam",
  initials: "JN",
  role: "Open-Source Contributor · Hackathon Finalist · AI Builder",
  subtitle: "Jenkins CI Contributor · Top 5 FinWiz · CodeChef 1466",
  availabilityText: "Shipping & Competing",
  about: [
    "Builder mode: I'm @justynigam — I love diving into hard systems problems, profiling production memory leaks in open-source tools like Jenkins CI, and shipping multi-agent AI platforms under tight deadlines.",
    "I regularly compete solo against full teams in national and global hackathons—placing India Top 5 out of 4,500 in FinWiz 1.0, Top 60 of 600+ teams at the Johns Hopkins Health Hackathon, and Top 7% globally in EY Techathon 6.0.",
    "Whether it's modeling legal documents as PostgreSQL AST trees, running local Ollama state-machine agents in Docker, or encrypting audit logs with post-quantum Kyber768, I build systems that hold up in production.",
  ],
  contactText:
    "Want to jam on open-source tooling, multi-agent AI architectures, or hackathon builds? Connect with me on GitHub or LinkedIn, or drop an email anytime.",
}

export const nigamSocialLinks = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/justynigam",
    icon: FaGithub,
  },
  {
    id: 2,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nigam-prasad-lenka-ab29bb283",
    icon: FaLinkedinIn,
  },
  {
    id: 3,
    name: "CodeChef (@cyber_nl)",
    link: "https://www.codechef.com/users/cyber_nl",
    icon: SiCodechef,
  },
  {
    id: 4,
    name: "Email",
    link: "mailto:nigamlenka10@gmail.com",
    icon: MdOutlineMail,
  },
  {
    id: 5,
    name: "Phone",
    link: "tel:+918260716163",
    icon: FaPhone,
  },
  {
    id: 6,
    name: "Resume PDF",
    link: resumePdfPath,
    icon: HiOutlineDocumentText,
  },
]

export const builderSocialLinks = [
  {
    id: 1,
    name: "GitHub (@justynigam)",
    link: "https://github.com/justynigam",
    icon: FaGithub,
  },
  {
    id: 2,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nigam-prasad-lenka-ab29bb283",
    icon: FaLinkedinIn,
  },
  {
    id: 3,
    name: "CodeChef (@cyber_nl · 1466)",
    link: "https://www.codechef.com/users/cyber_nl",
    icon: SiCodechef,
  },
  {
    id: 4,
    name: "Email",
    link: "mailto:nigamlenka10@gmail.com",
    icon: MdOutlineMail,
  },
  {
    id: 5,
    name: "Resume PDF",
    link: resumePdfPath,
    icon: HiOutlineDocumentText,
  },
]

export const nigamContactLinks = [
  {
    id: 1,
    name: "nigamlenka10@gmail.com",
    link: "mailto:nigamlenka10@gmail.com",
    icon: MdOutlineMail,
    copyValue: "nigamlenka10@gmail.com",
  },
  {
    id: 2,
    name: "+91 8260716163",
    link: "tel:+918260716163",
    icon: FaPhone,
    copyValue: "+91 8260716163",
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nigam-prasad-lenka-ab29bb283",
    icon: FaLinkedinIn,
  },
  {
    id: 4,
    name: "GitHub",
    link: "https://github.com/justynigam",
    icon: FaGithub,
  },
  {
    id: 5,
    name: "CodeChef",
    link: "https://www.codechef.com/users/cyber_nl",
    icon: SiCodechef,
  },
]

export const nigamFooterLinks = [
  {
    id: 1,
    name: "Email",
    link: "mailto:nigamlenka10@gmail.com",
    icon: MdOutlineMail,
  },
  {
    id: 2,
    name: "GitHub",
    link: "https://github.com/justynigam",
    icon: FaGithub,
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nigam-prasad-lenka-ab29bb283",
    icon: FaLinkedinIn,
  },
  {
    id: 4,
    name: "CodeChef",
    link: "https://www.codechef.com/users/cyber_nl",
    icon: SiCodechef,
  },
  {
    id: 5,
    name: "Phone",
    link: "tel:+918260716163",
    icon: FaPhone,
  },
  {
    id: 6,
    name: "Resume",
    link: resumePdfPath,
    icon: HiOutlineDocumentText,
  },
]
