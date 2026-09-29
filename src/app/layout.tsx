import type { Metadata } from "next";
import { Playfair_Display, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Võ Ngọc Diễm — Portfolio cá nhân · Mobile & Full-stack Engineer",
  description:
    "Portfolio của Võ Ngọc Diễm tại TP. Hồ Chí Minh: các sản phẩm đã ship (SABO ARENA, SABOHUB, Martial Arts Club, TaskCall). Nhận dự án · Tuyển dụng · Cộng tác chuyên môn.",
  keywords: [
    "Võ Ngọc Diễm",
    "Ngọc Diễm portfolio",
    "Flutter developer",
    "Mobile engineer vietnam",
    "SABO Arena",
    "SABOHUB",
    "Full-stack engineer",
    "Supabase RLS",
    "Ho Chi Minh City",
  ],
  authors: [{ name: "Võ Ngọc Diễm" }],
  openGraph: {
    title: "Võ Ngọc Diễm — Mobile & Full-stack Engineer · Shipped Products",
    description: "Sản phẩm thực tế đã ship · Nền tảng Tài chính & Công nghệ · Liên hệ hợp tác.",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${jetbrainsMono.variable} ${inter.variable} dark scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#040006] text-zinc-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
        {children}
      </body>
    </html>
  );
}
