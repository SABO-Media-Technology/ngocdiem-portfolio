"use client";

import { useState } from "react";
import { DIGITAL_DESK_FOLDERS, DeskFolder, DeskFile } from "@/data/portfolioData";
import { Folder, FileText, Terminal, HardDrive, Cpu, Shield, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";

export default function DigitalDesk() {
  const [activeFolderId, setActiveFolderId] = useState(DIGITAL_DESK_FOLDERS[0].id);
  const [selectedFile, setSelectedFile] = useState<DeskFile>(DIGITAL_DESK_FOLDERS[0].files[0]);

  const activeFolder =
    DIGITAL_DESK_FOLDERS.find((f) => f.id === activeFolderId) ||
    DIGITAL_DESK_FOLDERS[0];

  const handleFolderSelect = (folder: DeskFolder) => {
    setActiveFolderId(folder.id);
    setSelectedFile(folder.files[0]);
  };

  return (
    <section id="desk" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="volumetric-glow top-1/3 -left-32 w-[520px] h-[520px] bg-[#2563FF]/15" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        
        {/* SECTION HEADER */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs font-mono-code text-[#35D9FF]">
            <span className="font-pixel text-[10px]">SECTION // 04</span>
            <span className="w-8 h-[1px] bg-[#35D9FF]/40" />
            <span>INTERACTIVE WORKSPACE</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
                MY DIGITAL <span className="text-chrome">DESK</span>
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#94A3B8] font-heading">
                Step inside a futuristic desktop environment to explore project files, SOP blueprints, and AI prompts.
              </p>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071A3D]/80 border border-[#35D9FF]/30 text-xs font-mono-code text-[#35D9FF] self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-[#35D9FF] animate-ping" />
              <span>FILESYSTEM ACTIVE</span>
            </div>
          </div>
        </div>

        {/* FUTURISTIC DESKTOP ENVIRONMENT CASING */}
        <div className="rounded-3xl border-2 border-[#35D9FF]/35 bg-[#050816]/90 shadow-[0_20px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden relative">
          
          {/* Top Window Bar with Retro Window Controls */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#071A3D]/90 border-b border-[#35D9FF]/20 text-xs font-mono-code">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 border border-green-400" />
              </div>
              <span className="font-pixel text-[10px] text-[#35D9FF] ml-2 hidden sm:inline">
                DIỄM_OS 2.6 // VIRTUAL DESKTOP
              </span>
            </div>

            <div className="flex items-center gap-4 text-[#94A3B8] text-[11px]">
              <span className="hidden md:inline">ROOT: /USER/NGOCDIEM/DESK</span>
              <span className="text-[#35D9FF]">STATUS: ONLINE</span>
            </div>
          </div>

          {/* Desktop Body: 3-column / 2-column layout */}
          <div className="grid lg:grid-cols-12 min-h-[500px]">
            
            {/* COLUMN 1: FOLDER DIRECTORY (Left Side) */}
            <div className="lg:col-span-4 p-4 sm:p-5 border-b lg:border-b-0 lg:border-r border-[#35D9FF]/20 bg-[#071A3D]/40 space-y-3">
              <div className="text-[10px] font-mono-code text-[#35D9FF] uppercase tracking-wider px-2">
                // SYSTEM FOLDERS ({DIGITAL_DESK_FOLDERS.length})
              </div>

              <div className="space-y-1.5">
                {DIGITAL_DESK_FOLDERS.map((folder) => {
                  const isSelected = folder.id === activeFolderId;

                  return (
                    <button
                      key={folder.id}
                      type="button"
                      onClick={() => handleFolderSelect(folder)}
                      className={`w-full text-left p-3 rounded-2xl flex items-center justify-between transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#2563FF]/30 border border-[#35D9FF] shadow-[0_0_20px_rgba(53,217,255,0.25)] translate-x-1"
                          : "bg-[#050816]/40 hover:bg-[#071A3D]/60 border border-transparent hover:border-[#35D9FF]/30 text-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-xl ${
                            isSelected
                              ? "bg-[#35D9FF] text-[#050816]"
                              : "bg-[#0A2463] text-[#35D9FF]"
                          }`}
                        >
                          <Folder className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-mono-code font-bold text-xs text-white">
                            {folder.slug}
                          </div>
                          <div className="text-[10px] text-[#94A3B8] font-heading">
                            {folder.name}
                          </div>
                        </div>
                      </div>

                      <span className="font-pixel text-[8px] px-2 py-0.5 rounded bg-[#0A2463]/80 border border-[#35D9FF]/20 text-[#35D9FF]">
                        {folder.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* COLUMN 2 & 3: ACTIVE FOLDER FILE LIST & FILE INSPECTOR */}
            <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              
              {/* Folder Header Info */}
              <div className="space-y-2 pb-5 border-b border-[#35D9FF]/20">
                <div className="flex items-center justify-between">
                  <span className="font-pixel text-xs text-[#35D9FF]">
                    LOCATION: {activeFolder.slug}
                  </span>
                  <span className="text-xs font-mono-code text-[#94A3B8]">
                    {activeFolder.files.length} ITEMS
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  {activeFolder.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-heading">
                  {activeFolder.description}
                </p>
              </div>

              {/* File Listing Table */}
              <div className="space-y-2.5 flex-1">
                <div className="text-[10px] font-mono-code text-[#35D9FF] uppercase tracking-wider">
                  FILE SYSTEM ENTRIES:
                </div>

                <div className="space-y-2">
                  {activeFolder.files.map((file, idx) => {
                    const isFileSelected = selectedFile?.name === file.name;

                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedFile(file)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                          isFileSelected
                            ? "bg-[#2563FF]/25 border-[#35D9FF] shadow-[0_0_15px_rgba(53,217,255,0.2)]"
                            : "bg-[#071A3D]/40 hover:bg-[#0A2463]/50 border-[#35D9FF]/15"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-[#050816] text-[#35D9FF]">
                            <FileText className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-mono-code font-bold text-xs text-white">
                              {file.name}
                            </div>
                            <div className="text-[11px] text-[#94A3B8] font-heading">
                              {file.type}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-[11px] font-mono-code self-end sm:self-center">
                          <span className="text-[#94A3B8]">{file.size}</span>
                          <span className="px-2 py-0.5 rounded bg-[#0A2463] text-[#35D9FF] border border-[#35D9FF]/30 text-[9px] font-pixel">
                            {file.status || "OK"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom File Inspector Card */}
              {selectedFile && (
                <div className="p-4 sm:p-5 rounded-2xl bg-[#071A3D]/80 border border-[#35D9FF]/35 space-y-2.5">
                  <div className="flex items-center justify-between text-[10px] font-mono-code text-[#35D9FF]">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5" />
                      INSPECTOR // {selectedFile.name}
                    </span>
                    <span>SIZE: {selectedFile.size}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 font-heading leading-relaxed">
                    {selectedFile.desc}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {selectedFile.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-[#050816]/70 border border-[#35D9FF]/20 text-[10px] font-mono-code text-[#35D9FF]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
