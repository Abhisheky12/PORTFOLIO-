import React from "react";
import { motion } from "framer-motion";

/**
 * Consistent section header used across every section.
 * Renders an animated title with a gradient-highlighted word,
 * an accent divider and an optional description.
 */
export default function SectionHeading({ title, highlight, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
        {title} <span className="text-gradient">{highlight}</span>
      </h2>
      <div className="w-12 h-1 bg-accent-500 mx-auto rounded-full" />
      {description && (
        <p className="text-dark-textSecondary text-sm max-w-lg mx-auto mt-4">
          {description}
        </p>
      )}
    </motion.div>
  );
}
