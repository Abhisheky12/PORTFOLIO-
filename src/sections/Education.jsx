import React from "react";
import { GraduationCap, Calendar, Star } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";

export default function Education() {
  const education = portfolioData.education;

  return (
    <section id="education" className="pt-16 pb-24 border-t border-dark-border/30 relative bg-[#0c0c0e]/30 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 w-80 h-80 rounded-full bg-accent-500/5 glow-orb pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <SectionHeading
          title="Education"
          highlight="History"
          description="Academic credentials and schooling backgrounds."
        />

        {/* Education Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, borderColor: "rgba(6, 182, 212, 0.3)" }}
              className="p-6 rounded-xl bg-dark-card/50 border border-dark-border text-left relative overflow-hidden group transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Academic Icons */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 bg-accent-500/10 text-accent-400 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-accent-500" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-dark-bg/85 border border-dark-border/40 text-dark-textSecondary text-xs font-mono">
                    <Calendar className="w-3.5 h-3.5 text-accent-500" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-dark-textPrimary group-hover:text-accent-400 transition-colors mb-1">
                  {edu.institution}
                </h3>
                <p className="text-sm text-dark-textSecondary mb-4">
                  {edu.degree}
                </p>
              </div>

              {/* Academic Performance Indicators */}
              <div className="flex items-center gap-2 border-t border-dark-border/40 pt-4 mt-2">
                <Star className="w-4 h-4 text-accent-400 fill-accent-400/20" />
                <span className="text-xs font-bold font-mono text-accent-400">
                  {edu.grade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
