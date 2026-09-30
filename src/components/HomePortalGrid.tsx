"use client";

import Link from "next/link";
import { ArrowUpRight, User, Layers, Briefcase, Clock, Sparkles } from "lucide-react";

export default function HomePortalGrid() {
  const portals = [
    {
      href: "/gioi-thieu",
      number: "01",
      title: "GIỚI THIỆU",
      subtitle: "Bản thân, học vấn & triết lý làm việc",
      desc: "Xuất phát điểm từ ngành Tài chính – Ngân hàng (ĐH Sài Gòn), mở rộng sang vận hành, quản trị nội bộ và công nghệ số.",
      icon: User,
      badge: "HỒ SƠ CÁ NHÂN",
      color: "from-[#2563FF]/30 to-[#0A2463]/50",
    },
    {
      href: "/nang-luc",
      number: "02",
      title: "NĂNG LỰC",
      subtitle: "4 Mảng chuyên môn & Hộp công cụ",
      desc: "Vận hành câu lạc bộ bida, hành chính nhân sự, thiết kế ấn phẩm sự kiện chuẩn in và ứng dụng AI thực tế.",
      icon: Layers,
      badge: "CHUYÊN MÔN",
      color: "from-[#0A2463]/50 to-[#2563FF]/30",
    },
    {
      href: "/du-an",
      number: "03",
      title: "DỰ ÁN",
      subtitle: "4 Dự án & Ca triển khai thực tế",
      desc: "SABO Billiards, SABO Media & Technology, ứng dụng AI văn phòng và thiết kế ấn phẩm SABO Design.",
      icon: Briefcase,
      badge: "THỰC CHIẾN",
      color: "from-[#2563FF]/25 to-[#35D9FF]/20",
    },
    {
      href: "/kinh-nghiem",
      number: "04",
      title: "KINH NGHIỆM",
      subtitle: "Dòng thời gian & Bàn làm việc số",
      desc: "Lộ trình từ Ngân hàng VIB (2024) đến SABO Media & Technology (2026), cùng kho tài liệu quy chuẩn vận hành.",
      icon: Clock,
      badge: "LỘ TRÌNH",
      color: "from-[#35D9FF]/20 to-[#0A2463]/50",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#35D9FF]/15">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#35D9FF]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CÁC CHUYÊN MỤC TRỌNG TÂM</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              KHÁM PHÁ <span className="text-chrome">CHI TIẾT</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#94A3B8] font-mono-code">
            // CHỌN CHUYÊN MỤC ĐỂ XEM CHI TIẾT
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {portals.map((portal) => {
            const Icon = portal.icon;
            return (
              <Link
                key={portal.href}
                href={portal.href}
                className="group relative p-6 sm:p-8 rounded-3xl chrome-glass-card border border-[#35D9FF]/25 hover:border-[#35D9FF]/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(37,99,255,0.25)] flex flex-col justify-between space-y-6"
              >
                {/* HUD Corners */}
                <div className="hud-corner-tl" />
                <div className="hud-corner-tr" />
                <div className="hud-corner-bl" />
                <div className="hud-corner-br" />

                {/* Top Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#2563FF]/20 border border-[#35D9FF]/40 flex items-center justify-center text-[#35D9FF] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-pixel text-lg text-[#35D9FF]">
                      TRANG {portal.number}
                    </span>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-[#071A3D] border border-[#35D9FF]/30 text-[10px] font-mono-code text-slate-300">
                    {portal.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#35D9FF] transition-colors flex items-center justify-between">
                    <span>{portal.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#35D9FF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </h3>
                  <div className="text-xs font-mono-code text-[#35D9FF]/90 font-medium">
                    {portal.subtitle}
                  </div>
                  <p className="text-sm text-slate-300 font-heading leading-relaxed pt-1">
                    {portal.desc}
                  </p>
                </div>

                {/* Bottom link preview */}
                <div className="pt-3 border-t border-[#35D9FF]/15 flex items-center justify-between text-xs font-mono-code text-[#35D9FF] font-semibold">
                  <span>MỞ TRANG NÀY</span>
                  <span className="text-slate-400 group-hover:text-white transition-colors">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
