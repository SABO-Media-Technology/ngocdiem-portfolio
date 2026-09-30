import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Introduction from "@/components/Introduction";
import About from "@/components/About";
import PageNavigation from "@/components/PageNavigation";
import Footer from "@/components/Footer";
import QuickAssistant from "@/components/QuickAssistant";

export const metadata = {
  title: "Giới Thiệu — Võ Ngọc Diễm",
  description:
    "Tìm hiểu về Võ Ngọc Diễm: Cử nhân Tài chính – Ngân hàng ĐH Sài Gòn, chuyên viên vận hành, hành chính nhân sự và ứng dụng công nghệ số.",
};

export default function GioiThieuPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#050816] text-[#F5FAFF] selection:bg-[#2563FF]/35 selection:text-cyan-200">
      {/* Retro-Futuristic Grid & Texture */}
      <div className="fixed inset-0 retro-grid pointer-events-none -z-10" />
      <div className="fixed inset-0 digital-noise opacity-40 pointer-events-none -z-10" />

      {/* Floating Navigation */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* Dedicated Page Header */}
        <PageHeader
          badge="HỒ SƠ CÁ NHÂN"
          title="XIN CHÀO, TÔI LÀ"
          highlightText="VÕ NGỌC DIỄM"
          subtitle="Tư duy cẩn trọng từ ngành Tài chính – Ngân hàng kết hợp cùng kinh nghiệm vận hành thực chiến và sự chủ động ứng dụng công nghệ."
        />

        {/* Chân dung & Lời tự bạch */}
        <Introduction />

        {/* Học vấn & Lợi thế liên ngành */}
        <About />

        {/* Điều hướng chân trang */}
        <PageNavigation
          prevHref="/"
          prevLabel="← Về Trang Chủ"
          nextHref="/nang-luc"
          nextLabel="Xem Năng Lực & Chuyên Môn →"
        />
      </main>

      <QuickAssistant />
      <Footer />
    </div>
  );
}
