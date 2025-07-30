// src/components/project/projectSection.js
import React from "react";
import ProjectLayout from "@/components/project/projectLayout";
import ProjectGrid from "@/components/project/projectGrid";
import ProjectHeader from "@/components/project/projectHeader";

export default function ProjectSection() {
  return (
    <ProjectLayout>
      <ProjectHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 dark:text-white mb-4 font-cinzel-decorative">
            Our Portfolio
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-cinzel">
            A showcase of completed and ongoing projects that demonstrate our
            commitment to excellence and community development.
          </p>
        </div>

        <ProjectGrid />
      </div>
    </ProjectLayout>
  );
}