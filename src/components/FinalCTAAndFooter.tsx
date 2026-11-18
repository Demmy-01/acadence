"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code,
  Radio,
  Briefcase,
  Calculator,
  TrendingUp,
  Cpu,
  Brain,
  Vote,
  Dna,
  GraduationCap,
  ArrowRight,
  Sparkles,
  BookOpen,
  FileCheck2,
  Workflow,
  Compass,
} from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import GlassLogo from "@/components/GlassLogo";

/* ================================================================== */
/*  01. 10 Comprehensive Department Disciplines Dataset               */
/* ================================================================== */
export interface ArcDiscipline {
  id: string;
  name: string;
  category: string;
  iconName: string;
  accentHex: string;
  accentBg: string;
  accentText: string;
  accentBorder: string;
  image: string;
  fallbackBg: string;
  frameworkCopy: string;
  citationStyle: string;
  structure: string;
  deliverable: string;
}

const disciplines: ArcDiscipline[] = [
  {
    id: "computer-science",
    name: "Computer Science",
    category: "Software Engineering & AI",
    iconName: "Code",
    accentHex: "#2563eb",
    accentBg: "bg-blue-600",
    accentText: "text-blue-600",
    accentBorder: "border-blue-500",
    image: "/images/feature-studio.jpg",
    fallbackBg: "#0f172a",
    frameworkCopy:
      "System architecture diagrams, algorithmic complexity proofs, API contracts, unit & integration test suites, and full technical dissertations.",
    citationStyle: "IEEE Standard (Numbered)",
    structure: "Architecture • Algorithms • Benchmarks",
    deliverable: "System Source Code & Proofs",
  },
  {
    id: "mass-communication",
    name: "Mass Communication",
    category: "Media Studies & Journalism",
    iconName: "Radio",
    accentHex: "#e11d48",
    accentBg: "bg-rose-600",
    accentText: "text-rose-600",
    accentBorder: "border-rose-500",
    image: "/images/feature-workspace.jpg",
    fallbackBg: "#1c1917",
    frameworkCopy:
      "Content analysis coding schemes, media framing matrices, audience survey discourse evaluations, and digital perception analytics.",
    citationStyle: "APA 7th Edition",
    structure: "Theoretical Framing • Discourse • Surveys",
    deliverable: "Audience Perception Matrix",
  },
  {
    id: "business-administration",
    name: "Business Administration",
    category: "Management & Strategy",
    iconName: "Briefcase",
    accentHex: "#d97706",
    accentBg: "bg-amber-600",
    accentText: "text-amber-600",
    accentBorder: "border-amber-500",
    image: "/images/stage-01-onboarding.jpg",
    fallbackBg: "#1c1917",
    frameworkCopy:
      "Strategic feasibility, SWOT/PESTEL matrices, organizational behavior case studies, and corporate governance compliance.",
    citationStyle: "Harvard Standard",
    structure: "Strategic Feasibility • Governance • Case Studies",
    deliverable: "Corporate Strategy Model",
  },
  {
    id: "accounting",
    name: "Accounting",
    category: "Audit & Financial Forensics",
    iconName: "Calculator",
    accentHex: "#059669",
    accentBg: "bg-emerald-600",
    accentText: "text-emerald-600",
    accentBorder: "border-emerald-500",
    image: "/images/feature-methodology.jpg",
    fallbackBg: "#064e3b",
    frameworkCopy:
      "IFRS/GAAP compliance methodologies, ratio analysis, forensic audit models, and financial performance panel data regressions.",
    citationStyle: "Harvard / APA Style",
    structure: "Financial Statements • Forensics • IFRS",
    deliverable: "Forensic Audit Model",
  },
  {
    id: "economics",
    name: "Economics",
    category: "Econometrics & Policy",
    iconName: "TrendingUp",
    accentHex: "#4f46e5",
    accentBg: "bg-indigo-600",
    accentText: "text-indigo-600",
    accentBorder: "border-indigo-500",
    image: "/images/problem-methodology.jpg",
    fallbackBg: "#1e1b4b",
    frameworkCopy:
      "Econometric time-series modeling, fiscal policy simulations, panel data regression frameworks, and macroeconomic impact evaluations.",
    citationStyle: "Chicago 17th / APA",
    structure: "Time-Series • Regressions • Macro Policy",
    deliverable: "Econometric Regression Models",
  },
  {
    id: "engineering",
    name: "Engineering",
    category: "Applied Sciences & CAD",
    iconName: "Cpu",
    accentHex: "#0891b2",
    accentBg: "bg-cyan-600",
    accentText: "text-cyan-600",
    accentBorder: "border-cyan-500",
    image: "/images/hero-library-architecture.jpg",
    fallbackBg: "#083344",
    frameworkCopy:
      "Finite element modeling, physical stress simulations, schematic documentation, and empirical prototyping benchmarks.",
    citationStyle: "IEEE Standard",
    structure: "CAD Schematics • Simulations • Prototyping",
    deliverable: "CAD Schematics & FEA Benchmarks",
  },
  {
    id: "psychology",
    name: "Psychology",
    category: "Behavioral Sciences",
    iconName: "Brain",
    accentHex: "#9333ea",
    accentBg: "bg-purple-600",
    accentText: "text-purple-600",
    accentBorder: "border-purple-500",
    image: "/images/feature-intelligence.jpg",
    fallbackBg: "#3b0764",
    frameworkCopy:
      "Experimental designs, cognitive assessment metrics, psychometric scales, participant debriefings, and IRB ethical clearances.",
    citationStyle: "APA 7th Edition",
    structure: "Psychometric Scales • Trials • Ethics",
    deliverable: "Validated Psychometric Tool",
  },
  {
    id: "political-science",
    name: "Political Science",
    category: "Governance & Public Policy",
    iconName: "Vote",
    accentHex: "#dc2626",
    accentBg: "bg-red-600",
    accentText: "text-red-600",
    accentBorder: "border-red-500",
    image: "/images/hero-scholar.jpg",
    fallbackBg: "#450a0a",
    frameworkCopy:
      "Comparative institutional governance, public policy impact metrics, diplomatic discourse analysis, and electoral data models.",
    citationStyle: "Chicago 17th Edition",
    structure: "Institutions • Policy • Discourse",
    deliverable: "Comparative Policy Dossier",
  },
  {
    id: "biological-sciences",
    name: "Biological Sciences",
    category: "Life Sciences & Biotech",
    iconName: "Dna",
    accentHex: "#16a34a",
    accentBg: "bg-green-600",
    accentText: "text-green-600",
    accentBorder: "border-green-500",
    image: "/images/stage-03-foundation.jpg",
    fallbackBg: "#052e16",
    frameworkCopy:
      "Assay protocols, bio-statistical modeling, laboratory sample verification, genomics pipelines, and cellular analysis write-ups.",
    citationStyle: "CSE / Vancouver",
    structure: "Assay Protocols • Wet Lab • Bio-Stats",
    deliverable: "Assay Protocol & Bio-Stats",
  },
  {
    id: "education",
    name: "Education",
    category: "Pedagogy & Curriculum",
    iconName: "GraduationCap",
    accentHex: "#ea580c",
    accentBg: "bg-orange-600",
    accentText: "text-orange-600",
    accentBorder: "border-orange-500",
    image: "/images/stage-04-develop.jpg",
    fallbackBg: "#431407",
    frameworkCopy:
      "Curriculum assessment rubrics, classroom observational coding, pedagogical interventions, and learning outcome metrics.",
    citationStyle: "APA 7th Edition",
    structure: "Pedagogical Interventions • Rubrics • Coding",
    deliverable: "Curricular Intervention Plan",
  },
];

const DISCIPLINE_COUNT = disciplines.length; // 10

/* Render Icon Helper */
function renderDisciplineIcon(name: string, className = "w-4 h-4") {
  switch (name) {
    case "Code":
      return <Code className={className} />;
    case "Radio":
      return <Radio className={className} />;
    case "Briefcase":
      return <Briefcase className={className} />;
    case "Calculator":
      return <Calculator className={className} />;
    case "TrendingUp":
      return <TrendingUp className={className} />;
    case "Cpu":
      return <Cpu className={className} />;
    case "Brain":
      return <Brain className={className} />;
    case "Vote":
      return <Vote className={className} />;
    case "Dna":
      return <Dna className={className} />;
    case "GraduationCap":
      return <GraduationCap className={className} />;
    default:
      return <Compass className={className} />;
  }
}

interface FinalCTAAndFooterProps {
  variant?: "home" | "platform";
}

export default function FinalCTAAndFooter({ variant = "home" }: FinalCTAAndFooterProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Computer Science is active by default (index 0)
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Responsive radius & card size measurement
  const [arcMetrics, setArcMetrics] = useState({
    radius: 520,
    cardWidth: 170,
    cardHeight: 170,
    centerYPercent: 86,
  });

  // Reduced motion preference
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Update responsive metrics based on viewport width
  useEffect(() => {
    const updateMetrics = () => {
      const width = window.innerWidth;
      if (width >= 1536) {
        setArcMetrics({ radius: 640, cardWidth: 190, cardHeight: 190, centerYPercent: 88 });
      } else if (width >= 1280) {
        setArcMetrics({ radius: 560, cardWidth: 175, cardHeight: 175, centerYPercent: 86 });
      } else if (width >= 1024) {
        setArcMetrics({ radius: 460, cardWidth: 150, cardHeight: 150, centerYPercent: 84 });
      } else if (width >= 768) {
        setArcMetrics({ radius: 360, cardWidth: 120, cardHeight: 120, centerYPercent: 82 });
      } else {
        setArcMetrics({ radius: 260, cardWidth: 88, cardHeight: 88, centerYPercent: 80 });
      }
    };

    updateMetrics();
    window.addEventListener("resize", updateMetrics);
    return () => window.removeEventListener("resize", updateMetrics);
  }, []);

  // Auto-advance every 6 seconds until user interacts
  useEffect(() => {
    if (hasInteracted || isHovered || reducedMotion) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % DISCIPLINE_COUNT);
    }, 6000);
    return () => clearInterval(timer);
  }, [hasInteracted, isHovered, reducedMotion]);

  // Select discipline on click
  const selectDiscipline = useCallback((index: number) => {
    setHasInteracted(true);
    setActiveIndex(index);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setHasInteracted(true);
      setActiveIndex((prev) => (prev - 1 + DISCIPLINE_COUNT) % DISCIPLINE_COUNT);
    } else if (e.key === "ArrowRight") {
      setHasInteracted(true);
      setActiveIndex((prev) => (prev + 1) % DISCIPLINE_COUNT);
    }
  };

  // Touch swipe support
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 40) {
      setHasInteracted(true);
      if (deltaX > 0) {
        setActiveIndex((prev) => (prev - 1 + DISCIPLINE_COUNT) % DISCIPLINE_COUNT);
      } else {
        setActiveIndex((prev) => (prev + 1) % DISCIPLINE_COUNT);
      }
    }
  };

  const activeDiscipline = disciplines[activeIndex];

  return (
    <>
      {/* ========================================================= */}
      {/* SECTION NINE — SEMICIRCULAR ARC DISCIPLINE WORKSPACE       */}
      {/* ("Begin Your Thesis Journey")                              */}
      {/* ========================================================= */}
      <section
        id="begin-journey"
        ref={sectionRef}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-label="Discipline Selector Rainbow Arch"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative min-h-[760px] sm:min-h-[840px] md:min-h-[920px] lg:min-h-[980px] xl:min-h-[1040px] bg-[#FAFAF8] overflow-hidden focus:outline-none select-none flex flex-col justify-end"
      >
        {/* Soft background ambient tint responding subtly to active accent */}
        <div
          className="absolute inset-0 transition-colors duration-700 pointer-events-none"
          style={{ backgroundColor: `${activeDiscipline.accentHex}08` }}
        />

        {/* ========================================================= */}
        {/* 01. WIDE SEMICIRCULAR ARCH (RAINBOW) OF DISCIPLINE CARDS  */}
        {/* ========================================================= */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {disciplines.map((item, idx) => {
            const isActive = idx === activeIndex;

            // Compute circular difference from active index (-4 to +5)
            let diff = idx - activeIndex;
            diff = ((diff % DISCIPLINE_COUNT) + DISCIPLINE_COUNT) % DISCIPLINE_COUNT;
            if (diff > 5) diff -= DISCIPLINE_COUNT;

            // Angle along the top semicircle arch:
            // diff = 0 is apex straight up (-90 degrees)
            // Step is ~22 degrees so all 10 cards pack tightly across ~210 degrees
            const stepDeg = 22.2;
            const angleDeg = -90 + diff * stepDeg;
            const rad = (angleDeg * Math.PI) / 180;

            // Coordinate offsets from center (cx = 50%, cy = centerYPercent)
            const x = Math.cos(rad) * arcMetrics.radius;
            const y = Math.sin(rad) * arcMetrics.radius;

            // Gentle outward tilt following the curve (halved angle, upright at apex)
            const tilt = isActive ? 0 : diff * 8.5;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        x,
                        y,
                        rotate: tilt,
                        scale: isActive ? 1.08 : 1,
                      }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={
                  reducedMotion
                    ? { duration: 0.2 }
                    : {
                        type: "spring",
                        stiffness: 110,
                        damping: 18,
                        mass: 0.9,
                      }
                }
                style={{
                  position: "absolute",
                  left: "50%",
                  top: `${arcMetrics.centerYPercent}%`,
                  width: arcMetrics.cardWidth,
                  height: arcMetrics.cardHeight,
                  marginLeft: -arcMetrics.cardWidth / 2,
                  marginTop: -arcMetrics.cardHeight / 2,
                  zIndex: isActive ? 30 : 20 - Math.abs(diff),
                }}
                className="pointer-events-auto will-change-transform"
              >
                <button
                  type="button"
                  onClick={() => selectDiscipline(idx)}
                  aria-pressed={isActive}
                  aria-label={`Select ${item.name}`}
                  style={{
                    boxShadow: isActive
                      ? `0 0 0 2.5px ${item.accentHex}, 0 16px 36px rgba(0,0,0,0.14)`
                      : "0 8px 24px rgba(0,0,0,0.08)",
                  }}
                  className={`group relative w-full h-full rounded-[18px] sm:rounded-[22px] overflow-hidden bg-[#FFFFFF] border border-black/[0.04] cursor-pointer transition-all duration-300 focus:outline-none ${
                    isActive
                      ? "ring-2 ring-black/5"
                      : "opacity-95 hover:opacity-100 hover:scale-[1.03]"
                  }`}
                >
                  {/* Clean, bright full-bleed photography without dark overlay */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 120px, 190px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={idx === 0}
                  />

                  {/* Tiny accent icon chip in the top-left corner */}
                  <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 z-20">
                    <div
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg flex items-center justify-center text-white shadow-xs backdrop-blur-md"
                      style={{ backgroundColor: item.accentHex }}
                    >
                      {renderDisciplineIcon(item.iconName, "w-3 h-3 sm:w-3.5 sm:h-3.5")}
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* 02. CENTER CONTENT (INSIDE THE CURVE, LOWER HALF)         */}
        {/* ========================================================= */}
        <div className="relative z-30 max-w-2xl mx-auto px-6 text-center pb-12 sm:pb-16 md:pb-20 pointer-events-auto">
          {/* Top Pill / Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-rose-200 bg-white/90 backdrop-blur-md text-xs font-mono font-bold tracking-wider text-rose-950 mb-3.5 uppercase shadow-2xs"
          >
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
            Begin Your Thesis Journey
          </motion.div>

          {/* Headline with italic red accent */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171717] leading-[1.12] mb-3"
          >
            Different disciplines.{" "}
            <span className="font-serif italic font-normal text-rose-600 block sm:inline">
              One intelligent workspace.
            </span>
          </motion.h2>

          {/* Intro paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xs sm:text-sm md:text-base text-[#666666] max-w-lg mx-auto font-normal leading-relaxed mb-5"
          >
            A thesis in Econometrics requires time-series forecasting; Computer
            Science demands architecture proofs; Mass Communication analyzes media
            framing. Acadence automatically calibrates to your faculty rubric.
          </motion.p>

          {/* Crossfading Dynamic Department Context Panel */}
          <div className="relative min-h-[120px] flex flex-col items-center justify-center mb-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDiscipline.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="w-full flex flex-col items-center"
              >
                {/* Active Department Context Pill */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold mb-2.5 shadow-2xs border"
                  style={{
                    backgroundColor: `${activeDiscipline.accentHex}14`,
                    borderColor: `${activeDiscipline.accentHex}35`,
                    color: activeDiscipline.accentHex,
                  }}
                >
                  {renderDisciplineIcon(activeDiscipline.iconName, "w-3 h-3")}
                  <span>
                    DEPARTMENT CONTEXT // {activeDiscipline.name.toUpperCase()}
                  </span>
                </div>

                {/* Tailored Methodological Framework Copy */}
                <p className="text-xs sm:text-sm text-[#222222] font-medium leading-relaxed max-w-lg mb-4 px-4 text-center">
                  &ldquo;{activeDiscipline.frameworkCopy}&rdquo;
                </p>

                {/* Dynamic "Launch in [Department]" Button */}
                <Link
                  href="/signup"
                  style={{
                    backgroundColor: activeDiscipline.accentHex,
                    boxShadow: `0 8px 24px ${activeDiscipline.accentHex}35`,
                  }}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-white hover:brightness-110 hover:scale-[1.03] transition-all shadow-sm active:scale-95"
                >
                  <span>Launch in {activeDiscipline.name}</span>
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Three Short Facts under the Button */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#EAE7DF] max-w-lg mx-auto">
            {/* Fact 1: Citation Style */}
            <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/70 border border-[#EAE7DF]/70">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#888888] mb-0.5 flex items-center gap-1">
                <BookOpen size={11} className="text-rose-500" />
                Citation Style
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={`cite-${activeDiscipline.id}`}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs font-bold text-[#171717] tracking-tight truncate max-w-full"
                >
                  {activeDiscipline.citationStyle}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Fact 2: Project Structure */}
            <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/70 border border-[#EAE7DF]/70">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#888888] mb-0.5 flex items-center gap-1">
                <Workflow size={11} className="text-blue-500" />
                Project Structure
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={`struct-${activeDiscipline.id}`}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs font-bold text-[#171717] tracking-tight truncate max-w-full"
                >
                  {activeDiscipline.structure}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Fact 3: Deliverable */}
            <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/70 border border-[#EAE7DF]/70">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#888888] mb-0.5 flex items-center gap-1">
                <FileCheck2 size={11} className="text-emerald-500" />
                Deliverable
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={`deliv-${activeDiscipline.id}`}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs font-bold text-[#171717] tracking-tight truncate max-w-full"
                >
                  {activeDiscipline.deliverable}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Hint */}
          <div className="hidden sm:flex justify-center items-center gap-2 text-[10px] font-mono text-[#999999] mt-5">
            <Sparkles size={11} className="text-amber-500" />
            <span>Click any card or use arrow keys to rotate • Hover to pause</span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION TEN — MODERN FLOATING CARD FOOTER WITH WATERMARK   */}
      {/* (Nexiron Inspiration Concept)                             */}
      {/* ========================================================= */}
      <footer className="relative bg-[#F4F3EE] pt-12 sm:pt-16 pb-0 px-4 sm:px-6 md:px-10 overflow-hidden">
        {/* Floating White Card Container */}
        <div className="max-w-6xl mx-auto bg-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 md:p-14 border border-black/[0.04] shadow-[0_4px_30px_rgba(0,0,0,0.03)] relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Brand & mission statement */}
            <div className="md:col-span-5 flex flex-col items-start pr-0 md:pr-6">
              <div className="mb-4">
                <GlassLogo href="/" size="md" textColor="dark" />
              </div>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed max-w-sm font-normal">
                Acadence helps students and scholars transform complex research
                into clear, engaging, and authentic theses — everything you need
                in one intelligent workspace.
              </p>
            </div>

            {/* Navigation Columns */}
            <div className="md:col-span-7 grid grid-cols-3 gap-6 sm:gap-8">
              {/* Product */}
              <div>
                <h4 className="text-xs font-semibold text-[#171717] mb-3 sm:mb-4">
                  Product
                </h4>
                <ul className="space-y-2.5 text-xs text-[#777777]">
                  <li>
                    <Link
                      href="/platform#features"
                      className="hover:text-[#171717] transition-colors"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#solution"
                      className="hover:text-[#171717] transition-colors"
                    >
                      Workspace
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/platform#how-it-works"
                      className="hover:text-[#171717] transition-colors"
                    >
                      5-Stage Process
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#disciplines"
                      className="hover:text-[#171717] transition-colors"
                    >
                      Disciplines
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-xs font-semibold text-[#171717] mb-3 sm:mb-4">
                  Resources
                </h4>
                <ul className="space-y-2.5 text-xs text-[#777777]">
                  <li>
                    <Link
                      href="/platform#faq"
                      className="hover:text-[#171717] transition-colors"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/platform#integrity"
                      className="hover:text-[#171717] transition-colors"
                    >
                      Guides
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/platform#integrity"
                      className="hover:text-[#171717] transition-colors"
                    >
                      Citation Ethics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/platform#faq"
                      className="hover:text-[#171717] transition-colors"
                    >
                      Support
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-xs font-semibold text-[#171717] mb-3 sm:mb-4">
                  Company
                </h4>
                <ul className="space-y-2.5 text-xs text-[#777777]">
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-[#171717] transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/platform#integrity"
                      className="hover:text-[#171717] transition-colors"
                    >
                      Academic Integrity
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-[#171717] transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <a
                      href="mailto:faculty@acadence.org"
                      className="hover:text-[#171717] transition-colors"
                    >
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Thin Divider Line */}
          <div className="border-t border-[#F0F0EE] my-8 sm:my-10" />

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888888]">
            <p>© 2026 Acadence. All rights reserved</p>
            <div className="flex items-center gap-6">
              <Link
                href="/terms"
                className="hover:text-[#171717] transition-colors underline-offset-4 hover:underline"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="hover:text-[#171717] transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* HUGE TYPOGRAPHIC WATERMARK "Acadence" WRITTEN BELOW CARD  */}
        {/* ========================================================= */}
        <div className="relative w-full overflow-hidden select-none pointer-events-none mt-4 sm:mt-6 -mb-4 sm:-mb-8 md:-mb-14">
          <p className="text-[15vw] sm:text-[16vw] md:text-[17vw] lg:text-[18vw] font-black text-[#E4E3DC] tracking-tighter leading-none text-center whitespace-nowrap">
            Acadence
          </p>
        </div>
      </footer>
    </>
  );
}
