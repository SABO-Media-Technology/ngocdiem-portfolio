import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DichVu from "@/components/DichVu";
import DuAn from "@/components/DuAn";
import VeToi from "@/components/VeToi";
import LienHe from "@/components/LienHe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#040816] text-[#F5FAFF] selection:bg-[#2563FF]/35 selection:text-cyan-200">
      {/* Retro-Futuristic Isometric Coordinate Grid */}
      <div className="fixed inset-0 retro-grid pointer-events-none -z-10" />

      {/* Subtle Digital Screen Texture */}
      <div className="fixed inset-0 digital-noise opacity-40 pointer-events-none -z-10" />

      {/* Floating Single-Page Anchor Navigation */}
      <Navbar />

      {/* Main Single-Page Content Stream */}
      <main className="flex-1 w-full space-y-6">
        {/* 1. Hero: Centerpiece Port[folio] + Authentic Photo + Identity */}
        <Hero />

        {/* 2. Dịch vụ thực chiến: Poster 300 DPI, Video AI, Web & App, Vận hành */}
        <DichVu />

        {/* 3. Sản phẩm & Dự án mẫu thực tế (Có bộ lọc nhanh) */}
        <DuAn />

        {/* 4. Về tôi: Cử nhân SGU 2025, Tôn chỉ & 3 Nguyên tắc làm việc */}
        <VeToi />

        {/* 5. Điểm kết nối: Zalo, Email, Form gửi yêu cầu dự án trực tiếp */}
        <LienHe />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
