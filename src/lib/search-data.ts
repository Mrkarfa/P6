export interface SearchItem {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  section: "home" | "about" | "work" | "contact";
  href: string;
}

export const searchData: SearchItem[] = [
  // Home Section
  {
    id: "home-intro",
    title: "Introduction",
    description: "Welcome to my portfolio - I'm a creative developer",
    keywords: [
      "intro",
      "welcome",
      "hello",
      "portfolio",
      "developer",
      "creative",
    ],
    section: "home",
    href: "#home",
  },
  {
    id: "home-hero",
    title: "Hero Section",
    description: "My main introduction and call to action",
    keywords: ["hero", "main", "landing", "welcome"],
    section: "home",
    href: "#home",
  },

  // About Section
  {
    id: "about-intro",
    title: "About Me",
    description: "Learn more about who I am and my journey",
    keywords: ["about", "me", "myself", "bio", "biography", "story"],
    section: "about",
    href: "#about",
  },
  {
    id: "about-education",
    title: "Education",
    description: "My educational background and qualifications",
    keywords: [
      "education",
      "school",
      "college",
      "university",
      "degree",
      "study",
      "learning",
      "academic",
    ],
    section: "about",
    href: "#about",
  },
  {
    id: "about-skills",
    title: "Skills",
    description: "Technical and soft skills I've developed",
    keywords: [
      "skills",
      "abilities",
      "expertise",
      "proficiency",
      "technology",
      "tools",
      "programming",
      "languages",
    ],
    section: "about",
    href: "#about",
  },
  {
    id: "about-experience",
    title: "Experience",
    description: "My professional work experience and career journey",
    keywords: [
      "experience",
      "work",
      "job",
      "career",
      "professional",
      "employment",
      "history",
    ],
    section: "about",
    href: "#about",
  },

  // Work Section
  {
    id: "work-projects",
    title: "Projects",
    description: "Featured projects I've worked on",
    keywords: [
      "projects",
      "work",
      "portfolio",
      "showcase",
      "featured",
      "case study",
    ],
    section: "work",
    href: "#work",
  },
  {
    id: "work-web",
    title: "Web Development",
    description: "Websites and web applications I've built",
    keywords: [
      "web",
      "website",
      "webapp",
      "frontend",
      "backend",
      "fullstack",
      "react",
      "nextjs",
      "development",
    ],
    section: "work",
    href: "#work",
  },
  {
    id: "work-design",
    title: "Design Work",
    description: "UI/UX designs and creative work",
    keywords: [
      "design",
      "ui",
      "ux",
      "user interface",
      "user experience",
      "figma",
      "creative",
    ],
    section: "work",
    href: "#work",
  },

  // Contact Section
  {
    id: "contact-form",
    title: "Contact Form",
    description: "Get in touch with me through the contact form",
    keywords: ["contact", "form", "message", "reach", "touch", "communicate"],
    section: "contact",
    href: "#contact",
  },
  {
    id: "contact-email",
    title: "Email",
    description: "Send me an email directly",
    keywords: ["email", "mail", "contact", "reach out"],
    section: "contact",
    href: "#contact",
  },
  {
    id: "contact-social",
    title: "Social Media",
    description: "Connect with me on social platforms",
    keywords: [
      "social",
      "media",
      "twitter",
      "linkedin",
      "github",
      "instagram",
      "facebook",
      "connect",
    ],
    section: "contact",
    href: "#contact",
  },
  {
    id: "contact-location",
    title: "Location",
    description: "Where I'm based and work from",
    keywords: ["location", "address", "city", "country", "based", "where"],
    section: "contact",
    href: "#contact",
  },
];

export function searchItems(query: string): SearchItem[] {
  if (!query.trim()) return [];

  const normalizedQuery = query.toLowerCase().trim();
  const queryWords = normalizedQuery.split(/\s+/);

  return searchData.filter((item) => {
    const searchableText = [
      item.title,
      item.description,
      ...item.keywords,
      item.section,
    ]
      .join(" ")
      .toLowerCase();

    return queryWords.every((word) => searchableText.includes(word));
  });
}
