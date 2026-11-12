"use client";

import React from "react";
import {
  Compass,
  Library,
  Bot,
  LayoutTemplate,
  Code2,
  PieChart,
  ArrowRight,
} from "lucide-react";

export default function PlatformFeaturesSection() {
  const features = [
    {
      num: "01",
      name: "Acadence Discover",
      title: "AI-assisted topic discovery & feasibility assessment",
      desc: "Identify viable research questions, evaluate department rubric compliance, scope feasibility, and define sharp academic direction before writing a single word.",
      icon: <Compass className="w-5 h-5 text-emerald-600" />,
      iconBg: "bg-emerald-50 border-emerald-200",
      pill: "Discovery Engine",
      pillClass: "bg-emerald-50 text-emerald-800 border-emerald-200",
      accentHover: "hover:border-emerald-300",
    },
    {
      num: "02",
      name: "Acadence Research",
      title: "Credible literature & verified scholarly sources",
      desc: "Tap into genuine peer-reviewed repositories, generate systematic literature matrix tables, resolve thematic consensus, and format flawless APA/IEEE/Harvard bibliographies.",
      icon: <Library className="w-5 h-5 text-rose-600" />,
      iconBg: "bg-rose-50 border-rose-200",
      pill: "Zero Hallucination",
      pillClass: "bg-rose-50 text-rose-800 border-rose-200",
      accentHover: "hover:border-rose-300",
    },
    {
      num: "03",
      name: "Acadence Intelligence",
      title: "Contextual AI academic mentor & thesis companion",
      desc: "An intelligent companion that retains full institutional memory of your project chapters, critique methodology, detects logical gaps, and guides your argumentation.",
      icon: <Bot className="w-5 h-5 text-purple-600" />,
      iconBg: "bg-purple-50 border-purple-200",
      pill: "Continuous Scaffolding",
      pillClass: "bg-purple-50 text-purple-800 border-purple-200",
      accentHover: "hover:border-purple-300",
    },
    {
      num: "04",
      name: "Acadence Workspace",
      title: "Integrated document editor & chapter tracker",
      desc: "Unified writing environment configured for university dissertations with real-time word limits, supervisor critique annotations, and chapter-by-chapter milestones.",
      icon: <LayoutTemplate className="w-5 h-5 text-blue-600" />,
      iconBg: "bg-blue-50 border-blue-200",
      pill: "Structured Editor",
      pillClass: "bg-blue-50 text-blue-800 border-blue-200",
      accentHover: "hover:border-blue-300",
    },
    {
      num: "05",
      name: "Acadence Studio",
      title: "Practical implementation & engineering documentation",
      desc: "Full assistance for applied technical degrees: software system design, architecture schematics, algorithmic proofs, data flow diagrams, and user acceptance documentation.",
      icon: <Code2 className="w-5 h-5 text-amber-600" />,
      iconBg: "bg-amber-50 border-amber-200",
      pill: "Engineering Support",
      pillClass: "bg-amber-50 text-amber-800 border-amber-200",
      accentHover: "hover:border-amber-300",
    },
    {
      num: "06",
      name: "Research Methodology",
      title: "Quantitative, qualitative & mixed-methods rigour",
      desc: "Structured frameworks for empirical questionnaires, sample size calculations, coding thematic transcripts, ANOVA/regression guidance, and credible data interpretation.",
      icon: <PieChart className="w-5 h-5 text-rose-600" />,
      iconBg: "bg-rose-50 border-rose-200",
      pill: "Methodological Rigour",
      pillClass: "bg-rose-50 text-rose-800 border-rose-200",
      accentHover: "hover:border-rose-300",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-28 md:py-36 bg-[#F5F3EE] border-t border-[#E5E5E5]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white border border-[#E5E5E5] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-rose-600" />
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#171717] uppercase">
              03 / CAPABILITIES
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.08] mb-6">
            Everything your ideas{" "}
            <span className="font-serif italic font-normal text-rose-600">
              need to grow.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed">
            From initial conceptualization to post-defense revisions, each
            module is built to solve specific intellectual bottlenecks
            throughout your degree.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.num}
              className={`group relative bg-[#FFFFFF] hover:bg-white border border-[#E5E5E5] ${feature.accentHover} rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_50px_rgba(23,23,23,0.08)] hover:-translate-y-1`}
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-11 h-11 rounded-xl ${feature.iconBg} border flex items-center justify-center transition-transform group-hover:scale-105 shadow-xs`}>
                    {feature.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#777777] tracking-widest">
                    {feature.num}
                  </span>
                </div>

                <div className={`inline-block text-[10px] font-mono font-bold uppercase tracking-wider ${feature.pillClass} px-2.5 py-1 rounded border mb-4`}>
                  {feature.pill}
                </div>

                <h3 className="text-lg font-bold text-[#171717] tracking-tight mb-2 group-hover:text-rose-950 transition-colors">
                  {feature.name}
                </h3>
                <h4 className="text-sm font-semibold text-[#333333] mb-3 leading-snug">
                  {feature.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#777777] leading-relaxed font-normal">
                  {feature.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-semibold text-[#171717] group-hover:text-rose-600 transition-colors">
                <span>Explore capability</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform text-rose-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

