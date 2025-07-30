// src/components/contact/contactForm.js
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  formContainerVariants,
  fieldVariants,
  buttonVariants,
  successVariants,
} from "@/animation/contactAnimate";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClasses =
    "w-full px-4 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400";

  return (
    <motion.div variants={formContainerVariants} className="relative">
      {/* Success Message */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            variants={successVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 z-20 flex items-center justify-center bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl"
          >
            <div className="text-center space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto"
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>
              <h3 className="font-cinzel-decorative text-2xl font-bold text-gray-900 dark:text-white">
                Message Sent!
              </h3>
              <p className="font-cinzel text-gray-600 dark:text-gray-300">
                Thank you for reaching out. We&apos;ll get back to you soon.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form Card */}
      <div className="font-cinzel bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fieldVariants}>
              <label
                htmlFor="name"
                className="font-cinzel-decorative block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
                placeholder="John Doe"
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 text-sm text-red-500"
                >
                  {errors.name}
                </motion.p>
              )}
            </motion.div>

            <motion.div variants={fieldVariants}>
              <label
                htmlFor="email"
                className="font-cinzel-decorative block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder="john@example.com"
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 text-sm text-red-500"
                >
                  {errors.email}
                </motion.p>
              )}
            </motion.div>
          </div>

          {/* Subject */}
          <motion.div variants={fieldVariants}>
            <label
              htmlFor="subject"
              className="font-cinzel-decorative block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={inputClasses}
              placeholder="How can we help you?"
            />
            {errors.subject && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 text-sm text-red-500"
              >
                {errors.subject}
              </motion.p>
            )}
          </motion.div>

          {/* Message */}
          <motion.div variants={fieldVariants}>
            <label
              htmlFor="message"
              className="font-cinzel-decorative block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Tell us more about your project or inquiry..."
            />
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 text-sm text-red-500"
              >
                {errors.message}
              </motion.p>
            )}
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={fieldVariants} className="pt-4">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="font-cinzel w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Sending Message...</span>
                </div>
              ) : (
                <div className="font-cinzel-decorative flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
              )}
            </motion.button>
          </motion.div>
        </form>
      </div>
    </motion.div>
  );
}
