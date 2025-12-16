"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShimmeringText } from "@/components/shimmering-text";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SOCIAL_LINKS = [
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
];

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Content cards animation
      const cards = contentRef.current?.querySelectorAll(".contact-card");
      if (cards) {
        gsap.from(cards, {
          y: 80,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Form fields animation
      const formFields = formRef.current?.querySelectorAll(".form-field");
      if (formFields) {
        gsap.from(formFields, {
          x: -30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
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
      className="relative w-full py-24 px-4 md:px-8 lg:px-16 bg-background"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
            <ShimmeringText text="Get in Touch" duration={2} />
          </h2>
          <p className="text-muted-foreground font-mono text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear
            from you.
          </p>
        </div>

        <div ref={contentRef} className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email Card */}
            <div className="contact-card group p-6 rounded-2xl border border-border/50 bg-muted/20 hover:bg-muted/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Mail className="size-6" />
                </div>
                <div>
                  <h3 className="font-mono font-medium text-foreground mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@example.com"
                    className="text-muted-foreground font-mono hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    hello@example.com
                    <ArrowUpRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="contact-card group p-6 rounded-2xl border border-border/50 bg-muted/20 hover:bg-muted/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <MapPin className="size-6" />
                </div>
                <div>
                  <h3 className="font-mono font-medium text-foreground mb-1">
                    Location
                  </h3>
                  <p className="text-muted-foreground font-mono">
                    Kolkata, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-card p-6 rounded-2xl border border-border/50 bg-muted/20">
              <h3 className="font-mono font-medium text-foreground mb-4">
                Connect with me
              </h3>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-border/50 bg-background hover:bg-muted hover:border-primary/50 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="size-5 text-muted-foreground hover:text-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            className="contact-card p-8 rounded-2xl border border-border/50 bg-muted/20 space-y-6"
          >
            <div className="form-field">
              <label
                htmlFor="name"
                className="block font-mono text-sm text-muted-foreground mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background font-mono text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              />
            </div>

            <div className="form-field">
              <label
                htmlFor="email"
                className="block font-mono text-sm text-muted-foreground mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background font-mono text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              />
            </div>

            <div className="form-field">
              <label
                htmlFor="message"
                className="block font-mono text-sm text-muted-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background font-mono text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
              />
            </div>

            <Button
              type="submit"
              className="form-field w-full py-6 font-mono text-base rounded-xl flex items-center justify-center gap-2 group"
            >
              Send Message
              <Send className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
