// File: src/components/about/BioSection.js
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";

export default function BioSection() {
  return (
    <motion.section 
      className="py-16 lg:py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Life Journey
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="font-cinzel text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From grassroots activism to transformational leadership
          </p>
        </div>

        {/* Biography Content */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Timeline/Quick Facts */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6">
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-6">
                Quick Facts
              </h3>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-cinzel text-sm text-gray-600 dark:text-gray-400">Born in</p>
                  <p className="font-display font-semibold text-gray-900 dark:text-white">Oshodi, Lagos</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-cinzel text-sm text-gray-600 dark:text-gray-400">Experience</p>
                  <p className="font-display font-semibold text-gray-900 dark:text-white">20+ Years</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-cinzel text-sm text-gray-600 dark:text-gray-400">Focus</p>
                  <p className="font-display font-semibold text-gray-900 dark:text-white">Community Leadership</p>
                </div>
              </div>
            </div>
          </div>

          {/* Biography Text */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 p-8 lg:p-12 rounded-2xl shadow-lg">
                <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Early Life & Rise to Leadership
                </h3>
                
                <p className="font-cinzel text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Born and raised in Oshodi, Hon. Musiliu Akinsanya began his journey in grassroots activism and leadership through transport union organizing. He rose through the ranks, becoming a key figure in labor representation and local governance.
                </p>
                
                <p className="font-cinzel text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  With a commitment to public service, he has worked closely with the Lagos State Government, advocating for worker rights, community development, and transport reform. His leadership has spanned decades, impacting policy and empowering citizens across Lagos State.
                </p>

                {/* Key Milestones */}
                <div className="border-t border-gray-200 dark:border-gray-600 pt-8">
                  <h4 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Key Milestones
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <p className="font-cinzel text-gray-700 dark:text-gray-300">Early involvement in transport union activities</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <p className="font-cinzel text-gray-700 dark:text-gray-300">Rise to leadership in labor representation</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <p className="font-cinzel text-gray-700 dark:text-gray-300">Partnership with Lagos State Government</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <p className="font-cinzel text-gray-700 dark:text-gray-300">Champion of worker rights and community development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
