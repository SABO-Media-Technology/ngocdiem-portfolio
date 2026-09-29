import { ArrowDown, FolderGit2, Sparkles, GraduationCap, Palette, Video, Globe, Smartphone } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-8 sm:pt-16 pb-10 text-center max-w-4xl mx-auto space-y-7">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-600/15 rounded-full blur-[110px] pointer-events-none -z-10"></div>

      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-mono-code backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>{PERSONAL_INFO.status}</span>
      </div>

      {/* Main Headline */}
      <div className="space-y-3">
        <h1 className="font-serif-title text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.14]">
          Thiết kế Poster, Video AI <br className="hidden sm:block" />
          <span className="italic font-normal bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
            & Lập trình Web / App
          </span>
        </h1>
        <p className="font-mono-code text-xs sm:text-sm text-zinc-400 tracking-wider pt-1">
          {PERSONAL_INFO.name} · {PERSONAL_INFO.roleTitle}
        </p>
      </div>

      {/* Grounded Bio & Degree */}
      <div className="max-w-2xl mx-auto space-y-3">
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
          Tôi nhận các dự án freelance thiết kế hình ảnh, poster truyền thông, sản xuất video ngắn bằng AI và lập trình
          website / ứng dụng di động theo yêu cầu cụ thể của từng khách hàng.
        </p>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-white/10 bg-white/[0.03] text-xs text-zinc-300 font-mono-code">
          <GraduationCap className="w-4 h-4 text-amber-400 shrink-0" />
          <span>{PERSONAL_INFO.education}</span>
        </div>
      </div>

      {/* Quick Service Badges */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs font-mono-code text-zinc-300">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/5">
          <Palette className="w-3.5 h-3.5 text-amber-400" /> Poster & Đồ họa
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/5">
          <Video className="w-3.5 h-3.5 text-purple-400" /> Video AI
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/5">
          <Globe className="w-3.5 h-3.5 text-cyan-400" /> Thiết kế Web
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/5">
          <Smartphone className="w-3.5 h-3.5 text-emerald-400" /> Làm App Mobile
        </span>
      </div>

      {/* CTA Buttons */}
      <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        <a
          href="#services"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-0.5 cursor-pointer"
        >
          <FolderGit2 className="w-4 h-4" />
          <span>Xem các dịch vụ nhận làm</span>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-xs sm:text-sm border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 transition-all hover:-translate-y-0.5"
        >
          <span>Liên hệ trao đổi công việc ↓</span>
        </a>
      </div>

      {/* Stats bar */}
      <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {PERSONAL_INFO.stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl glass-panel text-center transition-all duration-300 hover:border-amber-400/40"
          >
            <div className="text-xl sm:text-2xl font-mono-code font-bold text-white">{stat.value}</div>
            <div className="text-xs text-zinc-300 mt-1 font-medium">{stat.label}</div>
            <div className="text-[10px] font-mono-code text-zinc-500 mt-0.5">{stat.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
