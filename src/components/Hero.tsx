import { ArrowDown, FolderGit2, Sparkles, GraduationCap } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-10 sm:pt-20 pb-12 text-center max-w-4xl mx-auto space-y-8">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-mono-code backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>{PERSONAL_INFO.status}</span>
      </div>

      {/* Main headline with Playfair Display elegance */}
      <div className="space-y-3">
        <h1 className="font-serif-title text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.12]">
          Kiến tạo giải pháp{" "}
          <span className="italic font-normal bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
            Mobile & Nền tảng Cloud
          </span>{" "}
          với chuẩn mực cao
        </h1>
        <p className="font-mono-code text-xs sm:text-sm text-zinc-400 uppercase tracking-widest pt-2">
          {PERSONAL_INFO.roleTitle} · {PERSONAL_INFO.organization}
        </p>
      </div>

      {/* Education & Bio */}
      <div className="max-w-2xl mx-auto space-y-3">
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
          Chào bạn! Tôi là <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>. Tôi đam mê
          biến các ý tưởng kinh doanh phức tạp thành các sản phẩm công nghệ chạy mượt mà, ổn định và phục vụ hàng vạn
          người dùng thực tế.
        </p>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-white/10 bg-white/[0.03] text-xs text-zinc-300 font-mono-code">
          <GraduationCap className="w-4 h-4 text-amber-400 shrink-0" />
          <span>{PERSONAL_INFO.education}</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-0.5"
        >
          <FolderGit2 className="w-4 h-4" />
          <span>Khám phá các sản phẩm đã ship</span>
        </a>
        <a
          href="#about"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-xs sm:text-sm border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 transition-all hover:-translate-y-0.5"
        >
          <span>Hồ sơ năng lực & Câu chuyện</span>
          <ArrowDown className="w-4 h-4 text-zinc-400" />
        </a>
      </div>

      {/* Stats bar */}
      <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {PERSONAL_INFO.stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl glass-panel text-center transition-all duration-300 group hover:border-amber-500/30"
          >
            <div className="text-2xl sm:text-3xl font-mono-code font-bold text-white group-hover:text-amber-300 transition-colors">
              {stat.value}
            </div>
            <div className="text-xs text-zinc-300 mt-1 font-medium">{stat.label}</div>
            <div className="text-[10px] font-mono-code text-zinc-500 mt-0.5">{stat.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
