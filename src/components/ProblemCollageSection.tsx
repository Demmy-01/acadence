"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, AlertCircle, Clock, Search, HelpCircle, FileX, Flame } from "lucide-react";

export default function ProblemCollageSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section
      id="problem"
      className="relative py-28 md:py-36 bg-[#F5F3EE] overflow-hidden border-t border-[#E5E5E5]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Oversized Editorial Copy with Touch of Red */}
          <div className="lg:col-span-5 flex flex-col items-start z-10">
            {/* Small uppercase category label with red accent dot */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-white border border-[#E5E5E5] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-rose-600" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#171717] uppercase">
                01 / THE PROBLEM
              </span>
            </div>

            {/* Oversized Editorial Headline */}
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.08] text-[#171717] mb-8">
              Great ideas{" "}
              <span className="text-[#777777] block sm:inline">
                get lost in
              </span>{" "}
              the <span className="text-rose-600 font-serif italic font-normal">process.</span>
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed mb-10 max-w-lg">
              Every year, students begin with promising ideas but struggle to
              turn them into completed academic projects. From finding the right
              topic to navigating research, methodology and documentation, the
              process often becomes overwhelming.
            </p>

            {/* Small rounded black CTA with red hover touch */}
            <a
              href="#solution"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#171717] text-[#FFFFFF] hover:bg-rose-950 hover:shadow-[0_8px_20px_-3px_rgba(225,29,72,0.35)] transition-all hover:scale-[1.03] shadow-md group border border-transparent hover:border-rose-500/30"
            >
              Discover a better way
              <ArrowUpRight
                size={14}
                className="text-rose-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>

          {/* Right Column: Layered Overlapping Editorial Collage with ACTUAL PHOTOGRAPHY */}
          <div className="lg:col-span-7 relative h-[600px] sm:h-[660px] w-full flex items-center justify-center">
            {/* Ambient Depth glow */}
            <div className="absolute w-80 h-80 bg-gradient-to-tr from-rose-200/30 via-white to-amber-100/30 rounded-full blur-3xl opacity-80 pointer-events-none" />

            {/* Card 1 — Topic Confusion with REAL PHOTO */}
            <div
              onMouseEnter={() => setActiveCard(1)}
              onMouseLeave={() => setActiveCard(null)}
              className={`absolute top-4 left-1 sm:left-4 w-64 sm:w-72 bg-[#FFFFFF] border border-[#E5E5E5] rounded-2xl overflow-hidden shadow-[0_14px_35px_rgba(23,23,23,0.09)] transform -rotate-6 transition-all duration-300 cursor-pointer ${
                activeCard === 1
                  ? "z-40 scale-105 -rotate-2 shadow-2xl ring-2 ring-rose-400/40"
                  : "z-10 hover:z-30 hover:-rotate-3"
              }`}
            >
              {/* Actual photo header */}
              <div className="relative h-28 w-full bg-[#E5E5E5]">
                <Image
                  src="/images/problem-notes.jpg"
                  alt="Scattered notes and unfinished research"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider">
                  DRAFT #04 • SCRATCHPAD
                </div>
                <div className="absolute top-2 right-2 bg-rose-600 text-white px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider shadow-sm">
                  REJECTED
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-1 mb-3">
                  <div className="w-full h-1.5 bg-rose-200 rounded line-through" />
                  <div className="w-4/5 h-1.5 bg-rose-100 rounded line-through" />
                  <div className="w-3/5 h-1.5 bg-[#171717]/20 rounded" />
                </div>
                <div className="pt-2 border-t border-dashed border-[#E5E5E5] flex items-center justify-between">
                  <span className="font-serif italic text-sm text-[#171717] font-medium">
                    "Where do I begin?"
                  </span>
                  <HelpCircle size={14} className="text-rose-500" />
                </div>
              </div>
            </div>

            {/* Card 2 — Research Overload with REAL PHOTO */}
            <div
              onMouseEnter={() => setActiveCard(2)}
              onMouseLeave={() => setActiveCard(null)}
              className={`absolute top-12 right-2 sm:right-6 w-68 sm:w-76 bg-[#FFFFFF] border border-[#E5E5E5] rounded-2xl overflow-hidden shadow-[0_18px_45px_rgba(23,23,23,0.11)] transform rotate-4 transition-all duration-300 cursor-pointer ${
                activeCard === 2
                  ? "z-40 scale-105 rotate-1 shadow-2xl ring-2 ring-amber-400/40"
                  : "z-20 hover:z-30 hover:rotate-2"
              }`}
            >
              <div className="relative h-32 w-full bg-[#E5E5E5]">
                <Image
                  src="/images/problem-journals.jpg"
                  alt="Academic journals and books"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 bg-rose-50 text-rose-700 border border-rose-200 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold flex items-center gap-1 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
                  184 TABS OPEN
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-[#333333] font-medium leading-relaxed mb-3 line-clamp-2">
                  "Conflicting empirical definitions across literature without clear taxonomy..."
                </p>
                <div className="bg-[#F5F3EE] rounded-lg p-2.5 flex items-center justify-between">
                  <span className="font-serif italic text-xs text-[#171717] font-semibold">
                    "Too much information."
                  </span>
                  <Search size={13} className="text-[#777777]" />
                </div>
              </div>
            </div>

            {/* Card 3 — Methodology Challenges with REAL PHOTO */}
            <div
              onMouseEnter={() => setActiveCard(3)}
              onMouseLeave={() => setActiveCard(null)}
              className={`absolute bottom-32 left-3 sm:left-10 w-64 sm:w-72 bg-[#FFFFFF] border border-[#E5E5E5] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(23,23,23,0.1)] transform -rotate-3 transition-all duration-300 cursor-pointer ${
                activeCard === 3
                  ? "z-40 scale-105 rotate-0 shadow-2xl ring-2 ring-blue-400/40"
                  : "z-25 hover:z-30 hover:rotate-0"
              }`}
            >
              <div className="relative h-24 w-full bg-[#E5E5E5]">
                <Image
                  src="/images/problem-methodology.jpg"
                  alt="Analytical data chart"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[9px] font-mono">
                  EMPIRICAL ANALYSIS
                </div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-3 gap-1.5 my-2">
                  <div className="py-1.5 bg-[#F5F3EE] rounded text-center text-[10px] font-mono text-[#777777]">Qual?</div>
                  <div className="py-1.5 bg-[#171717] rounded text-center text-[10px] font-mono text-white font-bold">Quant?</div>
                  <div className="py-1.5 bg-rose-50 border border-rose-200 text-rose-700 rounded text-center text-[10px] font-mono font-bold">Mixed?</div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-[#E5E5E5]">
                  <span className="font-serif italic text-xs text-[#171717] font-medium">
                    "Finding the right approach."
                  </span>
                  <AlertCircle size={13} className="text-amber-600" />
                </div>
              </div>
            </div>

            {/* Card 4 — Deadline Pressure with REAL PHOTO & TOUCH OF RED */}
            <div
              onMouseEnter={() => setActiveCard(4)}
              onMouseLeave={() => setActiveCard(null)}
              className={`absolute bottom-8 right-2 sm:right-6 w-64 sm:w-72 bg-[#171717] text-[#FFFFFF] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(225,29,72,0.22)] transform rotate-6 transition-all duration-300 cursor-pointer border border-rose-600/40 ${
                activeCard === 4
                  ? "z-40 scale-105 rotate-2 shadow-2xl ring-2 ring-rose-500"
                  : "z-30 hover:z-35 hover:rotate-3"
              }`}
            >
              <div className="relative h-24 w-full bg-black/80">
                <Image
                  src="/images/problem-deadline.jpg"
                  alt="Deadline calendar"
                  fill
                  sizes="300px"
                  className="object-cover opacity-65 mix-blend-luminosity"
                />
                <div className="absolute top-2 left-2 bg-rose-600 text-white px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-widest flex items-center gap-1 shadow-sm">
                  <Flame size={11} /> URGENT NOTICE
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-2xl font-bold tracking-tight font-mono text-rose-400">
                    14 Days Left
                  </span>
                  <Clock size={16} className="text-rose-400 animate-pulse" />
                </div>
                <p className="text-[11px] text-[#E5E5E5]/80 mb-3 font-normal">
                  Ch. 03 & 04 incomplete. Defense review panel approaching.
                </p>
                <div className="border-t border-white/20 pt-2 flex items-center justify-between text-xs">
                  <span className="font-serif italic text-xs text-rose-300">
                    "Time is running."
                  </span>
                  <span className="text-[9px] font-mono bg-rose-500/20 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded">
                    DEFENSE IMMINENT
                  </span>
                </div>
              </div>
            </div>

            {/* Card 5 — Missing Direction (Central Focal Overlap) with REAL PHOTO */}
            <div
              onMouseEnter={() => setActiveCard(5)}
              onMouseLeave={() => setActiveCard(null)}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-68 sm:w-80 bg-[#FFFFFF] border-2 border-rose-600 rounded-2xl overflow-hidden shadow-[0_30px_70px_rgba(23,23,23,0.22)] transform -rotate-1 transition-all duration-300 cursor-pointer ${
                activeCard === 5
                  ? "z-50 scale-110 rotate-0 shadow-2xl ring-4 ring-rose-500/20"
                  : "z-35 hover:z-40 hover:scale-102"
              }`}
            >
              <div className="relative h-28 w-full bg-[#E5E5E5]">
                <Image
                  src="/images/problem-thesis.jpg"
                  alt="Thesis manuscript draft"
                  fill
                  sizes="350px"
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 bg-rose-600 text-white px-2.5 py-0.5 rounded text-[9px] font-mono font-bold flex items-center gap-1 shadow-sm">
                  <FileX size={11} /> UNRESOLVED PROPOSAL
                </div>
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-[#171717] px-2 py-0.5 rounded text-[9px] font-mono font-bold">
                  NO ROADMAP
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs sm:text-sm font-bold text-[#171717] mb-3 leading-snug">
                  Proposal has no clear hypothesis, fragmented citations and
                  unclear structural methodology.
                </p>
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-2.5 flex items-center justify-between">
                  <span className="font-serif italic text-sm text-rose-950 font-bold">
                    "Ideas need direction."
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-ping" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
