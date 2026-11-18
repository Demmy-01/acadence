"use client";

import React, { useRef, useMemo } from "react";
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
  useTransform,
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

/* ================================================================== */
/*  Curly SVG path that connects 5 node positions                     */
/*  The path winds left-right as it descends                          */
/* ================================================================== */
function CurlyPath({
  progress,
  nodePositions,
}: {
  progress: number; // 0..1 overall scroll progress
  nodePositions: number[]; // y-centers for each node (px)
}) {
  // Build a curly S-shaped path through the node positions
  const pathD = useMemo(() => {
    if (nodePositions.length < 2) return "";
    const xCenter = 28; // center x of the SVG column
    const amplitude = 16; // how far the curves swing
    const pts = nodePositions.map((y, i) => ({
      x: xCenter + (i % 2 === 0 ? -amplitude : amplitude) * (i === 0 ? 0 : 1),
      y,
    }));
    // Start at first node, center
    let d = `M ${xCenter} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      const prev = pts[i - 1];
      const curr = pts[i];
      const midY = (prev.y + curr.y) / 2;
      // Cubic bezier: control points swing out horizontally
      const cp1x = prev.x;
      const cp1y = midY;
      const cp2x = curr.x;
      const cp2y = midY;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
    }
    return d;
  }, [nodePositions]);

  // Approximate total path length (generous overestimate is fine for dasharray)
  const totalLen = useMemo(() => {
    if (nodePositions.length < 2) return 0;
    let len = 0;
    for (let i = 1; i < nodePositions.length; i++) {
      len += Math.abs(nodePositions[i] - nodePositions[i - 1]) * 1.4;
    }
    return len;
  }, [nodePositions]);

  const drawnLen = progress * totalLen;

  return (
    <svg
      className="absolute left-0 top-0 w-14 h-full pointer-events-none"
      style={{ overflow: "visible" }}
    >
      {/* Background faint path */}
      <path
        d={pathD}
        fill="none"
        stroke="#E5E5E5"
        strokeWidth={2}
        strokeLinecap="round"
      />
      {/* Animated drawn path */}
      <path
        d={pathD}
        fill="none"
        stroke="url(#pathGrad)"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeDasharray={totalLen}
        strokeDashoffset={totalLen - drawnLen}
        style={{ transition: "stroke-dashoffset 0.15s linear" }}
      />
      {/* Gradient for the drawn line */}
      <defs>
        <linearGradient id="pathGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e11d48" />
          <stop offset="100%" stopColor="#be123c" />
        </linearGradient>
      </defs>
      {/* Node dots */}
      {nodePositions.map((y, i) => {
        const stepProgress = i / (STEP_COUNT - 1);
        const isReached = progress >= stepProgress - 0.02;
        return (
          <circle
            key={i}
            cx={28}
            cy={y}
            r={isReached ? 7 : 5}
            fill={isReached ? "#e11d48" : "#fff"}
            stroke={isReached ? "#e11d48" : "#D4D4D4"}
            strokeWidth={isReached ? 0 : 2}
            style={{ transition: "all 0.3s ease" }}
          />
        );
      })}
    </svg>
  );
}

/* ================================================================== */
/*  Right panel – crossfade between steps                             */
/* ================================================================== */
function DetailPanel({ stepIndex }: { stepIndex: number }) {
  const step = steps[stepIndex];
  const progressPercent = ((stepIndex + 1) / STEP_COUNT) * 100;

  return (
    <div className="bg-[#F5F3EE] border border-rose-200/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(23,23,23,0.06)] flex flex-col justify-between relative overflow-hidden min-h-[520px]">
      {/* Top progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#E5E5E5]">
        <motion.div
          className="h-full bg-gradient-to-r from-rose-600 to-rose-400"
          initial={false}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      <div>
        {/* Stage visual photo banner */}
        <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden shadow-md mb-6 border border-[#171717]/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={stepIndex}
              initial={{ opacity: 0, scale: 1.04 }}
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
          {/* Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-10" />

          {/* Overlaid badges */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
            <span className="inline-flex items-center gap-1.5 bg-rose-600/95 backdrop-blur-md text-white text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              PHASE {step.num} // {step.tag}
            </span>
            <span className="text-2xl font-mono font-extrabold text-white/50">
              {step.num} / 05
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 z-20">
            <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-sm mb-1">
              {step.title}
            </h4>
            <p className="text-xs sm:text-sm text-rose-200 font-medium">
              {step.subtitle}
            </p>
          </div>
        </div>

        {/* Description with crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`desc-${stepIndex}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <p className="text-base sm:text-lg text-[#171717] font-medium leading-relaxed mb-5">
              {step.desc}
            </p>

            {/* Deliverables box */}
            <div className="bg-[#FFFFFF] border border-rose-200/80 rounded-2xl p-5 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-rose-600" />
                <span className="text-[11px] font-mono uppercase text-rose-950 tracking-wider font-bold">
                  Operational Deliverables & Mechanics:
                </span>
              </div>
              <p className="text-sm text-[#333333] leading-relaxed">
                {step.detail}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom footer */}
      <div className="flex items-center justify-between pt-5 mt-5 border-t border-[#E5E5E5]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-[#171717]">
            Stage {stepIndex + 1} of {STEP_COUNT}
          </span>
          <span className="text-xs text-[#777777] font-mono">
            • {step.tag}
          </span>
        </div>
        <div className="flex gap-1.5">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i <= stepIndex
                  ? "w-5 bg-rose-500"
                  : "w-1.5 bg-[#D4D4D4]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  Main section                                                      */
/* ================================================================== */
export default function HowItWorksSection() {
  /* ----- scroll tracking ----- */
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Map overall scroll to 0..1 progress
  // Active step derived from progress
  const [activeStep, setActiveStep] = React.useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Divide into 5 equal segments
    const raw = Math.floor(latest * STEP_COUNT);
    const clamped = Math.max(0, Math.min(STEP_COUNT - 1, raw));
    setActiveStep(clamped);
  });

  // Progress for the curly line drawing
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [lineProgressValue, setLineProgressValue] = React.useState(0);
  useMotionValueEvent(lineProgress, "change", (v) => setLineProgressValue(v));

  // The y-positions of the 5 nodes along the left column
  // We space them evenly across the left column height
  const cardHeight = 92; // approximate height of each step card in px
  const cardGap = 16;
  const nodePositions = useMemo(() => {
    return steps.map(
      (_, i) => i * (cardHeight + cardGap) + cardHeight / 2
    );
  }, []);

  const totalListHeight = (STEP_COUNT - 1) * (cardHeight + cardGap) + cardHeight;

  // How far to shift the list so the active card is vertically centered
  // On desktop, viewport center of the sticky container is roughly 50vh
  // We offset the list upwards as activeStep increases
  const listOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(totalListHeight - cardHeight)]
  );

  /* ----- prefers-reduced-motion ----- */
  const [reducedMotion, setReducedMotion] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section id="how-it-works" className="relative border-t border-[#E5E5E5]">
      {/* Scroll-height container: 5 × 100vh to give each step a full viewport of scroll distance */}
      <div ref={sectionRef} style={{ height: `${STEP_COUNT * 100}vh` }} className="relative">
        {/* Sticky inner wrapper — stays pinned in the viewport */}
        <div className="sticky top-0 h-screen overflow-hidden bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col">
            {/* Section header — compact in sticky mode */}
            <div className="pt-10 pb-6 md:pt-14 md:pb-8 shrink-0">
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-white border border-[#E5E5E5] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-rose-600" />
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#171717] uppercase">
                  04 / THE PROCESS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171717] leading-[1.08] mb-2">
                From your first idea to your{" "}
                <span className="font-serif italic font-normal text-rose-600">
                  final submission.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#333333] font-normal leading-relaxed max-w-2xl">
                A structured, linear milestone workflow engineered to prevent
                procrastination, remove ambiguity, and guarantee genuine academic
                excellence.
              </p>
            </div>

            {/* Main content: left step list + right detail panel */}
            <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 pb-8">
              {/* ========== LEFT: Steps with curly line ========== */}
              <div className="lg:col-span-5 relative flex items-center overflow-hidden">
                {/* Curly connecting SVG line */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-14 hidden lg:block"
                  style={{ height: totalListHeight }}
                >
                  <CurlyPath
                    progress={lineProgressValue}
                    nodePositions={nodePositions}
                  />
                </div>

                {/* Scrolling card list */}
                <motion.div
                  className="relative w-full lg:pl-16"
                  style={
                    reducedMotion
                      ? undefined
                      : { y: listOffset }
                  }
                >
                  <div className="space-y-4">
                    {steps.map((step, idx) => {
                      const isActive = idx === activeStep;
                      const isPassed = idx < activeStep;
                      const isFuture = idx > activeStep;

                      return (
                        <motion.div
                          key={step.num}
                          initial={false}
                          animate={{
                            scale: isActive ? 1 : 0.97,
                            opacity: isFuture ? 0.45 : 1,
                          }}
                          transition={{ duration: reducedMotion ? 0 : 0.35, ease: "easeOut" }}
                          className={`p-3.5 sm:p-4 rounded-2xl border transition-colors duration-300 flex items-center gap-4 ${
                            isActive
                              ? "bg-[#171717] text-[#FFFFFF] border-rose-500/50 shadow-[0_14px_35px_rgba(225,29,72,0.18)]"
                              : isPassed
                              ? "bg-white text-[#171717] border-emerald-200/80 shadow-xs"
                              : "bg-[#F5F3EE] text-[#171717] border-[#E5E5E5]"
                          }`}
                        >
                          {/* Thumbnail */}
                          <div
                            className={`relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden shrink-0 border transition-all duration-300 ${
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
                              sizes="80px"
                              className={`object-cover transition-transform duration-500 ${
                                isActive
                                  ? "scale-110"
                                  : isPassed
                                  ? "scale-100 saturate-50"
                                  : "opacity-70"
                              }`}
                            />
                            <div className="absolute inset-0 bg-black/25" />
                            <span
                              className={`absolute top-1.5 left-1.5 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded shadow-xs ${
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

                          {/* Text */}
                          <div className="flex-1 min-w-0">
                            <span
                              className={`text-[10px] font-mono font-bold uppercase tracking-wider block mb-0.5 ${
                                isActive
                                  ? "text-rose-400"
                                  : isPassed
                                  ? "text-emerald-600"
                                  : "text-rose-600"
                              }`}
                            >
                              {step.tag}
                            </span>
                            <h3 className="text-sm sm:text-base font-bold tracking-tight truncate mb-0.5">
                              {step.title}
                            </h3>
                            <p
                              className={`text-xs truncate ${
                                isActive
                                  ? "text-rose-100/80"
                                  : isPassed
                                  ? "text-emerald-700/70"
                                  : "text-[#777777]"
                              }`}
                            >
                              {step.subtitle}
                            </p>
                          </div>

                          {/* Active indicator */}
                          {isActive && (
                            <motion.div
                              layoutId="activeIndicator"
                              className="w-2 h-2 rounded-full bg-rose-500 shrink-0"
                              transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            />
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>

              {/* ========== RIGHT: Detail panel ========== */}
              <div className="lg:col-span-7 flex items-center">
                <div className="w-full">
                  {reducedMotion ? (
                    <DetailPanel stepIndex={activeStep} />
                  ) : (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
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
