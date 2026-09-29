"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, ArrowUpRight, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", contact: "", message: "" });
  const [sent, setSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.contact) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormState({ name: "", contact: "", message: "" });
    }, 5000);
  };

  return (
    <section id="contact" className="space-y-8 scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-blue-500/15">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="font-pixel text-[10px] text-cyan-400 tracking-widest uppercase">
              // SECTOR 04: ĐIỂM KẾT NỐI & TRAO ĐỔI
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Khởi Tạo Dự Án Cùng Diễm
          </h2>
        </div>
        <div className="font-mono-code text-xs text-blue-300/80">
          PHẢN HỒI NHANH QUA ZALO & EMAIL
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Beacon Links */}
        <div className="md:col-span-5 chrome-glass-card rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="hud-corner-tl" />
          <div className="hud-corner-br" />

          <div className="space-y-2">
            <span className="font-pixel text-[9px] text-cyan-400 tracking-wider">
              // COMM_BEACON
            </span>
            <h3 className="font-techno font-bold text-xl text-white">Kênh Trực Tiếp</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Bạn có thể gửi tin nhắn qua Zalo hoặc sao chép email để thảo luận về yêu cầu và thời hạn bàn giao.
            </p>
          </div>

          <div className="space-y-3.5 text-xs font-mono-code">
            <div className="p-3.5 rounded-2xl bg-blue-950/40 border border-blue-500/20 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">EMAIL</span>
              <div className="flex items-center justify-between">
                <span className="text-white font-medium">{PERSONAL_INFO.email}</span>
                <button
                  onClick={copyEmail}
                  className="px-2 py-0.5 rounded-md bg-cyan-500/15 text-cyan-300 border border-cyan-400/30 text-[10px] hover:bg-cyan-500/30 transition-colors cursor-pointer"
                >
                  {copied ? "Đã chép!" : "Chép email"}
                </button>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-blue-950/40 border border-blue-500/20 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">ZALO / SĐT</span>
              <div className="text-white font-medium">Nhắn tin trực tiếp qua Zalo</div>
              <p className="text-[11px] text-slate-400">Gửi ảnh mẫu và phản hồi duyệt file thuận tiện nhất</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-blue-950/40 border border-blue-500/20 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">ĐỊA BÀN</span>
              <div className="text-white">{PERSONAL_INFO.location}</div>
            </div>
          </div>

          <div className="pt-2 border-t border-blue-500/15 text-xs text-slate-300 space-y-1.5">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Báo giá trọn gói minh bạch</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Chỉnh sửa chu đáo theo ý bạn</span>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Terminal Form */}
        <div className="md:col-span-7 chrome-glass-card rounded-3xl p-6 sm:p-8 space-y-5">
          <div className="hud-corner-tr" />
          <div className="hud-corner-bl" />

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-cyan-400">
              <Terminal className="w-4 h-4" />
              <span className="font-pixel text-[9px] tracking-wider">// DISPATCH_TERMINAL</span>
            </div>
            <h3 className="font-techno font-bold text-xl text-white">Gửi Nhanh Yêu Cầu Dự Án</h3>
          </div>

          {sent ? (
            <div className="p-6 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
              <h4 className="font-bold text-white text-base">Đã tiếp nhận thông tin!</h4>
              <p className="text-xs text-slate-300">
                Diễm sẽ liên hệ lại với bạn qua số Zalo / SĐT đã cung cấp trong thời gian sớm nhất.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono-code text-slate-300">
                    TÊN / CÁCH XƯNG HÔ:
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Anh Nam, Chị Linh..."
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-blue-950/40 border border-blue-500/25 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono-code text-slate-300">
                    SỐ ZALO HOẶC SĐT (*):
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nhập số Zalo hoặc SĐT liên hệ"
                    value={formState.contact}
                    onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-blue-950/40 border border-blue-500/25 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono-code text-slate-300">
                  NỘI DUNG DỰ ÁN HOẶC MONG MUỐN CỦA BẠN:
                </label>
                <textarea
                  rows={3}
                  placeholder="Ví dụ: Mình cần thiết kế poster giải thể thao / làm clip ngắn AI TikTok..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-blue-950/40 border border-blue-500/25 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-mono-code text-xs uppercase font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-xl shadow-blue-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Gửi Thông Tin Yêu Cầu</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
