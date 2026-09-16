"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CURRICULUM } from "@/data/curriculum";
import { getProgress } from "@/lib/progress";
import type { LessonCounts, ProgressMap } from "@/lib/types";
import MathText from "@/components/MathText";
import { playClick } from "@/lib/sound";
import ProgressRing from "@/components/ProgressRing";

function ScoreBadge({ percent }: { percent: number }) {
  if (percent >= 80) {
    return (
      <span className="flex items-center gap-1 rounded-full border border-emerald/40 bg-emerald/15 px-3 py-0.5 font-mono text-xs font-bold text-emerald-glow shadow-glow-emerald">
        ⭐ {percent}%
      </span>
    );
  }
  if (percent >= 50) {
    return (
      <span className="rounded-full border border-amber/40 bg-amber/15 px-3 py-0.5 font-mono text-xs font-bold text-amber-glow">
        {percent}%
      </span>
    );
  }
  return (
    <span className="rounded-full border border-rose/40 bg-rose/15 px-3 py-0.5 font-mono text-xs font-bold text-rose-glow">
      {percent}%
    </span>
  );
}

export default function HomeClient({ counts }: { counts: Record<string, LessonCounts> }) {
  const [progress, setProgress] = useState<ProgressMap>({});
  const [loaded, setLoaded] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedChapter, setSelectedChapter] = useState<string>("all");

  useEffect(() => {
    setProgress(getProgress());
    setLoaded(true);
  }, []);

  const allLessons = CURRICULUM.flatMap((t) => t.lessons);
  const totalLessons = allLessons.length;
  const completedLessons = allLessons.filter(
    (l) => (progress[l.id]?.best ?? 0) >= 80
  ).length;

  const totalMCQs = Object.values(counts).reduce((sum, c) => sum + (c.mcq || 0), 0);
  const totalTFs = Object.values(counts).reduce((sum, c) => sum + (c.tf || 0), 0);
  const progressPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <main className="relative min-h-screen pb-20">
      <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6">
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

          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-star sm:text-5xl md:text-6xl">
            Chinh Phục{" "}
            <span className="bg-gradient-to-r from-cyan-glow via-violet-glow to-amber bg-clip-text text-transparent">
              Toán 10
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-star-soft sm:text-base">
            Hệ thống học tập & ôn luyện toàn diện bám sát SGK <strong>Kết nối tri thức với cuộc sống</strong>.
            Gồm 27 bài học 9 chương (Lý thuyết tương tác, Trắc nghiệm 4 lựa chọn, Đúng/Sai chuẩn cấu trúc Bộ GD&ĐT, Tự luận),
            Sổ tay Công thức, Cẩm nang Casio 580/880 và Phòng Thi thử trực tuyến.
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
                Thi thử trực tuyến
              </span>
              <span className="text-[10px] text-star-mute">Chuẩn ma trận mới</span>
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
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 rounded-3xl border border-void-border bg-void-card/85 p-5 shadow-glass backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <ProgressRing
                  percent={progressPercent}
                  size={68}
                  strokeWidth={5}
                  gradientFrom="#06B6D4"
                  gradientTo="#10B981"
                >
                  <span className="font-mono text-xs font-bold text-star">{progressPercent}%</span>
                </ProgressRing>
                <div className="text-left">
                  <span className="block font-display text-sm font-bold text-star">
                    Tiến độ hoàn thành
                  </span>
                  <span className="block text-xs text-star-mute">
                    {completedLessons}/{totalLessons} bài đạt thành tích cao (≥ 80%)
                  </span>
                </div>
              </div>

              <div className="h-10 w-px bg-void-border hidden sm:block"></div>

              <div className="flex items-center gap-6 text-xs text-star-soft">
                <div className="text-center">
                  <span className="block font-mono text-lg font-bold text-cyan-glow">
                    {totalMCQs}
                  </span>
                  <span className="text-star-mute">Câu trắc nghiệm</span>
                </div>
                <div className="text-center">
                  <span className="block font-mono text-lg font-bold text-emerald-glow">
                    {totalTFs}
                  </span>
                  <span className="text-star-mute">Câu Đúng/Sai</span>
                </div>
                <div className="text-center">
                  <span className="block font-mono text-lg font-bold text-amber-glow">
                    9
                  </span>
                  <span className="text-star-mute">Chương SGK</span>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* ─── Search & Filter Section ─── */}
        <div className="mt-10 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-star-mute text-sm">
                🔍
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Tìm bài học, khái niệm (Vectơ, Parabol, Mệnh đề...)"
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-2xl bg-void-card/90 border border-void-border text-star placeholder:text-star-mute focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition"
              />
            </div>

            {/* Quick status label */}
            <div className="text-xs text-star-mute w-full sm:w-auto text-right">
              Hiển thị: <strong className="text-cyan-glow">{selectedChapter === "all" ? "Tất cả 9 chương" : "1 chương"}</strong>
            </div>
          </div>

          {/* Chapter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => {
                playClick();
                setSelectedChapter("all");
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                selectedChapter === "all"
                  ? "bg-cyan/20 border border-cyan/40 text-cyan-glow shadow-glow-cyan"
                  : "bg-void-card/80 border border-void-border text-star-soft hover:border-cyan/30 hover:text-star"
              }`}
            >
              Tất cả 9 chương
            </button>
            {CURRICULUM.map((topic) => (
              <button
                key={topic.id}
                onClick={() => {
                  playClick();
                  setSelectedChapter(topic.id);
                }}
                className={`px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition ${
                  selectedChapter === topic.id
                    ? "bg-cyan/20 border border-cyan/40 text-cyan-glow shadow-glow-cyan font-bold"
                    : "bg-void-card/80 border border-void-border text-star-soft hover:border-cyan/30 hover:text-star"
                }`}
              >
                {topic.emoji} {topic.name.split(".")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* ─── Chapter List & Lessons ─── */}
        <section className="mt-8 space-y-8">
          {CURRICULUM.map((topic) => {
            if (selectedChapter !== "all" && selectedChapter !== topic.id) return null;

            const filteredLessons = topic.lessons.filter(
              (l) =>
                l.title.toLowerCase().includes(search.toLowerCase()) ||
                (l.desc && l.desc.toLowerCase().includes(search.toLowerCase()))
            );

            if (filteredLessons.length === 0) return null;

            return (
              <div key={topic.id} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-void-card border border-void-border text-xl shadow-glow-cyan">
                    {topic.emoji}
                  </div>
                  <div>
                    <h2 className="font-display text-lg sm:text-xl font-bold text-star">
                      {topic.name}
                    </h2>
                    <span className="text-[11px] font-mono text-star-mute">
                      {filteredLessons.length} bài học
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredLessons.map((lesson) => {
                    const c = counts[lesson.id] ?? { mcq: 0, tf: 0, essay: 0, theory: true };
                    const prog = progress[lesson.id];
                    const bestScore = prog?.best ?? null;

                    return (
                      <Link
                        key={lesson.id}
                        href={`/luyen/${lesson.id}`}
                        onClick={() => playClick()}
                        className="group relative flex flex-col justify-between rounded-3xl border border-void-border bg-void-card/90 p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-glow-cyan backdrop-blur-xl"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <span className="rounded-lg border border-cyan/30 bg-cyan/10 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-glow">
                              {lesson.id.toUpperCase()}
                            </span>

                            {bestScore !== null ? (
                              <ScoreBadge percent={bestScore} />
                            ) : (
                              <span className="text-[10px] font-mono text-star-mute">Chưa làm</span>
                            )}
                          </div>

                          <h3 className="mt-3 font-display text-base font-bold text-star group-hover:text-cyan-glow transition leading-snug">
                            {lesson.title}
                          </h3>

                          {lesson.desc && (
                            <p className="mt-1.5 text-xs text-star-soft line-clamp-2 leading-relaxed">
                              {lesson.desc}
                            </p>
                          )}
                        </div>

                        <div className="mt-5 pt-3 border-t border-void-border/70 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-[11px] text-star-mute font-mono">
                            <span>🎯 {c.mcq}</span>
                            <span>•</span>
                            <span>⚖️ {c.tf}</span>
                            <span>•</span>
                            <span>✍️ {c.essay}</span>
                          </div>

                          <span className="text-xs font-semibold text-cyan-glow flex items-center gap-1 group-hover:translate-x-1 transition">
                            Học ngay →
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}
