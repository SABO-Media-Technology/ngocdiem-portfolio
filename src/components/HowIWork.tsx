"use client";

import { useState } from "react";
import { HOW_I_WORK_STEPS, HOW_I_WORK_COPY } from "@/data/portfolioData";
import { CheckCircle2, Zap, RefreshCw, Layers, Compass, Hammer } from "lucide-react";

export default function HowIWork() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="w-5 h-5 text-[#35D9FF]" />;
      case 1:
        return <Layers className="w-5 h-5 text-[#35D9FF]" />;
      case 2:
        return <Hammer className="w-5 h-5 text-[#35D9FF]" />;
      case 3:
        return <Zap className="w-5 h-5 text-[#35D9FF]" />;
      case 4:
        return <RefreshCw className="w-5 h-5 text-[#35D9FF]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#35D9FF]" />;
    }
  };

  return (
    <section id="process" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Volumetric Glow */}
      <div className="volumetric-glow top-1/2 left-1/4 w-[500px] h-[500px] bg-[#2563FF]/15" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        
        {/* SECTION HEADER */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs font-mono-code text-[#35D9FF]">
            <span className="font-pixel text-[10px]">MỤC // 06</span>
            <span className="w-8 h-[1px] bg-[#35D9FF]/40" />
            <span>QUY TRÌNH THỰC THI CHUẨN HÓA</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
                TỪ Ý TƯỞNG <span className="text-[#35D9FF] font-pixel text-3xl sm:text-5xl">→</span>{" "}
                <span className="text-chrome">HIỆN THỰC HÓA</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg md:text-xl text-[#35D9FF] font-heading font-medium max-w-2xl leading-relaxed">
                {HOW_I_WORK_COPY}
              </p>
            </div>

            <div className="px-3.5 py-1.5 rounded-full bg-[#071A3D]/70 border border-[#35D9FF]/30 text-xs font-mono-code text-[#35D9FF] self-start md:self-auto">
              CHU TRÌNH 5 BƯỚC
            </div>
          </div>
        </div>

        {/* FLOWING CONNECTED NODES PIPELINE */}
        <div className="relative">
          
          {/* Desktop Connection Line */}
          <div className="hidden lg:block absolute top-[52px] left-8 right-8 h-[2px] bg-gradient-to-r from-[#2563FF] via-[#35D9FF] to-[#2563FF] opacity-60 z-0 shadow-[0_0_15px_#35D9FF]" />

          {/* 5 Process Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative z-10">
            {HOW_I_WORK_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`group p-5 rounded-3xl chrome-glass-card border transition-all duration-300 cursor-pointer space-y-4 flex flex-col justify-between ${
                    isActive
                      ? "border-[#35D9FF] bg-[#071A3D]/90 shadow-[0_15px_40px_rgba(53,217,255,0.25)] -translate-y-2"
                      : "border-[#35D9FF]/20 hover:border-[#35D9FF]/50"
                  }`}
                >
                  {/* Node Circle Header */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-pixel text-sm font-bold transition-all ${
                        isActive
                          ? "bg-gradient-to-br from-[#2563FF] to-[#35D9FF] text-white shadow-[0_0_20px_#35D9FF]"
                          : "bg-[#0A2463]/70 text-[#35D9FF] border border-[#35D9FF]/30"
                      }`}
                    >
                      {step.step}
                    </div>

                    <div className="p-2 rounded-xl bg-[#050816]/70 border border-[#35D9FF]/20">
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  {/* Node Title */}
                  <div className="space-y-1">
                    <h3 className="font-display font-extrabold text-xl text-white group-hover:text-[#35D9FF] transition-colors">
                      {step.title}
                    </h3>
                    <div className="text-[11px] font-mono-code text-[#35D9FF]/80">
                      {step.subtitle}
                    </div>
                  </div>

                  {/* Node Description */}
                  <p className="text-xs text-[#94A3B8] font-heading leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Deliverable Badge */}
                  <div className="pt-2 border-t border-[#35D9FF]/15 text-[10px] font-mono-code text-[#94A3B8]">
                    <span className="text-[#35D9FF] font-semibold block">
                      KẾT QUẢ ĐẦU RA:
                    </span>
                    <span>{step.deliverable}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
