"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PageNavigationProps {
  prevHref?: string;
  prevLabel?: string;
  nextHref?: string;
  nextLabel?: string;
}

export default function PageNavigation({
  prevHref,
  prevLabel,
  nextHref,
  nextLabel,
}: PageNavigationProps) {
  return (
    <div className="pt-12 sm:pt-16 pb-8 border-t border-[#35D9FF]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Prev link */}
        {prevHref && prevLabel ? (
          <Link
            href={prevHref}
            className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-2.5 px-5 py-3 rounded-xl bg-[#071A3D]/70 border border-[#35D9FF]/30 text-xs font-mono-code text-slate-300 hover:text-white hover:border-[#35D9FF] hover:bg-[#0A2463] transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-[#35D9FF]" />
            <span>{prevLabel}</span>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}

        {/* Next link */}
        {nextHref && nextLabel ? (
          <Link
            href={nextHref}
            className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-end gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-[#2563FF] to-[#35D9FF] text-white text-xs font-mono-code font-bold uppercase hover:opacity-95 shadow-lg shadow-[#2563FF]/30 transition-all hover:scale-105 active:scale-95"
          >
            <span>{nextLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}
      </div>
    </div>
  );
}
