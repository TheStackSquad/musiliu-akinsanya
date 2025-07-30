// src/animations/animate.js

// Define a more animated fade-in and slide-up animation for elements
export const fadeInSlideUp = {
  initial: {
    opacity: 0,
    y: 50, // Start 50px below its final position (increased from 20px)
    scale: 0.95, // Start slightly smaller for a subtle "pop" effect
  },
  animate: {
    opacity: 1,
    y: 0, // Animate to its final position
    scale: 1, // Animate to its original size
    transition: {
      type: "spring", // Use a spring physics-based animation
      damping: 15, // Controls the oscillation (lower = more oscillation)
      stiffness: 100, // Controls the speed of the spring (higher = faster)
      duration: 0.8, // Overall duration for the animation
      ease: "easeOut", // Still apply an ease for the initial part of the animation
    },
  },
};

// Define a staggered animation for children elements (no change here)
export const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Slightly reduced stagger for quicker overall reveal
      delayChildren: 0.1, // Add a small initial delay before children start animating
    },
  },
};
