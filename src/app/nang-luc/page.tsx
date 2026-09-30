import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import WhatIDo from "@/components/WhatIDo";
import Toolbox from "@/components/Toolbox";
import HowIWork from "@/components/HowIWork";
import PageNavigation from "@/components/PageNavigation";
import Footer from "@/components/Footer";
import QuickAssistant from "@/components/QuickAssistant";

export const metadata = {
  title: "Năng Lực & Chuyên Môn — Võ Ngọc Diễm",
  description:
    "Khám phá 4 mảng năng lực thực chiến của Võ Ngọc Diễm: Vận hành CLB & Sự kiện, Hành chính & Tài chính, Thiết kế truyền thông, và Ứng dụng AI.",
};

export default function NangLucPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#050816] text-[#F5FAFF] selection:bg-[#2563FF]/35 selection:text-cyan-200">
      <div className="fixed inset-0 retro-grid pointer-events-none -z-10" />
      <div className="fixed inset-0 digital-noise opacity-40 pointer-events-none -z-10" />

      <Navbar />

      <main className="flex-1 w-full space-y-12 sm:space-y-16">
        <PageHeader
          badge="CHUYÊN MÔN & CÔNG CỤ"
          title="NĂNG LỰC"
          highlightText="THỰC CHIẾN"
          subtitle="Tập trung vào 4 mảng nghiệp vụ cốt lõi: Vận hành cơ sở, quản trị hành chính nhân sự, sản xuất ấn phẩm truyền thông và ứng dụng AI tăng hiệu suất."
        />

        {/* 4 Mảng Năng Lực Trọng Tâm */}
        <WhatIDo />

        {/* Hộp Công Cụ Hàng Ngày */}
        <Toolbox />

        {/* Quy Trình Làm Việc 5 Bước */}
        <HowIWork />

        <PageNavigation
          prevHref="/gioi-thieu"
          prevLabel="← Đôi Nét Về Tôi"
          nextHref="/du-an"
          nextLabel="Xem Dự Án Tiêu Biểu →"
        />
      </main>

      <QuickAssistant />
      <Footer />
    </div>
  );
}
