import React from "react";
import { Briefcase, CheckSquare } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";

export default function Experience() {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="pt-16 pb-24 border-t border-dark-border/30 relative bg-[#0c0c0e]/30">
      {/* Background glow orb */}
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-violetAccent-500/5 glow-orb pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <SectionHeading
          title="Work"
          highlight="Experience"
          description="A history of my professional engineering work and internships."
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500/80 via-violetAccent-500/50 to-dark-border/30 transform -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-stretch relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-8 h-8 rounded-full bg-dark-bg border-2 border-accent-500 flex items-center justify-center transform -translate-x-1/2 z-20 shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                    <Briefcase className="w-3.5 h-3.5 text-accent-400" />
                  </div>

                  {/* Left spacing for empty side of timeline */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card Content Side */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40, y: 15 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8"
                  >
                    <div className="p-6 rounded-xl bg-dark-card/50 border border-dark-border hover:border-accent-500/20 hover:shadow-[0_0_25px_rgba(6,182,212,0.05)] transition-all duration-300 relative group">
                      
                      {/* Accent highlight bar inside card */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500/30 to-violetAccent-500/20 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Header details */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-dark-textPrimary group-hover:text-accent-400 transition-colors">
                          {exp.role}
                        </h3>
                        <span className="text-sm font-semibold text-violetAccent-400">
                          {exp.company}
                        </span>
                      </div>

                      {/* Description Bullet points */}
                      <ul className="space-y-3 text-left">
                        {exp.description.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-sm text-dark-textSecondary leading-relaxed">
                            <CheckSquare className="w-4 h-4 text-accent-500/70 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
