import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Video,
  Sparkles,
  Mic,
  Clapperboard,
  CheckCircle2,
  TrendingUp,
  MessageSquare,
  Volume2,
  FileText,
} from "lucide-react";
import { VIDEO_AI_FORMATS, WORK_PROCESS } from "@/data/portfolioData";

export default function VideoAiPage() {
  const steps = [
    {
      icon: FileText,
      step: "01",
      title: "Viết Kịch Bản Viral",
      desc: "Nghiên cứu góc nhìn mới, tạo hook 3 giây đầu gây tò mò, giữ chân người xem xem hết clip.",
    },
    {
      icon: Sparkles,
      step: "02",
      title: "Sinh Hình Ảnh & Clip AI",
      desc: "Tạo hình ảnh minh họa chất lượng cao theo đúng phong cách yêu cầu (điện ảnh, chân thực, 3D).",
    },
    {
      icon: Mic,
      step: "03",
      title: "Lồng Giọng Đọc AI Tự Nhiên",
      desc: "Sử dụng công nghệ AI giọng đọc chuẩn tiếng Việt (Bắc / Nam), ngữ điệu truyền cảm, nhấn nhá tự nhiên.",
    },
    {
      icon: Clapperboard,
      step: "04",
      title: "Dựng Clip & Phụ Đề Động",
      desc: "Ghép phân cảnh nhịp nhàng, gắn nhạc nền thịnh hành và tạo phụ đề chuyển động dễ đọc khi lướt mạng.",
    },
  ];

  const examples = [
    {
      title: "Chuỗi Clip Chia Sẻ Kiến Thức Tài Chính & Đời Sống",
      duration: "45 - 60 giây",
      platform: "TikTok & YouTube Shorts",
      desc: "Nội dung cô đọng, hình ảnh đồ họa sinh động giúp người xem tiếp thu kiến thức phức tạp một cách trực quan, dễ hiểu.",
      tags: ["Kịch bản AI", "Giọng đọc truyền cảm", "Phụ đề động"],
    },
    {
      title: "Video Giới Thiệu Sản Phẩm / Dịch Vụ Mới",
      duration: "30 - 45 giây",
      platform: "Facebook Reels & TikTok",
      desc: "Tập trung giải quyết nỗi đau của khách hàng, nêu bật tính năng đặc sắc và kêu gọi hành động (CTA) khéo léo.",
      tags: ["Video bán hàng", "Hook bắt trend", "Âm thanh xu hướng"],
    },
    {
      title: "Clip Tin Tức & Câu Chuyện Truyền Cảm Hứng",
      duration: "60 giây",
      platform: "Đa nền tảng",
      desc: "Xây dựng thương hiệu cá nhân hoặc kênh cộng đồng với phong cách kể chuyện giàu cảm xúc, tạo lượng tương tác và chia sẻ cao.",
      tags: ["Storytelling", "Hình ảnh nghệ thuật", "Xây kênh không lộ mặt"],
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
            <span>Video Ngắn AI</span>
          </div>

          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono-code">
              <Video className="w-3.5 h-3.5" />
              <span>Sáng tạo video ngắn với trợ lực AI</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Sản Xuất Video Ngắn AI <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                Cho TikTok, Reels & Shorts
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Giải pháp sáng tạo nội dung video ngắn nhanh gọn và tiết kiệm. Giúp bạn hoặc doanh nghiệp 
              xây dựng kênh mạng xã hội đều đặn mà không cần tự quay phim hay sắm thiết bị đắt tiền.
            </p>
          </div>

          {/* Value props */}
          <div className="flex flex-wrap gap-2.5 pt-2 text-xs font-mono-code">
            <span className="px-3 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/25 flex items-center gap-1.5 text-cyan-200">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Không cần lộ mặt
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/25 flex items-center gap-1.5 text-blue-200">
              <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
              Giọng đọc AI tự nhiên
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/25 flex items-center gap-1.5 text-sky-200">
              <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
              Kịch bản tối ưu giữ chân
            </span>
          </div>
        </div>

        {/* Section 1: 4 Công đoạn sản xuất */}
        <section className="space-y-6">
          <div>
            <span className="font-mono-code text-[11px] text-cyan-400 font-semibold uppercase tracking-wider">
              // 01. QUY TRÌNH ỨNG DỤNG AI
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Các Bước Tạo Nên 1 Video Hoàn Chỉnh
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div key={idx} className="glass-card p-5 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono-code text-xs text-blue-400 font-bold">
                      {st.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-white">{st.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">{st.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Định dạng nội dung */}
        <section className="space-y-6">
          <div>
            <span className="font-mono-code text-[11px] text-cyan-400 font-semibold uppercase tracking-wider">
              // 02. CÁC ĐỊNH DẠNG NỘI DUNG NHẬN LÀM
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Phù Hợp Cho Nhiều Mục Đích Khác Nhau
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {examples.map((item, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono-code">
                    <span className="text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-400/20">
                      {item.duration}
                    </span>
                    <span className="text-slate-400">{item.platform}</span>
                  </div>

                  <h3 className="font-bold text-base text-white">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">{item.desc}</p>
                </div>

                <div className="pt-3 border-t border-blue-500/15 flex flex-wrap gap-1.5">
                  {item.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-500/20 text-[10px] text-blue-200 font-mono-code"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Cam kết chất lượng */}
        <section className="glass-card p-6 sm:p-8 rounded-3xl space-y-4">
          <h3 className="text-lg font-bold text-white">Cam Kết Khi Nhận Làm Video:</h3>
          <div className="grid sm:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Xuất video độ nét cao 1080x1920 (Full HD), không bị mờ hay vỡ hạt.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Nhạc nền thương mại an toàn, tránh vi phạm bản quyền khi đăng tải.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Chỉnh sửa câu từ, giọng đọc và phụ đề theo góp ý trước khi xuất bản.</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-r from-blue-950/80 via-blue-900/50 to-cyan-950/60 border border-cyan-400/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl shadow-blue-950/40">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Bạn Muốn Bắt Đầu Xây Kênh Video Ngắn?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Trao đổi về chủ đề bạn muốn làm để nhận kịch bản mẫu và clip thử nghiệm đầu tiên.
            </p>
          </div>
          <Link
            href="/lien-he"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono-code text-xs uppercase font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-[1.02] shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Tư Vấn Làm Video</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
