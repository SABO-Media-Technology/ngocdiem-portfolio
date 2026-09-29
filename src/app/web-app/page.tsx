import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Code2,
  Smartphone,
  Globe,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  Terminal,
} from "lucide-react";
import { WORK_PROCESS } from "@/data/portfolioData";

export default function WebAppPage() {
  const projects = [
    {
      title: "SABO ARENA — App Quản Lý Thi Đấu & CLB",
      category: "MOBILE RUNTIME (FLUTTER)",
      desc: "Ứng dụng theo dõi trận đấu, cập nhật kết quả bảng điểm theo thời gian thực, quản lý danh sách hội viên và lịch trình thi đấu.",
      techs: ["Flutter", "Dart", "Supabase", "REST API"],
      spec: "MULTI-TENANT // REALTIME POSTGRES // CROSS-PLATFORM",
      features: [
        "Cập nhật tỷ số trận đấu trực tiếp",
        "Quản lý giải đấu và chia bảng tự động",
        "Tra cứu thành tích cá nhân cơ thủ",
      ],
    },
    {
      title: "Website Giới Thiệu Dịch Vụ & Đặt Chỗ Trực Tuyến",
      category: "WEB PLATFORM (NEXT.JS)",
      desc: "Landing page bán hàng và giới thiệu cơ sở với tốc độ tải trang nhanh, hình ảnh không gian sắc nét, tích hợp gọi điện và chat Zalo 1 chạm.",
      techs: ["Next.js 16", "Tailwind CSS", "Vercel", "Responsive"],
      spec: "LOAD <1.2S // ZERO RUNTIME BLOAT // FULL SEO",
      features: [
        "Tối ưu hiển thị hoàn hảo trên điện thoại",
        "Nút gọi điện & chat Zalo trực tiếp",
        "Tải trang dưới 1.5 giây",
      ],
    },
    {
      title: "App Điểm Danh QR Cho Câu Lạc Bộ",
      category: "MOBILE RUNTIME (FLUTTER)",
      desc: "Giải pháp quét mã QR cá nhân của học viên hoặc hội viên để điểm danh nhanh chóng khi đến sân tập, lưu trữ lịch sử rõ ràng.",
      techs: ["Flutter", "Firebase", "QR Code Scanner"],
      spec: "CAMERA ENGINE // INSTANT SCAN // CLOUD LOGGING",
      features: [
        "Quét mã QR nhạy, phản hồi tức thì",
        "Báo cáo lịch sử điểm danh theo ngày/tháng",
        "Giao diện trực quan, không cần đào tạo",
      ],
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
        {/* Breadcrumb & Header */}
        <div className="space-y-5">
          <div className="flex items-center gap-2 text-xs font-mono-code text-cyan-400">
            <Link href="/" className="hover:underline text-slate-400 hover:text-cyan-300">
              CỔNG CHÍNH
            </Link>
            <span>/</span>
            <span className="font-pixel text-[10px] text-cyan-300">CHAMBER_03 // WEB & RUNTIME APPS</span>
          </div>

          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono-code">
              <Code2 className="w-3.5 h-3.5" />
              <span>Lập trình thực tế, chạy mượt mà</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Thiết Kế Web & Lập Trình <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                Ứng Dụng Mobile Flutter
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Nhận thiết kế Landing Page bán hàng giới thiệu dịch vụ và lập trình ứng dụng di động 
              Flutter (chạy cả Android & iOS). Tập trung vào sự đơn giản, tiện dụng, dễ quản lý và ổn định.
            </p>
          </div>

          {/* Value props */}
          <div className="flex flex-wrap gap-2.5 pt-2 text-xs font-mono-code">
            <span className="px-3 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/25 flex items-center gap-1.5 text-cyan-200">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              Tải trang nhanh dưới 1.5s
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/25 flex items-center gap-1.5 text-blue-200">
              <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
              Chuẩn Android & iOS (Flutter)
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/25 flex items-center gap-1.5 text-sky-200">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              Bảo hành kỹ thuật chu đáo
            </span>
          </div>
        </div>

        {/* Section 1: Hai dịch vụ chính */}
        <section className="grid sm:grid-cols-2 gap-8">
          {/* Card Web */}
          <div className="chrome-glass-card p-7 sm:p-8 rounded-3xl space-y-5">
            <div className="hud-corner-tl" />
            <div className="hud-corner-br" />

            <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-cyan-400">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <span className="font-pixel text-[9px] text-cyan-400">ARCH_01 // WEB LANDING</span>
              <h2 className="font-techno text-xl font-bold text-white tracking-tight mt-0.5">
                Website & Landing Page
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Phù hợp cho các quán cafe, câu lạc bộ thể thao, cơ sở dịch vụ hoặc cá nhân cần 
              website đẹp mắt để giới thiệu hình ảnh, bảng giá và nhận lịch hẹn trực tiếp từ khách.
            </p>
            <div className="space-y-2 pt-3 border-t border-blue-500/15 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Giao diện chuẩn trên mọi kích thước màn hình</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Tích hợp nút gọi điện, nhắn tin Zalo ngay lập tức</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Bàn giao mã nguồn hoặc hỗ trợ đưa lên tên miền riêng</span>
              </div>
            </div>
          </div>

          {/* Card App */}
          <div className="chrome-glass-card p-7 sm:p-8 rounded-3xl space-y-5">
            <div className="hud-corner-tr" />
            <div className="hud-corner-bl" />

            <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-cyan-400">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <span className="font-pixel text-[9px] text-cyan-400">ARCH_02 // FLUTTER ENGINE</span>
              <h2 className="font-techno text-xl font-bold text-white tracking-tight mt-0.5">
                Ứng Dụng Mobile Flutter
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Phù hợp cho các câu lạc bộ, trung tâm đào tạo hoặc doanh nghiệp nhỏ cần ứng dụng di động 
              tiện ích (điểm danh QR, xem lịch thi đấu, theo dõi điểm số, quản lý hội viên).
            </p>
            <div className="space-y-2 pt-3 border-t border-blue-500/15 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Chạy mượt mà trên cả Android và iOS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Tích hợp quét mã QR camera nhạy bén</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Dữ liệu lưu trữ an toàn trên Supabase / Firebase</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Dự án tiêu biểu */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-blue-500/15">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <h2 className="font-pixel text-xs text-cyan-400 tracking-widest uppercase">
              // 02. DỰ ÁN & SẢN PHẨM THỰC TẾ
            </h2>
          </div>

          <div className="space-y-5">
            {projects.map((p, idx) => (
              <div
                key={idx}
                className="chrome-glass-card p-6 sm:p-7 rounded-3xl space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-pixel px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-400/25">
                      {p.category}
                    </span>
                    <h3 className="font-techno text-base sm:text-lg font-bold text-white">{p.title}</h3>
                  </div>
                  <span className="font-mono-code text-[10px] text-cyan-300/80 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/20">
                    {p.spec}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{p.desc}</p>

                <div className="grid sm:grid-cols-3 gap-2 pt-2 border-t border-blue-500/15">
                  {p.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-1.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {p.techs.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-500/20 text-[10px] font-mono-code text-blue-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Quy trình */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-blue-500/15">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <h2 className="font-pixel text-xs text-cyan-400 tracking-widest uppercase">
              // 03. QUY TRÌNH TRIỂN KHAI PHẦN MỀM
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WORK_PROCESS.map((p, idx) => (
              <div key={idx} className="p-5 rounded-2xl chrome-glass-card space-y-2">
                <span className="font-pixel text-cyan-400 font-bold text-xs tracking-wider">
                  PHASE_{p.step}
                </span>
                <h3 className="font-techno font-bold text-sm text-white">{p.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="p-8 sm:p-10 rounded-3xl chrome-glass-card border-cyan-400/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-cyan-400 font-pixel text-[10px]">
              <Terminal className="w-3.5 h-3.5" />
              <span>// RUNTIME_DEPLOYMENT</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Bạn Đang Cần Làm Web Hoặc App Mobile?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Trao đổi về ý tưởng hoặc tính năng bạn mong muốn để nhận giải pháp kỹ thuật phù hợp nhất.
            </p>
          </div>
          <Link
            href="/lien-he"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-mono-code text-xs uppercase font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-xl shadow-blue-500/30 transition-all hover:scale-[1.02] shrink-0"
          >
            <span>Tư Vấn Dự Án</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
