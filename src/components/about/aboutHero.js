// src/components/about/aboutHero.js
import React from "react";
import { motion } from "framer-motion";
import { Play, Award, Users, Zap } from "lucide-react";

export default function AboutHero() {
  return (
    <motion.section
      className="py-16 lg:py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-cinzel font-semibold mb-6">
              <Award size={16} />
              Community Leader & Public Servant
            </div>

            {/* Main Title */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Transforming
              <span className="text-primary block">Communities</span>
              Through Leadership
            </h1>

            {/* Description */}
            <p className="font-cinzel text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              From the streets of Oshodi to the corridors of power, MC Oluomo
              has dedicated his life to empowering transport workers, advocating
              for community development, and championing inclusive governance
              across Lagos State.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                  20+
                </div>
                <div className="font-cinzel text-sm text-gray-600 dark:text-gray-400">
                  Years Experience
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                  1M+
                </div>
                <div className="font-cinzel text-sm text-gray-600 dark:text-gray-400">
                  Lives Impacted
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                  50+
                </div>
                <div className="font-cinzel text-sm text-gray-600 dark:text-gray-400">
                  Projects Led
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="group bg-primary hover:bg-primary/90 text-white font-cinzel font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play
                  className="group-hover:scale-110 transition-transform duration-300"
                  size={20}
                />
                Watch Story
              </motion.button>

              <motion.button
                className="group border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary font-cinzel font-semibold py-4 px-8 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Primary Image Placeholder */}
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-3xl shadow-2xl relative overflow-hidden">
                {/* Image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl text-primary/30">👤</div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <Users
                      className="text-green-600 dark:text-green-400"
                      size={20}
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">
                      Community Impact
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Growing Daily
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <Zap
                      className="text-blue-600 dark:text-blue-400"
                      size={20}
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">
                      Innovation
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Leading Change
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/30 rounded-full"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-primary/40 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
