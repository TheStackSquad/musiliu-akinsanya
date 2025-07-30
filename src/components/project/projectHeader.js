// src/components/project/projectHeader.js

import React from "react";
import { MotionDiv } from "@/animation/aboutAnimate";

export default function ProjectHeader() {
  return (
    <MotionDiv className="text-center font-[var(--font-cinzel)]">
      <h1 className="text-4xl md:text-5xl font-[var(--font-cinzel-decorative)] font-black mb-4 text-primary">
        Ongoing & Past Projects
      </h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
        Explore key initiatives, infrastructure works, and social impact efforts
        spearheaded by our administration to improve lives and boost community
        development.
      </p>
    </MotionDiv>
  );
}
