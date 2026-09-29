"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Mail,
  MapPin,
  Send,
  Check,
  CheckCircle2,
  HelpCircle,
  MessageCircle,
  Terminal,
  ArrowUpRight,
} from "lucide-react";
import { PERSONAL_INFO, FAQS } from "@/data/portfolioData";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [selectedService, setSelectedService] = useState("poster");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    note: "",
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.contact) return;
    setFormSubmitted(true);
  };

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
            <span className="font-pixel text-[10px] text-cyan-300">CHAMBER_04 // COMM BEACON</span>
          </div>

          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono-code">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Kênh liên lạc trực tiếp // Phản hồi trong ngày</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Liên Hệ Trao Đổi & <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                Nhận Báo Giá Dự Án
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Bạn có thể nhắn tin Zalo, gửi email hoặc để lại thông tin nhu cầu bên dưới. 
              Mình sẽ xem yêu cầu và trao đổi giải pháp cùng báo giá phù hợp nhất.
            </p>
          </div>
        </div>

        {/* Contact info & Form grid */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Channels */}
          <div className="md:col-span-5 space-y-6">
            <div className="chrome-glass-card p-7 rounded-3xl space-y-6">
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />

              <div className="space-y-1">
                <span className="font-pixel text-[9px] text-cyan-400">// BEACON_LINK</span>
                <h2 className="font-techno text-xl font-bold text-white tracking-tight">
                  Kênh Kết Nối Nhanh
                </h2>
              </div>

              <div className="space-y-4 text-xs font-mono-code">
                {/* Email */}
                <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/20 space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <Mail className="w-3.5 h-3.5" />
                      EMAIL CHÍNH THỨC
                    </span>
                    <button
                      onClick={copyEmail}
                      className="px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-500/30 transition-colors cursor-pointer"
                    >
                      {copied ? "ĐÃ CHÉP!" : "CHÉP NHANH"}
                    </button>
                  </div>
                  <div className="text-white font-medium text-sm">{PERSONAL_INFO.email}</div>
                </div>

                {/* Zalo / Phone */}
                <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/20 space-y-1">
                  <span className="text-[10px] text-cyan-400 flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5" />
                    ZALO / SĐT TRAO ĐỔI
                  </span>
                  <div className="text-white font-medium text-sm">Nhắn tin trực tiếp qua Zalo</div>
                  <p className="text-[11px] text-slate-400">Dễ dàng gửi ảnh demo, file duyệt và trao đổi ý tưởng</p>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/20 space-y-1">
                  <span className="text-[10px] text-cyan-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    ĐỊA BÀN HOẠT ĐỘNG
                  </span>
                  <div className="text-white font-medium">{PERSONAL_INFO.location}</div>
                </div>
              </div>

              {/* Working style note */}
              <div className="pt-4 border-t border-blue-500/15 space-y-2 text-xs text-slate-300">
                <span className="font-pixel text-[9px] text-cyan-400 font-bold block">
                  // CAM KẾT HỢP TÁC:
                </span>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Báo giá trọn gói, không phát sinh chi phí vô lý.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Hỗ trợ chỉnh sửa chu đáo theo phản hồi.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Bảo mật nội dung và thông tin dự án của khách.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Request Form */}
          <div className="md:col-span-7">
            <div className="chrome-glass-card p-7 sm:p-8 rounded-3xl space-y-6">
              <div className="hud-corner-tr" />
              <div className="hud-corner-bl" />

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-cyan-400 font-pixel text-[9px]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>// DISPATCH_TERMINAL</span>
                </div>
                <h2 className="font-techno text-xl font-bold text-white tracking-tight">
                  Gửi Yêu Cầu Tư Vấn Nhanh
                </h2>
                <p className="text-xs text-slate-300 mt-1">
                  Chọn mảng bạn cần và để lại số Zalo/SĐT để mình liên hệ trao đổi chi tiết.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-cyan-400/20 text-cyan-300 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-techno font-bold text-white text-lg">Đã Tiếp Nhận Thông Tin!</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                    Cảm ơn bạn. Mình đã nhận được thông tin và sẽ nhắn tin/gọi lại cho bạn qua số{" "}
                    <span className="text-cyan-300 font-mono-code font-bold">
                      {formData.contact}
                    </span>{" "}
                    trong thời gian sớm nhất!
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", contact: "", note: "" });
                    }}
                    className="pt-2 text-xs font-mono-code text-cyan-400 underline cursor-pointer"
                  >
                    Gửi yêu cầu khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Service selector */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono-code text-slate-300">
                      MẢNG BẠN ĐANG CẦN:
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono-code">
                      {[
                        { key: "poster", label: "🎨 Poster & Banner" },
                        { key: "video", label: "🎬 Video Ngắn AI" },
                        { key: "web", label: "🌐 Thiết Kế Web" },
                        { key: "app", label: "📱 Lập Trình App" },
                      ].map((item) => (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => setSelectedService(item.key)}
                          className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                            selectedService === item.key
                              ? "border-cyan-400/70 bg-cyan-500/20 text-cyan-200 font-bold shadow-sm shadow-cyan-500/20"
                              : "border-blue-500/20 bg-blue-950/40 text-slate-300 hover:text-white"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono-code text-slate-300">
                      TÊN / CÁCH XƯNG HÔ:
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: Anh Nam, Chị Linh..."
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-blue-950/40 border border-blue-500/25 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Contact input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono-code text-slate-300">
                      SỐ ZALO HOẶC SĐT LIÊN HỆ <span className="text-cyan-400">*</span>:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nhập số Zalo hoặc SĐT của bạn"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-blue-950/40 border border-blue-500/25 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Note textarea */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono-code text-slate-300">
                      MÔ TẢ YÊU CẦU HOẶC Ý TƯỞNG CỦA BẠN:
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ví dụ: Mình cần làm poster giải bida vào ngày 15 tới, cần xong trong 2 ngày..."
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-blue-950/40 border border-blue-500/25 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-mono-code text-xs uppercase font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-xl shadow-blue-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Gửi Yêu Cầu Cho Diễm</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Section FAQs */}
        <section className="space-y-6 pt-4">
          <div className="flex items-center gap-2 pb-2 border-b border-blue-500/15">
            <HelpCircle className="w-5 h-5 text-cyan-400" />
            <h2 className="font-pixel text-xs text-cyan-400 tracking-widest uppercase">
              // DECRYPTED_FAQS: NHỮNG CÂU HỎI THƯỜNG GẶP
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="chrome-glass-card p-6 sm:p-7 rounded-3xl space-y-3">
                <span className="font-pixel text-[9px] text-cyan-400">Q_0{idx + 1}</span>
                <h3 className="font-techno font-bold text-sm text-cyan-200 leading-snug">{faq.q}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
