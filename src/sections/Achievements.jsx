import React from "react";
import { Trophy, BrainCircuit, Code, Milestone } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";

export default function Achievements() {
  const achievements = portfolioData.achievements;

  // Staggered list configs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="achievements" className="pt-16 pb-24 border-t border-dark-border/30 relative bg-[#0a0a0c]">
      <div className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full bg-violetAccent-500/5 glow-orb pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <SectionHeading
          title="Key"
          highlight="Achievements"
          description="Competitive programming stats and hackathon milestones."
        />

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((ach, idx) => {
            // Select appropriate icon
            let Icon = Trophy;
            if (ach.title.includes("LeetCode")) Icon = BrainCircuit;
            if (ach.title.includes("DSA")) Icon = Code;
            if (ach.title.includes("Codeforces")) Icon = Milestone;

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6, borderColor: "rgba(139, 92, 246, 0.3)" }}
                className="p-6 rounded-xl bg-dark-card/40 border border-dark-border hover:border-violetAccent-500/20 text-left flex flex-col justify-between h-full hover:shadow-[0_0_25px_rgba(139,92,246,0.05)] transition-all duration-300 relative overflow-hidden group"
              >
                {/* Visual card header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="p-2.5 bg-dark-bg/60 border border-dark-border/40 text-violetAccent-400 rounded-lg group-hover:text-accent-400 transition-colors">
                    <Icon className="w-5 h-5 text-violetAccent-500 group-hover:text-accent-500" />
                  </div>
                  <span className="text-[10px] font-mono text-dark-textSecondary/50 font-bold">MIL-0{idx+1}</span>
                </div>

                {/* Info and giant numbers */}
                <div>
                  <span className="text-4xl font-extrabold text-dark-textPrimary block mb-2 tracking-tight text-gradient-purple">
                    {ach.metric}
                  </span>
                  <h3 className="text-base font-bold text-dark-textPrimary mb-2 leading-tight">
                    {ach.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-dark-textSecondary leading-relaxed">
                    {ach.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
