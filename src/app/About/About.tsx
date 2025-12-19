"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Testimonials } from "@/app/Testimonials/Testimonials";
import { ShimmeringText } from "@/components/shimmering-text";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // List items staggered animation
      const listItems = listRef.current?.querySelectorAll(".about-list-item");
      if (listItems) {
        gsap.fromTo(
          listItems,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen bg-background text-foreground relative w-full py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-2xl mx-auto">
        {/* About Heading */}
        <h2
          ref={headingRef}
          className="text-3xl md:text-4xl font-semibold mb-8 text-foreground"
        >
          <ShimmeringText text="About" />
        </h2>

        {/* About Content List */}
        <ul
          ref={listRef}
          className="space-y-4 text-sm font-mono md:text-base text-foreground leading-relaxed"
        >
          {/* Item 1 */}
          <li className="about-list-item flex items-start gap-3">
            <span className="text-foreground mt-1.5">○</span>
            <span>
              <span className="text-foreground font-medium">
                Design Engineer
              </span>{" "}
              with{" "}
              <span className="text-foreground font-medium">
                5+ years of experience
              </span>
              , known for pixel-perfect execution and strong attention to small
              details.
            </span>
          </li>

          {/* Item 2 */}
          <li className="about-list-item flex items-start gap-3">
            <span className="text-foreground mt-1.5">○</span>
            <span>
              Skilled in{" "}
              <span className="text-foreground font-mono text-sm">Next.js</span>
              , <span className="text-foreground font-mono text-sm">React</span>
              ,{" "}
              <span className="text-foreground font-mono text-sm">
                TypeScript
              </span>
              , and modern front-end technologies; building high-quality,
              user-centric web and mobile applications.
            </span>
          </li>

          {/* Item 3 */}
          <li className="about-list-item flex items-start gap-3">
            <span className="text-foreground mt-1.5">○</span>
            <span>
              Passionate about exploring new technologies and turning ideas into
              reality through polished, thoughtfully crafted personal projects.
            </span>
          </li>

          {/* Item 4 - ZaDark */}
          <li className="about-list-item flex items-start gap-3">
            <span className="text-foreground mt-1.5">○</span>
            <div className="flex-1">
              <span>
                Creator of{" "}
                <a
                  href="https://zadark.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-2 hover:text-white transition-colors"
                >
                  ZaDark
                </a>{" "}
                (2022): enhances the Zalo experience on PC & Web
              </span>
              {/* Sub-list for ZaDark stats */}
              <ul className="mt-3 space-y-2 pl-4">
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1">○</span>
                  <span>
                    <span className="text-foreground font-medium">80k+</span>{" "}
                    downloads on{" "}
                    <a
                      href="https://sourceforge.net/projects/nicedark/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline underline-offset-2 hover:text-white transition-colors"
                    >
                      SourceForge
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1">○</span>
                  <span>
                    <span className="text-foreground font-medium">30k+</span>{" "}
                    active users on the{" "}
                    <a
                      href="https://chrome.google.com/webstore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline underline-offset-2 hover:text-white transition-colors"
                    >
                      Chrome Web Store
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </li>

          {/* Item 5 - React Wheel Picker */}
          <li className="about-list-item flex items-start gap-3">
            <span className="text-foreground mt-1.5">○</span>
            <div className="flex-1">
              <span>
                Creator of{" "}
                <a
                  href="https://www.npmjs.com/package/react-wheel-picker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-2 hover:text-white transition-colors"
                >
                  React Wheel Picker
                </a>
                : iOS-like wheel picker with inertia scrolling & infinite loop
              </span>
              {/* Sub-list for React Wheel Picker stats */}
              <ul className="mt-3 space-y-2 pl-4">
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1">○</span>
                  <span>
                    <span className="text-foreground font-medium">10k+</span>{" "}
                    weekly downloads on{" "}
                    <a
                      href="https://www.npmjs.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline underline-offset-2 hover:text-white transition-colors"
                    >
                      npm
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1">○</span>
                  <span>
                    <span className="text-foreground">▲</span>
                    <a
                      href="https://vercel.com/oss"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline underline-offset-2 hover:text-white transition-colors ml-1"
                    >
                      Vercel OSS Program
                    </a>{" "}
                    summer 2025 cohort
                  </span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="mt-20">
          <Testimonials />
        </div>

        {/* GitHub Contributions Graph */}
        <div className="mt-16">
          <img
            src="/github-contributions.png"
            alt="3,127 contributions in 2024 on GitHub"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
