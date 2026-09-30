"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "work", "desk", "about", "experience", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "DỰ ÁN", href: "#work", id: "work" },
    { name: "NĂNG LỰC", href: "#capabilities", id: "capabilities" },
    { name: "GIỚI THIỆU", href: "#about", id: "about" },
    { name: "KINH NGHIỆM", href: "#experience", id: "experience" },
    { name: "LIÊN HỆ", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3.5 sm:py-5 px-4 sm:px-8 flex justify-center ${
          isScrolled ? "py-2 sm:py-3" : ""
        }`}
      >
        <div
          className={`w-full max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-[#071A3D]/75 backdrop-blur-xl border border-[#35D9FF]/25 shadow-[0_10px_35px_-10px_rgba(5,8,22,0.8)]"
              : "bg-[#071A3D]/40 backdrop-blur-md border border-[#35D9FF]/15"
          }`}
        >
          {/* LEFT: DIỄM® */}
          <Link
            href="/"
            className="group flex items-center gap-1.5 focus:outline-none"
            aria-label="Võ Ngọc Diễm Trang chủ"
          >
            <span className="font-display font-black text-lg sm:text-xl tracking-tight text-white group-hover:text-[#35D9FF] transition-colors">
              DIỄM<span className="text-[#35D9FF] text-xs align-super ml-0.5">®</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#2563FF]/15 border border-[#35D9FF]/25 text-[10px] font-mono-code text-[#35D9FF] ml-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#35D9FF] animate-pulse" />
              VẬN HÀNH × DIGITAL × AI
            </span>
          </Link>

          {/* RIGHT: DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-7">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-mono-code tracking-widest transition-all duration-200 relative py-1 hover:text-white ${
                    activeSection === link.id
                      ? "text-[#35D9FF] font-semibold"
                      : "text-slate-300"
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2563FF] to-[#35D9FF] rounded-full shadow-[0_0_8px_#35D9FF]" />
                  )}
                </a>
              ))}
            </div>

            {/* Menu Indicator / Call to action */}
            <div className="flex items-center pl-3 border-l border-[#35D9FF]/20">
              <a
                href="#contact"
                className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563FF]/20 hover:bg-[#2563FF]/35 border border-[#35D9FF]/40 text-xs font-mono-code text-[#F5FAFF] transition-all hover:border-[#35D9FF] hover:shadow-[0_0_15px_rgba(53,217,255,0.3)]"
              >
                <span className="w-2 h-2 rounded-full bg-[#35D9FF] animate-ping" />
                <span>KẾT NỐI NGAY</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#35D9FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </nav>

          {/* MOBILE BUTTON */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3 py-1 rounded-full bg-[#2563FF]/20 border border-[#35D9FF]/30 text-[11px] font-mono-code text-[#35D9FF]"
            >
              LIÊN HỆ ↗
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-xl bg-[#0A2463]/60 border border-[#35D9FF]/30 text-white hover:text-[#35D9FF] transition-colors focus:outline-none"
              aria-label="Mở bảng điều hướng"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#050816]/95 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-8 border-b border-[#35D9FF]/20 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-4 border-b border-[#35D9FF]/20 text-xs font-mono-code text-[#35D9FF]">
            <span>ĐIỀU HƯỚNG // VÕ NGỌC DIỄM</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#35D9FF]" />
              TRỰC TUYẾN
            </span>
          </div>

          <div className="flex flex-col gap-6 py-8">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-2xl font-display font-bold text-[#F5FAFF] hover:text-[#35D9FF] transition-colors"
              >
                <span>{link.name}</span>
                <span className="font-mono-code text-xs text-[#35D9FF]/70">
                  [ 0{idx + 1} ]
                </span>
              </a>
            ))}
          </div>

          <div className="mt-auto space-y-4 pt-6 border-t border-[#35D9FF]/20">
            <div className="text-xs font-mono-code text-slate-400">
              VẬN HÀNH DOANH NGHIỆP × KỸ THUẬT SỐ × AI
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#2563FF] to-[#35D9FF] text-white font-mono-code font-bold text-xs uppercase flex items-center justify-center gap-2 shadow-lg shadow-[#2563FF]/30"
            >
              <span>KẾT NỐI VỚI DIỄM</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
