// src/components/project/projectCard.js
import React from "react";
import { MotionDiv } from "@/animation/aboutAnimate";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({ title, description, image, link }) {
  const hasImage = image && image.trim() !== "";

  return (
    <MotionDiv
      className="group bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative h-56 w-full overflow-hidden">
        {hasImage ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex flex-col items-center justify-center p-4 text-center">
            <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-500 dark:text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-medium text-gray-500 dark:text-gray-400 font-cinzel-decorative">
              Project Preview
            </h4>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-1 font-cinzel">
              Image coming soon
            </p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-neutral-800 dark:text-white font-cinzel-decorative">
          {title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-300 font-cinzel">
          {description}
        </p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-cinzel-decorative font-medium"
          >
            View Project <ExternalLink size={16} className="mt-0.5" />
          </a>
        )}
      </div>
    </MotionDiv>
  );
}