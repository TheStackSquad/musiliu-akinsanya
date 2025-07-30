// src/components/project/projectLayout.js
import React from "react";
import { motion } from "framer-motion";

const layoutVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
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
      className="overflow-hidden"
    >
      {children}
    </motion.section>
  );
}