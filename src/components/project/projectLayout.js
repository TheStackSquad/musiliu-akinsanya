// src/components/project/projectLayout.js
import React from "react";
import { motion } from "framer-motion";

const layoutVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

export default function ProjectLayout({ children }) {
  return (
    <motion.section
      variants={layoutVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-12 lg:py-16 bg-white dark:bg-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16 lg:space-y-24">{children}</div>
      </div>
    </motion.section>
  );
}
