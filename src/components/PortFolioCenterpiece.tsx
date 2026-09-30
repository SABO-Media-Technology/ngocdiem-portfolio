"use client";

import React from "react";

export default function PortFolioCenterpiece() {
  return (
    <div className="relative inline-flex items-center justify-center my-6 py-4 select-none">
      
      {/* 1. FLOATING 3D PIXEL SMILEY (Left side, like in reference artwork) */}
      <div className="absolute -left-12 sm:-left-20 md:-left-24 top-1/2 -translate-y-1/2 z-20 animate-smiley-float pointer-events-none">
        <div className="relative w-14 h-14 sm:w-20 sm:h-20 drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Isometric 3D depth shadow layers */}
            <circle cx="50" cy="56" r="42" fill="#1e3a8a" />
            <circle cx="50" cy="53" r="42" fill="#1d4ed8" />
            {/* Main coin face */}
            <circle cx="50" cy="48" r="42" fill="#2563eb" stroke="#38bdf8" strokeWidth="4" />
            
            {/* Inner rim glow */}
            <circle cx="50" cy="48" r="38" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
            
            {/* Pixel Eyes (White blocks) */}
            <rect x="36" y="34" width="7" height="14" rx="1" fill="#ffffff" />
            <rect x="57" y="34" width="7" height="14" rx="1" fill="#ffffff" />
            
            {/* Pixel Smile (White stepped smile block) */}
            <rect x="32" y="52" width="7" height="7" rx="1" fill="#ffffff" />
            <rect x="39" y="58" width="22" height="7" rx="1" fill="#ffffff" />
            <rect x="61" y="52" width="7" height="7" rx="1" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* 2. THE MAIN "Port [folio]" GRAPHIC CENTERPIECE */}
      <div className="flex items-center gap-2 sm:gap-4 relative z-10">
        
        {/* "Port" in Bold Cyan Display Type */}
        <div className="flex flex-col items-start">
          <span className="font-display font-black text-4xl sm:text-7xl md:text-8xl text-cyan-300 drop-shadow-[0_0_35px_rgba(6,182,212,0.55)] tracking-tight leading-none">
            Port
          </span>
          <div className="flex items-center gap-1.5 mt-1 sm:mt-1.5 pl-0.5">
            <span className="font-pixel text-[9px] sm:text-xs text-cyan-300 tracking-wider">
              VÕ NGỌC DIỄM
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          </div>
        </div>

        {/* The Frosted Glass Capsule Pill with "folio" */}
        <div className="relative">
          <div className="specular-pill px-6 sm:px-12 md:px-14 py-3 sm:py-5 md:py-6 rounded-full flex items-center justify-center shadow-2xl relative border-2 border-cyan-400/60 bg-gradient-to-r from-blue-900/35 via-cyan-950/45 to-blue-900/35 backdrop-blur-2xl">
            {/* Specular Glint Top Arc */}
            <div className="absolute top-1.5 inset-x-6 h-1/3 rounded-full bg-gradient-to-b from-white/35 to-transparent pointer-events-none"></div>
            
            <span className="font-pixel font-bold text-2xl sm:text-5xl md:text-6xl text-white tracking-widest drop-shadow-[0_3px_12px_rgba(255,255,255,0.7)] select-all">
              folio
            </span>
          </div>

          {/* 3. 3D TRANSLUCENT GLASS 4-POINT STAR SPARKLE (Top-right corner of the pill) */}
          <div className="absolute -top-5 -right-5 sm:-top-8 sm:-right-8 z-30 animate-star-shimmer pointer-events-none">
            <div className="w-12 h-12 sm:w-16 sm:h-16">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer Glass Glow */}
                <path
                  d="M50 0 C53 35 65 47 100 50 C65 53 53 65 50 100 C47 65 35 53 0 50 C35 47 47 35 50 0 Z"
                  fill="url(#glassGrad)"
                  stroke="#38bdf8"
                  strokeWidth="2.5"
                />
                {/* Inner Specular Core */}
                <path
                  d="M50 18 C52 40 60 48 82 50 C60 52 52 60 50 82 C48 60 40 52 18 50 C40 48 48 40 50 18 Z"
                  fill="#ffffff"
                  fillOpacity="0.85"
                />
                <defs>
                  <linearGradient id="glassGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffffff" stopOpacity="0.9" />
                    <stop offset="0.5" stopColor="#38bdf8" stopOpacity="0.5" />
                    <stop offset="1" stopColor="#1e3a8a" stopOpacity="0.75" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* 4. 3D ISOMETRIC PIXEL MOUSE ARROW CURSOR (Bottom-right, pointing into the pill) */}
          <div className="absolute -bottom-8 -right-3 sm:-bottom-12 sm:right-4 z-30 animate-cursor-bob pointer-events-none">
            <div className="w-14 h-14 sm:w-20 sm:h-20 drop-shadow-[0_10px_25px_rgba(37,99,235,0.7)]">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* 3D Extrusion Side & Bottom Shadow (Navy & Royal Blue) */}
                <path
                  d="M20 10 L20 70 L38 56 L52 86 L66 79 L53 50 L75 50 Z"
                  transform="translate(6, 6)"
                  fill="#0c1e4a"
                />
                <path
                  d="M20 10 L20 70 L38 56 L52 86 L66 79 L53 50 L75 50 Z"
                  transform="translate(3, 3)"
                  fill="#1d4ed8"
                />
                
                {/* Main Isometric Cursor Face (Vibrant Sky Blue with White Trim) */}
                <path
                  d="M20 10 L20 70 L38 56 L52 86 L66 79 L53 50 L75 50 Z"
                  fill="#38bdf8"
                  stroke="#ffffff"
                  strokeWidth="3.5"
                  strokeLinejoin="miter"
                />
                
                {/* Inner Pixel Highlight Grid */}
                <path
                  d="M26 18 L26 58 L37 49 L48 73 L55 69 L44 45 L62 45 Z"
                  fill="#60a5fa"
                />
              </svg>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
