"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FileCheck2,
  Library,
  BookOpen,
  Compass,
  ScrollText,
  Activity,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function HeroSection() {
  const [isPaused, setIsPaused] = useState(false);

  // Orbital items around central academic sculpture with vibrant yet scholarly color accents
  const orbitalCards = [
    {
      id: 1,
      title: "Topic Approved",
      meta: "Empirical Validity 98%",
      icon: <FileCheck2 className="w-4 h-4 text-emerald-600" />,
      iconBg: "bg-emerald-50 border-emerald-200",
      accentText: "text-emerald-700",
      dotColor: "bg-emerald-500",
      className: "card-orbit-0",
    },
    {
      id: 2,
      title: "Research Sources Reviewed",
      meta: "42 Peer-reviewed citations",
      icon: <Library className="w-4 h-4 text-blue-600" />,
      iconBg: "bg-blue-50 border-blue-200",
      accentText: "text-blue-700",
      dotColor: "bg-blue-500",
      className: "card-orbit-1",
    },
    {
      id: 3,
      title: "Chapter 01 — In Progress",
      meta: "Literature Review Context",
      icon: <BookOpen className="w-4 h-4 text-rose-600" />,
      iconBg: "bg-rose-50 border-rose-200",
      accentText: "text-rose-700",
      dotColor: "bg-rose-500",
      className: "card-orbit-2",
    },
    {
      id: 4,
      title: "Methodology Selected",
      meta: "Mixed-Methods Synthesis",
      icon: <Compass className="w-4 h-4 text-purple-600" />,
      iconBg: "bg-purple-50 border-purple-200",
      accentText: "text-purple-700",
      dotColor: "bg-purple-500",
      className: "card-orbit-3",
    },
    {
      id: 5,
      title: "Literature Review",
      meta: "Thematic Synthesis Built",
      icon: <ScrollText className="w-4 h-4 text-amber-600" />,
      iconBg: "bg-amber-50 border-amber-200",
      accentText: "text-amber-700",
      dotColor: "bg-amber-500",
      className: "card-orbit-4",
    },
    {
      id: 6,
      title: "Project Progress",
      meta: "Stage 03 / Completion 65%",
      icon: <Activity className="w-4 h-4 text-rose-600" />,
      iconBg: "bg-rose-50 border-rose-200",
      accentText: "text-rose-700",
      dotColor: "bg-rose-600",
      progress: 65,
      className: "card-orbit-5",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[#FFFFFF]"
    >
      {/* Background warm ambient glow + architectural grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-rose-100/40 via-amber-50/30 to-blue-50/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E5E5_1px,transparent_1px),linear-gradient(to_bottom,#E5E5E5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        {/* Editorial pill tag with touch of red */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-rose-200 bg-rose-50/60 backdrop-blur-sm text-xs font-medium tracking-wider text-rose-950 mb-8 uppercase shadow-sm">
          <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
          <span>The Intelligent Academic Workspace</span>
          <span className="text-[10px] font-mono font-bold bg-rose-600 text-white px-2 py-0.5 rounded-full">
            2026 EDITION
          </span>
        </div>

        {/* Oversized Headline with deep editorial crimson italic emphasis */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#171717] leading-[1.08] max-w-5xl">
          Your ideas deserve a{" "}
          <span className="font-serif italic font-normal font-['Instrument_Serif'] tracking-normal text-rose-600 pr-1 relative inline-block">
            better direction.
            <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-gradient-to-r from-rose-500/0 via-rose-500/50 to-rose-500/0 rounded-full" />
          </span>
        </h1>

        {/* Supporting description */}
        <p className="mt-8 text-lg sm:text-xl text-[#333333] max-w-2xl font-normal leading-relaxed">
          Meet Acadence, your intelligent academic workspace. Discover ideas, explore
          research, develop projects and move confidently from your first thought
          to your final submission.
        </p>

        {/* Call to action buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#solution"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold tracking-wide bg-[#171717] text-[#FFFFFF] hover:bg-rose-950 hover:shadow-[0_12px_28px_-5px_rgba(225,29,72,0.3)] transition-all hover:scale-[1.02] flex items-center justify-center gap-2 group border border-transparent hover:border-rose-500/40"
          >
            Start Your Project
            <ArrowRight size={16} className="text-rose-400 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#problem"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold tracking-wide bg-[#F5F3EE] text-[#171717] border border-[#E5E5E5] hover:border-rose-400/50 hover:bg-[#FFFFFF] transition-all"
          >
            Explore Acadence
          </a>
        </div>
      </div>

      {/* Central 3D Academic Sculpture / Monograph with ACTUAL IMAGES & RED ACCENT */}
      <div
        className="relative w-full max-w-5xl h-[440px] sm:h-[500px] mt-12 flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Sculpture Shadow Base & Vibrant Multi-Spectral Ambient Aura */}
        <div className="absolute w-[400px] sm:w-[500px] h-[50px] bg-[#171717]/14 rounded-[100%] blur-2xl translate-y-36 pointer-events-none" />
        <div className="absolute w-72 sm:w-88 h-72 sm:h-88 bg-gradient-to-tr from-rose-500/20 via-amber-400/15 to-blue-500/15 rounded-full blur-3xl pointer-events-none -translate-y-4" />

        {/* 3D Realistic Academic Book / Paper Layer Sculpture with REAL PHOTOGRAPHY */}
        <div className="relative z-20 flex items-center justify-center perspective-[1200px]">
          <div className="relative w-72 sm:w-80 h-[380px] sm:h-[420px] transition-transform duration-700 ease-out hover:rotate-y-6">
            
            {/* Layer 1 - Deep architectural foundation book with real classical library photo */}
            <div className="absolute inset-0 bg-[#E5E5E5] rounded-2xl transform -rotate-6 translate-y-5 translate-x-4 shadow-xl border border-[#171717]/15 overflow-hidden">
              <Image
                src="/images/hero-library-architecture.jpg"
                alt="Classical Library Architecture"
                fill
                sizes="350px"
                className="object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-[10px] font-mono text-white/90">
                <span className="tracking-widest uppercase font-bold text-amber-300">HISTORIC ARCHIVES</span>
                <span className="bg-rose-600 text-white px-2 py-0.5 rounded text-[9px] font-bold">VOL. II</span>
              </div>
            </div>

            {/* Layer 2 - Intermediate research folio with authentic desk study photo */}
            <div className="absolute inset-0 bg-[#F5F3EE] rounded-2xl transform rotate-3 translate-y-2.5 -translate-x-3 shadow-lg border border-[#E5E5E5] overflow-hidden">
              <Image
                src="/images/hero-book-vibrant.jpg"
                alt="Scholarly Research Open Volume"
                fill
                sizes="350px"
                className="object-cover opacity-65"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-black/60 p-5 flex flex-col justify-between">
                <div className="flex justify-between items-center text-[10px] font-mono text-[#171717] font-bold">
                  <span className="bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded border border-[#E5E5E5]">
                    FIG 2.4 — EMPIRICAL TAXONOMY
                  </span>
                  <span className="w-2 h-2 rounded-full bg-rose-600 ring-2 ring-white" />
                </div>
                <div className="bg-black/65 backdrop-blur-xs text-white p-2.5 rounded-lg text-[10px] font-mono flex items-center justify-between">
                  <span>METHODOLOGICAL FRAMEWORK</span>
                  <span className="text-emerald-400 font-bold">VALIDATED</span>
                </div>
              </div>
            </div>

            {/* Layer 3 - Primary Academic Monograph Folio with ACTUAL PHOTOGRAPHY & CRIMSON DETAILS */}
            <div className="absolute inset-0 bg-[#FFFFFF] rounded-2xl shadow-[0_28px_70px_rgba(23,23,23,0.18)] border border-[#E5E5E5] flex flex-col justify-between transform hover:-translate-y-1.5 transition-transform overflow-hidden">
              
              {/* Top 55%: Full-Bleed Genuine Academic Library & Thesis Photograph */}
              <div className="relative h-[215px] sm:h-[235px] w-full overflow-hidden bg-[#171717]">
                <Image
                  src="/images/hero-red-journal.jpg"
                  alt="Acadence Research Volume"
                  fill
                  priority
                  sizes="350px"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Editorial Vignette & Crimson Tint Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

                {/* Real Crimson Red Silk Bookmark Ribbon draping over top edge */}
                <div className="absolute top-0 right-7 w-4 sm:w-5 h-20 bg-gradient-to-b from-rose-500 via-rose-600 to-rose-700 shadow-[0_4px_12px_rgba(225,29,72,0.4)] z-30">
                  <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-black/35 to-transparent" />
                  {/* Ribbon V-notch cut */}
                  <div className="absolute -bottom-2.5 left-0 w-0 h-0 border-l-[8px] sm:border-l-[10px] border-l-rose-700 border-r-[8px] sm:border-r-[10px] border-r-rose-700 border-b-[10px] border-b-transparent" />
                </div>

                {/* Folio Header over photo */}
                <div className="relative z-10 p-4 sm:p-5 flex justify-between items-start">
                  {/* Monogram A with Crimson Editorial Wax Seal */}
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-rose-600/90 backdrop-blur-md border border-rose-300 text-white flex items-center justify-center shadow-lg">
                      <span className="font-serif italic text-2xl font-normal leading-none pr-0.5">
                        A.
                      </span>
                    </div>
                    <span className="text-[11px] font-mono tracking-widest text-white/90 uppercase font-semibold">
                      Acadence
                    </span>
                  </div>

                  {/* Volume Pill Badge */}
                  <span className="text-[10px] tracking-wider uppercase font-mono font-bold text-white bg-rose-600 px-2.5 py-1 rounded-full shadow-md mr-6">
                    VOL. 01
                  </span>
                </div>

                {/* Overlaid Title on the Photograph */}
                <div className="absolute bottom-3 left-4 right-4 z-10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-rose-300 font-semibold block mb-0.5">
                    MASTER DISSERTATION ARCHIVE
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug drop-shadow-sm">
                    Structural Methodology & Synthesis
                  </h3>
                </div>
              </div>

              {/* Bottom 45%: Warm Editorial Colophon with Real Inset Photo & Red Accents */}
              <div className="p-4 sm:p-5 bg-gradient-to-b from-[#FFFFFF] to-[#F5F3EE] flex-1 flex flex-col justify-between">
                
                {/* Student / Scholar Inset Card with Green Verified Status */}
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-[#E5E5E5] shadow-xs">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-rose-200">
                    <Image
                      src="/images/hero-scholar.jpg"
                      alt="Student Research Collaboration"
                      fill
                      sizes="60px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#171717] truncate">
                        University Candidate
                      </span>
                      <span className="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                        100% ORIGINAL
                      </span>
                    </div>
                    <p className="text-[10px] text-rose-600 font-medium truncate flex items-center gap-1 mt-0.5">
                      <Sparkles size={10} className="text-rose-500 shrink-0" />
                      42 Scopus & PubMed Citations
                    </p>
                  </div>
                </div>

                {/* Bottom Colophon with Crimson Origin Stamp */}
                <div className="border-t border-[#E5E5E5] pt-2.5 flex justify-between items-center text-[10px] font-mono">
                  <span className="flex items-center gap-1.5 text-[#333333] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
                    INDEXED 2026
                  </span>
                  <span className="text-rose-700 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200 shadow-2xs">
                    ORIGINALIA • PEER APPROVED
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Orbiting Glassmorphism Translucent Interface Cards with Lively Colored Badges */}
        {orbitalCards.map((card) => {
          return (
            <div
              key={card.id}
              className={`absolute z-30 pointer-events-auto ${card.className}`}
              style={{
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
              <div className="group bg-[#FFFFFF]/95 hover:bg-[#FFFFFF] backdrop-blur-md border border-[#E5E5E5] hover:border-[#171717]/30 shadow-[0_10px_35px_rgba(0,0,0,0.07)] hover:shadow-[0_16px_45px_rgba(23,23,23,0.14)] rounded-xl px-4 py-3 flex items-center gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div
                  className={`w-8 h-8 rounded-lg ${card.iconBg} border flex items-center justify-center shrink-0 shadow-xs`}
                >
                  {card.icon}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${card.dotColor}`} />
                    <p className="text-xs font-bold text-[#171717] tracking-tight leading-tight">
                      {card.title}
                    </p>
                  </div>
                  <p className={`text-[10px] ${card.accentText} font-medium tracking-tight mt-0.5`}>
                    {card.meta}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
