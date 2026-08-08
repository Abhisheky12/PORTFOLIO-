import React from "react";
import {
  ExternalLink,
  Code2,
  ShoppingCart,
  Check,
  GitBranch,
  LayoutGrid,
  FolderGit2,
  ClipboardCheck,
  CreditCard,
  Settings,
  GitCommitHorizontal,
  GitPullRequest,
  MessageSquare
} from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon } from "./icons";

// Custom Mockup for CodeOrbit (mini dashboard, based on the live app)
const CodeOrbitMockup = () => (
  <div className="w-full h-32 bg-[#0d0d11] rounded-t-lg border-b border-dark-border overflow-hidden flex text-left select-none font-mono">
    {/* ===== Mini Sidebar ===== */}
    <div className="w-[34%] shrink-0 bg-[#0b0b0f] border-r border-dark-border/60 p-1.5 flex flex-col gap-0.5">
      {/* Brand */}
      <div className="flex items-center gap-1 pb-1 mb-0.5 border-b border-dark-border/40">
        <span className="w-3 h-3 rounded bg-gradient-to-br from-accent-500 to-violetAccent-500 flex items-center justify-center text-[6px] font-bold text-white">
          &lt;/&gt;
        </span>
        <span className="text-dark-textPrimary font-bold text-[8px] leading-none">CodeOrbit</span>
      </div>

      {/* User card */}
      <div className="flex items-center gap-1 px-1 py-0.5 rounded bg-dark-card/80 border border-dark-border/60">
        <span className="w-3 h-3 rounded-full bg-violetAccent-500/20 border border-violetAccent-500/40 flex items-center justify-center shrink-0">
          <GitBranch className="w-1.5 h-1.5 text-violetAccent-300" />
        </span>
        <div className="leading-[1.15] min-w-0">
          <div className="text-[7px] font-semibold text-dark-textPrimary truncate">Abhisheky12</div>
          <div className="text-[5px] text-dark-textSecondary/80 truncate">@a.yadav7088</div>
        </div>
      </div>

      {/* Workspace menu */}
      <div className="text-[5.5px] font-bold tracking-wider text-dark-textSecondary/60 pt-0.5">WORKSPACE</div>
      <div className="flex items-center gap-1 px-1 py-[3px] rounded bg-[#1a1f35] border-l-[3px] border-accent-500 text-dark-textPrimary font-semibold text-[6.5px]">
        <LayoutGrid className="w-2 h-2 text-accent-400 shrink-0" /> Dashboard
      </div>
      <div className="flex items-center gap-1 px-1 py-[3px] rounded text-dark-textSecondary text-[6.5px]">
        <FolderGit2 className="w-2 h-2 shrink-0" /> Repository
      </div>
      <div className="flex items-center gap-1 px-1 py-[3px] rounded text-dark-textSecondary text-[6.5px]">
        <ClipboardCheck className="w-2 h-2 shrink-0" /> Reviews
      </div>
      <div className="flex items-center gap-1 px-1 py-[3px] rounded text-dark-textSecondary text-[6.5px]">
        <CreditCard className="w-2 h-2 shrink-0" /> Subscription
      </div>
      <div className="flex items-center gap-1 px-1 py-[3px] rounded text-dark-textSecondary text-[6.5px]">
        <Settings className="w-2 h-2 shrink-0" /> Settings
      </div>
    </div>

    {/* ===== Main Content ===== */}
    <div className="flex-1 min-w-0 p-1.5 flex flex-col gap-1">
      {/* Page header */}
      <div className="leading-[1.15]">
        <div className="text-[9px] font-bold text-dark-textPrimary">Dashboard</div>
        <div className="text-[5.5px] text-dark-textSecondary/80 truncate">Overview of your coding activity and AI reviews</div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-4 gap-1">
        <div className="bg-dark-card/80 border border-dark-border/60 rounded px-1 py-0.5 leading-[1.2] min-w-0">
          <div className="flex items-center justify-between gap-0.5">
            <span className="text-[5px] text-dark-textSecondary truncate">Repositories</span>
            <GitBranch className="w-2 h-2 text-accent-400 shrink-0" />
          </div>
          <div className="text-[10px] font-bold text-dark-textPrimary">27</div>
          <div className="text-[4.5px] text-dark-textSecondary/70 truncate">Connected repos</div>
        </div>
        <div className="bg-dark-card/80 border border-dark-border/60 rounded px-1 py-0.5 leading-[1.2] min-w-0">
          <div className="flex items-center justify-between gap-0.5">
            <span className="text-[5px] text-dark-textSecondary truncate">Contributions</span>
            <GitCommitHorizontal className="w-2 h-2 text-accent-400 shrink-0" />
          </div>
          <div className="text-[10px] font-bold text-dark-textPrimary">208</div>
          <div className="text-[4.5px] text-dark-textSecondary/70 truncate">Last year</div>
        </div>
        <div className="bg-dark-card/80 border border-dark-border/60 rounded px-1 py-0.5 leading-[1.2] min-w-0">
          <div className="flex items-center justify-between gap-0.5">
            <span className="text-[5px] text-dark-textSecondary truncate">Pull Requests</span>
            <GitPullRequest className="w-2 h-2 text-accent-400 shrink-0" />
          </div>
          <div className="text-[10px] font-bold text-dark-textPrimary">9</div>
          <div className="text-[4.5px] text-dark-textSecondary/70 truncate">All time</div>
        </div>
        <div className="bg-dark-card/80 border border-dark-border/60 rounded px-1 py-0.5 leading-[1.2] min-w-0">
          <div className="flex items-center justify-between gap-0.5">
            <span className="text-[5px] text-dark-textSecondary truncate">AI Reviews</span>
            <MessageSquare className="w-2 h-2 text-accent-400 shrink-0" />
          </div>
          <div className="text-[10px] font-bold text-dark-textPrimary">1</div>
          <div className="text-[4.5px] text-dark-textSecondary/70 truncate">Generated</div>
        </div>
      </div>

      {/* Contribution activity */}
      <div className="flex-1 bg-dark-card/70 border border-dark-border/60 rounded flex flex-col items-center justify-center gap-0.5 min-h-0">
        <div className="text-[6.5px] font-semibold text-dark-textPrimary">Contribution Activity</div>
        <div className="flex items-end gap-[2px] h-4">
          {[35, 55, 25, 70, 40, 80, 30, 60, 20, 50, 75, 35, 65, 25, 55, 85, 40, 70, 30, 60, 45, 75, 20, 55].map((h, i) => (
            <span key={i} className="w-[3px] rounded-sm bg-accent-500/40" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="text-[5px] text-dark-textSecondary">208 contributions in the last year</div>
      </div>
    </div>
  </div>
);

// Custom Mockup for CodeForge (problem page with editor, based on the actual app)
const CodeForgeMockup = () => (
  <div className="w-full h-32 bg-[#1c1c22] rounded-t-lg border-b border-dark-border overflow-hidden flex flex-col text-left select-none font-mono">
    {/* Left panel tabs */}
    <div className="flex items-center gap-3 px-2 py-1 bg-[#141419] border-b border-white/5 shrink-0">
      <span className="text-[6px] text-accent-400 border-b border-accent-500 pb-px font-semibold">Description</span>
      <span className="text-[6px] text-dark-textSecondary/60">Editorial</span>
      <span className="text-[6px] text-dark-textSecondary/60">Solutions</span>
      <span className="text-[6px] text-dark-textSecondary/60">Submissions</span>
      <span className="text-[6px] text-dark-textSecondary/60">ChatAI</span>
    </div>

    <div className="flex-1 flex min-h-0">
      {/* Problem description panel */}
      <div className="w-[44%] shrink-0 border-r border-white/5 p-1.5 flex flex-col gap-1 min-w-0">
        <div className="flex items-center gap-1">
          <span className="text-[8px] font-bold text-dark-textPrimary truncate">Two Sum</span>
          <span className="text-[5px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-0.5 rounded shrink-0">Easy</span>
          <span className="text-[5px] bg-accent-500/10 text-accent-400 border border-accent-500/20 px-0.5 rounded shrink-0">Arrays</span>
        </div>
        <div className="text-[5.5px] text-dark-textSecondary leading-[1.5]">
          Given an array of integers nums and a target, return indices of the two numbers that add up to target.
        </div>
        <div className="bg-[#141419] border border-white/5 rounded p-1 leading-[1.35]">
          <div className="text-[5px] text-dark-textSecondary/70 mb-0.5">Example 1:</div>
          <div className="text-[5px] text-dark-textPrimary">
            <span className="text-violetAccent-400">Input:</span> nums = [2,7,11,15], target = 9
          </div>
          <div className="text-[5px] text-dark-textPrimary">
            <span className="text-violetAccent-400">Output:</span> [0,1]
          </div>
        </div>
      </div>

      {/* Editor panel */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-1.5 py-1 border-b border-white/5 shrink-0">
          <div className="flex items-center gap-1">
            <span className="text-[5.5px] bg-accent-500/20 text-accent-300 border border-accent-500/40 px-1 py-px rounded font-semibold">JavaScript</span>
            <span className="text-[5.5px] text-dark-textSecondary/60">Java</span>
            <span className="text-[5.5px] text-dark-textSecondary/60">C++</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[5.5px] text-dark-textSecondary border border-white/10 px-1 py-px rounded">Console</span>
            <span className="text-[5.5px] text-dark-textSecondary border border-white/10 px-1 py-px rounded">▶ Run</span>
            <span className="text-[5.5px] bg-accent-500 text-dark-bg px-1 py-px rounded font-bold">Submit</span>
          </div>
        </div>

        {/* Code lines */}
        <div className="flex-1 p-1.5 text-[5.5px] leading-[1.55] min-h-0 overflow-hidden">
          <div><span className="text-dark-textSecondary/40">1</span>&nbsp; <span className="text-violetAccent-400">function</span> <span className="text-amber-500">twoSum</span>(nums, target) &#123;</div>
          <div><span className="text-dark-textSecondary/40">2</span>&nbsp;&nbsp;&nbsp;<span className="text-accent-400">const</span> map = <span className="text-violetAccent-400">new</span> Map();</div>
          <div><span className="text-dark-textSecondary/40">3</span>&nbsp;&nbsp;&nbsp;<span className="text-violetAccent-400">for</span> (<span className="text-accent-400">let</span> i = <span className="text-amber-500">0</span>; i &lt; nums.length; i++) &#123;</div>
          <div><span className="text-dark-textSecondary/40">4</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-violetAccent-400">const</span> diff = target - nums[i];</div>
          <div><span className="text-dark-textSecondary/40">5</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-violetAccent-400">if</span> (map.has(diff)) <span className="text-violetAccent-400">return</span> [map.get(diff), i];</div>
          <div><span className="text-dark-textSecondary/40">6</span>&nbsp;&nbsp;&nbsp;&#125;</div>
        </div>

        {/* Console result */}
        <div className="shrink-0 mx-1.5 mb-1 px-1.5 py-0.5 rounded bg-[#141419] border border-emerald-500/25 text-[5px] text-emerald-400 flex items-center gap-1">
          <Check className="w-2 h-2 text-emerald-400 shrink-0" />
          <span>All test cases passed · Runtime: 0.01s</span>
        </div>
      </div>
    </div>
  </div>
);

// Custom Mockup for ShopEasy (mini storefront, based on the live site)
const ShopEasyMockup = () => {
  const products = [
    { icon: "🍇", name: "Grapes" },
    { icon: "👜", name: "Bag" },
    { icon: "👖", name: "Pant" },
    { icon: "👟", name: "Shoes" }
  ];

  return (
    <div className="w-full h-32 bg-[#0d0d11] rounded-t-lg border-b border-dark-border p-1.5 flex flex-col gap-1 text-left select-none font-mono">
      {/* Storefront navbar */}
      <div className="flex items-center justify-between px-1.5 py-1 bg-[#111118] border border-dark-border/60 rounded">
        <span className="flex items-center gap-1 text-[8px] font-bold text-dark-textPrimary">
          <ShoppingCart className="w-2.5 h-2.5 text-accent-500" /> ShopEasy
        </span>
        <div className="flex items-center gap-1.5 text-[5.5px] text-dark-textSecondary">
          <span className="text-dark-textPrimary font-semibold">Home</span>
          <span>Products</span>
          <span>About Us</span>
          <span>Contact Us</span>
        </div>
      </div>

      {/* Trending banner */}
      <div className="rounded bg-gradient-to-r from-accent-500/25 via-violetAccent-500/20 to-accent-500/25 border border-accent-500/20 px-2 py-1 flex items-center justify-between">
        <div className="leading-[1.15]">
          <div className="text-[8px] font-bold text-dark-textPrimary">Trending Now</div>
          <div className="text-[5.5px] text-dark-textSecondary">Fresh deals &amp; new arrivals</div>
        </div>
        <span className="text-[6px] bg-accent-500/20 text-accent-300 border border-accent-500/30 px-1 py-0.5 rounded">Shop Now</span>
      </div>

      {/* Product grid */}
      <div className="flex-1 grid grid-cols-4 gap-1 min-h-0">
        {products.map((p, i) => (
          <div key={i} className="bg-dark-card/80 border border-dark-border/60 rounded flex flex-col items-center justify-between py-1 min-w-0">
            <span className="text-[13px] leading-none">{p.icon}</span>
            <span className="text-[5.5px] text-dark-textPrimary font-semibold truncate">{p.name}</span>
            <span className="text-[4.5px] bg-accent-500/15 text-accent-300 px-0.5 py-px rounded w-full text-center truncate">
              Add To Cart
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Custom Mockup for Akshargyan NGO website (hero + welcome, based on the live site)
const AkshargyanMockup = () => (
  <div className="w-full h-32 bg-[#fafafa] rounded-t-lg border-b border-dark-border overflow-hidden flex flex-col text-left select-none font-mono">
    {/* Navbar */}
    <div className="bg-[#163c45] px-2 py-1 flex items-center justify-between shrink-0">
      <span className="text-[8px] font-bold text-white">Akshargyan</span>
      <div className="flex items-center gap-1.5 text-[5.5px] text-teal-50/90">
        <span className="font-semibold text-white">Home</span>
        <span>About Us</span>
        <span>Events</span>
        <span>Alumni</span>
        <span>Gallery</span>
        <span className="bg-amber-400 text-[#163c45] px-1 py-px rounded font-bold">Contact</span>
      </div>
    </div>

    {/* Hero banner */}
    <div className="relative bg-gradient-to-br from-[#0f2a30] via-[#163c45] to-[#1d4f5a] px-2 py-2 shrink-0">
      <span className="absolute -top-0.5 right-1.5 text-[13px] leading-none opacity-90">🌞</span>
      <div className="leading-[1.25]">
        <div className="text-[10px] font-bold text-white">Building a Brighter Tomorrow</div>
        <div className="text-[5.5px] text-teal-100/80 mt-0.5">
          Together, we can create a world where no child is left behind.
        </div>
        <span className="inline-block mt-1 text-[5.5px] bg-amber-400 text-[#163c45] px-1 py-px rounded font-bold">
          Learn More →
        </span>
      </div>
    </div>

    {/* Welcome section */}
    <div className="flex-1 flex items-center gap-2 px-2 py-1 min-h-0 bg-[#f7f4ea]">
      <div className="flex-1 leading-[1.4] min-w-0">
        <div className="text-[7px] font-bold text-[#163c45]">Welcome to Akshargyan</div>
        <div className="text-[5px] text-[#5a7a7f] mt-0.5">
          Education is the most powerful tool for change, yet many children are left out...
        </div>
      </div>
      <div className="w-10 h-8 rounded bg-gradient-to-br from-amber-300 to-orange-400 flex items-center justify-center text-[13px] shrink-0">
        📚
      </div>
    </div>
  </div>
);

export default function ProjectCard({ project }) {
  const { id, name, description, tech, features, github, live } = project;

  // Select the appropriate mockup component
  const renderMockup = () => {
    switch (id) {
      case "codeorbit":
        return <CodeOrbitMockup />;
      case "codeforge":
        return <CodeForgeMockup />;
      case "shopeasy":
        return <ShopEasyMockup />;
      case "akshargyan":
        return <AkshargyanMockup />;
      default:
        return (
          <div className="w-full h-32 bg-[#0d0d11] rounded-t-lg border-b border-dark-border p-3 flex items-center justify-center">
            <Code2 className="w-8 h-8 text-accent-500/30" />
          </div>
        );
    }
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      }}
      className="rounded-xl overflow-hidden bg-dark-card/50 border border-dark-border hover:border-accent-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.06)] flex flex-col justify-between h-full transition-all duration-300 group"
    >
      <div>
        {/* Project Interactive Mockup Area */}
        {renderMockup()}

        {/* Info Content Area */}
        <div className="p-4 text-left">
          <h3 className="text-lg font-bold text-dark-textPrimary group-hover:text-accent-400 transition-colors mb-1">
            {name}
          </h3>
          <p className="text-sm text-dark-textSecondary leading-relaxed mb-2.5">
            {description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {tech.map((badge, idx) => (
              <span
                key={idx}
                className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-dark-bg border border-dark-border text-dark-textSecondary"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Core Highlights / Key Features */}
          <div className="border-t border-dark-border/40 pt-2.5">
            <h4 className="text-[11px] font-semibold text-dark-textPrimary uppercase tracking-wider mb-1.5">Key Highlights:</h4>
            <ul className="space-y-0.5">
              {features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-dark-textSecondary leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500/60 mt-1.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Link Buttons */}
      <div className="px-4 pb-4 pt-1 flex items-center gap-3">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => github === "#" && e.preventDefault()}
          className={`flex-1 flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all duration-300 ${
            github === "#"
              ? "bg-dark-bg/40 border border-dark-border/50 text-dark-textSecondary/50 cursor-not-allowed"
              : "border border-dark-border hover:border-accent-500/40 bg-dark-bg/60 hover:bg-accent-500/5 text-dark-textPrimary"
          }`}
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>Repository</span>
        </a>
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all duration-300 ${
            live === "#" 
              ? "bg-dark-bg/40 border border-dark-border/50 text-dark-textSecondary/50 cursor-not-allowed"
              : "bg-accent-500 hover:bg-accent-600 text-dark-bg shadow-md hover:shadow-accent-500/20"
          }`}
          onClick={(e) => live === "#" && e.preventDefault()}
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Live Demo</span>
        </a>
      </div>
    </motion.div>
  );
}
