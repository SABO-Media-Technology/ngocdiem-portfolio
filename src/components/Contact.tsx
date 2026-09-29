"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, Send, FileText, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    topic: "mobile",
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
      setFormState({ name: "", email: "", topic: "mobile", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    }, 700);
  };

  return (
    <section id="contact" className="space-y-8 scroll-mt-24">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <span className="font-mono-code text-xs px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
          05 // CONTACT & COLLABORATION
        </span>
        <h2 className="font-serif-title text-2xl sm:text-3xl text-white tracking-tight">
          Liên Hệ & Hợp Tác Dự Án
        </h2>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Contact Info column */}
        <div className="md:col-span-2 space-y-4">
          <div className="glass-panel rounded-2xl p-6 space-y-4">
            <h3 className="font-serif-title font-semibold text-lg text-white">Kết nối trực tiếp</h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-amber-400/40 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-code text-zinc-500 uppercase font-semibold">Email làm việc</div>
                  <div className="font-mono-code text-zinc-200 group-hover:text-amber-300 transition-colors">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-cyan-400/10 text-cyan-400 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-code text-zinc-500 uppercase font-semibold">Địa bàn hoạt động</div>
                  <div className="text-zinc-200 font-light">{PERSONAL_INFO.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-purple-400/10 text-purple-400 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-code text-zinc-500 uppercase font-semibold">Múi giờ</div>
                  <div className="font-mono-code text-zinc-200">GMT+7 (Indochina Time)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Download card */}
          <div className="glass-panel rounded-2xl p-6 text-center space-y-3">
            <div className="text-xs text-zinc-400 font-light">
              Cần hồ sơ năng lực / CV chi tiết định dạng PDF?
            </div>
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Yeu%20cau%20CV%20Vo%20Ngoc%20Diem`}
              className="w-full py-2.5 rounded-xl font-mono-code text-xs font-semibold bg-white/[0.04] hover:bg-amber-400 hover:text-black border border-white/10 hover:border-amber-400 text-amber-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Yêu cầu nhận CV chi tiết (PDF)</span>
            </a>
          </div>
        </div>

        {/* Contact Form column */}
        <div className="md:col-span-3 glass-panel rounded-2xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono-code text-zinc-300">Họ và tên *</label>
                <input
                  required
                  type="text"
                  placeholder="Nguyễn Văn A"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-all font-light"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-mono-code text-zinc-300">Địa chỉ Email *</label>
                <input
                  required
                  type="email"
                  placeholder="email@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-all font-mono-code"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono-code text-zinc-300">
                Nhu cầu dự án / Mục đích kết nối
              </label>
              <select
                value={formState.topic}
                onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-amber-400 transition-all"
              >
                <option value="mobile">Xây dựng ứng dụng Mobile (Flutter / iOS / Android)</option>
                <option value="fullstack">Phát triển Web App & Nền tảng SaaS</option>
                <option value="consulting">Tư vấn kiến trúc hệ thống & RLS Security</option>
                <option value="other">Hợp tác tuyển dụng hoặc cơ hội khác</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono-code text-zinc-300">Nội dung tin nhắn *</label>
              <textarea
                required
                rows={4}
                placeholder="Mô tả ngắn gọn về nhu cầu hoặc lời nhắn của bạn..."
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
              <span>{isSubmitting ? "ĐANG GỬI THÔNG ĐIỆP..." : "GỬI THÔNG ĐIỆP NGAY"}</span>
            </button>

            {submitted && (
              <div className="flex items-center justify-center gap-2 text-center text-xs font-mono-code text-emerald-400 py-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>✓ Thông điệp đã được gửi thành công. Tôi sẽ liên hệ lại bạn sớm nhất!</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
