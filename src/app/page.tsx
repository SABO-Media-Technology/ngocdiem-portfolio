import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#070d1e] text-slate-100 selection:bg-blue-500/30 selection:text-cyan-200">
      {/* Luminous Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="ambient-glow top-[-100px] left-[-100px] w-[500px] h-[500px] bg-blue-600/18"></div>
        <div className="ambient-glow top-[30%] right-[-150px] w-[550px] h-[550px] bg-cyan-500/15"></div>
        <div className="ambient-glow bottom-[15%] left-[20%] w-[450px] h-[450px] bg-indigo-600/15"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(6,182,212,0.08),rgba(0,0,0,0))]"></div>
      </div>

      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 space-y-24 py-8 sm:py-14">
        <Hero />
        <Services />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
