import React from "react";
import { ArrowUp, Code2 } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "../components/icons";

export default function Footer() {
  const { name, title, github, linkedin } = portfolioData.personalInfo;

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="border-t border-dark-border/30 bg-[#070709] py-12 relative overflow-hidden">
      {/* Decorative linear gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-left">
        {/* Logo/Branding Block */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-accent-500" />
            <span className="font-bold text-base text-dark-textPrimary">{name}</span>
          </div>
          <p className="text-xs text-dark-textSecondary font-medium">
            {title}
          </p>
        </div>

        {/* Social Icons & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
          <div className="flex gap-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-textSecondary hover:text-accent-400 hover:-translate-y-0.5 transition-all duration-300"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-textSecondary hover:text-accent-400 hover:-translate-y-0.5 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
          <p className="text-[11px] text-dark-textSecondary/50 font-mono">
            © {new Date().getFullYear()} Abhishek Yadav. All rights reserved.
          </p>
        </div>
      </div>

      {/* Floating Scroll To Top button */}
      <button
        onClick={handleScrollToTop}
        className="absolute bottom-6 right-6 p-2.5 bg-dark-card border border-dark-border hover:border-accent-500/40 text-dark-textSecondary hover:text-accent-400 hover:-translate-y-1 rounded-lg shadow-md transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
}
