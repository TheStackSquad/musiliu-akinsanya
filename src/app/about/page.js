//src/app/about/page.js
"use client";

import React from "react";
import { Cinzel, Cinzel_Decorative } from "next/font/google";

// Import custom fonts
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  variable: "--font-cinzel-decorative",
  display: "swap",
  weight: ["400", "700", "900"],
});

// Main Sections
import AboutHeader from "@/components/about/aboutHeader";
import AboutHero from "@/components/about/aboutHero";
import AboutBio from "@/components/about/aboutBio";
import BioSection from "@/components/about/bioSection";
import AboutVision from "@/components/about/aboutVision";
import MissionSection from "@/components/about/missionStatement";
import AchievementsGrid from "@/components/about/achievementsGrid";
import AboutCTA from "@/components/about/aboutCTA";

export default function AboutPage() {
  return (
    <main
      className={`${cinzel.variable} ${cinzelDecorative.variable} antialiased min-h-screen overflow-x-hidden bg-gray-50 dark:bg-gray-900`}
    >
      {/* Page Container with Consistent Padding */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <section className="pt-20 pb-8 text-center">
          <AboutHeader />
        </section>

        {/* Hero Section */}
        <section className="py-12 lg:py-16">
          <div className="max-w-6xl mx-auto">
            <AboutHero />
          </div>
        </section>

        {/* Bio Sections Container */}
        <div className="space-y-16 lg:space-y-24">
          {/* About Bio Section */}
          <section className="py-8">
            <div className="max-w-4xl mx-auto text-center">
              <AboutBio />
            </div>
          </section>

          {/* Detailed Bio Section */}
          <section className="py-8">
            <div className="max-w-5xl mx-auto">
              <BioSection />
            </div>
          </section>

          {/* Vision Section */}
          <section className="py-12 lg:py-16">
            <div className="max-w-4xl mx-auto text-center">
              <AboutVision />
            </div>
          </section>

          {/* Mission Statement Section */}
          <section className="py-12 lg:py-16 bg-white dark:bg-gray-800 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-2xl shadow-sm">
            <div className="max-w-4xl mx-auto text-center">
              <MissionSection />
            </div>
          </section>

          {/* Achievements Grid Section */}
          <section className="py-12 lg:py-16">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="font-cinzel-decorative text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Key Achievements
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                <p className="font-cinzel text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Highlighting significant milestones and contributions to
                  public service
                </p>
              </div>
              <AchievementsGrid />
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-16 lg:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <AboutCTA />
            </div>
          </section>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-1/4 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-1/4 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </main>
  );
}