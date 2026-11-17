"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GlassLogo from "@/components/GlassLogo";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  Building2,
} from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Please enter both your academic email and password.");
      return;
    }

    if (!email.includes("@")) {
      setErrorMessage("Please enter a valid academic or university email address.");
      return;
    }

    setIsLoading(true);

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] flex flex-col lg:flex-row selection:bg-rose-500 selection:text-white">
      {/* LEFT COLUMN: Visual & Intellectual Editorial Showcase (Desktop) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#171717] text-white flex-col justify-between p-12 lg:p-16 overflow-hidden">
        {/* Ambient atmospheric photo background */}
        <div className="absolute inset-0 opacity-40 mix-blend-luminosity">
          <Image
            src="/images/hero-library-architecture.jpg"
            alt="Classical Academic Library"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
        </div>

        {/* Gradient overlays for editorial contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/80 to-[#171717]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-900/25 via-transparent to-transparent" />

        {/* Top Header: Brand Logo & Back Link */}
        <div className="relative z-10 flex items-center justify-between">
          <GlassLogo href="/" size="md" textColor="light" />

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase text-neutral-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10"
          >
            <ArrowLeft size={13} />
            <span>Return to Website</span>
          </Link>
        </div>

        {/* Center: Editorial Monograph Statement & Research Badge */}
        <div className="relative z-10 my-auto py-12 max-w-lg">
          <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-rose-950/80 border border-rose-500/30 text-rose-300 text-xs font-mono font-medium tracking-wider uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span>The Intelligent Workspace</span>
            <span className="text-[10px] bg-rose-600 text-white px-2 py-0.5 rounded-full font-bold">
              2026
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
            Return to your research with{" "}
            <span className="font-serif italic font-normal text-rose-400 block sm:inline">
              complete clarity.
            </span>
          </h2>

          <p className="text-neutral-300 text-base leading-relaxed mb-8">
            Your literature matrix, chapter drafts, methodology frameworks, and
            supervisor feedback annotations are synchronized and awaiting your
            next milestone.
          </p>

          {/* Testimonial / Scholar Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 shadow-2xl">
            <div className="flex items-start gap-3.5">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-rose-400/40">
                <Image
                  src="/images/hero-scholar.jpg"
                  alt="Researcher"
                  fill
                  sizes="60px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs font-bold text-white tracking-tight">
                    Sarah M. Jenkins
                  </p>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 size={10} /> Verified Ph.D.
                  </span>
                </div>
                <p className="text-[11px] text-neutral-300 leading-snug font-normal line-clamp-2">
                  "Acadence helped me synthesize 42 empirical papers for Chapter
                  02 in three days. My advisor praised the structural coherence."
                </p>
                <p className="text-[10px] font-mono text-rose-400 mt-1">
                  Imperial College London • Computational Linguistics
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Colophon & Standards */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span>256-bit Institutional Encryption</span>
          </div>
          <span className="text-neutral-500">Scopus • WoS • IEEE Indexed</span>
        </div>
      </div>

      {/* RIGHT COLUMN: Minimalist Editorial Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between p-6 sm:p-10 lg:p-16 xl:p-20 overflow-y-auto">
        {/* Right Column Header: Same 3D Glass Logo */}
        <div className="flex items-center justify-between pb-6 mb-4 border-b border-[#E5E5E5]/70">
          <GlassLogo href="/" size="md" textColor="dark" />
          <Link
            href="/"
            className="text-xs font-mono uppercase tracking-wider text-[#777777] hover:text-[#171717] flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft size={13} /> Return to Home
          </Link>
        </div>

        {/* Main Content Area */}
        <div className="max-w-md w-full mx-auto my-auto py-6">
          {/* Section Pill */}
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#F5F3EE] border border-[#E5E5E5] text-xs font-mono font-bold tracking-[0.2em] text-[#171717] uppercase">
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
            <span>01 / SECURE ACCESS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717] leading-tight mb-3">
            Welcome back to your{" "}
            <span className="font-serif italic font-normal text-rose-600">
              workspace.
            </span>
          </h1>

          <p className="text-sm text-[#777777] mb-8 leading-relaxed">
            Enter your academic credentials to access your dissertation, research
            matrix, and advisor notes.
          </p>

          {/* Institutional SSO Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setIsLoading(false);
                  setIsSuccess(true);
                }, 1000);
              }}
              className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl border border-[#E5E5E5] bg-white hover:bg-[#F5F3EE] text-xs font-semibold text-[#171717] transition-all hover:scale-[1.01] shadow-2xs group"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Google Account</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setIsLoading(false);
                  setIsSuccess(true);
                }, 1000);
              }}
              className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl border border-[#E5E5E5] bg-white hover:bg-[#F5F3EE] text-xs font-semibold text-[#171717] transition-all hover:scale-[1.01] shadow-2xs group"
            >
              <Building2 size={16} className="text-rose-600" />
              <span>University SSO (.edu)</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center justify-center mb-6">
            <div className="border-t border-[#E5E5E5] w-full" />
            <span className="bg-[#FFFFFF] px-3 text-[11px] font-mono uppercase tracking-wider text-[#777777] shrink-0">
              or sign in with email
            </span>
            <div className="border-t border-[#E5E5E5] w-full" />
          </div>

          {/* Error / Success Notifications */}
          {errorMessage && (
            <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {isSuccess && (
            <div className="mb-5 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex flex-col gap-1">
              <div className="flex items-center gap-2 font-bold text-emerald-800">
                <CheckCircle2 size={15} className="text-emerald-600" />
                <span>Credentials Verified!</span>
              </div>
              <p className="text-[11px] text-emerald-700">
                Opening your Acadence research workspace... Redirecting in a moment.
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono uppercase font-bold tracking-wider text-[#171717] mb-2"
              >
                Institutional Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#777777]">
                  <Mail size={16} />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@university.edu"
                  required
                  className="w-full bg-[#FFFFFF] border border-[#E5E5E5] focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 rounded-xl py-3 pl-10 pr-4 text-sm text-[#171717] placeholder:text-[#777777] transition-all outline-none"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-xs font-mono uppercase font-bold tracking-wider text-[#171717]"
                >
                  Password
                </label>
                <a
                  href="#forgot"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("A password reset link will be sent to your institutional email.");
                  }}
                  className="text-xs font-medium text-rose-600 hover:text-rose-800 transition-colors"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#777777]">
                  <Lock size={16} />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  required
                  className="w-full bg-[#FFFFFF] border border-[#E5E5E5] focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 rounded-xl py-3 pl-10 pr-11 text-sm text-[#171717] placeholder:text-[#777777] transition-all outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#777777] hover:text-[#171717] transition-colors"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-[#E5E5E5] text-rose-600 focus:ring-rose-500/20 cursor-pointer accent-rose-600"
                />
                <span className="text-xs text-[#333333]">
                  Keep me signed in for 30 days
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || isSuccess}
              className="w-full mt-2 py-3.5 px-6 rounded-full bg-[#171717] hover:bg-rose-950 text-white text-sm font-semibold tracking-wide transition-all hover:scale-[1.01] hover:shadow-[0_10px_25px_-5px_rgba(225,29,72,0.35)] flex items-center justify-center gap-2 border border-transparent hover:border-rose-500/40 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Authenticating...</span>
                </div>
              ) : isSuccess ? (
                <span>Access Granted</span>
              ) : (
                <>
                  <span>Sign In to Workspace</span>
                  <ArrowRight size={16} className="text-rose-400" />
                </>
              )}
            </button>
          </form>

          {/* Switch to Signup */}
          <div className="mt-8 pt-6 border-t border-[#E5E5E5] text-center">
            <p className="text-xs text-[#777777]">
              New to Acadence?{" "}
              <Link
                href="/signup"
                className="font-bold text-[#171717] hover:text-rose-600 transition-colors ml-1"
              >
                Create your scholar account →
              </Link>
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#777777] font-mono gap-2 max-w-md w-full mx-auto">
          <span>© 2026 Acadence Technologies</span>
          <div className="flex items-center gap-3">
            <Link href="/" className="hover:text-[#171717] transition-colors">
              Privacy Charter
            </Link>
            <span>•</span>
            <Link href="/" className="hover:text-[#171717] transition-colors">
              Terms of Research
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

