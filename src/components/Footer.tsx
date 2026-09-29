import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-blue-500/15 bg-[#050915] py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              <span className="font-bold text-base text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs font-mono-code text-blue-300/70">
                · {PERSONAL_INFO.role}
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {PERSONAL_INFO.location} · Thiết kế & lập trình thực tế, đúng hẹn
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono-code text-slate-300">
            <Link href="/poster" className="hover:text-cyan-300 transition-colors">
              Poster & Đồ Họa
            </Link>
            <Link href="/video-ai" className="hover:text-cyan-300 transition-colors">
              Video AI
            </Link>
            <Link href="/web-app" className="hover:text-cyan-300 transition-colors">
              Web & App
            </Link>
            <Link href="/lien-he" className="hover:text-cyan-300 transition-colors">
              Liên Hệ
            </Link>
          </div>
        </div>

        <div className="pt-6 border-t border-blue-500/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono-code text-slate-400">
          <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-cyan-400">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:underline flex items-center gap-1"
            >
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <span className="text-blue-500/40">|</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:underline flex items-center gap-0.5"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
