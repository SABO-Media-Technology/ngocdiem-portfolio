"use client";

import Link from "next/link";
import { Code2, Sparkles, Palette, ArrowRight, CheckCircle2 } from "lucide-react";
import Scene3D from "./Scene3D";
import { SERVICES } from "@/data/portfolioData";

const SERVICE_ICONS = [Code2, Sparkles, Palette];

export default function Services() {
  return (
    <section
      id="services"
      className="snap-section relative w-full min-h-screen py-24 px-4 sm:px-8 overflow-hidden bg-[#050816] flex flex-col justify-center"
    >
      {/* ── 3D Scene Background Layer ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Scene3D variant="services" />
      </div>
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] opacity-10 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at top right, #35D9FF 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] opacity-8 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, #2563FF 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section header */}
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono-code text-xs tracking-widest text-[#35D9FF] opacity-80">
            // 03 — SERVICES
          </span>
          <span className="flex-1 h-px bg-gradient-to-r from-[#35D9FF]/30 to-transparent" />
        </div>

        <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#F5FAFF] mb-14 leading-none">
          TÔI CÓ THỂ{" "}
          <span className="text-chrome">GIÚP GÌ?</span>
        </h2>

        {/* 3-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const isFirst = idx === 0;
            const ServiceIcon = SERVICE_ICONS[idx % SERVICE_ICONS.length] ?? Sparkles;

            return (
              <div
                key={service.title ?? idx}
                className="
                  chrome-glass-card
                  relative
                  rounded-3xl p-8
                  border border-[#35D9FF]/20 hover:border-[#35D9FF]/60
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(53,217,255,0.12)]
                  flex flex-col gap-6
                  group
                  bg-[#071A3D]/40 backdrop-blur-md
                "
              >
                {/* HUD corners on first card only */}
                {isFirst && (
                  <>
                    <span className="hud-corner-tl" aria-hidden />
                    <span className="hud-corner-tr" aria-hidden />
                    <span className="hud-corner-bl" aria-hidden />
                    <span className="hud-corner-br" aria-hidden />
                  </>
                )}

                {/* Top row: Number & Icon Badge */}
                <div className="flex items-center justify-between">
                  <span className="font-display font-black text-5xl sm:text-6xl text-[#35D9FF] group-hover:text-white transition-colors duration-300 tracking-tighter leading-none">
                    0{idx + 1}
                  </span>
                  <div className="genz-icon-badge w-12 h-12 rounded-2xl shadow-[0_0_16px_rgba(53,217,255,0.25)]">
                    <ServiceIcon size={20} className="text-[#35D9FF]" />
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-[#F5FAFF] leading-tight tracking-tight">
                    {service.title}
                  </h3>
                  {service.titleEN && (
                    <p className="font-mono-code text-xs text-[#35D9FF] opacity-70 mt-1 tracking-wider">
                      {service.titleEN}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-urbanist">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-[#35D9FF]/30 via-[#2563FF]/20 to-transparent" />

                {/* Tag pills with micro check icons */}
                {Array.isArray(service.items) && service.items.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {service.items.map((item: string) => (
                      <span
                        key={item}
                        className="
                          inline-flex items-center gap-1.5
                          px-3 py-1
                          rounded-full
                          bg-[#0A2463]/70
                          border border-[#35D9FF]/30
                          text-xs font-mono-code text-slate-200
                          tracking-wide
                          transition-colors duration-200
                          group-hover:border-[#35D9FF]/60
                        "
                      >
                        <CheckCircle2 size={10} className="text-[#35D9FF] shrink-0 opacity-70" />
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-5">
          <p className="text-slate-300 text-base">
            Bạn cần một trong những dịch vụ này?
          </p>
          <Link
            href="#contact"
            className="
              inline-flex items-center gap-2
              px-7 py-3
              rounded-xl
              font-mono-code text-xs font-bold uppercase tracking-widest
              text-[#F5FAFF]
              transition-all duration-300
              hover:scale-105 hover:shadow-[0_0_24px_rgba(37,99,255,0.5)]
              active:scale-95
            "
            style={{
              background: "linear-gradient(90deg, #2563FF 0%, #35D9FF 100%)",
            }}
          >
            LIÊN HỆ NGAY
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
