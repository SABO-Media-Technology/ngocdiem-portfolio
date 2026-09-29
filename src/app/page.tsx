import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#040816] text-slate-100 selection:bg-blue-500/30 selection:text-cyan-200">
      {/* Retro-Futuristic Isometric Coordinate Grid */}
      <div className="fixed inset-0 retro-grid pointer-events-none -z-10" />

      {/* Subtle Digital Screen Noise Overlay */}
      <div className="fixed inset-0 digital-noise opacity-40 pointer-events-none -z-10" />

      {/* Header */}
      <Navbar />

      {/* Main Spatial Environment */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 space-y-28 py-6 sm:py-12">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
