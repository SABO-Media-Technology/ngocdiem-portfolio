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
      tag: "Sự kiện & Giải đấu",
    },
    {
      title: "Bộ Banner Khai Trương & Ưu Đãi Giờ Vàng",
      type: "Banner Mạng Xã Hội",
      size: "Vuông 1:1 (1080x1080) & Dọc 9:16 Story",
      desc: "Bộ hình ảnh quảng cáo khai trương cơ sở, nêu bật chương trình khuyến mãi giảm 30% và tặng voucher cho khách hàng.",
      tools: ["Photoshop", "Canva Pro"],
      tag: "Quảng cáo online",
    },
    {
      title: "Standee Khai Trương & Giới Thiệu Dịch Vụ",
      type: "Standee Cuốn Đứng",
      size: "60 x 160 cm (File in chuẩn 300 DPI)",
      desc: "Standee đặt trước sảnh đón khách, tóm tắt các gói dịch vụ, bảng giá và mã QR kết nối nhanh tới Fanpage/Zalo.",
      tools: ["Illustrator", "In ấn CMYK"],
      tag: "Ấn phẩm in",
    },
    {
      title: "Menu & Bảng Giá Dịch Vụ Câu Lạc Bộ",
      type: "Menu Gấp Đôi / Treo Tường",
      size: "Khổ A4 2 mặt & Bảng lớn treo tường",
      desc: "Trình bày danh mục nước uống, dịch vụ giờ chơi rõ ràng, font chữ dễ đọc trong không gian ánh sáng dịu.",
      tools: ["Photoshop", "PDF Export"],
      tag: "Menu bảng giá",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-[#060b18] text-slate-100 selection:bg-blue-500/30 selection:text-cyan-200">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="ambient-glow top-[-80px] left-[-80px] w-[500px] h-[500px] bg-blue-600/18"></div>
        <div className="ambient-glow top-[40%] right-[-120px] w-[500px] h-[500px] bg-cyan-500/15"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(6,182,212,0.06),rgba(0,0,0,0))]"></div>
      </div>

      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16">
        {/* Breadcrumb & Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono-code text-cyan-400">
            <Link href="/" className="hover:underline text-slate-400 hover:text-cyan-300">
              Trang Chủ
            </Link>
            <span>/</span>
            <span>Poster & Đồ Họa</span>
          </div>

          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono-code">
              <Palette className="w-3.5 h-3.5" />
              <span>Dịch vụ thiết kế đồ họa thực tế</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Thiết Kế Poster, Banner <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                & Ấn Phẩm Truyền Thông
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Nhận thiết kế poster giải đấu, sự kiện, banner quảng cáo mạng xã hội, standee và menu. 
              Xuất đầy đủ file in ấn sắc nét (CMYK 300DPI) và file nhẹ tối ưu cho Facebook, Zalo.
            </p>
          </div>

          {/* Quick value props */}
          <div className="flex flex-wrap gap-2.5 pt-2 text-xs font-mono-code">
            <span className="px-3 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/25 flex items-center gap-1.5 text-cyan-200">
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              Chuẩn in ấn 300 DPI
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/25 flex items-center gap-1.5 text-blue-200">
              <Share2 className="w-3.5 h-3.5 text-cyan-400" />
              Tối ưu mạng xã hội
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/25 flex items-center gap-1.5 text-sky-200">
              <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
              Chỉnh sửa chu đáo
            </span>
          </div>
        </div>

        {/* Section 1: Hạng mục nhận làm */}
        <section className="space-y-6">
          <div>
            <span className="font-mono-code text-[11px] text-cyan-400 font-semibold uppercase tracking-wider">
              // 01. CÁC HẠNG MỤC THIẾT KẾ
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Những Gì Bạn Có Thể Đặt Làm
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {POSTER_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-cyan-400 font-mono-code font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-base text-white">{cat.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">{cat.desc}</p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-blue-500/15">
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
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="font-mono-code text-[11px] text-cyan-400 font-semibold uppercase tracking-wider">
                // 02. MẪU DỰ ÁN THỰC TẾ
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Một Số Phong Cách Đã Thực Hiện
              </h2>
            </div>
            <span className="font-mono-code text-xs text-blue-300/80">
              Phong cách hiện đại, trẻ trung & rõ ràng
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {samples.map((item, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono-code px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
                      {item.tag}
                    </span>
                    <span className="text-[10px] font-mono-code text-slate-400">{item.size}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>

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
          <div>
            <span className="font-mono-code text-[11px] text-cyan-400 font-semibold uppercase tracking-wider">
              // 03. QUY TRÌNH HỢP TÁC
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              4 Bước Đơn Giản Để Có Thiết Kế Ưng Ý
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WORK_PROCESS.map((p, idx) => (
              <div key={idx} className="p-5 rounded-2xl glass-card space-y-2">
                <span className="font-mono-code text-cyan-400 font-bold text-sm tracking-wider">
                  {p.step}
                </span>
                <h3 className="font-bold text-sm text-white">{p.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to action card */}
        <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-r from-blue-950/80 via-blue-900/50 to-cyan-950/60 border border-cyan-400/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl shadow-blue-950/40">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Bạn Đang Cần Thiết Kế Cho Sự Kiện Sắp Tới?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Gửi nội dung hoặc ý tưởng qua Zalo hoặc Email để nhận tư vấn bố cục và báo giá hợp lý.
            </p>
          </div>
          <Link
            href="/lien-he"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono-code text-xs uppercase font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-[1.02] shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Liên Hệ Nhận Tư Vấn</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
