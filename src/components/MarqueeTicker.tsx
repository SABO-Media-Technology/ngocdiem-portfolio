"use client";

export default function MarqueeTicker() {
  const items = [
    "DIGITAL SOLUTIONS",
    "BRAND IDENTITY",
    "UI / UX DESIGN",
    "CONTENT STRATEGY",
    "WEB & WEB APP",
    "PRACTICAL OPERATIONS",
    "VISUAL SYSTEMS",
  ];

  return (
    <div className="relative w-full py-4 border-y border-[#35D9FF]/20 bg-[#071A3D]/40 backdrop-blur-md overflow-hidden select-none z-10">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((text, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-display font-bold text-sm tracking-[0.2em] text-[#F5FAFF]/80 uppercase hover:text-[#35D9FF] transition-colors">
              {text}
            </span>
            <span className="text-[#35D9FF] text-xs opacity-60">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
