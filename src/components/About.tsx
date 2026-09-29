import { CheckCircle2, GraduationCap, Sparkles, Clock, HeartHandshake, ShieldCheck } from "lucide-react";
import { PERSONAL_INFO, WORK_PROCESS } from "@/data/portfolioData";

export default function About() {
  return (
    <section id="about" className="space-y-10 scroll-mt-24">
      {/* Section Header */}
      <div className="space-y-1">
        <span className="font-mono-code text-xs px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
          02 // VỀ TÔI & PHONG CÁCH LÀM VIỆC
        </span>
        <h2 className="font-serif-title text-2xl sm:text-3xl text-white tracking-tight pt-1">
          Đôi Nét Về Bản Thân & Cam Kết Hợp Tác
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Story Card */}
        <div className="md:col-span-2 glass-panel rounded-2xl p-6 sm:p-8 space-y-4">
          <h3 className="text-lg sm:text-xl font-serif-title font-semibold text-white">
            Linh hoạt, thực tế và luôn đồng hành cùng khách hàng
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-zinc-300 font-light">
            Tôi tốt nghiệp chuyên ngành <strong className="text-white font-medium">Tài chính - Ngân hàng</strong> tại{" "}
            <strong className="text-white font-medium">Trường Đại học Sài Gòn (SGU)</strong>. Nền tảng này giúp tôi có
            thói quen làm việc cẩn trọng, tôn trọng cam kết về thời gian và luôn đặt mình vào vị trí của khách hàng để
            tính toán giải pháp sao cho tiết kiệm chi phí nhất.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-zinc-300 font-light">
            Thay vì bạn phải thuê riêng một bên thiết kế hình ảnh, một bên dựng video và một bên làm lập trình, tôi có
            thể hỗ trợ bạn <span className="text-amber-300 font-medium">trọn gói từ A đến Z</span>: từ poster truyền
            thông, clip ngắn AI cuốn hút cho đến landing page giới thiệu hay ứng dụng di động gọn nhẹ.
          </p>

          <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 text-xs font-mono-code text-zinc-300">
            <span className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>Cử nhân SGU (2025)</span>
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>Bàn giao đúng hạn</span>
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-purple-400" />
              <span>Chỉnh sửa tận tâm</span>
            </span>
          </div>
        </div>

        {/* Commitment Card */}
        <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between space-y-4">
          <div>
            <h4 className="font-mono-code text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4">
              // NGUYÊN TẮC LÀM VIỆC
            </h4>
            <ul className="space-y-3.5 text-xs text-zinc-300 font-light">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white font-medium">Không nói quá:</strong> Chỉ nhận những công việc nằm trong
                  khả năng và làm thật tốt.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white font-medium">Chi phí minh bạch:</strong> Báo giá rõ ràng ngay từ đầu,
                  không phát sinh chi phí ẩn.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white font-medium">Hỗ trợ sau bàn giao:</strong> Hướng dẫn bạn đăng bài, sử
                  dụng file và bảo hành kỹ thuật chu đáo.
                </span>
              </li>
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono-code text-center">
            &ldquo;Lắng nghe nhu cầu · Báo giá hợp lý · Bàn giao chất lượng&rdquo;
          </div>
        </div>
      </div>

      {/* Work Process Steps */}
      <div className="space-y-4 pt-2">
        <h3 className="font-serif-title text-xl font-semibold text-white">Quy Trình Hợp Tác Đơn Giản</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WORK_PROCESS.map((step) => (
            <div key={step.step} className="glass-panel p-5 rounded-xl space-y-2 hover:border-amber-400/30 transition-all">
              <div className="font-mono-code text-xl font-bold text-amber-400">{step.step}</div>
              <h4 className="font-serif-title font-bold text-base text-white">{step.title}</h4>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
