import { AboutCard, ProcessStep, ProjectItem, SkillItem, ServiceItem, PricingPackage } from '../types.ts';

export const personalInfo = {
  name: "Champz Digital",
  preferredName: "Champz",
  brandName: "Champz Digital",
  logoTag: "CD",
  supportingTitle: "Web Development • Digital Solutions",
  headline: "Modern Websites. Digital Solutions.",
  tagline: "Modern Websites. Digital Solutions.",
  role: "Web Development • Digital Solutions",
  status: "Available for projects",
  bioHeadline: "Modern Websites. Digital Solutions.",
  shortDescription: "We build fast, responsive and professional websites for businesses, organizations and individuals.",
  email: "fatiufaruk7@gmail.com",
  location: "Available Worldwide / Remote",
  experience: "Professional Web Development & Digital Solutions",
  socials: {
    twitter: "https://x.com/Toriblackm8j9",
    whatsapp: "https://wa.me/2348137941486",
    whatsappNumber: "08137941486",
  }
};

export const codeSnippetString = `const brand = {
    name: "Champz Digital",
    focus: "Web Development",
    mission: "Modern Websites. Digital Solutions.",
    status: "Available for projects"
};

function buildWebsite(client) {
    return {
        speed: "Blazing Fast",
        design: "Clean & Responsive",
        solution: "Tailored to Your Goals"
    };
};`;

export const servicesData: ServiceItem[] = [
  {
    id: "business-websites",
    title: "Business Websites",
    description: "Professional responsive websites that give your business a strong online presence.",
    iconName: "Briefcase"
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description: "High-converting landing pages designed to present your product, service or campaign clearly.",
    iconName: "Target"
  },
  {
    id: "ecommerce-websites",
    title: "E-commerce Websites",
    description: "Modern online stores that make it easier for customers to discover and purchase your products.",
    iconName: "ShoppingBag"
  },
  {
    id: "school-portals",
    title: "School Portals",
    description: "Functional websites and portals designed for schools, students, staff and administrators.",
    iconName: "GraduationCap"
  },
  {
    id: "web-applications",
    title: "Web Applications",
    description: "Interactive web applications built around your specific business or organizational needs.",
    iconName: "Layers"
  },
  {
    id: "progressive-web-apps",
    title: "Progressive Web Apps",
    description: "Fast, installable web experiences that work across phones, tablets and desktop devices.",
    iconName: "Smartphone"
  }
];

export const pricingPackagesData: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter",
    price: "From ₦30,000",
    bestFor: "Personal websites and simple landing pages.",
    features: [
      "Responsive design",
      "Up to 3 sections/pages",
      "Mobile optimization",
      "Contact integration",
      "Basic SEO",
      "Deployment"
    ],
    ctaText: "Get Started",
    budgetRange: "₦30k – ₦50k"
  },
  {
    id: "business",
    name: "Business",
    price: "From ₦50,000",
    badge: "Most Popular",
    popular: true,
    bestFor: "Businesses that need a professional online presence.",
    features: [
      "Professional responsive design",
      "Up to 6 pages",
      "Contact / WhatsApp integration",
      "Basic SEO",
      "Social media integration",
      "Deployment",
      "PWA option"
    ],
    ctaText: "Start a Project",
    budgetRange: "₦50k – ₦80k"
  },
  {
    id: "premium",
    name: "Premium",
    price: "From ₦80,000",
    bestFor: "Organizations and businesses needing advanced functionality.",
    features: [
      "Custom UI/UX",
      "Multiple pages",
      "Advanced functionality",
      "Database/API integration where required",
      "SEO optimization",
      "Analytics",
      "PWA support",
      "Deployment",
      "Post-launch support"
    ],
    ctaText: "Request a Quote",
    budgetRange: "₦80k – ₦100k"
  }
];

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
    projectType: "Demo Project",
    tags: ["React", "TypeScript", "Tailwind CSS", "Data Viz"],
    description: "A high-performance cloud metrics dashboard displaying real-time telemetry, customizable widgets, and financial analytics.",
    overview: "Nexus Analytics is an interactive web dashboard designed to explore real-time telemetry metrics, user traffic, and financial data in a responsive, low-light interface.",
    objective: "To demonstrate complex React state handling, dynamic chart visualizations, responsive data grids, and dark theme UI design.",
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
    projectType: "Concept",
    tags: ["Next.js", "Motion", "UI/UX", "Tailwind"],
    description: "An immersive digital experience built for design studios, featuring fluid cursor dynamics, smooth scroll physics, and typography showcase.",
    overview: "Aura Creative Studio is a portfolio showcase concept exploring fluid micro-interactions, responsive typography scaling, and modern editorial aesthetics.",
    objective: "To design a visually refined web presence highlighting interactive layout animations, fluid typography algorithms, and clean component structures.",
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
    projectType: "Personal Project",
    tags: ["TypeScript", "Node.js", "WebSockets", "CSS3"],
    description: "A minimalist developer workspace combining markdown notes, instant code snippet storage, and distraction-free task management.",
    overview: "DevFlow is a minimalist productivity workspace for developers combining instant code snippet management, live markdown previewing, and distraction-free task lists.",
    objective: "To build a fast, zero-latency developer tool with clean client-side caching and responsive, distraction-free typography.",
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
