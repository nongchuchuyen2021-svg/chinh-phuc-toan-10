"use client";

import { useState } from "react";
import type { LessonReview } from "@/lib/types";
import MathText from "@/components/MathText";

export default function ReviewViewer({
  lessonTitle,
  review,
  onBack,
}: {
  lessonTitle: string;
  review: LessonReview;
  onBack?: () => void;
}) {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [checkedList, setCheckedList] = useState<Record<number, boolean>>({});

  const card = review.flashcards[currentCard];

  function toggleCheck(idx: number) {
    setCheckedList((prev) => ({ ...prev, [idx]: !prev[idx] }));
  }

  function nextCard() {
    setIsFlipped(false);
    setCurrentCard((c) => (c + 1) % review.flashcards.length);
  }

  function prevCard() {
    setIsFlipped(false);
    setCurrentCard((c) => (c - 1 + review.flashcards.length) % review.flashcards.length);
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-10">
      {/* Top Controls */}
      <div className="glass rounded-2xl p-4 flex items-center justify-between shadow-sm">
        {onBack ? (
          <button
            onClick={onBack}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-indigo-50 transition"
          >
            ← Trở về
          </button>
        ) : (
          <div />
        )}

        <span className="text-xs font-bold text-nebula uppercase tracking-wider">
          Ôn tập & Ghi nhớ siêu tốc
        </span>
      </div>

      {/* ─── 1. Flashcard Hub ──────────────────────────────────────────────── */}
      {review.flashcards.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
              <span>🗂️</span>
              <span>Flashcard Khái niệm ({currentCard + 1}/{review.flashcards.length})</span>
            </h3>
            <span className="text-xs text-slate-500 italic">Nhấn vào thẻ để lật xem đáp án</span>
          </div>

          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer min-h-[200px] rounded-3xl p-8 flex flex-col justify-between text-center transition-all duration-300 shadow-md border border-indigo-200/80 hover:shadow-glow bg-gradient-to-br from-white via-indigo-50/30 to-sky-50/40"
          >
            <div className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              {isFlipped ? "💡 ĐÁP ÁN / LỜI GIẢI" : "❓ CÂU HỎI GHI NHỚ"}
            </div>

            <div className="my-auto py-4 text-base sm:text-lg font-semibold text-slate-900 leading-relaxed">
              <MathText content={isFlipped ? card.back : card.front} />
            </div>

            <div className="text-[11px] text-slate-400 font-medium">
              {isFlipped ? "Nhấn lại để xem câu hỏi" : "Nhấn để lật mặt sau"}
            </div>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center justify-center gap-4 pt-1">
            <button
              onClick={prevCard}
              className="px-4 py-2 rounded-xl glass hover:bg-indigo-50 text-xs font-semibold text-slate-700 transition"
            >
              ← Thẻ trước
            </button>
            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="px-5 py-2 rounded-xl bg-indigo-100 hover:bg-indigo-200 text-xs font-bold text-indigo-700 transition"
            >
              Lật thẻ
            </button>
            <button
              onClick={nextCard}
              className="px-4 py-2 rounded-xl glass hover:bg-indigo-50 text-xs font-semibold text-slate-700 transition"
            >
              Thẻ sau →
            </button>
          </div>
        </section>
      )}

      {/* ─── 2. Common Pitfalls & Mistakes ─────────────────────────────────── */}
      {review.commonMistakes.length > 0 && (
        <section className="space-y-4">
          <h3 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
            <span>⚠️</span>
            <span>Bẫy đề thi & Lỗi sai thường gặp</span>
          </h3>

          <div className="space-y-3">
            {review.commonMistakes.map((m, idx) => (
              <div
                key={idx}
                className="glass rounded-2xl p-5 border border-rose-200/80 bg-rose-50/20 space-y-2 shadow-sm"
              >
                <div className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-rose-900">
                  <span className="text-base">❌</span>
                  <div className="leading-relaxed">
                    <MathText content={m.mistake} />
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-900 bg-emerald-50/80 p-3 rounded-xl border border-emerald-200/60 mt-2">
                  <span className="text-base">💡</span>
                  <div className="leading-relaxed">
                    <strong>Cách khắc phục: </strong>
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
          <h3 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
            <span>✅</span>
            <span>Bảng kiểm tự đánh giá mục tiêu bài học</span>
          </h3>

          <div className="glass rounded-2xl p-5 space-y-3 border border-slate-200 shadow-sm">
            {review.checklist.map((item, idx) => {
              const isChecked = !!checkedList[idx];
              return (
                <label
                  key={idx}
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-indigo-50/50 cursor-pointer transition"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleCheck(idx)}
                    className="mt-0.5 w-4 h-4 rounded text-nebula focus:ring-nebula border-slate-300"
                  />
                  <span
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isChecked ? "line-through text-slate-400" : "text-slate-700"
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
