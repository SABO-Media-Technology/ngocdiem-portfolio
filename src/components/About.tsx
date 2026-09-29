import { PRINCIPLES } from "@/data/portfolioData";
import { CheckCircle2, ShieldCheck, Clock, Zap } from "lucide-react";

export default function About() {
  const getProtocolIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 1:
        return <Clock className="w-5 h-5 text-sky-400" />;
      case 2:
        return <Zap className="w-5 h-5 text-blue-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="space-y-8 scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-blue-500/15">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="font-pixel text-[10px] text-cyan-400 tracking-widest uppercase">
              // SECTOR 03: NGUYÊN TẮC THỰC CHIẾN
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Phong Cách Làm Việc
          </h2>
        </div>
        <div className="font-mono-code text-xs text-blue-300/80">
          CAM KẾT CHẤT LƯỢNG ĐẦU RA
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {PRINCIPLES.map((p, idx) => (
          <div
            key={idx}
            className="chrome-glass-card p-6 sm:p-7 rounded-3xl space-y-3.5 relative overflow-visible"
          >
            {/* Corner HUD accent */}
            <div className="hud-corner-tl" />
            <div className="hud-corner-br" />

            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center">
                {getProtocolIcon(idx)}
              </div>
              <span className="font-pixel text-[9px] text-cyan-400 tracking-wider">
                0{idx + 1} // PROTOCOL
              </span>
            </div>

            <h3 className="font-techno font-bold text-lg text-white">{p.title}</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
