import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import WhatIDo from "@/components/WhatIDo";
import SelectedWork from "@/components/SelectedWork";
import DigitalDesk from "@/components/DigitalDesk";
import Toolbox from "@/components/Toolbox";
import HowIWork from "@/components/HowIWork";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
      <main className="flex-1 w-full space-y-16 sm:space-y-24">
        <Hero />
        <Introduction />
        <WhatIDo />
        <SelectedWork />
        <DigitalDesk />
        <Toolbox />
        <HowIWork />
        <Experience />
        <About />
        <Philosophy />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
