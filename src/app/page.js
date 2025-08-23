// src/app/page.js

"use client";

import { motion } from "framer-motion";
import { fadeInSlideUp, containerVariants } from "@/animation/animate";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 py-8">
      <motion.div
        className="max-w-4xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-gray-900 dark:text-white leading-tight mb-8 md:mb-12"
          variants={fadeInSlideUp}
        >
          Musiliu Akinsanya Central
        </motion.h1>
        
        {/* Description */}
        <motion.div
          className="max-w-2xl mx-auto"
          variants={fadeInSlideUp}
        >
          <p className="font-cinzel text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Official platform for news and developments, providing timely updates
            on his work as a citizen and public officer.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}