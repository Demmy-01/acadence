"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemCollageSection from "@/components/ProblemCollageSection";
import SolutionWorkspaceSection from "@/components/SolutionWorkspaceSection";
import PlatformFeaturesSection from "@/components/PlatformFeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BuiltForDisciplinesSection from "@/components/BuiltForDisciplinesSection";
import AcademicIntegritySection from "@/components/AcademicIntegritySection";
import FAQSection from "@/components/FAQSection";
import FinalCTAAndFooter from "@/components/FinalCTAAndFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#171717] selection:bg-[#171717] selection:text-[#FFFFFF]">
      {/* 01. NAVIGATION */}
      <Navigation />

      {/* 02. HERO SECTION */}
      <HeroSection />

      {/* 03. SECTION TWO — 01 / THE PROBLEM (EDITORIAL COLLAGE) */}
      <ProblemCollageSection />

      {/* 04. SECTION THREE — 02 / THE SOLUTION (PRODUCT WORKSPACE PREVIEW) */}
      <SolutionWorkspaceSection />

      {/* 05. SECTION FOUR — 03 / CAPABILITIES (FEATURES GRID) */}
      <PlatformFeaturesSection />
      
      {/* 06. SECTION FIVE — 04 / THE PROCESS (HOW IT WORKS TIMELINE) */}
      <HowItWorksSection />

      {/* 07. SECTION SIX — 05 / EVERY DISCIPLINE (INTERACTIVE ACCORDION / GRID) */}
      <BuiltForDisciplinesSection />

      {/* 08. SECTION SEVEN — 06 / RESPONSIBLE INTELLIGENCE (ACADEMIC INTEGRITY) */}
      <AcademicIntegritySection />

      {/* 09. SECTION EIGHT — 07 / QUESTIONS (MINIMALIST FAQ ACCORDION) */}
      <FAQSection />

      {/* 10. SECTION NINE & TEN — FINAL CTA & FOOTER */}
      <FinalCTAAndFooter />
    </main>
  );
}
