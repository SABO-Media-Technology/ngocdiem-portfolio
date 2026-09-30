import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import PageNavigation from "@/components/PageNavigation";
import Footer from "@/components/Footer";
import QuickAssistant from "@/components/QuickAssistant";

export const metadata = {
  title: "Liên Hệ Hợp Tác — Võ Ngọc Diễm",
  description:
    "Kết nối trực tiếp với Võ Ngọc Diễm qua email ngocdiem1112@gmail.com hoặc biểu mẫu tư vấn để trao đổi về vận hành, sự kiện và dự án số.",
};

export default function LienHePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#050816] text-[#F5FAFF] selection:bg-[#2563FF]/35 selection:text-cyan-200">
      <div className="fixed inset-0 retro-grid pointer-events-none -z-10" />
      <div className="fixed inset-0 digital-noise opacity-40 pointer-events-none -z-10" />

      <Navbar />

      <main className="flex-1 w-full space-y-12 sm:space-y-16">
        <PageHeader
          badge="KẾT NỐI TRỰC TIẾP"
          title="LIÊN HỆ &"
          highlightText="HỢP TÁC"
          subtitle="Sẵn sàng trao đổi về các cơ hội hợp tác vận hành, tổ chức giải đấu, công tác hành chính nội bộ hoặc ứng dụng công nghệ tăng năng suất."
        />

        {/* Biểu Mẫu Tư Vấn & Thông Tin Kênh Kết Nối */}
        <Contact />

        <PageNavigation
          prevHref="/kinh-nghiem"
          prevLabel="← Lộ Trình Kinh Nghiệm"
          nextHref="/"
          nextLabel="Quay Về Trang Chủ ⌂"
        />
      </main>

      <QuickAssistant />
      <Footer />
    </div>
  );
}
