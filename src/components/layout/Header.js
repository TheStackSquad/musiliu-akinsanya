//src/components/layout/Header.js
"use client";

import { useState, useEffect, useRef } from "react"; // Import useRef
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { Sun, Moon, Menu, X } from "lucide-react";
import {
  mobileMenuVariants,
  iconRotateVariants,
} from "@/animation/navbarAnimate";

export default function Header() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Create a ref for the mobile menu
  const menuButtonRef = useRef(null); // Create a ref for the menu toggle button

  // Apply theme class to <html>
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  // Effect to handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the menu is open AND
      // the click is outside the menu itself AND
      // the click is NOT on the menu toggle button
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

    // Add event listener when menu is open
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]); // Re-run effect when menuOpen state changes

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Site Title */}
        <div className="text-xl font-display font-bold text-gray-900 dark:text-white">
          Akinsanya Central
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 font-cinzel text-gray-700 dark:text-gray-300 text-sm">
          <a href="#" className="hover:text-primary">
            Home
          </a>
          <a href="#" className="hover:text-primary">
            About
          </a>
          <a href="/news" className="hover:text-primary">
            News
          </a>
          <a href="#" className="hover:text-primary">
            Projects
          </a>
          <a href="#" className="hover:text-primary">
            Contact
          </a>
        </nav>

        {/* Mobile Icons */}
        <div className="flex items-center space-x-4 lg:hidden">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            whileTap={{ scale: 0.9 }}
            variants={iconRotateVariants}
            animate={theme === "dark" ? "open" : "closed"}
            className="text-gray-700 dark:text-gray-300"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          {/* Dropdown Toggle */}
          <motion.button
            ref={menuButtonRef} // Attach ref to the menu button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            whileTap={{ scale: 0.9 }}
            className="text-gray-700 dark:text-gray-300"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {/* AnimatePresence enables exit animations for conditionally rendered components */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            ref={menuRef} // Attach ref to the mobile menu
            className="lg:hidden bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-700 px-4 py-4 space-y-3 font-cinzel text-sm text-gray-700 dark:text-gray-300"
            initial="hidden"
            animate="visible"
            exit="hidden" // This will play when menuOpen becomes false
            variants={mobileMenuVariants}
          >
            <a href="#" className="block hover:text-primary">
              Home
            </a>
            <a href="#" className="block hover:text-primary">
              About
            </a>
            <a href="/news" className="hover:text-primary">
              News
            </a>
            <a href="#" className="block hover:text-primary">
              Projects
            </a>
            <a href="#" className="block hover:text-primary">
              Contact
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
