export const portfolioData = {
  personalInfo: {
    name: "Abhishek Yadav",
    title: "Full Stack Developer & Software Engineer",
    subtitle: "I build scalable full-stack applications and enjoy solving challenging programming problems.",
    email: "a.yadav7088@gmail.com",
    resumeUrl: "/resume.pdf",
    github: "https://github.com/Abhisheky12",
    linkedin: "https://www.linkedin.com/in/abhishek-yadav-16729b184/",
    leetcode: "https://leetcode.com/u/Abhishekyadav_cse/",
    codeforces: "https://codeforces.com/profile/become_pro",
  },
  contactForm: {
    service: "web3forms",
    endpoint: "https://api.web3forms.com/submit",
    accessKey: "b315c7cc-07a7-4cb2-87e3-f0d3af28d848",
  },
  stats: [
    { label: "DSA Problems Solved Across Leetcode", value: "800+" },
    { label: "Codeforces Problem Solved", value: "190+" },
    { label: "LeetCode Rating", value: "1700+" },
    { label: "SIH Internal Round", value: "Top 10" }
  ],
  about: {
    bio: "I am a B.Tech Computer Science Engineering student at JSS Academy of Technical Education, graduating in 2027. I have a strong foundation in data structures, algorithms, and full-stack software development. I am passionate about building responsive, high-performance web applications and solving complex architectural and algorithmic problems.",
    college: "JSS Academy of Technical Education",
    degree: "B.Tech in Computer Science Engineering",
    cgpa: "8.31",
    graduationYear: "2027",
    highlights: [
      "Full-stack development",
      "React.js & Next.js",
      "Node.js & Express.js",
      "MongoDB & PostgreSQL",
      "Problem solving",
      "Competitive programming"
    ]
  },
  experience: [
    {
      role: "Web Dev Team Lead & Volunteer",
      company: "Akshargyan NGO",
      description: [
        "Lead a team of developers in building and launching the society's official responsive website.",
        "Conducted educational coding and technical literacy sessions for children.",
        "Supported event planning, organization, and digital outreach activities."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "CodexIntern",
      duration: "Jun 2024 - Aug 2024",
      description: [
        "Developed a highly responsive frontend web application increasing user retention.",
        "Optimized cross-device compatibility and page load performance across desktop, tablet, and mobile platforms.",
        "Built modular, reusable React.js UI components using modern best practices."
      ]
    },
    {
      role: "Freelance Full Stack Developer",
      company: "Freelance Client Work",
      duration: "Dec 2024 - Present",
      description: [
        "Developed and deployed a full-stack MERN application for a real-world client.",
        "Built separate client and admin dashboards for streamlined data visualisations and analytics.",
        "Created scalable RESTful APIs using Node.js, Express.js, and MongoDB.",
        "Implemented secure JWT authentication and granular role-based access control (RBAC)."
      ]
    }
  ],
  projects: [
    {
      id: "codeorbit",
      name: "CodeOrbit",
      description: "An AI-powered developer review and workflow automation platform that hooks directly into GitHub to streamline code reviews.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Inngest", "Pinecone", "Gemini AI"],
      features: [
        "AI-powered code review and automated pull request analysis",
        "Deep GitHub API integration for repository event hooks",
        "Asynchronous background workflows with Inngest scheduler",
        "Context-aware code suggestions using Pinecone vector embeddings",
      ],
      github: "https://github.com/Abhisheky12/CodeOrbit",
      live: "https://codeorbit-alpha.vercel.app/"
    },
    {
      id: "codeforge",
      name: "CodeForge",
      description: "A complete online collaborative judge and sandbox coding platform offering multi-language compile, test execution, and AI hints.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Judge0 API", "Monaco Editor", "Google Gemini"],
      features: [
        "Online code compiler and execution environment supporting multiple languages",
        "Custom test-case builder and hidden test suite verification",
        "Fully-featured Monaco Code Editor with autocomplete and theme toggling",
        "AI-powered contextual debugging tips and algorithm explanations",
        "Comprehensive administrator panel for compiling logs and managing problem statements"
      ],
      github: "https://github.com/Abhisheky12/CodeForge",
      live: "#"
    },
    {
      id: "shopeasy",
      name: "ShopEasy",
      description: "A full-scale MERN stack e-commerce web application featuring secure transaction gateways and custom administrator portals.",
      tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Razorpay"],
      features: [
        "JWT-based client-server secure authentication sessions",
        "Seamless digital checkouts via Razorpay payment gateway integration",
        "Advanced dynamic product sorting, filtering, and search engine",
        "Redux Toolkit state management ensuring single-source flow",
        "Admin panel for managing products, user accounts, and inventory status"
      ],
      github: "https://github.com/Abhisheky12/ShopEasy",
      live: "https://shoppingwebsite-17.onrender.com/"
    },
    {
      id: "akshargyan",
      name: "Akshargyan NGO",
      description: "A responsive NGO website for Akshargyan society — spreading the light of knowledge and education to children in need.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      features: [
        "Multi-section responsive website built with Next.js",
        "Vision & Mission showcase highlighting the society's cause",
        "Dedicated events, alumni, and gallery pages",
        "Content-first design supporting digital outreach"
      ],
      github: "https://github.com/akshargyan-team/Akshargyan-website",
      live: "https://akshargyan.org.in/"
    }
  ],
  skills: {
    languages: [
      { name: "C", icon: "C" },
      { name: "C++", icon: "C++" },
      { name: "JavaScript", icon: "JS" },
      { name: "TypeScript", icon: "TS" },
      { name: "Python", icon: "PY" }
    ],
    frontend: [
      { name: "React.js", icon: "React" },
      { name: "Next.js", icon: "Next" },
      { name: "Redux Toolkit", icon: "Redux" },
      { name: "Tailwind CSS", icon: "Tailwind" },
      { name: "HTML", icon: "HTML" },
      { name: "CSS", icon: "CSS" }
    ],
    backend: [
      { name: "Node.js", icon: "Node" },
      { name: "Express.js", icon: "Express" },
      { name: "REST APIs", icon: "API" },
      { name: "JWT Authentication", icon: "JWT" },
      { name: "WebSocket", icon: "WS" }
    ],
    tools: [
      { name: "MongoDB", icon: "MongoDB" },
      { name: "MySQL", icon: "MySQL" },
      { name: "PostgreSQL", icon: "PostgreSQL" },
      { name: "Docker", icon: "Docker" },
      { name: "Git", icon: "Git" },
      { name: "GitHub", icon: "GitHub" },
      { name: "Postman", icon: "Postman" },
      { name: "VS Code", icon: "VSCode" },
      { name: "Pinecone (Vector DB)", icon: "Pinecone" }
    ],
    ai: [
      { name: "RAG", icon: "RAG" },
      { name: "LLMs", icon: "LLM" },
      { name: "LangChain", icon: "LangChain", learning: true },
      { name: "LangGraph", icon: "LangGraph", learning: true }
    ]
  },
  achievements: [
    {
      title: "DSA Problems Solved",
      detail: "800+ complex programming challenges solved on LeetCode & GFG.",
      metric: "800+"
    },
    {
      title: "Codeforces Problems",
      detail: "190+ programming tasks successfully executed in competitive rounds.",
      metric: "190+"
    },
    {
      title: "Smart India Hackathon 2025",
      detail: "Top 10 out of 120 teams in the Internal College Round.",
      metric: "Top 10"
    },
    {
      title: "LeetCode Rating",
      detail: "Highest rating of 1700+ reached with active contest participation.",
      metric: "1700+"
    }

  ],
  education: [
    {
      institution: "JSS Academy of Technical Education",
      degree: "B.Tech — Computer Science Engineering",
      period: "2023 - 2027",
      grade: "CGPA: 8.31"
    },
    {
      institution: "Jingle Bells Public School",
      degree: "12th Standard — PCM",
      period: "2021 - 2022",
      grade: "Percentage: 83.6%"
    }
  ]
};
