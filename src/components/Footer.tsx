"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 sm:py-16 border-t border-[#35D9FF]/20 bg-[#050816] text-xs font-mono-code text-[#94A3B8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* LEFT: BRAND & SUBTITLE */}
        <div className="space-y-1">
          <Link href="/" className="inline-block">
            <span className="font-display font-black text-2xl text-white tracking-tight hover:text-[#35D9FF] transition-colors">
              DIỄM<span className="text-[#35D9FF] text-xs align-super ml-0.5">®</span>
            </span>
          </Link>
          <div className="text-[11px] text-[#35D9FF] font-semibold tracking-wider">
            BUSINESS OPERATIONS × DIGITAL × AI
          </div>
        </div>

        {/* CENTER: COPYRIGHT */}
        <div className="text-slate-400">
          © 2026 Võ Ngọc Diễm. All rights reserved.
        </div>

        {/* RIGHT: BACK TO TOP ↑ */}
        <div>
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-[#071A3D]/70 hover:bg-[#0A2463] border border-[#35D9FF]/30 hover:border-[#35D9FF] text-[#F5FAFF] transition-all cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(53,217,255,0.25)]"
          >
            <span>Back to top ↑</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#35D9FF] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
