"use client";

import Scene3D from "./Scene3D";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="snap-section relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex flex-col justify-center bg-[#050816]"
    >
      {/* ── 3D Scene Background Layer (Peripheral objects) ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Scene3D variant="philosophy" />
      </div>

      {/* Background ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-[#2563FF]/10 blur-[130px]" />
        <div className="absolute top-1/4 right-10 w-80 h-80 rounded-full bg-[#35D9FF]/8 blur-[90px]" />
        <div className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-[#071A3D]/80 blur-[90px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center gap-10 sm:gap-14">
        {/* Section label */}
        <div className="flex items-center gap-3">
          <span className="font-mono-code text-[#35D9FF] text-xs tracking-[0.3em] uppercase opacity-80">
            // 07 — PHILOSOPHY
          </span>
        </div>

        {/* Stacked headline with generous line height for Vietnamese diacritics */}
        <div className="flex flex-col items-center gap-2 sm:gap-4 select-none">
          <div className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white leading-tight">
            TÔI THÍCH
          </div>
          <div className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white leading-tight">
            NHỮNG THỨ
          </div>
          <div className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-chrome leading-tight pb-2">
            THỰC TẾ.
          </div>
        </div>

        {/* Supporting paragraph in a delicate glass capsule for maximum legibility */}
        <div className="max-w-2xl mx-auto px-6 py-5 rounded-2xl bg-[#071A3D]/40 border border-[#35D9FF]/20 backdrop-blur-sm">
          <p className="text-center text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-urbanist">
            Tôi quan tâm đến những giải pháp có thể được sử dụng thật, giải quyết
            vấn đề thật và tạo ra giá trị rõ ràng.
            <br className="hidden sm:block mt-2" />
            <span className="block mt-2 sm:mt-1">
              Từ website, nội dung đến hình ảnh thương hiệu, tôi luôn cố gắng cân
              bằng giữa thẩm mỹ, tính thực tế và mục tiêu kinh doanh.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
