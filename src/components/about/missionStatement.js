// src/components/about/MissionStatement.js
'use client';
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";


const mission = `My mission is to empower transport workers, uplift grassroots
communities, and drive sustainable governance through inclusive
leadership and transparent service.`;

export default function MissionStatement() {
  return (
    <motion.section
      className="py-16 lg:py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Background Card */}
        <div className="bg-white dark:bg-gray-800 p-12 lg:p-16 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>

          {/* Quote Icon */}
          <motion.div
            className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 relative z-10"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Quote className="text-primary" size={28} />
          </motion.div>

          {/* Section Header */}
          <div className="mb-10 relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          </div>

          {/* Mission Statement */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <blockquote className="font-cinzel text-xl lg:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed italic mb-8">
              <p>{mission}</p>;
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-px bg-primary w-12"></div>
              <p className="font-display text-lg font-semibold text-primary">
                MC Oluomo
              </p>
              <div className="h-px bg-primary w-12"></div>
            </div>
          </motion.div>

          {/* Supporting Elements */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200 dark:border-gray-600 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* Using an emoji directly, ensure it renders well across platforms */}
                <span className="text-primary font-bold text-2xl">🚛</span>
              </div>
              <h4 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Transport Reform
              </h4>
              <p className="font-cinzel text-sm text-gray-600 dark:text-gray-400">
                Modernizing transport systems for better service delivery
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* Using an emoji directly, ensure it renders well across platforms */}
                <span className="text-primary font-bold text-2xl">🏘️</span>
              </div>
              <h4 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Community Development
              </h4>
              <p className="font-cinzel text-sm text-gray-600 dark:text-gray-400">
                Building stronger, more resilient communities
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* Using an emoji directly, ensure it renders well across platforms */}
                <span className="text-primary font-bold text-2xl">⚖️</span>
              </div>
              <h4 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Transparent Governance
              </h4>
              <p className="font-cinzel text-sm text-gray-600 dark:text-gray-400">
                Leading with integrity and accountability
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
