//src/components/news/tagFilter.js

import React from "react";

const TagFilter = ({ activeTag, onTagChange, tags }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {["All", ...tags].map((tag) => (
        <button
          key={tag}
          onClick={() => onTagChange(tag)}
          className={`px-4 py-1 rounded-full text-sm font-medium border transition ${
            activeTag === tag
              ? "bg-indigo-600 text-white"
              : "bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700"
          } hover:bg-indigo-500 hover:text-white`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
