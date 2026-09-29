import Link from "next/link";
import { SERVICES } from "@/data/portfolioData";
import { Palette, Video, Code2, ArrowRight, Check } from "lucide-react";

export default function Services() {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "Palette":
        return <Palette className="w-5 h-5 text-cyan-400" />;
      case "Video":
        return <Video className="w-5 h-5 text-sky-400" />;
      case "Code2":
        return <Code2 className="w-5 h-5 text-blue-400" />;
      default:
        return <Palette className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="portals" className="space-y-6 scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <span className="font-mono-code text-[11px] text-cyan-400 font-semibold tracking-wider uppercase">
            // 01. CÁC MẢNG NỘI DUNG CHUYÊN SÂU
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Chọn Mảng Bạn Muốn Tìm Hiểu
          </h2>
        </div>
        <span className="font-mono-code text-xs text-blue-300/80">
          Mỗi mảng đều có trang chi tiết riêng
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {SERVICES.map((s) => (
          <div
            key={s.id}
            className="rounded-2xl p-5 sm:p-6 blue-glass-panel flex flex-col justify-between space-y-4 group transition-all duration-300 hover:-translate-y-1"
          >
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-400/40 transition-all">
                  {getIcon(s.icon)}
                </div>
                <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-full border border-blue-500/20 bg-blue-950/40 text-blue-300">
                  Trang riêng
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-300 font-normal mt-1.5 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* Key Features Bullet points */}
              <div className="space-y-1.5 pt-1">
                {s.features.slice(0, 3).map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href={s.href}
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl font-mono-code text-xs font-semibold border border-blue-500/30 bg-blue-950/40 hover:bg-blue-900/60 hover:border-cyan-400/50 text-cyan-200 transition-all cursor-pointer group/btn"
              >
                <span>Vào trang {s.title}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
