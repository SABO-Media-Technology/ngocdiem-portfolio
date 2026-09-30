"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Introduction() {
  const [showRealPhoto, setShowRealPhoto] = useState(true);

  const floatingBadges = [
    { label: "VẬN HÀNH", pos: "top-4 -left-6 sm:-left-10", delay: "0s" },
    { label: "KỸ THUẬT SỐ", pos: "top-1/3 -right-6 sm:-right-10", delay: "-1.5s" },
    { label: "TRÍ TUỆ NHÂN TẠO", pos: "bottom-1/3 -left-6 sm:-left-8", delay: "-3s" },
    { label: "SÁNG TẠO", pos: "bottom-6 -right-6 sm:-right-8", delay: "-4.5s" },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Volumetric Glows */}
      <div className="volumetric-glow -top-20 right-10 w-[450px] h-[450px] bg-[#2563FF]/15" />
      <div className="volumetric-glow bottom-0 -left-20 w-[480px] h-[480px] bg-[#35D9FF]/12" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs font-mono-code text-[#35D9FF] mb-3">
          <span className="font-pixel text-[10px]">MỤC // 01</span>
          <span className="w-8 h-[1px] bg-[#35D9FF]/40" />
          <span>CHÂN DUNG & BỐI CẢNH</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Large Portrait Area with Blue/Chrome Editorial Treatment */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Floating Labels */}
              {floatingBadges.map((badge) => (
                <div
                  key={badge.label}
                  className={`absolute ${badge.pos} z-20 animate-float-slow`}
                  style={{ animationDelay: badge.delay }}
                >
                  <span className="px-3.5 py-1.5 rounded-xl bg-[#071A3D]/90 border border-[#35D9FF]/60 text-xs font-mono-code font-bold text-[#F5FAFF] shadow-[0_0_20px_rgba(53,217,255,0.35)] backdrop-blur-xl flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#35D9FF] animate-pulse" />
                    {badge.label}
                  </span>
                </div>
              ))}

              {/* Luminous Chrome Halo Backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#2563FF]/40 via-[#35D9FF]/30 to-[#0A2463]/60 rounded-3xl blur-2xl opacity-60 transition duration-700 -z-10" />

              {/* Futuristic HUD Casing / Chrome Glass Card */}
              <div className="relative chrome-glass-card rounded-3xl p-4 sm:p-5 overflow-visible border-2 border-[#35D9FF]/30">
                {/* 4 Technical Corner HUD Crosshairs */}
                <div className="hud-corner-tl" />
                <div className="hud-corner-tr" />
                <div className="hud-corner-bl" />
                <div className="hud-corner-br" />

                {/* Top HUD Readout */}
                <div className="flex items-center justify-between pb-3 px-1 text-[11px] font-mono-code text-[#35D9FF]/90 border-b border-[#35D9FF]/20 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#35D9FF] animate-ping" />
                    <span className="font-pixel text-[9px] text-[#35D9FF]">
                      // DỮ LIỆU: DIỄM.HỒ_SƠ
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowRealPhoto(!showRealPhoto)}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-[#2563FF]/20 hover:bg-[#2563FF]/40 border border-[#35D9FF]/30 text-[#35D9FF] transition-colors cursor-pointer"
                  >
                    {showRealPhoto ? "XEM ĐỒ HỌA TRỪU TƯỢNG" : "XEM ẢNH THẬT"}
                  </button>
                </div>

                {/* Main Portrait Box (3:4 Ratio) */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#071A3D] shadow-2xl border border-[#35D9FF]/20">
                  {showRealPhoto ? (
                    <>
                      <Image
                        src={PERSONAL_INFO.avatar}
                        alt="Chân dung Võ Ngọc Diễm"
                        fill
                        priority
                        className="object-cover object-top transition duration-700 hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 420px"
                      />
                      {/* Editorial Blue/Cyan Gradient Treatment */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent pointer-events-none" />
                      <div className="absolute inset-0 bg-[#2563FF]/10 mix-blend-color pointer-events-none" />
                    </>
                  ) : (
                    /* Stylish Placeholder Composition */
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#071A3D] via-[#0A2463] to-[#050816] text-center space-y-4">
                      <div className="w-24 h-24 rounded-3xl specular-pill flex items-center justify-center border-2 border-[#35D9FF]/50 shadow-[0_0_35px_rgba(53,217,255,0.4)]">
                        <span className="font-display font-black text-4xl text-chrome">
                          VND
                        </span>
                      </div>
                      <div className="space-y-1">
                        <div className="font-display font-extrabold text-2xl text-white">
                          VÕ NGỌC DIỄM
                        </div>
                        <div className="font-mono-code text-xs text-[#35D9FF]">
                          VẬN HÀNH × DIGITAL × AI
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-[#050816]/70 border border-[#35D9FF]/20 text-[11px] font-mono-code text-slate-300 max-w-[260px]">
                        “Cử nhân Tài chính – Ngân hàng mở rộng sang vận hành, nội dung số &amp; quy trình AI.”
                      </div>
                    </div>
                  )}

                  {/* Frosted Glass Overlay Badge */}
                  <div className="absolute bottom-3 inset-x-3 p-3.5 rounded-2xl backdrop-blur-md bg-[#071A3D]/80 border border-[#35D9FF]/30 space-y-1 shadow-2xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-display font-bold text-white text-base">
                          {PERSONAL_INFO.name}
                        </div>
                        <div className="text-[11px] text-[#35D9FF] font-mono-code">
                          Vận hành · Digital · AI
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-md bg-[#2563FF]/30 text-[#35D9FF] text-[9px] font-pixel border border-[#35D9FF]/30">
                        XÁC THỰC
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Technical Details */}
                <div className="mt-3 pt-2.5 border-t border-[#35D9FF]/20 flex items-center justify-between text-[11px] font-mono-code text-[#94A3B8] px-1">
                  <span>CHUYÊN NGÀNH: TÀI CHÍNH × CÔNG NGHỆ</span>
                  <span className="text-[#35D9FF] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Hoạt động 2026
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Section Title & Exact Copy */}
          <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
            
            <div className="space-y-4">
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
                XIN CHÀO, <br />
                <span className="text-chrome">TÔI LÀ DIỄM.</span>
              </h2>
              
              <div className="w-16 h-1 bg-gradient-to-r from-[#2563FF] to-[#35D9FF] rounded-full" />
            </div>

            {/* EXACT COPY FROM PROMPT IN VIETNAMESE */}
            <div className="p-6 sm:p-8 rounded-3xl chrome-glass-card space-y-4 border border-[#35D9FF]/25">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-heading font-normal">
                “Tôi tốt nghiệp ngành Tài chính – Ngân hàng với kinh nghiệm thực chiến trong vận hành doanh nghiệp, hành chính, tài chính, nội dung số, thiết kế và tối ưu quy trình bằng AI.
              </p>
              <p className="text-base sm:text-lg text-[#35D9FF] leading-relaxed font-heading font-medium">
                Làm việc qua nhiều mảng khác nhau giúp tôi nhìn nhận và giải quyết vấn đề từ cả góc độ vận hành lẫn kỹ thuật số.”
              </p>
            </div>

            {/* Core Capability Pillars */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 font-mono-code text-xs">
              <div className="p-4 rounded-2xl bg-[#071A3D]/50 border border-[#35D9FF]/20 space-y-1 hover:border-[#35D9FF]/50 transition-colors">
                <div className="text-[10px] text-[#35D9FF] font-pixel">TRỤ CỘT // 01</div>
                <div className="font-bold text-white text-sm">Kỷ Luật Vận Hành</div>
                <div className="text-[11px] text-[#94A3B8]">Xây dựng quy trình SOP, điều phối sàn bida &amp; quản lý cơ sở</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#071A3D]/50 border border-[#35D9FF]/20 space-y-1 hover:border-[#35D9FF]/50 transition-colors">
                <div className="text-[10px] text-[#35D9FF] font-pixel">TRỤ CỘT // 02</div>
                <div className="font-bold text-white text-sm">Nhạy Bén Số &amp; AI</div>
                <div className="text-[11px] text-[#94A3B8]">Tự động hóa tác vụ, video ngắn bắt trend &amp; ứng dụng web</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
