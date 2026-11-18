"use client";

import React, { useState } from "react";
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
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ================================================================== */
/*  01. 10 Comprehensive Department Disciplines Dataset               */
/* ================================================================== */
export interface Discipline {
  id: string;
  name: string;
  tag: string;
  iconName: string;
  accentHex: string;
  accentBg: string;
  accentText: string;
  accentBorder: string;
  accentPill: string;
  image: string;
  fallbackImage: string;
  fallbackBg: string;
  focus: string;
}

export const disciplines: Discipline[] = [
  // --- ROW 1 (5 Disciplines) ---
  {
    id: "computer-science",
    name: "Computer Science",
    tag: "Software Engineering & AI",
    iconName: "Code",
    accentHex: "#2563eb", // Blue
    accentBg: "bg-blue-600",
    accentText: "text-blue-600",
    accentBorder: "border-blue-500",
    accentPill: "bg-blue-50 text-blue-800 border-blue-200",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/images/feature-studio.jpg",
    fallbackBg: "#0f172a",
    focus:
      "System architecture diagrams, algorithmic complexity, API documentation, software testing proofs, and full technical dissertations.",
  },
  {
    id: "mass-communication",
    name: "Mass Communication",
    tag: "Media & Journalism",
    iconName: "Radio",
    accentHex: "#e11d48", // Rose
    accentBg: "bg-rose-600",
    accentText: "text-rose-600",
    accentBorder: "border-rose-500",
    accentPill: "bg-rose-50 text-rose-800 border-rose-200",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/images/feature-workspace.jpg",
    fallbackBg: "#1c1917",
    focus:
      "Content analysis, framing theory matrices, survey discourse evaluations, and digital media audience perception studies.",
  },
  {
    id: "business-administration",
    name: "Business Administration",
    tag: "Management & Strategy",
    iconName: "Briefcase",
    accentHex: "#d97706", // Amber
    accentBg: "bg-amber-600",
    accentText: "text-amber-600",
    accentBorder: "border-amber-500",
    accentPill: "bg-amber-50 text-amber-800 border-amber-200",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/images/stage-01-onboarding.jpg",
    fallbackBg: "#1c1917",
    focus:
      "Strategic feasibility, SWOT/PESTEL matrices, organizational behavior case studies, and corporate governance analyses.",
  },
  {
    id: "accounting",
    name: "Accounting",
    tag: "Audit & Financial Forensics",
    iconName: "Calculator",
    accentHex: "#059669", // Emerald
    accentBg: "bg-emerald-600",
    accentText: "text-emerald-600",
    accentBorder: "border-emerald-500",
    accentPill: "bg-emerald-50 text-emerald-800 border-emerald-200",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/images/feature-methodology.jpg",
    fallbackBg: "#064e3b",
    focus:
      "IFRS/GAAP compliance methodologies, ratio analysis, forensic audit models, and financial performance regression data.",
  },
  {
    id: "economics",
    name: "Economics",
    tag: "Econometrics & Policy",
    iconName: "TrendingUp",
    accentHex: "#4f46e5", // Indigo
    accentBg: "bg-indigo-600",
    accentText: "text-indigo-600",
    accentBorder: "border-indigo-500",
    accentPill: "bg-indigo-50 text-indigo-800 border-indigo-200",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/images/problem-methodology.jpg",
    fallbackBg: "#1e1b4b",
    focus:
      "Econometric time-series modeling, fiscal policy simulations, panel data regression frameworks, and macroeconomic impact evaluations.",
  },

  // --- ROW 2 (5 Disciplines) ---
  {
    id: "engineering",
    name: "Engineering",
    tag: "Mechanical, Civil & Electrical",
    iconName: "Cpu",
    accentHex: "#ea580c", // Orange
    accentBg: "bg-orange-600",
    accentText: "text-orange-600",
    accentBorder: "border-orange-500",
    accentPill: "bg-orange-50 text-orange-800 border-orange-200",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/images/feature-studio.jpg",
    fallbackBg: "#1e293b",
    focus:
      "CAD calculations, finite element models, structural safety documentation, materials stress analysis, and prototype schematics.",
  },
  {
    id: "psychology",
    name: "Psychology",
    tag: "Cognitive & Behavioral",
    iconName: "Brain",
    accentHex: "#9333ea", // Purple
    accentBg: "bg-purple-600",
    accentText: "text-purple-600",
    accentBorder: "border-purple-500",
    accentPill: "bg-purple-50 text-purple-800 border-purple-200",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/images/stage-03-foundation.jpg",
    fallbackBg: "#2e1065",
    focus:
      "Psychometric questionnaire validation, Likert scale statistical breakdowns, experimental control ethics, and behavioral observations.",
  },
  {
    id: "political-science",
    name: "Political Science",
    tag: "International Relations & Policy",
    iconName: "Vote",
    accentHex: "#475569", // Slate
    accentBg: "bg-slate-700",
    accentText: "text-slate-700",
    accentBorder: "border-slate-600",
    accentPill: "bg-slate-100 text-slate-800 border-slate-300",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/images/hero-library-architecture.jpg",
    fallbackBg: "#0f172a",
    focus:
      "Qualitative policy evaluations, geopolitical comparative studies, legislative analysis, and institutional power dynamics.",
  },
  {
    id: "biological-sciences",
    name: "Biological Sciences",
    tag: "Microbiology & Biochemistry",
    iconName: "Dna",
    accentHex: "#0d9488", // Teal
    accentBg: "bg-teal-600",
    accentText: "text-teal-600",
    accentBorder: "border-teal-500",
    accentPill: "bg-teal-50 text-teal-800 border-teal-200",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/images/feature-discover.jpg",
    fallbackBg: "#042f2e",
    focus:
      "Laboratory protocol writeups, statistical hypothesis testing (p-values, ANOVA), bioinformatics workflows, and clinical data interpretation.",
  },
  {
    id: "education",
    name: "Education",
    tag: "Pedagogy & Curriculum",
    iconName: "GraduationCap",
    accentHex: "#be123c", // Crimson
    accentBg: "bg-rose-700",
    accentText: "text-rose-700",
    accentBorder: "border-rose-600",
    accentPill: "bg-rose-50 text-rose-800 border-rose-200",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/images/hero-scholar.jpg",
    fallbackBg: "#1c1917",
    focus:
      "Action research frameworks, instructional efficacy testing, student assessment metrics, and classroom intervention studies.",
  },
];

/* Helper to render Lucide icons dynamically */
function renderDisciplineIcon(iconName: string, className = "w-5 h-5") {
  switch (iconName) {
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
      return <Code className={className} />;
  }
}

/* Optimized Image Component with Automatic Fallback Handling */
function DisciplineImage({
  src,
  fallbackSrc,
  alt,
}: {
  src: string;
  fallbackSrc: string;
  alt: string;
}) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading="lazy"
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
  );
}

/* Individual Marquee Card */
function MarqueeCard({
  discipline,
  isSelected,
  onSelect,
  isAriaHidden = false,
}: {
  discipline: Discipline;
  isSelected: boolean;
  onSelect: (d: Discipline) => void;
  isAriaHidden?: boolean;
}) {
  return (
    <button
      type="button"
      role="button"
      aria-pressed={isSelected}
      aria-hidden={isAriaHidden ? "true" : undefined}
      tabIndex={isAriaHidden ? -1 : 0}
      onClick={() => onSelect(discipline)}
      style={{
        backgroundColor: discipline.fallbackBg,
        boxShadow: isSelected
          ? `0 16px 36px -8px ${discipline.accentHex}40, 0 0 0 2.5px ${discipline.accentHex}`
          : undefined,
      }}
      className={`group relative w-64 sm:w-72 h-80 sm:h-92 rounded-2xl sm:rounded-3xl overflow-hidden shrink-0 text-left transition-all duration-300 cursor-pointer select-none border ${
        isSelected
          ? "border-transparent scale-[1.03] z-20"
          : "border-white/10 hover:scale-[1.04] hover:-translate-y-1.5 hover:shadow-xl hover:border-white/40"
      }`}
    >
      {/* Full-bleed background image with smooth zoom */}
      <DisciplineImage
        src={discipline.image}
        fallbackSrc={discipline.fallbackImage}
        alt={discipline.name}
      />

      {/* Deep cinematic gradient overlay so text remains razor-sharp */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/20 z-10 transition-opacity duration-300 group-hover:opacity-90" />

      {/* Top Header inside Card: Icon + Category or Selected Pill */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white backdrop-blur-md border border-white/25 shadow-md transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${discipline.accentHex}CC` }}
        >
          {renderDisciplineIcon(discipline.iconName, "w-5 h-5")}
        </div>

        {/* Persistent Selected Tag or Subtle Accent Indicator */}
        {isSelected ? (
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold text-white shadow-md"
            style={{ backgroundColor: discipline.accentHex }}
          >
            <Check size={12} strokeWidth={3} />
            <span>Selected</span>
          </span>
        ) : (
          <span
            className="w-2.5 h-2.5 rounded-full border border-white/40 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ backgroundColor: discipline.accentHex }}
          />
        )}
      </div>

      {/* Bottom Content inside Card: Category & Title */}
      <div className="absolute bottom-5 left-5 right-5 z-20">
        <span
          className="text-[11px] font-mono font-bold uppercase tracking-wider block mb-1 transition-colors drop-shadow-xs"
          style={{ color: discipline.accentHex }}
        >
          {discipline.tag}
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug drop-shadow-sm group-hover:text-white">
          {discipline.name}
        </h3>
      </div>
    </button>
  );
}

/* ================================================================== */
/*  02. Main BuiltForDisciplinesSection Component                     */
/* ================================================================== */
export default function BuiltForDisciplinesSection() {
  // Computer Science is selected by default
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline>(
    disciplines[0]
  );

  // Divide the 10 disciplines into two rows of 5 for desktop infinite counter-marquee
  const row1 = disciplines.slice(0, 5);
  const row2 = disciplines.slice(5, 10);

  return (
    <section
      id="disciplines"
      className="relative py-28 md:py-36 bg-[#F5F3EE] border-t border-[#E5E5E5] overflow-hidden"
    >
      {/* Dynamic Scoped CSS for Pure CSS Infinite Marquees with Smooth Edge Masks */}
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 45s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 48s linear infinite;
        }

        /* Hovering or focusing inside any row pauses that row */
        .marquee-row:hover .animate-marquee-left,
        .marquee-row:hover .animate-marquee-right,
        .marquee-row:focus-within .animate-marquee-left,
        .marquee-row:focus-within .animate-marquee-right {
          animation-play-state: paused;
        }

        /* Respect prefers-reduced-motion: stop auto-animation & enable manual scrolling */
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-left,
          .animate-marquee-right {
            animation: none !important;
          }
          .marquee-wrapper {
            overflow-x: auto !important;
          }
        }

        /* Edge gradient mask for smooth horizontal fade */
        .marquee-mask {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 7%,
            black 93%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 7%,
            black 93%,
            transparent 100%
          );
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* ========================================================= */}
        {/* 01. SECTION HEADER                                        */}
        {/* ========================================================= */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white border border-[#E5E5E5] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#171717] uppercase">
              05 / EVERY DISCIPLINE
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.08] mb-6">
            Different disciplines.{" "}
            <span className="font-serif italic font-normal text-rose-600">
              One intelligent workspace.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed">
            Acadence adapts research methods, project structures, citation
            formats, and faculty guidelines to your specific department and
            institution. We are not just for Computer Science.
          </p>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 02. INFINITE DUAL-ROW MARQUEE (10 Disciplines)            */}
      {/* ========================================================= */}
      <div className="marquee-wrapper relative w-full mb-16 md:mb-20 overflow-hidden">
        {/* Desktop & Tablet: Dual Counter-Rotating Rows */}
        <div className="hidden sm:flex flex-col gap-6 marquee-mask py-3">
          {/* ---- ROW 1: Moves Left (Computer Science to Economics) ---- */}
          <div className="marquee-row relative overflow-hidden flex w-full">
            <div className="flex gap-5 animate-marquee-left shrink-0">
              {/* Original 5 items */}
              {row1.map((d) => (
                <MarqueeCard
                  key={`r1-orig-${d.id}`}
                  discipline={d}
                  isSelected={selectedDiscipline.id === d.id}
                  onSelect={setSelectedDiscipline}
                />
              ))}
              {/* Duplicated 5 items for seamless loop (aria-hidden for screen readers) */}
              {row1.map((d) => (
                <MarqueeCard
                  key={`r1-dup-${d.id}`}
                  discipline={d}
                  isSelected={selectedDiscipline.id === d.id}
                  onSelect={setSelectedDiscipline}
                  isAriaHidden
                />
              ))}
            </div>
          </div>

          {/* ---- ROW 2: Moves Right (Engineering to Education) ---- */}
          <div className="marquee-row relative overflow-hidden flex w-full">
            <div className="flex gap-5 animate-marquee-right shrink-0">
              {/* Original 5 items */}
              {row2.map((d) => (
                <MarqueeCard
                  key={`r2-orig-${d.id}`}
                  discipline={d}
                  isSelected={selectedDiscipline.id === d.id}
                  onSelect={setSelectedDiscipline}
                />
              ))}
              {/* Duplicated 5 items for seamless loop (aria-hidden for screen readers) */}
              {row2.map((d) => (
                <MarqueeCard
                  key={`r2-dup-${d.id}`}
                  discipline={d}
                  isSelected={selectedDiscipline.id === d.id}
                  onSelect={setSelectedDiscipline}
                  isAriaHidden
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View (< 640px): Single Responsive Marquee Row */}
        <div className="flex sm:hidden marquee-row marquee-mask overflow-hidden py-2">
          <div className="flex gap-4 animate-marquee-left shrink-0">
            {/* All 10 disciplines in a single continuous row */}
            {disciplines.map((d) => (
              <MarqueeCard
                key={`mob-orig-${d.id}`}
                discipline={d}
                isSelected={selectedDiscipline.id === d.id}
                onSelect={setSelectedDiscipline}
              />
            ))}
            {/* Duplicated 10 items for seamless loop */}
            {disciplines.map((d) => (
              <MarqueeCard
                key={`mob-dup-${d.id}`}
                discipline={d}
                isSelected={selectedDiscipline.id === d.id}
                onSelect={setSelectedDiscipline}
                isAriaHidden
              />
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 03. DEPARTMENT CONTEXT & TAILORED FRAMEWORK PANEL         */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          className="bg-[#FFFFFF] border rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-sm transition-colors duration-500"
          style={{
            borderColor: `${selectedDiscipline.accentHex}40`,
            boxShadow: `0 18px 45px -12px ${selectedDiscipline.accentHex}20`,
          }}
        >
          {/* Left: Department Context & Methodological Framework */}
          <div className="max-w-2xl flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDiscipline.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Context Pill Tinted in Department Accent */}
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold mb-4 shadow-2xs border transition-colors duration-300"
                  style={{
                    backgroundColor: `${selectedDiscipline.accentHex}12`,
                    borderColor: `${selectedDiscipline.accentHex}35`,
                    color: selectedDiscipline.accentHex,
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: selectedDiscipline.accentHex }}
                  />
                  <span>Department Context:</span>
                  <strong className="text-[#171717]">
                    {selectedDiscipline.name}
                  </strong>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#171717] mb-3">
                  Tailored Methodological Framework
                </h3>

                <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
                  {selectedDiscipline.focus}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Dynamic Department CTA Button */}
          <div className="shrink-0 w-full sm:w-auto">
            <a
              href="#solution"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md hover:scale-[1.02] cursor-pointer"
              style={{
                backgroundColor: selectedDiscipline.accentHex,
                boxShadow: `0 10px 25px -5px ${selectedDiscipline.accentHex}60`,
              }}
            >
              <span>Launch in {selectedDiscipline.name}</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
