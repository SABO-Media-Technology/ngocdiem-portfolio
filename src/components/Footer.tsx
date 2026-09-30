"use client";

import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-[#35D9FF]/15">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Brand */}
          <div className="flex flex-col gap-1">
            <span className="font-display font-black text-white text-xl tracking-tight leading-none">
              DIỄM®
            </span>
            <span className="font-mono-code text-xs text-[#35D9FF] tracking-[0.2em] uppercase">
              DIGITAL • CREATIVE • BUSINESS
            </span>
          </div>

          {/* Center: Copyright */}
          <p className="text-xs text-slate-500 text-center hidden sm:block">
            © 2026 {PERSONAL_INFO.name}
          </p>

          {/* Right: Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Quay lại đầu trang"
            className="font-mono-code text-xs text-[#35D9FF] hover:text-white transition-colors duration-200 cursor-pointer shrink-0"
          >
            Back to top ↑
          </button>
        </div>

        {/* Copyright on mobile (below row) */}
        <p className="text-xs text-slate-500 text-center mt-4 sm:hidden">
          © 2026 {PERSONAL_INFO.name}
        </p>
      </div>
    </footer>
  );
}
