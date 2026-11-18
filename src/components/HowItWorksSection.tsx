"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import Image from "next/image";
import {
  UserCircle,
  Sparkles,
  Layers,
  FilePenLine,
  CheckCircle,
} from "lucide-react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

/* ================================================================== */
/*  Step data                                                         */
/* ================================================================== */
const steps = [
  {
    num: "01",
    title: "Tell Us About Yourself",
    subtitle: "Contextual academic onboarding",
    tag: "STUDENT ONBOARDING",
    image: "/images/stage-01-onboarding.jpg",
    desc: "Provide your institution, department, academic degree level (Undergraduate, Master's, Ph.D.), and baseline research interests. Acadence adapts its rubric models accordingly.",
    icon: <UserCircle className="w-5 h-5" />,
    detail:
      "Calibrates grading standards, referencing styles (APA, MLA, IEEE, Chicago), and institutional chapter structural conventions to match your faculty requirements.",
  },
  {
    num: "02",
    title: "Discover Your Direction",
    subtitle: "Topic validation & research formulation",
    tag: "TOPIC DISCOVERY",
    image: "/images/stage-02-discovery.jpg",
    desc: "Explore high-impact research topics, challenge unfeasible ideas, refine problem statements, and confirm whether adequate empirical data exists.",
    icon: <Sparkles className="w-5 h-5" />,
    detail:
      "Generates initial thesis statements, primary research questions, and specific measurable objectives approved by faculty committees.",
  },
  {
    num: "03",
    title: "Build Your Foundation",
    subtitle: "Methodological and theoretical architecture",
    tag: "FOUNDATION & RIGOUR",
    image: "/images/stage-03-foundation.jpg",
    desc: "Map your theoretical framework, select appropriate research design (qualitative, quantitative, or mixed-methods), and gather peer-reviewed literature.",
    icon: <Layers className="w-5 h-5" />,
    detail:
      "Builds a comprehensive literature review matrix with synthesized thematic clusters, theoretical paradigms, and verified citations.",
  },
  {
    num: "04",
    title: "Develop With Guidance",
    subtitle: "Chapter-by-chapter collaborative synthesis",
    tag: "CHAPTER DRAFTING",
    image: "/images/stage-04-develop.jpg",
    desc: "Draft your chapters in the Acadence Workspace. The AI acts as a peer reviewer, verifying arguments, pointing out unsubstantiated claims, and suggesting structural improvements.",
    icon: <FilePenLine className="w-5 h-5" />,
    detail:
      "Supports technical implementations, data analysis interpretations, code repositories, statistical write-ups, and supervisor feedback integration.",
  },
  {
    num: "05",
    title: "Review and Complete",
    subtitle: "Institutional rigor & post-defense ready",
    tag: "FINAL SUBMISSION",
    image: "/images/stage-05-submission.jpg",
    desc: "Run comprehensive checks for citation integrity, stylistic consistency, supervisor feedback harmonization, and export directly to clean Word (.docx) or LaTeX/PDF.",
    icon: <CheckCircle className="w-5 h-5" />,
    detail:
      "Prepares oral defense slide decks, executive summaries, defense Q&A preparation flashcards, and publication-ready thesis documents.",
  },
];

const STEP_COUNT = steps.length;
const CARD_HEIGHT = 74; // Compact, perfectly proportioned card height
const CARD_GAP = 12;

/* ================================================================== */
/*  Curly SVG path connecting 5 step nodes                            */
/* ================================================================== */
function CurlyPath({
  progress,
  nodePositions,
}: {
  progress: number;
  nodePositions: number[];
}) {
  const pathRef = useRef<SVGPathElement>(null);
  const [totalLength, setTotalLength] = useState(500);

  const pathD = useMemo(() => {
    if (nodePositions.length < 2) return "";
    const xCenter = 22;
    const amplitude = 14;
    const pts = nodePositions.map((y, i) => ({
      x: xCenter + (i % 2 === 0 ? -amplitude : amplitude) * (i === 0 ? 0 : 1),
      y,
    }));
    let d = `M ${xCenter} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      const prev = pts[i - 1];
      const curr = pts[i];
      const midY = (prev.y + curr.y) / 2;
      d += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`;
    }
    return d;
  }, [nodePositions]);

  useEffect(() => {
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      if (len > 0) setTotalLength(len);
    }
  }, [pathD]);

  const drawnLen = Math.min(totalLength, Math.max(0, progress * totalLength));

  return (
    <svg
      className="absolute left-0 top-0 w-12 pointer-events-none"
      style={{
        overflow: "visible",
        height: (nodePositions[nodePositions.length - 1] || 400) + 20,
      }}
    >
      {/* Faint background path */}
      <path
        d={pathD}
        fill="none"
        stroke="#E2E0D8"
        strokeWidth={2.5}
        strokeLinecap="round"
      />
      {/* Animated drawn path */}
      <path
        ref={pathRef}
        d={pathD}
        fill="none"
        stroke="url(#curlyGradient)"
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray={totalLength}
        strokeDashoffset={totalLength - drawnLen}
        style={{ transition: "stroke-dashoffset 0.12s linear" }}
      />
      <defs>
        <linearGradient id="curlyGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e11d48" />
          <stop offset="100%" stopColor="#be123c" />
        </linearGradient>
      </defs>
      {/* Node dots */}
      {nodePositions.map((y, i) => {
        const isReached = progress >= i / (STEP_COUNT - 1) - 0.03;
        return (
          <circle
            key={i}
            cx={22}
            cy={y}
            r={isReached ? 6.5 : 4.5}
            fill={isReached ? "#e11d48" : "#FFFFFF"}
            stroke={isReached ? "#e11d48" : "#C4C2BA"}
            strokeWidth={isReached ? 0 : 2}
            style={{ transition: "all 0.25s ease" }}
          />
        );
      })}
    </svg>
  );
}

/* ================================================================== */
/*  Right-side detail panel with smooth crossfade                     */
/* ================================================================== */
function DetailPanel({ stepIndex }: { stepIndex: number }) {
  const step = steps[stepIndex];
  const progressPercent = ((stepIndex + 1) / STEP_COUNT) * 100;

  return (
    <div className="bg-[#F5F3EE] border border-rose-200/80 rounded-3xl p-5 sm:p-7 lg:p-8 shadow-[0_20px_60px_rgba(23,23,23,0.06)] flex flex-col justify-between relative overflow-hidden w-full max-w-2xl mx-auto">
      {/* Top red progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#E5E5E5]">
        <motion.div
          className="h-full bg-gradient-to-r from-rose-600 to-rose-400"
          initial={false}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        />
      </div>

      <div>
        {/* Stage visual photo banner */}
        <div className="relative h-44 sm:h-52 lg:h-56 w-full rounded-2xl overflow-hidden shadow-md mb-5 border border-[#171717]/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={stepIndex}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={step.image}
                alt={step.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 650px"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-10" />

          <div className="absolute top-3.5 left-4 right-4 flex justify-between items-center z-20">
            <span className="inline-flex items-center gap-1.5 bg-rose-600/95 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              PHASE {step.num} // {step.tag}
            </span>
            <span className="text-xl sm:text-2xl font-mono font-extrabold text-white/50">
              {step.num} / 05
            </span>
          </div>

          <div className="absolute bottom-3.5 left-4 right-4 z-20">
            <h4 className="text-lg sm:text-2xl font-bold text-white tracking-tight drop-shadow-sm mb-0.5">
              {step.title}
            </h4>
            <p className="text-xs sm:text-sm text-rose-200 font-medium">
              {step.subtitle}
            </p>
          </div>
        </div>

        {/* Description text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`desc-${stepIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <p className="text-sm sm:text-base text-[#171717] font-medium leading-relaxed mb-4">
              {step.desc}
            </p>

            {/* Deliverables box */}
            <div className="bg-[#FFFFFF] border border-rose-200/80 rounded-2xl p-4 sm:p-4.5 shadow-xs">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-600" />
                <span className="text-[10px] sm:text-[11px] font-mono uppercase text-rose-950 tracking-wider font-bold">
                  Operational Deliverables & Mechanics:
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
                {step.detail}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom footer bar */}
      <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#E5E5E5]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-[#171717]">
            Stage {stepIndex + 1} of {STEP_COUNT}
          </span>
          <span className="text-xs text-[#777777] font-mono">• {step.tag}</span>
        </div>
        <div className="flex gap-1.5">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i <= stepIndex ? "w-5 bg-rose-500" : "w-1.5 bg-[#D4D4D4]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  Main section — Header Up Above & Pinned Viewport                  */
/* ================================================================== */
export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  /* ---- Scroll progress through the tall 500vh container (0–1) ---- */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [activeStep, setActiveStep] = useState(0);
  const [lineProgressValue, setLineProgressValue] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Divide 0..1 range into STEP_COUNT equal segments
    const raw = Math.floor(latest * STEP_COUNT);
    setActiveStep(Math.max(0, Math.min(STEP_COUNT - 1, raw)));
    setLineProgressValue(latest);
  });

  /* ---- Reduced motion ---- */
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  /* ---- Precise node positions centered on each card ---- */
  const nodePositions = useMemo(() => {
    return steps.map((_, i) => i * (CARD_HEIGHT + CARD_GAP) + CARD_HEIGHT / 2);
  }, []);

  return (
    <section id="how-it-works" className="relative border-t border-[#E5E5E5] bg-[#FFFFFF]">
      {/*
        01. Section Header:
        Placed in standard document flow ABOVE the pinned view.
        As the user scrolls down, this text scrolls up and out of the viewport,
        leaving the full 100vh height dedicated to the interactive step cards and descriptions!
      */}
      <div className="pt-24 pb-14 md:pt-32 md:pb-18 max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white border border-[#E5E5E5] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-rose-600" />
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#171717] uppercase">
              04 / THE PROCESS
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.08] mb-6">
            From your first idea to your{" "}
            <span className="font-serif italic font-normal text-rose-600">
              final submission.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed">
            A structured, linear milestone workflow engineered to prevent
            procrastination, remove ambiguity, and guarantee genuine academic
            excellence.
          </p>
        </div>
      </div>

      {/*
        02. Tall Scroll Track: STEP_COUNT × 100vh = 500vh.
        Provides 100vh of scroll distance per step.
      */}
      <div
        ref={sectionRef}
        style={{ height: `${STEP_COUNT * 100}vh` }}
        className="relative"
      >
        {/*
          Pinned Viewport:
          position: sticky locks to top: 0 with full 100vh screen space.
          The cards on the left are vertically centered in the middle of the page
          and clearly visible at all times!
        */}
        <div className="sticky top-0 h-screen w-full bg-[#FFFFFF] overflow-hidden z-20 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full py-4">
            {/* ---- Mobile active card banner (stacked view) ---- */}
            <div className="block lg:hidden mb-4">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#171717] text-white border border-rose-500/50 shadow-md">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-rose-500 shadow-xs">
                  <Image
                    src={steps[activeStep].image}
                    alt={steps[activeStep].title}
                    fill
                    sizes="60px"
                    className="object-cover"
                  />
                  <span className="absolute top-0.5 left-0.5 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded bg-rose-600 text-white">
                    {steps[activeStep].num}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-rose-400 block">
                    {steps[activeStep].tag}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold tracking-tight truncate">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-[10px] text-rose-100/80 truncate">
                    {steps[activeStep].subtitle}
                  </p>
                </div>
                <div className="text-xs font-mono font-bold text-rose-400 shrink-0">
                  {activeStep + 1} / 5
                </div>
              </div>
            </div>

            {/* ---- Main 2-Column Workspace (Vertically Centered) ---- */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* ========== LEFT: 5 Step Cards Centered in Viewport ========== */}
              <div className="hidden lg:block lg:col-span-5 relative">
                {/* Curly SVG Path running along the cards */}
                <div className="absolute left-0 top-0 w-12 h-full">
                  <CurlyPath
                    progress={reducedMotion ? 1 : lineProgressValue}
                    nodePositions={nodePositions}
                  />
                </div>

                {/* 5 Step Cards Stack — Always in the middle, crisp and clearly visible! */}
                <div className="pl-12 space-y-3">
                  {steps.map((step, idx) => {
                    const isActive = idx === activeStep;
                    const isPassed = idx < activeStep;

                    return (
                      <motion.div
                        key={step.num}
                        initial={false}
                        animate={{
                          scale: isActive ? 1.02 : 1,
                          x: isActive ? 6 : 0,
                        }}
                        transition={{ duration: reducedMotion ? 0 : 0.25, ease: "easeOut" }}
                        style={{ height: `${CARD_HEIGHT}px` }}
                        className={`p-3 rounded-2xl border transition-all duration-300 flex items-center gap-3.5 select-none ${
                          isActive
                            ? "bg-[#171717] text-[#FFFFFF] border-rose-500/60 shadow-[0_12px_32px_rgba(225,29,72,0.18)]"
                            : isPassed
                            ? "bg-white text-[#171717] border-emerald-300/80 shadow-xs opacity-90"
                            : "bg-[#F5F3EE] text-[#171717] border-[#E5E5E5] opacity-80 hover:opacity-100"
                        }`}
                      >
                        {/* Thumbnail */}
                        <div
                          className={`relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border transition-all duration-300 ${
                            isActive
                              ? "border-rose-500 shadow-md ring-2 ring-rose-500/40"
                              : isPassed
                              ? "border-emerald-400 ring-1 ring-emerald-300/40"
                              : "border-[#E5E5E5]"
                          }`}
                        >
                          <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            sizes="60px"
                            className={`object-cover transition-transform duration-500 ${
                              isActive
                                ? "scale-110"
                                : isPassed
                                ? "scale-100 saturate-75"
                                : "opacity-80"
                            }`}
                          />
                          <div className="absolute inset-0 bg-black/20" />
                          <span
                            className={`absolute top-0.5 left-0.5 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded shadow-xs ${
                              isActive
                                ? "bg-rose-600 text-white"
                                : isPassed
                                ? "bg-emerald-600 text-white"
                                : "bg-black/70 text-white"
                            }`}
                          >
                            {isPassed ? "✓" : step.num}
                          </span>
                        </div>

                        {/* Title & Tag */}
                        <div className="flex-1 min-w-0">
                          <span
                            className={`text-[9px] font-mono font-bold uppercase tracking-wider block mb-0.5 ${
                              isActive
                                ? "text-rose-400"
                                : isPassed
                                ? "text-emerald-600"
                                : "text-rose-600"
                            }`}
                          >
                            {step.tag}
                          </span>
                          <h3
                            className={`text-xs sm:text-sm font-bold tracking-tight truncate mb-0.5 ${
                              isActive
                                ? "text-white"
                                : "text-[#171717]"
                            }`}
                          >
                            {step.title}
                          </h3>
                          <p
                            className={`text-[11px] truncate ${
                              isActive
                                ? "text-rose-100/80"
                                : isPassed
                                ? "text-emerald-700/80"
                                : "text-[#666666]"
                            }`}
                          >
                            {step.subtitle}
                          </p>
                        </div>

                        {/* Active dot indicator */}
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shrink-0 mr-1" />
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* ========== RIGHT: Detail Panel ========== */}
              <div className="lg:col-span-7 flex items-center justify-center">
                <div className="w-full">
                  {reducedMotion ? (
                    <DetailPanel stepIndex={activeStep} />
                  ) : (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      >
                        <DetailPanel stepIndex={activeStep} />
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
