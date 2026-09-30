"use client";

export default function AtmosphericBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#050816]">
      {/* ── Deep Navy Ambient Radial Base ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 15%, #071A3D 0%, #050816 60%, #03050D 100%)",
        }}
      />

      {/* ── Dynamic Ambient Light Orbs ── */}
      <div className="absolute top-[8%] left-[10%] w-[550px] h-[550px] rounded-full bg-[#2563FF]/15 blur-[140px] animate-pulse" />
      <div className="absolute top-[45%] right-[5%] w-[600px] h-[600px] rounded-full bg-[#35D9FF]/10 blur-[160px]" />
      <div className="absolute bottom-[10%] left-[15%] w-[550px] h-[550px] rounded-full bg-[#0A2463]/30 blur-[150px]" />

      {/* ── Subtle Retro Grid Lines ── */}
      <div className="absolute inset-0 retro-grid opacity-25" />

      {/* ── Digital Dot Matrix Screen ── */}
      <div className="absolute inset-0 digital-noise opacity-15" />
    </div>
  );
}
