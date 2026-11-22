export interface RoleFitResult {
  role: string
  percentage: number
  verdict: "Strong Match" | "Great Fit" | "Moderate Fit" | "Exploratory Fit"
  summary: string
  matchedSkills: string[]
  evidence: string[]
}

interface RoleArchetype {
  id: string
  keywords: string[]
  baseScore: number
  summary: string
  matchedSkills: string[]
  evidence: string[]
}

const ARCHETYPES: RoleArchetype[] = [
  {
    id: "genai",
    keywords: [
      "ai engineer",
      "genai",
      "gen ai",
      "generative ai",
      "llm",
      "rag",
      "agent",
      "agentic",
      "langgraph",
      "nlp",
      "prompt",
      "ai developer",
      "ai systems",
    ],
    baseScore: 96,
    summary:
      "Directly aligns with production Multi-Agent LLM, Vectorless RAG, and certified Oracle/Azure AI engineering.",
    matchedSkills: [
      "LangGraph",
      "Multi-Agent AI",
      "RAG & Vector Search",
      "Guardrails AI",
      "Ollama",
    ],
    evidence: [
      "Autonomous Regulatory Auditing Platform (0.95+ Faithfulness, 65% latency cut)",
      "Oracle GenAI & Vector Search + Microsoft Azure AI Agents certified",
    ],
  },
  {
    id: "cyber-ai",
    keywords: [
      "cyber",
      "security",
      "soc",
      "soar",
      "secops",
      "infosec",
      "regtech",
      "compliance",
      "fraud",
      "risk",
      "threat",
    ],
    baseScore: 93,
    summary:
      "Backed by autonomous SOC detection, RegTech risk pipelines, explainable ML, and post-quantum audit logging.",
    matchedSkills: [
      "PyTorch & XGBoost",
      "Redis Streams",
      "SHAP",
      "NetworkX",
      "Kyber768 PQC",
    ],
    evidence: [
      "Cybertwin (38.4ms inference, 2,450 ev/s, 95.8% precision, 1.1% FP)",
      "QERCAS RegTech (<165ms risk analysis + Kyber768 encrypted audit logs)",
    ],
  },
  {
    id: "backend",
    keywords: [
      "backend",
      "back-end",
      "back end",
      "python developer",
      "python engineer",
      "fastapi",
      "django",
      "api",
      "microservices",
      "distributed",
      "systems engineer",
      "server",
    ],
    baseScore: 95,
    summary:
      "Strong match across high-throughput Python APIs, event-driven Redis/Celery pipelines, PostgreSQL, and memory optimization.",
    matchedSkills: [
      "Python",
      "FastAPI",
      "Django REST",
      "PostgreSQL",
      "Redis & Celery",
    ],
    evidence: [
      "QERCAS event-driven backend achieving 18ms average API latency",
      "Jenkins CI open-source TTL fix reducing production memory usage by 50%",
    ],
  },
  {
    id: "fullstack",
    keywords: [
      "full stack",
      "fullstack",
      "full-stack",
      "software engineer",
      "software developer",
      "sde",
      "swe",
      "web developer",
      "application developer",
      "engineer",
      "developer",
    ],
    baseScore: 93,
    summary:
      "End-to-end delivery across React/Next.js frontends, Python/Django/FastAPI backends, real-time Socket.IO, and AWS/Docker.",
    matchedSkills: [
      "React & Next.js",
      "TypeScript",
      "FastAPI & Django",
      "PostgreSQL",
      "Docker & AWS",
    ],
    evidence: [
      "Freelance Full Stack Developer on OmniMU super-app (Django + React Native + Socket.IO)",
      "Shipped 5 full-stack AI, RegTech, and Cybersecurity platforms",
    ],
  },
  {
    id: "ml",
    keywords: [
      "machine learning",
      "ml engineer",
      "ml ",
      "deep learning",
      "pytorch",
      "computer vision",
      "cv engineer",
      "ai/ml",
      "ai ml",
      "applied scientist",
    ],
    baseScore: 91,
    summary:
      "Hands-on ML systems experience spanning PyTorch, XGBoost, Transformers, SHAP explainability, and CV pipelines.",
    matchedSkills: [
      "PyTorch",
      "Scikit-learn",
      "XGBoost",
      "SHAP",
      "NetworkX",
    ],
    evidence: [
      "Cybertwin Tri-Model Consensus (Autoencoder + Sequence Transformer + NetworkX)",
      "FineForce AI traffic CV pipeline with 94% license plate accuracy",
    ],
  },
  {
    id: "frontend",
    keywords: [
      "frontend",
      "front-end",
      "front end",
      "react",
      "next.js",
      "nextjs",
      "typescript",
      "ui developer",
      "ui engineer",
    ],
    baseScore: 86,
    summary:
      "Solid production experience with React 19, Next.js 14, TypeScript, Tailwind CSS, and real-time Leaflet.js dashboards.",
    matchedSkills: [
      "React 19",
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Leaflet.js",
    ],
    evidence: [
      "Built interactive command centers & AI frontends for Cybertwin, FineForce, and Bid Executor",
      "React Native mobile UI with Google Maps & real-time trip tracking (OmniMU)",
    ],
  },
  {
    id: "cloud-devops",
    keywords: [
      "cloud",
      "devops",
      "sre",
      "site reliability",
      "aws",
      "azure",
      "docker",
      "ci/cd",
      "cicd",
      "infrastructure",
      "platform engineer",
      "linux",
    ],
    baseScore: 84,
    summary:
      "Proven containerization, CI/CD automation, and cloud deployments across AWS, Azure, Docker, Nginx, and Jenkins CI.",
    matchedSkills: [
      "AWS (EC2/ECS/S3/RDS/Lambda)",
      "Azure",
      "Docker",
      "GitHub Actions",
      "Nginx & Linux",
    ],
    evidence: [
      "Jenkins CI open-source contributor (CI/CD tooling & memory stability)",
      "Automated Docker/AWS EC2/ECS/Render IaC deployments with GitHub Actions",
    ],
  },
  {
    id: "data",
    keywords: [
      "data scientist",
      "data engineer",
      "data analyst",
      "analytics",
      "database",
      "sql",
      "postgres",
      "bi ",
    ],
    baseScore: 83,
    summary:
      "Strong SQL/PostgreSQL modeling, real-time Redis streaming, Python ML analysis, and Oracle Vector Search certification.",
    matchedSkills: [
      "Python",
      "SQL & PostgreSQL",
      "PyTorch & Scikit-learn",
      "SHAP",
      "Vector Search",
    ],
    evidence: [
      "Modeled legal documents as PostgreSQL AST trees for structured SQL querying",
      "Oracle Certified Professional: AI Vector Search & APEX Cloud Developer",
    ],
  },
  {
    id: "java",
    keywords: ["java", "spring", "spring boot", "springboot"],
    baseScore: 82,
    summary:
      "Backed by Java, Spring Boot microservices, REST API design, PostgreSQL, and strong CS fundamentals.",
    matchedSkills: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "PostgreSQL",
      "DSA & System Design",
    ],
    evidence: [
      "B.Tech CSE (8.71 CGPA) with CodeChef Max Rating 1466 (Rank 530 globally)",
      "Experience building scalable REST microservices and distributed systems",
    ],
  },
  {
    id: "mobile",
    keywords: ["mobile", "react native", "android", "ios", "flutter", "app dev"],
    baseScore: 80,
    summary:
      "Direct React Native delivery including authentication, KYC onboarding, Google Maps, GPS, and Socket.IO.",
    matchedSkills: [
      "React Native",
      "TypeScript",
      "Socket.IO",
      "Google Maps & GPS",
      "REST APIs",
    ],
    evidence: [
      "Built OmniMU React Native super-app with real-time driver matching & trip lifecycle",
    ],
  },
  {
    id: "qa-sdet",
    keywords: ["qa", "quality", "test", "sdet", "automation engineer"],
    baseScore: 76,
    summary:
      "Strong CI/CD automation, Jenkins tooling, Guardrails verification, and Python/TypeScript engineering discipline.",
    matchedSkills: [
      "GitHub Actions",
      "CI/CD",
      "Python",
      "Guardrails AI",
      "Linux",
    ],
    evidence: [
      "Merged upstream Jenkins CI fix improving production plugin stability by 35%",
    ],
  },
  {
    id: "pm-architect",
    keywords: [
      "product manager",
      "tpm",
      "technical product",
      "solutions architect",
      "architect",
      "founder",
      "cto",
      "lead",
    ],
    baseScore: 75,
    summary:
      "Strong system architecture, solo end-to-end product execution, and top national hackathon performance.",
    matchedSkills: [
      "System Design",
      "Distributed Systems",
      "Generative AI",
      "AWS & Azure",
      "Full-Stack Delivery",
    ],
    evidence: [
      "FinWiz 1.0 India Top 5 / 4,500 (solo) & EY Techathon 6.0 Top 7% globally",
    ],
  },
  {
    id: "intern",
    keywords: ["intern", "internship", "fresher", "graduate", "trainee", "campus"],
    baseScore: 94,
    summary:
      "Ideal candidate for SWE / AI / Backend internships with 8.71 CGPA, real client work, and upstream open-source impact.",
    matchedSkills: [
      "Python & TypeScript",
      "FastAPI & Next.js",
      "Generative AI",
      "DSA & System Design",
      "Docker & AWS",
    ],
    evidence: [
      "B.Tech CSE @ VIT Bhopal (2023–2027, CGPA 8.71) + Jenkins CI & OmniMU experience",
      "4 Cloud/AI certifications (Oracle & Microsoft) + 3 national/global hackathon placements",
    ],
  },
]

const PROFILE_SKILLS = [
  "python",
  "sql",
  "postgresql",
  "postgres",
  "java",
  "typescript",
  "javascript",
  "fastapi",
  "django",
  "spring boot",
  "celery",
  "microservices",
  "react",
  "react native",
  "next.js",
  "nextjs",
  "tailwind",
  "pytorch",
  "scikit-learn",
  "xgboost",
  "networkx",
  "shap",
  "langgraph",
  "rag",
  "ollama",
  "llm",
  "guardrails",
  "vector search",
  "aws",
  "azure",
  "docker",
  "git",
  "github actions",
  "ci/cd",
  "nginx",
  "redis",
  "linux",
  "supabase",
  "leaflet",
  "socket.io",
  "jenkins",
  "apex",
  "oracle",
  "dsa",
  "system design",
  "distributed systems",
]

const NON_TECH_KEYWORDS = [
  "hr",
  "human resources",
  "recruiter",
  "sales",
  "marketing",
  "seo",
  "content writer",
  "copywriter",
  "accountant",
  "accounting",
  "audit",
  "lawyer",
  "legal",
  "doctor",
  "nurse",
  "chef",
  "teacher",
  "graphic design",
  "video editor",
  "photographer",
  "customer support",
  "bpo",
  "operations manager",
  "finance analyst",
]

function getVerdict(score: number): RoleFitResult["verdict"] {
  if (score >= 88) return "Strong Match"
  if (score >= 74) return "Great Fit"
  if (score >= 55) return "Moderate Fit"
  return "Exploratory Fit"
}

export function evaluateRoleFit(rawRole: string): RoleFitResult {
  const role = rawRole.trim()
  const lower = role.toLowerCase()

  // Check explicit non-tech roles first (unless combined with tech/engineering terms)
  const hasTechSignal =
    /\b(ai|ml|software|dev|developer|engineer|tech|data|cloud|python|java|react|backend|frontend|full|cyber|security|sde|swe|intern|system)\b/i.test(
      lower
    )

  if (
    !hasTechSignal &&
    NON_TECH_KEYWORDS.some((kw) => lower.includes(kw))
  ) {
    const isAnalytical =
      lower.includes("finance") ||
      lower.includes("legal") ||
      lower.includes("audit") ||
      lower.includes("operations")
    const score = isAnalytical ? 44 : 30
    return {
      role,
      percentage: score,
      verdict: getVerdict(score),
      summary: isAnalytical
        ? "Core background is software & AI engineering, though domain work includes RegTech, legal auditing, and fintech hackathons."
        : "Profile is specialized in Full-Stack, Backend, and AI Systems Engineering rather than this non-technical track.",
      matchedSkills: isAnalytical
        ? ["RegTech Domain", "Compliance AI", "Problem Solving"]
        : ["System Design", "Analytical Thinking", "Execution"],
      evidence: [
        "FinWiz Hackathon 1.0 India Top 5 / 4,500 (solo)",
        "B.Tech CSE @ VIT Bhopal (CGPA 8.71)",
      ],
    }
  }

  // Score against archetypes
  const matchedArchetypes: { archetype: RoleArchetype; hits: number; specificity: number }[] = []

  for (const archetype of ARCHETYPES) {
    let hits = 0
    let specificity = 0
    for (const kw of archetype.keywords) {
      if (lower.includes(kw)) {
        hits += 1
        specificity = Math.max(specificity, kw.length)
      }
    }
    if (hits > 0) {
      matchedArchetypes.push({ archetype, hits, specificity })
    }
  }

  // Check direct skill mentions in the user query
  const directSkillHits = PROFILE_SKILLS.filter((skill) =>
    lower.includes(skill)
  )

  if (matchedArchetypes.length > 0) {
    // Sort by specificity & base score so specific roles ("AI Engineer", "Backend") beat generic ("Engineer")
    matchedArchetypes.sort((a, b) => {
      if (b.specificity !== a.specificity) return b.specificity - a.specificity
      return b.archetype.baseScore - a.archetype.baseScore
    })

    const primary = matchedArchetypes[0].archetype
    const secondary = matchedArchetypes[1]?.archetype

    let score = primary.baseScore

    // Small bonus for multi-discipline overlap (e.g., "Full Stack AI Engineer", "Backend Cloud Intern")
    if (secondary && secondary.id !== "fullstack") {
      score = Math.min(98, Math.round((primary.baseScore * 0.72 + secondary.baseScore * 0.28) + 2))
    }
    if (directSkillHits.length >= 2) {
      score = Math.min(98, score + 2)
    }
    if (lower.includes("senior") || lower.includes("staff") || lower.includes("principal")) {
      score = Math.max(64, score - 14)
    } else if (lower.includes("junior") || lower.includes("intern") || lower.includes("entry")) {
      score = Math.min(98, score + 1)
    }

    const combinedSkills = Array.from(
      new Set([
        ...directSkillHits.map((s) =>
          s
            .split(" ")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ")
        ),
        ...primary.matchedSkills,
        ...(secondary ? secondary.matchedSkills.slice(0, 2) : []),
      ])
    ).slice(0, 5)

    const combinedEvidence = Array.from(
      new Set([
        ...primary.evidence,
        ...(secondary ? secondary.evidence.slice(0, 1) : []),
      ])
    ).slice(0, 2)

    return {
      role,
      percentage: score,
      verdict: getVerdict(score),
      summary: primary.summary,
      matchedSkills: combinedSkills,
      evidence: combinedEvidence,
    }
  }

  // Direct technology-only query (e.g. "PostgreSQL", "Docker", "Ollama", "Supabase")
  if (directSkillHits.length > 0) {
    const score = Math.min(94, 80 + directSkillHits.length * 5)
    return {
      role,
      percentage: score,
      verdict: getVerdict(score),
      summary:
        "Direct overlap with core technologies used in Nigam's production projects and resume stack.",
      matchedSkills: directSkillHits
        .slice(0, 5)
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1)),
      evidence: [
        "Hands-on production projects across FastAPI, Django, Next.js, PyTorch, and AWS/Docker",
      ],
    }
  }

  // Fallback for unrecognized or niche role names
  return {
    role,
    percentage: 58,
    verdict: "Moderate Fit",
    summary:
      "Adaptable CS engineer (8.71 CGPA) with strong fundamentals across Full-Stack, Backend, Cloud, and Applied AI.",
    matchedSkills: [
      "Python & TypeScript",
      "System Design",
      "Full-Stack",
      "Generative AI",
    ],
    evidence: [
      "Proven fast learner across solo national hackathons and upstream open source (Jenkins CI)",
    ],
  }
}
