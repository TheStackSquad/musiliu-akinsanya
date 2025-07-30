//src/components/layout/Header.js
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import Link from "next/link";
import {
  mobileMenuVariants,
  iconRotateVariants,
} from "@/animation/navbarAnimate";

export default function Header() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Apply theme class to <html>
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  // Effect to handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Close mobile menu when a link is clicked
  const handleMobileLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Site Title - Now clickable */}
        <Link href="/" className="group">
          <motion.div
            className="text-xl font-display font-bold text-gray-900 dark:text-white transition-all duration-300 group-hover:text-primary group-hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Akinsanya Central
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-2 font-cinzel text-gray-700 dark:text-gray-300 text-sm">
          <Link
            href="/"
            className="relative group px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
              Home
            </span>
            <motion.div
              className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              layoutId="desktopHover"
            />
          </Link>

          <Link
            href="/about"
            className="relative group px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
              About
            </span>
            <motion.div
              className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              layoutId="desktopHover"
            />
          </Link>

          <Link
            href="/news"
            className="relative group px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
              News
            </span>
            <motion.div
              className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              layoutId="desktopHover"
            />
          </Link>

          <Link
            href="/projects"
            className="relative group px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
              Projects
            </span>
            <motion.div
              className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              layoutId="desktopHover"
            />
          </Link>

          <Link
            href="/contact"
            className="relative group px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
              Contact
            </span>
            <motion.div
              className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              layoutId="desktopHover"
            />
          </Link>

          {/* Desktop Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            whileTap={{ scale: 0.9 }}
            variants={iconRotateVariants}
            animate={theme === "dark" ? "open" : "closed"}
            className="ml-4 p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </nav>

        {/* Mobile Icons */}
        <div className="flex items-center space-x-2 lg:hidden">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            whileTap={{ scale: 0.9 }}
            variants={iconRotateVariants}
            animate={theme === "dark" ? "open" : "closed"}
            className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          {/* Dropdown Toggle */}
          <motion.button
            ref={menuButtonRef}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            <motion.div
              animate={{ rotate: menuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            ref={menuRef}
            className="lg:hidden bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-700 px-4 py-4 space-y-2 font-cinzel text-sm text-gray-700 dark:text-gray-300"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
          >
            <Link
              href="/"
              onClick={handleMobileLinkClick}
              className="block relative group px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                Home
              </span>
              <motion.div
                className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId="mobileHover"
              />
            </Link>

            <Link
              href="/about"
              onClick={handleMobileLinkClick}
              className="block relative group px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                About
              </span>
              <motion.div
                className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId="mobileHover"
              />
            </Link>

            <Link
              href="/news"
              onClick={handleMobileLinkClick}
              className="block relative group px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                News
              </span>
              <motion.div
                className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId="mobileHover"
              />
            </Link>

            <Link
              href="/projects"
              onClick={handleMobileLinkClick}
              className="block relative group px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                Projects
              </span>
              <motion.div
                className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId="mobileHover"
              />
            </Link>

            <Link
              href="/contact"
              onClick={handleMobileLinkClick}
              className="block relative group px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                Contact
              </span>
              <motion.div
                className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId="mobileHover"
              />
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
