"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, FolderGit2, Layers } from "lucide-react";
import { PORTFOLIO_WORKS } from "@/data/portfolioData";

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "design" | "video_ai" | "web" | "app">("all");

  const filtered =
    filter === "all" ? PORTFOLIO_WORKS : PORTFOLIO_WORKS.filter((w) => w.category === filter);

  const getCategoryLink = (category: string) => {
    switch (category) {
      case "design":
        return "/poster";
      case "video_ai":
        return "/video-ai";
      case "web":
      case "app":
        return "/web-app";
      default:
        return "/";
    }
  };

  return (
    <section id="projects" className="space-y-8 scroll-mt-24">
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-blue-500/15">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="font-pixel text-[10px] text-cyan-400 tracking-widest uppercase">
              // SECTOR 02: DỰ ÁN & SẢN PHẨM MẪU
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kho Lưu Trữ Dự Án
          </h2>
        </div>

        {/* Filter buttons styled as digital terminal selectors */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-blue-950/40 border border-blue-500/20 text-xs font-mono-code overflow-x-auto">
          {[
            { key: "all", label: "TẤT CẢ" },
            { key: "design", label: "POSTER" },
            { key: "video_ai", label: "VIDEO AI" },
            { key: "web", label: "WEB" },
            { key: "app", label: "APP" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as any)}
              className={`px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap text-xs font-mono-code ${
                filter === tab.key
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-md shadow-blue-500/25 border border-cyan-400/40"
                  : "text-slate-300 hover:text-white hover:bg-blue-900/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((work) => (
          <div
            key={work.id}
            className="chrome-glass-card rounded-3xl p-6 flex flex-col justify-between space-y-5 group"
          >
            {/* Corner HUD markers */}
            <div className="hud-corner-tl" />
            <div className="hud-corner-br" />

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-pixel uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-400/25">
                  {work.categoryLabel}
                </span>
                {work.highlight && (
                  <span className="text-[10px] font-mono-code text-blue-300/80">
                    {work.highlight}
                  </span>
                )}
              </div>

              <h3 className="font-techno text-base sm:text-lg font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                {work.title}
              </h3>

              <p className="text-xs text-slate-300 font-normal leading-relaxed">
                {work.desc}
              </p>
            </div>

            <div className="space-y-3.5 pt-3 border-t border-blue-500/15">
              {/* Tool tags */}
              <div className="flex flex-wrap gap-1.5">
                {work.tools.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md text-[10px] font-mono-code bg-blue-950/60 text-blue-200 border border-blue-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href={getCategoryLink(work.category)}
                className="inline-flex items-center gap-1.5 text-xs font-mono-code text-cyan-400 hover:text-cyan-200 hover:underline pt-1 group/link"
              >
                <span>Xem chi tiết phân vùng</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
