"use client";

import { useRef, useEffect, ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  variant?: "up" | "left" | "right" | "scale";
  delay?: number; // ms
  /** pass scroll container ref for IntersectionObserver root */
  rootRef?: React.RefObject<HTMLElement | null>;
}

/**
 * Wraps children in a 3D entrance animation that fires once when
 * the element enters the viewport (or snap container).
 */
export default function SectionReveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  rootRef,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const variantClass = {
    up: "reveal-init",
    left: "reveal-left",
    right: "reveal-right",
    scale: "reveal-scale",
  }[variant];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Apply initial hidden state
    el.classList.add(variantClass);

    // Small delay so CSS is applied before observer fires
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Stagger via inline style delay
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add("revealed");
            observer.unobserve(el);
          }
        },
        {
          root: rootRef?.current ?? null,
          threshold: 0.12,
          rootMargin: "0px 0px -40px 0px",
        }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className={`perspective-container ${className}`}>
      {children}
    </div>
  );
}
