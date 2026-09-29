"use client";

import { useEffect } from "react";
import { X, CheckCircle2, Wrench } from "lucide-react";
import { PortfolioWork } from "@/data/portfolioData";

interface ProjectModalProps {
  work: PortfolioWork | null;
  onClose: () => void;
}

export default function ProjectModal({ work, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (work) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [work, onClose]);

  if (!work) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full rounded-2xl bg-[#09050d] border border-white/10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`p-6 bg-gradient-to-br ${work.gradient} text-white relative border-b border-white/10`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Đóng cửa sổ"
          >
            <X className="w-4 h-4" />
          </button>

          <span className="inline-block px-2.5 py-1 rounded-md bg-amber-400/20 text-amber-300 font-mono-code text-[10px] uppercase font-bold tracking-wider mb-2 border border-amber-400/30">
            {work.categoryLabel}
          </span>
          <h3 className="font-serif-title text-xl sm:text-2xl font-bold tracking-tight text-white">
            {work.title}
          </h3>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-zinc-300">
          <div>
            <h4 className="font-mono-code text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              // MÔ TẢ YÊU CẦU & THỰC HIỆN
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed font-light text-zinc-200">
              {work.description}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-2 pt-3 border-t border-white/10">
            <h4 className="font-mono-code text-xs font-bold uppercase tracking-wider text-amber-400">
              // ĐIỂM NỔI BẬT & KẾT QUẢ ĐẠT ĐƯỢC
            </h4>
            <ul className="space-y-2 text-xs font-light">
              {work.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className="pt-3 border-t border-white/10">
            <h4 className="font-mono-code text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-cyan-400" />
              <span>// CÔNG CỤ SỬ DỤNG</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {work.tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-xs font-mono-code bg-white/[0.04] text-zinc-200 border border-white/10"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-black/60 flex items-center justify-between gap-3">
          <div className="text-xs font-mono-code text-zinc-400">
            Cần thiết kế tương tự? Hãy liên hệ với tôi.
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-mono-code font-semibold bg-amber-400 hover:bg-amber-300 text-black transition-colors cursor-pointer"
          >
            Đóng cửa sổ
          </button>
        </div>
      </div>
    </div>
  );
}
