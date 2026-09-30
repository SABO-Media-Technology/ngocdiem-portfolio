"use client";

import { useState } from "react";
import { Mail, Phone, MessageSquare, Send, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function LienHe() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "poster",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Mailto fallback
    const subject = encodeURIComponent(`[Yêu cầu dự án ${formData.service}] từ ${formData.name}`);
    const body = encodeURIComponent(
      `Chào Diễm,\n\nTôi là: ${formData.name}\nSố điện thoại/Zalo: ${formData.phone}\nDịch vụ quan tâm: ${formData.service}\n\nNội dung yêu cầu:\n${formData.message}\n\nTrân trọng!`
    );
    window.open(`mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`, "_blank");

    setFormSubmitted(true);
  };

  return (
    <section id="lien-he" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="volumetric-glow bottom-0 -left-20 w-[550px] h-[550px] bg-[#2563FF]/20" />
      <div className="volumetric-glow top-1/2 -right-32 w-[500px] h-[500px] bg-[#35D9FF]/15" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs font-mono-code text-[#35D9FF]">
            <span className="font-pixel text-[10px]">MỤC // 04</span>
            <span className="w-8 h-[1px] bg-[#35D9FF]/40" />
            <span className="tracking-widest uppercase">ĐIỂM KẾT NỐI & TRAO ĐỔI DỰ ÁN</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
            LIÊN HỆ <span className="text-chrome">HỢP TÁC</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl font-heading">
            Bạn cần thiết kế poster gấp, sản xuất video ngắn AI hay xây dựng landing page/app? Hãy để lại thông tin để nhận phản hồi và tư vấn nhanh nhất.
          </p>
        </div>

        {/* 2-Column Contact Interface */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl chrome-glass-card border border-[#35D9FF]/20 space-y-5">
              <div className="hud-corner-tl" />
              <div className="font-pixel text-xs text-[#35D9FF]">KÊNH LIÊN HỆ TRỰC TIẾP</div>

              <div className="space-y-4 font-mono-code text-xs">
                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-4 rounded-2xl bg-[#071A3D]/70 border border-[#35D9FF]/20 flex items-center justify-between hover:border-[#35D9FF]/60 hover:bg-[#0A2463]/90 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#2563FF]/20 border border-[#35D9FF]/30 flex items-center justify-center text-[#35D9FF] group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">EMAIL CÁ NHÂN</div>
                      <div className="text-white font-bold text-xs sm:text-sm">{PERSONAL_INFO.email}</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#35D9FF] font-bold">GỬI ↗</span>
                </a>

                {/* Zalo / Phone */}
                <a
                  href="https://zalo.me"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-[#071A3D]/70 border border-[#35D9FF]/20 flex items-center justify-between hover:border-[#35D9FF]/60 hover:bg-[#0A2463]/90 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#2563FF]/20 border border-[#35D9FF]/30 flex items-center justify-center text-[#35D9FF] group-hover:scale-105 transition-transform">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">ZALO / ĐIỆN THOẠI</div>
                      <div className="text-white font-bold text-xs sm:text-sm">Nhắn tin Zalo trực tiếp</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#35D9FF] font-bold">CHAT ↗</span>
                </a>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-[#071A3D]/70 border border-[#35D9FF]/20 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2563FF]/20 border border-[#35D9FF]/30 flex items-center justify-center text-[#35D9FF]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">ĐỊA BÀN HOẠT ĐỘNG</div>
                    <div className="text-white font-bold text-xs sm:text-sm">TP. Hồ Chí Minh · Nhận làm Online toàn quốc</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy note */}
            <div className="p-5 rounded-2xl bg-[#050816]/70 border border-[#35D9FF]/15 text-xs font-mono-code text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-[#35D9FF] font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Cam kết bảo mật thông tin</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Mọi ý tưởng sản phẩm, tài liệu trao đổi và hình ảnh dự án của bạn đều được cam kết bảo mật tuyệt đối.
              </p>
            </div>
          </div>

          {/* Right: Dispatch Terminal Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl chrome-glass-card border border-[#35D9FF]/20 space-y-6">
              <div className="hud-corner-tl" />
              <div className="hud-corner-tr" />

              <div className="flex items-center justify-between border-b border-[#35D9FF]/15 pb-4">
                <span className="font-pixel text-xs text-[#35D9FF]">
                  DISPATCH // GỬI YÊU CẦU DỰ ÁN
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono-code text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  SẴN SÀNG TIẾP NHẬN
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono-code">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-300">TÊN HOẶC ĐƠN VỊ CỦA BẠN *</label>
                    <input
                      required
                      type="text"
                      placeholder="Ví dụ: CLB Bida Sài Gòn"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050816]/70 border border-[#35D9FF]/25 text-white placeholder-slate-500 focus:outline-none focus:border-[#35D9FF]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-slate-300">SỐ ĐIỆN THOẠI / ZALO *</label>
                    <input
                      required
                      type="text"
                      placeholder="09xx xxx xxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050816]/70 border border-[#35D9FF]/25 text-white placeholder-slate-500 focus:outline-none focus:border-[#35D9FF]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300">DỊCH VỤ BẠN CẦN LÀM *</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#071A3D]/90 border border-[#35D9FF]/25 text-white focus:outline-none focus:border-[#35D9FF]"
                  >
                    <option value="Poster & Ấn phẩm in ấn">01 // Thiết kế Poster, Standee, Menu (In ấn 300 DPI)</option>
                    <option value="Video ngắn AI">02 // Sản xuất Video ngắn AI (TikTok / Reels / Shorts)</option>
                    <option value="Web Landing Page">03 // Thiết kế Website Landing Page tải nhanh</option>
                    <option value="Ứng dụng Flutter">04 // Lập trình Ứng dụng di động Flutter</option>
                    <option value="Gói kết hợp / Vận hành">05 // Tư vấn trọn gói / Vận hành quy trình</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300">MÔ TẢ YÊU CẦU & THỜI GIAN CẦN BÀN GIAO</label>
                  <textarea
                    rows={4}
                    placeholder="Mô tả sơ lược về nội dung, phong cách mong muốn hoặc thời hạn cần nhận file..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#050816]/70 border border-[#35D9FF]/25 text-white placeholder-slate-500 focus:outline-none focus:border-[#35D9FF]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold uppercase text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-xl shadow-blue-500/30 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Gửi thông tin trao đổi ngay ↗</span>
                </button>

                {formSubmitted && (
                  <div className="p-3.5 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 text-center font-bold flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                    <span>Đã ghi nhận thông tin! Diễm sẽ liên hệ lại với bạn trong thời gian sớm nhất.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
