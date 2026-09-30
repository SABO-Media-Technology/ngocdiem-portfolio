import AtmosphericBackground from "@/components/AtmosphericBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import ExperienceAreas from "@/components/ExperienceAreas";
import HowIWork from "@/components/HowIWork";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import QuickAssistant from "@/components/QuickAssistant";
import {
  ScrollSnapContainer,
  PageIndicator,
} from "@/components/ScrollSnap";

export const metadata = {
  title: "Võ Ngọc Diễm — Digital • Creative • Business",
  description:
    "Tôi thiết kế website, xây dựng nội dung và phát triển hình ảnh số cho doanh nghiệp. Digital work, made practical.",
};

export default function Home() {
  return (
    // Outer shell — fixed atmospheric background
    <div className="relative bg-[#050816] text-[#F5FAFF] selection:bg-[#2563FF]/35 selection:text-cyan-200 min-h-screen">
      {/* Dynamic 3D Atmospheric Background Layer */}
      <AtmosphericBackground />

      {/* Navbar stays above snap container */}
      <Navbar />

      {/* Right-side page dot navigator (client component, inside snap context) */}
      <ScrollSnapContainer>
        {/* ── Section 01: Hero ── */}
        <Hero />

        {/* ── Section 02: About ── */}
        <About />

        {/* ── Section 03: Services ── */}
        <Services />

        {/* ── Section 04: Selected Work ── */}
        <SelectedWork />

        {/* ── Section 05: Experience ── */}
        <ExperienceAreas />

        {/* ── Section 06: How I Work ── */}
        <HowIWork />

        {/* ── Section 07: Philosophy ── */}
        <Philosophy />

        {/* ── Section 08: Contact & Footer ── */}
        <div id="contact" className="snap-section bg-[#050816] relative flex flex-col justify-between min-h-screen">
          <Contact />
          <Footer />
        </div>

        {/* Page indicator dots — lives inside snap context */}
        <PageIndicator />
      </ScrollSnapContainer>

      <QuickAssistant />
    </div>
  );
}
