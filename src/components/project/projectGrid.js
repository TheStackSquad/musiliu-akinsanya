// src/components/project/projectGrid.js

"use client";

import React, { useState } from "react";
import ProjectCard from "./projectCard";
import { MotionDiv } from "@/animation/aboutAnimate";
import projectData from "@/data/projectData";

const PROJECTS_PER_PAGE = 6;

export default function ProjectGrid() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projectData.length / PROJECTS_PER_PAGE);

  const paginatedProjects = projectData.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 font-[var(--font-cinzel)]">
      <div className="max-w-6xl mx-auto">
        <MotionDiv>
          <h2 className="text-4xl md:text-5xl font-[var(--font-cinzel-decorative)] font-black text-gray-800 dark:text-white mb-8 text-center">
            Featured Projects
          </h2>
        </MotionDiv>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {paginatedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              currentPage === 1
                ? "bg-gray-300 dark:bg-gray-700 cursor-not-allowed"
                : "bg-primary text-white hover:bg-primary-dark"
            }`}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                currentPage === i + 1
                  ? "bg-primary text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              currentPage === totalPages
                ? "bg-gray-300 dark:bg-gray-700 cursor-not-allowed"
                : "bg-primary text-white hover:bg-primary-dark"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
