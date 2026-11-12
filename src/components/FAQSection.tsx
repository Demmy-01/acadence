"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is Acadence?",
      a: "Acadence is an AI-powered academic research and project development platform designed specifically for university students. It combines structured thesis guidance, peer-reviewed literature discovery, methodology frameworks, chapter synthesis, and defense preparation into one unified workspace.",
    },
    {
      q: "Is Acadence free to use?",
      a: "Yes. Acadence is completely free to use at launch for university students across all participating departments and institutions.",
    },
    {
      q: "Can students from any department use Acadence?",
      a: "Absolutely. While many generic tools focus strictly on Computer Science code or standard essay writing, Acadence is engineered for multiple university disciplines—including Economics, Mass Communication, Business Administration, Engineering, Psychology, Political Science, Biological Sciences, and Education.",
    },
    {
      q: "Can Acadence help me find a project topic?",
      a: "Yes. Acadence Discover analyzes current academic literature, institutional research priorities, and department rubrics to suggest innovative, feasible, and defensible research topics tailored to your exact academic level.",
    },
    {
      q: "Does Acadence automatically write my entire project?",
      a: "No. Acadence is built around authentic scholarship and cognitive scaffolding. It provides literature matrices, theoretical outlines, structural feedback, citation formatting, and critical peer review—ensuring that you remain the author and master your research for your faculty defense.",
    },
    {
      q: "Can I upload my university's project guidelines?",
      a: "Yes. You can upload your department handbook, thesis formatting guidelines, and rubric. Acadence adapts chapter numbering, word count targets, and referencing standards to match your institution.",
    },
    {
      q: "Can I export my work to Word or PDF?",
      a: "Yes. You can export complete dissertations or individual chapters to formatted Microsoft Word (.docx) documents, LaTeX source archives, or publication-ready PDFs with accurate tables of contents, figures, and bibliographic citations.",
    },
    {
      q: "Can Acadence help with software-based projects?",
      a: "Yes. Through Acadence Studio, students in Computer Science, Software Engineering, and related technical fields receive guidance on system architecture design, database schemas, algorithmic logic, testing documentation, and technical reporting.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative py-28 md:py-36 bg-[#F5F3EE] border-t border-[#E5E5E5]"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white border border-[#E5E5E5] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-rose-600" />
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#171717] uppercase">
              07 / QUESTIONS
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.08] mb-6">
            A few things{" "}
            <span className="font-serif italic font-normal text-rose-600">
              worth knowing.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#777777] max-w-xl mx-auto leading-relaxed">
            Straightforward answers about our capabilities, academic ethics,
            and platform access.
          </p>
        </div>

        {/* Minimalist Accordion */}
        <div className="divide-y divide-[#E5E5E5] border-y border-[#E5E5E5]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6 sm:py-8 transition-colors">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className={`text-lg sm:text-xl font-bold tracking-tight transition-colors pr-6 ${
                    isOpen ? "text-rose-950" : "text-[#171717] group-hover:text-rose-600"
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-200 ${
                    isOpen
                      ? "bg-rose-600 border-rose-600 text-white shadow-xs rotate-180"
                      : "border-[#E5E5E5] text-[#171717] group-hover:border-rose-400"
                  }`}>
                    {isOpen ? (
                      <Minus size={14} />
                    ) : (
                      <Plus size={14} />
                    )}
                  </div>
                </button>
                {isOpen && (
                  <div className="mt-4 pr-12 border-l-2 border-rose-600 pl-4 py-1">
                    <p className="text-sm sm:text-base text-[#333333] leading-relaxed font-normal">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

