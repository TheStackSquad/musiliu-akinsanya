// src/components/about/aboutHero.js
import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Zap, Play } from "lucide-react";
import VideoPlayer from "@/components/about/videoPlayer";

export default function AboutHero() {
  return (
    <motion.section
      className="py-12 lg:py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content - unchanged from original */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-cinzel font-semibold mb-6">
              <Award size={16} />
              Community Leader & Public Servant
            </div>

            {/* Main Title */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Transforming
              <span className="text-primary block">Communities</span>
              Through Leadership
            </h1>

            {/* Description */}
            <p className="font-cinzel text-base lg:text-lg xl:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              From the streets of Oshodi to the corridors of power, MC Oluomo
              has dedicated his life to empowering transport workers, advocating
              for community development, and championing inclusive governance
              across Lagos State.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-8">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-1">
                  20+
                </div>
                <div className="font-cinzel text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Years Experience
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-1">
                  1M+
                </div>
                <div className="font-cinzel text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Lives Impacted
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-1">
                  50+
                </div>
                <div className="font-cinzel text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Projects Led
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="group bg-primary hover:bg-primary/90 text-white font-cinzel font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 text-sm sm:text-base"
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
                className="group relative overflow-hidden border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary font-cinzel font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 text-sm sm:text-base before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Learn More</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Video Container */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <VideoPlayer />

            {/* Decorative Elements - Static for performance */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-primary/20 rounded-full"></div>
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-5 h-5 sm:w-6 sm:h-6 bg-primary/30 rounded-full"></div>
            <div className="absolute top-1/2 -left-6 w-3 h-3 sm:w-4 sm:h-4 bg-primary/40 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
