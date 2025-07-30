// src/components/project/projectHeader.js

import React from "react";
import { MotionDiv } from "@/animation/aboutAnimate";

export default function ProjectHeader() {
  return (
    <MotionDiv
      className="text-center py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black mb-6 text-primary dark:text-white font-cinzel-decorative">
          Ongoing & Past Projects
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-cinzel leading-relaxed">
          Explore key initiatives, infrastructure works, and social impact
          efforts spearheaded by our administration to improve lives and boost
          community development.
        </p>
      </div>
    </MotionDiv>
  );
}