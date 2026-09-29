"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    contact: "",
    service: "poster",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", contact: "", service: "poster", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    }, 700);
  };

  return (
    <section id="contact" className="space-y-8 scroll-mt-24">
      {/* Section Header */}
      <div className="space-y-1">
        <span className="font-mono-code text-xs px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
          04 // BÁO GIÁ & LIÊN HỆ
        </span>
        <h2 className="font-serif-title text-2xl sm:text-3xl text-white tracking-tight pt-1">
          Liên Hệ Trao Đổi Công Việc
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Hãy để lại yêu cầu của bạn, tôi sẽ phản hồi và gửi tư vấn/báo giá trong thời gian sớm nhất
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Info Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="glass-panel rounded-2xl p-6 space-y-4">
            <h3 className="font-serif-title font-semibold text-lg text-white">Kênh trao đổi trực tiếp</h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-amber-400/40 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-code text-zinc-500 uppercase font-semibold">Email</div>
                  <div className="font-mono-code text-zinc-200 group-hover:text-amber-300 transition-colors">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-cyan-400/10 text-cyan-400 flex items-center justify-center font-bold">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-code text-zinc-500 uppercase font-semibold">Địa bàn</div>
                  <div className="text-zinc-200 font-light">{PERSONAL_INFO.location} (Hỗ trợ Online toàn quốc)</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-purple-400/10 text-purple-400 flex items-center justify-center font-bold">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-code text-zinc-500 uppercase font-semibold">Thời gian phản hồi</div>
                  <div className="text-zinc-200 font-light">Thường phản hồi trong 1 - 2 giờ</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-5 text-xs text-zinc-400 font-light space-y-1.5">
            <div className="font-mono-code text-amber-400 font-medium">💡 Gợi ý khi gửi yêu cầu:</div>
            <p>
              Bạn có thể mô tả ngắn về: loại hình cần làm (poster, video, web hay app), thời hạn mong muốn và mẫu tham khảo nếu có.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-3 glass-panel rounded-2xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono-code text-zinc-300">Tên của bạn *</label>
                <input
                  required
                  type="text"
                  placeholder="Ví dụ: Anh Hoàng / Chị Mai"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-all font-light"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-mono-code text-zinc-300">Số Zalo hoặc Email *</label>
                <input
                  required
                  type="text"
                  placeholder="09xx... hoặc email@..."
                  value={formState.contact}
                  onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-all font-mono-code"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono-code text-zinc-300">Dịch vụ bạn đang quan tâm</label>
              <select
                value={formState.service}
                onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-amber-400 transition-all"
              >
                <option value="poster">Thiết kế Poster, Banner quảng cáo & Ấn phẩm đồ họa</option>
                <option value="video_ai">Sản xuất Video ngắn bằng công cụ AI (TikTok / Reels / Shorts)</option>
                <option value="web">Thiết kế & Lập trình Website / Landing Page</option>
                <option value="app">Lập trình Ứng dụng di động (Flutter App)</option>
                <option value="combo">Gói kết hợp (Thiết kế + Video hoặc Web + App)</option>
                <option value="other">Trao đổi cơ hội hợp tác khác</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono-code text-zinc-300">Mô tả ngắn gọn nhu cầu *</label>
              <textarea
                required
                rows={4}
                placeholder="Ví dụ: Mình cần thiết kế 1 poster giải đấu và 2 video ngắn giới thiệu trên TikTok..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-all font-light"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl font-mono-code text-xs sm:text-sm uppercase font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? "Đang gửi yêu cầu..." : "GỬI YÊU CẦU TƯ VẤN"}</span>
            </button>

            {submitted && (
              <div className="flex items-center justify-center gap-2 text-center text-xs font-mono-code text-emerald-400 py-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>✓ Cảm ơn bạn! Yêu cầu đã được gửi đến Diễm. Tôi sẽ liên hệ lại bạn qua Zalo/Email sớm nhất!</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
