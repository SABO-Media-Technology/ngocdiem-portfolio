"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "TRANG CHỦ", href: "#hero" },
    { name: "DỊCH VỤ", href: "#dich-vu" },
    { name: "DỰ ÁN", href: "#du-an" },
    { name: "VỀ TÔI", href: "#ve-toi" },
    { name: "LIÊN HỆ", href: "#lien-he" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-8 flex justify-center ${
          isScrolled ? "py-2 sm:py-2.5" : ""
        }`}
      >
        <div
          className={`w-full max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-[#040816]/90 backdrop-blur-xl border border-[#35D9FF]/35 shadow-[0_10px_35px_-10px_rgba(5,8,22,0.85)]"
              : "bg-[#040816]/60 backdrop-blur-md border border-[#35D9FF]/20"
          }`}
        >
          {/* BRAND WITH AVATAR THUMBNAIL */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Võ Ngọc Diễm Trang chủ"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-cyan-400/50 shadow-sm shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Image
                src="/avatar.jpg"
                alt="Võ Ngọc Diễm"
                fill
                className="object-cover object-top"
                sizes="32px"
              />
            </div>
            <div>
              <span className="font-display font-black text-sm sm:text-base tracking-tight text-white group-hover:text-[#35D9FF] transition-colors">
                Võ Ngọc Diễm
              </span>
              <span className="hidden sm:inline-block ml-2 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/30 text-[9px] font-pixel text-cyan-300">
                SGU 2025
              </span>
            </div>
          </a>

          {/* DESKTOP NAV LINKS (SMOOTH ANCHOR SCROLL) */}
          <nav className="hidden md:flex items-center gap-1 font-mono-code text-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg text-slate-300 hover:text-cyan-200 hover:bg-blue-950/50 transition-all font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* RIGHT ACTION: LIÊN HỆ */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#lien-he"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono-code font-bold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <span>NHẬN DỰ ÁN</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-blue-950/40 border border-cyan-400/30 text-cyan-300 focus:outline-none"
            aria-label="Mở menu điều hướng"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#040816]/95 backdrop-blur-2xl md:hidden pt-24 px-6 flex flex-col justify-between pb-8">
          <div className="space-y-4">
            <div className="text-[10px] font-mono-code text-cyan-400 border-b border-blue-500/20 pb-2">
              ĐIỀU HƯỚNG // 1 TRANG PORTFOLIO
            </div>
            <div className="flex flex-col space-y-3 font-mono-code text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 rounded-xl border border-blue-500/20 bg-blue-950/30 text-slate-200 hover:text-cyan-300 hover:border-cyan-400/40"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-blue-500/20 space-y-3">
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl font-mono-code text-xs uppercase font-bold text-center block text-white bg-gradient-to-r from-blue-600 to-cyan-500"
            >
              Liên hệ trao đổi ngay ↗
            </a>
          </div>
        </div>
      )}
    </>
  );
}
