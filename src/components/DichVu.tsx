"use client";

import { ArrowUpRight } from "lucide-react";

export default function DichVu() {
  const services = [
    {
      num: "01",
      tag: "PRINT & GRAPHIC",
      title: "Poster & Đồ Họa In Ấn",
      desc: "Thiết kế poster giải đấu bida / thể thao, banner chiến dịch marketing, standee đón khách và menu quán.",
      bullets: [
        "File in ấn độ phân giải cao 300 DPI, hệ màu CMYK chuẩn nhà in",
        "Tối ưu kích thước đăng Facebook, Zalo, Instagram, Story 9:16",
        "Bàn giao trọn gói file in sẵn + file thiết kế gốc (PSD/AI)",
      ],
      tools: ["Photoshop", "Illustrator", "Canva Pro", "In ấn CMYK"],
    },
    {
      num: "02",
      tag: "NEURAL AI MOTION",
      title: "Sản Xuất Video Ngắn AI",
      desc: "Sản xuất video ngắn TikTok, Reels, YouTube Shorts thu hút người xem từ 3 giây đầu tiên bằng trí tuệ nhân tạo.",
      bullets: [
        "Kịch bản bắt trend, giữ chân người xem và kích thích tương tác",
        "Tạo hình ảnh nhân vật & bối cảnh AI độc đáo bằng Midjourney / Flux",
        "Lồng tiếng thuyết minh AI ngữ điệu tự nhiên (chuẩn giọng Bắc / Nam)",
        "Dựng CapCut Pro nhịp điệu dứt khoát kết hợp phụ đề chuyển động",
      ],
      tools: ["Midjourney", "ElevenLabs VN", "CapCut Pro", "Canva"],
    },
    {
      num: "03",
      tag: "WEB & MOBILE RUNTIME",
      title: "Web Landing Page & App Flutter",
      desc: "Xây dựng các website bán hàng tải nhanh chuẩn SEO và ứng dụng di động đa nền tảng Flutter.",
      bullets: [
        "Landing Page tối ưu 100% cho điện thoại di động, tốc độ tải dưới 1 giây",
        "Tích hợp nút gọi điện, kết nối Zalo 1 chạm và form đăng ký tiện lợi",
        "Lập trình ứng dụng di động Flutter (quét mã QR, quản lý CLB, giải đấu)",
        "Bảo hành kỹ thuật chu đáo sau khi bàn giao",
      ],
      tools: ["Flutter", "Dart", "Next.js", "Tailwind CSS", "Supabase"],
    },
    {
      num: "04",
      tag: "OPERATION & WORKFLOW",
      title: "Vận Hành & Quy Trình Nội Bộ",
      desc: "Hỗ trợ xây dựng quy trình làm việc, quản lý thu chi, hành chính nhân sự và số hóa hoạt động cho cơ sở/CLB.",
      bullets: [
        "Nền tảng cẩn trọng từ chuyên ngành Tài chính - Ngân hàng (SGU)",
        "Lập bảng biểu theo dõi thu chi, doanh thu dịch vụ rõ ràng, minh bạch",
        "Ứng dụng công cụ số để giảm bớt thao tác thủ công, tiết kiệm thời gian",
      ],
      tools: ["Excel / Sheets", "Notion", "Tài chính nội bộ", "Quy trình vận hành"],
    },
  ];

  return (
    <section id="dich-vu" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Volumetric Glow */}
      <div className="volumetric-glow top-1/2 -right-32 w-[550px] h-[550px] bg-[#0A2463]/40" />
      <div className="volumetric-glow top-10 -left-20 w-[480px] h-[480px] bg-[#2563FF]/15" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs font-mono-code text-[#35D9FF]">
            <span className="font-pixel text-[10px]">MỤC // 01</span>
            <span className="w-8 h-[1px] bg-[#35D9FF]/40" />
            <span className="tracking-widest uppercase">NĂNG LỰC & DỊCH VỤ CỐT LÕI</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
                DỊCH VỤ <span className="text-chrome">THỰC CHIẾN</span>
              </h2>
              <p className="mt-3 text-lg sm:text-xl text-[#35D9FF] font-heading font-medium">
                Gọn gàng · Đúng hẹn · Chuẩn xác từng sản phẩm bàn giao
              </p>
            </div>

            <p className="max-w-md text-sm sm:text-base text-[#94A3B8] font-heading font-normal">
              Làm việc trực tiếp, cẩn thận, không qua trung gian. Báo giá minh bạch theo đúng quy mô dự án của bạn.
            </p>
          </div>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((item) => (
            <div
              key={item.num}
              className="group relative rounded-3xl p-6 sm:p-8 chrome-glass-card border border-[#35D9FF]/20 hover:border-[#35D9FF]/60 transition-all duration-400 flex flex-col justify-between"
            >
              {/* Corner HUD Markers */}
              <div className="hud-corner-tl" />
              <div className="hud-corner-tr" />

              <div className="space-y-5">
                {/* Card Top Meta */}
                <div className="flex items-center justify-between border-b border-[#35D9FF]/15 pb-4">
                  <span className="font-pixel text-xs sm:text-sm text-[#35D9FF]">
                    {item.num} // {item.tag}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#35D9FF] opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                </div>

                {/* Title & Desc */}
                <div className="space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-[#35D9FF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-heading">
                    {item.desc}
                  </p>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 text-xs font-mono-code text-slate-300 pt-2">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#35D9FF] shrink-0">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools Tags & Action */}
              <div className="pt-6 mt-6 border-t border-[#35D9FF]/15 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono-code text-[#35D9FF]">
                  {item.tools.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-[#0A2463]/60 border border-[#35D9FF]/25">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#lien-he"
                  className="inline-flex items-center gap-1 text-xs font-mono-code text-[#35D9FF] hover:text-white font-bold transition-colors"
                >
                  <span>Đặt lịch trao đổi</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
