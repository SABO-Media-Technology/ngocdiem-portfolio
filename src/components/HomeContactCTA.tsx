"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MessageSquare } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function HomeContactCTA() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative p-8 sm:p-12 rounded-3xl chrome-glass-card border-2 border-[#35D9FF]/40 text-center space-y-6 overflow-hidden">
          {/* Ambient Glows */}
          <div className="volumetric-glow -top-20 -left-20 w-[400px] h-[400px] bg-[#2563FF]/25" />
          <div className="volumetric-glow -bottom-20 -right-20 w-[400px] h-[400px] bg-[#35D9FF]/20" />

          {/* HUD corners */}
          <div className="hud-corner-tl" />
          <div className="hud-corner-tr" />
          <div className="hud-corner-bl" />
          <div className="hud-corner-br" />

          <div className="max-w-2xl mx-auto space-y-3">
            <span className="px-3.5 py-1.5 rounded-full bg-[#2563FF]/20 border border-[#35D9FF]/35 text-xs font-mono-code text-[#35D9FF]">
              // KẾT NỐI &amp; HỢP TÁC
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white">
              SẴN SÀNG ĐỒNG HÀNH TRONG CÁC DỰ ÁN
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-heading leading-relaxed">
              Bạn đang tìm kiếm người phụ trách vận hành chu đáo, tổ chức sự kiện thể thao, quản lý hành chính hay ứng dụng AI tăng năng suất? Hãy để lại lời nhắn.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/lien-he"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-mono-code text-xs sm:text-sm uppercase font-bold bg-gradient-to-r from-[#2563FF] to-[#35D9FF] text-white shadow-xl shadow-[#2563FF]/35 hover:scale-105 active:scale-95 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>GỬI LỜI NHẮN HỢP TÁC</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-mono-code text-xs sm:text-sm text-slate-200 border border-[#35D9FF]/30 hover:border-[#35D9FF] bg-[#071A3D]/70 hover:bg-[#0A2463] transition-all"
            >
              <Mail className="w-4 h-4 text-[#35D9FF]" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
