// src/data/portfolioData.js

export const personalInfo = {
  name: "Sagar",
  title: "AI-First Full Stack Developer",
  email: "msagars2008@gmail.com",
  phone: "+91 9560724847",
  github: "https://github.com/Saga-2004",
  linkedin: "https://www.linkedin.com/in/sagar-b4b643283/",
  summary: "AI-First Full Stack Developer with hands-on experience building real-world web applications. Skilled in full-stack features, APIs, authentication systems, and payment workflows. Experienced with Claude Code, GitHub Copilot, Gemini, and ChatGPT."
};

export const skills = {
  Frontend: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js"],
  Database: ["MongoDB", "PostgreSQL"],
  "AI Tools": ["Claude Code", "GitHub Copilot", "Gemini", "ChatGPT"],
  "DevOps/Tools": ["Git", "GitHub"]
};

export const projects = [
  {
    title: "LetsEat",
    subtitle: "Food Delivery Platform",
    description: "Full-stack food delivery app with 4 role-based portals (Customer, Owner, Delivery Partner, Admin). Features JWT auth, complete order lifecycle, Razorpay payment integration with COD/Online support.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://lets-eat-rosy.vercel.app",
    github: "",
    tags: ["MongoDB", "Express", "React", "Node"]
  },
  {
    title: "GitHub Profile Analyzer",
    subtitle: "Developer Analytics Tool",
    description: "Production-ready full-stack app that analyzes GitHub profiles, computes repo insights, stores in MySQL. Features dark-mode UI, language charts, filtering/sorting, debounced search, and full repo export.",
    tech: ["React 18", "Vite", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    liveUrl: "https://github-profile-analyzer-pink-nu.vercel.app",
    github: "",
    tags: ["React 18", "MySQL", "Node.js", "Tailwind CSS"]
  },
  {
    title: "Sales Insight Analyzer",
    subtitle: "AI-Powered Sales Tool",
    description: "AI-powered web app that analyzes sales meeting transcripts to detect buying signals, objections, confusion, and sentiment using Google Gemini 2.5 Flash.",
    tech: ["React", "Vite", "Node.js", "Express", "Gemini 2.5 Flash"],
    liveUrl: "https://signature-detector-nu.vercel.app",
    github: "",
    tags: ["React", "Vite", "Gemini AI", "Tailwind"]
  }
];

export const experience = [
  {
    company: "Avani Enterprises",
    role: "Web Developer Intern",
    duration: "Feb – May 2026",
    points: [
      "Built Razorpay payment flow (order creation, signature verification) for healthcare and food delivery platforms",
      "Fixed critical IST timezone bug with UTC→IST conversion utilities across backend and frontend",
      "Deployed on VPS using PM2, resolving TypeScript build errors and Prisma migration conflicts",
      "Built CRM Workflow Automation Engine with event-based triggers and execution logs",
      "Built complete LMS module inside EMS with training catalog, quiz scoring, certificates, and role-based access"
    ]
  },
  {
    company: "Delta IT Network Pvt. Ltd.",
    role: "Web Developer Intern",
    duration: "Jun – Jul 2025",
    points: [
      "Developed full-stack features using React.js, Node.js, Express.js, and MongoDB",
      "Built secure JWT + bcrypt authentication with protected API routes",
      "Designed and integrated REST APIs for CRUD operations between frontend and backend"
    ]
  }
];

export const education = {
  degree: "B.Tech in Artificial Intelligence",
  college: "Gurugram University, Gurugram",
  duration: "2022 – 2026",
  cgpa: "7/10"
};
