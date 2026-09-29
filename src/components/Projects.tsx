"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
    <section id="projects" className="space-y-6 scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <span className="font-mono-code text-[11px] text-cyan-400 font-semibold tracking-wider uppercase">
            // 03. SẢN PHẨM MẪU
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Một Số Dự Án Đã Làm
          </h2>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-blue-950/40 border border-blue-500/20 text-xs font-mono-code overflow-x-auto">
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
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === tab.key
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-sm shadow-blue-500/20"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((work) => (
          <div
            key={work.id}
            className="rounded-2xl p-5 glass-card flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono-code uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-400/20">
                  {work.categoryLabel}
                </span>
                {work.highlight && (
                  <span className="text-[10px] font-mono-code text-blue-300/80">
                    {work.highlight}
                  </span>
                )}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                {work.title}
              </h3>

              <p className="text-xs text-slate-300 font-normal leading-relaxed">{work.desc}</p>
            </div>

            <div className="space-y-3 pt-3 border-t border-blue-500/15">
              <div className="flex flex-wrap gap-1.5">
                {work.tools.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-blue-950/50 text-blue-200 border border-blue-500/15"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href={getCategoryLink(work.category)}
                className="inline-flex items-center gap-1 text-[11px] font-mono-code text-cyan-400 hover:text-cyan-200 hover:underline pt-0.5"
              >
                <span>Xem chi tiết mảng này</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
