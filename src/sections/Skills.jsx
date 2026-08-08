import React, { useState } from "react";
import { Code2, Monitor, Server, Database } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";

export default function Skills() {
  const { languages, frontend, backend, tools } = portfolioData.skills;
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "languages", label: "Languages", icon: Code2, data: languages },
    { id: "frontend", label: "Frontend", icon: Monitor, data: frontend },
    { id: "backend", label: "Backend", icon: Server, data: backend },
    { id: "tools", label: "Tools & DBs", icon: Database, data: tools }
  ];

  // Get active skill sets
  const getSkillsToDisplay = () => {
    if (activeCategory === "all") {
      return [
        { title: "Languages", data: languages, icon: Code2 },
        { title: "Frontend Development", data: frontend, icon: Monitor },
        { title: "Backend Development", data: backend, icon: Server },
        { title: "Databases & Tools", data: tools, icon: Database }
      ];
    }
    const cat = categories.find((c) => c.id === activeCategory);
    return [{ title: cat.label, data: cat.data, icon: cat.icon }];
  };

  return (
    <section id="skills" className="pt-16 pb-24 border-t border-dark-border/30 relative bg-[#0c0c0e]/30">
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-accent-500/5 glow-orb pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <SectionHeading
          title="Technical"
          highlight="Skills"
          description="My programming toolkits, libraries, and developer tools."
        />

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-2xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg border transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-accent-500 border-accent-500 text-dark-bg shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                  : "bg-dark-card/40 border-dark-border/80 text-dark-textSecondary hover:border-accent-500/30 hover:text-dark-textPrimary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className={`grid grid-cols-1 gap-6 ${
            activeCategory === "all" ? "md:grid-cols-2" : "max-w-3xl mx-auto grid-cols-1"
          }`}
        >
          {getSkillsToDisplay().map((group, idx) => {
            const Icon = group.icon;

            return (
              <motion.div
                layout
                key={idx}
                className="p-6 rounded-xl bg-dark-card/40 border border-dark-border text-left hover:border-accent-500/20 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2.5 border-b border-dark-border/40 pb-4 mb-5">
                  <div className="p-2 bg-accent-500/10 text-accent-400 rounded-lg">
                    <Icon className="w-5 h-5 text-accent-500" />
                  </div>
                  <h3 className="text-lg font-bold text-dark-textPrimary">{group.title}</h3>
                </div>

                {/* Badges Flex */}
                <div className="flex flex-wrap gap-2.5">
                  {group.data.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      whileHover={{ scale: 1.05, borderColor: "rgba(6, 182, 212, 0.3)", backgroundColor: "rgba(6, 182, 212, 0.05)" }}
                      className="px-4 py-2 bg-dark-bg/60 border border-dark-border/80 text-dark-textPrimary rounded-lg text-xs sm:text-sm font-medium font-mono flex items-center gap-2 cursor-default transition-all duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
