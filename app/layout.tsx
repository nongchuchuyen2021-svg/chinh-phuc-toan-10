import type { Metadata } from "next";
import { Baloo_2, Inter, IBM_Plex_Mono } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MathCanvas from "@/components/MathCanvas";

const display = Baloo_2({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Chinh Phục Toán 10 — THPT Na Rì (Bộ sách Kết nối tri thức)",
  description:
    "Cổng học tập & ôn luyện Toán 10 trực tuyến (Bộ sách Kết nối tri thức với cuộc sống) của Trường THPT Na Rì, tỉnh Thái Nguyên — Lý thuyết tương tác, trắc nghiệm 4 lựa chọn, đúng/sai chuẩn cấu trúc Bộ GD&ĐT, tự luận, Sổ tay công thức, Cẩm nang Casio 580 và Đề kiểm tra Giữa kỳ/Cuối kỳ theo cấu trúc Tốt nghiệp THPT.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="dark">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body bg-void text-star antialiased selection:bg-cyan/30 selection:text-cyan-glow`}
      >
        <MathCanvas />
        <Navbar />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
