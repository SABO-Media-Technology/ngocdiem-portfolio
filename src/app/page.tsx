import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomePortalGrid from "@/components/HomePortalGrid";
import Philosophy from "@/components/Philosophy";
import HomeContactCTA from "@/components/HomeContactCTA";
import Footer from "@/components/Footer";
import QuickAssistant from "@/components/QuickAssistant";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#050816] text-[#F5FAFF] selection:bg-[#2563FF]/35 selection:text-cyan-200">
      {/* Retro-Futuristic Isometric Coordinate Grid */}
      <div className="fixed inset-0 retro-grid pointer-events-none -z-10" />

      {/* Subtle Digital Screen Texture */}
      <div className="fixed inset-0 digital-noise opacity-40 pointer-events-none -z-10" />

      {/* Floating Navigation */}
      <Navbar />

      {/* Main Spatial Environment */}
      <main className="flex-1 w-full">
        {/* Full-bleed 3D Hero */}
        <Hero />

        {/* 4 Portals to Detailed Pages */}
        <HomePortalGrid />

        {/* Compact Work Philosophy */}
        <Philosophy />

        {/* Quick Contact CTA */}
        <HomeContactCTA />
      </main>

      {/* Quick AI Assistant (Inspired by longsang.sabo.com.vn) */}
      <QuickAssistant />

      {/* Footer */}
      <Footer />
    </div>
  );
}
