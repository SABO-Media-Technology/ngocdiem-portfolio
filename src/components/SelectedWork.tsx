"use client";

import Image from "next/image";
import {
  Trophy,
  Smartphone,
  Globe,
  LayoutDashboard,
  Palette,
  ArrowUpRight,
  Layers,
  Sparkles,
  LucideIcon,
  Tag,
} from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";
import Scene3D from "./Scene3D";

// Map icon name to modern Lucide component
const ICON_MAP: Record<string, LucideIcon> = {
  Trophy,
  Smartphone,
  Globe,
  LayoutDashboard,
  Palette,
};

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="snap-section-tall relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050816] min-h-screen flex flex-col justify-center"
    >
      {/* ── 3D Scene Background Layer ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Scene3D variant="work" />
      </div>

      {/* ── Atmospheric Ambient Glow Orbs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full opacity-20 blur-[130px]"
          style={{
            background: "radial-gradient(circle, #2563FF 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-10 -right-20 w-[550px] h-[550px] rounded-full opacity-15 blur-[140px]"
          style={{
            background: "radial-gradient(circle, #35D9FF 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-10 blur-[160px]"
          style={{
            background: "radial-gradient(ellipse, #0A2463 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Subtle Retro Grid Pattern ── */}
      <div className="absolute inset-0 retro-grid opacity-20 pointer-events-none" />

      {/* ── Digital Dot Screen ── */}
      <div className="absolute inset-0 digital-noise opacity-15 pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto mb-12 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={14} className="text-[#35D9FF] animate-pulse" />
              <p className="font-mono-code text-xs tracking-[0.3em] text-[#35D9FF] opacity-90 uppercase">
                // 04 — SELECTED WORK
              </p>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              SELECTED <span className="text-chrome">WORK</span>
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-md font-urbanist">
              Một số dự án và công việc thực tế tôi đã thực hiện.
            </p>
          </div>
          {/* Project Count Badge */}
          <div className="flex-shrink-0">
            <div className="genz-icon-badge gap-2 px-4 py-2 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#35D9FF] animate-pulse" />
              <span className="font-mono-code text-xs tracking-[0.2em] text-[#35D9FF] font-bold">
                05 DỰ ÁN
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Project Cards Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {PROJECTS.map((project: Project, index: number) => {
          const IconComponent = project.iconName
            ? ICON_MAP[project.iconName] ?? Layers
            : Layers;

          return (
            <article
              key={project.id ?? index}
              className="chrome-glass-card rounded-3xl p-6 sm:p-7 border border-[#35D9FF]/20 hover:border-[#35D9FF]/70 transition-all duration-400 hover:shadow-[0_20px_50px_-15px_rgba(53,217,255,0.25)] hover:-translate-y-2 group relative overflow-hidden flex flex-col justify-between h-full bg-[#071A3D]/40 backdrop-blur-md"
            >
              {/* HUD Corners on each card */}
              <div className="hud-corner-tl" />
              <div className="hud-corner-tr" />
              <div className="hud-corner-bl" />
              <div className="hud-corner-br" />

              <div>
                {/* Top Visual Area with Real Project Photography */}
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative mb-5 rounded-2xl overflow-hidden aspect-[16/10] w-full border border-white/10 group-hover:border-[#35D9FF]/60 transition-all bg-[#050816] cursor-pointer"
                  >
                    {/* Real Image */}
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(135deg, ${project.color ?? "#2563FF"}35 0%, #071A3D 60%, ${project.color ?? "#35D9FF"}20 100%)`,
                        }}
                      />
                    )}

                    {/* Dark Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-black/20 pointer-events-none" />

                    {/* Top Bar inside image */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="genz-icon-badge gap-1.5 font-mono-code text-[11px] tracking-[0.15em] text-[#35D9FF] font-black uppercase px-2.5 py-1 rounded-full shadow-[0_0_12px_rgba(53,217,255,0.3)] backdrop-blur-md">
                        <IconComponent size={13} className="text-[#35D9FF] shrink-0" />
                        0{index + 1}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#35D9FF] shadow-[0_0_8px_#35D9FF] opacity-90" />
                    </div>

                    {/* Bottom Neon Accent line */}
                    <div
                      className="absolute bottom-0 left-0 h-[2px] w-1/4 opacity-80 transition-all duration-500 group-hover:w-full"
                      style={{
                        background: `linear-gradient(90deg, ${project.color ?? "#35D9FF"}, transparent)`,
                      }}
                    />
                  </a>
                ) : (
                  <div className="relative mb-5 rounded-2xl overflow-hidden aspect-[16/10] w-full border border-white/10 group-hover:border-[#35D9FF]/50 transition-colors bg-[#050816]">
                    {/* Real Image */}
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(135deg, ${project.color ?? "#2563FF"}35 0%, #071A3D 60%, ${project.color ?? "#35D9FF"}20 100%)`,
                        }}
                      />
                    )}

                    {/* Dark Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-black/20 pointer-events-none" />

                    {/* Top Bar inside image */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="genz-icon-badge gap-1.5 font-mono-code text-[11px] tracking-[0.15em] text-[#35D9FF] font-black uppercase px-2.5 py-1 rounded-full shadow-[0_0_12px_rgba(53,217,255,0.3)] backdrop-blur-md">
                        <IconComponent size={13} className="text-[#35D9FF] shrink-0" />
                        0{index + 1}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#35D9FF] shadow-[0_0_8px_#35D9FF] opacity-90" />
                    </div>

                    {/* Bottom Neon Accent line */}
                    <div
                      className="absolute bottom-0 left-0 h-[2px] w-1/4 opacity-80 transition-all duration-500 group-hover:w-full"
                      style={{
                        background: `linear-gradient(90deg, ${project.color ?? "#35D9FF"}, transparent)`,
                      }}
                    />
                  </div>
                )}

                {/* Project Title & Category */}
                <div className="mb-3">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display font-black text-xl sm:text-2xl text-white group-hover:text-[#35D9FF] transition-colors leading-tight hover:underline inline-flex items-center gap-1.5"
                      >
                        <span>{project.title}</span>
                        <ArrowUpRight size={16} className="text-[#35D9FF] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <h3 className="font-display font-black text-xl sm:text-2xl text-white group-hover:text-[#35D9FF] transition-colors leading-tight">
                        {project.title}
                      </h3>
                    )}
                  </div>

                  {/* Category tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center gap-1 rounded-full bg-[#2563FF]/15 border border-[#35D9FF]/25 text-[10px] font-mono-code text-[#35D9FF] px-2 py-0.5 leading-none font-medium"
                        >
                          <span className="text-[#35D9FF] opacity-60">✦</span>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-urbanist mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Card Footer: Scope Pills & Live Link CTA */}
              <div className="pt-4 border-t border-[#35D9FF]/10 flex flex-col gap-3">
                {project.work && project.work.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.work.slice(0, 4).map((item: string, itemIndex: number) => (
                      <span
                        key={itemIndex}
                        className="rounded-md bg-white/5 border border-white/10 text-[11px] font-mono-code text-slate-300 px-2.5 py-1 leading-none group-hover:border-[#35D9FF]/40 group-hover:text-[#35D9FF] transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                {/* Direct Link Action Button */}
                {project.link && (
                  <div className="pt-1 flex items-center justify-between">
                    <span className="font-mono-code text-[10px] text-slate-500 uppercase tracking-widest">
                      STATUS // DEPLOYED
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2563FF]/20 hover:bg-[#2563FF] border border-[#35D9FF]/40 hover:border-[#35D9FF] text-xs font-mono-code text-[#35D9FF] hover:text-white transition-all shadow-[0_0_12px_rgba(53,217,255,0.15)] hover:shadow-[0_0_20px_rgba(53,217,255,0.4)] group/btn"
                    >
                      <span className="font-bold">{project.linkLabel ?? "XEM CHI TIẾT"}</span>
                      <ArrowUpRight size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
