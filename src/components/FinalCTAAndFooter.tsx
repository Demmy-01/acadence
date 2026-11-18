"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import GlassLogo from "@/components/GlassLogo";

export default function FinalCTAAndFooter() {
  return (
    <>
      {/* SECTION NINE — FINAL CTA */}
      <section className="relative py-32 md:py-44 bg-[#FFFFFF] border-t border-[#E5E5E5] overflow-hidden">
        {/* Subtle decorative radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#F5F3EE] rounded-full blur-[140px] opacity-70 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-200 bg-rose-50/70 text-xs font-mono font-bold tracking-wider text-rose-950 mb-8 uppercase shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
            Begin Your Thesis Journey
          </div>

          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#171717] leading-[1.05] mb-8">
            Every great idea deserves the{" "}
            <span className="font-serif italic font-normal text-rose-600 block sm:inline">
              right beginning.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-[#333333] max-w-2xl mx-auto font-normal leading-relaxed mb-12">
            Your next big idea starts here. Give it the intelligence, structure
            and direction it deserves.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="w-full sm:w-auto px-10 py-4 rounded-full text-sm font-semibold tracking-wide bg-[#171717] text-[#FFFFFF] hover:bg-rose-950 hover:shadow-[0_12px_32px_rgba(225,29,72,0.3)] transition-all hover:scale-[1.03] flex items-center justify-center gap-2 group border border-transparent hover:border-rose-500/30"
            >
              Get Started with Acadence
              <ArrowRight size={16} className="text-rose-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/platform"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold tracking-wide bg-[#F5F3EE] text-[#171717] border border-[#E5E5E5] hover:border-rose-400/50 hover:bg-[#FFFFFF] transition-all"
            >
              See Workflow & Platform →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION TEN — MINIMAL EDITORIAL FOOTER */}
      <footer className="bg-[#F5F3EE] border-t border-[#E5E5E5] py-16 md:py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#E5E5E5]">
            {/* Brand Column */}
            <div className="md:col-span-5 flex flex-col items-start">
              <div className="mb-6">
                <GlassLogo href="/" size="md" textColor="dark" />
              </div>
              <p className="text-base text-[#171717] font-serif italic mb-4">
                Intelligence behind every idea.
              </p>
              <p className="text-xs text-[#777777] max-w-sm leading-relaxed">
                Empowering university students across disciplines with
                principled AI guidance, empirical research rigour, and complete
                academic documentation.
              </p>
            </div>

            {/* Navigation Column */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#171717] font-bold mb-5">
                Navigation
              </h4>
              <ul className="space-y-3 text-sm text-[#777777]">
                <li>
                  <Link href="/" className="hover:text-[#171717] transition-colors">
                    Home Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#problem"
                    className="hover:text-[#171717] transition-colors"
                  >
                    The Problem
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#solution"
                    className="hover:text-[#171717] transition-colors"
                  >
                    Solution Workspace
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#disciplines"
                    className="hover:text-[#171717] transition-colors"
                  >
                    Explore Disciplines (Marquee)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/platform#features"
                    className="hover:text-[#171717] transition-colors"
                  >
                    Platform Capabilities
                  </Link>
                </li>
                <li>
                  <Link
                    href="/platform#how-it-works"
                    className="hover:text-[#171717] transition-colors"
                  >
                    The 5-Stage Process
                  </Link>
                </li>
                <li>
                  <Link
                    href="/platform#faq"
                    className="hover:text-[#171717] transition-colors"
                  >
                    Frequently Asked Questions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company / Legal Column */}
            <div className="md:col-span-4">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#171717] font-bold mb-5">
                Responsible Intelligence
              </h4>
              <ul className="space-y-3 text-sm text-[#777777] mb-8">
                <li>
                  <Link href="/platform#integrity" className="hover:text-[#171717] transition-colors">
                    Academic Ethics Policy
                  </Link>
                </li>
                <li>
                  <Link href="/platform#integrity" className="hover:text-[#171717] transition-colors">
                    Faculty & Supervisor Transparency
                  </Link>
                </li>
                <li>
                  <a href="#integrity" className="hover:text-[#171717] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#integrity" className="hover:text-[#171717] transition-colors">
                    Terms of Academic Service
                  </a>
                </li>
              </ul>
              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E5E5E5] text-xs text-[#333333]">
                <p className="font-semibold text-[#171717] mb-1">
                  Institutional Access
                </p>
                <p className="text-[11px] text-[#777777]">
                  University faculty and department heads can request custom
                  rubric integrations at{" "}
                  <span className="font-mono text-[#171717]">
                    faculty@acadence.org
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#777777] gap-4">
            <p>© 2026 Acadence Inc. All rights reserved.</p>
            <p className="font-mono text-[11px]">
              ENGINEERED FOR AUTHENTIC SCHOLARSHIP
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
