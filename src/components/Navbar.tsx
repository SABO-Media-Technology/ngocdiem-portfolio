"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "WORK",       href: "#work" },
  { label: "SERVICES",   href: "#services" },
  { label: "ABOUT",      href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT",    href: "#contact" },
];

const SECTION_IDS = ["hero", "work", "services", "about", "experience", "contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [scrolled, setScrolled]           = useState<boolean>(false);
  const [menuOpen, setMenuOpen]           = useState<boolean>(false);

  /* ── Active-section detection ─────────────────────────────────────── */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const callback = (sectionId: string) => (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(sectionId);
        }
      });
    };

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(callback(id), {
        root: null,
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      });
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Scroll opacity ───────────────────────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Lock body scroll when drawer is open ─────────────────────────── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    // Small delay so drawer animation starts before scroll
    setTimeout(() => {
      const id = href.replace("#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  /* ── Pill opacity class ───────────────────────────────────────────── */
  const pillBg = scrolled
    ? "bg-[#071A3D]/90 shadow-[0_4px_32px_rgba(53,217,255,0.10)]"
    : "bg-[#071A3D]/60";

  return (
    <>
      {/* ── Fixed pill navbar ─────────────────────────────────────────── */}
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className={`
            pointer-events-auto
            flex items-center justify-between gap-6
            w-full max-w-5xl
            px-5 py-3
            rounded-full
            border border-[#35D9FF]/25
            backdrop-blur-xl
            transition-all duration-500
            ${pillBg}
          `}
        >
          {/* Logo */}
          <Link
            href="#hero"
            onClick={() => handleNavClick("#hero")}
            className="font-display text-base font-extrabold tracking-widest text-[#F5FAFF] hover:text-[#35D9FF] transition-colors duration-200 shrink-0 select-none"
          >
            DIỄM<span className="text-[#35D9FF] align-super text-[10px] ml-[1px]">®</span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeSection === href.replace("#", "");
              return (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(href);
                    }}
                    className={`
                      relative font-mono-code text-xs tracking-widest transition-colors duration-200
                      ${isActive ? "text-[#35D9FF]" : "text-slate-300 hover:text-[#F5FAFF]"}
                    `}
                  >
                    {label}
                    {/* Active underline */}
                    <span
                      className={`
                        absolute -bottom-0.5 left-0 h-px bg-[#35D9FF]
                        transition-all duration-300
                        ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}
                      `}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA pill */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="hidden md:flex items-center gap-1 font-mono-code text-xs tracking-widest text-[#35D9FF] border border-[#35D9FF]/60 rounded-full px-4 py-1.5 hover:bg-[#35D9FF]/10 hover:border-[#35D9FF] transition-all duration-200 shrink-0"
          >
            LIÊN HỆ
            <ArrowUpRight size={12} strokeWidth={2.5} />
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 text-[#F5FAFF] hover:text-[#35D9FF] transition-colors duration-200"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* ── Mobile drawer ─────────────────────────────────────────────── */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#050816]/80 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`
            absolute top-0 right-0 h-full w-72
            bg-[#071A3D]/95 backdrop-blur-xl
            border-l border-[#35D9FF]/20
            flex flex-col
            transition-transform duration-300 ease-out
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 pt-8 pb-6 border-b border-[#35D9FF]/10">
            <span className="font-display text-base font-extrabold tracking-widest text-[#F5FAFF]">
              DIỄM<span className="text-[#35D9FF] align-super text-[10px] ml-[1px]">®</span>
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-slate-400 hover:text-[#35D9FF] transition-colors duration-200"
              aria-label="Đóng menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Drawer links */}
          <ul className="flex flex-col gap-1 px-4 py-6 flex-1">
            {NAV_LINKS.map(({ label, href }, i) => {
              const isActive = activeSection === href.replace("#", "");
              return (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(href);
                    }}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-xl
                      font-mono-code text-sm tracking-widest
                      transition-all duration-200
                      ${isActive
                        ? "text-[#35D9FF] bg-[#35D9FF]/10 border border-[#35D9FF]/30"
                        : "text-slate-300 hover:text-[#F5FAFF] hover:bg-white/5 border border-transparent"
                      }
                    `}
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? "bg-[#35D9FF]" : "bg-slate-600"}`}
                    />
                    {label}
                    {isActive && (
                      <ArrowUpRight size={12} className="ml-auto text-[#35D9FF]" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Drawer CTA */}
          <div className="px-6 pb-10">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="flex items-center justify-center gap-2 w-full font-mono-code text-xs tracking-widest text-[#050816] bg-[#35D9FF] rounded-full px-4 py-3 font-bold hover:opacity-90 transition-opacity duration-200"
            >
              LIÊN HỆ
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
