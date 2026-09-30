"use client";

import { useState } from "react";
import { TOOLBOX_CATEGORIES, ToolCategory } from "@/data/portfolioData";
import { Bot, Palette, Briefcase, Globe, Sparkles, Terminal } from "lucide-react";

export default function Toolbox() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "ai":
        return <Bot className="w-4 h-4 text-[#35D9FF]" />;
      case "creative":
        return <Palette className="w-4 h-4 text-[#35D9FF]" />;
      case "business":
        return <Briefcase className="w-4 h-4 text-[#35D9FF]" />;
      case "digital":
        return <Globe className="w-4 h-4 text-[#35D9FF]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#35D9FF]" />;
    }
  };

  const displayedCategories =
    selectedCategory === "all"
      ? TOOLBOX_CATEGORIES
      : TOOLBOX_CATEGORIES.filter((c) => c.id === selectedCategory);

  return (
    <section id="toolbox" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Volumetric Glow */}
      <div className="volumetric-glow bottom-0 right-10 w-[500px] h-[500px] bg-[#0A2463]/30" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs font-mono-code text-[#35D9FF]">
            <span className="font-pixel text-[10px]">SECTION // 05</span>
            <span className="w-8 h-[1px] bg-[#35D9FF]/40" />
            <span>OPERATIONAL ARSENAL</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
                TOOLS <span className="text-chrome">I WORK WITH</span>
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#94A3B8] font-heading">
                Specialized tooling across artificial intelligence, visual media, business governance, and digital runtimes.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono-code transition-all cursor-pointer ${
                  selectedCategory === "all"
                    ? "bg-[#2563FF] text-white border border-[#35D9FF]"
                    : "bg-[#071A3D]/70 text-[#94A3B8] hover:text-white border border-[#35D9FF]/20"
                }`}
              >
                ALL (4)
              </button>
              {TOOLBOX_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono-code transition-all cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? "bg-[#2563FF] text-white border border-[#35D9FF]"
                      : "bg-[#071A3D]/70 text-[#94A3B8] hover:text-white border border-[#35D9FF]/20"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4 ELEGANT CATEGORY GRIDS (No huge logo wall) */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {displayedCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 sm:p-8 rounded-3xl chrome-glass-card border border-[#35D9FF]/25 hover:border-[#35D9FF]/55 transition-all space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#35D9FF]/20">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#2563FF]/20 border border-[#35D9FF]/30">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                      {category.title}
                    </h3>
                    <p className="text-[11px] font-mono-code text-[#35D9FF]">
                      {category.tagline}
                    </p>
                  </div>
                </div>

                <span className="font-pixel text-[9px] px-2 py-0.5 rounded bg-[#0A2463] text-[#35D9FF] border border-[#35D9FF]/30">
                  {category.items.length} TOOLS
                </span>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.items.map((tool) => (
                  <div
                    key={tool.name}
                    className="group p-3.5 rounded-2xl bg-[#050816]/65 border border-[#35D9FF]/15 hover:border-[#35D9FF]/50 transition-all space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono-code font-bold text-sm text-white group-hover:text-[#35D9FF] transition-colors">
                        {tool.name}
                      </span>
                      <span className="text-[8px] font-pixel px-1.5 py-0.5 rounded bg-[#2563FF]/20 text-[#35D9FF] border border-[#35D9FF]/20">
                        {tool.badge}
                      </span>
                    </div>

                    <div className="text-[10px] text-[#35D9FF]/80 font-mono-code">
                      {tool.role}
                    </div>

                    <p className="text-[11px] text-[#94A3B8] font-heading leading-tight line-clamp-2">
                      {tool.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
