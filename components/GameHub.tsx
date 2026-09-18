"use client";

import { useEffect, useState } from "react";
import type { LessonGame } from "@/lib/types";
import { getLessonProgress } from "@/lib/progress";
import { playClick } from "@/lib/sound";
import SortGameClient from "@/components/SortGame";
import MatchGameClient from "@/components/MatchGame";
import VennGameClient from "@/components/VennGame";
import CoordinateGameClient from "@/components/CoordinateGame";

export default function GameHub({
  lessonId,
  games,
  onBack,
}: {
  lessonId: string;
  games: LessonGame[];
  onBack?: () => void;
}) {
  const [active, setActive] = useState<LessonGame | null>(games.length === 1 ? games[0] : null);
  const [bestByGame, setBestByGame] = useState<Record<string, number | null>>({});

  useEffect(() => {
    if (active) return;
    const map: Record<string, number | null> = {};
    for (const g of games) {
      map[g.id] = getLessonProgress(`${lessonId}:game:${g.id}`)?.best ?? null;
    }
    setBestByGame(map);
  }, [active, games, lessonId]);

  if (active) {
    const handleBack = games.length === 1 ? onBack : () => setActive(null);
    if (active.kind === "sort") {
      return <SortGameClient lessonId={lessonId} game={active} onBack={handleBack} />;
    }
    if (active.kind === "match") {
      return <MatchGameClient lessonId={lessonId} game={active} onBack={handleBack} />;
    }
    if (active.kind === "coordinate") {
      return <CoordinateGameClient lessonId={lessonId} game={active} onBack={handleBack} />;
    }
    return <VennGameClient lessonId={lessonId} game={active} onBack={handleBack} />;
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6 pb-12 animate-fade-in-up">
      {/* Top Header */}
      <div className="rounded-3xl border border-void-border bg-void-card/90 p-6 shadow-card backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/15 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-cyan-glow">
              🎮 Đấu trường Game Toán học
            </div>
            <h2 className="mt-2 font-display text-xl sm:text-2xl font-bold text-star">
              Học Toán Qua Trò Chơi Tương Tác
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-star-soft">
              Rèn luyện phản xạ logic, nhận diện mệnh đề và thành thạo lượng từ toán học.
            </p>
          </div>
          <span className="text-4xl">🕹️</span>
        </div>
      </div>

      {/* Games List */}
      <div className="space-y-4">
        {games.map((g) => {
          const desc =
            g.kind === "sort"
              ? `${g.items.length} thẻ câu · Vuốt kéo phân loại nhanh`
              : g.kind === "match"
              ? `${g.pairs.length} cặp đôi · Ghép đôi logic tương ứng`
              : g.kind === "venn"
              ? `${g.questions.length} câu · Tô đúng vùng trên biểu đồ Venn`
              : `${g.questions.length} câu · Bắn toạ độ điểm thuộc miền nghiệm Oxy`;
          const best = bestByGame[g.id] ?? null;

          return (
            <button
              key={g.id}
              onClick={() => {
                playClick();
                setActive(g);
              }}
              className="group flex w-full items-center gap-4 rounded-3xl border border-void-border bg-void-card/90 p-5 text-left shadow-card backdrop-blur-xl transition-all duration-200 hover:border-cyan/50 hover:bg-void-subtle hover:shadow-glow-cyan hover:scale-[1.01]"
            >
              <span className="text-4xl p-2 rounded-2xl bg-void-subtle border border-void-border group-hover:border-cyan/40 transition">
                {g.emoji}
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-display text-base sm:text-lg font-bold text-star group-hover:text-cyan-glow transition">
                    {g.title}
                  </span>
                  <span className="rounded-full bg-void-subtle border border-void-border px-2 py-0.5 font-mono text-[10px] text-star-mute uppercase">
                    {g.kind === "sort"
                      ? "Swipe Card"
                      : g.kind === "match"
                      ? "Match Pair"
                      : g.kind === "venn"
                      ? "Venn Click"
                      : "Radar Oxy"}
                  </span>
                </div>
                <p className="mt-1 text-xs text-star-soft">{desc}</p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {best !== null && (
                  <span
                    className={`rounded-2xl px-3 py-1 font-mono text-xs font-bold border ${
                      best >= 80
                        ? "border-emerald/40 bg-emerald/15 text-emerald-glow shadow-glow-emerald"
                        : best >= 50
                        ? "border-amber/40 bg-amber/15 text-amber-glow"
                        : "border-rose/40 bg-rose/15 text-rose-glow"
                    }`}
                  >
                    {best >= 80 ? "⭐ " : ""}
                    {best}%
                  </span>
                )}
                <span className="text-lg text-star-mute group-hover:translate-x-1 group-hover:text-cyan-glow transition">
                  →
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
