import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, GraduationCap, CheckCircle2, Sparkles, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import Scene3D from "./Scene3D";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-6 sm:pt-12 pb-16 overflow-hidden">
      {/* Interactive 3D WebGL Background Scene */}
      <Scene3D className="absolute inset-0 z-0 pointer-events-none opacity-85" />

      {/* Volumetric Color Blooms */}
      <div className="volumetric-glow top-[-80px] left-[-80px] w-[500px] h-[500px] bg-blue-600/20" />
      <div className="volumetric-glow top-[30%] right-[-100px] w-[550px] h-[550px] bg-cyan-500/18" style={{ animationDelay: "-4s" }} />

      <div className="relative z-10 w-full grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Editorial Headline & Identity */}
        <div className="lg:col-span-7 space-y-7 text-left">
          
          {/* Top System Coordinates Bar */}
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono-code text-cyan-400">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-500/10 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="font-pixel text-[9px] tracking-wider">CHAMBER_00 // IDENTIFIER</span>
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-blue-200/80">LAT: 10.8231° N · LON: 106.6297° E</span>
          </div>

          {/* Distinctive Editorial Pill Capsule: PORT [folio] */}
          <div className="inline-flex items-center gap-3 select-none">
            <div className="specular-pill px-5 sm:px-7 py-2.5 sm:py-3 rounded-full flex items-center gap-2 shadow-2xl relative group">
              <span className="font-display font-black text-2xl sm:text-4xl text-cyan-300 tracking-tight">
                PORT
              </span>
              <span className="font-pixel font-bold text-lg sm:text-2xl text-white tracking-wider px-2 py-0.5 rounded bg-blue-900/60 border border-cyan-400/40">
                folio
              </span>
              <span className="text-cyan-300 text-xs sm:text-sm animate-pulse ml-1">✦</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-techno text-xs font-bold text-white tracking-wider">
                VÕ NGỌC DIỄM
              </div>
              <div className="font-mono-code text-[10px] text-blue-300/70">
                CREATIVE ARCHITECT
              </div>
            </div>
          </div>

          {/* Oversized High-Fashion / Editorial Display Headline */}
          <div className="space-y-3">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Sáng tạo Poster, <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                Video AI & Web / App
              </span>
            </h1>
            <p className="font-mono-code text-xs sm:text-sm text-cyan-300/80 tracking-widest uppercase">
              // DESIGN · NEURAL AI MOTION · SPATIAL RUNTIME
            </p>
          </div>

          {/* Spatial Manifesto / Bio */}
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
            Không dừng lại ở một trang giới thiệu thông thường — đây là không gian lưu trữ các dự án thực tế 
            từ thiết kế đồ họa in ấn sắc nét, sản xuất video ngắn AI giữ chân người xem đến lập trình ứng dụng di động chuẩn xác.
          </p>

          {/* Education pill & Status */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-blue-500/25 bg-blue-950/40 text-xs text-blue-200 font-mono-code">
              <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Cử nhân ĐH Sài Gòn (SGU) · Tài chính - Ngân hàng</span>
            </div>
            <span className="px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono-code flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Sẵn sàng nhận dự án mới</span>
            </span>
          </div>

          {/* Technical Modules Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 text-xs font-mono-code text-slate-200">
            <div className="px-3 py-2 rounded-xl bg-blue-950/30 border border-blue-500/25 relative group hover:border-cyan-400/50 transition-colors">
              <div className="text-[9px] text-cyan-400 font-pixel">01 // PRINT</div>
              <div className="font-semibold text-white mt-0.5">Poster & Banner</div>
            </div>
            <div className="px-3 py-2 rounded-xl bg-blue-950/30 border border-blue-500/25 relative group hover:border-cyan-400/50 transition-colors">
              <div className="text-[9px] text-cyan-400 font-pixel">02 // NEURAL</div>
              <div className="font-semibold text-white mt-0.5">Video Ngắn AI</div>
            </div>
            <div className="px-3 py-2 rounded-xl bg-blue-950/30 border border-blue-500/25 relative group hover:border-cyan-400/50 transition-colors">
              <div className="text-[9px] text-cyan-400 font-pixel">03 // WEB</div>
              <div className="font-semibold text-white mt-0.5">Landing Page</div>
            </div>
            <div className="px-3 py-2 rounded-xl bg-blue-950/30 border border-blue-500/25 relative group hover:border-cyan-400/50 transition-colors">
              <div className="text-[9px] text-cyan-400 font-pixel">04 // MOBILE</div>
              <div className="font-semibold text-white mt-0.5">Flutter App</div>
            </div>
          </div>

          {/* CTA Gates */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#chambers"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-mono-code text-xs uppercase font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <span>Khám phá các phân vùng</span>
              <ArrowDown className="w-4 h-4" />
            </a>
            <Link
              href="/lien-he"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono-code text-xs uppercase font-bold border border-cyan-400/40 bg-blue-950/40 hover:bg-blue-900/60 hover:border-cyan-300 text-cyan-200 shadow-md shadow-cyan-500/10 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Gửi yêu cầu dự án</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column: Holographic Editorial Portrait with HUD Framing */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group max-w-[340px] sm:max-w-[390px] w-full">
            {/* Luminous Volumetric Halo */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-65 transition duration-700 -z-10"></div>

            {/* Futuristic HUD Casing */}
            <div className="relative chrome-glass-card rounded-3xl p-3.5 sm:p-4 overflow-visible">
              {/* 4 Technical Corner HUD Crosshairs */}
              <div className="hud-corner-tl" />
              <div className="hud-corner-tr" />
              <div className="hud-corner-bl" />
              <div className="hud-corner-br" />

              {/* Top HUD Readout */}
              <div className="flex items-center justify-between pb-2.5 px-1 text-[10px] font-mono-code text-cyan-300/80 border-b border-blue-500/20 mb-2.5">
                <span className="font-pixel text-[8px] tracking-widest text-cyan-400">
                  // HOLO_RECORD #001
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                  LIVE FEED
                </span>
              </div>

              {/* Portrait Image (3:4 ratio) */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-950 shadow-inner">
                <Image
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  fill
                  priority
                  className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                
                {/* Subtle digital scanlines overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040816] via-[#040816]/65 to-transparent"></div>

                {/* Floating Frosted Glass Label inside photo */}
                <div className="absolute bottom-3 inset-x-3 p-3.5 rounded-2xl backdrop-blur-md bg-blue-950/85 border border-cyan-400/35 space-y-1.5 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-display font-extrabold text-white text-base tracking-tight">
                        {PERSONAL_INFO.name}
                      </h2>
                      <p className="text-[11px] text-cyan-300 font-mono-code">
                        Creative Freelancer
                      </p>
                    </div>
                    <span className="px-2 py-1 rounded-md bg-cyan-400/15 text-cyan-300 text-[10px] font-pixel font-bold border border-cyan-400/30">
                      SGU 2025
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Technical Specs */}
              <div className="mt-3 pt-2.5 border-t border-blue-500/20 flex items-center justify-between text-[11px] font-mono-code text-slate-300 px-1">
                <span className="text-slate-400">ACTOR: SGU GRADUATE</span>
                <span className="text-cyan-400 font-semibold flex items-center gap-1">
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
