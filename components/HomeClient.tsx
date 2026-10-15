"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CURRICULUM } from "@/data/curriculum";
import { getProgress } from "@/lib/progress";
import type { ProgressMap } from "@/lib/types";
import { playClick } from "@/lib/sound";
import ProgressRing from "@/components/ProgressRing";

function ScoreBadge({ percent }: { percent: number }) {
  if (percent >= 80) {
    return (
      <span className="flex items-center gap-1 rounded-full border border-emerald/40 bg-emerald/15 px-3 py-1 font-mono text-xs font-bold text-emerald-glow shadow-glow-emerald">
        ⭐ {percent}%
      </span>
    );
  }
  if (percent >= 50) {
    return (
      <span className="rounded-full border border-amber/40 bg-amber/15 px-3 py-1 font-mono text-xs font-bold text-amber-glow">
        {percent}%
      </span>
    );
  }
  return (
    <span className="rounded-full border border-rose/40 bg-rose/15 px-3 py-1 font-mono text-xs font-bold text-rose-glow">
      {percent}%
    </span>
  );
}

const CHAPTER_EMOJIS: Record<string, string> = {
  "chuong-1": "📐",
  "chuong-2": "📊",
  "chuong-3": "🔺",
  "chuong-4": "↗️",
  "chuong-5": "📈",
  "chuong-6": "📉",
  "chuong-7": "🧭",
  "chuong-8": "🎲",
  "chuong-9": "🎯",
};

export default function HomeClient() {
  const [progress, setProgress] = useState<ProgressMap>({});
  const [loaded, setLoaded] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setProgress(getProgress());
    setLoaded(true);
  }, []);

  const allLessons = CURRICULUM.flatMap((ch) => ch.lessons);
  const doneCount = allLessons.filter((l) => {
    const p = progress[l.id];
    const score = p?.mcScore?.percent ?? p?.best ?? 0;
    return score >= 80;
  }).length;

  const totalCompletedTheory = allLessons.filter((l) => {
    const p = progress[l.id];
    return p?.completedTheory || progress[`${l.id}:lt`]?.best === 100;
  }).length;

  return (
    <main className="relative min-h-screen pb-20">
      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        {/* ─── Hero Section ─── */}
        <header className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-5 py-2 font-display text-sm font-semibold text-cyan-glow shadow-glow-cyan sm:text-base">
            <span>🏫</span>
            <span>Trường THPT Na Rì — Tỉnh Thái Nguyên</span>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="animate-float text-4xl sm:text-5xl" style={{ animationDelay: "0s" }}>📐</span>
            <span className="animate-float text-3xl sm:text-4xl" style={{ animationDelay: "0.5s" }}>✨</span>
            <span className="animate-float text-4xl sm:text-5xl" style={{ animationDelay: "1s" }}>🔺</span>
            <span className="animate-float text-3xl sm:text-4xl" style={{ animationDelay: "1.5s" }}>↗️</span>
            <span className="animate-float text-4xl sm:text-5xl" style={{ animationDelay: "2s" }}>🎲</span>
          </div>

          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-star sm:text-5xl">
            Chinh Phục{" "}
            <span className="bg-gradient-to-r from-cyan-glow via-violet-glow to-amber bg-clip-text text-transparent">
              Toán 10
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-star-soft sm:text-base">
            Hệ thống ôn luyện toàn diện chuẩn SGK <strong>Kết nối tri thức với cuộc sống</strong>.
            Gồm 27 bài học trực quan (Lý thuyết tương tác, Trắc nghiệm 4 lựa chọn, Đúng/Sai 4 ý chuẩn QĐ 764, Tự luận ngắn),
            Sổ tay Công thức, Cẩm nang bấm máy Casio fx-580VNX/880BTG và Đề kiểm tra định kỳ 90 phút.
          </p>

          {/* Feature Shortcuts Banner */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Link
              href="/cong-thuc"
              onClick={() => playClick()}
              className="group flex flex-col items-center justify-center rounded-2xl border border-cyan/30 bg-void-card/90 p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-cyan/60 hover:shadow-glow-cyan"
            >
              <span className="text-2xl transition group-hover:scale-110">📑</span>
              <span className="mt-2 font-display text-xs font-bold text-star group-hover:text-cyan-glow">
                Sổ tay Công thức
              </span>
              <span className="text-[10px] text-star-mute">Đầy đủ 9 chương</span>
            </Link>

            <Link
              href="/casio"
              onClick={() => playClick()}
              className="group flex flex-col items-center justify-center rounded-2xl border border-amber/30 bg-void-card/90 p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-amber/60 hover:shadow-glow-amber"
            >
              <span className="text-2xl transition group-hover:scale-110">⚡</span>
              <span className="mt-2 font-display text-xs font-bold text-star group-hover:text-amber-glow">
                Tips Casio 580/880
              </span>
              <span className="text-[10px] text-star-mute">Bấm máy giải nhanh</span>
            </Link>

            <Link
              href="/thi-thu"
              onClick={() => playClick()}
              className="group flex flex-col items-center justify-center rounded-2xl border border-violet/40 bg-gradient-to-br from-violet-deep/30 to-cyan-deep/30 p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-violet/60 hover:shadow-glow-violet"
            >
              <span className="text-2xl transition group-hover:scale-110">🏆</span>
              <span className="mt-2 font-display text-xs font-bold text-star group-hover:text-violet-glow">
                Kiểm tra định kỳ
              </span>
              <span className="text-[10px] text-star-mute">Giữa kỳ / Cuối kỳ 90'</span>
            </Link>

            <Link
              href="/on-tap"
              onClick={() => playClick()}
              className="group flex flex-col items-center justify-center rounded-2xl border border-emerald/30 bg-void-card/90 p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-emerald/60 hover:shadow-glow-emerald"
            >
              <span className="text-2xl transition group-hover:scale-110">🎯</span>
              <span className="mt-2 font-display text-xs font-bold text-star group-hover:text-emerald-glow">
                Sổ tay Ôn câu sai
              </span>
              <span className="text-[10px] text-star-mute">Khắc phục lỗ hổng</span>
            </Link>
          </div>

          {/* Progress Overview Card */}
          {loaded && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 rounded-3xl border border-void-border bg-void-card/80 p-5 shadow-glass backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <ProgressRing
                  percent={allLessons.length > 0 ? (doneCount / allLessons.length) * 100 : 0}
                  size={68}
                  gradientFrom="#06B6D4"
                  gradientTo="#10B981"
                >
                  <span className="font-display text-sm font-bold text-star">{doneCount}</span>
                  <span className="font-mono text-[9px] text-star-mute">/{allLessons.length}</span>
                </ProgressRing>
                <div className="text-left">
                  <p className="font-display text-sm font-semibold text-star flex items-center gap-1">
                    <span>🏆 Đã chinh phục</span>
                  </p>
                  <p className="font-mono text-xs text-star-soft">
                    {doneCount}/{allLessons.length} bài đạt sao ⭐ (≥ 80%)
                  </p>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-void-border" />

              <div className="flex items-center gap-4 text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/15 text-cyan-glow border border-cyan/30 text-xl">
                  📖
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-star">Lý thuyết đã đọc</p>
                  <p className="font-mono text-xs text-cyan-glow">
                    {totalCompletedTheory}/{allLessons.length} bài học
                  </p>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* ─── Glow Line ─── */}
        <div className="glow-line mx-auto mt-10 max-w-sm" />

        {/* ─── Search Bar ─── */}
        <div className="relative mt-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="🔍 Tìm bài học theo tên, công thức, dạng toán (vd: mệnh đề, vectơ, parabol, hệ thức lượng, toạ độ Oxy...)"
            className="w-full rounded-2xl border border-void-border bg-void-card px-5 py-3.5 pl-12 text-sm text-star placeholder-star-mute shadow-card outline-none transition-all focus:border-cyan focus:shadow-glow-cyan"
          />
          <svg
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-cyan"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* ─── Curriculum Chapters ─── */}
        <div className="mt-10 space-y-10">
          {CURRICULUM.map((chapter) => {
            const filteredLessons = chapter.lessons.filter(
              (l) =>
                l.title.toLowerCase().includes(search.toLowerCase()) ||
                (l.desc && l.desc.toLowerCase().includes(search.toLowerCase()))
            );
            if (filteredLessons.length === 0) return null;

            const chapterEmoji = CHAPTER_EMOJIS[chapter.id] || chapter.emoji || "📚";

            return (
              <section key={chapter.id} className="animate-fade-in-up">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-deep to-violet-deep font-mono text-sm font-bold text-white shadow-glow-cyan">
                    {chapterEmoji}
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-bold text-star sm:text-xl">
                      {chapter.name}
                    </h2>
                  </div>
                </div>

                <ul className="stagger mt-4 space-y-3">
                  {filteredLessons.map((lesson) => {
                    const p = progress[lesson.id];
                    const percent = p?.mcScore?.percent ?? p?.best;
                    const tfScore = p?.tfScore?.score;
                    const hasReadTheory = p?.completedTheory || progress[`${lesson.id}:lt`]?.best === 100;

                    return (
                      <li key={lesson.id}>
                        <Link
                          href={`/luyen/${lesson.id}`}
                          onClick={() => playClick()}
                          className="group flex items-center justify-between gap-4 rounded-2xl border border-void-border bg-void-card/90 p-4.5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/40 hover:shadow-glow-cyan backdrop-blur"
                        >
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="font-display text-sm font-bold text-star transition-colors group-hover:text-cyan-glow sm:text-base">
                                {lesson.title}
                              </p>
                              {hasReadTheory && (
                                <span className="rounded-full bg-cyan/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-cyan-glow border border-cyan/30">
                                  ✓ Lý thuyết
                                </span>
                              )}
                              {tfScore !== undefined && tfScore !== null && (
                                <span className="rounded-full bg-emerald/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-glow border border-emerald/30">
                                  Đúng/Sai: {tfScore.toFixed(2)}đ
                                </span>
                              )}
                            </div>
                            {lesson.desc && (
                              <p className="mt-1 text-xs leading-relaxed text-star-soft">
                                {lesson.desc}
                              </p>
                            )}
                          </div>

                          <div className="flex shrink-0 items-center gap-3">
                            {loaded && percent !== undefined && <ScoreBadge percent={percent} />}
                            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-void-subtle text-star-mute transition-all group-hover:translate-x-1 group-hover:bg-cyan group-hover:text-void">
                              →
                            </span>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>

        {/* ─── Footer ─── */}
        <div className="glow-line mx-auto mt-14 max-w-xs" />
        <footer className="mt-8 space-y-1.5 text-center font-mono text-xs text-star-mute">
          <p className="text-star-soft">Tổ Toán - Tin · Trường THPT Na Rì, xã Na Rì, tỉnh Thái Nguyên</p>
          <p>Bám sát chương trình GDPT 2018 · SGK Toán 10 Kết nối tri thức với cuộc sống</p>
          <p className="text-[11px] text-cyan-glow/80">Tiến độ và kết quả được lưu trữ an toàn trên trình duyệt của bạn</p>
        </footer>
      </div>
    </main>
  );
}
