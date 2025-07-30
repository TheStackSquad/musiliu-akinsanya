//src/components/news/heroArticle.js
"use client";

import TagBadge from "./tagBadge";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroArticle({ article }) {
  return (
    <motion.section
      className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full lg:w-1/2">
        <Image
          src={article.image}
          alt={article.title}
          width={900}
          height={600}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>

      <div className="w-full lg:w-1/2">
        <TagBadge text={article.tag} />
        <h2 className="text-2xl md:text-3xl font-bold font-display mt-2">
          {article.title}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {article.date}
        </p>
        <p className="mt-4 text-base font-cinzel text-gray-700 dark:text-gray-200 leading-relaxed">
          {article.excerpt}
        </p>
      </div>
    </motion.section>
  );
}
