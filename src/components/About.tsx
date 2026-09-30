"use client";

import { PERSONAL_INFO } from "@/data/portfolioData";
import { Sparkles, GraduationCap, Compass, Layers, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about-me" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="volumetric-glow top-1/3 -left-32 w-[520px] h-[520px] bg-[#2563FF]/15" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs font-mono-code text-[#35D9FF]">
            <span className="font-pixel text-[10px]">SECTION // 08</span>
            <span className="w-8 h-[1px] bg-[#35D9FF]/40" />
            <span>BACKGROUND & ETHOS</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
            A LITTLE <span className="text-chrome">ABOUT ME</span>
          </h2>
        </div>

        {/* HIGHLIGHT PILLS */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          {PERSONAL_INFO.aboutHighlights.map((highlight) => (
            <span
              key={highlight}
              className="px-4 py-2 rounded-xl bg-[#071A3D]/70 border border-[#35D9FF]/35 text-xs sm:text-sm font-mono-code font-bold text-white shadow-[0_0_15px_rgba(53,217,255,0.15)] flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#35D9FF]" />
              {highlight}
            </span>
          ))}
        </div>

        {/* MAIN EDITORIAL QUOTE & BREAKDOWN */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 p-8 sm:p-12 rounded-3xl chrome-glass-card border border-[#35D9FF]/30 space-y-6">
            <p className="text-lg sm:text-2xl text-[#F5FAFF] font-heading font-medium leading-relaxed">
              “{PERSONAL_INFO.aboutCopy}”
            </p>

            <div className="pt-4 border-t border-[#35D9FF]/20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-code text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#35D9FF]" />
                <span>SAIGON UNIVERSITY (SGU) · FINANCE & BANKING GRADUATE</span>
              </div>
              <span className="text-[#35D9FF]">HO CHI MINH CITY, VN</span>
            </div>
          </div>

          <div className="lg:col-span-4 p-8 rounded-3xl bg-[#050816]/70 border border-[#35D9FF]/20 space-y-4 font-heading">
            <div className="text-xs font-mono-code text-[#35D9FF] uppercase tracking-wider">
              // THE INTERDISCIPLINARY ADVANTAGE
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Rather than viewing operations, design, or AI as isolated silos, I treat them as unified levers to build systems that are robust, beautiful, and effortless to maintain.
            </p>
            <div className="pt-2 text-xs font-mono-code text-[#35D9FF]">
              OPERATIONS × DIGITAL × AI
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
