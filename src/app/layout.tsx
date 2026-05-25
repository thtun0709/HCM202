import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Từ Tư Tưởng HCM về Xây Dựng Đảng đến Bài Học Xây Dựng Đội Ngũ Nòng Cốt | HCM202",
  description:
    "Từ quan niệm của Hồ Chí Minh về xây dựng Đảng đến bài học xây dựng đội ngũ nòng cốt trong doanh nghiệp/startup đối với sinh viên khi bước vào môi trường làm việc.",
  keywords:
    "Hồ Chí Minh, xây dựng Đảng, đội ngũ nòng cốt, startup, sinh viên, tư tưởng HCM, lãnh đạo",
  openGraph: {
    title: "Từ Tư Tưởng HCM về Xây Dựng Đảng đến Bài Học Xây Dựng Đội Ngũ Nòng Cốt",
    description:
      "Khám phá triết lý xây dựng tổ chức theo tư tưởng Hồ Chí Minh và ứng dụng trong thực tiễn startup hiện đại.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
