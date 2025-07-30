// src/components/about/AboutCTA.js
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function AboutCTA() {
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
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-12 lg:p-16 rounded-3xl shadow-lg border border-primary/20">
          {/* Header */}
          <div className="mb-10">
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Stay Informed & Get Involved
            </h3>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="font-cinzel text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Discover ongoing projects and initiatives that are making a
              difference in our communities
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/projects">
              <motion.button
                className="group bg-primary hover:bg-primary/90 text-white font-cinzel font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  size={20}
                />
              </motion.button>
            </Link>

            <Link href="/news">
              <motion.button
                className="group border-2 border-primary text-primary hover:bg-primary hover:text-white font-cinzel font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Latest News
                <ExternalLink
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  size={18}
                />
              </motion.button>
            </Link>
          </div>

          {/* Contact Information */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-600">
            <p className="font-cinzel text-sm text-gray-600 dark:text-gray-400 mb-2">
              Have questions or want to collaborate?
            </p>
            <Link href="/contact">
              <span className="font-display text-primary hover:text-primary/80 font-semibold cursor-pointer transition-colors duration-300">
                Get in Touch →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
