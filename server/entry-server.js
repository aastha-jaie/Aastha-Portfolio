import { jsxs, jsx } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
const projects = [
  {
    title: "Customer Onboarding Platform",
    description: "Built a self-serve onboarding workflow with guided forms, service health checks, and telemetry that reduced client onboarding time by 80% while maintaining auditability.",
    tags: ["React", "TypeScript", "Walmart Global Tech"]
  },
  {
    title: "Biz2X Lending Dashboard",
    description: "Designed and implemented responsive dashboards with analytics, funding status, and proactive alerts so customer success teams could prioritize $100M+ lending pipelines.",
    tags: ["React", "GraphQL", "Biz2Credit"]
  }
];
const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "Redux",
  "Redux Toolkit",
  "Java",
  "Spring",
  "GenAI",
  "REST APIs",
  "PostgreSQL",
  "Git",
  "CI/CD"
];
const socials = [
  { label: "Email", value: "aasthajaie22@gmail.com", href: "mailto:aasthajaie22@gmail.com" },
  { label: "GitHub", value: "https://github.com/aastha-jaie", href: "https://github.com/aastha-jaie" },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/aastha-jaie/",
    href: "https://www.linkedin.com/in/aastha-jaie/"
  }
];
const experience = [
  {
    company: "Walmart Global Tech Ltd — Bengaluru, India",
    role: "Software Engineer III (Senior Level)",
    period: "Apr 2022 — Oct 2025",
    highlights: [
      "Directed delivery of executive dashboards and a self-serve onboarding portal used daily by 400+ users, automating 25 manual spreadsheets and compressing onboarding SLAs from three weeks to under five days (75% faster).",
      "Partnered with UX, product, and backend pods to map 30+ multi-step customer journeys and define scalable REST/GraphQL integrations that unlocked compliant launches across 4 international markets.",
      "Optimized React builds (code-splitting, state pruning, memoization) to reduce bundle size by 65% (1.1 MB to 380 KB) and cut re-render time by 40%, improving Lighthouse performance from 61 to 92.",
      "Mentored a pod of 8 junior engineers, codified review checklists, and facilitated 40+ technical interviews to scale the front-end guild without regression debt."
    ]
  },
  {
    company: "Biz2Credit — Delhi, India",
    role: "Software Engineer",
    period: "Apr 2021 — Mar 2022",
    highlights: [
      "Built and iterated on the Biz2X customer dashboard UI so SMB lenders could track loan applications and financial analytics in real time, boosting daily active usage by 32% and reducing support tickets by 28%.",
      "Hardened authentication flows, accessibility, and performance budgets, lifting client-facing availability to 99.95% and contributing to a 10% revenue lift for lending partners.",
      "Collaborated closely with backend squads to define 15+ GraphQL/REST contracts, deliver full-stack features, and balance roadmap throughput with production stability.",
      "Introduced feature flags and A/B testing that cut rollout time for lender programs by 50% while improving borrower funnel conversion by 18%."
    ]
  },
  {
    company: "Newgen Software Technologies — Noida, India",
    role: "Software Engineer",
    period: "Jul 2019 — Mar 2021",
    highlights: [
      "Delivered reusable UI modules for regulated banking applications (account opening, loan processing, account management) that reduced customization time by 52% across 6 Tier-1 banks.",
      "Partnered with 12+ client stakeholders to translate regulatory business requirements into UI specs and ship quarterly releases that passed RBI/FFIEC audits with zero findings."
    ]
  }
];
function App() {
  return /* @__PURE__ */ jsxs("div", { className: "page", children: [
    /* @__PURE__ */ jsxs("header", { className: "hero", id: "top", children: [
      /* @__PURE__ */ jsxs("nav", { className: "nav", children: [
        /* @__PURE__ */ jsx("div", { className: "logo", children: "AJ" }),
        /* @__PURE__ */ jsxs("div", { className: "nav-links", children: [
          /* @__PURE__ */ jsx("a", { href: "#about", children: "About" }),
          /* @__PURE__ */ jsx("a", { href: "#experience", children: "Experience" }),
          /* @__PURE__ */ jsx("a", { href: "#projects", children: "Projects" }),
          /* @__PURE__ */ jsx("a", { href: "#skills", children: "Skills" }),
          /* @__PURE__ */ jsx("a", { href: "#contact", children: "Contact" })
        ] }),
        /* @__PURE__ */ jsx("a", { className: "nav-cta", href: "/aastha-jaie_resume.pdf", download: true, children: "Download Resume" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hero-grid", children: [
        /* @__PURE__ */ jsxs("div", { className: "hero-copy", children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Software Engineer · Frontend + Full-Stack" }),
          /* @__PURE__ */ jsxs("h1", { children: [
            "Aastha Jaie",
            /* @__PURE__ */ jsx("span", { children: "Delivering high-impact products with thoughtful UX and scalable systems." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "lead", children: "I design fast, human-first interfaces with React and TypeScript, and build durable backends with Java, Spring, and GenAI-powered workflows. I love shipping thoughtful UX, pragmatic architectures, and measurable impact." }),
          /* @__PURE__ */ jsxs("div", { className: "hero-actions", children: [
            /* @__PURE__ */ jsx("a", { className: "primary", href: "#projects", children: "View Projects" }),
            /* @__PURE__ */ jsx("a", { className: "ghost", href: "#contact", children: "Let's Talk" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "stats", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "stat-value", children: "5+" }),
              /* @__PURE__ */ jsx("span", { className: "stat-label", children: "Major launches" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "stat-value", children: "12+" }),
              /* @__PURE__ */ jsx("span", { className: "stat-label", children: "Product experiments" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "stat-value", children: "3x" }),
              /* @__PURE__ */ jsx("span", { className: "stat-label", children: "Performance uplift" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hero-card", children: [
          /* @__PURE__ */ jsx("div", { className: "card-head", children: "Currently focused" }),
          /* @__PURE__ */ jsxs("ul", { children: [
            /* @__PURE__ */ jsx("li", { children: "Frontend architecture, performance, and accessibility" }),
            /* @__PURE__ */ jsx("li", { children: "GenAI + AI features integrated into product workflows" }),
            /* @__PURE__ */ jsx("li", { children: "Actively seeking frontend / full-stack roles" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "card-foot", children: [
            /* @__PURE__ */ jsx("span", { children: "Open to interviews" }),
            /* @__PURE__ */ jsx("a", { href: "#contact", children: "Schedule a call" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "about", className: "section about", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { children: "About" }),
        /* @__PURE__ */ jsx("p", { children: "I'm a full-stack engineer who blends product intuition with production-grade engineering. My work spans React, TypeScript, Redux Toolkit, Java, and Spring, with a growing focus on GenAI and intelligent automation. I care about the craft: clean states, clear boundaries, and interfaces that earn attention." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "about-panels", children: [
        /* @__PURE__ */ jsxs("div", { className: "panel", children: [
          /* @__PURE__ */ jsx("h3", { children: "What I deliver" }),
          /* @__PURE__ */ jsx("p", { children: "Launch-ready web apps, scalable APIs, and data-driven flows that are easy to operate and delightful to use." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "panel", children: [
          /* @__PURE__ */ jsx("h3", { children: "What I value" }),
          /* @__PURE__ */ jsx("p", { children: "Tight feedback loops, product clarity, sustainable engineering, and measurable outcomes." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "experience", className: "section experience", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-head", children: [
        /* @__PURE__ */ jsx("h2", { children: "Experience" }),
        /* @__PURE__ */ jsx("p", { children: "Impact-driven roles with product, platform, and GenAI initiatives." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "experience-list", children: experience.map((item) => /* @__PURE__ */ jsxs("details", { className: "experience-card", children: [
        /* @__PURE__ */ jsxs("summary", { className: "experience-summary", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { children: item.role }),
            /* @__PURE__ */ jsx("span", { className: "experience-company", children: item.company })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "experience-period", children: item.period })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "experience-points", children: item.highlights.map((highlight) => /* @__PURE__ */ jsx("li", { children: highlight }, highlight)) })
      ] }, item.company)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "projects", className: "section projects", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-head", children: [
        /* @__PURE__ */ jsx("h2", { children: "Projects" }),
        /* @__PURE__ */ jsx("p", { children: "Selected work across onboarding, lending, and regulated product experiences." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "project-grid", children: projects.map((project) => /* @__PURE__ */ jsxs("article", { className: "project-card", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { children: project.title }),
          /* @__PURE__ */ jsx("p", { children: project.description })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "tag-row", children: project.tags.map((tag) => /* @__PURE__ */ jsx("span", { children: tag }, tag)) })
      ] }, project.title)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "skills", className: "section skills", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-head", children: [
        /* @__PURE__ */ jsx("h2", { children: "Skills" }),
        /* @__PURE__ */ jsx("p", { children: "Tools and technologies I use to bring products to life." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "skill-grid", children: skills.map((skill) => /* @__PURE__ */ jsx("span", { className: "skill-chip", children: skill }, skill)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "section resume", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { children: "Resume" }),
        /* @__PURE__ */ jsx("p", { children: "Download a copy of my latest resume for a full breakdown of roles, responsibilities, and outcomes." })
      ] }),
      /* @__PURE__ */ jsx("a", { className: "primary", href: "/aastha-jaie_resume.pdf", download: true, children: "Download Resume" })
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "contact", className: "section contact", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-head", children: [
        /* @__PURE__ */ jsx("h2", { children: "Contact" }),
        /* @__PURE__ */ jsx("p", { children: "Open to frontend / full-stack opportunities. I'll reply within 48 hours." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "contact-grid", children: socials.map((social) => /* @__PURE__ */ jsxs("a", { className: "contact-card", href: social.href, children: [
        /* @__PURE__ */ jsx("span", { children: social.label }),
        /* @__PURE__ */ jsx("strong", { children: social.value })
      ] }, social.label)) })
    ] }),
    /* @__PURE__ */ jsxs("footer", { className: "footer", children: [
      /* @__PURE__ */ jsx("span", { children: "© 2026 Aastha Jaie. Building product-grade web and backend systems." }),
      /* @__PURE__ */ jsx("a", { href: "#top", children: "Back to top" })
    ] })
  ] });
}
function render(_url) {
  return renderToString(/* @__PURE__ */ jsx(App, {}));
}
export {
  render
};
