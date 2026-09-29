import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#040006] py-12 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-400 font-mono-code">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50"></span>
          <span>
            © 2026 {PERSONAL_INFO.name} · {PERSONAL_INFO.organization}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#hero" className="hover:text-amber-300 transition-colors">
            VỀ ĐẦU TRANG ↑
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-amber-300 transition-colors">
            {PERSONAL_INFO.email}
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-amber-300 transition-colors"
          >
            GITHUB
          </a>
        </div>
      </div>
    </footer>
  );
}
