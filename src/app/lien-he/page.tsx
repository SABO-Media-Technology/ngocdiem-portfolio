"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  CheckCircle2,
  Clock,
  Sparkles,
  HelpCircle,
  MessageCircle,
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
    <div className="relative min-h-screen flex flex-col bg-[#070d1e] text-slate-100 selection:bg-blue-500/30 selection:text-cyan-200">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="ambient-glow top-[-80px] left-[-80px] w-[500px] h-[500px] bg-blue-600/18"></div>
        <div className="ambient-glow top-[40%] right-[-120px] w-[500px] h-[500px] bg-cyan-500/15"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(6,182,212,0.08),rgba(0,0,0,0))]"></div>
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
            <span>Liên Hệ</span>
          </div>

          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono-code">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Phản hồi nhanh trong ngày</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
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
            <div className="blue-glass-panel p-6 rounded-3xl space-y-6">
              <h2 className="text-lg font-bold text-white tracking-tight">
                Kênh Kết Nối Trực Tiếp
              </h2>

              <div className="space-y-4 text-xs font-mono-code">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 block text-[10px]">EMAIL</span>
                    <button
                      onClick={copyEmail}
                      className="text-white hover:text-cyan-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>{PERSONAL_INFO.email}</span>
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-cyan-400" />
                      ) : (
                        <span className="text-[10px] text-cyan-400 border border-cyan-400/30 px-1.5 py-0.5 rounded">
                          Chép
                        </span>
                      )}
                    </button>
                  </div>
                </div>

                {/* Zalo / Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 block text-[10px]">ZALO / SĐT</span>
                    <span className="text-white font-medium">Nhắn tin qua Zalo</span>
                    <p className="text-[10px] text-slate-400">Trao đổi nhanh, gửi ảnh duyệt trực tiếp</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 block text-[10px]">ĐỊA ĐIỂM</span>
                    <span className="text-white">{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>

              {/* Working style note */}
              <div className="pt-4 border-t border-blue-500/15 space-y-2 text-xs text-slate-300">
                <span className="text-[11px] font-mono-code text-cyan-400 font-bold block">
                  CAM KẾT KHI LÀM VIỆC:
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
            <div className="blue-glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Gửi Yêu Cầu Tư Vấn Nhanh
                </h2>
                <p className="text-xs text-slate-300 mt-1">
                  Chọn mảng bạn cần và để lại số Zalo/SĐT để mình liên hệ trao đổi chi tiết.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-cyan-400/20 text-cyan-300 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-white text-base">Đã Gửi Yêu Cầu Thành Công!</h3>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
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
                          className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                            selectedService === item.key
                              ? "border-cyan-400/60 bg-cyan-500/15 text-cyan-200 font-bold"
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
                      className="w-full px-4 py-2.5 rounded-xl bg-blue-950/40 border border-blue-500/25 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
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
                      className="w-full px-4 py-2.5 rounded-xl bg-blue-950/40 border border-blue-500/25 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
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
                      className="w-full px-4 py-2.5 rounded-xl bg-blue-950/40 border border-blue-500/25 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-mono-code text-xs uppercase font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
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
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-cyan-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Những Câu Hỏi Thường Gặp (FAQs)
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="blue-glass-panel p-6 rounded-2xl space-y-2.5">
                <h3 className="font-bold text-sm text-cyan-300 leading-snug">{faq.q}</h3>
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
