import { ArrowDown, MessageSquare, GraduationCap, Palette, Video, Globe, Smartphone } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-6 sm:pt-14 pb-6 text-center max-w-3xl mx-auto space-y-6">
      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-mono-code">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>{PERSONAL_INFO.status}</span>
      </div>

      {/* Main Title */}
      <div className="space-y-2">
        <h1 className="font-serif-title text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.15]">
          Thiết kế Poster, Video AI <br className="hidden sm:block" />
          <span className="italic bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
            & Lập trình Web / App
          </span>
        </h1>
        <p className="font-mono-code text-xs text-zinc-400 tracking-wider">
          {PERSONAL_INFO.name} · {PERSONAL_INFO.role}
        </p>
      </div>

      {/* Short Bio */}
      <div className="max-w-xl mx-auto space-y-2.5">
        <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
          {PERSONAL_INFO.bio}
        </p>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-white/10 bg-white/[0.03] text-xs text-zinc-300 font-mono-code">
          <GraduationCap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>{PERSONAL_INFO.education}</span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#services"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-mono-code text-xs uppercase font-semibold bg-amber-400 hover:bg-amber-300 text-black transition-all cursor-pointer"
        >
          <span>Xem dịch vụ</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-mono-code text-xs uppercase border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 transition-all"
        >
          <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
          <span>Liên hệ ngay</span>
        </a>
      </div>
    </section>
  );
}
