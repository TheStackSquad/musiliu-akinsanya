// File: src/components/about/achievementsGrid.js
import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Users, Flag } from "lucide-react";

const highlights = [
  {
    icon: <Award size={32} />,
    title: "20+ Years in Service",
    description:
      "Dedicated to representing and uplifting the transport sector and communities in Lagos.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <BookOpen size={32} />,
    title: "12 Bills Sponsored",
    description:
      "Focused on urban transportation, worker protection, and youth empowerment.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: <Users size={32} />,
    title: "Community First",
    description:
      "Empowerment programs launched for youth, women, and transport workers.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: <Flag size={32} />,
    title: "Grassroots Leadership",
    description:
      "Authentic leadership driven by community values and local impact.",
    color: "from-orange-500 to-orange-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function AchievementsGrid() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Key Achievements
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="font-cinzel text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Highlighting significant milestones and contributions to public
            service and community development
          </p>
        </div>

        {/* Achievements Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <div className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <div className="text-white">{item.icon}</div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-cinzel text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-left">
              <p className="font-cinzel text-sm text-gray-600 dark:text-gray-400">
                Explore more achievements
              </p>
              <p className="font-display text-lg font-semibold text-gray-900 dark:text-white">
                Building a Better Tomorrow
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
