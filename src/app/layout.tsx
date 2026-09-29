import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Võ Ngọc Diễm — Thiết Kế Poster, Video AI, Web & App",
  description:
    "Portfolio sáng tạo của Võ Ngọc Diễm: Thiết kế poster, sáng tạo video AI, lập trình website & mobile app. Trẻ trung, linh hoạt, đúng hạn.",
  authors: [{ name: "Võ Ngọc Diễm" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${plusJakarta.variable} ${jetbrainsMono.variable} dark scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#070d1e] text-slate-100 font-sans selection:bg-blue-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
