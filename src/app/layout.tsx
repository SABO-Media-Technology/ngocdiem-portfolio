import type { Metadata } from "next";
import {
  Unbounded,
  Urbanist,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
  Silkscreen,
} from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
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

const silkscreen = Silkscreen({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Võ Ngọc Diễm — Vận Hành Doanh Nghiệp × Kỹ Thuật Số × Trí Tuệ Nhân Tạo",
  description:
    "Hồ sơ năng lực cá nhân của Võ Ngọc Diễm: Vận hành doanh nghiệp, giải pháp số, quy trình AI và thiết kế sáng tạo. “Tôi làm cho mọi thứ vận hành. Sau đó, tôi làm cho chúng tốt hơn.”",
  authors: [{ name: "Võ Ngọc Diễm" }],
  keywords: [
    "Võ Ngọc Diễm",
    "Vận hành doanh nghiệp",
    "Kỹ thuật số",
    "Trí tuệ nhân tạo",
    "AI Workflows",
    "Thiết kế sáng tạo",
    "Tài chính ngân hàng",
    "SABO Arena",
    "SABO Media",
  ],
  openGraph: {
    title: "Võ Ngọc Diễm — Vận Hành Doanh Nghiệp × Kỹ Thuật Số × AI",
    description:
      "Tư duy vận hành. Định hướng số hóa. Luôn luôn cải tiến. Hồ sơ năng lực thực chiến của Võ Ngọc Diễm.",
    url: "https://diem.saboarena.com",
    siteName: "Võ Ngọc Diễm Portfolio",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Võ Ngọc Diễm",
    alternateName: "Ngọc Diễm",
    description: "Business Operations & Digital/AI Specialist — SABO Ecosystem",
    url: "https://diem.saboarena.com",
    jobTitle: "Operations Specialist",
    email: "mailto:ngocdiem1112@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "TP Hồ Chí Minh",
      addressCountry: "VN",
    },
    sameAs: [
      "https://facebook.com/vongocdiem",
      "https://linkedin.com/in/vongocdiem",
    ],
    worksFor: {
      "@type": "Organization",
      name: "SABO M&T",
      url: "https://sabo.com.vn",
    },
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Võ Ngọc Diễm — Personal Portfolio",
    url: "https://diem.saboarena.com",
    description: "Hồ sơ năng lực thực chiến: Vận hành, Digital, AI & Creative",
    inLanguage: ["vi", "en"],
  };

  return (
    <html
      lang="vi"
      className={`${unbounded.variable} ${urbanist.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} ${silkscreen.variable} dark scroll-smooth h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#050816] text-[#F5FAFF] font-sans selection:bg-blue-600/35 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
