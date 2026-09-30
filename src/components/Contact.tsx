"use client";

import { useState } from "react";
import { ArrowUpRight, Copy, Check, Mail, Globe } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const contactChannels = [
    {
      name: "Email Cá Nhân",
      val: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: <Mail className="w-5 h-5 text-[#35D9FF]" />,
      actionLabel: copiedEmail ? "ĐÃ SAO CHÉP!" : "SAO CHÉP",
      isCopy: true,
    },
    {
      name: "Facebook",
      val: "facebook.com/vongocdiem",
      href: PERSONAL_INFO.facebook,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#35D9FF]">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      actionLabel: "TRUY CẬP ↗",
      isCopy: false,
    },
    {
      name: "LinkedIn",
      val: "linkedin.com/in/vongocdiem",
      href: PERSONAL_INFO.linkedin,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#35D9FF]">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      actionLabel: "KẾT NỐI ↗",
      isCopy: false,
    },
    {
      name: "Trang Web / Portfolio",
      val: "diem.saboarena.com",
      href: PERSONAL_INFO.website,
      icon: <Globe className="w-5 h-5 text-[#35D9FF]" />,
      actionLabel: "KHÁM PHÁ ↗",
      isCopy: false,
    },
  ];

  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background Volumetric Glows */}
      <div className="volumetric-glow -bottom-20 -left-20 w-[600px] h-[600px] bg-[#2563FF]/20" />
      <div className="volumetric-glow top-0 right-0 w-[550px] h-[550px] bg-[#35D9FF]/15" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Dark Immersive Casing Card */}
        <div className="rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-br from-[#071A3D]/90 via-[#0A2463]/70 to-[#050816]/95 border-2 border-[#35D9FF]/35 shadow-[0_30px_90px_rgba(0,0,0,0.85)] backdrop-blur-2xl relative space-y-12">
          
          {/* HUD Crosshairs */}
          <div className="hud-corner-tl" />
          <div className="hud-corner-tr" />
          <div className="hud-corner-bl" />
          <div className="hud-corner-br" />

          {/* Section Indicator */}
          <div className="flex items-center justify-between text-xs font-mono-code text-[#35D9FF] pb-4 border-b border-[#35D9FF]/20">
            <span className="font-pixel text-[10px]">KẾT NỐI // 10</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#35D9FF] animate-ping" />
              TRẠNG THÁI: SẴN SÀNG TRAO ĐỔI DỰ ÁN
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            
            {/* LEFT: DRAMATIC HEADLINE & SUPPORTING TEXT */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* LARGE HEADLINE IN VIETNAMESE */}
              <div className="space-y-1 font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[0.92] text-white">
                <div>BẠN CÓ</div>
                <div className="text-chrome">DỰ ÁN CẦN</div>
                <div className="text-outline-cyan hover:text-[#35D9FF] transition-colors">
                  HIỆN THỰC HÓA?
                </div>
              </div>

              {/* SUPPORTING TEXT */}
              <p className="text-xl sm:text-2xl text-slate-200 font-heading font-medium">
                {PERSONAL_INFO.contactSub}
              </p>

              {/* MAIN CTA */}
              <div className="pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Trao%20%C4%91%E1%BB%95i%20d%E1%BB%B1%20%C3%A1n%20%E2%80%94%20V%C3%B5%20Ng%E1%BB%8Dc%20Di%E1%BB%85m`}
                  className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-mono-code text-sm sm:text-base uppercase font-bold bg-gradient-to-r from-[#2563FF] via-[#1d4ed8] to-[#35D9FF] hover:from-[#1d4ed8] hover:to-[#35D9FF] text-white shadow-xl shadow-[#2563FF]/40 transition-all hover:scale-105 active:scale-95 cursor-pointer border border-[#35D9FF]/50"
                >
                  <span>LIÊN HỆ HỢP TÁC</span>
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* RIGHT: CONTACT CHANNELS */}
            <div className="lg:col-span-5 space-y-3 font-mono-code text-xs">
              <div className="text-[10px] text-[#35D9FF] uppercase tracking-wider mb-2">
                KÊNH TRAO ĐỔI TRỰC TIẾP:
              </div>

              {contactChannels.map((c) => (
                <div
                  key={c.name}
                  className="p-4 rounded-2xl bg-[#050816]/75 border border-[#35D9FF]/20 hover:border-[#35D9FF]/60 transition-all flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#0A2463] text-[#35D9FF] group-hover:scale-110 transition-transform">
                      {c.icon}
                    </div>
                    <div>
                      <div className="text-[10px] text-[#94A3B8] uppercase">
                        {c.name}
                      </div>
                      <div className="font-semibold text-white truncate max-w-[180px] sm:max-w-[220px]">
                        {c.val}
                      </div>
                    </div>
                  </div>

                  {c.isCopy ? (
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="px-3 py-1.5 rounded-xl bg-[#2563FF]/20 hover:bg-[#2563FF]/40 border border-[#35D9FF]/40 text-[#35D9FF] transition-all flex items-center gap-1.5 cursor-pointer text-[10px] font-bold"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-400" />
                          <span className="text-green-400">ĐÃ SAO CHÉP</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>SAO CHÉP</span>
                        </>
                      )}
                    </button>
                  ) : (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-[#2563FF]/20 hover:bg-[#2563FF]/40 border border-[#35D9FF]/40 text-[#35D9FF] transition-all flex items-center gap-1 cursor-pointer text-[10px] font-bold"
                    >
                      <span>{c.actionLabel}</span>
                    </a>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
