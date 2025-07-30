// src/components/project/projectSection.js
import React from "react";
import ProjectLayout from "@/components/project/projectLayout";
import ProjectGrid from "@/components/project/projectGrid";
import SectionHeader from "@/components/common/sectionHeader";

export default function ProjectSection() {
  return (
    <ProjectLayout>
      <section className="text-center px-4 py-12 font-[var(--font-cinzel-decorative)]">
        <h2 className="text-4xl md:text-5xl font-black text-gray-800 dark:text-white mb-4">
          Ongoing & Completed Projects
        </h2>
        <p className="text-lg md:text-xl font-[var(--font-cinzel)] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Explore the major infrastructure, welfare, and policy projects
          undertaken.
        </p>
      </section>

      <ProjectGrid />
    </ProjectLayout>
  );
}
