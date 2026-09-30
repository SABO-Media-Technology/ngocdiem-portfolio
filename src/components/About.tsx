"use client";

import Image from "next/image";
import { GraduationCap, MapPin, Compass, Sparkles } from "lucide-react";
import Scene3D from "./Scene3D";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function About() {
  const paragraphs = PERSONAL_INFO.about.split("\n\n");

  return (
    <section
      id="about"
      className="snap-section relative w-full min-h-screen py-24 px-4 sm:px-8 overflow-hidden bg-[#050816] flex flex-col justify-center"
    >
      {/* ── 3D Scene Background Layer ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Scene3D variant="about" />
      </div>
      {/* Subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at center, #2563FF 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section badge */}
        <div className="mb-10 flex items-center gap-3">
          <span className="font-mono-code text-xs tracking-widest text-[#35D9FF] opacity-80">
            // 02 — ABOUT
          </span>
          <span className="flex-1 h-px bg-gradient-to-r from-[#35D9FF]/30 to-transparent" />
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ── LEFT: Portrait ── */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div
              className="
                chrome-glass-card
                relative
                w-full max-w-sm lg:max-w-none
                aspect-[3/4]
                rounded-3xl
                overflow-hidden
                border border-[#35D9FF]/30
                group
                hover:border-[#35D9FF]/70
                hover:shadow-[0_20px_60px_-15px_rgba(53,217,255,0.3)]
                transition-all duration-500
              "
            >
              {/* HUD corner decorators */}
              <span className="hud-corner-tl" aria-hidden />
              <span className="hud-corner-tr" aria-hidden />
              <span className="hud-corner-bl" aria-hidden />
              <span className="hud-corner-br" aria-hidden />

              {/* Portrait image */}
              <Image
                src={PERSONAL_INFO.avatar}
                alt={`Chân dung ${PERSONAL_INFO.name}`}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
              />

              {/* Blue gradient overlay at bottom */}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, #050816 0%, #071A3D88 55%, transparent 100%)",
                }}
              />

              {/* Scan-line texture overlay */}
              <div
                aria-hidden
                className="digital-noise absolute inset-0 opacity-10 pointer-events-none"
              />

              {/* Frosted glass badge at bottom */}
              <div
                className="
                  absolute bottom-5 left-1/2 -translate-x-1/2
                  flex flex-col items-center gap-1
                  px-6 py-3
                  rounded-2xl
                  border border-[#35D9FF]/30
                  backdrop-blur-md
                  bg-[#071A3D]/70
                  shadow-lg shadow-[#35D9FF]/10
                  w-[85%]
                  group-hover:border-[#35D9FF]/60
                  transition-all duration-300
                "
              >
                <span className="font-display font-black text-sm tracking-widest text-[#F5FAFF] uppercase">
                  {PERSONAL_INFO.name}
                </span>
                <span className="font-mono-code text-[10px] tracking-[0.25em] text-[#35D9FF] uppercase font-semibold">
                  DIGITAL • CREATIVE • BUSINESS
                </span>
              </div>

              {/* Top-left HUD label */}
              <div
                className="
                  absolute top-4 left-4
                  font-mono-code text-[9px] tracking-widest
                  text-[#35D9FF]/80 font-bold
                "
              >
                DIEM.SYS_v2.6
              </div>

              {/* Top-right status dot */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 border border-[#35D9FF]/30 backdrop-blur-sm">
                <span className="block w-2 h-2 rounded-full bg-[#35D9FF] animate-ping" />
                <span className="font-mono-code text-[9px] text-[#35D9FF] tracking-widest font-semibold">
                  ONLINE
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Text content in Frosted Glass Card ── */}
          <div className="lg:col-span-7 chrome-glass-card rounded-3xl p-8 sm:p-10 border border-[#35D9FF]/20 flex flex-col justify-center gap-6 relative overflow-hidden backdrop-blur-md bg-[#071A3D]/40">
            {/* HUD corners */}
            <span className="hud-corner-tl" aria-hidden />
            <span className="hud-corner-tr" aria-hidden />
            <span className="hud-corner-bl" aria-hidden />
            <span className="hud-corner-br" aria-hidden />

            {/* Heading */}
            <div>
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#F5FAFF] leading-tight mb-2">
                ABOUT <span className="text-chrome">ME.</span>
              </h2>
              <p className="font-mono-code text-xs sm:text-sm text-[#35D9FF] tracking-[0.25em] uppercase opacity-90 font-semibold">
                VÕ NGỌC DIỄM • DIGITAL &amp; OPERATIONS
              </p>
            </div>

            {/* Body paragraphs */}
            <div className="flex flex-col gap-4 font-urbanist text-slate-200 leading-relaxed text-base sm:text-lg">
              {paragraphs.map((para, idx) => (
                <p key={idx}>
                  {para.trim()}
                </p>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-[#35D9FF]/40 via-[#2563FF]/20 to-transparent" />

            {/* Tagline */}
            <div className="flex items-center gap-3">
              <span
                className="block w-2 h-2 rounded-full bg-[#35D9FF] shadow-[0_0_8px_#35D9FF]"
                aria-hidden
              />
              <span className="font-mono-code text-xs tracking-[0.25em] text-[#35D9FF] uppercase font-semibold">
                TÀI CHÍNH × DIGITAL × CREATIVE
              </span>
            </div>

            {/* Editorial info cards with icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-1">
              {[
                { title: "CHUYÊN NGÀNH", desc: "Tài Chính – Ngân Hàng", icon: GraduationCap },
                { title: "ĐỊA ĐIỂM", desc: "TP. Hồ Chí Minh", icon: MapPin },
                { title: "PHƯƠNG CHÂM", desc: "Thực tiễn & Sáng tạo", icon: Compass },
              ].map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="
                      rounded-2xl p-3.5
                      bg-[#050816]/70
                      border border-[#35D9FF]/25
                      flex flex-col gap-1.5
                      text-left
                      hover:border-[#35D9FF]/60
                      hover:bg-[#071A3D]/60
                      transition-all
                      group/card
                    "
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono-code text-[10px] text-[#35D9FF] tracking-wider uppercase font-semibold">
                        {item.title}
                      </span>
                      <ItemIcon size={13} className="text-[#35D9FF]/60 group-hover/card:text-[#35D9FF] transition-colors" />
                    </div>
                    <span className="font-urbanist font-medium text-xs sm:text-sm text-slate-200">
                      {item.desc}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
