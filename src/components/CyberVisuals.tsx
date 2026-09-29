import React from "react";

/**
 * 3D Isometric Pixel Smiley Coin matching the user's reference image
 */
export function PixelSmiley3D({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <div className={`relative inline-block ${className} select-none`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_12px_24px_rgba(6,182,212,0.45)]"
      >
        <defs>
          <linearGradient id="faceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#bae6fd" />
            <stop offset="45%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="sideDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0369a1" />
            <stop offset="100%" stopColor="#082f49" />
          </linearGradient>
          <linearGradient id="sideLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
        </defs>

        {/* 3D Extrusion Depth (Bottom & Right shadow pixels) */}
        <g fill="url(#sideDark)">
          {/* Bottom extrusion */}
          <path d="M 28 72 L 36 80 L 76 80 L 68 72 Z" />
          <path d="M 36 80 L 44 88 L 84 88 L 76 80 Z" opacity="0.8" />
          {/* Right extrusion */}
          <path d="M 68 28 L 80 40 L 80 76 L 68 64 Z" fill="url(#sideLight)" />
          <path d="M 76 36 L 88 48 L 88 84 L 76 72 Z" />
        </g>

        {/* Front Isometric Pixel Coin Body */}
        {/* Pixelated Diamond/Hexagon shape */}
        <path
          d="
            M 36 16 H 60 
            L 76 32 
            V 56 
            L 60 72 
            H 36 
            L 20 56 
            V 32 
            Z
          "
          fill="url(#faceGrad)"
          stroke="#e0f2fe"
          strokeWidth="2"
        />

        {/* Pixel Eyes (Rectangular pixel dots) */}
        <rect x="34" y="32" width="7" height="12" fill="#0c4a6e" rx="1" />
        <rect x="55" y="32" width="7" height="12" fill="#0c4a6e" rx="1" />

        {/* Pixel Smile (Curved pixel mouth) */}
        <path
          d="
            M 32 50 
            H 38 
            V 56 
            H 58 
            V 50 
            H 64 
            V 60 
            H 58 
            V 64 
            H 38 
            V 60 
            H 32 
            Z
          "
          fill="#0c4a6e"
        />

        {/* Specular White Pixel Highlights */}
        <rect x="36" y="20" width="16" height="4" fill="#ffffff" opacity="0.8" />
        <rect x="24" y="34" width="4" height="12" fill="#ffffff" opacity="0.6" />
      </svg>
    </div>
  );
}

/**
 * 3D Isometric Pixel Mouse Cursor pointing diagonally up-left
 */
export function PixelCursor3D({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <div className={`relative inline-block ${className} select-none`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_16px_30px_rgba(37,99,235,0.6)]"
      >
        <defs>
          <linearGradient id="cursorBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#e0f2fe" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <linearGradient id="cursorExtrude" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
        </defs>

        {/* 3D Depth Extrusion Layer (Dark Blue bevel) */}
        <path
          d="
            M 20 18 L 32 28 
            L 32 78 L 44 68 L 54 90 L 64 86 L 54 64 L 72 64 
            L 20 18 Z
          "
          transform="translate(10, 10)"
          fill="url(#cursorExtrude)"
        />

        {/* Front White/Cyan Pixel Cursor Face */}
        <path
          d="
            M 18 16 
            L 18 76 
            L 32 64 
            L 44 88 
            L 54 83 
            L 42 60 
            L 62 60 
            Z
          "
          fill="url(#cursorBody)"
          stroke="#0284c7"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Pixel grid pattern on cursor surface */}
        <rect x="23" y="24" width="4" height="4" fill="#38bdf8" opacity="0.6" />
        <rect x="23" y="32" width="4" height="4" fill="#38bdf8" opacity="0.6" />
        <rect x="30" y="32" width="4" height="4" fill="#38bdf8" opacity="0.6" />
        <rect x="23" y="40" width="4" height="4" fill="#38bdf8" opacity="0.6" />
        <rect x="30" y="40" width="4" height="4" fill="#38bdf8" opacity="0.6" />
        <rect x="37" y="40" width="4" height="4" fill="#38bdf8" opacity="0.6" />
      </svg>
    </div>
  );
}

/**
 * 4-Point Crystal Glass Sparkle Star with iridescent refraction
 */
export function CrystalGlassStar({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`relative inline-block ${className} select-none`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="starGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#a5f3fc" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="starRim" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        {/* 4-Point Diamond Sparkle Star */}
        <path
          d="
            M 50 4 
            Q 50 42 12 50 
            Q 50 58 50 96 
            Q 50 58 88 50 
            Q 50 42 50 4 
            Z
          "
          fill="url(#starGlass)"
          stroke="url(#starRim)"
          strokeWidth="3.5"
          className="backdrop-blur-sm"
        />

        {/* Core Specular Lens Glare */}
        <circle cx="50" cy="50" r="7" fill="#ffffff" opacity="0.95" />
        <line x1="20" y1="50" x2="80" y2="50" stroke="#ffffff" strokeWidth="1.5" opacity="0.8" />
        <line x1="50" y1="20" x2="50" y2="80" stroke="#ffffff" strokeWidth="1.5" opacity="0.8" />
      </svg>
    </div>
  );
}

/**
 * 3D Chrome Liquid Ribbon / Torus for ambient background accents
 */
export function LiquidChromeRibbon({
  className = "w-64 h-64",
  variant = "top-left",
}: {
  className?: string;
  variant?: "top-left" | "bottom-right";
}) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-65 drop-shadow-[0_20px_50px_rgba(6,182,212,0.4)]"
      >
        <defs>
          <radialGradient
            id={`chromeGlow-${variant}`}
            cx="35%"
            cy="30%"
            r="70%"
            fx="35%"
            fy="30%"
          >
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="25%" stopColor="#38bdf8" />
            <stop offset="55%" stopColor="#2563eb" />
            <stop offset="85%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#070d1e" />
          </radialGradient>
          <linearGradient id={`specularHighlight-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#67e8f9" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#1d4ed8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {variant === "top-left" ? (
          /* Swirling liquid ribbon shape */
          <g>
            <path
              d="
                M 30 20 
                C 80 -10, 160 30, 140 90 
                C 120 150, 40 120, 20 160 
                C 5 190, 80 200, 120 180 
                C 170 160, 190 80, 150 30 
                C 110 -10, 40 10, 30 20 
                Z
              "
              fill={`url(#chromeGlow-${variant})`}
            />
            {/* Specular fluid light trail */}
            <path
              d="
                M 35 25 
                C 80 5, 145 35, 135 85 
                C 115 135, 45 115, 25 150
              "
              stroke={`url(#specularHighlight-${variant})`}
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
              opacity="0.85"
            />
          </g>
        ) : (
          /* Bottom right liquid knot / coil */
          <g>
            <path
              d="
                M 170 170 
                C 120 200, 40 160, 60 100 
                C 80 40, 160 70, 180 30 
                C 195 5, 120 0, 80 20 
                C 30 40, 10 120, 50 170 
                C 90 210, 160 185, 170 170 
                Z
              "
              fill={`url(#chromeGlow-${variant})`}
            />
            <path
              d="
                M 165 165 
                C 120 190, 50 155, 65 105 
                C 85 55, 155 75, 175 40
              "
              stroke={`url(#specularHighlight-${variant})`}
              strokeWidth="9"
              strokeLinecap="round"
              fill="none"
              opacity="0.8"
            />
          </g>
        )}
      </svg>
    </div>
  );
}

/**
 * Hero Banner Badge matching the user's uploaded inspiration image:
 * "Port [folio]" with Pixel Smiley, Crystal Star, and 3D Cursor pointer
 */
export function HeroCyberHeaderBadge() {
  return (
    <div className="relative inline-flex items-center justify-center py-4 px-2 select-none">
      {/* 3D Pixel Smiley floating on the left */}
      <div className="absolute -left-6 sm:-left-12 -top-3 sm:-top-5 z-20 animate-float-slow">
        <PixelSmiley3D className="w-11 h-11 sm:w-16 sm:h-16" />
      </div>

      {/* Main Glass Capsule Container */}
      <div className="relative flex items-center gap-1 sm:gap-2 px-4 sm:px-8 py-2.5 sm:py-3.5 rounded-full cyber-glass-capsule">
        {/* Modern Bold 'Port' */}
        <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-cyan-300 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]">
          Port
        </span>

        {/* 8-bit Pixel 'folio' */}
        <span className="font-pixel text-2xl sm:text-4xl md:text-5xl font-bold tracking-wider text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.7)]">
          folio
        </span>

        {/* Crystal Glass Sparkle Star on Top Right corner */}
        <div className="absolute -top-5 -right-5 sm:-top-7 sm:-right-7 z-30 animate-twinkle-star pointer-events-none">
          <CrystalGlassStar className="w-10 h-10 sm:w-14 sm:h-14" />
        </div>

        {/* 3D Pixel Cursor pointer pointing at capsule from bottom-right */}
        <div className="absolute -bottom-7 -right-4 sm:-bottom-10 sm:-right-8 z-30 animate-float-cursor pointer-events-none">
          <PixelCursor3D className="w-14 h-14 sm:w-20 sm:h-20" />
        </div>
      </div>
    </div>
  );
}
