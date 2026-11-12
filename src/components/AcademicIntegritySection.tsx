"use client";

import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Search,
  Lock,
  GraduationCap,
} from "lucide-react";

export default function AcademicIntegritySection() {
  const principles = [
    {
      title: "Credible, Traceable Academic Sources",
      desc: "Every reference connects directly to real DOIs, indexed publications, and validated academic databases. Zero synthetic or fake citations.",
    },
    {
      title: "No Fabricated Empirical Data",
      desc: "Acadence enforces strict ethical parameters. We do not synthesize survey respondents, forge lab measurements, or counterfeit findings.",
    },
    {
      title: "Student Authorship & Ownership",
      desc: "Acadence acts as a rigorous research partner and editorial companion, ensuring you understand every conceptual argument for your defense.",
    },
    {
      title: "Faculty Rubric Harmonization",
      desc: "Designed to meet and exceed institutional ethics requirements, plagiarism detection standards, and academic committee expectations.",
    },
  ];

  return (
    <section
      id="integrity"
      className="relative py-28 md:py-36 bg-[#FFFFFF] border-t border-[#E5E5E5]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Manifest Statement */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#F5F3EE] border border-[#E5E5E5] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-rose-600" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#171717] uppercase">
                06 / RESPONSIBLE INTELLIGENCE
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.08] mb-8">
              Intelligence that{" "}
              <span className="font-serif italic font-normal text-rose-600">
                supports your thinking.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed mb-6">
              Acadence is engineered from the ground up to uphold authentic
              scholarship. We reject generative shortcuts that lead to academic
              dishonesty or institutional disciplinary action.
            </p>
            <p className="text-sm sm:text-base text-[#777777] leading-relaxed">
              University degrees reflect intellectual maturity and disciplined
              problem solving. Acadence elevates your cognitive capacity rather
              than replacing your responsibility.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex items-center gap-4 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-[#FFFFFF] flex items-center justify-center shrink-0 shadow-md">
                <ShieldCheck size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-emerald-950 tracking-tight">
                    Institutional Verification Standard
                  </h4>
                  <span className="text-[9px] font-mono font-bold bg-emerald-600 text-white px-2 py-0.5 rounded-full">
                    CERTIFIED
                  </span>
                </div>
                <p className="text-xs text-emerald-800 mt-0.5">
                  100% compliant with Turnitin, CrossRef, and university research
                  board ethics guidelines.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Pillars of Integrity */}
          <div className="lg:col-span-6 space-y-4">
            {principles.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#F5F3EE] border border-[#E5E5E5] hover:border-emerald-300 hover:bg-[#FFFFFF] transition-all shadow-sm group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-[#FFFFFF] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#171717] tracking-tight mb-1.5 group-hover:text-emerald-950 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

