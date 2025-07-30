// src/animations/animate.js

// src/animations/animate.js

// Enhanced fade-in and slide-up animation with more pronounced effects
export const fadeInSlideUp = {
  initial: {
    opacity: 0,
    y: 80, // Increased from 50px for more dramatic entrance
    scale: 0.9, // More noticeable scale effect
    filter: "blur(4px)", // Add subtle blur for smoother entrance
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 20, // Slightly increased damping for smoother motion
      stiffness: 120, // Increased stiffness for snappier feel
      duration: 1.2, // Slightly longer duration for more graceful animation
      ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for elegant easing
    },
  },
};

// Enhanced container variants with better staggering
export const containerVariants = {
  hidden: { 
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Increased stagger for more dramatic effect
      delayChildren: 0.2, // Slightly longer initial delay
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
