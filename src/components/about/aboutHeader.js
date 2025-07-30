// src/components/about/aboutHeader.js
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/animation/aboutAnimate";

export default function AboutHeader() {
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="pt-20 pb-8"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Header */}
        <div className="mb-8">
          <motion.h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About MC Oluomo
          </motion.h1>

          {/* Decorative Element */}
          <motion.div
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
            <div className="w-3 h-3 bg-primary rounded-full mx-4"></div>
            <div className="h-px bg-gradient-to-r from-primary via-primary to-transparent w-32"></div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="font-cinzel text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Learn more about the man behind the movement—his journey, mission,
            and leadership that has transformed communities across Lagos State.
          </motion.p>
        </div>

        {/* Quick Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">
              20+
            </div>
            <div className="font-cinzel text-sm text-gray-600 dark:text-gray-400">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">
              1M+
            </div>
            <div className="font-cinzel text-sm text-gray-600 dark:text-gray-400">
              Lives Impacted
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">
              50+
            </div>
            <div className="font-cinzel text-sm text-gray-600 dark:text-gray-400">
              Projects Led
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">
              15+
            </div>
            <div className="font-cinzel text-sm text-gray-600 dark:text-gray-400">
              Awards Won
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
