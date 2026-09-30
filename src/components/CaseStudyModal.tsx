"use client";

import { useEffect, useState } from "react";
import { ProjectCaseStudy } from "@/data/portfolioData";
import { X, CheckCircle, Wrench, ShieldAlert, Compass, Layers, Sparkles, ExternalLink, ArrowRight } from "lucide-react";

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const [activeGalleryTab, setActiveGalleryTab] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#050816]/85 backdrop-blur-2xl transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-4xl bg-[#071A3D]/95 border-2 border-[#35D9FF]/40 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto animate-in zoom-in-95 duration-200">
        
        {/* HUD Technical Corners */}
        <div className="hud-corner-tl" />
        <div className="hud-corner-tr" />
        <div className="hud-corner-bl" />
        <div className="hud-corner-br" />

        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#35D9FF]/20 bg-[#0A2463]/40">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-[#2563FF]/30 border border-[#35D9FF]/40 text-[10px] font-pixel text-[#35D9FF]">
              CASE_STUDY // {project.number}
            </span>
            <span className="font-mono-code text-xs text-[#94A3B8]">
              {project.role}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl bg-[#050816]/60 border border-[#35D9FF]/30 text-slate-300 hover:text-white hover:border-[#35D9FF] transition-all cursor-pointer"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 sm:space-y-10 custom-scrollbar">
          
          {/* 1. PROJECT NAME & TAGS */}
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#2563FF]/20 border border-[#35D9FF]/30 text-xs font-mono-code text-[#35D9FF]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              {project.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-200 font-heading leading-relaxed">
              “{project.tagline}”
            </p>
          </div>

          {/* 2. ROLE & OVERVIEW */}
          <div className="grid sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#050816]/60 border border-[#35D9FF]/20 text-xs font-mono-code">
            <div>
              <span className="text-[#35D9FF] font-pixel text-[10px] block mb-1">
                // MY ROLE
              </span>
              <span className="text-white font-semibold text-sm">
                {project.role}
              </span>
            </div>
            <div>
              <span className="text-[#35D9FF] font-pixel text-[10px] block mb-1">
                // ECOSYSTEM CONTEXT
              </span>
              <span className="text-[#94A3B8] text-xs">
                SABO Arena & Media Operations
              </span>
            </div>
          </div>

          {/* 3. CHALLENGE & 4. APPROACH */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* CHALLENGE */}
            <div className="p-6 rounded-2xl bg-[#050816]/70 border border-red-500/20 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono-code text-red-400">
                <ShieldAlert className="w-4 h-4 text-red-400" />
                <span className="font-bold">THE CHALLENGE</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-heading">
                {project.challenge}
              </p>
            </div>

            {/* APPROACH */}
            <div className="p-6 rounded-2xl bg-[#050816]/70 border border-[#35D9FF]/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#35D9FF]">
                <Compass className="w-4 h-4 text-[#35D9FF]" />
                <span className="font-bold">STRATEGIC APPROACH</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-heading">
                {project.approach}
              </p>
            </div>

          </div>

          {/* 5. WHAT I DID */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#35D9FF]">
              <Layers className="w-4 h-4" />
              <span className="font-bold uppercase tracking-wider">
                WHAT I DID // HANDS-ON EXECUTION
              </span>
            </div>

            <div className="space-y-2.5">
              {project.whatIDid.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#050816]/50 border border-[#35D9FF]/15 text-xs sm:text-sm font-heading text-slate-200"
                >
                  <span className="px-2 py-0.5 rounded bg-[#2563FF]/25 border border-[#35D9FF]/30 font-pixel text-[9px] text-[#35D9FF] shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. TOOLS */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#35D9FF]">
              <Wrench className="w-4 h-4" />
              <span className="font-bold uppercase tracking-wider">
                TOOLS & TECHNOLOGIES
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3.5 py-1.5 rounded-xl bg-[#0A2463]/70 border border-[#35D9FF]/35 text-xs font-mono-code font-medium text-white shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* 7. OUTCOME (Qualitative only, strict adherence: no fake stats) */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#071A3D] to-[#0A2463] border border-[#35D9FF]/40 space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#35D9FF]">
              <CheckCircle className="w-4 h-4 text-[#35D9FF]" />
              <span className="font-bold uppercase tracking-wider">
                QUALITATIVE OUTCOME
              </span>
            </div>
            <p className="text-sm sm:text-base text-[#F5FAFF] leading-relaxed font-heading">
              {project.outcome}
            </p>
          </div>

          {/* 8. GALLERY (Rich visual representations of deliverables) */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#35D9FF]">
                <Sparkles className="w-4 h-4" />
                <span className="font-bold uppercase tracking-wider">
                  PROJECT GALLERY & DELIVERABLES
                </span>
              </div>
              <span className="text-[11px] font-mono-code text-[#94A3B8]">
                {project.gallery.length} ASSETS
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {project.gallery.map((asset, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#050816]/75 border border-[#35D9FF]/25 hover:border-[#35D9FF] transition-all space-y-2.5 group"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono-code text-[#35D9FF]">
                    <span className="font-pixel">{asset.badge || "ASSET"}</span>
                    <span className="text-[#94A3B8]">{asset.category}</span>
                  </div>

                  <div className="font-display font-bold text-white text-base group-hover:text-[#35D9FF] transition-colors">
                    {asset.label}
                  </div>

                  <p className="text-xs text-[#94A3B8] leading-relaxed font-heading">
                    {asset.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-[#35D9FF]/20 bg-[#0A2463]/40 flex items-center justify-between text-xs font-mono-code">
          <span className="text-[#94A3B8]">
            DIỄM® ARCHIVE // CONFIDENTIAL REVIEW
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#2563FF] to-[#35D9FF] text-white font-bold cursor-pointer hover:opacity-90 transition-opacity"
          >
            CLOSE CASE STUDY
          </button>
        </div>

      </div>
    </div>
  );
}
