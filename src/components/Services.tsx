import Link from "next/link";
import { SERVICES } from "@/data/portfolioData";
import { Palette, Video, Code2, ArrowRight, Check, Sparkles, Terminal } from "lucide-react";

export default function Services() {
  const getModuleMeta = (id: string) => {
    switch (id) {
      case "graphic-design":
        return {
          code: "MOD_01",
          spec: "300 DPI // CMYK PRINT // VECTOR CORE",
          accentColor: "from-blue-500/20 to-cyan-500/10",
        };
      case "video-ai":
        return {
          code: "MOD_02",
          spec: "1080x1920 // NEURAL VOICE // KINETIC CAPCUT",
          accentColor: "from-cyan-500/20 to-sky-500/10",
        };
      case "web-app":
        return {
          code: "MOD_03",
          spec: "NEXT.JS 16 // FLUTTER DART // SUPABASE DB",
          accentColor: "from-indigo-500/20 to-blue-500/10",
        };
      default:
        return {
          code: "MOD_00",
          spec: "STANDARD CORE",
          accentColor: "from-blue-500/20 to-cyan-500/10",
        };
    }
  };

  const getIcon = (icon: string) => {
    switch (icon) {
      case "Palette":
        return <Palette className="w-5 h-5 text-cyan-300" />;
      case "Video":
        return <Video className="w-5 h-5 text-sky-300" />;
      case "Code2":
        return <Code2 className="w-5 h-5 text-blue-300" />;
      default:
        return <Palette className="w-5 h-5 text-cyan-300" />;
    }
  };

  return (
    <section id="chambers" className="space-y-8 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-blue-500/15">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="font-pixel text-[10px] text-cyan-400 tracking-widest uppercase">
              // SECTOR 01: CÁC MẢNG NĂNG LỰC CHUYÊN SÂU
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Chọn Phân Vùng Khám Phá
          </h2>
        </div>
        <div className="font-mono-code text-xs text-blue-300/80 bg-blue-950/40 px-3 py-1.5 rounded-xl border border-blue-500/20 self-start sm:self-auto">
          TƯ VẤN & BÁO GIÁ LINH HOẠT
        </div>
      </div>

      {/* 3 Module Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {SERVICES.map((s) => {
          const meta = getModuleMeta(s.id);
          return (
            <div
              key={s.id}
              className="chrome-glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-6 group overflow-visible"
            >
              {/* Corner HUD accents */}
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />

              <div className="space-y-4">
                {/* Module Code Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-11 h-11 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-400/50 transition-all duration-300 shadow-inner">
                      {getIcon(s.icon)}
                    </div>
                    <div>
                      <span className="font-pixel text-[9px] text-cyan-400 tracking-wider block">
                        {meta.code}
                      </span>
                      <h3 className="font-techno text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {s.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Specs pill */}
                <div className="px-2.5 py-1 rounded-lg bg-blue-950/50 border border-blue-500/20 font-mono-code text-[10px] text-blue-200/80 truncate">
                  {meta.spec}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  {s.desc}
                </p>

                {/* Feature checklist */}
                <div className="space-y-2 pt-2 border-t border-blue-500/15">
                  {s.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  href={s.href}
                  className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl font-mono-code text-xs font-bold uppercase border border-cyan-400/30 bg-blue-950/50 hover:bg-blue-900/60 hover:border-cyan-300 text-cyan-200 transition-all duration-300 group/btn shadow-sm shadow-cyan-500/10 cursor-pointer"
                >
                  <span>Mở phân vùng {s.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
