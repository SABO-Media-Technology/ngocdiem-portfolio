import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Experience from "@/components/Experience";
import DigitalDesk from "@/components/DigitalDesk";
import PageNavigation from "@/components/PageNavigation";
import Footer from "@/components/Footer";
import QuickAssistant from "@/components/QuickAssistant";

export const metadata = {
  title: "Kinh Nghiệm & Bàn Làm Việc Số — Võ Ngọc Diễm",
  description:
    "Lộ trình kinh nghiệm làm việc của Võ Ngọc Diễm từ Ngân hàng Quốc tế VIB đến SABO Media & Technology, cùng kho tài liệu quy chuẩn vận hành.",
};

export default function KinhNghiemPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#050816] text-[#F5FAFF] selection:bg-[#2563FF]/35 selection:text-cyan-200">
      <div className="fixed inset-0 retro-grid pointer-events-none -z-10" />
      <div className="fixed inset-0 digital-noise opacity-40 pointer-events-none -z-10" />

      <Navbar />

      <main className="flex-1 w-full space-y-12 sm:space-y-16">
        <PageHeader
          badge="LỘ TRÌNH NGHỀ NGHIỆP"
          title="KINH NGHIỆM &"
          highlightText="BÀN LÀM VIỆC SỐ"
          subtitle="Dòng thời gian quá trình làm việc thực tế, kết hợp không gian lưu trữ và quản lý tài liệu quy chuẩn vận hành hàng ngày."
        />

        {/* Lộ Trình Thời Gian */}
        <Experience />

        {/* Bàn Làm Việc Số - 6 Thư Mục */}
        <DigitalDesk />

        <PageNavigation
          prevHref="/du-an"
          prevLabel="← Dự Án Tiêu Biểu"
          nextHref="/lien-he"
          nextLabel="Liên Hệ Hợp Tác →"
        />
      </main>

      <QuickAssistant />
      <Footer />
    </div>
  );
}
