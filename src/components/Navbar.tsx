"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

const NAV_MODULES = [
  { href: "/", label: "CHAMBER 00", title: "Cổng Chính" },
  { href: "/poster", label: "MODULE 01", title: "Poster & Print" },
  { href: "/video-ai", label: "MODULE 02", title: "Video AI" },
  { href: "/web-app", label: "MODULE 03", title: "Web & App" },
  { href: "/lien-he", label: "MODULE 04", title: "Liên Hệ" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeString, setTimeString] = useState("19:00 ICT");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setTimeString(`${hours}:${minutes} ICT`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#040816]/80 backdrop-blur-2xl border-b border-blue-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand: Technical Identity & Avatar */}
        <Link href="/" className="flex items-center gap-3.5 group cursor-pointer">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-cyan-400/40 p-0.5 bg-blue-950/40 shadow-sm shadow-cyan-500/30 group-hover:scale-105 transition-transform duration-300">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                fill
                className="object-cover object-top"
                sizes="40px"
              />
            </div>
            {/* Live activity indicator */}
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-cyan-400 border border-slate-900 animate-pulse"></span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="hidden sm:inline-block font-pixel text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-400/25">
                SYS.26
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono-code text-blue-300/70 tracking-wider">
              <span>SGN · {timeString}</span>
              <span className="text-cyan-400/50">/</span>
              <span className="text-slate-400">ONLINE</span>
            </div>
          </div>
        </Link>

        {/* Desktop Spatial Modules Nav */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-2xl bg-blue-950/30 border border-blue-500/20 backdrop-blur-md">
          {NAV_MODULES.map((mod) => {
            const isActive = pathname === mod.href;
            return (
              <Link
                key={mod.href}
                href={mod.href}
                className={`relative px-3.5 py-2 rounded-xl transition-all duration-300 flex flex-col items-start ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600/30 to-cyan-500/20 text-white border border-cyan-400/40 shadow-sm shadow-cyan-500/20"
                    : "text-slate-300 hover:text-white hover:bg-blue-900/30 border border-transparent"
                }`}
              >
                <span className="font-pixel text-[8px] tracking-widest text-cyan-400">
                  {mod.label}
                </span>
                <span className="font-techno text-xs font-semibold -mt-0.5">
                  {mod.title}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <Link
            href="/lien-he"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono-code text-xs uppercase font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-200" />
            <span>Liên hệ trao đổi</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-200" />
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-blue-500/25 bg-blue-950/40 text-slate-300 hover:text-white cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 space-y-2 border-t border-blue-500/20 bg-[#040816]/98 backdrop-blur-2xl">
          <div className="px-2 py-1 font-pixel text-[9px] text-cyan-400 tracking-widest">
            // CHỌN PHÂN VÙNG TRUY CẬP
          </div>
          {NAV_MODULES.map((mod) => {
            const isActive = pathname === mod.href;
            return (
              <Link
                key={mod.href}
                href={mod.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-cyan-500/15 text-cyan-300 font-bold border border-cyan-400/40"
                    : "text-slate-200 hover:bg-blue-950/40 border border-transparent"
                }`}
              >
                <div className="font-pixel text-[8px] text-cyan-400">{mod.label}</div>
                <div className="font-techno text-sm font-semibold">{mod.title}</div>
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl font-mono-code text-xs uppercase font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center gap-2"
            >
              <span>Gửi tin nhắn trực tiếp</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
