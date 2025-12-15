"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import {
  Code2,
  Lightbulb,
  MapPin,
  Phone,
  Globe,
  Clock,
  Mail,
  User,
  Github,
  Linkedin,
  Youtube,
  ExternalLink,
} from "lucide-react";
import { AppleHelloEnglishEffect } from "@/components/apple-hello-effect";

// Social links data
const socialLinks = [
  {
    name: "X (formerly Twitter)",
    username: "@souvikkarfa",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: "https://twitter.com",
    bgColor: "bg-neutral-900",
  },
  {
    name: "GitHub",
    username: "@souvikkarfa",
    icon: <Github className="h-5 w-5" />,
    href: "https://github.com",
    bgColor: "bg-neutral-800",
  },
  {
    name: "LinkedIn",
    username: "souvikkarfa",
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://linkedin.com",
    bgColor: "bg-blue-600",
  },
  {
    name: "daily.dev",
    username: "@souvikkarfa",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    href: "https://daily.dev",
    bgColor: "bg-purple-600",
  },
  {
    name: "Portfolio",
    username: "souvikkarfa.dev",
    icon: <Globe className="h-5 w-5" />,
    href: "#",
    bgColor: "bg-green-600",
  },
  {
    name: "YouTube",
    username: "@souvikkarfa",
    icon: <Youtube className="h-5 w-5" />,
    href: "https://youtube.com",
    bgColor: "bg-red-600",
  },
];

// Info items data
const infoItems = [
  {
    icon: <Code2 className="h-4 w-4" />,
    text: "Senior Frontend Developer & UI Design Lead @Company",
  },
  {
    icon: <Lightbulb className="h-4 w-4" />,
    text: "Founder @StartupName",
  },
  {
    icon: <MapPin className="h-4 w-4" />,
    text: "Kolkata, West Bengal, India",
  },
  {
    icon: <Phone className="h-4 w-4" />,
    text: "+91 XXX XXX XXXX",
  },
  {
    icon: <Globe className="h-4 w-4" />,
    text: "souvikkarfa.dev",
  },
];

const infoItemsRight = [
  {
    icon: <Clock className="h-4 w-4" />,
    text: "IST // +5:30 GMT",
  },
  {
    icon: <Mail className="h-4 w-4" />,
    text: "hello@souvikkarfa.dev",
  },
  {
    icon: <User className="h-4 w-4" />,
    text: "he/him",
  },
];

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo animation
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      // Profile section animation
      gsap.fromTo(
        profileRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out" }
      );

      // Info section animation
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: "power3.out" }
      );

      // Social links stagger animation
      gsap.fromTo(
        ".social-link",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.6,
          ease: "power2.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen bg-neutral-950 text-white py-20 px-4"
    >
      <div className="max-w-2xl mx-auto">
        {/* Logo */}
        <div ref={logoRef} className="flex justify-center mb-16">
          <div className="text-4xl font-bold tracking-tight">
            <span className="inline-block border-none px-3 py-1">
              <AppleHelloEnglishEffect />
            </span>
          </div>
        </div>

        {/* Profile Section */}
        <div
          ref={profileRef}
          className="flex items-center gap-6 mb-8 p-4 rounded-xl"
        >
          {/* Avatar with Flag */}
          <div className="relative">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-neutral-700">
              <Image
                src="/avatar.png"
                alt="Profile Avatar"
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Indian Flag */}
            <div className="absolute -top-1 -left-1 w-6 h-4 rounded-sm overflow-hidden shadow-lg">
              <div className="h-1/3 bg-orange-500" />
              <div className="h-1/3 bg-white" />
              <div className="h-1/3 bg-green-600" />
            </div>
          </div>

          {/* Name and Title */}
          <div className="flex-1">
            <p className="text-xs text-neutral-500 mb-1 font-mono">
              port.sk.dev.com // full_stack
            </p>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl md:text-3xl font-bold">Souvik Karfa</h1>
              <svg
                className="w-5 h-5 text-blue-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-neutral-500">🔊</span>
            </div>
            <p className="text-sm text-neutral-400">Open Source Contributor</p>
          </div>
        </div>

        {/* Info Section */}
        <div
          ref={infoRef}
          className="border-t border-b border-neutral-800 py-6 mb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="space-y-3">
              {infoItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-sm text-neutral-400"
                >
                  <span className="text-neutral-500">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-3">
              {infoItemsRight.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-sm text-neutral-400"
                >
                  <span className="text-neutral-500">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div ref={socialRef} className="space-y-1">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link flex items-center justify-between p-4 rounded-lg hover:bg-neutral-900/50 transition-colors group border-b border-neutral-800/50 last:border-b-0"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-lg ${link.bgColor} flex items-center justify-center`}
                >
                  {link.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{link.name}</p>
                  <p className="text-xs text-neutral-500">{link.username}</p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-neutral-600 group-hover:text-neutral-400 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
