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

const AWARDS: ExperienceItemType[] = [
  {
    id: "vercel-oss",
    companyName: "▲ Vercel OSS Program",
    positions: [
      {
        id: "vercel-1",
        title: "Summer 2025 Cohort",
        employmentPeriod: "07.2025",
        employmentType: "Personal Project",
        icon: "code",
        description: `- Selected for **@Vercel OSS Program** summer 2025 cohort
- Received **$1,000** in platform credits, OSS Starter Pack, and priority community support
- Project: **React Wheel Picker**`,
        isExpanded: true,
      },
    ],
  },
  {
    id: "design-award",
    companyName: "10th Design, Manufacturing, and Application Award 2022",
    positions: [
      {
        id: "design-1",
        title: "Bronze Medal",
        employmentPeriod: "11.2022",
        employmentType: "University",
        icon: "business",
        description: `- Organized by Ho Chi Minh City Youth Youth Union
- Field: Software
- Project: **ZaDark**`,
      },
    ],
  },
  {
    id: "startup-2019",
    companyName: "Business Startup Competition 2019",
    positions: [
      {
        id: "startup-1",
        title: "2nd Prize",
        employmentPeriod: "05.2019",
        employmentType: "University",
        icon: "business",
        description: `- Organized by University of Economics and Law - VNUHCM
- Project: **Penity** – Self Development Social Network`,
      },
    ],
  },
  {
    id: "creativity-2018",
    companyName: "Can Tho City Youth and Children's Creativity Contest 2018",
    positions: [
      {
        id: "creativity-1",
        title: "2nd Prize",
        employmentPeriod: "04.2018",
        employmentType: "Grade 12",
        icon: "education",
        description: `- Field: Software
- Project: **UnlimitedStudy**`,
      },
    ],
  },
  {
    id: "informatics-2018",
    companyName: "National Young Informatics Contest 2018",
    positions: [
      {
        id: "informatics-1",
        title: "3rd Prize",
        employmentPeriod: "08.2018",
        employmentType: "Grade 12",
        icon: "education",
        description: `- Organized in Ba Ria - Vung Tau, Viet Nam
- Field: Creative Products
- Project: **UnlimitedStudy**`,
      },
    ],
  },
  {
    id: "informatics-2018-city",
    companyName: "Can The City Young Informatics Contest 2018",
    positions: [
      {
        id: "informatics-city-1",
        title: "3rd Prize",
        employmentPeriod: "04.2018",
        employmentType: "Grade 12",
        icon: "education",
        description: `- Field: Creative Software
- Project: **UnlimitedStudy**`,
      },
    ],
  },
  {
    id: "visef-2018",
    companyName: "National Science and Engineering Fair 2018 (VISEF)",
    positions: [
      {
        id: "visef-1",
        title: "3rd Prize",
        employmentPeriod: "03.2018",
        employmentType: "Grade 12",
        icon: "education",
        description: `- Organized in Lam Dong, Viet Nam
- Field: System Software
- Project: **UnlimitedStudy**`,
      },
    ],
  },
  {
    id: "outstanding-2017",
    companyName: "Can The City Outstanding Student Selection Exam 2017-2018",
    positions: [
      {
        id: "outstanding-1",
        title: "3rd Prize",
        employmentPeriod: "02.2018",
        employmentType: "Grade 12",
        icon: "education",
        description: `- Subject: Informatics (Programming)
- Programming Language: C++`,
      },
    ],
  },
];

const Awards: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleAwards = showAll ? AWARDS : AWARDS.slice(0, 5);

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

      // Awards items animation
      const awardItems = awardsRef.current?.querySelectorAll(".space-y-4");
      if (awardItems) {
        gsap.from(awardItems, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: awardsRef.current,
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
            <ShimmeringText text="Honors & Awards" duration={2} />
            <span className="text-muted-foreground text-lg font-normal">
              ({AWARDS.length})
            </span>
          </h2>
        </div>

        {/* Awards List */}
        <div ref={awardsRef} className="font-mono">
          <WorkExperience experiences={visibleAwards} />
        </div>

        {/* Show More Button */}
        {AWARDS.length > 5 && (
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

export default Awards;
