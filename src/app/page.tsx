"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemCollageSection from "@/components/ProblemCollageSection";
import SolutionWorkspaceSection from "@/components/SolutionWorkspaceSection";
import BuiltForDisciplinesSection from "@/components/BuiltForDisciplinesSection";
import FinalCTAAndFooter from "@/components/FinalCTAAndFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#171717] selection:bg-[#171717] selection:text-[#FFFFFF]">
      {/* 01. NAVIGATION */}
      <Navigation variant="home" />

      {/* 02. HERO SECTION */}
      <HeroSection />

      {/* 03. SECTION ONE — 01 / THE PROBLEM (EDITORIAL COLLAGE) */}
      <ProblemCollageSection />

      {/* 04. SECTION TWO — 02 / THE SOLUTION (PRODUCT WORKSPACE PREVIEW) */}
      <SolutionWorkspaceSection />

      {/* 05. SECTION THREE — 05 / EVERY DISCIPLINE (INFINITE MARQUEE) */}
      <BuiltForDisciplinesSection />

      {/* 06. SECTION FOUR — FINAL CTA & FOOTER ("Begin Your Thesis Journey") */}
      <FinalCTAAndFooter />
    </main>
  );
}
