"use client";

import React, { useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import {
  Search,
  FileText,
  User,
  Briefcase,
  Mail,
  ArrowRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { searchItems, SearchItem } from "@/lib/search-data";

const sectionIcons: Record<string, React.ReactNode> = {
  home: <FileText className="h-4 w-4" />,
  about: <User className="h-4 w-4" />,
  work: <Briefcase className="h-4 w-4" />,
  contact: <Mail className="h-4 w-4" />,
};

const sectionColors: Record<string, string> = {
  home: "bg-blue-500/20 text-blue-400",
  about: "bg-green-500/20 text-green-400",
  work: "bg-purple-500/20 text-purple-400",
  contact: "bg-orange-500/20 text-orange-400",
};

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CommandPalette({
  open,
  onOpenChange,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Handle search
  useEffect(() => {
    const searchResults = searchItems(query);
    setResults(searchResults);
    setSelectedIndex(0);
  }, [query]);

  // Animate results
  useEffect(() => {
    if (results.length > 0) {
      gsap.fromTo(
        ".search-result-item",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.2, stagger: 0.03, ease: "power2.out" }
      );
    }
  }, [results]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < results.length - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        case "Enter":
          e.preventDefault();
          if (results[selectedIndex]) {
            navigateToResult(results[selectedIndex]);
          }
          break;
      }
    },
    [results, selectedIndex]
  );

  const navigateToResult = (item: SearchItem) => {
    onOpenChange(false);
    setQuery("");

    // Smooth scroll to section
    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Reset on close
  useEffect(() => {
    if (!open) {
      setQuery("");
      setResults([]);
      setSelectedIndex(0);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl p-0 gap-0 bg-neutral-950 border-neutral-800 overflow-hidden">
        <DialogHeader className="sr-only">
          <DialogTitle>Search Portfolio</DialogTitle>
        </DialogHeader>

        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-800">
          <Search className="h-5 w-5 text-neutral-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search anything... (e.g., Education, Skills, Projects)"
            className="flex-1 bg-transparent text-white placeholder:text-neutral-500 outline-none text-sm"
            autoFocus
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-mono text-neutral-500 bg-neutral-800 rounded">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto">
          {query && results.length === 0 && (
            <div className="px-4 py-8 text-center">
              <p className="text-neutral-500 text-sm">
                No results found for &ldquo;{query}&rdquo;
              </p>
              <p className="text-neutral-600 text-xs mt-1">
                Try searching for Education, Skills, Projects, Contact...
              </p>
            </div>
          )}

          {results.length > 0 && (
            <div className="py-2">
              {results.map((item, index) => (
                <button
                  key={item.id}
                  className={`search-result-item w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    selectedIndex === index
                      ? "bg-neutral-800/80"
                      : "hover:bg-neutral-800/50"
                  }`}
                  onClick={() => navigateToResult(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  {/* Section Icon */}
                  <div
                    className={`p-2 rounded-lg ${sectionColors[item.section]}`}
                  >
                    {sectionIcons[item.section]}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-white truncate">
                      {item.title}
                    </div>
                    <div className="text-xs text-neutral-500 truncate">
                      {item.description}
                    </div>
                  </div>

                  {/* Section Badge */}
                  <span className="text-xs text-neutral-600 capitalize">
                    {item.section}
                  </span>

                  {/* Arrow */}
                  <ArrowRight
                    className={`h-4 w-4 transition-opacity ${
                      selectedIndex === index
                        ? "text-neutral-400 opacity-100"
                        : "opacity-0"
                    }`}
                  />
                </button>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!query && (
            <div className="py-4 px-4">
              <p className="text-xs text-neutral-600 mb-3">Quick Actions</p>
              <div className="space-y-1">
                {[
                  { label: "Go to About", section: "about", href: "#about" },
                  { label: "View Projects", section: "work", href: "#work" },
                  { label: "Contact Me", section: "contact", href: "#contact" },
                ].map((action) => (
                  <button
                    key={action.label}
                    className="w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg hover:bg-neutral-800/50 transition-colors"
                    onClick={() => {
                      onOpenChange(false);
                      const element = document.querySelector(action.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <div
                      className={`p-1.5 rounded ${
                        sectionColors[action.section]
                      }`}
                    >
                      {sectionIcons[action.section]}
                    </div>
                    <span className="text-sm text-neutral-300">
                      {action.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-neutral-800 text-xs text-neutral-600">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-neutral-800 rounded">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-neutral-800 rounded">↓</kbd>
              to navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-neutral-800 rounded">↵</kbd>
              to select
            </span>
          </div>
          <span>Type to search</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
