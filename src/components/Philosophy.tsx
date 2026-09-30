"use client";

import { useEffect, useState } from "react";
import { Sparkles, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Philosophy() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 25;
      const y = (e.clientY / innerHeight - 0.5) * 25;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden select-none">
      {/* Volumetric Center Bloom */}
      <div className="volumetric-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#2563FF]/20" />
      <div
        className="volumetric-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#35D9FF]/18"
        style={{ animationDelay: "-5s" }}
      />

      {/* LARGE 3D CHROME/GLASS OBJECT BEHIND TYPOGRAPHY */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 z-0"
        style={{
          transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        <div className="relative w-[340px] sm:w-[540px] md:w-[680px] aspect-square">
          {/* Layered Specular Glass & Chrome Geometric Star/Ring SVG */}
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full animate-float-slow"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="chromeGrad1" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="0.3" stopColor="#35D9FF" stopOpacity="0.6" />
                <stop offset="0.7" stopColor="#2563FF" stopOpacity="0.5" />
                <stop offset="1" stopColor="#071A3D" stopOpacity="0.8" />
              </linearGradient>

              <radialGradient id="glassSphere" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#35D9FF" stopOpacity="0.4" />
                <stop offset="60%" stopColor="#2563FF" stopOpacity="0.15" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Background Radial Glow */}
            <circle cx="200" cy="200" r="180" fill="url(#glassSphere)" />

            {/* Outer Specular Chrome Ring */}
            <circle
              cx="200"
              cy="200"
              r="150"
              stroke="url(#chromeGrad1)"
              strokeWidth="4"
              strokeDasharray="12 8"
              opacity="0.7"
            />

            {/* Inner Chrome Orbit */}
            <ellipse
              cx="200"
              cy="200"
              rx="170"
              ry="75"
              transform="rotate(35 200 200)"
              stroke="#35D9FF"
              strokeWidth="3"
              opacity="0.85"
            />

            <ellipse
              cx="200"
              cy="200"
              rx="170"
              ry="75"
              transform="rotate(-40 200 200)"
              stroke="#ffffff"
              strokeWidth="2"
              opacity="0.6"
            />

            {/* Core Chrome Specular Polyhedron / Star */}
            <path
              d="M200 40 L240 160 L360 200 L240 240 L200 360 L160 240 L40 200 L160 160 Z"
              fill="url(#chromeGrad1)"
              stroke="#ffffff"
              strokeWidth="3"
              opacity="0.75"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-10">
        
        {/* Top Technical Metadata */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071A3D]/80 border border-[#35D9FF]/30 text-xs font-mono-code text-[#35D9FF] shadow-[0_0_15px_rgba(53,217,255,0.2)]">
          <span className="font-pixel text-[9px]">MANIFESTO // 09</span>
          <span className="text-[#94A3B8]">OPERATIONAL PHILOSOPHY</span>
        </div>

        {/* DRAMATIC OVERSIZED TYPOGRAPHY (Exact required copy) */}
        <div className="space-y-1 sm:space-y-3 font-display text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.92]">
          <div className="text-white hover:scale-105 transition-transform duration-300">
            GOOD WORK
          </div>
          <div className="text-chrome hover:scale-105 transition-transform duration-300">
            SHOULD MAKE
          </div>
          <div className="text-outline-cyan hover:text-[#35D9FF] transition-colors hover:scale-105 duration-300">
            THINGS
          </div>
          <div className="text-white hover:scale-105 transition-transform duration-300">
            SIMPLER.
          </div>
        </div>

        {/* SMALL SUPPORTING COPY (Exact required copy) */}
        <div className="max-w-2xl mx-auto pt-4">
          <p className="text-base sm:text-xl text-[#F5FAFF] font-heading font-normal leading-relaxed p-6 rounded-2xl bg-[#050816]/75 border border-[#35D9FF]/25 backdrop-blur-xl shadow-2xl">
            “Whether it’s managing operations, creating content, working with AI or developing digital solutions, I’m always looking for a better way to make things work.”
          </p>
        </div>

      </div>
    </section>
  );
}
