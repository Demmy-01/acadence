"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  UserCircle,
  Sparkles,
  Layers,
  FilePenLine,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

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

  return (
    <section
      id="how-it-works"
      className="relative py-28 md:py-36 bg-[#FFFFFF] border-t border-[#E5E5E5]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
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

        {/* Step-by-Step Interactive Timeline with IMAGES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Numbered Step Selectors with Thumbnails */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-4 group ${
                  activeStep === idx
                    ? "bg-[#171717] text-[#FFFFFF] border-rose-500/50 shadow-[0_14px_35px_rgba(225,29,72,0.18)] translate-x-1"
                    : "bg-[#F5F3EE] text-[#171717] border-[#E5E5E5] hover:border-rose-300 hover:bg-[#FFFFFF]"
                }`}
              >
                {/* Stage Image Thumbnail */}
                <div className={`relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden shrink-0 border transition-all duration-300 ${
                  activeStep === idx
                    ? "border-rose-500 shadow-md ring-2 ring-rose-500/40"
                    : "border-[#E5E5E5] group-hover:border-rose-300"
                }`}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="80px"
                    className={`object-cover transition-transform duration-500 ${
                      activeStep === idx ? "scale-110" : "opacity-85 group-hover:scale-105 group-hover:opacity-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-black/25" />
                  <span className={`absolute top-1.5 left-1.5 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded shadow-xs ${
                    activeStep === idx
                      ? "bg-rose-600 text-white"
                      : "bg-black/70 text-white"
                  }`}>
                    {step.num}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block mb-0.5 ${
                    activeStep === idx ? "text-rose-400" : "text-rose-600"
                  }`}>
                    {step.tag}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold tracking-tight truncate mb-0.5">
                    {step.title}
                  </h3>
                  <p
                    className={`text-xs truncate ${
                      activeStep === idx
                        ? "text-rose-100/80"
                        : "text-[#777777]"
                    }`}
                  >
                    {step.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Deep-Dive Preview of Active Step with ACTUAL PHOTOGRAPHY BANNER */}
          <div className="lg:col-span-7 bg-[#F5F3EE] border border-rose-200/80 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(23,23,23,0.06)] min-h-[560px] flex flex-col justify-between relative overflow-hidden">
            {/* Top decorative progress bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#E5E5E5]">
              <div
                className="h-full bg-gradient-to-r from-rose-600 to-rose-400 transition-all duration-500"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              />
            </div>

            <div>
              {/* Full-Width Stage Visual Photo Banner */}
              <div className="relative h-52 sm:h-64 w-full rounded-2xl overflow-hidden shadow-md mb-8 border border-[#171717]/10 group">
                <Image
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 650px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                {/* Overlaid Badges and Content */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                  <span className="inline-flex items-center gap-1.5 bg-rose-600/95 backdrop-blur-md text-white text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    PHASE {steps[activeStep].num} // {steps[activeStep].tag}
                  </span>
                  <span className="text-2xl font-mono font-extrabold text-white/50">
                    {steps[activeStep].num} / 05
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-sm mb-1">
                    {steps[activeStep].title}
                  </h4>
                  <p className="text-xs sm:text-sm text-rose-200 font-medium">
                    {steps[activeStep].subtitle}
                  </p>
                </div>
              </div>

              {/* Description & Operational Details */}
              <p className="text-base sm:text-lg text-[#171717] font-medium leading-relaxed mb-6">
                {steps[activeStep].desc}
              </p>

              <div className="bg-[#FFFFFF] border border-rose-200/80 rounded-2xl p-6 mb-8 shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-rose-600" />
                  <span className="text-[11px] font-mono uppercase text-rose-950 tracking-wider font-bold">
                    Operational Deliverables & Mechanics:
                  </span>
                </div>
                <p className="text-sm text-[#333333] leading-relaxed">
                  {steps[activeStep].detail}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-[#E5E5E5]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#171717]">
                  Stage {activeStep + 1} of {steps.length}
                </span>
                <span className="text-xs text-[#777777] font-mono">• {steps[activeStep].tag}</span>
              </div>
              <div className="flex items-center gap-3">
                {activeStep > 0 && (
                  <button
                    onClick={() => setActiveStep((prev) => prev - 1)}
                    className="text-xs font-bold text-[#777777] hover:text-[#171717] transition-colors uppercase tracking-wider"
                  >
                    ← Previous
                  </button>
                )}
                <button
                  onClick={() =>
                    setActiveStep((prev) => (prev + 1) % steps.length)
                  }
                  className="inline-flex items-center gap-2 text-xs font-bold text-rose-600 hover:text-rose-800 transition-colors uppercase tracking-wider bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200"
                >
                  {activeStep === steps.length - 1 ? "Start Over" : "Next Stage"} <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

