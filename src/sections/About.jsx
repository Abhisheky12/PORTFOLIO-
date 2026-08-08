import React from "react";
import { GraduationCap, Award, Brain, Code, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  const { bio, college, degree, cgpa, graduationYear, highlights } = portfolioData.about;
  const stats = portfolioData.stats;

  // Animation config
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <section id="about" className="pt-16 pb-24 border-t border-dark-border/30 relative">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-accent-500/5 glow-orb pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          title="About"
          highlight="Myself"
          description="An academic overview and summary of my engineering statistics."
        />

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Description & Academic highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <h3 className="text-2xl font-bold text-dark-textPrimary">
              Solving problems through clean code.
            </h3>
            
            <p className="text-dark-textSecondary leading-relaxed text-base sm:text-lg">
              {bio}
            </p>

            {/* Academic Info Card */}
            <div className="p-5 rounded-xl bg-dark-card/40 border border-dark-border/80 flex items-start gap-4 shadow-md">
              <div className="p-3 bg-accent-500/10 text-accent-400 rounded-lg mt-1">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-semibold text-dark-textPrimary">{college}</h4>
                <p className="text-sm text-dark-textSecondary">{degree}</p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono font-bold mt-2">
                  <span className="px-2.5 py-1 bg-accent-500/10 text-accent-400 rounded-md border border-accent-500/10">
                    CGPA: {cgpa}
                  </span>
                  <span className="px-2.5 py-1 bg-violetAccent-500/10 text-violetAccent-400 rounded-md border border-violetAccent-500/10">
                    Class of {graduationYear}
                  </span>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-dark-textPrimary uppercase tracking-widest mb-4">Core Focus Areas:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-dark-textSecondary text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Block: 2x2 Stats Matrix Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 grid grid-cols-2 gap-4 w-full"
          >
            {stats.map((stat, idx) => {
              // Custom icons for statistics
              let Icon = Code;
              if (stat.label.includes("Codeforces")) Icon = Award;
              if (stat.label.includes("LeetCode")) Icon = Brain;
              if (stat.label.includes("SIH")) Icon = GraduationCap;

              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -6, borderColor: "rgba(6, 182, 212, 0.3)" }}
                  className="p-6 rounded-xl bg-dark-card/60 border border-dark-border/80 text-left flex flex-col justify-between shadow-xl relative overflow-hidden group transition-all duration-300"
                >
                  {/* Decorative background glow for card */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent-500/5 rounded-full blur-xl pointer-events-none group-hover:bg-accent-500/10 transition-colors" />
                  
                  <div className="p-2.5 bg-dark-bg/60 border border-dark-border/50 text-accent-400 rounded-lg w-fit mb-6">
                    <Icon className="w-5 h-5 text-accent-500" />
                  </div>
                  
                  <div>
                    <span className="text-3xl sm:text-4xl font-extrabold text-dark-textPrimary block mb-1.5 tracking-tight group-hover:text-gradient transition-all duration-300">
                      {stat.value}
                    </span>
                    <span className="text-xs font-semibold text-dark-textSecondary uppercase tracking-wider block">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
