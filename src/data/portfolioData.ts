import { AboutCard, ProcessStep, ProjectItem, SkillItem } from '../types.ts';

export const personalInfo = {
  name: "Clarity",
  brandName: "Clarity Creative",
  logoTag: "C²",
  role: "Web Developer & Code Enthusiast",
  status: "Available for projects",
  bioHeadline: "Turning ideas into digital experiences.",
  shortDescription: "I build modern, responsive and interactive websites that turn ideas into real digital experiences.",
  email: "fatiufaruk7@gmail.com",
  location: "Available Worldwide / Remote",
  experience: "3+ Years Building for Web",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  }
};

export const codeSnippetString = `const developer = {
    name: "Clarity",
    role: "Web Developer",
    passion: "Coding",
    mindset: "Keep Learning"
};

function create() {
    return "Something Amazing";
}`;

export const aboutCards: AboutCard[] = [
  {
    title: "Web Developer",
    icon: "fa-solid fa-code",
    description: "Building modern web experiences with clean architecture.",
  },
  {
    title: "Student",
    icon: "fa-solid fa-graduation-cap",
    description: "Studying Computer Science and cutting-edge software systems.",
  },
  {
    title: "Creative",
    icon: "fa-solid fa-lightbulb",
    description: "Turning ambitious ideas into intuitive digital solutions.",
  },
  {
    title: "Problem Solver",
    icon: "fa-solid fa-cubes",
    description: "Writing maintainable, scalable, and responsive codebases.",
  }
];

export const skillsData: SkillItem[] = [
  {
    id: "html-css",
    name: "HTML5 & CSS3",
    category: "frontend",
    icon: "fa-brands fa-html5",
    lucideIconName: "Code2",
    description: "Semantic structures, modern flexbox & grid layouts.",
    level: 95
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: "fa-brands fa-js",
    lucideIconName: "FileCode",
    description: "Asynchronous programming, DOM manipulation, APIs.",
    level: 92
  },
  {
    id: "react",
    name: "React & Next.js",
    category: "frontend",
    icon: "fa-brands fa-react",
    lucideIconName: "Atom",
    description: "Custom hooks, component state trees, and fast render cycles.",
    level: 90
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    icon: "fa-solid fa-file-shield",
    lucideIconName: "ShieldCheck",
    description: "Strict static typing, interfaces, and resilient type safety.",
    level: 88
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    icon: "fa-solid fa-palette",
    lucideIconName: "Palette",
    description: "Design systems, utility-first micro-styling, dark themes.",
    level: 94
  },
  {
    id: "node",
    name: "Node.js & Express",
    category: "backend",
    icon: "fa-brands fa-node-js",
    lucideIconName: "Server",
    description: "REST APIs, secure server endpoints, middleware routing.",
    level: 84
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "tools",
    icon: "fa-brands fa-git-alt",
    lucideIconName: "GitBranch",
    description: "Version control workflows, branching, PR review pipelines.",
    level: 89
  },
  {
    id: "responsive",
    name: "Responsive Design",
    category: "frontend",
    icon: "fa-solid fa-mobile-screen",
    lucideIconName: "Smartphone",
    description: "Mobile-first layouts adaptable to any device display.",
    level: 96
  },
  {
    id: "perf",
    name: "Performance & SEO",
    category: "tools",
    icon: "fa-solid fa-bolt",
    lucideIconName: "Zap",
    description: "Core Web Vitals optimization, asset compression, semantic meta.",
    level: 86
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "nexus-analytics",
    title: "Nexus Analytics Dashboard",
    category: "Web Application",
    tags: ["React", "TypeScript", "Tailwind CSS", "Data Viz"],
    description: "A high-performance cloud metrics dashboard displaying real-time telemetry, customizable widgets, and financial analytics.",
    previewClass: "preview-one",
    previewGradient: "radial-gradient(circle, #293e8b 0%, #091025 80%)",
    previewIcon: "fa-solid fa-chart-pie",
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    highlights: [
      "Interactive data charts with real-time state synchronization",
      "Dynamic dark mode theme tailored for low-light developer workflows",
      "Modular dashboard drag-and-drop card grid"
    ]
  },
  {
    id: "aura-creative",
    title: "Aura Creative Studio",
    category: "Agency Portfolio",
    tags: ["Next.js", "Motion", "UI/UX", "Tailwind"],
    description: "An immersive digital experience built for design studios, featuring fluid cursor dynamics, smooth scroll physics, and typography showcase.",
    previewClass: "preview-two",
    previewGradient: "radial-gradient(circle, #572c82 0%, #160b23 80%)",
    previewIcon: "fa-solid fa-wand-magic-sparkles",
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    highlights: [
      "Hardware-accelerated micro-interactions and transitions",
      "Dynamic typography scaling using fluid clamp algorithms",
      "Custom case study modal viewer with high-res asset previews"
    ]
  },
  {
    id: "devflow-workspace",
    title: "DevFlow Productivity Suite",
    category: "Developer Tool",
    tags: ["TypeScript", "Node.js", "WebSockets", "CSS3"],
    description: "A minimalist developer workspace combining markdown notes, instant code snippet storage, and distraction-free task management.",
    previewClass: "preview-three",
    previewGradient: "radial-gradient(circle, #19636c 0%, #06191c 80%)",
    previewIcon: "fa-solid fa-layer-group",
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    highlights: [
      "Instant syntax-highlighted snippet manager with one-click copy",
      "Markdown editor with live rendered preview and export options",
      "Offline-first local cache synchronization with zero latency"
    ]
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Planning",
    icon: "fa-solid fa-compass",
    description: "Defining project objectives, user personas, technical requirements, and system scope.",
    details: [
      "Requirement specification & architecture mapping",
      "Technology selection and benchmark assessment"
    ]
  },
  {
    number: "02",
    title: "Design & Prototyping",
    icon: "fa-solid fa-pen-ruler",
    description: "Crafting wireframes, UI design systems, interactive components, and responsive grids.",
    details: [
      "Consistent typographic hierarchy & color contrast",
      "Mobile and desktop layout ergonomics"
    ]
  },
  {
    number: "03",
    title: "Clean Development",
    icon: "fa-solid fa-code",
    description: "Writing modular, semantic, and performant TypeScript code with robust error boundaries.",
    details: [
      "Component modularity and reusable utility logic",
      "Zero-latency reactive state updates"
    ]
  },
  {
    number: "04",
    title: "Testing & Launch",
    icon: "fa-solid fa-rocket",
    description: "Rigorous cross-browser verification, accessibility checks, performance audits, and launch.",
    details: [
      "Lighthouse performance & accessibility audits",
      "Continuous deployment setup & monitoring"
    ]
  }
];
