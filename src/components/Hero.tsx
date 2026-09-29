import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MessageSquare, GraduationCap, Sparkles, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section className="relative pt-6 sm:pt-12 pb-6">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Intro & Headline */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono-code backdrop-blur-md shadow-sm shadow-cyan-500/10">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>{PERSONAL_INFO.status}</span>
          </div>

          {/* Main Title - Youthful, Bold, Modern */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.14]">
              Thiết kế Poster, Video AI <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                & Lập trình Web / App
              </span>
            </h1>
            <p className="font-mono-code text-xs sm:text-sm text-cyan-300/90 tracking-wide">
              {PERSONAL_INFO.name} · {PERSONAL_INFO.role}
            </p>
          </div>

          {/* Short Bio */}
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
            {PERSONAL_INFO.bio}
          </p>

          {/* Education pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-blue-500/25 bg-blue-950/40 text-xs text-blue-200 font-mono-code">
            <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{PERSONAL_INFO.education}</span>
          </div>

          {/* Quick Service Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono-code text-slate-200">
            <span className="px-3 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/25 flex items-center gap-1.5">
              🎨 Poster & Banner
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/25 flex items-center gap-1.5">
              🎬 Video AI Viral
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/25 flex items-center gap-1.5">
              🌐 Thiết Kế Web
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/25 flex items-center gap-1.5">
              📱 Lập Trình App
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#portals"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono-code text-xs uppercase font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Xem các mảng dịch vụ</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <Link
              href="/lien-he"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono-code text-xs uppercase font-semibold border border-blue-500/30 bg-blue-950/40 hover:bg-blue-900/50 text-blue-100 transition-all hover:-translate-y-0.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
              <span>Liên hệ tư vấn</span>
            </Link>
          </div>
        </div>

        {/* Right Column: User Portrait Card with Blue Glass Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group max-w-[340px] sm:max-w-[380px] w-full">
            {/* Ambient Background Glow behind avatar */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl blur-xl opacity-35 group-hover:opacity-60 transition duration-500 -z-10"></div>

            {/* Card Frame */}
            <div className="relative rounded-3xl p-3 sm:p-3.5 bg-gradient-to-b from-[#0e1c3e] to-[#070d1e] border border-cyan-400/35 shadow-2xl shadow-blue-950/60 overflow-hidden">
              {/* Image Container with 3:4 aspect ratio */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-900">
                <Image
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  fill
                  priority
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 380px"
                />
                {/* Gradient overlay on bottom of image for badge legibility */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#070d1e] via-[#070d1e]/60 to-transparent"></div>

                {/* Floating pill over photo bottom */}
                <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl backdrop-blur-md bg-blue-950/80 border border-cyan-400/30 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">
                      {PERSONAL_INFO.name}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 text-[10px] font-mono-code font-semibold">
                      SGU 2025
                    </span>
                  </div>
                  <p className="text-[11px] text-blue-200/90 font-mono-code">
                    Design · Video AI · Web & App
                  </p>
                </div>
              </div>

              {/* Skills Footer under photo */}
              <div className="mt-3 pt-2.5 border-t border-blue-500/20 flex items-center justify-between text-[11px] font-mono-code text-slate-300 px-1">
                <span>📍 TP.HCM · Online</span>
                <span className="text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Uy tín & Đúng hẹn
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
