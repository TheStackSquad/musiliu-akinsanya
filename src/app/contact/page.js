//src/app/contact/page.js
// src/app/contact/page.js
"use client";
import React from "react";
import ContactSection from "@/components/contact/contactSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900">
      <ContactSection />
    </div>
  );
}