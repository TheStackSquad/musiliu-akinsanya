// src/components/project/projectCard.js

import React from "react";
import { MotionDiv } from "@/animation/aboutAnimate";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({ title, description, imageUrl, link }) {
  return (
    <MotionDiv className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg">
      <div className="h-48 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover h-full w-full"
        />
      </div>
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-white">
          {title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm">
          {description}
        </p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
          >
            View More <ExternalLink size={16} />
          </a>
        )}
      </div>
    </MotionDiv>
  );
}
