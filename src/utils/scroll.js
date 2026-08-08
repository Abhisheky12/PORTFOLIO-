/**
 * Smoothly scrolls to a section by id, accounting for the fixed navbar height.
 * Uses scrollIntoView + CSS scroll-margin-top, which is the most reliable way
 * to handle fixed-header offsets without manual math or double smooth-scrolls.
 */
export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({ behavior: "smooth", block: "start" });
};
