# Võ Ngọc Diễm — Personal Portfolio

**Business Operations × Digital × AI × Creative**  
*“I make things work. Then I make them better.”*  
Operations-minded. Digital-driven. Always improving.

---

## 🎨 Creative Direction & Aesthetic Identity

This website is designed as an immersive **Personal Digital World**, not a traditional CV or template:

- **3D Chrome × Glass × Pixel Art × Retro Computer Graphics × Futuristic UI × Modern Editorial Design**
- **Color Palette:**
  - Primary Backgrounds: `#050816`, `#071A3D`
  - Secondary Depth: `#0A2463`
  - Accent Lighting: `#2563FF`, `#35D9FF`
  - High-Contrast Text: `#F5FAFF`, `#94A3B8`
- **Lighting & Materials:** Electric blue glow, cyan rim light, subtle volumetric blooms, realistic reflections, glass refraction, dark contrast and expansive negative space.
- **Typography:** Modern geometric sans-serif (`Space Grotesk`, `Syne`, `Sora`) paired with pixel-inspired display typography (`Silkscreen`) and technical monospaced metadata (`JetBrains Mono`).

---

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI Library:** [React 19](https://react.dev/)
- **3D WebGL Engine:** [Three.js](https://threejs.org/) (Liquid chrome knots, translucent glass 4-point stars, 3D pixel smiley badges, isometric cursor, volumetric dust particles)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with custom glassmorphism, HUD corners, and chrome gradient typography
- **Icons:** [Lucide React](https://lucide.dev/) + Custom SVG pixel badges
- **Language:** TypeScript (100% strict type safety)

---

## 📂 Architecture & Sections

```text
src/
├── app/
│   ├── globals.css           # Chrome text gradients, specular pills, HUD corners, retro coordinate grid
│   ├── layout.tsx            # Google Fonts (Space Grotesk, JetBrains Mono, Silkscreen), SEO metadata
│   └── page.tsx              # Master page orchestrating all portfolio sections
├── components/
│   ├── Navbar.tsx            # Floating minimal navigation with DIỄM® mark, active indicator, mobile drawer
│   ├── Hero.tsx              # Full-screen hero, oversized typography, small labels, CTAs, 3D WebGL canvas
│   ├── Scene3D.tsx           # Three.js WebGL scene with chrome geometries, glass star, mouse parallax
│   ├── Introduction.tsx      # HELLO, I'M DIỄM, portrait area with blue/chrome HUD treatment, floating badges
│   ├── WhatIDo.tsx           # WHAT I DO, 4 interactive cards with 3D hover: Operations, Admin/Finance, Digital, AI
│   ├── SelectedWork.tsx      # SELECTED WORK: SABO Billiards, SABO M&T, SABO Hub, SABO Design
│   ├── CaseStudyModal.tsx    # Immersive case study viewer: Role, Challenge, Approach, What I Did, Tools, Outcome, Gallery
│   ├── DigitalDesk.tsx       # MY DIGITAL DESK: Retro-futuristic OS with 6 floating folders & file inspector
│   ├── Toolbox.tsx           # TOOLS I WORK WITH: AI, Creative, Business, Digital categories
│   ├── HowIWork.tsx          # FROM IDEA → EXECUTION: 5-stage pipeline with flowing glowing nodes
│   ├── Experience.tsx        # Career timeline: 2024 (VIB), 2025 (Digital Projects), 2026-NOW (SABO M&T)
│   ├── About.tsx             # A LITTLE ABOUT ME: Interdisciplinary synergy highlights
│   ├── Philosophy.tsx        # GOOD WORK SHOULD MAKE THINGS SIMPLER: Dramatic typography & 3D chrome backdrop
│   ├── Contact.tsx           # HAVE SOMETHING TO BUILD?: Email, Facebook, LinkedIn, Website, direct copy
│   └── Footer.tsx            # DIỄM®, Business Operations × Digital × AI, © 2026, Back to top ↑
└── data/
    └── portfolioData.ts      # Complete type-safe portfolio data, case studies, filesystem entries, toolbox
```

---

## 🛠️ Local Development & Build

```bash
# 1. Navigate to the project directory
cd /home/sabopc/Projects/portfolio

# 2. Run local development server (Turbopack)
pnpm dev

# 3. Build for production (Static Pre-rendering & TypeScript verification)
pnpm build

# 4. Start production build locally
pnpm start
```

---

## 🌐 Production Deployment

The project is pre-configured for instant zero-config deployment to Vercel, Cloudflare Pages, or any modern edge hosting:

```bash
git add .
git commit -m "feat: complete polished portfolio for Võ Ngọc Diễm (Operations x Digital x AI)"
git push origin main
```
