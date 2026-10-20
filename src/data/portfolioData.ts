export interface Project {
  id: string;
  title: string;
  category: "Financial systems" | "Business software" | "AI application" | "Web application";
  description: string;
  tags: string[];
  symbol: string;
  linkText: string;
  linkUrl: string;
  isExternal: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface GrowthItem {
  type: string;
  title: string;
  description: string;
}

export interface Principle {
  symbol: string;
  title: string;
  description: string;
}

export const portfolioData = {
  profile: {
    name: "Stallone Musigah Odhiambo",
    shortName: "Stallone Odhiambo",
    initials: "SO",
    role: "Software Developer & Technical Project Lead",
    organization: "QMUS GLOBAL SYSTEMS LTD",
    primaryStack: "C# · .NET · Azure",
    websiteUrl: "https://musigahstallone.vercel.app",
    githubUrl: "https://github.com/musigahstallone",
    devpostUrl: "https://devpost.com/",
    email: "stallone.odhiambo@example.com", // Fallback or template for clipboard copy
    headline: {
      lead: "Building useful software.",
      accent: "Solving real problems.",
    },
    bio: "I'm Stallone Musigah Odhiambo, a software developer focused on designing, building, and improving digital systems. I work across application development, cloud infrastructure, financial systems, and AI-powered solutions.",
  },

  about: {
    kicker: "01 / About",
    title: "A little about how I work.",
    subtitle: "Practical engineering, thoughtful architecture, and technology that serves a clear purpose.",
    mainPanel: {
      headline: "Developer by practice. Problem-solver by mindset.",
      paragraphs: [
        "My work brings together backend development, cloud services, application architecture, and technical project coordination. I enjoy turning requirements into dependable software, from financial management platforms to AI-assisted applications.",
        "I value maintainable code, sensible architecture, reliable integrations, clear documentation, and solutions that can grow without unnecessary complexity.",
      ],
    },
    principlesTitle: "What guides my work",
    principles: [
      {
        symbol: "⌘",
        title: "Keep it practical",
        description: "Choose tools and patterns that solve the actual problem.",
      },
      {
        symbol: "◇",
        title: "Build for reliability",
        description: "Consider security, data integrity, and maintainability.",
      },
      {
        symbol: "↗",
        title: "Keep improving",
        description: "Learn, experiment, document, and refine the solution.",
      },
    ] as Principle[],
  },

  projectsSection: {
    kicker: "02 / Selected work",
    title: "Projects and product systems.",
    subtitle: "Software focused on operational efficiency, financial workflows, and practical digital experiences.",
    projects: [
      {
        id: "chipukizi-sacco",
        title: "Chipukizi VOD & SACCO Systems",
        category: "Financial systems",
        description:
          "Work across Chipukizi VOD platform planning and cooperative financial management, with an emphasis on member administration, savings transactions, accounting workflows, and organized records.",
        tags: ["C#", ".NET", "PostgreSQL", "System design"],
        symbol: "▦",
        linkText: "Explore related work ↗",
        linkUrl: "https://github.com/musigahstallone",
        isExternal: true,
      },
      {
        id: "rental-management",
        title: "Rental Management System",
        category: "Business software",
        description:
          "A rental operations system concept covering properties, units, tenants, leases, invoice periods, payments, allocations, and account balances, with an emphasis on traceable financial records.",
        tags: ["ASP.NET Core", "Blazor", "Azure", "Flutter"],
        symbol: "⌂",
        linkText: "Explore related work ↗",
        linkUrl: "https://github.com/musigahstallone",
        isExternal: true,
      },
      {
        id: "pennypincher-ai",
        title: "PennyPincher AI",
        category: "AI application",
        description:
          "A competition project associated with AI-assisted personal finance. Focused on exploring how intelligent software can help people understand financial information and make more informed decisions.",
        tags: ["Generative AI", "Google Gemini", "Product design"],
        symbol: "✳",
        linkText: "Visit Devpost ↗",
        linkUrl: "https://devpost.com/",
        isExternal: true,
      },
      {
        id: "eventzen-bookwise",
        title: "EventZen & BookWise",
        category: "Web application",
        description:
          "Additional hackathon projects exploring event-related experiences and book discovery. These projects reflect an interest in building focused applications around real user needs.",
        tags: ["Web development", "Prototyping", "Product thinking"],
        symbol: "◷",
        linkText: "Visit Devpost ↗",
        linkUrl: "https://devpost.com/",
        isExternal: true,
      },
    ] as Project[],
  },

  skillsSection: {
    kicker: "03 / Toolkit",
    title: "Technologies I work with.",
    subtitle: "A practical toolkit spanning application development, cloud infrastructure, AI experimentation, and team workflows.",
    categories: [
      {
        title: "Languages & backend",
        skills: ["C#", ".NET", "ASP.NET Core", ".NET Aspire", "REST APIs"],
      },
      {
        title: "Cloud & infrastructure",
        skills: ["Microsoft Azure", "App Service", "Google Cloud", "Firebase", "Cloud Firestore"],
      },
      {
        title: "AI & machine learning",
        skills: ["Google Gemini API", "Google AI Studio", "Generative AI", "Kaggle"],
      },
      {
        title: "Frontend & mobile",
        skills: ["Angular", "Next.js", "Blazor", "Flutter"],
      },
      {
        title: "Data & integration",
        skills: ["PostgreSQL", "Cloud Firestore", "Firebase", "API integration"],
      },
      {
        title: "Engineering workflow",
        skills: ["GitHub", "GitHub Actions", "CI/CD", "WebStorm", "Notion"],
      },
    ] as SkillCategory[],
  },

  experienceSection: {
    kicker: "04 / Learning & growth",
    title: "Continuous development.",
    subtitle: "Building technical depth through coursework, structured learning, hands-on projects, and developer competitions.",
    items: [
      {
        type: "Education",
        title: "The Co-operative University of Kenya",
        description: "Software engineering coursework and practical assignments, including academic portals and application development.",
      },
      {
        type: "Professional development",
        title: "Google Hustle Academy",
        description: "Business-oriented learning supporting entrepreneurial thinking and the development of practical solutions.",
      },
      {
        type: "AI learning",
        title: "Kaggle GenAI Intensive Course",
        description: "Structured learning focused on generative AI concepts, applications, and experimentation.",
      },
      {
        type: "Hackathons & competitions",
        title: "Devpost Projects",
        description: "EventZen, PennyPincher AI, and BookWise — project work exploring application development and product ideas.",
      },
    ] as GrowthItem[],
  },

  ventureSection: {
    kicker: "05 / Venture",
    title: "Building beyond individual projects.",
    company: "QMUS GLOBAL SYSTEMS LTD",
    badge: "Technology & systems",
    description: "Contributing to executive management, technical documentation, project architecture planning, and the development of software solutions designed around business operations and institutional needs.",
  },

  contactSection: {
    kicker: "06 / Contact",
    title: "Have a project in mind?",
    description: "I'm interested in meaningful software projects, engineering collaboration, and opportunities to turn practical ideas into reliable digital products.",
  },
};
