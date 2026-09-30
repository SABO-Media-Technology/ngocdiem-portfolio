"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, Terminal } from "lucide-react";
import Scene3D from "./Scene3D";
import { PERSONAL_INFO } from "@/data/portfolioData";
import MarqueeTicker from "./MarqueeTicker";

export default function Hero() {
  /* ── Mouse parallax state ─────────────────────────────────────────── */
  const [mouse, setMouse] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to [-1, 1]
      const x = (e.clientX / window.innerWidth  - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Parallax transform values (subtle)
  const parallaxStyle = {
    transform: `translate(${mouse.x * -10}px, ${mouse.y * -6}px)`,
    transition: "transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  };

  const handleScroll = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="snap-section relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#050816]"
    >
      {/* ── Real-time 3D WebGL Scene Canvas ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Scene3D />
      </div>

      {/* ── Volumetric glow orbs ──────────────────────────────────────── */}
      <div
        className="volumetric-glow absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(37,99,255,0.18) 0%, transparent 70%)",
          filter: "blur(48px)",
        }}
      />
      <div
        className="volumetric-glow absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(circle at 60% 60%, rgba(53,217,255,0.14) 0%, transparent 70%)",
          filter: "blur(56px)",
        }}
      />
      <div
        className="volumetric-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37,99,255,0.08) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      {/* ── Retro grid overlay ────────────────────────────────────────── */}
      <div className="retro-grid absolute inset-0 pointer-events-none z-[1] opacity-30" />

      {/* ── Digital noise overlay ─────────────────────────────────────── */}
      <div className="digital-noise absolute inset-0 pointer-events-none z-[2] opacity-20" />

      {/* ── HUD corners ───────────────────────────────────────────────── */}
      <div className="hud-corner-tl absolute top-8 left-8 z-10 pointer-events-none" />
      <div className="hud-corner-tr absolute top-8 right-8 z-10 pointer-events-none" />
      <div className="hud-corner-bl absolute bottom-8 left-8 z-10 pointer-events-none" />
      <div className="hud-corner-br absolute bottom-8 right-8 z-10 pointer-events-none" />

      {/* ── Main content ──────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-28 pb-8 w-full max-w-7xl mx-auto my-auto">

        {/* Live label with Saigon real-time clock */}
        <div className="flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-[#35D9FF]/20 bg-[#071A3D]/50 backdrop-blur-sm shadow-sm">
          {/* Live dot */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#35D9FF] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#35D9FF]" />
          </span>
          <span className="font-mono-code text-[11px] tracking-[0.25em] text-[#35D9FF] font-semibold uppercase">
            {PERSONAL_INFO?.name ?? "VÕ NGỌC DIỄM"}
          </span>
          <span className="text-[#35D9FF]/40 text-xs">|</span>
          <span className="font-mono-code text-[10px] tracking-wider text-slate-400 uppercase">
            HCM • 2026
          </span>
        </div>

        {/* Giant stacked headline with parallax */}
        <div
          ref={headlineRef}
          style={parallaxStyle}
          className="mb-8 select-none"
          aria-label="Digital Creative Business"
        >
          {/* Line 1: DIGITAL — outlined */}
          <div
            className="font-display font-black tracking-tighter leading-[0.88]"
            style={{
              fontSize: "clamp(3.8rem, 13vw, 9.5rem)",
            }}
          >
            <span className="text-outline text-transparent">DIGITAL</span>
          </div>

          {/* Line 2: CREATIVE — chrome gradient */}
          <div
            className="font-display font-black tracking-tighter leading-[0.88]"
            style={{
              fontSize: "clamp(3.8rem, 13vw, 9.5rem)",
            }}
          >
            <span className="text-chrome">CREATIVE</span>
          </div>

          {/* Line 3: BUSINESS — solid white */}
          <div
            className="font-display font-black tracking-tighter leading-[0.88]"
            style={{
              fontSize: "clamp(3.8rem, 13vw, 9.5rem)",
            }}
          >
            <span className="text-[#F5FAFF]">BUSINESS</span>
          </div>
        </div>

        {/* Tagline */}
        <p className="max-w-xl text-slate-300 text-base sm:text-lg leading-relaxed mb-10 font-urbanist font-normal">
          Tôi thiết kế website, xây dựng nội dung và phát triển hình ảnh số cho
          doanh nghiệp.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
          {/* Primary: gradient button */}
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#work");
            }}
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-mono-code text-xs tracking-widest font-bold text-[#F5FAFF] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_rgba(37,99,255,0.5)]"
            style={{
              background: "linear-gradient(135deg, #2563FF 0%, #35D9FF 100%)",
            }}
          >
            XEM DỰ ÁN
            <ArrowUpRight
              size={16}
              strokeWidth={2.5}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </a>

          {/* Secondary: outline button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#contact");
            }}
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-mono-code text-xs tracking-widest font-bold text-[#35D9FF] border border-[#35D9FF]/50 hover:border-[#35D9FF] hover:bg-[#35D9FF]/10 transition-all duration-300 hover:scale-105"
          >
            LIÊN HỆ
            <ArrowUpRight
              size={16}
              strokeWidth={2.5}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </a>
        </div>
      </div>

      {/* ── Marquee Ticker at bottom of hero ── */}
      <div className="w-full relative z-10">
        <MarqueeTicker />
      </div>
    </section>
  );
}
