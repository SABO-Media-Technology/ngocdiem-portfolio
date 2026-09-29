"use client";

import { useState } from "react";
import { Mail, Check, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
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
    <header className="sticky top-0 z-40 bg-[#070d1e]/85 backdrop-blur-xl border-b border-blue-500/15 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white font-mono-code text-xs font-bold shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
            VD
          </span>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] font-mono-code text-blue-300/80 -mt-0.5 tracking-wider">
              Creative · Tech
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono-code tracking-wider uppercase text-slate-300">
          <a href="#services" className="hover:text-cyan-300 transition-colors">
            Dịch vụ
          </a>
          <a href="#about" className="hover:text-cyan-300 transition-colors">
            Về tôi
          </a>
          <a href="#projects" className="hover:text-cyan-300 transition-colors">
            Sản phẩm mẫu
          </a>
          <a href="#contact" className="hover:text-cyan-300 transition-colors">
            Liên hệ
          </a>
        </nav>

        {/* Action buttons */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={copyEmail}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono-code border border-blue-500/20 bg-blue-950/30 hover:bg-blue-900/40 text-blue-200 transition-all cursor-pointer"
            title="Nhấp để sao chép email"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold">Đã chép!</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.email}</span>
              </>
            )}
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-md shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Nhắn tin</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg border border-blue-500/20 text-slate-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-5 space-y-2 border-t border-blue-500/20 bg-[#070d1e]/98 backdrop-blur-2xl">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-xs font-mono-code uppercase text-slate-200 hover:bg-blue-950/40"
          >
            Dịch vụ
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-xs font-mono-code uppercase text-slate-200 hover:bg-blue-950/40"
          >
            Về tôi
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-xs font-mono-code uppercase text-slate-200 hover:bg-blue-950/40"
          >
            Sản phẩm mẫu
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-xs font-mono-code uppercase text-slate-200 hover:bg-blue-950/40"
          >
            Liên hệ
          </a>
        </div>
      )}
    </header>
  );
}
