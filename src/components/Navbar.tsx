"use client";

import { useState } from "react";
import { Mail, Check, Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#040006]/85 backdrop-blur-xl border-b border-white/[0.08] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 via-indigo-600 to-cyan-400 flex items-center justify-center text-white font-mono-code text-xs font-bold shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            VD
          </span>
          <div className="flex flex-col">
            <span className="font-serif-title font-semibold text-base sm:text-lg tracking-tight text-white group-hover:text-amber-300 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] font-mono-code text-zinc-400 -mt-1 tracking-wider">
              Design · Video AI · Web · App
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono-code tracking-wider uppercase text-zinc-400">
          <a href="#services" className="hover:text-amber-300 transition-colors">
            Dịch vụ nhận làm
          </a>
          <a href="#about" className="hover:text-amber-300 transition-colors">
            Về tôi & Quy trình
          </a>
          <a href="#projects" className="hover:text-amber-300 transition-colors">
            Sản phẩm mẫu
          </a>
          <a href="#contact" className="hover:text-amber-300 transition-colors">
            Báo giá & Liên hệ
          </a>
        </nav>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={copyEmail}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono-code border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 transition-all cursor-pointer"
            title="Nhấp để sao chép email"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Đã sao chép!</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>{PERSONAL_INFO.email}</span>
              </>
            )}
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Nhận báo giá</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg border border-white/10 text-zinc-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-5 space-y-2 border-t border-white/10 bg-[#040006]/95 backdrop-blur-2xl">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-xs font-mono-code uppercase text-zinc-300 hover:bg-white/5"
          >
            Dịch vụ nhận làm
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-xs font-mono-code uppercase text-zinc-300 hover:bg-white/5"
          >
            Về tôi & Quy trình
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-xs font-mono-code uppercase text-zinc-300 hover:bg-white/5"
          >
            Sản phẩm mẫu
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-xs font-mono-code uppercase text-zinc-300 hover:bg-white/5"
          >
            Báo giá & Liên hệ
          </a>
        </div>
      )}
    </header>
  );
}
