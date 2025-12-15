"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { ShimmeringText } from "@/components/shimmering-text";
import { Button } from "@/components/ui/button";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Stack technology icons data
const stackIcons = [
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#F05032",
  },
  {
    name: "Discord.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg",
    color: "#5865F2",
  },
  {
    name: "Electron",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
    color: "#9FEAF9",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "#ffffff",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    color: "#06B6D4",
  },
  {
    name: "Framer",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
    color: "#0055FF",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    color: "#F24E1E",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    color: "#007ACC",
  },
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    color: "#ffffff",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
    color: "#FFCA28",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#339933",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "#47A248",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "#4169E1",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    color: "#2496ED",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776AB",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    color: "#764ABC",
  },
  {
    name: "Sass",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    color: "#CC6699",
  },
  {
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    color: "#E10098",
  },
  {
    name: "Photoshop",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
    color: "#31A8FF",
  },
];

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "React Wheel Picker joins Vercel Open Source Program",
    date: "24.07.2025",
    image: "/blog/vercel-oss.png",
    href: "#",
    featured: false,
  },
  {
    id: 2,
    title: "Followed by @shadcn on X",
    date: "21.06.2025",
    image: "/blog/shadcn-follow.png",
    href: "#",
    featured: false,
  },
  {
    id: 3,
    title: "Scroll Fade Effect",
    date: "08.12.2025",
    image: "/blog/scroll-fade.png",
    href: "#",
    featured: true,
  },
  {
    id: 4,
    title:
      "chanhdai.com Highlighted in Video by Creator of Aceternity UI: Make Your Portfolio Unforgettable",
    date: "18.11.2025",
    image: "/blog/aceternity-highlight.png",
    href: "#",
    featured: false,
  },
];

const Blog = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stackHeadingRef = useRef<HTMLHeadingElement>(null);
  const stackGridRef = useRef<HTMLDivElement>(null);
  const blogHeadingRef = useRef<HTMLHeadingElement>(null);
  const blogGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stack heading animation
      gsap.fromTo(
        stackHeadingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stackHeadingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stack icons staggered animation
      const stackItems = stackGridRef.current?.querySelectorAll(".stack-icon");
      if (stackItems) {
        gsap.fromTo(
          stackItems,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.05,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: stackGridRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Blog heading animation
      gsap.fromTo(
        blogHeadingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: blogHeadingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Blog cards staggered animation
      const blogCards = blogGridRef.current?.querySelectorAll(".blog-card");
      if (blogCards) {
        gsap.fromTo(
          blogCards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: blogGridRef.current,
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
      id="blog"
      ref={sectionRef}
      className="bg-neutral-950 text-white py-16 px-4"
    >
      <div className="max-w-2xl mx-auto">
        {/* Stack Section */}
        <div className="mb-16">
          <h2
            ref={stackHeadingRef}
            className="text-3xl md:text-4xl font-semibold mb-8 text-neutral-100"
          >
            <ShimmeringText text="Stack" />
          </h2>

          {/* Stack Icons Grid */}
          <div ref={stackGridRef} className="flex flex-wrap gap-3">
            {stackIcons.map((tech, index) => (
              <div
                key={index}
                className="stack-icon group relative w-8 h-8 flex items-center justify-center rounded-md bg-neutral-900/50 hover:bg-neutral-800/50 transition-all duration-300 cursor-pointer"
                title={tech.name}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-5 h-5 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Blog Section */}
        <div>
          <h2
            ref={blogHeadingRef}
            className="text-3xl md:text-4xl font-semibold mb-8 text-neutral-100"
          >
            <ShimmeringText text="Blog" />
          </h2>

          {/* Blog Posts Grid */}
          <div
            ref={blogGridRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          >
            {blogPosts.map((post) => (
              <a
                key={post.id}
                href={post.href}
                className="blog-card group block rounded-xl overflow-hidden bg-neutral-900/30 border border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden bg-neutral-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent z-10" />
                  <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                    <span className="text-neutral-600 text-sm">Blog Image</span>
                  </div>
                  {/* External Link Icon */}
                  <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-neutral-900/80 backdrop-blur-sm flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 text-neutral-400" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-sm font-medium text-neutral-200 mb-2 line-clamp-2 group-hover:text-white transition-colors">
                    {post.title}
                    {post.featured && (
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 ml-2 align-middle" />
                    )}
                  </h3>
                  <p className="text-xs text-neutral-500 font-mono">
                    {post.date}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* All Posts Button */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="group bg-transparent border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white hover:border-neutral-600 transition-all duration-300"
            >
              All Posts
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
