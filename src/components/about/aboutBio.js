// src/components/about/aboutBio.js
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/animation/aboutAnimate";

const aboutBio = ` Musiliu Akinsanya, popularly known as MC Oluomo, is a grassroots
              mobilizer, leader, and advocate for workers' rights. Rising from
              humble beginnings in Oshodi, Lagos, he has grown into a central
              figure in Nigeria's transport and union landscape.`;

export default function AboutBio() {
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-12 lg:py-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Biography
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-none">
          <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-2xl shadow-lg">
            <p className="font-cinzel text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {aboutBio}
            </p>

            {/* Key Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold text-lg">20+</span>
                </div>
                <p className="font-cinzel text-sm text-gray-600 dark:text-gray-400">
                  Years of Service
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold text-lg">🏆</span>
                </div>
                <p className="font-cinzel text-sm text-gray-600 dark:text-gray-400">
                  Community Leader
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold text-lg">👥</span>
                </div>
                <p className="font-cinzel text-sm text-gray-600 dark:text-gray-400">
                  Union Advocate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
