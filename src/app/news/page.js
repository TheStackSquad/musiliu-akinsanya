//src.app/news/page.js
'use client';
import { useState } from "react"; // add this
import HeroArticle from "@/components/news/heroArticle";
import NewsCard from "@/components/news/newsCard";
import NewsModal from "@/components/news/newsModal";
import { newsData } from "@/data/newsData";
import NewsSection from "@/components/news/newSection";

export default function NewsPage() {
  const [hero, ...rest] = newsData;

  // modal state logic
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleModalOpen = (article) => {
    setSelectedArticle(article);
  };

  const handleModalClose = () => {
    setSelectedArticle(null);
  };

  return (
    <main className="min-h-screen px-4 md:px-8 py-6 md:py-12 bg-light dark:bg-dark text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl md:text-4xl font-display font-bold mt-9 mb-8 text-center md:text-left lg:mt-12">
        News & Updates
      </h1>

      <NewsSection />
      <HeroArticle article={hero} />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((item) => (
          <NewsCard
            key={item.id}
            article={item}
            onClick={() => handleModalOpen(item)}
          />
        ))}
      </div>

      {/* Conditionally render the modal here */}
      {selectedArticle && (
        <NewsModal
          article={selectedArticle}
          onClose={handleModalClose}
        />
      )}
    </main>
  );
}

