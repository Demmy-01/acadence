"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  Compass,
  Library,
  Bot,
  LayoutTemplate,
  Code2,
  PieChart,
  ArrowRight,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Animated word-by-word text reveal                                 */
/* ------------------------------------------------------------------ */
function AnimatedWords({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={
            isInView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 18, filter: "blur(6px)" }
          }
          transition={{
            duration: 0.5,
            delay: delay + i * 0.04,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mr-[0.3em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Animated counter that counts up on scroll                         */
/* ------------------------------------------------------------------ */
function AnimatedCounter({
  value,
  suffix = "",
  className = "",
}: {
  value: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      className={className}
    >
      {value}
      {suffix}
    </motion.span>
  );
}

/* ------------------------------------------------------------------ */
/*  Single feature row — alternating layout with parallax image       */
/* ------------------------------------------------------------------ */
function FeatureRow({
  feature,
  index,
  isReversed,
}: {
  feature: (typeof features)[number];
  index: number;
  isReversed: boolean;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rowRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });

  // Parallax: image moves slightly counter to scroll
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.03]);

  return (
    <div ref={rowRef} className="relative">
      {/* Connecting vertical line between cards */}
      {index < 5 && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-px h-16 md:h-20 bg-gradient-to-b from-[#D4D4D4] to-transparent z-0" />
      )}

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 items-stretch bg-white rounded-3xl border border-[#E8E5E0] overflow-hidden transition-all duration-500 hover:shadow-[0_30px_80px_rgba(23,23,23,0.08)] hover:border-[#D4D0CA]`}
      >
        {/* ---- IMAGE SIDE ---- */}
        <div
          className={`relative overflow-hidden min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] ${
            isReversed ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <motion.div
            className="absolute inset-0"
            style={{ y: imageY, scale: imageScale }}
          >
            <Image
              src={feature.image}
              alt={feature.name}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Gradient overlay for depth */}
          <div
            className={`absolute inset-0 z-10 pointer-events-none ${
              isReversed
                ? "bg-gradient-to-l from-white/20 via-transparent to-transparent"
                : "bg-gradient-to-r from-white/20 via-transparent to-transparent"
            }`}
          />

          {/* Floating badge on the image */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: isReversed ? 20 : -20 }
            }
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`absolute bottom-5 z-20 ${
              isReversed ? "right-5" : "left-5"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/60 shadow-lg">
              <span className={`w-2 h-2 rounded-full ${feature.dotColor} animate-pulse`} />
              <span className="text-[11px] font-semibold tracking-wide text-[#333]">
                {feature.pill}
              </span>
            </div>
          </motion.div>
        </div>

        {/* ---- CONTENT SIDE ---- */}
        <div
          className={`relative flex flex-col justify-center px-8 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16 ${
            isReversed ? "lg:order-1" : "lg:order-2"
          }`}
        >
          {/* Top: number + icon */}
          <div className="flex items-center justify-between mb-8">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-mono text-6xl sm:text-7xl font-black text-[#F0EDE8] select-none leading-none"
            >
              {feature.num}
            </motion.span>
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -90 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1, rotate: 0 }
                  : { opacity: 0, scale: 0, rotate: -90 }
              }
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className={`w-12 h-12 rounded-2xl ${feature.iconBg} border flex items-center justify-center shadow-sm`}
            >
              {feature.icon}
            </motion.div>
          </div>

          {/* Feature name with animated underline */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="relative text-sm font-mono font-bold uppercase tracking-[0.15em] text-rose-600 mb-3"
          >
            {feature.name}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="absolute -bottom-1 left-0 h-[2px] w-16 bg-rose-500/50 origin-left"
            />
          </motion.h3>

          {/* Title — word by word reveal */}
          <h4 className="text-2xl sm:text-3xl font-bold text-[#171717] tracking-tight leading-snug mb-4">
            <AnimatedWords text={feature.title} delay={0.4} />
          </h4>

          {/* Description — word by word reveal */}
          <div className="text-sm sm:text-base text-[#666666] leading-relaxed mb-8">
            <AnimatedWords text={feature.desc} delay={0.55} />
          </div>

          {/* Stat chips */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {feature.stats.map((stat, i) => (
              <div
                key={i}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border ${feature.statsBg} transition-all duration-300 hover:scale-[1.03]`}
              >
                <AnimatedCounter
                  value={stat.value}
                  className="text-xs font-bold text-[#171717]"
                />
                <span className="text-[11px] text-[#888] font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <button className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-[#171717] hover:text-rose-600 transition-colors duration-300">
              <span>Explore {feature.name}</span>
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover/btn:translate-x-1.5"
              />
              <motion.span
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className="absolute bottom-0 left-0 h-px w-full bg-rose-500 origin-left"
              />
            </button>
          </motion.div>

          {/* Decorative corner accent */}
          <div
            className={`absolute top-0 ${
              isReversed ? "left-0 rounded-bl-3xl" : "right-0 rounded-br-3xl"
            } w-20 h-20 pointer-events-none opacity-[0.03]`}
            style={{
              background: `radial-gradient(circle at ${
                isReversed ? "0% 0%" : "100% 0%"
              }, ${feature.accentColor}, transparent 70%)`,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature data                                                      */
/* ------------------------------------------------------------------ */
const features = [
  {
    num: "01",
    name: "Acadence Discover",
    title: "AI-assisted topic discovery & feasibility assessment",
    desc: "Identify viable research questions, evaluate department rubric compliance, scope feasibility, and define sharp academic direction before writing a single word.",
    icon: <Compass className="w-5 h-5 text-emerald-600" />,
    iconBg: "bg-emerald-50 border-emerald-200",
    pill: "Discovery Engine",
    dotColor: "bg-emerald-500",
    accentColor: "#10b981",
    image: "/images/feature-discover.jpg",
    statsBg: "bg-emerald-50/60 border-emerald-200/60",
    stats: [
      { value: "98%", label: "Feasibility accuracy" },
      { value: "2min", label: "Avg. assessment" },
    ],
  },
  {
    num: "02",
    name: "Acadence Research",
    title: "Credible literature & verified scholarly sources",
    desc: "Tap into genuine peer-reviewed repositories, generate systematic literature matrix tables, resolve thematic consensus, and format flawless APA/IEEE/Harvard bibliographies.",
    icon: <Library className="w-5 h-5 text-rose-600" />,
    iconBg: "bg-rose-50 border-rose-200",
    pill: "Zero Hallucination",
    dotColor: "bg-rose-500",
    accentColor: "#e11d48",
    image: "/images/feature-research.jpg",
    statsBg: "bg-rose-50/60 border-rose-200/60",
    stats: [
      { value: "0%", label: "Hallucination rate" },
      { value: "50+", label: "Source databases" },
    ],
  },
  {
    num: "03",
    name: "Acadence Intelligence",
    title: "Contextual AI academic mentor & thesis companion",
    desc: "An intelligent companion that retains full institutional memory of your project chapters, critique methodology, detects logical gaps, and guides your argumentation.",
    icon: <Bot className="w-5 h-5 text-purple-600" />,
    iconBg: "bg-purple-50 border-purple-200",
    pill: "Continuous Scaffolding",
    dotColor: "bg-purple-500",
    accentColor: "#9333ea",
    image: "/images/feature-intelligence.jpg",
    statsBg: "bg-purple-50/60 border-purple-200/60",
    stats: [
      { value: "∞", label: "Context memory" },
      { value: "24/7", label: "Availability" },
    ],
  },
  {
    num: "04",
    name: "Acadence Workspace",
    title: "Integrated document editor & chapter tracker",
    desc: "Unified writing environment configured for university dissertations with real-time word limits, supervisor critique annotations, and chapter-by-chapter milestones.",
    icon: <LayoutTemplate className="w-5 h-5 text-blue-600" />,
    iconBg: "bg-blue-50 border-blue-200",
    pill: "Structured Editor",
    dotColor: "bg-blue-500",
    accentColor: "#2563eb",
    image: "/images/feature-workspace.jpg",
    statsBg: "bg-blue-50/60 border-blue-200/60",
    stats: [
      { value: "5+", label: "Format styles" },
      { value: "Live", label: "Collaboration" },
    ],
  },
  {
    num: "05",
    name: "Acadence Studio",
    title: "Practical implementation & engineering documentation",
    desc: "Full assistance for applied technical degrees: software system design, architecture schematics, algorithmic proofs, data flow diagrams, and user acceptance documentation.",
    icon: <Code2 className="w-5 h-5 text-amber-600" />,
    iconBg: "bg-amber-50 border-amber-200",
    pill: "Engineering Support",
    dotColor: "bg-amber-500",
    accentColor: "#d97706",
    image: "/images/feature-studio.jpg",
    statsBg: "bg-amber-50/60 border-amber-200/60",
    stats: [
      { value: "UML", label: "Diagram support" },
      { value: "Auto", label: "Code docs" },
    ],
  },
  {
    num: "06",
    name: "Research Methodology",
    title: "Quantitative, qualitative & mixed-methods rigour",
    desc: "Structured frameworks for empirical questionnaires, sample size calculations, coding thematic transcripts, ANOVA/regression guidance, and credible data interpretation.",
    icon: <PieChart className="w-5 h-5 text-rose-600" />,
    iconBg: "bg-rose-50 border-rose-200",
    pill: "Methodological Rigour",
    dotColor: "bg-rose-500",
    accentColor: "#e11d48",
    image: "/images/feature-methodology.jpg",
    statsBg: "bg-rose-50/60 border-rose-200/60",
    stats: [
      { value: "3", label: "Method types" },
      { value: "SPSS", label: "Compatible" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Main section component                                            */
/* ------------------------------------------------------------------ */
export default function PlatformFeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-[#FAFAF8] overflow-hidden"
    >
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#171717 1px, transparent 1px), linear-gradient(90deg, #171717 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* ============================================ */}
        {/* SECTION HEADER                               */}
        {/* ============================================ */}
        <div className="max-w-3xl mb-20 md:mb-28">
          {/* Pill label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={
              headerInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 15 }
            }
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full bg-white border border-[#E5E5E5] shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#171717] uppercase">
              03 / CAPABILITIES
            </span>
          </motion.div>

          {/* Headline with staggered character animation */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.08] mb-6">
            <AnimatedWords text="Everything your ideas" delay={0.1} />
            <br />
            <span className="font-serif italic font-normal text-rose-600">
              <AnimatedWords text="need to grow." delay={0.35} />
            </span>
          </h2>

          {/* Subheading */}
          <div className="text-base sm:text-lg text-[#555] font-normal leading-relaxed max-w-xl">
            <AnimatedWords
              text="From initial conceptualization to post-defense revisions, each module is built to solve specific intellectual bottlenecks throughout your degree."
              delay={0.5}
            />
          </div>

          {/* Animated decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="mt-8 h-px w-full max-w-xs bg-gradient-to-r from-rose-500/40 via-[#D4D4D4] to-transparent origin-left"
          />
        </div>

        {/* ============================================ */}
        {/* FEATURE ROWS                                 */}
        {/* ============================================ */}
        <div className="flex flex-col gap-16 md:gap-20">
          {features.map((feature, index) => (
            <FeatureRow
              key={feature.num}
              feature={feature}
              index={index}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
