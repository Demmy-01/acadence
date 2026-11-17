"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface GlassLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showWordmark?: boolean;
  textColor?: "dark" | "light";
  href?: string;
  className?: string;
  accentDot?: boolean;
}

export default function GlassLogo({
  size = "md",
  showWordmark = true,
  textColor = "dark",
  href = "/",
  className = "",
  accentDot = true,
}: GlassLogoProps) {
  // Dimensions mapping
  const sizeConfig = {
    sm: {
      box: "w-8 h-8 rounded-[10px]",
      innerRim: "inset-[2px] rounded-[8px]",
      imgSize: 20,
      textSize: "text-lg",
      dot: "w-1.5 h-1.5",
      gap: "gap-2.5",
    },
    md: {
      box: "w-10 h-10 rounded-[14px]",
      innerRim: "inset-[2.5px] rounded-[11px]",
      imgSize: 26,
      textSize: "text-xl",
      dot: "w-1.5 h-1.5",
      gap: "gap-3",
    },
    lg: {
      box: "w-12 h-12 rounded-[16px]",
      innerRim: "inset-[3px] rounded-[13px]",
      imgSize: 30,
      textSize: "text-2xl",
      dot: "w-2 h-2",
      gap: "gap-3.5",
    },
    xl: {
      box: "w-16 h-16 rounded-[22px]",
      innerRim: "inset-[4px] rounded-[18px]",
      imgSize: 42,
      textSize: "text-3xl",
      dot: "w-2.5 h-2.5",
      gap: "gap-4",
    },
  };

  const current = sizeConfig[size];

  const logoIcon = (
    <div
      className={`relative ${current.box} shrink-0 p-1 flex items-center justify-center select-none transition-all duration-300 group-hover:scale-105 ${className}`}
      style={{
        // 3D Thick Glassmorphic Squircle Styling
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(240, 246, 252, 0.45) 45%, rgba(255, 255, 255, 0.65) 100%)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.85)",
        boxShadow:
          "0 8px 24px -3px rgba(0, 0, 0, 0.14), 0 3px 8px rgba(0, 0, 0, 0.06), inset 0 1.5px 2px rgba(255, 255, 255, 1), inset 0 -1.5px 2px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* 01. Inner Refraction Ring (The signature double-rim bevel from 3D thick glass) */}
      <div
        className={`absolute ${current.innerRim} pointer-events-none transition-opacity duration-300`}
        style={{
          border: "1px solid rgba(255, 255, 255, 0.75)",
          boxShadow:
            "inset 0 1.5px 3px rgba(255, 255, 255, 0.95), inset 0 -1.5px 2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(255, 255, 255, 0.4)",
        }}
      />

      {/* 02. Top Glass Specular Gloss Sheen */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden"
        style={{
          background:
            "linear-gradient(140deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.15) 35%, transparent 60%)",
        }}
      />

      {/* 03. Top Curved Specular Glint */}
      <div
        className="absolute top-0.5 left-1 right-1 h-2/5 pointer-events-none rounded-t-[inherit]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%)",
          maskImage: "radial-gradient(ellipse at top, black 50%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at top, black 50%, transparent 85%)",
        }}
      />

      {/* 04. Subtle bottom caustic highlight */}
      <div
        className="absolute bottom-0.5 left-2 right-2 h-[1px] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)",
        }}
      />

      {/* 05. The Central Acadence Logo Mark */}
      <div className="relative z-10 flex items-center justify-center filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.22)]">
        <Image
          src="/logo.png"
          alt="Acadence Logo"
          width={current.imgSize}
          height={current.imgSize}
          className="object-contain w-auto h-full"
          style={{ maxHeight: `${current.imgSize}px` }}
          priority
        />
      </div>
    </div>
  );

  if (!showWordmark) {
    if (href) {
      return (
        <Link href={href} className="inline-block group" aria-label="Acadence Home">
          {logoIcon}
        </Link>
      );
    }
    return logoIcon;
  }

  const content = (
    <div className={`flex items-center ${current.gap} group cursor-pointer select-none`}>
      {logoIcon}
      <span
        className={`font-semibold ${current.textSize} tracking-tight lowercase flex items-center gap-1.5 ${
          textColor === "light" ? "text-white" : "text-[#171717]"
        }`}
      >
        acadence
        {accentDot && (
          <span className={`${current.dot} rounded-full bg-rose-600 animate-pulse`} />
        )}
      </span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="Acadence Home">
        {content}
      </Link>
    );
  }

  return content;
}

