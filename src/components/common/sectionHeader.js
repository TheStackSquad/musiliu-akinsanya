
// src/components/common/SectionHeader.js
"use client"; // Add this directive if MotionDiv is a client component

import React from "react";
import { MotionDiv } from "@/animation/aboutAnimate"; // Assuming MotionDiv is a client component wrapper

export default function SectionHeader({ title, subtitle }) {
  return (
    <MotionDiv 
      className="text-center max-w-3xl mx-auto mb-12 px-4 sm:px-6" // Added horizontal padding
    >
      <h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 
                   font-display" // Using font-display class
      >
        {title}
      </h2>
      {subtitle && (
        <MotionDiv // Animate the subtitle as well
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }} // Slightly delayed animation
        >
          <p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 
                       font-cinzel leading-relaxed" // Using font-cinzel class, added leading-relaxed
          >
            {subtitle}
          </p>
        </MotionDiv>
      )}
      {/* Optional: Add a subtle separator or flourish */}
      <MotionDiv
        className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      ></MotionDiv>
    </MotionDiv>
  );
}
