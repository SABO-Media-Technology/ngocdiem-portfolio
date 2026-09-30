"use client";

import { EXPERIENCE_TIMELINE } from "@/data/portfolioData";
import { Briefcase, Calendar, CheckCircle2, ChevronRight, ShieldCheck } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Volumetric Glow */}
      <div className="volumetric-glow top-1/2 -right-32 w-[520px] h-[520px] bg-[#35D9FF]/12" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        
        {/* SECTION HEADER */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs font-mono-code text-[#35D9FF]">
            <span className="font-pixel text-[10px]">SECTION // 07</span>
            <span className="w-8 h-[1px] bg-[#35D9FF]/40" />
            <span>CAREER PATHWAY</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
                CAREER <span className="text-chrome">EXPERIENCE</span>
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#94A3B8] font-heading">
                Chronological timeline demonstrating growth from banking &amp; finance into multi-disciplinary operations and digital leadership.
              </p>
            </div>

            <div className="px-3.5 py-1.5 rounded-full bg-[#071A3D]/70 border border-[#35D9FF]/30 text-xs font-mono-code text-[#35D9FF] flex items-center gap-2 self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-[#35D9FF] animate-pulse" />
              <span>CURRENT: SABO M&T</span>
            </div>
          </div>
        </div>

        {/* TIMELINE LIST */}
        <div className="relative border-l-2 border-[#35D9FF]/30 ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-10 sm:space-y-12">
          {EXPERIENCE_TIMELINE.map((item, idx) => (
            <div key={item.period} className="relative group">
              
              {/* Timeline Glowing Node Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[55px] top-6 w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center ${
                  item.current
                    ? "bg-[#35D9FF] border-white shadow-[0_0_20px_#35D9FF]"
                    : "bg-[#071A3D] border-[#35D9FF]/60 group-hover:border-[#35D9FF]"
                }`}
              >
                {item.current && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#050816] animate-ping" />
                )}
              </div>

              {/* Timeline Card */}
              <div className="p-6 sm:p-8 rounded-3xl chrome-glass-card border border-[#35D9FF]/20 group-hover:border-[#35D9FF]/60 transition-all space-y-4">
                
                {/* Year Pill & Status */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-xl bg-[#2563FF]/20 border border-[#35D9FF]/40 text-xs font-mono-code font-bold text-[#35D9FF]">
                      {item.period}
                    </span>
                    <span className="font-mono-code text-xs text-[#94A3B8]">
                      {item.field}
                    </span>
                  </div>

                  {item.current && (
                    <span className="px-2.5 py-0.5 rounded-md bg-[#35D9FF]/20 text-[#35D9FF] text-[10px] font-pixel border border-[#35D9FF]/40">
                      CURRENT ROLE
                    </span>
                  )}
                </div>

                {/* Company & Role */}
                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white group-hover:text-[#35D9FF] transition-colors">
                    {item.company}
                  </h3>
                  <div className="text-sm font-mono-code text-[#35D9FF] font-semibold">
                    {item.role}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-slate-300 font-heading leading-relaxed">
                  {item.summary}
                </p>

                {/* Core Highlights */}
                <div className="pt-2 grid sm:grid-cols-3 gap-2">
                  {item.highlights.map((h, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-3 rounded-xl bg-[#050816]/60 border border-[#35D9FF]/15 text-xs font-mono-code text-slate-300 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#35D9FF] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
