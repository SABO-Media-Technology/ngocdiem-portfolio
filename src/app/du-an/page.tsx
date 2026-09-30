import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import SelectedWork from "@/components/SelectedWork";
import PageNavigation from "@/components/PageNavigation";
import Footer from "@/components/Footer";
import QuickAssistant from "@/components/QuickAssistant";

export const metadata = {
  title: "Dự Án Tiêu Biểu — Võ Ngọc Diễm",
  description:
    "Hồ sơ các dự án thực tế của Võ Ngọc Diễm: SABO Billiards, SABO Media & Technology, Ứng dụng AI văn phòng và Thiết kế ấn phẩm SABO Design.",
};

export default function DuAnPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#050816] text-[#F5FAFF] selection:bg-[#2563FF]/35 selection:text-cyan-200">
      <div className="fixed inset-0 retro-grid pointer-events-none -z-10" />
      <div className="fixed inset-0 digital-noise opacity-40 pointer-events-none -z-10" />

      <Navbar />

      <main className="flex-1 w-full space-y-12 sm:space-y-16">
        <PageHeader
          badge="HỒ SƠ THỰC CHIẾN"
          title="DỰ ÁN"
          highlightText="TIÊU BIỂU"
          subtitle="Các dự án và công việc thực tế được ghi nhận rõ ràng: Thách thức gặp phải, cách tiếp cận, đầu việc cụ thể và kết quả đạt được."
        />

        {/* Danh Sách 4 Dự Án & Case Study Modal */}
        <SelectedWork />

        <PageNavigation
          prevHref="/nang-luc"
          prevLabel="← Năng Lực Chuyên Môn"
          nextHref="/kinh-nghiem"
          nextLabel="Xem Kinh Nghiệm Làm Việc →"
        />
      </main>

      <QuickAssistant />
      <Footer />
    </div>
  );
}
