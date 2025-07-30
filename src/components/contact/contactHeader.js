// src/components/contact/contactHeader.js
"use client";
import React from "react";
import { motion } from "framer-motion";
import { headerVariants, iconVariants } from "@/animation/contactAnimate";

export default function ContactHeader() {
  return (
    <motion.div variants={headerVariants} className="space-y-6">
      {/* Main heading with gradient text */}
      <div className="space-y-4">
        <motion.div
          variants={iconVariants}
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-2xl shadow-lg"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </motion.div>

        <motion.h1
          className="text-4xl lg:text-5xl font-bold"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: "easeOut",
              },
            },
          }}
        >
          <span
            className="font-cinzel-decorative bg-gradient-to-r from-gray-900 via-blue-700
          to-indigo-700 dark:from-white dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent"
          >
            Let&apos;s Start a
          </span>
          <br />
          <span
            className="font-cinzel-decorative bg-gradient-to-r from-blue-600 via-purple-600
          to-indigo-600 bg-clip-text text-transparent"
          >
            Conversation
          </span>
        </motion.h1>
      </div>

      {/* Subtitle */}
      <motion.p
        className="font-cinzel text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-md"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut",
            },
          },
        }}
      >
        We&apos;d love to hear from you. Send us a message and we&apos;ll
        respond as soon as possible.
      </motion.p>

      {/* Feature highlights */}
      <motion.div
        className="flex flex-wrap gap-4 pt-4"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delay: 0.4,
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {[
          { icon: "⚡", text: "Quick Response" },
          { icon: "🔒", text: "Secure & Private" },
          { icon: "💡", text: "Expert Support" },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-white/30 shadow-sm"
          >
            <span className="text-sm">{item.icon}</span>
            <span className="font-cinzel text-sm font-medium text-gray-700 dark:text-gray-300">
              {item.text}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
