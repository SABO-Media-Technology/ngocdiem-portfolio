"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, Check, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

const NAV_LINKS = [
  { href: "/", label: "Trang Chủ" },
  { href: "/poster", label: "Poster & Đồ Họa" },
  { href: "/video-ai", label: "Video AI" },
  { href: "/web-app", label: "Web & App" },
  { href: "/lien-he", label: "Liên Hệ" },
];

export default function Navbar() {
  const pathname = usePathname();
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand with small avatar thumbnail */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-cyan-400/40 shadow-sm shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Image
              src={PERSONAL_INFO.avatar}
              alt={PERSONAL_INFO.name}
              fill
              className="object-cover object-top"
              sizes="36px"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] font-mono-code text-blue-300/80 -mt-0.5 tracking-wider">
              Design · AI · Code
            </span>
          </div>
        </Link>

        {/* Desktop Nav - Multi-page router */}
        <nav className="hidden lg:flex items-center gap-1.5 text-xs font-mono-code">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-xl transition-all ${
                  isActive
                    ? "bg-cyan-500/15 text-cyan-300 font-semibold border border-cyan-400/30 shadow-sm shadow-cyan-500/10"
                    : "text-slate-300 hover:text-white hover:bg-blue-950/40 border border-transparent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
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

          <Link
            href="/lien-he"
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-md shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Nhắn tin</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-blue-500/20 bg-blue-950/30 text-slate-300 hover:text-white cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-5 space-y-1.5 border-t border-blue-500/20 bg-[#070d1e]/98 backdrop-blur-2xl">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3.5 py-2.5 rounded-xl text-xs font-mono-code transition-all ${
                  isActive
                    ? "bg-cyan-500/15 text-cyan-300 font-bold border border-cyan-400/30"
                    : "text-slate-200 hover:bg-blue-950/40"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
