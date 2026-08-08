import React from "react";
import { ArrowRight, Eye, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeforcesIcon } from "../components/icons";
import { scrollToSection } from "../utils/scroll";

// Code rendered on the laptop screen
const screenCode = [
  { text: "const developer = {", color: "text-violetAccent-300" },
  { text: "  passion: 'Code',", color: "text-accent-400" },
  { text: "  focus: 'Growth',", color: "text-accent-400" },
  { text: "  mindset: 'Never Stop Learning',", color: "text-accent-400" },
  { text: "};", color: "text-violetAccent-300" },
  { text: "", color: "" },
  { text: "while (building) {", color: "text-violetAccent-300" },
  { text: "  createImpact();", color: "text-emerald-400" },
  { text: "}", color: "text-violetAccent-300" }
];

export default function Hero() {
  const { name, title, github, linkedin, leetcode, codeforces, resumeUrl } = portfolioData.personalInfo;

  const socials = [
    { href: github, icon: GithubIcon, label: "GitHub" },
    { href: linkedin, icon: LinkedinIcon, label: "LinkedIn" },
    { href: leetcode, icon: LeetCodeIcon, label: "LeetCode" },
    { href: codeforces, icon: CodeforcesIcon, label: "Codeforces" }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-14 overflow-hidden grid-background"
    >
      {/* Background Radial Mask */}
      <div className="absolute inset-0 radial-mask pointer-events-none" />

      {/* Futuristic Glowing Ambient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-accent-500/10 glow-orb animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-violetAccent-500/10 glow-orb animate-pulse-slow pointer-events-none" style={{ animationDelay: "-3s" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-center">
          {/* ============ Left: Intro Copy ============ */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-card/40 border border-accent-500/25 text-dark-textPrimary text-xs font-semibold uppercase tracking-wider mb-6 w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Open to Internships &amp; Full-Time Roles</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-3"
            >
              Hi, I'm <span className="text-gradient font-black">{name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-textPrimary mb-6 leading-tight"
            >
              {(() => {
                const [primary, secondary] = title.split(" & ");
                return (
                  <>
                    <span className="text-accent-400">{primary}</span>
                    {secondary ? ` & ${secondary}` : ""}
                  </>
                );
              })()}
            </motion.h2>

            {/* Intro Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-dark-textSecondary mb-9 max-w-xl leading-relaxed"
            >
              I'm a <span className="text-dark-textPrimary font-semibold">Full-Stack Developer</span> focused on building{" "}
              <span className="text-dark-textPrimary font-semibold">scalable web applications</span>, with a strong interest in{" "}
              <span className="text-dark-textPrimary font-semibold">Competitive Programming</span> and{" "}
              <span className="text-dark-textPrimary font-semibold">problem solving</span>. I'm also exploring{" "}
              <span className="text-dark-textPrimary font-semibold text-glow">Generative AI</span> to learn how to build{" "}
              <span className="text-dark-textPrimary font-semibold">intelligent applications</span> using modern AI technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="group flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-accent-500 to-violetAccent-500 hover:from-accent-400 hover:to-violetAccent-400 text-white text-sm font-bold rounded-lg transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_40px_rgba(139,92,246,0.45)] active:scale-[0.98]"
              >
                <Rocket className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 border border-white/15 hover:border-accent-500/50 bg-dark-card/40 hover:bg-accent-500/5 text-dark-textPrimary text-sm font-bold rounded-lg transition-all duration-300 active:scale-[0.98]"
              >
                <Eye className="w-4 h-4 text-accent-400" />
                <span>View Resume</span>
              </a>
            </motion.div>
          </div>

          {/* ============ Right: Desk Scene Illustration (laptop view only) ============ */}
          <div className="hidden lg:block lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[480px] mx-auto"
              aria-hidden="true"
            >
              {/* Ambient glow behind the scene */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-accent-500/10 via-transparent to-violetAccent-500/10 blur-2xl pointer-events-none" />

              <div className="relative h-[380px] sm:h-[440px]">
                {/* --- Glowing light tube (right, behind laptop) --- */}
                <div className="absolute right-2 sm:right-8 top-3 bottom-[40%] w-3 sm:w-3.5 z-0">
                  <div className="relative h-full w-full rounded-full bg-gradient-to-b from-accent-400 via-accent-500 to-violetAccent-500 shadow-[0_0_20px_rgba(34,211,238,0.6),0_0_55px_rgba(139,92,246,0.4)] animate-pulse-slow" />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 rounded-full bg-[#1c1c24] border border-white/5" />
                </div>

                {/* --- Succulent plant (left, behind laptop) --- */}
                <div className="absolute left-0 sm:left-4 top-1 z-10 animate-float">
                  <div className="flex flex-col items-center">
                    <div className="relative w-14 h-16">
                      <span className="absolute bottom-1 left-1/2 w-10 h-14 origin-bottom rounded-full bg-gradient-to-b from-emerald-500/90 to-emerald-800/70 -translate-x-[18px] rotate-[-28deg]" />
                      <span className="absolute bottom-1 left-1/2 w-10 h-14 origin-bottom rounded-full bg-gradient-to-b from-emerald-400/90 to-emerald-700/70 translate-x-[6px] rotate-[28deg]" />
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-12 rounded-full bg-gradient-to-b from-green-300/90 to-emerald-600/70" />
                    </div>
                    <div className="w-12 h-8 -mt-1 rounded-b-lg bg-gradient-to-b from-[#45454f] to-[#1a1a20] border border-white/5">
                      <div className="w-full h-1.5 rounded-t-sm bg-[#2b2b33]" />
                    </div>
                  </div>
                </div>

                {/* --- Laptop (center) --- */}
                <div className="absolute left-1/2 -translate-x-1/2 top-14 sm:top-16 w-[80%] max-w-[370px] z-20">
                  <div className="relative rounded-t-lg overflow-hidden border border-dark-border bg-[#0f0f14] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
                    {/* Screen content */}
                    <div className="relative">
                      {/* Mountain wallpaper */}
                      <svg
                        className="absolute inset-x-0 bottom-0 h-[55%] w-full opacity-70"
                        viewBox="0 0 400 160"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <defs>
                          <linearGradient id="mountainWall" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#312e81" />
                            <stop offset="100%" stopColor="#0e7490" />
                          </linearGradient>
                        </defs>
                        <circle cx="315" cy="42" r="16" fill="#22d3ee" opacity="0.55" />
                        <path d="M0 160 L0 118 L70 66 L132 112 L192 44 L262 116 L330 74 L400 124 L400 160 Z" fill="url(#mountainWall)" />
                      </svg>

                      {/* Window dots */}
                      <div className="relative flex items-center gap-1.5 px-3 py-2 bg-[#16161d] border-b border-dark-border">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        <span className="ml-2 h-3.5 flex-1 max-w-[70%] rounded-md bg-dark-card/70" />
                      </div>

                      {/* Code */}
                      <div className="relative z-10 px-4 pt-3 pb-4 font-mono text-[10px] sm:text-[11px] leading-[1.7] text-left select-none">
                        {screenCode.map((line, idx) =>
                          line.text === "" ? (
                            <div key={idx} className="h-2" />
                          ) : (
                            <div key={idx} className={`${line.color} whitespace-pre`}>
                              {line.text}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Laptop base / keyboard deck */}
                  <div className="relative -mx-3 sm:-mx-5 h-3.5 rounded-b-xl bg-gradient-to-b from-[#2a2a33] to-[#141419] border-x border-b border-dark-border shadow-lg">
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-0.5 rounded-full bg-black/60" />
                  </div>
                </div>

                {/* --- Open notebook with sketches (front-left) --- */}
                <div className="absolute left-0 bottom-5 w-32 sm:w-40 z-30 -rotate-6">
                  <div className="relative h-20 sm:h-24 rounded-md bg-gradient-to-b from-[#1f1f27] to-[#17171c] border border-dark-border p-3 shadow-[0_15px_35px_-12px_rgba(0,0,0,0.7)]">
                    {/* Center crease */}
                    <span className="absolute left-1/2 top-0 bottom-0 w-px bg-dark-border" />
                    {/* Wireframe sketch */}
                    <div className="absolute left-2.5 top-3 w-10 h-8 rounded-sm border border-accent-500/40" />
                    <div className="absolute left-4 top-4 w-6 h-5 rounded-sm border border-violetAccent-500/40" />
                    <div className="absolute left-2.5 bottom-3 w-12 h-1 rounded-full bg-dark-border" />
                    <div className="absolute left-2.5 bottom-5 w-8 h-1 rounded-full bg-dark-border/60" />
                    <div className="absolute right-3 top-3 w-9 h-1.5 rounded-full bg-dark-border" />
                    <div className="absolute right-3 top-6 w-7 h-1.5 rounded-full bg-dark-border/70" />
                    <div className="absolute right-3 bottom-3 w-9 h-1.5 rounded-full bg-accent-500/30" />
                    {/* Pen */}
                    <span className="absolute -top-1 right-1 w-24 h-1.5 -rotate-[28deg] rounded-full bg-gradient-to-r from-accent-500 to-violetAccent-500 shadow-[0_0_10px_rgba(6,182,212,0.4)]" />
                  </div>
                </div>

                {/* --- Coffee mug with </> (front-right) --- */}
                <div className="absolute right-0 sm:right-6 bottom-2 w-16 sm:w-20 z-30 animate-float" style={{ animationDelay: "-2s" }}>
                  <div className="relative">
                    <div className="relative h-14 sm:h-16 w-full rounded-b-xl rounded-t-md bg-gradient-to-b from-[#2b2b33] to-[#101014] border border-white/10 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.8)]">
                      <span className="absolute inset-0 flex items-center justify-center font-mono text-accent-400 text-sm sm:text-base font-bold">
                        &lt;/&gt;
                      </span>
                    </div>
                    {/* Handle */}
                    <span className="absolute -left-3 top-2.5 w-3.5 h-6 rounded-l-full border-2 border-[#2b2b33]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ============ Bottom: Connect With Me (stats boxes removed) ============ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-14"
        >
          <div className="border-t border-dark-border/40 pt-7 flex flex-wrap items-center justify-center lg:justify-between gap-x-10 gap-y-5">
            <span className="text-xs font-semibold text-dark-textSecondary uppercase tracking-[0.25em]">
              Connect With Me
            </span>
            <div className="flex items-center gap-4">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-dark-border bg-dark-card/40 flex items-center justify-center text-dark-textSecondary hover:text-accent-400 hover:border-accent-500/40 hover:-translate-y-1 transition-all duration-300"
                  title={label}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
