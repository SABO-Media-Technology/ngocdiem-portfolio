import { CheckCircle2, ShieldCheck, Zap, GraduationCap, Building2, Terminal, Landmark } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function About() {
  return (
    <section id="about" className="space-y-8 scroll-mt-24">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <span className="font-mono-code text-xs px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
          01 // ABOUT & STORY
        </span>
        <h2 className="font-serif-title text-2xl sm:text-3xl text-white tracking-tight">
          Học Vấn, Câu Chuyện & Triết Lý Xây Dựng
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Main Bio Card */}
        <div className="md:col-span-2 glass-panel rounded-2xl p-6 sm:p-8 space-y-5">
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-serif-title font-semibold text-white">
              Giao thoa giữa <span className="text-amber-400 italic">Tư duy Tài chính</span> và{" "}
              <span className="text-indigo-400 italic">Kỹ thuật Phần mềm</span>
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-300 font-light">
              Tốt nghiệp chuyên ngành <strong className="text-white font-medium">Tài chính - Ngân hàng</strong> tại{" "}
              <strong className="text-white font-medium">Trường Đại học Sài Gòn (SGU)</strong>, tôi mang vào việc phát
              triển phần mềm góc nhìn sắc bén về tính toàn vẹn của dữ liệu, bài toán dòng tiền, điểm hòa vốn của tính
              năng và tính khả thi trong kinh doanh thực tế.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-300 font-light">
              Tại <strong className="text-white font-medium">SABO M&T</strong>, tôi trực tiếp kiến trúc và phát triển
              các ứng dụng di động Flutter và hệ thống đám mây quy mô lớn: từ nền tảng thi đấu bida{" "}
              <span className="text-amber-300 font-medium">SABO ARENA</span> với bảng điểm realtime phục vụ hàng ngàn
              cơ thủ, đến cổng điều hành dịch vụ <span className="text-cyan-300 font-medium">SABOHUB</span> và các bot
              tự động hóa AI.
            </p>
          </div>

          {/* Highlights pills */}
          <div className="pt-4 border-t border-white/10 grid sm:grid-cols-2 gap-3 text-xs font-mono-code">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-zinc-300">
              <Landmark className="w-4 h-4 text-amber-400 shrink-0" />
              <span>ĐH Sài Gòn (SGU) · Cử nhân 2025</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-zinc-300">
              <Building2 className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>SABO Media & Technology</span>
            </div>
          </div>
        </div>

        {/* Philosophy Card */}
        <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between space-y-4">
          <div>
            <h4 className="font-mono-code text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4">
              // TRIẾT LÝ PHÁT TRIỂN
            </h4>
            <ul className="space-y-4 text-xs text-zinc-300 font-light">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white font-medium">Sản phẩm thực chiến:</strong> Đo lường sự thành công bằng số
                  lượng người dùng hoạt động và sự ổn định khi vận hành production.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white font-medium">Bảo mật cấp Database:</strong> Không chỉ kiểm tra quyền ở
                  UI, mà thực thi nghiêm ngặt qua Row Level Security (RLS) PostgreSQL.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white font-medium">Trải nghiệm 60fps:</strong> Tối ưu render, kiểm soát frame
                  drops và tối giản độ trễ phản hồi mạng.
                </span>
              </li>
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono-code text-center">
            &ldquo;Code sạch · Dữ liệu chuẩn · Ship đúng hạn&rdquo;
          </div>
        </div>
      </div>
    </section>
  );
}
