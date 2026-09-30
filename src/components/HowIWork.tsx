"use client";

import { Search, Lightbulb, Cpu, CheckCircle2 } from "lucide-react";
import { HOW_I_WORK } from "@/data/portfolioData";
import Scene3D from "./Scene3D";

const STEP_ICONS = [Search, Lightbulb, Cpu, CheckCircle2];

export default function HowIWork() {
  return (
    <section
      id="how"
      className="snap-section relative py-24 px-4 overflow-hidden bg-[#050816] min-h-screen flex flex-col justify-center"
    >
      {/* ── 3D Scene Background Layer ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Scene3D variant="how" />
      </div>
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full bg-[#2563FF]/8 blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full bg-[#35D9FF]/8 blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative max-w-6xl mx-auto w-full">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono-code text-[#35D9FF] text-xs tracking-[0.3em] uppercase mb-4 opacity-80">
            // 06 — PROCESS
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            CÁCH TÔI <span className="text-chrome">LÀM VIỆC</span>
          </h2>
        </div>

        {/* Steps grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_I_WORK.map((step, index) => {
            const StepIcon = STEP_ICONS[index % STEP_ICONS.length] ?? CheckCircle2;

            return (
              <div key={index} className="relative flex flex-col">
                {/* Connector line — desktop only, not after last card */}
                {index < HOW_I_WORK.length - 1 && (
                  <div className="hidden lg:flex absolute top-[2.75rem] left-full z-10 w-6 items-center justify-center pointer-events-none">
                    {/* Line + arrowhead */}
                    <div className="flex items-center w-full">
                      <div className="h-px flex-1 bg-gradient-to-r from-[#35D9FF]/40 to-[#35D9FF]/10" />
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        className="shrink-0"
                      >
                        <path
                          d="M0 4H6M6 4L3 1M6 4L3 7"
                          stroke="#35D9FF"
                          strokeOpacity="0.5"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className="group p-6 sm:p-8 rounded-3xl bg-[#071A3D]/40 backdrop-blur-md border border-[#35D9FF]/20 hover:border-[#35D9FF]/70 hover:-translate-y-2 hover:shadow-[0_15px_35px_-10px_rgba(53,217,255,0.25)] hover:bg-[#071A3D]/70 transition-all duration-300 flex flex-col gap-4 h-full relative overflow-hidden">
                  {/* HUD Accent marker */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#35D9FF]/40 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Top: Step number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-display font-black text-5xl sm:text-6xl text-[#35D9FF] opacity-40 group-hover:opacity-100 group-hover:text-white transition-all duration-300 leading-none select-none tracking-tighter">
                      {step.step}
                    </span>
                    <div className="genz-icon-badge w-10 h-10 rounded-xl shadow-[0_0_12px_rgba(53,217,255,0.2)]">
                      <StepIcon size={18} className="text-[#35D9FF]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-black text-xl text-white leading-snug tracking-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed font-urbanist">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
