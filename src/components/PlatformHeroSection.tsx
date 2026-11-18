"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface MarqueeItem {
  id: number;
  image: string;
  title: string;
  category: string;
}

const marqueeItems: MarqueeItem[] = [
  {
    id: 1,
    image: "/images/feature-discover.jpg",
    title: "Topic Discovery",
    category: "RESEARCH SCOPING",
  },
  {
    id: 2,
    image: "/images/stage-01-onboarding.jpg",
    title: "Student Onboarding",
    category: "FACULTY CALIBRATION",
  },
  {
    id: 3,
    image: "/images/feature-research.jpg",
    title: "Literature Matrix",
    category: "ZERO HALLUCINATIONS",
  },
  {
    id: 4,
    image: "/images/stage-02-discovery.jpg",
    title: "Hypothesis Testing",
    category: "METHODOLOGICAL RIGOR",
  },
  {
    id: 5,
    image: "/images/feature-workspace.jpg",
    title: "Structured Editor",
    category: "DISSERTATION WORKSPACE",
  },
  {
    id: 6,
    image: "/images/stage-03-foundation.jpg",
    title: "Theoretical Framework",
    category: "PARADIGM SYNTHESIS",
  },
  {
    id: 7,
    image: "/images/feature-intelligence.jpg",
    title: "AI Academic Mentor",
    category: "CONTINUOUS SCAFFOLDING",
  },
  {
    id: 8,
    image: "/images/stage-04-develop.jpg",
    title: "Chapter Drafting",
    category: "SUPERVISOR ALIGNMENT",
  },
  {
    id: 9,
    image: "/images/feature-studio.jpg",
    title: "Technical Proofs",
    category: "ENGINEERING DOCS",
  },
  {
    id: 10,
    image: "/images/stage-05-submission.jpg",
    title: "Final Submission",
    category: "DEFENSE READY",
  },
  {
    id: 11,
    image: "/images/hero-scholar.jpg",
    title: "Scholarly Research",
    category: "PEER REVIEWED",
  },
  {
    id: 12,
    image: "/images/hero-red-journal.jpg",
    title: "Monograph Publishing",
    category: "DOI VERIFIED",
  },
];

export default function PlatformHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Position offset for the infinite marquee
  const [offset, setOffset] = useState(0);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const animFrameId = useRef<number | null>(null);

  // Base marquee step speed
  const baseSpeed = 1.1;

  // Animation loop with cursor speed modulation
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 16.67; // Normalize to 60fps
      lastTime = currentTime;

      if (!isDragging) {
        setOffset((prev) => {
          // Calculate movement based on cursor speed multiplier
          const move = baseSpeed * speedMultiplier * delta;
          const newOffset = prev + move;

          // Seamless loop calculation: cards total width
          const cardWidth = 260; // 240px card + 20px gap
          const singleSetWidth = cardWidth * marqueeItems.length;

          if (newOffset >= singleSetWidth) {
            return newOffset - singleSetWidth;
          }
          if (newOffset <= 0) {
            return newOffset + singleSetWidth;
          }
          return newOffset;
        });
      }

      animFrameId.current = requestAnimationFrame(loop);
    };

    animFrameId.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [speedMultiplier, isDragging]);

  // Modulate speed based on cursor position across the section
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - rect.left) / rect.width; // 0 to 1

    // Center is 0.5 (normal speed = 1)
    // Moving left (< 0.5) accelerates reverse or slows down
    // Moving right (> 0.5) accelerates forward up to 4.5x!
    const distFromCenter = relativeX - 0.5; // -0.5 to +0.5

    if (distFromCenter > 0) {
      // Faster forward
      setSpeedMultiplier(1 + distFromCenter * 6);
    } else {
      // Reversed or faster backwards
      setSpeedMultiplier(-1 + distFromCenter * 6);
    }
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setSpeedMultiplier(1); // Return smoothly to base speed
    setIsDragging(false);
  };

  // Mouse drag support for fast scrubbing
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartOffset.current = offset;
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX.current;
    setOffset(dragStartOffset.current - deltaX * 1.5);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Wheel horizontal scroll acceleration
  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > 0 || Math.abs(e.deltaY) > 0) {
      const delta = e.deltaX !== 0 ? e.deltaX : e.deltaY;
      setOffset((prev) => prev + delta * 0.8);
    }
  };

  // Duplicate items twice for seamless infinite scrolling
  const displayItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#FAF8F5] overflow-hidden select-none border-b border-[#EAE7DF]">
      {/* Subtle warm background gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-rose-100/40 via-amber-50/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* 01. TOP PILL BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/60 shadow-2xs"
        >
          <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-wider text-amber-900 uppercase">
            Join over 100,000 university scholars
          </span>
        </motion.div>

        {/* 02. MAIN HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#171717] leading-[1.08] mb-6 max-w-4xl mx-auto"
        >
          Engage Research with{" "}
          <span className="font-serif italic font-normal text-rose-600">
            Absolute Rigor.
          </span>
        </motion.h1>

        {/* 03. SUBHEADLINE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-[#444444] font-normal leading-relaxed max-w-2xl mx-auto mb-12"
        >
          Explore the complete operational intelligence engine: rubric compliance,
          peer-reviewed literature matrices, chapter drafting, and responsible AI ethics.
        </motion.p>
      </div>

      {/* ========================================================= */}
      {/* 04. CONCAVE 3D CURVED MARQUEE CAROUSEL                    */}
      {/* ========================================================= */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseMoveCapture={handleDragMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
        className="relative w-full my-4 py-8 overflow-hidden cursor-grab active:cursor-grabbing"
        style={{
          perspective: "1200px",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        {/* Animated Marquee Track with Concave Curve Projection */}
        <div
          ref={trackRef}
          className="flex gap-5 w-max will-change-transform"
          style={{
            transform: `translateX(-${offset}px)`,
            transition: isDragging ? "none" : "transform 0.05s linear",
          }}
        >
          {displayItems.map((item, idx) => {
            // Calculate a gentle curved arc for cards:
            // Center cards sit slightly lower; edge cards curve upward and tilt gently
            const positionInSet = idx % marqueeItems.length;
            const centerDistance = Math.abs(positionInSet - marqueeItems.length / 2);
            const verticalLift = centerDistance * 3.5; // Curves upwards towards edges
            const tilt = (positionInSet - marqueeItems.length / 2) * 1.2; // Subtle angle

            return (
              <div
                key={`${item.id}-${idx}`}
                style={{
                  transform: `translateY(${verticalLift}px) rotate(${tilt}deg)`,
                  transition: "transform 0.4s ease-out",
                }}
                className="group relative w-52 sm:w-64 h-72 sm:h-88 rounded-2xl sm:rounded-3xl overflow-hidden shrink-0 shadow-lg border border-black/10 bg-[#171717] select-none hover:scale-105 hover:z-30 transition-all duration-300"
              >
                {/* Full-bleed photography */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="260px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark readability gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 z-10" />

                {/* Card Tag Top Left */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    {item.category}
                  </span>
                </div>

                {/* Card Title Bottom */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug drop-shadow-sm">
                    {item.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 05. CALL TO ACTION WITH DOODLE ARROW                      */}
      {/* ========================================================= */}
      <div className="max-w-md mx-auto px-6 text-center mt-6 relative z-20">
        <div className="relative inline-block">
          {/* Handwritten Annotation Left: "it's free" */}
          <div className="absolute -left-20 sm:-left-24 top-1/2 -translate-y-1/2 hidden xs:flex items-center gap-1.5 pointer-events-none">
            <span className="font-serif italic text-sm sm:text-base text-[#555555] rotate-[-8deg]">
              It&apos;s free
            </span>
            <svg
              className="w-6 h-6 text-rose-500 transform rotate-[-20deg]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>

          {/* Main Action Button */}
          <Link
            href="/signup"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm tracking-wide shadow-[0_12px_32px_rgba(225,29,72,0.35)] hover:shadow-[0_16px_40px_rgba(225,29,72,0.45)] hover:scale-105 transition-all duration-300"
          >
            <span>Get Started</span>
            <ArrowRight size={16} />
          </Link>

          {/* Handwritten Annotation Right: "Elevate your research" */}
          <div className="absolute -right-32 sm:-right-40 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 pointer-events-none">
            <svg
              className="w-8 h-8 text-rose-500 transform -scale-x-100 rotate-[-45deg]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="font-serif italic text-sm sm:text-base text-[#555555] rotate-[6deg] text-left">
              Elevate your research
            </span>
          </div>
        </div>

        {/* Speed Hint Under Marquee */}
        <p className="text-[11px] font-mono text-[#888888] mt-4 flex items-center justify-center gap-1.5">
          <Sparkles size={12} className="text-amber-500" />
          <span>Move cursor across the carousel to adjust scroll speed</span>
        </p>
      </div>
    </section>
  );
}

