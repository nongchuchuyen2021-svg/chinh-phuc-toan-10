import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chinh phục Toán 10 — THPT Na Rì",
  description:
    "Cổng học tập & ôn luyện Toán 10 trực tuyến (Bộ sách Kết nối tri thức với cuộc sống) của Trường THPT Na Rì, tỉnh Thái Nguyên — Lý thuyết tương tác, trắc nghiệm 4 lựa chọn, đúng/sai chuẩn cấu trúc Bộ GD&ĐT, trả lời ngắn, sổ tay công thức và thi thử trực tuyến.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"
          crossOrigin="anonymous"
        ></script>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="font-body text-star antialiased selection:bg-nebula/30">
        <header className="sticky top-0 z-50 glass-bright border-b border-indigo-100/60 transition-all">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-nebula via-indigo-600 to-plasma flex items-center justify-center text-white font-display font-bold text-lg shadow-glow group-hover:scale-105 transition">
                T10
              </div>
              <div>
                <h1 className="font-display font-bold text-slate-900 text-base leading-tight group-hover:text-nebula transition">
                  CHINH PHỤC TOÁN 10
                </h1>
                <p className="text-xs text-nebula font-medium">
                  THPT Na Rì — Kết nối tri thức
                </p>
              </div>
            </Link>

            <nav className="flex items-center gap-2 sm:gap-4 text-sm font-medium">
              <Link
                href="/"
                className="px-3 py-1.5 rounded-lg text-slate-700 hover:text-nebula hover:bg-indigo-50/70 transition"
              >
                Bài học
              </Link>
              <Link
                href="/cong-thuc"
                className="px-3 py-1.5 rounded-lg text-slate-700 hover:text-nebula hover:bg-indigo-50/70 transition"
              >
                Sổ tay công thức
              </Link>
              <Link
                href="/thi-thu"
                className="px-3 py-1.5 rounded-lg text-slate-700 hover:text-nebula hover:bg-indigo-50/70 transition"
              >
                Thi thử
              </Link>
              <span className="hidden md:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-50 text-nebula text-xs font-semibold border border-indigo-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                2026–2027
              </span>
            </nav>
          </div>
        </header>

        <div className="relative z-10">{children}</div>

        <footer className="relative z-10 mt-20 border-t border-slate-200/80 bg-white/70 backdrop-blur-md py-10 text-center text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4 space-y-2">
            <p className="font-semibold text-slate-700 text-sm">
              Hệ thống Chinh phục Toán 10 — Trường THPT Na Rì, tỉnh Thái Nguyên
            </p>
            <p className="text-slate-500">
              Bám sát chương trình SGK Toán 10 (Bộ sách Kết nối tri thức với cuộc sống) & Định dạng đề thi tốt nghiệp mới của Bộ GD&ĐT
            </p>
            <p className="text-slate-400 text-[11px] pt-2">
              © 2026 THPT Na Rì. Thiết kế giao diện học tập thế hệ mới tích hợp KaTeX và tự động theo dõi tiến độ.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
