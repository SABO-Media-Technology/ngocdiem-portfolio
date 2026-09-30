"use client";

import { GraduationCap, ShieldCheck, Clock, Coins, CheckCircle2 } from "lucide-react";

export default function VeToi() {
  const protocols = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#35D9FF]" />,
      num: "01",
      title: "Rõ Ràng & Minh Bạch",
      desc: "Thống nhất kỹ lưỡng đầu việc, phong cách, kích thước và chi phí trước khi bắt tay làm. Tuyệt đối không phát sinh chi phí mập mờ.",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#35D9FF]" />,
      num: "02",
      title: "Đúng Hẹn Tuyệt Đối",
      desc: "Deadline được cam kết bằng uy tín cá nhân. Tiến độ thực hiện luôn được cập nhật chủ động để bạn hoàn toàn an tâm sắp xếp công việc.",
    },
    {
      icon: <Coins className="w-6 h-6 text-[#35D9FF]" />,
      num: "03",
      title: "Linh Hoạt Ngân Sách",
      desc: "Tư vấn giải pháp tiết kiệm và hiệu quả nhất theo đúng quy mô: nhận thiết kế từng ấn phẩm lẻ hoặc gói đồng hành định kỳ cho câu lạc bộ/cơ sở.",
    },
  ];

  return (
    <section id="ve-toi" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Volumetric Glow */}
      <div className="volumetric-glow top-1/2 -right-20 w-[500px] h-[500px] bg-[#2563FF]/15" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs font-mono-code text-[#35D9FF]">
            <span className="font-pixel text-[10px]">MỤC // 03</span>
            <span className="w-8 h-[1px] bg-[#35D9FF]/40" />
            <span className="tracking-widest uppercase">HỒ SƠ CÁ NHÂN & NGUYÊN TẮC LÀM VIỆC</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
            VỀ <span className="text-chrome">NGỌC DIỄM</span>
          </h2>
        </div>

        {/* Bio Card */}
        <div className="p-8 sm:p-10 rounded-3xl chrome-glass-card border border-[#35D9FF]/25 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#35D9FF]/15 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#35D9FF]">
              <GraduationCap className="w-5 h-5 text-[#35D9FF]" />
              <span className="font-bold text-white">ĐẠI HỌC SÀI GÒN (SGU) — TÀI CHÍNH NGÂN HÀNG (2021 - 2025)</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#2563FF]/20 border border-[#35D9FF]/30 text-xs font-mono-code text-[#35D9FF] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>TP. Hồ Chí Minh · Nhận làm online toàn quốc</span>
            </span>
          </div>

          <p className="text-base sm:text-xl text-[#F5FAFF] font-heading font-normal leading-relaxed">
            “Với nền tảng từ ngành Tài chính – Ngân hàng đòi hỏi tính kỷ luật và cẩn trọng cao, tôi kết hợp cùng tư duy thiết kế hiện đại và các công cụ AI mới nhất để mang lại sản phẩm chất lượng, đúng tiến độ và tối ưu chi phí cho khách hàng.”
          </p>

          <div className="grid sm:grid-cols-3 gap-4 pt-2 text-xs font-mono-code text-slate-300">
            <div className="p-3.5 rounded-2xl bg-[#050816]/60 border border-[#35D9FF]/15 space-y-1">
              <div className="text-[10px] text-[#35D9FF] font-pixel">KỶ LUẬT SỐ LIỆU</div>
              <div className="text-slate-300">Tư duy logic, quản lý ngân sách và tài chính minh bạch.</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#050816]/60 border border-[#35D9FF]/15 space-y-1">
              <div className="text-[10px] text-[#35D9FF] font-pixel">CÔNG NGHỆ & AI</div>
              <div className="text-slate-300">Ứng dụng AI để đẩy nhanh tiến độ mà vẫn giữ nét độc đáo.</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#050816]/60 border border-[#35D9FF]/15 space-y-1">
              <div className="text-[10px] text-[#35D9FF] font-pixel">TẬN TÂM & CHU ĐÁO</div>
              <div className="text-slate-300">Chỉnh sửa kỹ lưỡng theo góp ý trước khi xuất bản/in ấn.</div>
            </div>
          </div>
        </div>

        {/* 3 Protocols */}
        <div className="grid md:grid-cols-3 gap-6">
          {protocols.map((p) => (
            <div
              key={p.num}
              className="p-6 sm:p-7 rounded-3xl chrome-glass-card border border-[#35D9FF]/20 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#2563FF]/20 border border-[#35D9FF]/30 flex items-center justify-center">
                  {p.icon}
                </div>
                <span className="font-pixel text-xs text-[#35D9FF]">PROTOCOL_{p.num}</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-heading">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
