import { SERVICES } from "@/data/portfolioData";
import { Palette, Video, Globe, Smartphone } from "lucide-react";

export default function Services() {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "Palette":
        return <Palette className="w-5 h-5 text-cyan-400" />;
      case "Video":
        return <Video className="w-5 h-5 text-sky-400" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-blue-400" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-teal-400" />;
      default:
        return <Palette className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="space-y-6 scroll-mt-20">
      <div className="flex items-center justify-between">
        <div>
          <span className="font-mono-code text-[11px] text-cyan-400 font-semibold tracking-wider uppercase">
            // 01. DỊCH VỤ NHẬN LÀM
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Các Mảng Tôi Hỗ Trợ
          </h2>
        </div>
        <span className="hidden sm:inline font-mono-code text-xs text-blue-300/80">
          Tư vấn & Báo giá linh hoạt
        </span>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {SERVICES.map((s) => (
          <div
            key={s.id}
            className="rounded-2xl p-5 sm:p-6 blue-glass-panel space-y-3.5 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center">
              {getIcon(s.icon)}
            </div>

            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">{s.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-normal mt-1 leading-relaxed">{s.desc}</p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {s.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-md text-[10px] font-mono-code bg-blue-950/40 text-blue-200 border border-blue-500/20"
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
