"use client";

import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { PORTFOLIO_WORKS, PortfolioWork } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "design" | "video_ai" | "web" | "app">("all");
  const [activeWork, setActiveWork] = useState<PortfolioWork | null>(null);

  const filteredWorks =
    selectedCategory === "all" ? PORTFOLIO_WORKS : PORTFOLIO_WORKS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="space-y-8 scroll-mt-24">
      {/* Section Header & Filters */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <span className="font-mono-code text-xs px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
            03 // DỰ ÁN TIÊU BIỂU
          </span>
          <h2 className="font-serif-title text-2xl sm:text-3xl text-white tracking-tight pt-1">
            Một Số Sản Phẩm & Mẫu Dự Án Đã Thực Hiện
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Tổng hợp các ấn phẩm thiết kế, video AI, trang web và ứng dụng di động
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono-code overflow-x-auto self-start sm:self-auto">
          {(
            [
              { key: "all", label: "TẤT CẢ" },
              { key: "design", label: "POSTER / ĐỒ HỌA" },
              { key: "video_ai", label: "VIDEO AI" },
              { key: "web", label: "LÀM WEB" },
              { key: "app", label: "LÀM APP" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedCategory(tab.key)}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === tab.key
                  ? "bg-amber-400 text-black font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorks.map((work) => (
          <div
            key={work.id}
            className="group rounded-2xl overflow-hidden glass-panel flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
          >
            {/* Header Banner */}
            <div
              className={`h-44 bg-gradient-to-br ${work.gradient} p-6 flex flex-col justify-between relative overflow-hidden text-white border-b border-white/10`}
            >
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

              <div className="flex items-center justify-between z-10">
                <span className="px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-md text-amber-300 font-mono-code text-[10px] uppercase font-bold tracking-wider border border-amber-400/20">
                  {work.categoryLabel}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-white/10 text-zinc-300">
                  {work.badge}
                </span>
              </div>

              <div className="z-10">
                <h3 className="font-serif-title text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                  {work.title}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-xs sm:text-sm text-zinc-400 line-clamp-3 leading-relaxed font-light">
                {work.description}
              </p>

              <div className="space-y-4">
                {/* Tools */}
                <div className="flex flex-wrap gap-1.5">
                  {work.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-white/[0.04] text-zinc-300 border border-white/5"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => setActiveWork(work)}
                  className="w-full py-2.5 rounded-xl text-xs font-mono-code uppercase font-semibold bg-white/[0.04] hover:bg-amber-400 hover:text-black border border-white/10 hover:border-amber-400 text-zinc-200 transition-all flex items-center justify-center gap-1.5 group/btn cursor-pointer"
                >
                  <span>Xem chi tiết giải pháp</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      <ProjectModal work={activeWork} onClose={() => setActiveWork(null)} />
    </section>
  );
}
