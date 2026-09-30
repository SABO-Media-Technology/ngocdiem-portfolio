"use client";

import { Briefcase, Users, TrendingUp, Globe, Palette } from "lucide-react";
import { EXPERIENCE_AREAS } from "@/data/portfolioData";
import Scene3D from "./Scene3D";

const EXP_ICONS = [Briefcase, Users, TrendingUp, Globe, Palette];

export default function ExperienceAreas() {
  return (
    <section id="experience" className="snap-section relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050816] min-h-screen flex flex-col justify-center">
      {/* ── 3D Scene Background Layer ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Scene3D variant="experience" />
      </div>

      {/* ── Ambient Glow ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-96 h-96 rounded-full bg-[#2563FF]/10 blur-[120px]" />
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-[#35D9FF]/10 blur-[120px]" />
      </div>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-14 w-full">
        <p className="font-mono-code text-xs tracking-[0.3em] text-[#35D9FF] mb-4 opacity-80 uppercase">
          // 05 — EXPERIENCE
        </p>
        <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-none tracking-tight">
          EXPERIENCE <span className="text-chrome">AREAS</span>
        </h2>
      </div>

      {/* List Card */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="chrome-glass-card rounded-3xl border border-[#35D9FF]/20 overflow-hidden relative bg-[#071A3D]/40 backdrop-blur-md">
          {/* HUD Corners */}
          <div className="hud-corner-tl" />
          <div className="hud-corner-tr" />
          <div className="hud-corner-bl" />
          <div className="hud-corner-br" />

          <ul className="divide-y divide-[#35D9FF]/10">
            {EXPERIENCE_AREAS.map((area, index) => {
              const ExpIcon = EXP_ICONS[index % EXP_ICONS.length] ?? Briefcase;

              return (
                <li
                  key={area.id ?? index}
                  className="group relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 px-8 sm:px-10 py-7 sm:py-8 cursor-default transition-all duration-300 hover:bg-[#071A3D]/70 hover:pl-12"
                >
                  {/* Number & Icon Pill */}
                  <div className="flex items-center gap-3 flex-shrink-0 w-24">
                    <span className="font-display font-black text-2xl sm:text-3xl text-[#35D9FF] opacity-70 group-hover:opacity-100 group-hover:text-white transition-all duration-300 leading-none select-none">
                      0{index + 1}
                    </span>
                    <div className="genz-icon-badge w-9 h-9 rounded-xl shadow-[0_0_12px_rgba(53,217,255,0.2)]">
                      <ExpIcon size={16} className="text-[#35D9FF]" />
                    </div>
                  </div>

                  {/* Title + titleEN */}
                  <div className="flex-shrink-0 sm:w-64 lg:w-72">
                    <p className="font-display font-black text-lg sm:text-xl text-white leading-tight group-hover:text-[#35D9FF] transition-colors duration-300 tracking-tight">
                      {area.title}
                    </p>
                    {area.titleEN && (
                      <p className="font-mono-code text-xs text-[#35D9FF] opacity-70 mt-1 tracking-wider">
                        {area.titleEN}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <div className="flex-1 min-w-0 font-urbanist">
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed group-hover:text-slate-100 transition-colors duration-300">
                      {area.description}
                    </p>
                  </div>

                  {/* Animated Dot */}
                  <div className="flex-shrink-0 flex items-center justify-end sm:pl-4">
                    <span className="animate-pulse rounded-full bg-[#35D9FF] w-2.5 h-2.5 opacity-60 group-hover:opacity-100 group-hover:shadow-[0_0_10px_#35D9FF] transition-all duration-300" />
                  </div>

                  {/* Hover accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#2563FF] via-[#35D9FF] to-[#2563FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
