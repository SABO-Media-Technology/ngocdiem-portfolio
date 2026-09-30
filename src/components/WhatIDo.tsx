"use client";

import { useState } from "react";
import { WHAT_I_DO, WhatIDoItem } from "@/data/portfolioData";
import { CheckCircle, Briefcase, FileSpreadsheet, Globe, Bot, ArrowRight } from "lucide-react";

export default function WhatIDo() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case "operations":
        return <Briefcase className="w-5 h-5 text-[#35D9FF]" />;
      case "admin-finance":
        return <FileSpreadsheet className="w-5 h-5 text-[#35D9FF]" />;
      case "digital":
        return <Globe className="w-5 h-5 text-[#35D9FF]" />;
      case "ai-automation":
        return <Bot className="w-5 h-5 text-[#35D9FF]" />;
      default:
        return <CheckCircle className="w-5 h-5 text-[#35D9FF]" />;
    }
  };

  return (
    <section id="capabilities" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Glow */}
      <div className="volumetric-glow top-1/2 -right-32 w-[550px] h-[550px] bg-[#0A2463]/40" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        
        {/* SECTION HEADER */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs font-mono-code text-[#35D9FF]">
            <span className="font-pixel text-[10px]">SECTION // 02</span>
            <span className="w-8 h-[1px] bg-[#35D9FF]/40" />
            <span>BUSINESS CAPABILITY MATRIX</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
                WHAT <span className="text-outline hover:text-white transition-colors">I DO</span>
              </h2>
              <p className="mt-3 text-lg sm:text-xl md:text-2xl text-[#35D9FF] font-heading font-medium">
                “I work across different layers of a business.”
              </p>
            </div>

            <p className="max-w-md text-sm sm:text-base text-[#94A3B8] font-heading font-normal">
              Connecting ground-level physical operations with digital growth, financial discipline, and automated systems.
            </p>
          </div>
        </div>

        {/* 4 LARGE INTERACTIVE CARDS */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {WHAT_I_DO.map((card) => {
            const isHovered = hoveredCard === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative rounded-3xl p-7 sm:p-9 chrome-glass-card transition-all duration-500 border ${
                  isHovered
                    ? "border-[#35D9FF] -translate-y-2 shadow-[0_20px_50px_rgba(37,99,255,0.3)]"
                    : "border-[#35D9FF]/20"
                }`}
              >
                {/* Technical Corner Markers */}
                <div className="hud-corner-tl" />
                <div className="hud-corner-tr" />
                <div className="hud-corner-bl" />
                <div className="hud-corner-br" />

                {/* Card Top: Number & Icon */}
                <div className="flex items-center justify-between pb-6 border-b border-[#35D9FF]/15">
                  <div className="flex items-center gap-3">
                    <span className="font-pixel text-xl sm:text-2xl text-[#35D9FF]">
                      {card.number}
                    </span>
                    <span className="font-mono-code text-xs text-[#94A3B8] uppercase tracking-wider">
                      // LAYER
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#2563FF]/20 border border-[#35D9FF]/30 group-hover:scale-110 group-hover:border-[#35D9FF] transition-all">
                    {getIcon(card.id)}
                  </div>
                </div>

                {/* Card Title */}
                <div className="pt-6 space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#35D9FF] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs font-mono-code text-[#35D9FF]/80 uppercase tracking-wider">
                    {card.subtitle}
                  </p>
                  <p className="text-sm text-[#94A3B8] leading-relaxed pt-1">
                    {card.description}
                  </p>
                </div>

                {/* The 4 Core Items Listed for Each Card */}
                <div className="pt-6 space-y-2.5">
                  <div className="text-[10px] font-mono-code text-[#35D9FF] uppercase tracking-wider">
                    KEY SCOPE & DELIVERABLES:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {card.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-[#050816]/60 border border-[#35D9FF]/15 group-hover:border-[#35D9FF]/30 text-xs font-mono-code text-slate-200 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#35D9FF]" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags Pill Row */}
                <div className="pt-6 mt-6 border-t border-[#35D9FF]/15 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#0A2463]/50 border border-[#35D9FF]/20 text-[10px] font-mono-code text-[#94A3B8]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
