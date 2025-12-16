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

const CERTIFICATIONS: ExperienceItemType[] = [
  {
    id: "gemini-educator",
    companyName: "Gemini Certified Educator",
    companyLogo: "https://api.dicebear.com/7.x/shapes/svg?seed=gemini",
    positions: [
      {
        id: "gemini-1",
        title: "@Google for Education",
        employmentPeriod: "09.12.2025",
        icon: "education",
      },
    ],
  },
  {
    id: "animations-web",
    companyName: "Animations on the Web",
    companyLogo: "https://api.dicebear.com/7.x/shapes/svg?seed=anim",
    positions: [
      {
        id: "anim-1",
        title: "@animations.dev",
        employmentPeriod: "03.11.2025",
        icon: "code",
      },
    ],
  },
  {
    id: "trademark-565092",
    companyName: "Certificate of Trademark Registration No. 565092",
    companyLogo: "https://api.dicebear.com/7.x/shapes/svg?seed=tm1",
    positions: [
      {
        id: "tm-1",
        title: "@Intellectual Property Office of Viet Nam",
        employmentPeriod: "18.08.2025",
        icon: "business",
      },
    ],
  },
  {
    id: "trademark-543682",
    companyName: "Certificate of Trademark Registration No. 543682",
    companyLogo: "https://api.dicebear.com/7.x/shapes/svg?seed=tm2",
    positions: [
      {
        id: "tm-2",
        title: "@Intellectual Property Office of Viet Nam",
        employmentPeriod: "08.05.2025",
        icon: "business",
      },
    ],
  },
  {
    id: "nextjs-seo",
    companyName: "Next.js SEO Fundamentals",
    companyLogo: "https://api.dicebear.com/7.x/shapes/svg?seed=nextjs",
    positions: [
      {
        id: "seo-1",
        title: "@Vercel",
        employmentPeriod: "26.04.2025",
        icon: "code",
      },
    ],
  },
  {
    id: "nextjs-router",
    companyName: "Next.js App Router Fundamentals",
    companyLogo: "https://api.dicebear.com/7.x/shapes/svg?seed=router",
    positions: [
      {
        id: "router-1",
        title: "@Vercel",
        employmentPeriod: "26.04.2025",
        icon: "code",
      },
    ],
  },
  {
    id: "react-foundations",
    companyName: "React Foundations for Next.js",
    companyLogo: "https://api.dicebear.com/7.x/shapes/svg?seed=react",
    positions: [
      {
        id: "react-1",
        title: "@Vercel",
        employmentPeriod: "26.04.2025",
        icon: "code",
      },
    ],
  },
  {
    id: "copyright-reg",
    companyName: "Certificate of Copyright Registration No. 0040/2025/QTG",
    companyLogo: "https://api.dicebear.com/7.x/shapes/svg?seed=copyright",
    positions: [
      {
        id: "copyright-1",
        title: "@Copyright Office of Viet Nam",
        employmentPeriod: "03.01.2025",
        icon: "business",
      },
    ],
  },
];

const Certificate: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleCerts = showAll ? CERTIFICATIONS : CERTIFICATIONS.slice(0, 6);

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

      // Certifications items animation
      const certItems = certsRef.current?.querySelectorAll(".space-y-4");
      if (certItems) {
        gsap.from(certItems, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: certsRef.current,
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
            <ShimmeringText text="Certifications" duration={2} />
            <span className="text-muted-foreground text-lg font-normal">
              ({CERTIFICATIONS.length})
            </span>
          </h2>
        </div>

        {/* Certifications List */}
        <div ref={certsRef} className="font-mono">
          <WorkExperience experiences={visibleCerts} />
        </div>

        {/* Show More Button */}
        {CERTIFICATIONS.length > 6 && (
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

export default Certificate;
