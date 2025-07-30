// src/app/page.js
"use client";

import { motion } from "framer-motion";
import { fadeInSlideUp, containerVariants } from "@/animation/animate"; // Import your animation variants

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 p-4 md:p-8 gap-4 md:gap-8">
      <motion.div
        className="flex flex-col items-center md:items-start text-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white"
          variants={fadeInSlideUp}
        >
          Musiliu Akinsanya Central
        </motion.h1>
        <motion.p
          className="font-cinzel text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-md mt-4"
          variants={fadeInSlideUp}
        >
          Official platform for news and developments, providing timely updates
          on his work as a citizen and public officer.
        </motion.p>
      </motion.div>
    </div>
  );
}
