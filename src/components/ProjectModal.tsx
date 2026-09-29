"use client";

import { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, Layers } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full rounded-2xl bg-[#09050d] border border-white/10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`p-6 sm:p-8 bg-gradient-to-br ${project.gradient} text-white relative border-b border-white/10`}>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Đóng cửa sổ"
          >
            <X className="w-4 h-4" />
          </button>

          <span className="inline-block px-2.5 py-1 rounded-md bg-amber-400/20 text-amber-300 font-mono-code text-[11px] uppercase font-bold tracking-wider mb-2 border border-amber-400/30">
            {project.categoryLabel}
          </span>
          <h3 className="font-serif-title text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 mt-1 font-light">{project.subtitle}</p>

          {project.metrics && (
            <div className="mt-3 inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono-code border border-emerald-500/30">
              ⚡ {project.metrics}
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-zinc-300">
          <div>
            <h4 className="font-mono-code text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              // TỔNG QUAN GIẢI PHÁP
            </h4>
            <p className="text-sm sm:text-base leading-relaxed font-light text-zinc-200">
              {project.detailedDescription}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-2.5 pt-3 border-t border-white/10">
            <h4 className="font-mono-code text-xs font-bold uppercase tracking-wider text-amber-400">
              // ĐIỂM NHẤN KIẾN TRÚC & TÍNH NĂNG
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-light">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture */}
          <div className="space-y-2.5 pt-3 border-t border-white/10">
            <h4 className="font-mono-code text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>// CẤU TRÚC KỸ THUẬT</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-zinc-300 font-mono-code bg-black/40 p-4 rounded-xl border border-white/5">
              {project.architecture.map((arch, i) => (
                <li key={i} className="text-zinc-400">
                  <span className="text-amber-400">▸</span> {arch}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech badges */}
          <div className="pt-3 border-t border-white/10">
            <h4 className="font-mono-code text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              // CÔNG NGHỆ ÁP DỤNG
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-xs font-mono-code bg-white/[0.04] text-zinc-200 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-black/60 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono-code font-semibold bg-amber-400 hover:bg-amber-300 text-black transition-all shadow-md shadow-amber-400/20"
              >
                <span>Live Demo / App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono-code border border-white/20 bg-white/5 text-zinc-200 hover:bg-white/10 transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub Repo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-mono-code text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
