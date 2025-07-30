// src/components/about/AboutLayout.js
import React from "react";
import { motion } from "framer-motion";

const layoutVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

export default function AboutLayout({ children }) {
  return (
    <motion.section
      variants={layoutVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-12 lg:py-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16 lg:space-y-24">{children}</div>
      </div>
    </motion.section>
  );
}
