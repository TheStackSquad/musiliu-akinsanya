//src/app/project/page.js

"use client";

import React from "react";
import ProjectSection from "@/components/project/projectSection";

export default function ProjectPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-gray-50 dark:bg-gray-900">
      <div className="max-w-8xl mx-auto">
        <ProjectSection />
      </div>
    </main>
  );
}
