"use client";

import { useState } from "react";
import { SELECTED_PROJECTS, ProjectCaseStudy } from "@/data/portfolioData";
import CaseStudyModal from "./CaseStudyModal";
import { ArrowUpRight, Sparkles, Layers, Eye, FolderGit2 } from "lucide-react";

export default function SelectedWork() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectCaseStudy | null>(null);

  return (
    <section id="work" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Volumetric Glows */}
      <div className="volumetric-glow -top-40 -left-40 w-[600px] h-[600px] bg-[#2563FF]/15" />
      <div className="volumetric-glow bottom-20 right-0 w-[550px] h-[550px] bg-[#35D9FF]/12" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        
        {/* SECTION HEADER */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs font-mono-code text-[#35D9FF]">
            <span className="font-pixel text-[10px]">SECTION // 03</span>
            <span className="w-8 h-[1px] bg-[#35D9FF]/40" />
            <span>PORTFOLIO EXHIBIT</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
                SELECTED <span className="text-chrome">WORK</span>
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#94A3B8] font-heading">
                In-depth editorial case studies across business operations, digital ecosystems, AI workflows and brand design.
              </p>
            </div>

            <div className="px-4 py-2 rounded-xl bg-[#071A3D]/70 border border-[#35D9FF]/30 text-xs font-mono-code text-[#35D9FF] flex items-center gap-2 self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-[#35D9FF] animate-pulse" />
              <span>4 MASTER CASE STUDIES</span>
            </div>
          </div>
        </div>

        {/* 4 LARGE EDITORIAL PROJECT CARDS */}
        <div className="space-y-12 sm:space-y-16">
          {SELECTED_PROJECTS.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl p-6 sm:p-10 chrome-glass-card border border-[#35D9FF]/25 hover:border-[#35D9FF]/70 transition-all duration-500 space-y-8"
              >
                {/* HUD Corners */}
                <div className="hud-corner-tl" />
                <div className="hud-corner-tr" />
                <div className="hud-corner-bl" />
                <div className="hud-corner-br" />

                {/* Top Meta Line: Number, Tags & Ecosystem context */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#35D9FF]/15">
                  <div className="flex items-center gap-3">
                    <span className="font-pixel text-2xl sm:text-3xl text-[#35D9FF]">
                      PROJECT {project.number}
                    </span>
                    <span className="font-mono-code text-xs text-[#94A3B8]">
                      // CASE_STUDY
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-[#2563FF]/20 border border-[#35D9FF]/30 text-[11px] font-mono-code text-[#35D9FF]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Core Description & Action Bar */}
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white group-hover:text-[#35D9FF] transition-colors leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-base sm:text-lg text-slate-200 font-heading leading-relaxed">
                      “{project.description}”
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-xs font-mono-code text-[#94A3B8]">
                      <span className="text-[#35D9FF] font-semibold">ROLE:</span>
                      <span>{project.role}</span>
                    </div>

                    {/* View Case Study Button */}
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedCaseStudy(project)}
                        className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl font-mono-code text-xs uppercase font-bold bg-gradient-to-r from-[#2563FF] to-[#35D9FF] text-white shadow-lg shadow-[#2563FF]/30 hover:opacity-95 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        <span>VIEW CASE STUDY</span>
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Key Challenge & Approach Preview */}
                  <div className="lg:col-span-5 p-5 rounded-2xl bg-[#050816]/70 border border-[#35D9FF]/20 space-y-3 font-heading">
                    <div className="text-[11px] font-mono-code text-[#35D9FF] flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      <span>OPERATIONAL SUMMARY</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.approach}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-0.5 rounded-md bg-[#0A2463]/70 border border-[#35D9FF]/20 text-[10px] font-mono-code text-slate-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* VISUAL DELIVERABLE PLACEHOLDERS (Exact items requested in Section 8) */}
                <div className="pt-4 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono-code text-[#35D9FF]">
                    <span className="flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      VISUAL ASSET VAULT & DELIVERABLES:
                    </span>
                    <span className="text-[10px] text-[#94A3B8]">
                      CLICK &quot;VIEW CASE STUDY&quot; FOR FULL SPECS
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                    {project.gallery.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedCaseStudy(project)}
                        className="group/card p-3 rounded-xl bg-[#071A3D]/70 hover:bg-[#0A2463] border border-[#35D9FF]/20 hover:border-[#35D9FF] transition-all cursor-pointer space-y-1.5 flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between text-[9px] font-mono-code text-[#35D9FF]">
                          <span className="font-pixel">0{idx + 1}</span>
                          <span className="text-[#94A3B8] truncate max-w-[60px]">
                            {item.category}
                          </span>
                        </div>

                        <div className="text-xs font-display font-bold text-white group-hover/card:text-[#35D9FF] transition-colors leading-tight line-clamp-2">
                          {item.label}
                        </div>

                        <div className="text-[10px] text-[#94A3B8] font-mono-code truncate">
                          {item.badge}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
}
