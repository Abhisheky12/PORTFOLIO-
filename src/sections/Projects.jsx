import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";

export default function Projects() {
  const projects = portfolioData.projects;

  // Staggered list configs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section id="projects" className="pt-16 pb-24 border-t border-dark-border/30 relative bg-[#0a0a0c]">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-accent-500/5 glow-orb pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-violetAccent-500/5 glow-orb pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <SectionHeading
          title="Featured"
          highlight="Projects"
          description="High-quality applications demonstrating full-stack engineering, databases, and AI algorithms."
        />

        {/* Project Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
