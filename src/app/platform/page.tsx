"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import PlatformHeroSection from "@/components/PlatformHeroSection";
import PlatformFeaturesSection from "@/components/PlatformFeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AcademicIntegritySection from "@/components/AcademicIntegritySection";
import FAQSection from "@/components/FAQSection";
import FinalCTAAndFooter from "@/components/FinalCTAAndFooter";

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#171717] selection:bg-[#171717] selection:text-[#FFFFFF]">
      {/* 01. NAVIGATION */}
      <Navigation variant="platform" />

      {/* 02. HERO SECTION — BRANDLYFT CURVED MARQUEE CAROUSEL WITH CURSOR SPEED CONTROL */}
      <PlatformHeroSection />

      {/* 03. SECTION ONE — 03 / CAPABILITIES (FEATURES GRID & WORD-BY-WORD ANIMATIONS) */}
      <PlatformFeaturesSection />

      {/* 04. SECTION TWO — 04 / THE PROCESS (SCROLL-PINNED 5-STAGE MILESTONE TIMELINE) */}
      <HowItWorksSection />

      {/* 05. SECTION THREE — 06 / RESPONSIBLE INTELLIGENCE (ACADEMIC INTEGRITY) */}
      <AcademicIntegritySection />

      {/* 06. SECTION FOUR — 07 / QUESTIONS (MINIMALIST FAQ ACCORDION) */}
      <FAQSection />

      {/* 07. SECTION FIVE — FINAL CTA & FOOTER ("Begin Your Thesis Journey") */}
      <FinalCTAAndFooter />
    </main>
  );
}

