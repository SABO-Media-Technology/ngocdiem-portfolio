import { Smartphone, Database, Globe, Cpu } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function Skills() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-amber-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-cyan-400" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-purple-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      default:
        return <Smartphone className="w-5 h-5 text-amber-400" />;
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "Expert":
        return "text-amber-300 bg-amber-400/10 border-amber-400/30";
      case "Advanced":
        return "text-cyan-300 bg-cyan-400/10 border-cyan-400/30";
      case "Proficient":
        return "text-emerald-300 bg-emerald-400/10 border-emerald-400/30";
      default:
        return "text-zinc-400 bg-white/5 border-white/10";
    }
  };

  return (
    <section id="skills" className="space-y-8 scroll-mt-24">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <span className="font-mono-code text-xs px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
          03 // TECH MATRIX
        </span>
        <h2 className="font-serif-title text-2xl sm:text-3xl text-white tracking-tight">
          Hệ Sinh Thái Kỹ Thuật & Công Nghệ
        </h2>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-6 glass-panel space-y-4 hover:border-amber-400/30 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
              {getIcon(cat.iconName)}
            </div>

            <div>
              <h3 className="font-serif-title font-bold text-base text-white">{cat.title}</h3>
              <p className="font-mono-code text-[11px] text-zinc-400 mt-0.5">{cat.subtitle}</p>
            </div>

            <ul className="space-y-2.5 text-xs font-mono-code">
              {cat.skills.map((skill, sIdx) => (
                <li key={sIdx} className="flex items-center justify-between text-zinc-300">
                  <span>{skill.name}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${getLevelBadge(skill.level)}`}>
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
