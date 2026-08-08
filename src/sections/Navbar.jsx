import React, { useState, useEffect } from "react";
import { Menu, X, FileText, Code2, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "../components/icons";
import { scrollToSection } from "../utils/scroll";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { name, github, linkedin, resumeUrl } = portfolioData.personalInfo;


  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy to highlight active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Focus on the middle section of the viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-dark-bg/80 backdrop-blur-md border-b border-dark-border/50 py-4 shadow-lg shadow-black/10"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo / Brand Name */}
          <div
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <Code2 className="w-6 h-6 text-accent-500 transition-transform duration-300 group-hover:rotate-12" />
            <span className="font-sans font-bold text-lg text-dark-textPrimary tracking-tight">
              {name}
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-dark-textPrimary ${
                  activeSection === item.id ? "text-accent-400" : "text-dark-textSecondary"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* External Links & Resume */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-textSecondary hover:text-accent-400 transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-textSecondary hover:text-accent-400 transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-textSecondary hover:text-accent-400 transition-colors duration-300"
              aria-label="View Resume"
              title="View Resume"
            >
              <Eye className="w-5 h-5" />
            </a>
            <a
              href={resumeUrl}
              download
              className="flex items-center gap-2 px-4 py-2 border border-accent-500/30 hover:border-accent-500 hover:bg-accent-500/10 text-accent-400 text-sm font-semibold rounded-lg transition-all duration-300"
              aria-label="Download Resume"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Hamburguer Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-dark-textPrimary focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-dark-bg/95 backdrop-blur-lg z-40 border-t border-dark-border/50 lg:hidden flex flex-col p-8 justify-between"
          >
            <div className="flex flex-col gap-5 mt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-2xl font-bold transition-colors py-2 ${
                    activeSection === item.id ? "text-accent-400" : "text-dark-textPrimary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Footer Area inside Navigation */}
            <div className="flex flex-col gap-6 mb-12">
              <div className="h-px bg-dark-border/50 w-full" />
              <div className="flex items-center justify-between">
                <div className="flex gap-6">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-textSecondary hover:text-accent-400 transition-colors"
                  >
                    <GithubIcon className="w-6 h-6" />
                  </a>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-textSecondary hover:text-accent-400 transition-colors"
                  >
                    <LinkedinIcon className="w-6 h-6" />
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 border border-accent-500/40 hover:border-accent-500 text-accent-400 text-sm font-bold rounded-lg transition-colors duration-300"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </a>
                  <a
                    href={resumeUrl}
                    download
                    className="flex items-center gap-2 px-5 py-2.5 bg-accent-500 hover:bg-accent-600 text-dark-bg text-sm font-bold rounded-lg transition-colors duration-300"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
