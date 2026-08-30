import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Luyện trắc nghiệm Toán 10 — THPT Na Rì',
  description: 'Website ôn tập và luyện trắc nghiệm môn Toán lớp 10 theo bộ sách Kết nối tri thức với cuộc sống của trường THPT Na Rì.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css"
          integrity="sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"
          integrity="sha384-7zkQWkzuo3B5mTepMUcHkMB5jZaigo2XXCG4wgfcq4BFV5J4jNGvVC4t201eWPmV"
          crossOrigin="anonymous"
        ></script>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js"
          integrity="sha384-43gviWU0YVjaDtb/GhzOouOXtZko/WgHtn48RdLAOTIdFe0EGzHy1xJR1PiTXWCx"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="antialiased">
        <header className="sticky top-0 z-50 glass-card shadow-sm border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-200">
                T10
              </div>
              <div>
                <h1 className="font-bold text-slate-800 text-base leading-tight">TOÁN 10 — KẾT NỐI TRI THỨC</h1>
                <p className="text-xs text-indigo-600 font-medium">Trường THPT Na Rì</p>
              </div>
            </a>
            <div className="flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-600 hover:text-indigo-600 font-medium transition">Danh sách bài</a>
              <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-200">
                Năm học 2026–2027
              </span>
            </div>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="mt-16 border-t border-slate-200 py-8 bg-slate-50 text-center text-xs text-slate-500">
          <p className="font-medium text-slate-600">Hệ thống Ôn tập & Luyện trắc nghiệm Toán 10 — Trường THPT Na Rì</p>
          <p className="mt-1">Bám sát chuẩn kiến thức & định dạng đề thi mới của Bộ GD&ĐT</p>
        </footer>
      </body>
    </html>
  );
}
