import { ArrowDown, MessageSquare, GraduationCap, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-8 sm:pt-16 pb-8 text-center max-w-3xl mx-auto space-y-7">
      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono-code backdrop-blur-md shadow-sm shadow-cyan-500/10">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        <span>{PERSONAL_INFO.status}</span>
      </div>

      {/* Main Title - Youthful, Bold, Modern */}
      <div className="space-y-3">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
          Thiết kế Poster, Video AI <br />
          <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
            & Lập trình Web / App
          </span>
        </h1>
        <p className="font-mono-code text-xs sm:text-sm text-blue-200/80 tracking-wider">
          {PERSONAL_INFO.name} · {PERSONAL_INFO.role}
        </p>
      </div>

      {/* Short Bio */}
      <div className="max-w-xl mx-auto space-y-3">
        <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
          {PERSONAL_INFO.bio}
        </p>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-blue-500/20 bg-blue-950/40 text-xs text-blue-200 font-mono-code">
          <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>{PERSONAL_INFO.education}</span>
        </div>
      </div>

      {/* Quick Service Tags */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs font-mono-code text-slate-200">
        <span className="px-3 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/25 flex items-center gap-1.5">
          🎨 Poster & Banner
        </span>
        <span className="px-3 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/25 flex items-center gap-1.5">
          🎬 Video AI Viral
        </span>
        <span className="px-3 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/25 flex items-center gap-1.5">
          🌐 Thiết Kế Web
        </span>
        <span className="px-3 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/25 flex items-center gap-1.5">
          📱 Lập Trình App
        </span>
      </div>

      {/* CTA Buttons */}
      <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#services"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono-code text-xs uppercase font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 cursor-pointer"
        >
          <span>Khám phá dịch vụ</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono-code text-xs uppercase font-semibold border border-blue-500/30 bg-blue-950/30 hover:bg-blue-900/40 text-blue-100 transition-all hover:-translate-y-0.5"
        >
          <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
          <span>Liên hệ trao đổi</span>
        </a>
      </div>
    </section>
  );
}
