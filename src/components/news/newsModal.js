//src/components/news/newsModal.js

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { modalBackdrop, modalContent } from "../../animation/modalAnimate";

function NewsModal({ isOpen, onClose, article }) {
  if (!isOpen || !article) return null;

  const { title, date, image, tag, excerpt } = article;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalBackdrop}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-2xl w-full bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white p-6 rounded-2xl shadow-lg"
          variants={modalContent}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-zinc-600 dark:text-zinc-300 hover:text-red-500"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Image */}
          <Image
            src={image}
            alt={title}
            width={900} // Provide appropriate width
            height={600} // Provide appropriate height
            className="w-full h-56 object-cover rounded-lg mb-4"
            // You can also use 'fill' prop if the image should fill the parent div
            // and then make the parent div 'relative' and give it a fixed height.
            // For example:
            // <div className="relative w-full h-56 rounded-lg mb-4 overflow-hidden">
            //   <Image src={image} alt={title} fill className="object-cover" />
            // </div>
          />

          {/* Content */}
          <div className="space-y-2">
            <span className="text-xs uppercase text-indigo-600 dark:text-indigo-400 font-medium">
              {tag}
            </span>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">{date}</p>
            <p className="text-base mt-3">{excerpt}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default NewsModal;
