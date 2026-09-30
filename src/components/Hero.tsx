"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Sparkles, Folder, Terminal, Cpu } from "lucide-react";
import Scene3D from "./Scene3D";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 sm:pt-32 pb-20 overflow-hidden select-none"
    >
      {/* 3D WebGL Background Scene: Chrome Knots, Translucent Glass Star, Pixel Elements */}
      <Scene3D className="absolute inset-0 z-0 pointer-events-none opacity-85" />

      {/* Volumetric Color Blooms */}
      <div className="volumetric-glow -top-32 -left-32 w-[580px] h-[580px] bg-[#2563FF]/20" />
      <div
        className="volumetric-glow top-[30%] -right-32 w-[620px] h-[620px] bg-[#35D9FF]/18"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="volumetric-glow bottom-0 left-[25%] w-[500px] h-[500px] bg-[#0A2463]/40"
        style={{ animationDelay: "-6s" }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top HUD Metadata & Coordinate Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono-code text-[#35D9FF] border-b border-[#35D9FF]/20 pb-3 mb-8 sm:mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#35D9FF] animate-pulse" />
            <span className="font-pixel text-[9px] tracking-wider text-[#35D9FF]">
              SYSTEM // DIGITAL WORLD 0.1
            </span>
          </div>
          <div className="flex items-center gap-3 text-[#94A3B8]">
            <span>LAT: 10.8231° N · LON: 106.6297° E</span>
            <span>·</span>
            <span className="text-[#35D9FF]">SABO ECOSYSTEM</span>
          </div>
        </div>

        {/* Parallax Container */}
        <div
          style={{
            transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
            transition: "transform 0.15s ease-out",
          }}
          className="space-y-8 sm:space-y-10"
        >
          {/* Subtitle / Name Tag */}
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-[#0A2463]/70 border border-[#35D9FF]/35 text-xs font-mono-code text-[#35D9FF] tracking-wider flex items-center gap-2 shadow-[0_0_15px_rgba(53,217,255,0.2)]">
              <span className="font-pixel text-[9px]">ID</span>
              <span className="text-white font-semibold">VÕ NGỌC DIỄM</span>
            </span>
            <span className="hidden sm:inline-block text-xs font-mono-code text-[#94A3B8]">
              — PERSONAL PORTFOLIO
            </span>
          </div>

          {/* OVERSPECIFIED HERO HEADLINE */}
          <div className="space-y-1 sm:space-y-2">
            <div className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.92] text-white">
              BUSINESS
            </div>
            <div className="flex flex-wrap items-baseline gap-3 sm:gap-6 font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.92]">
              <span className="text-outline hover:text-white transition-colors">
                OPERATIONS
              </span>
              <span className="text-[#35D9FF] font-pixel text-xl sm:text-4xl md:text-5xl align-middle">
                ×
              </span>
            </div>
            <div className="flex flex-wrap items-baseline gap-3 sm:gap-6 font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.92]">
              <span className="text-chrome">DIGITAL</span>
              <span className="text-[#35D9FF] font-pixel text-xl sm:text-4xl md:text-5xl align-middle">
                ×
              </span>
              <span className="text-outline-cyan hover:text-[#35D9FF] transition-colors">
                AI
              </span>
            </div>
          </div>

          {/* TAGLINE & POSITIONING */}
          <div className="pt-2 max-w-2xl space-y-3">
            <p className="text-xl sm:text-2xl md:text-3xl font-heading font-medium text-[#F5FAFF] leading-snug">
              “I make things work.{" "}
              <span className="text-[#35D9FF] font-semibold underline decoration-[#2563FF] decoration-2 underline-offset-4">
                Then I make them better.”
              </span>
            </p>
            <p className="text-sm sm:text-base text-[#94A3B8] font-heading font-normal">
              {PERSONAL_INFO.positioning}
            </p>
          </div>

          {/* SMALL LABELS */}
          <div className="pt-2 flex flex-wrap gap-2.5">
            {PERSONAL_INFO.labels.map((label, idx) => (
              <span
                key={label}
                className="group px-3 py-1.5 rounded-lg bg-[#071A3D]/70 border border-[#35D9FF]/25 hover:border-[#35D9FF]/80 backdrop-blur-md text-xs font-mono-code text-slate-200 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(53,217,255,0.25)] flex items-center gap-1.5"
              >
                <span className="text-[10px] text-[#35D9FF] font-pixel opacity-70">
                  0{idx + 1}
                </span>
                <span>{label}</span>
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-5">
            <a
              href="#work"
              className="inline-flex items-center gap-3 px-7 sm:px-8 py-4 rounded-xl font-mono-code text-xs sm:text-sm uppercase font-bold bg-gradient-to-r from-[#2563FF] via-[#1d4ed8] to-[#35D9FF] hover:from-[#1d4ed8] hover:to-[#35D9FF] text-white shadow-xl shadow-[#2563FF]/30 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer border border-[#35D9FF]/40"
            >
              <span>[ EXPLORE MY WORK ]</span>
              <ArrowDown className="w-4 h-4 text-white animate-bounce" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-4 rounded-xl font-mono-code text-xs sm:text-sm uppercase font-bold border border-[#35D9FF]/45 bg-[#071A3D]/60 hover:bg-[#0A2463]/90 hover:border-[#35D9FF] text-[#F5FAFF] shadow-lg shadow-[#050816]/50 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <span>LET&apos;S CONNECT</span>
              <ArrowUpRight className="w-4 h-4 text-[#35D9FF]" />
            </a>
          </div>

        </div>

        {/* FLOATING RETRO-COMPUTING ACCENT BADGE (Subtle desktop window at bottom right) */}
        <div className="hidden lg:flex absolute right-6 bottom-4 items-center gap-3 p-3 rounded-2xl glass-panel border border-[#35D9FF]/30 text-xs font-mono-code text-slate-300 animate-float-slow">
          <div className="w-8 h-8 rounded-xl bg-[#2563FF]/25 border border-[#35D9FF]/40 flex items-center justify-center text-[#35D9FF]">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="text-[11px] leading-tight">
            <div className="text-[#35D9FF] font-semibold">DIỄM_OS v2.6</div>
            <div className="text-[#94A3B8] text-[10px]">OPERATIONS RUNTIME ACTIVE</div>
          </div>
        </div>

      </div>
    </section>
  );
}
