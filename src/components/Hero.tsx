"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, GraduationCap, CheckCircle2, Terminal } from "lucide-react";
import Scene3D from "./Scene3D";
import PortFolioCenterpiece from "./PortFolioCenterpiece";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 sm:pt-28 pb-16 overflow-hidden select-none"
    >
      {/* 3D WebGL Background Scene with Liquid Chrome Ribbons */}
      <Scene3D className="absolute inset-0 z-0 pointer-events-none opacity-85" />

      {/* Volumetric Color Blooms */}
      <div className="volumetric-glow top-[-80px] left-[-80px] w-[520px] h-[520px] bg-[#2563FF]/20" />
      <div
        className="volumetric-glow top-[35%] right-[-100px] w-[580px] h-[580px] bg-[#35D9FF]/18"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="volumetric-glow bottom-0 left-[25%] w-[480px] h-[480px] bg-[#0A2463]/35"
        style={{ animationDelay: "-6s" }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-10">
        
        {/* Top HUD Metadata & Coordinates */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono-code text-[#35D9FF] border-b border-[#35D9FF]/20 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#35D9FF] animate-pulse" />
            <span className="font-pixel text-[9px] tracking-wider text-[#35D9FF]">
              HỆ THỐNG // KHÔNG GIAN SỐ VÕ NGỌC DIỄM
            </span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span>TOẠ ĐỘ: 10.8231° B · 106.6297° Đ</span>
            <span>·</span>
            <span className="text-[#35D9FF]">TP. HỒ CHÍ MINH, VIỆT NAM</span>
          </div>
        </div>

        {/* 1. MASTER 3D RETRO-FUTURISTIC "Port [folio]" CENTERPIECE */}
        <div className="flex justify-center w-full">
          <PortFolioCenterpiece />
        </div>

        {/* 2. DUAL COLUMN: EDITORIAL IDENTITY & HOLOGRAPHIC PORTRAIT */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-1">
          
          {/* Left Column: Headline & Concise Bio */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Display Headline */}
            <div className="space-y-2">
              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Sáng tạo Poster, <br />
                <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                  Video AI & Lập trình Web/App
                </span>
              </h1>
              <p className="font-mono-code text-xs sm:text-sm text-cyan-300/85 tracking-widest uppercase">
                // DESIGN · NEURAL AI MOTION · RUNTIME APPS
              </p>
            </div>

            {/* Concise Bio */}
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
              Hồ sơ năng lực cá nhân của <strong className="text-white font-semibold">Võ Ngọc Diễm</strong> — 
              chuyên thiết kế ấn phẩm in ấn sắc nét, sản xuất video ngắn AI giữ chân người xem và phát triển ứng dụng di động Flutter chuẩn xác, tinh gọn.
            </p>

            {/* Education Badge & Status */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-blue-500/30 bg-blue-950/50 text-xs text-blue-200 font-mono-code shadow-sm">
                <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Cử nhân ĐH Sài Gòn (SGU) · Tài chính - Ngân hàng</span>
              </div>
              <span className="px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 text-xs font-mono-code flex items-center gap-1.5 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Sẵn sàng nhận dự án mới</span>
              </span>
            </div>

            {/* 4 Technical Modules Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 text-xs font-mono-code text-slate-200">
              <a href="#dich-vu" className="px-3 py-2 rounded-xl bg-blue-950/40 border border-blue-500/25 relative group hover:border-cyan-400/50 transition-colors">
                <div className="text-[9px] text-cyan-400 font-pixel">01 // PRINT</div>
                <div className="font-semibold text-white mt-0.5">Poster & Banner</div>
              </a>
              <a href="#dich-vu" className="px-3 py-2 rounded-xl bg-blue-950/40 border border-blue-500/25 relative group hover:border-cyan-400/50 transition-colors">
                <div className="text-[9px] text-cyan-400 font-pixel">02 // NEURAL</div>
                <div className="font-semibold text-white mt-0.5">Video Ngắn AI</div>
              </a>
              <a href="#dich-vu" className="px-3 py-2 rounded-xl bg-blue-950/40 border border-blue-500/25 relative group hover:border-cyan-400/50 transition-colors">
                <div className="text-[9px] text-cyan-400 font-pixel">03 // WEB</div>
                <div className="font-semibold text-white mt-0.5">Landing Page</div>
              </a>
              <a href="#dich-vu" className="px-3 py-2 rounded-xl bg-blue-950/40 border border-blue-500/25 relative group hover:border-cyan-400/50 transition-colors">
                <div className="text-[9px] text-cyan-400 font-pixel">04 // MOBILE</div>
                <div className="font-semibold text-white mt-0.5">Flutter App</div>
              </a>
            </div>

            {/* Quick Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#dich-vu"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl font-mono-code text-xs uppercase font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <span>Xem dịch vụ & dự án</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#lien-he"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono-code text-xs uppercase font-bold border border-cyan-400/40 bg-blue-950/40 hover:bg-blue-900/60 hover:border-cyan-300 text-cyan-200 shadow-md shadow-cyan-500/10 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Liên hệ trao đổi</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Holographic Editorial Portrait with Luxury HUD Framing */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-[320px] sm:max-w-[360px] w-full">
              
              {/* Luminous Volumetric Halo */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-600 rounded-3xl blur-2xl opacity-45 group-hover:opacity-70 transition duration-700 -z-10" />

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
                    // HỒ SƠ CHÍNH THỨC
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    ONLINE FEED
                  </span>
                </div>

                {/* Portrait Image (3:4 ratio) */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-950 shadow-inner">
                  <Image
                    src="/avatar.jpg"
                    alt="Võ Ngọc Diễm"
                    fill
                    priority
                    className="object-cover object-top transition duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  
                  {/* Subtle digital gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040816] via-[#040816]/30 to-transparent" />

                  {/* Floating Frosted Glass Label inside photo */}
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-2xl backdrop-blur-md bg-blue-950/85 border border-cyan-400/35 space-y-1 shadow-2xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="font-display font-extrabold text-white text-base tracking-tight">
                          Võ Ngọc Diễm
                        </h2>
                        <p className="text-[11px] text-cyan-300 font-mono-code">
                          Design · Video AI · Web/App
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
                  <span className="text-slate-400">CỬ NHÂN ĐH SÀI GÒN</span>
                  <span className="text-cyan-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Uy tín & Đúng hẹn
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
