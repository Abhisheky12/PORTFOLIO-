import React from "react";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Achievements from "./sections/Achievements";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="bg-dark-bg text-dark-textSecondary min-h-screen relative selection:bg-accent-500/20 selection:text-accent-300">
      {/* Background Cursor Tracking Glow */}
      <CursorGlow />

      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Primary Landing Page Sections */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Education />
        <Contact />
      </main>

      {/* Bottom Footer Deck */}
      <Footer />
    </div>
  );
}

export default App;
