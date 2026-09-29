import { SERVICES } from "@/data/portfolioData";
import { Palette, Video, Globe, Smartphone, Check } from "lucide-react";

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
    <section id="services" className="space-y-8 scroll-mt-24">
      <div className="space-y-1">
        <span className="font-mono-code text-xs px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
          01 // DỊCH VỤ NHẬN LÀM
        </span>
        <h2 className="font-serif-title text-2xl sm:text-3xl text-white tracking-tight pt-1">
          Các Dịch Vụ Tôi Có Thể Hỗ Trợ Bạn
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Giải pháp thiết kế hình ảnh, video AI & phát triển công nghệ linh hoạt theo nhu cầu thực tế
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="rounded-2xl p-6 sm:p-7 glass-panel flex flex-col justify-between space-y-5 hover:border-amber-400/40 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                  {getIcon(service.icon)}
                </div>
                <span className="font-mono-code text-[11px] px-2.5 py-1 rounded-md bg-amber-400/10 text-amber-300 border border-amber-400/20 font-medium">
                  {service.badge}
                </span>
              </div>

              <div>
                <h3 className="font-serif-title text-xl font-bold text-white">{service.title}</h3>
                <p className="font-mono-code text-xs text-zinc-400 mt-0.5">{service.subtitle}</p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/10">
              <div className="font-mono-code text-[11px] uppercase tracking-wider text-zinc-400 font-medium">
                // Sản phẩm bàn giao:
              </div>
              <ul className="space-y-2 text-xs font-light text-zinc-300">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
