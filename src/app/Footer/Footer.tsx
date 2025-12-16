"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Rss } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full py-8 px-4 md:px-8 bg-background border-t border-border/30"
    >
      <div ref={contentRef} className="max-w-4xl mx-auto">
        {/* Main Text */}
        <div className="text-center space-y-2 mb-6">
          <p className="text-sm text-muted-foreground font-mono">
            Inspired by{" "}
            <Link
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline underline-offset-4"
            >
              tailwindcss.com
            </Link>{" "}
            &{" "}
            <Link
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline underline-offset-4"
            >
              ui.shadcn.com
            </Link>
          </p>
          <p className="text-sm text-muted-foreground font-mono">
            Built by{" "}
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline underline-offset-4"
            >
              ncdai
            </Link>
            . The source code is available on{" "}
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>

        {/* Links Row */}
        <div className="flex items-center justify-center gap-6">
          <Link
            href="/llms.txt"
            className="text-sm text-muted-foreground font-mono hover:text-foreground transition-colors"
          >
            llms.txt
          </Link>

          <Link
            href="/rss"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="RSS Feed"
          >
            <Rss className="size-4" />
          </Link>

          <Link
            href="https://www.dmca.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground font-mono hover:text-foreground transition-colors"
          >
            <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <text
                x="12"
                y="16"
                textAnchor="middle"
                fontSize="10"
                fontWeight="bold"
              >
                ©
              </text>
            </svg>
            DMCA
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
