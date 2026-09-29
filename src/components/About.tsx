import { PRINCIPLES } from "@/data/portfolioData";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="space-y-6 scroll-mt-20">
      <div>
        <span className="font-mono-code text-[11px] text-cyan-400 font-semibold tracking-wider uppercase">
          // 02. VỀ TÔI & NGUYÊN TẮC
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Phong Cách Làm Việc
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {PRINCIPLES.map((p, idx) => (
          <div key={idx} className="glass-card p-5 rounded-2xl space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <h3 className="font-bold text-base text-white">{p.title}</h3>
            </div>
            <p className="text-xs text-slate-300 font-normal leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
