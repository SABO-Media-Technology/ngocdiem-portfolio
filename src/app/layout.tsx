import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Silkscreen } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const silkscreen = Silkscreen({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Võ Ngọc Diễm — Business Operations × Digital × AI",
  description:
    "Portfolio of Võ Ngọc Diễm: Business Operations, Digital Solutions, AI Workflows & Creative Design. “I make things work. Then I make them better.”",
  authors: [{ name: "Võ Ngọc Diễm" }],
  keywords: [
    "Võ Ngọc Diễm",
    "Business Operations",
    "Digital",
    "AI",
    "Creative",
    "Finance & Banking",
    "SABO Arena",
    "SABO Media",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${silkscreen.variable} dark scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050816] text-[#F5FAFF] font-heading selection:bg-blue-600/35 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
