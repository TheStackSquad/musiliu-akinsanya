// src/components/about/aboutVision.js
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/animation/aboutAnimate";
import { Eye, Target, Heart } from "lucide-react";

export default function AboutVision() {
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-12 lg:py-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Vision & Mission
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="font-cinzel text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Guiding principles that drive transformative leadership and
            community empowerment
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Vision Card */}
          <motion.div
            className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 lg:p-10 rounded-2xl shadow-lg border border-primary/20"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                <Eye className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                Vision
              </h3>
            </div>
            <p className="font-cinzel text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              MC Oluomo envisions a transport system that empowers drivers,
              uplifts communities, and partners effectively with government for
              safe, organized operations that serve the people of Lagos State.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 lg:p-10 rounded-2xl shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                <Target className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                Mission
              </h3>
            </div>
            <p className="font-cinzel text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              His mission is to use leadership to unify union members, promote
              community programs, and foster youth empowerment across Lagos and
              beyond through transparent governance and inclusive development.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-2xl shadow-lg">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-primary" size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Core Values
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Unity
              </h4>
              <p className="font-cinzel text-sm text-gray-600 dark:text-gray-400">
                Bringing people together for common goals and shared prosperity
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h4 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Empowerment
              </h4>
              <p className="font-cinzel text-sm text-gray-600 dark:text-gray-400">
                Lifting up communities through education and economic
                opportunities
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h4 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Transparency
              </h4>
              <p className="font-cinzel text-sm text-gray-600 dark:text-gray-400">
                Open, honest leadership that serves the people with integrity
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
