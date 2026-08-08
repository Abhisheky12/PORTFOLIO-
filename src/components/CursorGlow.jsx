import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the movement with Framer Motion spring physics
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect mobile devices - we don't show custom cursor hover glow on touch devices
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    setIsVisible(true);

    const handleMouseMove = (e) => {
      // Offset by half of the glow diameter (300px / 2 = 150px)
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-0 blur-[120px] opacity-25 mix-blend-screen"
      style={{
        x: glowX,
        y: glowY,
        background: "radial-gradient(circle, rgba(6, 182, 212, 0.6) 0%, rgba(139, 92, 246, 0.4) 60%, transparent 100%)",
      }}
    />
  );
}
