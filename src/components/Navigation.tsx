"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "The Problem", href: "#problem" },
    { name: "Solution", href: "#solution" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Disciplines", href: "#disciplines" },
    { name: "FAQs", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFFFFF]/85 backdrop-blur-md border-b border-[#E5E5E5]/80 py-4 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Acadence Logo"
            width={36}
            height={36}
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
          <span className="font-semibold text-xl tracking-tight text-[#171717] lowercase flex items-center gap-1.5">
            acadence
            <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
          </span>
        </a>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#333333] hover:text-[#171717] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-rose-600 hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/login"
            className="text-sm font-medium text-[#171717] hover:text-rose-600 transition-colors"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#171717] text-[#FFFFFF] hover:bg-rose-950 hover:shadow-[0_4px_18px_rgba(225,29,72,0.3)] transition-all hover:scale-[1.02] shadow-sm border border-transparent hover:border-rose-500/30"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#171717] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-b border-[#E5E5E5] px-6 py-8 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#171717] hover:text-[#777777] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-6 border-t border-[#E5E5E5] flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2 text-sm font-medium text-[#171717] hover:text-rose-600 transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#171717] text-[#FFFFFF] hover:bg-rose-950 transition-colors"
            >
              Get Started <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

