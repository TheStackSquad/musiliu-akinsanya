//src/components/news/newsCard.js
"use client";

import TagBadge from "./tagBadge";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NewsCard({ article }) {
  return (
    <motion.div
      className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
      whileHover={{ scale: 1.02 }}
    >
      <Image
        src={article.image}
        alt={article.title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <TagBadge text={article.tag} />
        <h3 className="text-lg font-bold font-display mt-2">{article.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {article.date}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
          {article.excerpt}
        </p>
      </div>
    </motion.div>
  );
}
