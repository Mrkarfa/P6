"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Search, Github, Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import CommandPalette from "@/components/CommandPalette";
import { GitHubStars } from "@/components/github-stars";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

interface NavLinkProps {
  name: string;
  href: string;
}

const NavLink = ({ name, href }: NavLinkProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const topTextRef = useRef<HTMLSpanElement>(null);
  const bottomTextRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = () => {
    if (!topTextRef.current || !bottomTextRef.current) return;

    gsap.to(topTextRef.current, {
      y: "-100%",
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(bottomTextRef.current, {
      y: "-100%",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!topTextRef.current || !bottomTextRef.current) return;

    gsap.to(topTextRef.current, {
      y: "0%",
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(bottomTextRef.current, {
      y: "0%",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <a
      ref={linkRef}
      href={href}
      className="relative overflow-hidden h-5 inline-flex items-center text-sm text-foreground transition-colors"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span ref={topTextRef} className="block">
        {name}
      </span>
      <span ref={bottomTextRef} className="absolute top-full left-0 text-foreground">
        {name}
      </span>
    </a>
  );
};

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial animation for navbar
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }
  }, []);

  useEffect(() => {
    // Mobile menu animation
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        );
      }
    }
  }, [isMobileMenuOpen]);

  // Keyboard shortcut for search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Play click sound using Web Audio API
  const playClickSound = () => {
    const audioContext = new (window.AudioContext ||
      (window as typeof window & { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = "sine";

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + 0.1
    );

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  const toggleTheme = () => {
    playClickSound();
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md"
      >
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Left Side - Navigation Links (Desktop) */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <NavLink key={link.name} name={link.name} href={link.href} />
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Search Box */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm text-neutral-500 bg-background border border-background rounded-lg hover:border-foreground transition-colors"
              >
                <Search className="h-4 w-4" />
                <span className="hidden lg:inline">Search...</span>
                <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 text-xs font-mono text-neutral-500 bg-background rounded">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </button>

              {/* GitHub */}

              <GitHubStars repo="ncdai/chanhdai.com" stargazersCount={1050} />

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-foreground hover:text-foreground hover:bg-background"
              >
                {isDarkMode ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              ref={mobileMenuRef}
              className="md:hidden py-4 border-t border-background"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                {/* Mobile Search */}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsSearchOpen(true);
                  }}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-foreground bg-background border border-background rounded-lg"
                >
                  <Search className="h-4 w-4" />
                  <span>Search...</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Command Palette */}
      <CommandPalette open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </>
  );
};

export default Navbar;
