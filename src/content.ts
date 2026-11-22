export const site = {
  name: "Navaneetha Enjam",
  shortName: "NE",
  role: "Full Stack Developer",
  hello: "Hello, I'm",
  tagline: "Full Stack Developer • Building Useful Systems",
  pitch:
    "I'm a software engineer with 3+ years of experience building backend systems and full-stack features. I work mostly with Java, Spring Boot, and cloud services — and I'm comfortable on the frontend with React and Angular when the product needs it.",
  lookingFor: "I'm currently looking for full-time software engineering roles.",
  location: "United States",
  email: "navaneethaenjam0@gmail.com",
  linkedin: "https://www.linkedin.com/in/navaneetha-enjam",
  github: "https://github.com/navaneethaenjam",
  resumePath: "/resume.pdf",
  profileImage: "/profile.jpeg",
}

export const quickInfo = [
  {
    icon: "fas fa-graduation-cap",
    label: "MS in CS - UCM",
  },
  {
    icon: "fas fa-certificate",
    label: "3+ Years Experience",
  },
  {
    icon: "fas fa-laptop-code",
    label: "Full Stack Developer",
  },
]

export const about = {
  title: "About Me",
  lead:
    "I'm a software engineer passionate about building efficient, scalable applications and full-stack features, with a strong focus on backend systems and reliable APIs.",
  paragraphs: [
    "I enjoy solving complex problems, improving code quality, and working with teams to turn ideas into production systems across fintech, telecom, and enterprise.",
  ],
  education: [
    {
      school: "University of Central Missouri",
      detail: "M.S. Computer Science · 2023 – 2024",
    },
    {
      school: "NIT Andhra Pradesh",
      detail: "B.E. ECE · 2018 – 2022",
    },
  ],
}

export type Project = {
  id: string
  company: string
  title: string
  blurb: string
  highlights: string[]
  stack: string[]
  theme: "teal" | "steel" | "amber"
  repoUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    id: "telgoo5",
    company: "Telgoo5",
    title: "Carrier & Billing APIs",
    blurb:
      "Backend APIs for subscriber actions like activation, suspension, and plan changes, plus billing operations and alerting when something looks off.",
    highlights: [
      "Carrier integration APIs for real-time subscriber actions",
      "Billing and admin APIs with audit trails",
      "Anomaly alerts for outages and subscription issues",
      "Automated tests in the CI/CD pipeline",
    ],
    stack: ["Java", "Spring Boot", "REST", "CI/CD"],
    theme: "teal",
  },
  {
    id: "plaid",
    company: "Plaid",
    title: "Financial Data Microservices",
    blurb:
      "Spring Boot microservices for financial data integrations, plus React dashboards for API usage and service health.",
    highlights: [
      "REST APIs for high-volume financial data requests",
      "React + TypeScript monitoring dashboards",
      "PostgreSQL and MongoDB query improvements",
      "Docker and Kubernetes-based deployments",
    ],
    stack: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker", "K8s"],
    theme: "steel",
  },
  {
    id: "saayam",
    company: "Saayam for All",
    title: "Humanitarian Help Platform",
    blurb:
      "Worked on the live Saayam for All website — a React platform that connects people in need with local volunteers for food, housing, education, and healthcare.",
    highlights: [
      "Shipped UI and copy updates on the production web app",
      "Improved pre-login pages, OTP verify flow, footer, and navigation",
      "Updated unit tests alongside frontend changes",
      "Contributions tracked in the public saayam-for-all/webapp repo",
    ],
    stack: ["React", "JavaScript", "JSX", "Git"],
    theme: "amber",
    liveUrl: "https://saayamforall.org/",
    repoUrl: "https://github.com/saayam-for-all/webapp/pulls?q=is%3Apr+author%3Anavaneethaenjam",
  },
  {
    id: "shop-ease",
    company: "Personal Project",
    title: "Shop Ease — Flask E-commerce",
    blurb:
      "A Flask shopping app with product catalogs by category, login, cart/orders, and an admin view for managing products and cancellations.",
    highlights: [
      "Product browsing by category from MongoDB",
      "User login and order placement flow",
      "Admin screens for products and cancelled orders",
      "Deployable Flask + Gunicorn setup",
    ],
    stack: ["Python", "Flask", "MongoDB", "HTML", "Jinja2"],
    theme: "amber",
    repoUrl: "https://github.com/navaneethaenjam/flask-shop-ease",
  },
  {
    id: "hospital",
    company: "Personal Project",
    title: "Hospital Management System",
    blurb:
      "A Flask app for patients and doctors — signup/login by role, appointments, schedules, and password management backed by MongoDB.",
    highlights: [
      "Role-based login for patients, doctors, and admin",
      "Appointment booking and cancellation flows",
      "Doctor schedule management",
      "Patient signup with generated patient IDs",
    ],
    stack: ["Python", "Flask", "MongoDB", "HTML", "Jinja2"],
    theme: "teal",
    repoUrl: "https://github.com/navaneethaenjam/flask-hospital-management",
  },
  {
    id: "capgemini",
    company: "Capgemini",
    title: "Insurance Apps & Parking System",
    blurb:
      "Angular apps for insurance policy and claims workflows, plus a team-led real-time campus parking system with MongoDB.",
    highlights: [
      "Angular SPAs for policy and claims processing",
      "Reusable UI components across modules",
      "Led 4 developers on a parking management system",
      "Improved campus parking efficiency by about 30%",
    ],
    stack: ["Angular", "TypeScript", "MongoDB", "REST"],
    theme: "steel",
  },
]

export const achievements = [
  {
    icon: "fas fa-rocket",
    title: "Production delivery",
    detail:
      "Shipped services used in live telecom and fintech operations, with testing and monitoring as part of the release process.",
  },
  {
    icon: "fas fa-users",
    title: "Team leadership",
    detail:
      "Led four developers building a real-time parking system that improved campus parking efficiency by about 30%.",
  },
  {
    icon: "fas fa-hand-holding-heart",
    title: "Saayam for All",
    detail:
      "Worked on the live Saayam for All website (saayamforall.org) — shipping React UI fixes, copy updates, and tests for a platform that connects people in need with volunteers.",
  },
]

export const skillGroups = [
  {
    title: "Programming Languages",
    items: [
      { name: "Java", icon: "fab fa-java" },
      { name: "Python", icon: "fab fa-python" },
      { name: "TypeScript", icon: "fas fa-code" },
      { name: "JavaScript", icon: "fab fa-js" },
      { name: "SQL", icon: "fas fa-database" },
      { name: "HTML", icon: "fab fa-html5" },
      { name: "CSS", icon: "fab fa-css3-alt" },
    ],
  },
  {
    title: "Tools & Technologies",
    items: [
      { name: "Git", icon: "fab fa-git-alt" },
      { name: "PostgreSQL", icon: "fas fa-database" },
      { name: "MongoDB", icon: "fas fa-database" },
      { name: "AWS", icon: "fab fa-aws" },
      { name: "Docker", icon: "fab fa-docker" },
      { name: "Kubernetes", icon: "fas fa-dharmachakra" },
      { name: "Jenkins", icon: "fas fa-cogs" },
      { name: "CI/CD Pipelines", icon: "fas fa-infinity" },
      { name: "Kafka", icon: "fas fa-stream" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "Spring Boot", icon: "fas fa-leaf" },
      { name: "Flask", icon: "fas fa-flask" },
      { name: "React", icon: "fab fa-react" },
      { name: "Angular", icon: "fab fa-angular" },
      { name: "Redux", icon: "fas fa-sync-alt" },
      { name: "Material UI", icon: "fas fa-palette" },
      { name: "JUnit", icon: "fas fa-vial" },
    ],
  },
]

export const beyondCoding = [
  {
    icon: "fas fa-running",
    title: "Sports",
    detail: "Enjoy playing sports to stay active, clear my head, and keep a healthy balance with work.",
  },
  {
    icon: "fas fa-music",
    title: "Dancing",
    detail: "Love dancing — a creative outlet that keeps me energized and connected outside of coding.",
  },
  {
    icon: "fas fa-film",
    title: "Movies & Shows",
    detail: "Enjoy watching movies and TV shows — a fun way to unwind and pick up new stories.",
  },
]

export const sectionCopy = {
  work: {
    title: "Featured Projects",
    subtitle: "",
  },
  skills: {
    title: "Technical Skills",
    subtitle: "",
  },
  achievements: {
    title: "Leadership & Achievements",
    subtitle: "",
  },
  beyond: {
    title: "Beyond Coding",
  },
  contact: {
    title: "Get In Touch",
    subtitle: "I'm currently open to new opportunities and collaborations.",
    emailTitle: "Email Me",
    emailAction: "Copy Email",
    linkedinTitle: "Connect on LinkedIn",
    linkedinBody: "Let's grow our professional network",
    linkedinAction: "View Profile",
    githubTitle: "Check My Work",
    githubBody: "Explore my projects and contributions",
    githubAction: "View GitHub",
  },
}
