"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "TRANG CHỦ", href: "/" },
    { name: "GIỚI THIỆU", href: "/gioi-thieu" },
    { name: "NĂNG LỰC", href: "/nang-luc" },
    { name: "DỰ ÁN", href: "/du-an" },
    { name: "KINH NGHIỆM", href: "/kinh-nghiem" },
    { name: "LIÊN HỆ", href: "/lien-he" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-8 flex justify-center ${
          isScrolled ? "py-2 sm:py-2.5" : ""
        }`}
      >
        <div
          className={`w-full max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-[#071A3D]/85 backdrop-blur-xl border border-[#35D9FF]/30 shadow-[0_10px_35px_-10px_rgba(5,8,22,0.85)]"
              : "bg-[#071A3D]/50 backdrop-blur-md border border-[#35D9FF]/20"
          }`}
        >
          {/* LOGO: DIỄM® */}
          <Link
            href="/"
            className="group flex items-center gap-1.5 focus:outline-none"
            aria-label="Võ Ngọc Diễm Trang chủ"
          >
            <span className="font-display font-black text-lg sm:text-xl tracking-tight text-white group-hover:text-[#35D9FF] transition-colors">
              DIỄM<span className="text-[#35D9FF] text-xs align-super ml-0.5">®</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2563FF]/20 border border-[#35D9FF]/30 text-[10px] font-mono-code text-[#35D9FF] ml-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#35D9FF] animate-pulse" />
              VẬN HÀNH · DIGITAL · AI
            </span>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-xs font-mono-code tracking-wider transition-all duration-200 relative py-1 hover:text-white ${
                      isActive
                        ? "text-[#35D9FF] font-bold"
                        : "text-slate-300"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2563FF] to-[#35D9FF] rounded-full shadow-[0_0_8px_#35D9FF]" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA Liên Hệ Nhanh */}
            <div className="flex items-center pl-3 border-l border-[#35D9FF]/20">
              <Link
                href="/lien-he"
                className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563FF]/25 hover:bg-[#2563FF]/40 border border-[#35D9FF]/40 text-xs font-mono-code text-[#F5FAFF] transition-all hover:border-[#35D9FF] hover:shadow-[0_0_15px_rgba(53,217,255,0.3)]"
              >
                <span className="w-2 h-2 rounded-full bg-[#35D9FF] animate-ping" />
                <span>KẾT NỐI</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#35D9FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </nav>

          {/* TABLET / MOBILE RIGHT BUTTONS */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/lien-he"
              className="px-3 py-1 rounded-full bg-[#2563FF]/25 border border-[#35D9FF]/35 text-[11px] font-mono-code text-[#35D9FF]"
            >
              LIÊN HỆ ↗
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-xl bg-[#0A2463]/70 border border-[#35D9FF]/30 text-white hover:text-[#35D9FF] transition-colors focus:outline-none cursor-pointer"
              aria-label="Mở bảng điều hướng"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col justify-center px-6 bg-[#050816]/95 backdrop-blur-2xl transition-all duration-300 animate-in fade-in">
          <div className="max-w-md w-full mx-auto space-y-6">
            <div className="text-center pb-4 border-b border-[#35D9FF]/20 space-y-1">
              <div className="font-display font-black text-2xl text-white">
                VÕ NGỌC DIỄM
              </div>
              <div className="text-xs font-mono-code text-[#35D9FF]">
                VẬN HÀNH · DIGITAL · AI · SÁNG TẠO
              </div>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3.5 rounded-xl font-mono-code text-sm transition-all ${
                      isActive
                        ? "bg-[#2563FF]/30 border border-[#35D9FF]/60 text-white font-bold"
                        : "bg-[#071A3D]/50 border border-transparent text-slate-300 hover:bg-[#071A3D] hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#35D9FF]" />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-[#35D9FF]/20 text-center">
              <Link
                href="/lien-he"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl font-mono-code text-xs uppercase font-bold bg-gradient-to-r from-[#2563FF] to-[#35D9FF] text-white flex items-center justify-center gap-2 shadow-lg shadow-[#2563FF]/30"
              >
                <span>HỢP TÁC &amp; GỬI TIN NHẮN</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
