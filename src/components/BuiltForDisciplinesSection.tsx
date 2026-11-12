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
  Layers,
  ArrowRight,
} from "lucide-react";

export default function BuiltForDisciplinesSection() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<number>(0);

  const disciplines = [
    {
      name: "Computer Science",
      icon: <Code className="w-5 h-5 text-blue-600" />,
      tag: "Software Engineering & AI",
      colorBg: "bg-blue-50 border-blue-200",
      focus:
        "System architecture diagrams, algorithmic complexity, API documentation, software testing proofs, and full technical dissertations.",
    },
    {
      name: "Mass Communication",
      icon: <Radio className="w-5 h-5 text-rose-600" />,
      tag: "Media & Journalism",
      colorBg: "bg-rose-50 border-rose-200",
      focus:
        "Content analysis, framing theory matrices, survey discourse evaluations, and digital media audience perception studies.",
    },
    {
      name: "Business Administration",
      icon: <Briefcase className="w-5 h-5 text-amber-600" />,
      tag: "Management & Strategy",
      colorBg: "bg-amber-50 border-amber-200",
      focus:
        "Strategic feasibility, SWOT/PESTEL matrices, organizational behavior case studies, and corporate governance analyses.",
    },
    {
      name: "Accounting",
      icon: <Calculator className="w-5 h-5 text-emerald-600" />,
      tag: "Audit & Financial Forensics",
      colorBg: "bg-emerald-50 border-emerald-200",
      focus:
        "IFRS/GAAP compliance methodologies, ratio analysis, forensic audit models, and financial performance regression data.",
    },
    {
      name: "Economics",
      icon: <TrendingUp className="w-5 h-5 text-indigo-600" />,
      tag: "Econometrics & Policy",
      colorBg: "bg-indigo-50 border-indigo-200",
      focus:
        "Econometric time-series modeling, fiscal policy simulations, panel data regression frameworks, and macroeconomic impact evaluations.",
    },
    {
      name: "Engineering",
      icon: <Cpu className="w-5 h-5 text-orange-600" />,
      tag: "Mechanical, Civil & Electrical",
      colorBg: "bg-orange-50 border-orange-200",
      focus:
        "CAD calculations, finite element models, structural safety documentation, materials stress analysis, and prototype schematics.",
    },
    {
      name: "Psychology",
      icon: <Brain className="w-5 h-5 text-purple-600" />,
      tag: "Cognitive & Behavioral",
      colorBg: "bg-purple-50 border-purple-200",
      focus:
        "Psychometric questionnaire validation, Likert scale statistical breakdowns, experimental control ethics, and behavioral observations.",
    },
    {
      name: "Political Science",
      icon: <Vote className="w-5 h-5 text-slate-700" />,
      tag: "International Relations & Policy",
      colorBg: "bg-slate-100 border-slate-300",
      focus:
        "Qualitative policy evaluations, geopolitical comparative studies, legislative analysis, and institutional power dynamics.",
    },
    {
      name: "Biological Sciences",
      icon: <Dna className="w-5 h-5 text-teal-600" />,
      tag: "Microbiology & Biochemistry",
      colorBg: "bg-teal-50 border-teal-200",
      focus:
        "Laboratory protocol writeups, statistical hypothesis testing (p-values, ANOVA), bioinformatics workflows, and clinical data interpretation.",
    },
    {
      name: "Education",
      icon: <GraduationCap className="w-5 h-5 text-rose-500" />,
      tag: "Pedagogy & Curriculum",
      colorBg: "bg-rose-50 border-rose-200",
      focus:
        "Action research frameworks, instructional efficacy testing, student assessment metrics, and classroom intervention studies.",
    },
  ];

  return (
    <section
      id="disciplines"
      className="relative py-28 md:py-36 bg-[#F5F3EE] border-t border-[#E5E5E5]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white border border-[#E5E5E5] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-rose-600" />
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

        {/* Interactive Discipline Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {disciplines.map((d, index) => (
            <button
              key={d.name}
              onClick={() => setSelectedDiscipline(index)}
              className={`p-5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between h-36 ${
                selectedDiscipline === index
                  ? "bg-[#171717] text-[#FFFFFF] border-rose-500/50 shadow-[0_12px_28px_rgba(225,29,72,0.18)] scale-[1.03]"
                  : "bg-[#FFFFFF] text-[#171717] border-[#E5E5E5] hover:border-rose-300 hover:bg-[#FFFFFF]"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
                  selectedDiscipline === index
                    ? "bg-rose-600 border-rose-500 text-white shadow-xs"
                    : `${d.colorBg}`
                }`}
              >
                {selectedDiscipline === index ? (
                  <span className="text-white brightness-200">{d.icon}</span>
                ) : (
                  d.icon
                )}
              </div>
              <div>
                <p className={`text-xs font-mono mb-0.5 ${selectedDiscipline === index ? "text-rose-200" : "text-[#777777]"}`}>
                  {d.tag}
                </p>
                <p className="text-sm font-bold tracking-tight leading-snug">
                  {d.name}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Discipline Tailored Feature Showcase */}
        <div className="bg-[#FFFFFF] border border-rose-200/80 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-sm">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono text-rose-800 mb-4 font-bold shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
              <span>Department Context:</span>
              <strong className="text-rose-950">
                {disciplines[selectedDiscipline].name}
              </strong>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] mb-3">
              Tailored Methodological Framework
            </h3>
            <p className="text-sm sm:text-base text-[#333333] leading-relaxed">
              {disciplines[selectedDiscipline].focus}
            </p>
          </div>
          <a
            href="#solution"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#171717] text-[#FFFFFF] hover:bg-rose-950 hover:shadow-[0_8px_20px_rgba(225,29,72,0.3)] transition-all shrink-0 border border-transparent hover:border-rose-500/30"
          >
            Launch in {disciplines[selectedDiscipline].name}
            <ArrowRight size={14} className="text-rose-400" />
          </a>
        </div>
      </div>
    </section>
  );
}

