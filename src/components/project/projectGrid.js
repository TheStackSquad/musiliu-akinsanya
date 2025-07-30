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
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <MotionDiv>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 dark:text-white mb-12 text-center font-cinzel-decorative">
            Featured Projects
          </h2>
        </MotionDiv>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {paginatedProjects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600 dark:text-gray-300 font-cinzel">
            Page {currentPage} of {totalPages}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                currentPage === 1
                  ? "bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-primary-dark"
              } font-cinzel-decorative`}
            >
              Previous
            </button>

            <div className="hidden sm:flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium transition-all ${
                    currentPage === i + 1
                      ? "bg-primary text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
                  } font-cinzel-decorative`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                currentPage === totalPages
                  ? "bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-primary-dark"
              } font-cinzel-decorative`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
