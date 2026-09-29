import { EXPERIENCES } from "@/data/portfolioData";
import { GraduationCap, Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="space-y-8 scroll-mt-24">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <span className="font-mono-code text-xs px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
          04 // MILESTONES & JOURNEY
        </span>
        <h2 className="font-serif-title text-2xl sm:text-3xl text-white tracking-tight">
          Hành Trình Nghề Nghiệp & Học Vấn
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-white/10 ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-4 border-[#040006] bg-amber-400 ring-4 ring-amber-400/20"></div>

            {/* Content Card */}
            <div className="rounded-2xl p-6 glass-panel space-y-3 hover:border-amber-400/30 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  {exp.badge === "Học vấn" ? (
                    <GraduationCap className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                  )}
                  <h3 className="font-serif-title font-bold text-base sm:text-lg text-white">{exp.role}</h3>
                </div>
                <span className="font-mono-code text-xs px-2.5 py-0.5 rounded-full bg-white/[0.04] text-amber-300 border border-amber-400/20">
                  {exp.period}
                </span>
              </div>

              <div className="text-xs font-mono-code text-zinc-400">{exp.company}</div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                {exp.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-white/[0.03] text-zinc-400 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
