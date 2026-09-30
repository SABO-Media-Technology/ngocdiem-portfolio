"use client";

import { useState } from "react";
import { Mail, Phone, Copy, Check, ArrowUpRight } from "lucide-react";
import Scene3D from "./Scene3D";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    });
  };

  const handleCopyPhone = () => {
    const raw = (PERSONAL_INFO as any).phoneRaw || "0329640232";
    navigator.clipboard.writeText(raw).then(() => {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    });
  };

  const phoneDisplay = (PERSONAL_INFO as any).phone || "0329 640 232";
  const phoneRaw = (PERSONAL_INFO as any).phoneRaw || "0329640232";

  return (
    <div className="relative py-20 px-4 overflow-hidden bg-[#050816] flex-1 flex flex-col justify-center">
      {/* ── 3D Scene Background Layer ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Scene3D variant="contact" />
      </div>
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[450px] rounded-full bg-[#2563FF]/10 blur-[120px]" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#35D9FF]/8 blur-[90px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center space-y-10">
        {/* Section label */}
        <div className="flex items-center justify-center gap-3">
          <span className="font-mono-code text-[#35D9FF] text-xs tracking-[0.3em] uppercase opacity-90">
            // 08 — CONTACT
          </span>
        </div>

        {/* Big heading with generous line height for Vietnamese diacritics */}
        <div className="flex flex-col items-center gap-2 select-none py-2">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight">
            BẠN ĐANG CÓ
          </h2>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight pb-2">
            MỘT <span className="text-chrome">DỰ ÁN?</span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="font-urbanist text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
          Website, Web App, Content hay Branding?
          <br className="hidden sm:block" />
          Hãy gửi cho tôi thông tin về dự án của bạn.
        </p>

        {/* Main CTA Button */}
        <div className="flex justify-center pt-2">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#2563FF] to-[#35D9FF] text-white font-display font-black text-base sm:text-lg tracking-wider hover:opacity-95 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-[#2563FF]/30"
          >
            <Mail size={20} className="shrink-0" />
            LET&apos;S TALK
            <ArrowUpRight
              size={20}
              className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

        {/* Contact info cards: Email + Phone */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-2xl mx-auto">
          {/* Email card */}
          <div className="w-full sm:w-auto flex-1 flex items-center justify-between gap-3 px-5 py-3.5 rounded-2xl bg-[#071A3D]/60 border border-[#35D9FF]/20 hover:border-[#35D9FF]/50 transition-colors backdrop-blur-md">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2.5 text-left group"
            >
              <div className="genz-icon-badge w-10 h-10 rounded-2xl shadow-[0_0_12px_rgba(53,217,255,0.25)] shrink-0">
                <Mail size={16} className="text-[#35D9FF]" />
              </div>
              <div>
                <p className="font-mono-code text-[10px] text-[#35D9FF]/70 uppercase tracking-wider">
                  Email
                </p>
                <p className="font-mono-code text-xs sm:text-sm text-slate-200 group-hover:text-white transition-colors">
                  {PERSONAL_INFO.email}
                </p>
              </div>
            </a>
            <button
              onClick={handleCopyEmail}
              aria-label={copiedEmail ? "Đã sao chép email" : "Sao chép email"}
              title="Sao chép email"
              className="p-2.5 rounded-xl border border-[#35D9FF]/20 text-[#35D9FF] hover:border-[#35D9FF]/60 hover:bg-[#35D9FF]/10 transition-all shrink-0"
            >
              {copiedEmail ? (
                <Check size={14} className="text-emerald-400" />
              ) : (
                <Copy size={14} />
              )}
            </button>
          </div>

          {/* Phone card */}
          <div className="w-full sm:w-auto flex-1 flex items-center justify-between gap-3 px-5 py-3.5 rounded-2xl bg-[#071A3D]/60 border border-[#35D9FF]/20 hover:border-[#35D9FF]/50 transition-colors backdrop-blur-md">
            <a
              href={`tel:${phoneRaw}`}
              className="flex items-center gap-3 text-left group"
            >
              <div className="genz-icon-badge w-10 h-10 rounded-2xl shadow-[0_0_12px_rgba(53,217,255,0.25)] shrink-0">
                <Phone size={16} className="text-[#35D9FF]" />
              </div>
              <div>
                <p className="font-mono-code text-[10px] text-[#35D9FF]/70 uppercase tracking-wider">
                  Điện thoại
                </p>
                <p className="font-mono-code text-xs sm:text-sm text-slate-200 group-hover:text-white transition-colors font-semibold">
                  {phoneDisplay}
                </p>
              </div>
            </a>
            <button
              onClick={handleCopyPhone}
              aria-label={copiedPhone ? "Đã sao chép số điện thoại" : "Sao chép số điện thoại"}
              title="Sao chép số điện thoại"
              className="p-2 rounded-xl border border-[#35D9FF]/20 text-[#35D9FF] hover:border-[#35D9FF]/60 hover:bg-[#35D9FF]/10 transition-all shrink-0"
            >
              {copiedPhone ? (
                <Check size={14} className="text-emerald-400" />
              ) : (
                <Copy size={14} />
              )}
            </button>
          </div>
        </div>

        {/* Copy confirmation feedback message */}
        {(copiedEmail || copiedPhone) && (
          <p className="font-mono-code text-xs text-emerald-400 animate-pulse">
            ✓ Đã sao chép {copiedEmail ? "email" : "số điện thoại"} vào bộ nhớ tạm!
          </p>
        )}
      </div>
    </div>
  );
}
