"use client";

import React, { useState } from "react";
import {
  FileText,
  Sparkles,
  Layers,
  CheckCircle2,
  FolderKanban,
  Send,
  Search,
  Bookmark,
  ChevronRight,
  Maximize2,
  SlidersHorizontal,
} from "lucide-react";

export default function SolutionWorkspaceSection() {
  const [activeTab, setActiveTab] = useState<"editor" | "research" | "ai">("editor");

  return (
    <section
      id="solution"
      className="relative py-28 md:py-36 bg-[#FFFFFF] overflow-hidden border-t border-[#E5E5E5]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white border border-[#E5E5E5] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-rose-600" />
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#171717] uppercase">
              02 / THE SOLUTION
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.08] mb-6">
            A clearer way to turn{" "}
            <span className="font-serif italic font-normal text-[#171717]">
              ideas into impact.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed">
            Acadence brings research guidance, project development, academic
            writing and intelligent assistance into one seamless workspace,
            helping students move forward with clarity and confidence.
          </p>
        </div>

        {/* Realistic High-Fidelity Acadence Workspace Preview */}
        <div className="relative rounded-2xl border border-[#171717]/15 bg-[#FFFFFF] shadow-[0_30px_90px_rgba(23,23,23,0.12)] overflow-hidden">
          {/* Top Window Chrome / Bar */}
          <div className="h-12 bg-[#F5F3EE] border-b border-[#E5E5E5] px-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500 shadow-xs" />
              <div className="w-3 h-3 rounded-full bg-amber-400 shadow-xs" />
              <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-xs" />
              <span className="ml-4 text-xs font-mono text-[#777777] hidden sm:inline">
                acadence-workspace / project-v2.6.ac
              </span>
            </div>
            {/* Center Status */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-rose-200 text-[11px] font-medium text-[#171717] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
              Contextual Intelligence Active • Supervisor Ready
            </div>
            {/* Window controls */}
            <div className="flex items-center gap-3 text-[#777777]">
              <SlidersHorizontal size={14} className="cursor-pointer hover:text-[#171717]" />
              <Maximize2 size={14} className="cursor-pointer hover:text-[#171717]" />
            </div>
          </div>

          {/* Main Workspace Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
            {/* Left Sidebar: Chapter & Document Navigation */}
            <div className="lg:col-span-3 border-r border-[#E5E5E5] p-5 bg-[#FFFFFF] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <FolderKanban size={16} className="text-rose-600" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#171717]">
                      Project Structure
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-rose-50 text-rose-700 border border-rose-200 font-bold px-2 py-0.5 rounded">
                    65% Done
                  </span>
                </div>

                {/* Chapter List */}
                <div className="space-y-1">
                  {[
                    {
                      name: "Ch. 01 — Introduction & Scope",
                      status: "Approved",
                      done: true,
                    },
                    {
                      name: "Ch. 02 — Literature Review",
                      status: "Reviewing",
                      active: true,
                    },
                    {
                      name: "Ch. 03 — Research Methodology",
                      status: "In Progress",
                      done: false,
                    },
                    {
                      name: "Ch. 04 — Implementation / Data",
                      status: "Queued",
                      done: false,
                    },
                    {
                      name: "Ch. 05 — Discussion & Conclusion",
                      status: "Drafting",
                      done: false,
                    },
                  ].map((chapter, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-lg text-xs font-medium cursor-pointer transition-all flex items-center justify-between ${
                        chapter.active
                          ? "bg-[#171717] text-[#FFFFFF] shadow-md ring-1 ring-rose-500/30"
                          : "text-[#333333] hover:bg-[#F5F3EE]"
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        {chapter.done ? (
                          <CheckCircle2 size={13} className="text-emerald-500" />
                        ) : (
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              chapter.active ? "bg-rose-400" : "bg-[#777777]"
                            }`}
                          />
                        )}
                        <span className="truncate">{chapter.name}</span>
                      </div>
                      <span
                        className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                          chapter.active
                            ? "bg-rose-600 text-white font-bold"
                            : "bg-[#E5E5E5] text-[#777777]"
                        }`}
                      >
                        {chapter.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research Metrics / Bottom Sidebar */}
              <div className="pt-6 border-t border-[#E5E5E5] mt-6">
                <p className="text-[10px] font-mono uppercase text-[#777777] mb-2">
                  Academic Verification
                </p>
                <div className="p-3 rounded-lg bg-emerald-50/50 border border-emerald-200 space-y-2">
                  <div className="flex justify-between text-xs font-medium text-[#171717]">
                    <span>Source Credibility</span>
                    <span className="font-mono text-emerald-700 font-bold">99.4%</span>
                  </div>
                  <div className="w-full bg-emerald-200/60 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-full w-[99%]" />
                  </div>
                  <p className="text-[10px] text-emerald-800">
                    All 38 cited publications indexed in Scopus / WoS / PubMed.
                  </p>
                </div>
              </div>
            </div>

            {/* Central Document Editor Area */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-[#FFFFFF] border-r border-[#E5E5E5] flex flex-col justify-between">
              <div>
                {/* Editor Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5] mb-6">
                  <div className="flex items-center gap-2 text-xs text-[#777777]">
                    <FileText size={14} className="text-rose-600" />
                    <span className="font-semibold text-[#171717]">CHAPTER 02 — THEMATIC SYNTHESIS</span>
                  </div>
                  <span className="text-[10px] font-mono text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                    WORD COUNT: 3,420
                  </span>
                </div>

                {/* Editor Typography / Manuscript Content */}
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#171717]">
                    2.3 Comparative Evaluation of Multi-Modal Architecture in
                    Adaptive Learning Systems
                  </h3>
                  <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
                    Prior empirical investigations (Adewale et al., 2024; Chen &
                    Morrison, 2025) demonstrate that pedagogical retention
                    increases by 31.4% when contextual scaffolding adapts to the
                    learner's developmental pace.
                  </p>

                  {/* Highlighted Insight Block */}
                  <div className="p-4 rounded-xl bg-rose-50/70 border-l-4 border-rose-600 my-4 shadow-2xs">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Sparkles size={14} className="text-rose-600" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-rose-950">
                        Acadence Synthesis Note
                      </span>
                    </div>
                    <p className="text-xs text-[#333333] leading-relaxed">
                      "Ensure your bridge between Chapter 02 and your methodology
                      in Chapter 03 explicitly justifies why qualitative
                      triangulation addresses the sample bias noted in Henderson
                      (2023)."
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
                    Consequently, methodological coherence necessitates a
                    controlled evaluation matrix incorporating stratified
                    sampling across distinct institutional tiers...
                  </p>
                </div>
              </div>

              {/* Editor bottom status */}
              <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] text-[#777777]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Auto-saved 2 mins ago
                </span>
                <span className="font-mono text-[#171717] bg-[#F5F3EE] px-2 py-0.5 rounded">APA 7th Edition</span>
              </div>
            </div>

            {/* Right Panel: Contextual AI Academic Companion & Research Library */}
            <div className="lg:col-span-4 p-5 bg-[#F5F3EE] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5] mb-5">
                  <div className="flex items-center gap-2">
                    <Sparkles size={15} className="text-rose-600" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#171717]">
                      Acadence Companion
                    </span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
                </div>

                {/* AI Dialogue Streams */}
                <div className="space-y-4">
                  {/* User Query */}
                  <div className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#E5E5E5] text-xs text-[#171717] ml-4 shadow-sm">
                    <p className="font-medium">
                      "How do I structure my research gap for the faculty
                      review committee?"
                    </p>
                  </div>

                  {/* AI Response */}
                  <div className="bg-[#FFFFFF] p-4 rounded-xl border border-rose-200/80 text-xs text-[#171717] mr-2 shadow-sm bg-gradient-to-b from-white to-rose-50/20">
                    <div className="flex items-center gap-1.5 mb-2 text-rose-700 font-bold text-[11px]">
                      <Sparkles size={12} className="text-rose-600" /> Acadence Recommendation
                    </div>
                    <p className="text-[#333333] leading-relaxed mb-3">
                      Frame your gap using the Three-Pillar Formula:
                    </p>
                    <ol className="list-decimal pl-4 space-y-1 text-[#333333]">
                      <li>
                        <strong>Established Consensus:</strong> What current
                        studies prove.
                      </li>
                      <li>
                        <strong>The Empirical Friction:</strong> The unanswered
                        operational contradiction.
                      </li>
                      <li>
                        <strong>Your Direct Contribution:</strong> Exactly how
                        your project bridges this divide.
                      </li>
                    </ol>
                    <div className="mt-3 pt-2 border-t border-[#E5E5E5] flex items-center justify-between">
                      <span className="text-[10px] text-[#777777]">
                        Based on your thesis rubric
                      </span>
                      <button className="text-[10px] font-bold text-rose-600 hover:text-rose-800 hover:underline">
                        Insert Template →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Input Dock */}
              <div className="mt-6 pt-4 border-t border-[#E5E5E5]">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ask Acadence to critique, format or cite..."
                    className="w-full bg-[#FFFFFF] border border-[#E5E5E5] focus:border-rose-500 rounded-full py-2.5 pl-4 pr-10 text-xs text-[#171717] placeholder-[#777777] focus:outline-none transition-colors"
                  />
                  <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-rose-600 hover:bg-rose-700 text-[#FFFFFF] rounded-full flex items-center justify-center transition-colors shadow-xs">
                    <Send size={11} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

