import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#040006] text-zinc-100 selection:bg-amber-400/30 selection:text-amber-200">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="ambient-glow top-[-100px] left-[-100px] w-[500px] h-[500px] bg-amber-500/10"></div>
        <div className="ambient-glow top-[30%] right-[-150px] w-[600px] h-[600px] bg-indigo-600/10"></div>
        <div className="ambient-glow bottom-[10%] left-[20%] w-[450px] h-[450px] bg-cyan-600/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(212,175,55,0.06),rgba(0,0,0,0))]"></div>
      </div>

      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 space-y-28 py-8 sm:py-16">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
