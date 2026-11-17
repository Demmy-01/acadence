"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Building2,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  BookOpen,
  Check,
} from "lucide-react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [institution, setInstitution] = useState("");
  const [discipline, setDiscipline] = useState("Computer Science");
  const [academicLevel, setAcademicLevel] = useState<"undergrad" | "masters" | "phd">("undergrad");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToCharter, setAgreedToCharter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Disciplines supported across Acadence
  const disciplines = [
    "Computer Science",
    "Mass Communication",
    "Business Administration",
    "Accounting",
    "Economics",
    "Engineering",
    "Psychology",
    "Political Science",
    "Biological Sciences",
    "Education",
    "Other Academic Field",
  ];

  // Dynamic Password Strength Calculation
  const hasMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  const strengthScore = [hasMinLength, hasNumber, hasUpper, hasSpecial].filter(Boolean).length;

  const getStrengthLabel = () => {
    if (password.length === 0) return { label: "Enter password", color: "bg-neutral-200", text: "text-neutral-400" };
    if (strengthScore <= 1) return { label: "Weak", color: "bg-rose-500", text: "text-rose-600" };
    if (strengthScore === 2) return { label: "Fair", color: "bg-amber-500", text: "text-amber-600" };
    if (strengthScore === 3) return { label: "Good", color: "bg-blue-500", text: "text-blue-600" };
    return { label: "Strong & Defensible", color: "bg-emerald-500", text: "text-emerald-600" };
  };

  const strength = getStrengthLabel();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!fullName || !email || !password || !institution) {
      setErrorMessage("Please fill in all required academic registration fields.");
      return;
    }

    if (!email.includes("@")) {
      setErrorMessage("Please provide a valid academic email address.");
      return;
    }

    if (!hasMinLength) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    if (!agreedToCharter) {
      setErrorMessage("Please agree to the Responsible AI Academic Integrity Charter to continue.");
      return;
    }

    setIsLoading(true);

    // Simulate account setup and workspace calibration
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1400);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] flex flex-col lg:flex-row selection:bg-rose-500 selection:text-white">
      {/* LEFT COLUMN: Visual Brand Showcase (Desktop) */}
      <div className="hidden lg:flex lg:w-5/12 relative bg-[#171717] text-white flex-col justify-between p-12 lg:p-14 overflow-hidden">
        {/* Ambient atmospheric photo background */}
        <div className="absolute inset-0 opacity-45 mix-blend-luminosity">
          <Image
            src="/images/hero-red-journal.jpg"
            alt="Academic Monograph"
            fill
            priority
            sizes="42vw"
            className="object-cover"
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/85 to-[#171717]/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-900/30 via-transparent to-transparent" />

        {/* Top Header: Brand Logo & Back Link */}
        <div className="relative z-10 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Acadence Logo"
              width={36}
              height={36}
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
            <span className="font-semibold text-xl tracking-tight text-white lowercase flex items-center gap-1.5">
              acadence
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase text-neutral-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10"
          >
            <ArrowLeft size={13} />
            <span>Home</span>
          </Link>
        </div>

        {/* Center: Editorial Manifesto & Value Proposition */}
        <div className="relative z-10 my-auto py-10 max-w-md">
          <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-rose-950/80 border border-rose-500/30 text-rose-300 text-xs font-mono font-medium tracking-wider uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span>Free For University Students</span>
            <span className="text-[10px] bg-rose-600 text-white px-2 py-0.5 rounded-full font-bold">
              LAUNCH
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight mb-5">
            Your ideas deserve a{" "}
            <span className="font-serif italic font-normal text-rose-400 block sm:inline">
              better direction.
            </span>
          </h2>

          <p className="text-neutral-300 text-sm leading-relaxed mb-8">
            Acadence configures its rubric analysis, literature matrices, and
            methodology guidance specifically to your university degree.
          </p>

          {/* 3 Core Platform Pillars */}
          <div className="space-y-3.5">
            {[
              {
                title: "Zero Hallucination Standard",
                desc: "All citations connect to genuine DOIs indexed in Scopus, WoS, and PubMed.",
              },
              {
                title: "10 Department Frameworks",
                desc: "Pre-calibrated rubrics for Computer Science, Economics, Mass Comm, Engineering & more.",
              },
              {
                title: "Defense Deck Scaffolding",
                desc: "Move confidently from problem statement to oral defense slides and Word/PDF exports.",
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-3.5 flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-rose-600/90 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check size={12} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white tracking-tight">
                    {pillar.title}
                  </h4>
                  <p className="text-[11px] text-neutral-300 leading-snug mt-0.5">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span>Academic Ethics Guaranteed</span>
          </div>
          <span className="text-neutral-500">100% Free at Launch</span>
        </div>
      </div>

      {/* RIGHT COLUMN: Signup Registration Form */}
      <div className="w-full lg:w-7/12 flex flex-col justify-between p-6 sm:p-10 lg:p-14 xl:p-16 overflow-y-auto">
        {/* Right Column Header: Same as Navbar Logo */}
        <div className="flex items-center justify-between pb-6 mb-4 border-b border-[#E5E5E5]/70">
          <Link href="/" className="flex items-center gap-3 group">
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
          </Link>
          <Link
            href="/"
            className="text-xs font-mono uppercase tracking-wider text-[#777777] hover:text-[#171717] flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft size={13} /> Return to Home
          </Link>
        </div>

        {/* Form Container */}
        <div className="max-w-xl w-full mx-auto my-auto py-4">
          {/* Top Switch Link */}
          <div className="flex items-center justify-between mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F3EE] border border-[#E5E5E5] text-xs font-mono font-bold tracking-[0.2em] text-[#171717] uppercase">
              <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
              <span>02 / SCHOLAR REGISTRATION</span>
            </div>
            <Link
              href="/login"
              className="text-xs font-medium text-[#777777] hover:text-rose-600 transition-colors hidden sm:block"
            >
              Already registered? <strong className="text-[#171717] underline">Log In</strong>
            </Link>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717] leading-tight mb-2">
            Create your{" "}
            <span className="font-serif italic font-normal text-rose-600">
              scholar profile.
            </span>
          </h1>

          <p className="text-sm text-[#777777] mb-6 leading-relaxed">
            Calibrate your academic workspace to your specific department, degree
            program, and institutional rubric.
          </p>

          {/* Quick SSO */}
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
              className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl border border-[#E5E5E5] bg-white hover:bg-[#F5F3EE] text-xs font-semibold text-[#171717] transition-all hover:scale-[1.01] shadow-2xs group"
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
              <span>Sign up with Google</span>
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
              className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl border border-[#E5E5E5] bg-white hover:bg-[#F5F3EE] text-xs font-semibold text-[#171717] transition-all hover:scale-[1.01] shadow-2xs group"
            >
              <Building2 size={16} className="text-rose-600" />
              <span>University SSO Portal</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center justify-center mb-6">
            <div className="border-t border-[#E5E5E5] w-full" />
            <span className="bg-[#FFFFFF] px-3 text-[11px] font-mono uppercase tracking-wider text-[#777777] shrink-0">
              or enter student details
            </span>
            <div className="border-t border-[#E5E5E5] w-full" />
          </div>

          {/* Notifications */}
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
                <span>Scholar Account Created!</span>
              </div>
              <p className="text-[11px] text-emerald-700">
                Calibrating your departmental thesis environment for {discipline}... Redirecting to your workspace.
              </p>
            </div>
          )}

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name & Institution Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-mono uppercase font-bold tracking-wider text-[#171717] mb-1.5"
                >
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#777777]">
                    <User size={15} />
                  </div>
                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Demilade Adebiyi"
                    required
                    className="w-full bg-[#FFFFFF] border border-[#E5E5E5] focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 rounded-xl py-2.5 pl-10 pr-3 text-xs sm:text-sm text-[#171717] placeholder:text-[#777777] transition-all outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="institution"
                  className="block text-xs font-mono uppercase font-bold tracking-wider text-[#171717] mb-1.5"
                >
                  University / Institution
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#777777]">
                    <GraduationCap size={15} />
                  </div>
                  <input
                    id="institution"
                    type="text"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    placeholder="e.g. University of Oxford"
                    required
                    className="w-full bg-[#FFFFFF] border border-[#E5E5E5] focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 rounded-xl py-2.5 pl-10 pr-3 text-xs sm:text-sm text-[#171717] placeholder:text-[#777777] transition-all outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Department Discipline & Degree Level */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="discipline"
                  className="block text-xs font-mono uppercase font-bold tracking-wider text-[#171717] mb-1.5"
                >
                  Department / Field
                </label>
                <div className="relative">
                  <select
                    id="discipline"
                    value={discipline}
                    onChange={(e) => setDiscipline(e.target.value)}
                    className="w-full bg-[#FFFFFF] border border-[#E5E5E5] focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 rounded-xl py-2.5 px-3.5 text-xs sm:text-sm text-[#171717] transition-all outline-none cursor-pointer"
                  >
                    {disciplines.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase font-bold tracking-wider text-[#171717] mb-1.5">
                  Academic Degree Level
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { id: "undergrad", label: "B.Sc / BA" },
                    { id: "masters", label: "M.Sc / MA" },
                    { id: "phd", label: "Ph.D." },
                  ].map((level) => (
                    <button
                      key={level.id}
                      type="button"
                      onClick={() => setAcademicLevel(level.id as "undergrad" | "masters" | "phd")}
                      className={`py-2 rounded-lg text-xs font-bold transition-all border ${
                        academicLevel === level.id
                          ? "bg-[#171717] text-white border-[#171717] shadow-xs"
                          : "bg-white text-[#777777] border-[#E5E5E5] hover:border-[#171717]"
                      }`}
                    >
                      {level.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* University Email */}
            <div>
              <label
                htmlFor="signup-email"
                className="block text-xs font-mono uppercase font-bold tracking-wider text-[#171717] mb-1.5"
              >
                Institutional Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#777777]">
                  <Mail size={15} />
                </div>
                <input
                  id="signup-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@university.edu"
                  required
                  className="w-full bg-[#FFFFFF] border border-[#E5E5E5] focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm text-[#171717] placeholder:text-[#777777] transition-all outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="signup-password"
                className="block text-xs font-mono uppercase font-bold tracking-wider text-[#171717] mb-1.5"
              >
                Create Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#777777]">
                  <Lock size={15} />
                </div>
                <input
                  id="signup-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters with numbers & symbols"
                  required
                  className="w-full bg-[#FFFFFF] border border-[#E5E5E5] focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 rounded-xl py-2.5 pl-10 pr-11 text-xs sm:text-sm text-[#171717] placeholder:text-[#777777] transition-all outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#777777] hover:text-[#171717] transition-colors"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>

              {/* Dynamic Password Strength Indicator */}
              {password.length > 0 && (
                <div className="mt-2.5 p-2.5 rounded-lg bg-[#F5F3EE] border border-[#E5E5E5]">
                  <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                    <span className="text-[#777777]">Password Strength:</span>
                    <span className={`font-bold ${strength.text}`}>{strength.label}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 h-1.5 rounded-full overflow-hidden bg-[#E5E5E5]">
                    <div className={`h-full ${strengthScore >= 1 ? strength.color : "bg-transparent"}`} />
                    <div className={`h-full ${strengthScore >= 2 ? strength.color : "bg-transparent"}`} />
                    <div className={`h-full ${strengthScore >= 3 ? strength.color : "bg-transparent"}`} />
                    <div className={`h-full ${strengthScore >= 4 ? strength.color : "bg-transparent"}`} />
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-[10px] text-[#777777] font-mono mt-2">
                    <span className={hasMinLength ? "text-emerald-700 font-semibold" : ""}>
                      • 8+ characters {hasMinLength && "✓"}
                    </span>
                    <span className={hasNumber ? "text-emerald-700 font-semibold" : ""}>
                      • Contains number {hasNumber && "✓"}
                    </span>
                    <span className={hasUpper ? "text-emerald-700 font-semibold" : ""}>
                      • Uppercase letter {hasUpper && "✓"}
                    </span>
                    <span className={hasSpecial ? "text-emerald-700 font-semibold" : ""}>
                      • Special symbol {hasSpecial && "✓"}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Academic Integrity Agreement Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={agreedToCharter}
                  onChange={(e) => setAgreedToCharter(e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded border-[#E5E5E5] text-rose-600 focus:ring-rose-500/20 cursor-pointer accent-rose-600 shrink-0"
                />
                <span className="text-xs text-[#333333] leading-relaxed">
                  I agree to the{" "}
                  <strong className="text-[#171717] underline">Responsible AI Academic Integrity Charter</strong>,{" "}
                  confirming I will maintain authorial ownership and adhere to university ethics guidelines.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || isSuccess}
              className="w-full mt-3 py-3.5 px-6 rounded-full bg-[#171717] hover:bg-rose-950 text-white text-sm font-semibold tracking-wide transition-all hover:scale-[1.01] hover:shadow-[0_10px_25px_-5px_rgba(225,29,72,0.35)] flex items-center justify-center gap-2 border border-transparent hover:border-rose-500/40 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Configuring Workspace...</span>
                </div>
              ) : isSuccess ? (
                <span>Workspace Ready!</span>
              ) : (
                <>
                  <span>Create Free Scholar Account</span>
                  <ArrowRight size={16} className="text-rose-400" />
                </>
              )}
            </button>
          </form>

          {/* Switch to Login */}
          <div className="mt-6 pt-5 border-t border-[#E5E5E5] text-center">
            <p className="text-xs text-[#777777]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-bold text-[#171717] hover:text-rose-600 transition-colors ml-1"
              >
                Log in to your workspace →
              </Link>
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-4 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#777777] font-mono gap-2 max-w-xl w-full mx-auto">
          <span>FERPA & Institutional Ethics Compliant</span>
          <div className="flex items-center gap-3">
            <Link href="/" className="hover:text-[#171717] transition-colors">
              Ethics Charter
            </Link>
            <span>•</span>
            <Link href="/" className="hover:text-[#171717] transition-colors">
              Data Privacy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

