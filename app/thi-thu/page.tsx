import type { Metadata } from "next";
import Link from "next/link";
import { EXAM_PAPERS } from "@/data/mockExam";

export const metadata: Metadata = {
  title: "Kiểm tra Định kỳ Toán 10 — Chinh phục Toán 10",
  description:
    "Đề kiểm tra Giữa kỳ và Cuối kỳ môn Toán 10, cấu trúc bám sát đề minh hoạ Tốt nghiệp THPT: Trắc nghiệm 4 lựa chọn, Đúng/Sai và Trả lời ngắn, 90 phút/đề.",
};

const ACCENTS = [
  { border: "border-cyan/40", glow: "shadow-glow-cyan", text: "text-cyan-glow", chip: "bg-cyan/15 border-cyan/30" },
  { border: "border-violet/40", glow: "shadow-glow-violet", text: "text-violet-glow", chip: "bg-violet/15 border-violet/30" },
  { border: "border-emerald/40", glow: "shadow-glow-emerald", text: "text-emerald-glow", chip: "bg-emerald/15 border-emerald/30" },
  { border: "border-amber/40", glow: "shadow-glow-amber", text: "text-amber-glow", chip: "bg-amber/15 border-amber/30" },
];

export default function ExamHubPage() {
  return (
    <main className="relative min-h-screen py-10 px-4 max-w-5xl mx-auto space-y-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-void-card border border-void-border text-xs font-mono font-bold text-star-soft hover:text-cyan-glow transition shadow-card"
      >
        ← Quay lại trang chủ
      </Link>

      <div className="text-center space-y-3">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-glow">
          Phòng Kiểm Tra Định Kỳ
        </span>
        <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-star">
          Đề kiểm tra Giữa kỳ &amp; Cuối kỳ — Toán 10
        </h1>
        <p className="text-sm text-star-soft max-w-2xl mx-auto">
          4 đề kiểm tra định kỳ (Giữa kỳ 1, Cuối kỳ 1, Giữa kỳ 2, Cuối kỳ 2), mỗi đề cấu trúc 3 phần bám sát đề minh hoạ
          Tốt nghiệp THPT của Bộ Giáo dục và Đào tạo: 12 câu trắc nghiệm 4 lựa chọn, 4 câu Đúng/Sai, 6 câu trả lời ngắn —
          90 phút, thang điểm 10.0. Phạm vi kiến thức mỗi đề giới hạn đúng theo chương đã học tới thời điểm kiểm tra.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {EXAM_PAPERS.map((paper, idx) => {
          const accent = ACCENTS[idx % ACCENTS.length];
          return (
            <Link
              key={paper.id}
              href={`/thi-thu/${paper.id}`}
              className={`group rounded-3xl border ${accent.border} bg-void-card/90 p-6 shadow-card backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:${accent.glow} space-y-3`}
            >
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-mono font-bold uppercase tracking-wider ${accent.chip} ${accent.text}`}>
                ⏱️ 90 phút · 22 câu
              </span>
              <h2 className={`font-display text-lg sm:text-xl font-bold text-star group-hover:${accent.text} transition`}>
                {paper.title.replace(" — Môn Toán 10", "")}
              </h2>
              <p className="text-xs text-star-soft leading-relaxed">{paper.scope}</p>
              <span className={`inline-flex items-center gap-1 text-xs font-mono font-bold ${accent.text}`}>
                Vào làm bài →
              </span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
