"use client";

import {
  useRef,
  useEffect,
  useState,
  createContext,
  useContext,
  useCallback,
  ReactNode,
} from "react";

// ─── Context ───────────────────────────────────────────────────
interface SnapContextType {
  activeIndex: number;
  scrollTo: (index: number) => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const SnapContext = createContext<SnapContextType>({
  activeIndex: 0,
  scrollTo: () => {},
  containerRef: { current: null },
});

export function useSnapContext() {
  return useContext(SnapContext);
}

// ─── Section Labels ────────────────────────────────────────────
export const SNAP_SECTIONS = [
  { id: "hero",        label: "HERO" },
  { id: "about",       label: "ABOUT" },
  { id: "services",    label: "SERVICES" },
  { id: "work",        label: "WORK" },
  { id: "experience",  label: "EXPERIENCE" },
  { id: "how",         label: "PROCESS" },
  { id: "philosophy",  label: "PHILOSOPHY" },
  { id: "contact",     label: "CONTACT" },
];

// ─── ScrollSnapContainer ───────────────────────────────────────
export function ScrollSnapContainer({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Detect active section via IntersectionObserver on the container
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = SNAP_SECTIONS.map(({ id }) =>
      document.getElementById(id)
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
            const idx = sections.indexOf(entry.target as HTMLElement);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      {
        root: container,
        threshold: 0.45,
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((index: number) => {
    const id = SNAP_SECTIONS[index]?.id;
    if (!id) return;
    const el = document.getElementById(id);
    if (!el || !containerRef.current) return;
    containerRef.current.scrollTo({
      top: el.offsetTop,
      behavior: "smooth",
    });
  }, []);

  return (
    <SnapContext.Provider value={{ activeIndex, scrollTo, containerRef }}>
      {/* Outer wrapper fills viewport */}
      <div
        ref={containerRef}
        className="snap-container"
        style={{ height: "100vh" }}
      >
        {children}
      </div>
    </SnapContext.Provider>
  );
}

// ─── PageIndicator ─────────────────────────────────────────────
export function PageIndicator() {
  const { activeIndex, scrollTo } = useSnapContext();

  return (
    <nav aria-label="Page navigation" className="page-indicator hidden sm:flex">
      {SNAP_SECTIONS.map((section, i) => (
        <button
          key={section.id}
          onClick={() => scrollTo(i)}
          aria-label={`Go to ${section.label}`}
          title={section.label}
          className={`page-dot transition-all ${i === activeIndex ? "active" : ""}`}
        />
      ))}
    </nav>
  );
}
