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
        <div className="relative z-10">{children}</div>

        <footer className="relative z-10 mt-20 border-t border-void-border/70 bg-void-card/85 backdrop-blur-xl py-10 text-center text-xs text-star-soft">
          <div className="max-w-7xl mx-auto px-4 space-y-2">
            <p className="font-semibold text-star text-sm">
              Hệ thống Chinh phục Toán 10 — Trường THPT Na Rì, tỉnh Thái Nguyên
            </p>
            <p className="text-star-soft">
              Bám sát chương trình SGK Toán 10 (Bộ sách Kết nối tri thức với cuộc sống) & Định dạng câu hỏi cấu trúc mới của Bộ GD&ĐT
            </p>
            <p className="text-star-mute text-[11px] pt-2">
              © 2026 THPT Na Rì. Không gian tự học Toán học số thế hệ mới tích hợp KaTeX và tự động lưu tiến độ.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
