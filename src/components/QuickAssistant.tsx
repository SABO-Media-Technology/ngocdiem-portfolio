"use client";

import { useState } from "react";
import { MessageSquare, X, Send, Bot, Sparkles, ArrowRight, UserCheck, CheckCircle2 } from "lucide-react";

interface QuickPrompt {
  id: string;
  label: string;
  question: string;
  answer: string;
  actionText?: string;
  actionLink?: string;
}

export default function QuickAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    Array<{ sender: "bot" | "user"; text: string; actionText?: string; actionLink?: string }>
  >([
    {
      sender: "bot",
      text: "Xin chào! Tôi là trợ lý số hỗ trợ thông tin của Võ Ngọc Diễm. Bạn đang quan tâm đến mảng năng lực nào của Diễm?",
    },
  ]);

  const quickPrompts: QuickPrompt[] = [
    {
      id: "ops",
      label: "🎱 Vận hành CLB & Giải đấu",
      question: "Diễm có kinh nghiệm gì trong vận hành CLB và tổ chức giải đấu bida?",
      answer:
        "Diễm trực tiếp điều phối vận hành tại SABO Billiards: xây dựng checklist mở/đóng ca chuẩn (SOP), quản lý xoay bàn, chăm sóc hội viên và kết nối bảng đấu thi đấu thực tế trực tiếp lên ứng dụng di động SABO Arena.",
      actionText: "Xem ca dự án SABO Billiards →",
      actionLink: "#work",
    },
    {
      id: "ai",
      label: "🤖 Ứng dụng AI & Tự động hóa",
      question: "Diễm áp dụng AI vào công việc thực tế như thế nào?",
      answer:
        "Diễm xây dựng các thư viện prompt chuẩn hóa cho nghiệp vụ kinh doanh, thử nghiệm tác tử tự chủ (Manus AI), và ứng dụng mô hình video tạo sinh (Higgsfield, Kling) kết hợp Google Sheets Scripts để loại bỏ các thao tác lặp lại thủ công.",
      actionText: "Xem Phòng thử nghiệm AI →",
      actionLink: "#desk",
    },
    {
      id: "design",
      label: "🎨 Thiết kế Poster & Ấn phẩm in",
      question: "Phong cách và tiêu chuẩn thiết kế ấn phẩm của Diễm ra sao?",
      answer:
        "Diễm chuyên thiết kế poster sự kiện thể thao, backdrop và standee chuẩn in ấn khổ lớn (300 DPI, hệ màu CMYK), kiểm duyệt test proof trực tiếp tại xưởng in để đảm bảo màu sắc sắc nét và độ tương phản cao.",
      actionText: "Xem dự án SABO Design →",
      actionLink: "#work",
    },
    {
      id: "contact",
      label: "📅 Đặt lịch trao đổi / Hợp tác",
      question: "Tôi muốn trao đổi công việc hoặc hợp tác dự án với Diễm?",
      answer:
        "Rất sẵn lòng! Bạn có thể gửi email trực tiếp tới ngocdiem1112@gmail.com hoặc điền form liên hệ nhanh ở cuối trang để Diễm phản hồi trong vòng 24 giờ làm việc.",
      actionText: "Điền form liên hệ ngay →",
      actionLink: "#contact",
    },
  ];

  const handleSelectPrompt = (prompt: QuickPrompt) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: prompt.question },
      {
        sender: "bot",
        text: prompt.answer,
        actionText: prompt.actionText,
        actionLink: prompt.actionLink,
      },
    ]);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-gradient-to-r from-[#071A3D] via-[#0A2463] to-[#2563FF] border-2 border-[#35D9FF]/60 text-white shadow-[0_10px_35px_rgba(37,99,255,0.45)] hover:shadow-[0_15px_45px_rgba(53,217,255,0.6)] hover:scale-105 active:scale-95 transition-all cursor-pointer backdrop-blur-xl"
          aria-label="Mở trợ lý trao đổi nhanh"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#35D9FF] animate-ping" />
          <Bot className="w-4 h-4 text-[#35D9FF]" />
          <span className="text-xs font-mono-code font-bold tracking-wide">
            HỎI NHANH VỀ DIỄM
          </span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-[#35D9FF]/20 text-[#35D9FF] text-[9px] font-pixel">
            AI_LIVE
          </span>
        </button>
      )}

      {/* Expanded Interactive Chat Modal */}
      {isOpen && (
        <div className="w-[340px] sm:w-[400px] h-[520px] max-h-[85vh] rounded-3xl bg-[#071A3D]/95 border-2 border-[#35D9FF]/50 shadow-[0_25px_80px_rgba(0,0,0,0.9)] backdrop-blur-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="px-5 py-3.5 bg-[#0A2463]/80 border-b border-[#35D9FF]/25 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-xl bg-[#2563FF]/30 border border-[#35D9FF]/40">
                <Bot className="w-4 h-4 text-[#35D9FF]" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-xs">
                  DIỄM ASSISTANT
                </div>
                <div className="text-[10px] font-mono-code text-[#35D9FF] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Sẵn sàng hỗ trợ
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-xl bg-[#050816]/60 border border-[#35D9FF]/30 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Đóng trợ lý"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 custom-scrollbar text-xs font-heading">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  m.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[88%] leading-relaxed ${
                    m.sender === "user"
                      ? "bg-[#2563FF] text-white rounded-tr-none shadow-md font-medium"
                      : "bg-[#050816]/80 border border-[#35D9FF]/25 text-slate-200 rounded-tl-none shadow-sm"
                  }`}
                >
                  {m.text}

                  {m.actionText && m.actionLink && (
                    <div className="mt-2.5 pt-2 border-t border-[#35D9FF]/20">
                      <a
                        href={m.actionLink}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono-code text-[#35D9FF] hover:underline font-bold"
                      >
                        <span>{m.actionText}</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Question Chips */}
          <div className="p-3 border-t border-[#35D9FF]/20 bg-[#050816]/70 space-y-1.5">
            <div className="text-[9px] font-mono-code text-[#35D9FF] uppercase tracking-wider px-1">
              GỢI Ý CÂU HỎI NHANH:
            </div>
            <div className="grid grid-cols-1 gap-1.5 max-h-[140px] overflow-y-auto custom-scrollbar">
              {quickPrompts.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleSelectPrompt(p)}
                  className="w-full text-left p-2 rounded-xl bg-[#071A3D]/70 hover:bg-[#0A2463] border border-[#35D9FF]/20 text-[11px] text-slate-200 transition-all flex items-center justify-between cursor-pointer"
                >
                  <span className="truncate">{p.label}</span>
                  <ArrowRight className="w-3 h-3 text-[#35D9FF] shrink-0 ml-1" />
                </button>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
