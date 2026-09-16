"use client";

import { useState } from "react";
import type { LessonReview } from "@/lib/types";
import MathText from "@/components/MathText";
import { playClick } from "@/lib/sound";

export default function ReviewViewer({
  lessonId,
  lessonTitle,
  review,
  onBack,
}: {
  lessonId?: string;
  lessonTitle: string;
  review: LessonReview;
  onBack?: () => void;
}) {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [checkedList, setCheckedList] = useState<Record<number, boolean>>({});

  const card = review.flashcards[currentCard];

  function toggleCheck(idx: number) {
    playClick();
    setCheckedList((prev) => ({ ...prev, [idx]: !prev[idx] }));
  }

  function nextCard() {
    playClick();
    setIsFlipped(false);
    setCurrentCard((c) => (c + 1) % review.flashcards.length);
  }

  function prevCard() {
    playClick();
    setIsFlipped(false);
    setCurrentCard((c) => (c - 1 + review.flashcards.length) % review.flashcards.length);
  }

  function handleFlip() {
    playClick();
    setIsFlipped(!isFlipped);
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-12">
      {/* Top Header */}
      <div className="rounded-2xl border border-void-border bg-void-card/90 p-4 flex items-center justify-between shadow-card backdrop-blur-xl">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={() => {
                playClick();
                onBack();
              }}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-void-subtle border border-void-border text-star-soft hover:text-star transition"
            >
              ← Trở về
            </button>
          )}
          <span className="font-mono text-xs font-bold text-amber-glow uppercase tracking-wider">
            📋 Ôn tập & Khắc sâu trọng tâm
          </span>
        </div>
      </div>

      {/* ─── 1. Flashcard Hub ──────────────────────────────────────────────── */}
      {review.flashcards.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-star flex items-center gap-2">
              <span>🗂️</span>
              <span>Flashcard Khái niệm ({currentCard + 1}/{review.flashcards.length})</span>
            </h3>
            <span className="text-xs font-mono text-star-mute italic">Nhấn vào thẻ để lật xem đáp án</span>
          </div>

          <div
            onClick={handleFlip}
            className="cursor-pointer min-h-[220px] rounded-3xl p-8 flex flex-col justify-between text-center transition-all duration-300 shadow-card border border-void-border hover:border-cyan/50 hover:shadow-glow-cyan bg-gradient-to-br from-void-card via-void-subtle to-void-card backdrop-blur-xl"
          >
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-glow">
              {isFlipped ? "💡 ĐÁP ÁN / ĐỊNH NGHĨA" : "❓ CÂU HỎI GHI NHỚ"}
            </div>

            <div className="my-auto py-4 text-base sm:text-lg font-semibold text-star leading-relaxed">
              <MathText content={isFlipped ? card.back : card.front} />
            </div>

            <div className="text-[11px] font-mono text-star-mute">
              {isFlipped ? "Nhấn lại để xem câu hỏi" : "Nhấn để lật mặt sau"}
            </div>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <button
              onClick={prevCard}
              className="px-4 py-2 rounded-xl bg-void-subtle border border-void-border hover:border-cyan/40 text-xs font-mono font-bold text-star-soft transition"
            >
              ← Thẻ trước
            </button>
            <button
              onClick={handleFlip}
              className="px-5 py-2 rounded-xl bg-cyan/15 border border-cyan/30 text-xs font-mono font-bold text-cyan-glow shadow-glow-cyan transition"
            >
              Lật thẻ 🔄
            </button>
            <button
              onClick={nextCard}
              className="px-4 py-2 rounded-xl bg-void-subtle border border-void-border hover:border-cyan/40 text-xs font-mono font-bold text-star-soft transition"
            >
              Thẻ sau →
            </button>
          </div>
        </section>
      )}

      {/* ─── 2. Common Pitfalls & Mistakes ─────────────────────────────────── */}
      {review.commonMistakes.length > 0 && (
        <section className="space-y-4">
          <h3 className="font-display font-bold text-lg text-star flex items-center gap-2">
            <span>⚠️</span>
            <span>Bẫy đề thi & Lỗi sai thường gặp</span>
          </h3>

          <div className="space-y-3">
            {review.commonMistakes.map((m, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-5 border border-rose/30 bg-rose/10 space-y-2 shadow-glow-rose"
              >
                <div className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-rose-glow">
                  <span className="text-base">❌</span>
                  <div className="leading-relaxed">
                    <MathText content={m.mistake} />
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-glow bg-void-card/90 p-3.5 rounded-xl border border-emerald/30 mt-2">
                  <span className="text-base">💡</span>
                  <div className="leading-relaxed">
                    <strong className="text-emerald-glow">Cách khắc phục: </strong>
                    <MathText content={m.fix} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─── 3. Self-Check Checklist ───────────────────────────────────────── */}
      {review.checklist.length > 0 && (
        <section className="space-y-4">
          <h3 className="font-display font-bold text-lg text-star flex items-center gap-2">
            <span>✅</span>
            <span>Bảng kiểm tự đánh giá mục tiêu bài học</span>
          </h3>

          <div className="rounded-3xl border border-void-border bg-void-card/90 p-5 space-y-2.5 shadow-card backdrop-blur-xl">
            {review.checklist.map((item, idx) => {
              const isChecked = !!checkedList[idx];
              return (
                <label
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-2xl bg-void-subtle/50 hover:bg-void-subtle cursor-pointer transition border border-transparent hover:border-void-border"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleCheck(idx)}
                    className="mt-0.5 w-4 h-4 rounded text-cyan focus:ring-cyan border-void-border bg-void-card"
                  />
                  <span
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isChecked ? "line-through text-star-mute" : "text-star-soft"
                    }`}
                  >
                    <MathText content={item} />
                  </span>
                </label>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
