"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShimmeringText } from "@/components/shimmering-text";
import {
  WorkExperience,
  ExperienceItemType,
} from "@/components/work-experience";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS: ExperienceItemType[] = [
  {
    id: "react-wheel-picker",
    companyName: "React Wheel Picker",
    companyLogo: "https://api.dicebear.com/7.x/shapes/svg?seed=wheel",
    positions: [
      {
        id: "rwp-1",
        title: "iOS-like wheel picker for React",
        employmentPeriod: "05.2025 - ∞",
        employmentType: "Open Source",
        icon: "code",
        description: `iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support. / Backed by **@Vercel OSS Program**

- 🖱️ Natural touch scrolling with smooth inertia effect
- 🖱️ Mouse drag and scroll support for desktop
- 🔁 Infinite loop scrolling
- 🎨 Unstyled components for complete style customization
- ⚡ Easy installation via shadcn CLI`,
        skills: [
          "Open Source",
          "React",
          "TypeScript",
          "Monorepo",
          "Turborepo",
          "pnpm-workspace",
          "Package Publishing",
          "NPM Registry",
          "GitHub Actions",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "chanhdai-com",
    companyName: "chanhdai.com",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=CD",
    positions: [
      {
        id: "cd-1",
        title: "Personal Dev Portfolio & Registry",
        employmentPeriod: "01.2025 - ∞",
        employmentType: "Open Source",
        icon: "code",
        description: `A minimal, pixel-perfect dev portfolio, component registry, and blog.

**Featured:**
- Clean & modern design
- Light/Dark themes
- vCard integration
- SEO optimized (**JSON-LD schema**, sitemap, robots)
- AI-ready with **/llms.txt**
- Spam-protected email
- Installable as PWA

**Blog:**
- Supports MDX & Markdown
- Raw .mdx endpoints for AI readability
- Syntax highlighting for clear code presentation
- Dynamic OG images for rich link previews
- RSS feed for easy content distribution

**Registry:**
- Easily build and distribute reusable components, hooks, and pages using a custom registry powered by the **shadcn CLI**.
- Each entry is well-documented and includes:
  - Live preview & code snippets
  - Beautiful, readable code blocks
  - One-click command blocks (pnpm, npm, yarn, bun)`,
        skills: [
          "Open Source",
          "Next.js 15",
          "Tailwind CSS v4",
          "Radix UI",
          "Motion",
          "shadcn/ui",
          "Component Registry",
          "Vercel",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "quaric-com",
    companyName: "quaric.com",
    companyLogo: "https://api.dicebear.com/7.x/shapes/svg?seed=quaric",
    positions: [
      {
        id: "qc-1",
        title: "Company Website & Platform",
        employmentPeriod: "03.2024 - ∞",
        employmentType: "Company Project",
        icon: "business",
        description: `Full-stack company website and e-commerce platform with payment integration.`,
        skills: [
          "Company Project",
          "Next.js 15",
          "Tailwind CSS v3",
          "shadcn/ui",
          "Stripe S",
          "VNPAY-QR",
          "Docker",
          "Docker Compose",
          "NGINX",
        ],
      },
    ],
  },
  {
    id: "zadark",
    companyName: "ZaDark",
    companyLogo: "https://api.dicebear.com/7.x/shapes/svg?seed=zadark",
    positions: [
      {
        id: "zd-1",
        title: "Dark Mode Extension for Zalo",
        employmentPeriod: "01.2022 - ∞",
        employmentType: "Pet Project",
        icon: "code",
        description: `ZaDark adds Dark Mode, anti-peeking, customizable fonts, backgrounds, and more to Zalo **Web** and **PC**.

- Earned 10M+ VND in net sales from a paid Safari Extension
- 80K+ downloads on SourceForge (awarded Community Leader badge by SourceForge)
- 20K+ active users via Chrome Web Store (as of Sep 2025)
- Bronze Medal – 10th Design, Manufacturing, and Application Award 2022`,
        skills: [
          "Pet Project",
          "Open Source",
          "Browser Extension",
          "CLI",
          "Docusaurus 3",
        ],
      },
    ],
  },
];

const Work: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 4);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Projects animation
      const projectItems = projectsRef.current?.querySelectorAll(".space-y-4");
      if (projectItems) {
        gsap.from(projectItems, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 px-4 md:px-8 lg:px-16 bg-background"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold font-mono flex items-center gap-2">
            <ShimmeringText text="Projects" duration={2} />
            <span className="text-muted-foreground text-lg font-normal">
              ({PROJECTS.length})
            </span>
          </h2>
        </div>

        {/* Projects List using WorkExperience component */}
        <div ref={projectsRef} className="font-mono">
          <WorkExperience experiences={visibleProjects} />
        </div>

        {/* Show More Button */}
        {PROJECTS.length > 4 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className={cn(
                "flex items-center gap-2 px-6 py-2.5 rounded-full border border-border/50",
                "text-sm font-mono text-muted-foreground hover:text-foreground",
                "hover:bg-muted/50 transition-all duration-300"
              )}
            >
              {showAll ? "Show Less" : "Show More"}
              <ChevronDown
                className={cn(
                  "size-4 transition-transform",
                  showAll && "rotate-180"
                )}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
