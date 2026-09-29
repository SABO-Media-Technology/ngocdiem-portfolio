import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Palette,
  CheckCircle2,
  FileCheck,
  Printer,
  Share2,
  MessageSquare,
  ArrowUpRight,
  Terminal,
} from "lucide-react";
import { POSTER_CATEGORIES, WORK_PROCESS } from "@/data/portfolioData";

export default function PosterPage() {
  const samples = [
    {
      title: "Poster Giải Đấu Bida Mở Rộng 2026",
      type: "Poster Thể Thao",
      size: "A1 (594 x 841 mm) + Ảnh đăng Facebook",
      desc: "Thiết kế poster giải đấu với tone xanh dương neon, bố cục cúp vô địch và thông tin giải thưởng nổi bật, tạo sự chuyên nghiệp cho giải.",
      tools: ["Photoshop", "Illustrator"],
      tag: "SỰ KIỆN & GIẢI ĐẤU",
      spec: "PRINT CMYK // 300 DPI // VECTOR ASSETS",
    },
    {
      title: "Bộ Banner Khai Trương & Ưu Đãi Giờ Vàng",
      type: "Banner Mạng Xã Hội",
      size: "Vuông 1:1 (1080x1080) & Dọc 9:16 Story",
      desc: "Bộ hình ảnh quảng cáo khai trương cơ sở, nêu bật chương trình khuyến mãi giảm 30% và tặng voucher cho khách hàng.",
      tools: ["Photoshop", "Canva Pro"],
      tag: "DIGITAL MARKETING",
      spec: "RGB WEB // HIGH COMPRESSION // META ADS READY",
    },
    {
      title: "Standee Khai Trương & Giới Thiệu Dịch Vụ",
      type: "Standee Cuốn Đứng",
      size: "60 x 160 cm (File in chuẩn 300 DPI)",
      desc: "Standee đặt trước sảnh đón khách, tóm tắt các gói dịch vụ, bảng giá và mã QR kết nối nhanh tới Fanpage/Zalo.",
      tools: ["Illustrator", "In ấn CMYK"],
      tag: "PRINT PHYSICAL",
      spec: "CANVAS 60x160CM // BLEED 2CM // CMYK COATING",
    },
    {
      title: "Menu & Bảng Giá Dịch Vụ Câu Lạc Bộ",
      type: "Menu Gấp Đôi / Treo Tường",
      size: "Khổ A4 2 mặt & Bảng lớn treo tường",
      desc: "Trình bày danh mục nước uống, dịch vụ giờ chơi rõ ràng, font chữ dễ đọc trong không gian ánh sáng dịu.",
      tools: ["Photoshop", "PDF Export"],
      tag: "EDITORIAL MENU",
      spec: "A4 LAMINATED // MATTE FINISH // HIGH LEGIBILITY",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-[#040816] text-slate-100 selection:bg-blue-500/30 selection:text-cyan-200">
      {/* Retro Coordinate Grid */}
      <div className="fixed inset-0 retro-grid pointer-events-none -z-10" />
      <div className="fixed inset-0 digital-noise opacity-40 pointer-events-none -z-10" />

      {/* Volumetric glow */}
      <div className="volumetric-glow top-[-80px] left-[-80px] w-[500px] h-[500px] bg-blue-600/18" />
      <div className="volumetric-glow top-[40%] right-[-100px] w-[500px] h-[500px] bg-cyan-500/15" />

      <Navbar />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-20">
        {/* Breadcrumb & Editorial Header */}
        <div className="space-y-5">
          <div className="flex items-center gap-2 text-xs font-mono-code text-cyan-400">
            <Link href="/" className="hover:underline text-slate-400 hover:text-cyan-300">
              CỔNG CHÍNH
            </Link>
            <span>/</span>
            <span className="font-pixel text-[10px] text-cyan-300">CHAMBER_01 // POSTER & PRINT</span>
          </div>

          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono-code">
              <Palette className="w-3.5 h-3.5" />
              <span>Dịch vụ thiết kế đồ họa & in ấn thực tế</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Thiết Kế Poster, Banner <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                & Ấn Phẩm Truyền Thông
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Nhận thiết kế poster giải đấu thể thao, sự kiện khai trương, banner quảng cáo mạng xã hội, standee và menu. 
              Xuất đầy đủ file in ấn sắc nét (CMYK 300DPI) và file nhẹ tối ưu cho Facebook, Zalo.
            </p>
          </div>

          {/* Value props */}
          <div className="flex flex-wrap gap-2.5 pt-2 text-xs font-mono-code">
            <span className="px-3 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/25 flex items-center gap-1.5 text-cyan-200">
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              Chuẩn in ấn 300 DPI CMYK
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/25 flex items-center gap-1.5 text-blue-200">
              <Share2 className="w-3.5 h-3.5 text-cyan-400" />
              Tối ưu quảng cáo mạng xã hội
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/25 flex items-center gap-1.5 text-sky-200">
              <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
              Chỉnh sửa chu đáo tận tâm
            </span>
          </div>
        </div>

        {/* Section 1: Hạng mục nhận làm */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-blue-500/15">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <h2 className="font-pixel text-xs text-cyan-400 tracking-widest uppercase">
              // 01. CÁC HẠNG MỤC THIẾT KẾ THỰC TẾ
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {POSTER_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="chrome-glass-card p-6 sm:p-7 rounded-3xl space-y-5 flex flex-col justify-between"
              >
                <div className="hud-corner-tl" />
                <div className="hud-corner-br" />

                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-cyan-400 font-pixel font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="font-techno font-bold text-lg text-white">{cat.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">{cat.desc}</p>
                </div>

                <div className="space-y-2 pt-3 border-t border-blue-500/15">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Mẫu thiết kế tham khảo */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2 border-b border-blue-500/15">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <h2 className="font-pixel text-xs text-cyan-400 tracking-widest uppercase">
                // 02. MẪU DỰ ÁN ĐÃ THỰC HIỆN
              </h2>
            </div>
            <span className="font-mono-code text-xs text-blue-300/80">
              FILE XUẤT CHUẨN IN VÀ ĐĂNG ONLINE
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {samples.map((item, idx) => (
              <div
                key={idx}
                className="chrome-glass-card p-6 sm:p-7 rounded-3xl space-y-4 flex flex-col justify-between"
              >
                <div className="hud-corner-tr" />
                <div className="hud-corner-bl" />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-pixel px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-400/25">
                      {item.tag}
                    </span>
                    <span className="text-[10px] font-mono-code text-slate-400">{item.size}</span>
                  </div>

                  <h3 className="font-techno text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>

                  <div className="px-2.5 py-1 rounded-md bg-blue-950/60 border border-blue-500/20 font-mono-code text-[10px] text-cyan-300/90">
                    {item.spec}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">{item.desc}</p>
                </div>

                <div className="pt-3 border-t border-blue-500/15 flex items-center justify-between text-xs font-mono-code text-slate-300">
                  <span className="text-blue-300/80">Công cụ:</span>
                  <div className="flex gap-1.5">
                    {item.tools.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-500/20 text-[10px] text-cyan-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Quy trình 4 bước */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-blue-500/15">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <h2 className="font-pixel text-xs text-cyan-400 tracking-widest uppercase">
              // 03. QUY TRÌNH HỢP TÁC RÕ RÀNG
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WORK_PROCESS.map((p, idx) => (
              <div key={idx} className="p-5 rounded-2xl chrome-glass-card space-y-2">
                <span className="font-pixel text-cyan-400 font-bold text-xs tracking-wider">
                  STEP_{p.step}
                </span>
                <h3 className="font-techno font-bold text-sm text-white">{p.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to action card */}
        <div className="p-8 sm:p-10 rounded-3xl chrome-glass-card border-cyan-400/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-cyan-400 font-pixel text-[10px]">
              <Terminal className="w-3.5 h-3.5" />
              <span>// DISPATCH_SIGNAL</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Bạn Đang Cần Thiết Kế Cho Sự Kiện Sắp Tới?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Gửi nội dung hoặc ý tưởng qua Zalo hoặc Email để nhận tư vấn bố cục và báo giá hợp lý.
            </p>
          </div>
          <Link
            href="/lien-he"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-mono-code text-xs uppercase font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-xl shadow-blue-500/30 transition-all hover:scale-[1.02] shrink-0"
          >
            <span>Liên Hệ Nhận Tư Vấn</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
