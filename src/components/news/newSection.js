//src/components/news/newSectiom.js
'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animation/modalAnimate";
import NewsModal from "./newsModal";
import { newsData } from "../../data/newsData";
import TagFilter from "./tagFilter";
import Image from "next/image";

const ITEMS_PER_PAGE = 6;
const uniqueTags = [...new Set(newsData.map((item) => item.tag))];

function NewsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTag, setActiveTag] = useState("All");

  const filteredData =
    activeTag === "All"
      ? newsData
      : newsData.filter((item) => item.tag === activeTag);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredData.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const handleOpenModal = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-zinc-800 dark:text-white">
        NURTW News & Updates
      </h2>
      <TagFilter
        tags={uniqueTags}
        activeTag={activeTag}
        onTagChange={setActiveTag}
      />

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((article, idx) => (
          <motion.div
            key={article.id}
            className="bg-white dark:bg-zinc-900 rounded-xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
            onClick={() => handleOpenModal(article)}
          >
            <div className="relative w-full h-40">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium uppercase">
                {article.tag}
              </span>
              <h3 className="text-lg font-semibold mt-2">{article.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                {article.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx + 1)}
              className={`px-4 py-2 rounded-md text-sm font-medium border ${
                currentPage === idx + 1
                  ? "bg-indigo-600 text-white"
                  : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      )}

      {/* Modal */}
      <NewsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        article={selectedArticle}
      />
    </section>
  );
}

export default NewsSection;
