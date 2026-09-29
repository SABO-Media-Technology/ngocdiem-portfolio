import { SERVICES } from "@/data/portfolioData";
import { Palette, Video, Globe, Smartphone } from "lucide-react";

export default function Services() {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "Palette":
        return <Palette className="w-5 h-5 text-amber-400" />;
      case "Video":
        return <Video className="w-5 h-5 text-purple-400" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-emerald-400" />;
      default:
        return <Palette className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="space-y-6 scroll-mt-20">
      <div className="flex items-center justify-between">
        <div>
          <span className="font-mono-code text-[11px] text-amber-400 font-semibold tracking-wider uppercase">
            // 01. DỊCH VỤ NHẬN LÀM
          </span>
          <h2 className="font-serif-title text-2xl sm:text-3xl text-white tracking-tight">
            Các Mảng Tôi Hỗ Trợ
          </h2>
        </div>
        <span className="hidden sm:inline font-mono-code text-xs text-zinc-400">
          Tư vấn & Báo giá linh hoạt
        </span>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {SERVICES.map((s) => (
          <div
            key={s.id}
            className="rounded-2xl p-5 sm:p-6 glass-panel space-y-3 hover:border-amber-400/30 transition-all"
          >
            <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
              {getIcon(s.icon)}
            </div>

            <div>
              <h3 className="font-serif-title text-lg font-bold text-white">{s.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-light mt-1 leading-relaxed">{s.desc}</p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {s.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-white/[0.03] text-zinc-400 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
