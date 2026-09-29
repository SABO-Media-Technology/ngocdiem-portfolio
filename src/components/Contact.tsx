"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", contact: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setFormState({ name: "", contact: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    }, 600);
  };

  return (
    <section id="contact" className="space-y-6 scroll-mt-20">
      <div>
        <span className="font-mono-code text-[11px] text-cyan-400 font-semibold tracking-wider uppercase">
          // 04. LIÊN HỆ
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Trao Đổi Công Việc
        </h2>
      </div>

      <div className="grid md:grid-cols-5 gap-6">
        {/* Direct Info */}
        <div className="md:col-span-2 blue-glass-panel rounded-2xl p-5 sm:p-6 space-y-4">
          <h3 className="font-bold text-base text-white">Liên hệ trực tiếp</h3>

          <div className="space-y-3 text-xs">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-blue-950/30 border border-blue-500/20 hover:border-cyan-400/40 transition-colors"
            >
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <div>
                <div className="text-[10px] font-mono-code text-blue-300/70 uppercase">Email</div>
                <div className="font-mono-code text-blue-100">{PERSONAL_INFO.email}</div>
              </div>
            </a>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-950/30 border border-blue-500/20">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <div>
                <div className="text-[10px] font-mono-code text-blue-300/70 uppercase">Địa bàn</div>
                <div className="text-slate-200">{PERSONAL_INFO.location}</div>
              </div>
            </div>
          </div>

          <p className="text-xs text-blue-200/80 font-normal pt-2 border-t border-blue-500/15">
            💡 Tư vấn nhanh và báo giá linh hoạt theo ngân sách của bạn.
          </p>
        </div>

        {/* Short Form */}
        <div className="md:col-span-3 blue-glass-panel rounded-2xl p-5 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-mono-code text-blue-200">Tên của bạn *</label>
                <input
                  required
                  type="text"
                  placeholder="Anh / Chị..."
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-blue-950/40 border border-blue-500/25 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-mono-code text-blue-200">Số Zalo / Email *</label>
                <input
                  required
                  type="text"
                  placeholder="09xx... hoặc email"
                  value={formState.contact}
                  onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-blue-950/40 border border-blue-500/25 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 font-mono-code transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono-code text-blue-200">Nhu cầu (Poster, Video AI, Web hay App) *</label>
              <textarea
                required
                rows={3}
                placeholder="Mô tả ngắn gọn yêu cầu của bạn..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-blue-950/40 border border-blue-500/25 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 font-normal transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 rounded-xl font-mono-code text-xs uppercase font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{sending ? "Đang gửi..." : "Gửi yêu cầu trao đổi"}</span>
            </button>

            {sent && (
              <div className="flex items-center justify-center gap-1.5 text-xs font-mono-code text-cyan-400 py-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Đã gửi! Tôi sẽ liên hệ lại bạn sớm nhất.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
