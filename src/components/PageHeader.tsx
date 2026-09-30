"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  badge: string;
  title: string;
  highlightText?: string;
  subtitle: string;
}

export default function PageHeader({
  badge,
  title,
  highlightText,
  subtitle,
}: PageHeaderProps) {
  return (
    <div className="relative pt-28 sm:pt-36 pb-10 sm:pb-14 border-b border-[#35D9FF]/15">
      {/* Background Glow */}
      <div className="volumetric-glow -top-20 -left-20 w-[450px] h-[450px] bg-[#2563FF]/20" />
      <div className="volumetric-glow top-1/2 right-0 w-[400px] h-[400px] bg-[#35D9FF]/15" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 space-y-4">
        {/* Breadcrumb & Badge */}
        <div className="flex items-center gap-3 text-xs font-mono-code text-[#35D9FF]">
          <Link
            href="/"
            className="flex items-center gap-1 text-[#94A3B8] hover:text-[#35D9FF] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>TRANG CHỦ</span>
          </Link>
          <span className="text-[#35D9FF]/40">/</span>
          <span className="font-pixel text-[10px]">{badge}</span>
        </div>

        {/* Big Title */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
          {title}{" "}
          {highlightText && <span className="text-chrome">{highlightText}</span>}
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-base sm:text-lg text-[#94A3B8] font-heading leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
