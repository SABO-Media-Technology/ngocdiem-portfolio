"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function DuAn() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "poster-bida",
      cat: "design",
      catLabel: "POSTER & IN ẤN",
      title: "Poster Giải Đấu Bida Mở Rộng 2026",
      desc: "Thiết kế poster giải đấu thể thao phong cách retro-futuristic xanh neon, bố cục cúp vô địch và thông tin giải thưởng nổi bật.",
      spec: "Khổ A1 / A2 · 300 DPI · Hệ màu CMYK in ấn + Bộ ảnh đăng Facebook / Story 9:16",
      tools: ["Photoshop", "Illustrator", "Print 300 DPI"],
      status: "ĐÃ HOÀN THÀNH",
    },
    {
      id: "video-ai-sports",
      cat: "video",
      catLabel: "VIDEO NGẮN AI",
      title: "Chuỗi Video AI Kể Chuyện Thể Thao",
      desc: "Sản xuất video ngắn TikTok dạng dọc 9:16: viết kịch bản giật tít, sinh hình ảnh nhân vật bằng AI và lồng tiếng thuyết minh tiếng Việt tự nhiên.",
      spec: "Định dạng 9:16 Full HD · Giữ chân 3s đầu · Phụ đề động kinetic text sinh động",
      tools: ["Midjourney", "ElevenLabs VN", "CapCut Pro"],
      status: "XUẤT BẢN MẠNG XÃ HỘI",
    },
    {
      id: "app-sabo-arena",
      cat: "app",
      catLabel: "ỨNG DỤNG FLUTTER",
      title: "SABO ARENA — Mobile Tournament App",
      desc: "Lập trình giao diện Flutter cho ứng dụng giải đấu SABO ARENA, module quét mã QR check-in người chơi và bảng xếp hạng trực tiếp.",
      spec: "Ứng dụng đa nền tảng Android & iOS · Tích hợp Supabase · Quét QR tức thì",
      tools: ["Flutter", "Dart", "Supabase"],
      status: "HOẠT ĐỘNG THỰC TẾ",
    },
    {
      id: "web-landing",
      cat: "web",
      catLabel: "WEB LANDING PAGE",
      title: "Landing Page Giới Thiệu CLB & Đặt Bàn",
      desc: "Thiết kế landing page tốc độ cao, giao diện chuẩn di động với nút đặt bàn Zalo/Gọi điện 1 chạm và bảng giá dịch vụ rõ ràng.",
      spec: "Tốc độ tải < 1 giây · Chuẩn SEO Google · Tích hợp form liên hệ và bản đồ",
      tools: ["Next.js", "Tailwind CSS", "Vercel"],
      status: "ONLINE TRỰC TIẾP",
    },
    {
      id: "standee-menu",
      cat: "design",
      catLabel: "ẤN PHẨM KHAI TRƯƠNG",
      title: "Bộ Standee Đứng & Menu Bida Chống Nước",
      desc: "Thiết kế đồng bộ standee đón khách 60x160cm và menu đồ uống bida A4 chống nước, căn chỉnh màu CMYK chuẩn nhà in.",
      spec: "File vector sắc nét · Không vỡ hạt khi in khổ lớn · Bàn giao file PDF và file gốc",
      tools: ["Illustrator", "Photoshop", "In bạt Standee"],
      status: "ĐÃ BÀN GIAO IN ẤN",
    },
    {
      id: "van-hanh-thu-chi",
      cat: "ops",
      catLabel: "VẬN HÀNH NỘI BỘ",
      title: "Bảng Biểu Quản Lý Thu Chi & Ca Trực",
      desc: "Hệ thống quản lý doanh thu dịch vụ, đối soát tiền giờ và theo dõi ca trực nhân viên dành cho câu lạc bộ giải trí thể thao.",
      spec: "Tự động tính toán tổng kết theo ngày/tháng · Báo cáo trực quan · Bảo mật số liệu",
      tools: ["Google Sheets", "Tài chính nội bộ", "Quy trình ca trực"],
      status: "ỨNG DỤNG HÀNG NGÀY",
    },
  ];

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.cat === filter
  );

  return (
    <section id="du-an" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Volumetric background glow */}
      <div className="volumetric-glow top-1/3 -left-32 w-[550px] h-[550px] bg-[#2563FF]/15" />
      <div className="volumetric-glow bottom-10 right-0 w-[500px] h-[500px] bg-[#35D9FF]/12" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs font-mono-code text-[#35D9FF]">
              <span className="font-pixel text-[10px]">MỤC // 02</span>
              <span className="w-8 h-[1px] bg-[#35D9FF]/40" />
              <span className="tracking-widest uppercase">HỒ SƠ DỰ ÁN & SẢN PHẨM MẪU</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
              DỰ ÁN <span className="text-chrome">THỰC TẾ</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl font-heading">
              Các sản phẩm đã triển khai thực tế từ ấn phẩm in ấn, video ngắn đến ứng dụng di động và hệ thống nội bộ.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 text-xs font-mono-code">
            <button
              onClick={() => setFilter("all")}
              className={`px-3.5 py-1.5 rounded-xl border transition-all ${
                filter === "all"
                  ? "bg-[#2563FF]/30 border-[#35D9FF] text-[#35D9FF] font-bold"
                  : "bg-[#071A3D]/50 border-[#35D9FF]/20 text-slate-300 hover:text-white"
              }`}
            >
              [ TẤT CẢ ]
            </button>
            <button
              onClick={() => setFilter("design")}
              className={`px-3.5 py-1.5 rounded-xl border transition-all ${
                filter === "design"
                  ? "bg-[#2563FF]/30 border-[#35D9FF] text-[#35D9FF] font-bold"
                  : "bg-[#071A3D]/50 border-[#35D9FF]/20 text-slate-300 hover:text-white"
              }`}
            >
              [ POSTER & IN ẤN ]
            </button>
            <button
              onClick={() => setFilter("video")}
              className={`px-3.5 py-1.5 rounded-xl border transition-all ${
                filter === "video"
                  ? "bg-[#2563FF]/30 border-[#35D9FF] text-[#35D9FF] font-bold"
                  : "bg-[#071A3D]/50 border-[#35D9FF]/20 text-slate-300 hover:text-white"
              }`}
            >
              [ VIDEO AI ]
            </button>
            <button
              onClick={() => setFilter("app")}
              className={`px-3.5 py-1.5 rounded-xl border transition-all ${
                filter === "app"
                  ? "bg-[#2563FF]/30 border-[#35D9FF] text-[#35D9FF] font-bold"
                  : "bg-[#071A3D]/50 border-[#35D9FF]/20 text-slate-300 hover:text-white"
              }`}
            >
              [ APP & WEB ]
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="group relative rounded-3xl p-6 chrome-glass-card border border-[#35D9FF]/20 hover:border-[#35D9FF]/60 transition-all duration-400 flex flex-col justify-between"
            >
              <div className="hud-corner-tl" />
              <div className="hud-corner-tr" />

              <div className="space-y-4">
                {/* Meta Top */}
                <div className="flex items-center justify-between text-[11px] font-mono-code pb-3 border-b border-[#35D9FF]/15">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#0A2463]/70 border border-[#35D9FF]/30 text-[#35D9FF] font-bold">
                    {p.catLabel}
                  </span>
                  <span className="text-[10px] text-cyan-400/80 font-pixel">
                    {p.status}
                  </span>
                </div>

                {/* Title & Desc */}
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-[#35D9FF] transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-heading">
                    {p.desc}
                  </p>
                </div>

                {/* Technical Specs */}
                <div className="p-3 rounded-xl bg-[#050816]/70 border border-[#35D9FF]/15 text-[11px] font-mono-code text-slate-300 space-y-1">
                  <div className="text-[9px] text-[#35D9FF] font-pixel">THÔNG SỐ KỸ THUẬT:</div>
                  <div>{p.spec}</div>
                </div>
              </div>

              {/* Tools & CTA */}
              <div className="pt-4 mt-5 border-t border-[#35D9FF]/15 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono-code text-[#35D9FF]">
                  {p.tools.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-[#0A2463]/60 border border-[#35D9FF]/20">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-lg bg-[#2563FF]/20 border border-[#35D9FF]/30 flex items-center justify-center text-[#35D9FF] group-hover:bg-[#2563FF] group-hover:text-white transition-all"
                  aria-label={`Yêu cầu làm sản phẩm tương tự ${p.title}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
