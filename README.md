# Acadence — Intelligence Behind Every Idea

> An AI-powered academic research and project development platform designed for university students across disciplines.

[![Next.js](https://img.shields.io/badge/Next.js-16.4.5-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61dafb?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)

---

## ✦ Overview

**Acadence** helps university students develop academic projects through structured AI guidance, credible research assistance, chapter development, methodology support, practical implementation, and academic documentation. 

Unlike generic code generation or essay-writing tools, Acadence is engineered for students across all university departments—from Computer Science and Engineering to Economics, Mass Communication, Accounting, Psychology, and Biological Sciences.

---

## ✦ Core Design Direction

- **Editorial Aesthetic:** Oversized expressive typography combining **Manrope** for modern legibility and **Instrument Serif** italic for intellectual nuance.
- **Color System:** Monochromatic base palette (pure white `#FFFFFF` and warm off-white `#F5F3EE`) accented with deep crimson red (`#E11D48` / `#BE123C`) and vivid emerald/amber indicators.
- **Layered 3D Academic Sculpture:** Central hero folio featuring real academic photography, silk bookmark ribbons, embossed colophons, and orbiting glassmorphism interface cards.
- **Interactive Component Architecture:**
  - **Hero Section:** Unconventional 3D monograph composition with orbital research milestones.
  - **Problem Collage:** Tactile overlapping card deck with photographic headers capturing student research bottlenecks.
  - **Solution Workspace:** High-fidelity macOS-style workspace preview featuring chapter navigation, source credibility indicators, and contextual AI dialogue.
  - **Platform Capabilities:** 6 distinct modular engines (Discover, Research, Intelligence, Workspace, Studio, Methodology) with custom color badges.
  - **The Process:** 5-phase structured workflow (Student Onboarding, Topic Discovery, Foundation & Rigour, Chapter Drafting, Final Submission) with photo thumbnails and detailed showcase banners.
  - **Built for Disciplines:** Interactive department switcher supporting 10 distinct university fields with tailored rubrics.
  - **Academic Integrity:** Ethical scholarship manifest compliant with Turnitin, CrossRef, and university research boards.
  - **Interactive FAQs:** Minimalist accordion interface answering student questions.
  - **Final CTA & Editorial Footer:** High-conversion conclusion with brand navigation and legal metadata.

---

## ✦ Tech Stack

- **Framework:** [Next.js 16.4.5](https://nextjs.org/) (App Router, Turbopack)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography:** Manrope (Google Fonts via Next.js) & Instrument Serif
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** Custom CSS 3D keyframe orbital math & hardware-accelerated transitions

---

## ✦ Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- npm or pnpm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/Demmy-01/acadence.git
cd acadence

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build

```bash
# Compile and optimize for production
npm run build

# Start production server
npm run start
```

---

## ✦ Project Structure

```text
acadence-web/
├── public/
│   ├── images/                 # High-resolution academic photography
│   │   ├── hero-*.jpg          # Hero 3D monograph & library imagery
│   │   ├── problem-*.jpg       # Problem collage tactile photos
│   │   └── stage-*.jpg         # 5 workflow stage illustrations
│   ├── logo.png                # Transparent Acadence brand icon
│   └── favicon.ico             # Brand favicon
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind v4 styles, 3D orbit keyframes
│   │   ├── layout.tsx          # Root layout & font orchestration
│   │   └── page.tsx            # Full editorial landing page
│   └── components/
│       ├── Navigation.tsx                 # Sticky glassmorphic header
│       ├── HeroSection.tsx                # Central 3D monograph & orbital cards
│       ├── ProblemCollageSection.tsx      # Editorial overlapping collage
│       ├── SolutionWorkspaceSection.tsx   # Interactive workspace window
│       ├── PlatformFeaturesSection.tsx    # 6 platform capabilities
│       ├── HowItWorksSection.tsx          # 5-stage visual milestone workflow
│       ├── BuiltForDisciplinesSection.tsx # 10 department interactive switcher
│       ├── AcademicIntegritySection.tsx   # Responsible intelligence pillars
│       ├── FAQSection.tsx                 # Accordion knowledgebase
│       └── FinalCTAAndFooter.tsx          # Editorial conclusion & footer
├── package.json
└── tsconfig.json
```

---

## ✦ Brand Assets

The Acadence logo features an abstract geometric "A" symbol paired with lowercase `acadence` wordmark typography, representing structured intelligence and academic clarity.

---

## ✦ License

© 2026 Acadence. All rights reserved.
