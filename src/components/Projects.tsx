"use client";

import { useState } from "react";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "flagship" | "mobile" | "web" | "ai">("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="space-y-8 scroll-mt-24">
      {/* Section Header & Filters */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <span className="font-mono-code text-xs px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
            02 // SHIPPED PRODUCTS
          </span>
          <h2 className="font-serif-title text-2xl sm:text-3xl text-white tracking-tight pt-1">
            Các Sản Phẩm Đã Ship Production
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Hệ sinh thái ứng dụng và nền tảng dịch vụ đang vận hành thực tế
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono-code overflow-x-auto self-start sm:self-auto">
          {(
            [
              { key: "all", label: "TẤT CẢ" },
              { key: "flagship", label: "CHỦ LỰC" },
              { key: "mobile", label: "MOBILE APPS" },
              { key: "web", label: "WEB & SAAS" },
              { key: "ai", label: "AI AUTOMATION" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedCategory(tab.key)}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
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
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl overflow-hidden glass-panel flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
          >
            {/* Project Header Banner */}
            <div
              className={`h-48 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden text-white border-b border-white/10`}
            >
              <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-amber-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

              <div className="flex items-center justify-between z-10">
                <span className="px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-md text-amber-300 font-mono-code text-[10px] uppercase font-bold tracking-wider border border-amber-400/20">
                  {project.categoryLabel}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50"></span>
              </div>

              <div className="z-10">
                <h3 className="font-serif-title text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-300 mt-1 line-clamp-1 font-light">{project.subtitle}</p>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-xs sm:text-sm text-zinc-400 line-clamp-3 leading-relaxed font-light">
                {project.description}
              </p>

              <div className="space-y-4">
                {/* Metrics pill if any */}
                {project.metrics && (
                  <div className="text-[11px] font-mono-code text-amber-400/90 font-medium">
                    ⚡ {project.metrics}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-white/[0.04] text-zinc-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-white/[0.02] text-zinc-500">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => setActiveProject(project)}
                  className="w-full py-2.5 rounded-xl text-xs font-mono-code uppercase font-semibold bg-white/[0.04] hover:bg-amber-400 hover:text-black border border-white/10 hover:border-amber-400 text-zinc-200 transition-all flex items-center justify-center gap-1.5 group/btn cursor-pointer"
                >
                  <span>Chi tiết ca giải pháp</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
