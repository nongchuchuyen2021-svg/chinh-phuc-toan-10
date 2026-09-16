"use client";

import { useState } from "react";
import type { EssayQuestion } from "@/lib/types";
import MathText from "@/components/MathText";
import { playClick, playCorrect, playWrong } from "@/lib/sound";

export default function EssayViewer({
  lessonId,
  lessonTitle,
  questions,
  onBack,
}: {
  lessonId?: string;
  lessonTitle: string;
  questions: EssayQuestion[];
  onBack?: () => void;
}) {
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  function handleCheck(qId: string, expectedAnswer: string) {
    playClick();
    setRevealed((prev) => ({ ...prev, [qId]: true }));
    const userVal = (userAnswers[qId] || "").trim().toLowerCase();
    const isMatch = userVal === expectedAnswer.trim().toLowerCase();
    if (isMatch) {
      playCorrect();
    } else {
      playWrong();
    }
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      {/* Header Info */}
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
          <span className="font-mono text-xs font-bold text-cyan-glow">
            ✍️ Câu hỏi Trả lời ngắn / Tự luận ({questions.length} câu)
          </span>
        </div>
      </div>

      {/* Questions list */}
      <div className="space-y-6">
        {questions.map((q, idx) => {
          const isRevealed = revealed[q.id];
          const userVal = userAnswers[q.id] || "";
          const isMatch =
            userVal.trim().toLowerCase() === q.answer.trim().toLowerCase();

          return (
            <div
              key={q.id}
              className="rounded-3xl border border-void-border bg-void-card/95 p-6 sm:p-8 space-y-5 shadow-card backdrop-blur-xl hover:border-cyan/30 transition duration-200"
            >
              <div className="space-y-2">
                <span className="inline-block text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-lg bg-rose/15 text-rose-glow border border-rose/30">
                  CÂU HỎI {idx + 1}
                </span>
                <div className="text-base sm:text-lg font-medium text-star leading-relaxed">
                  <MathText content={q.q} />
                </div>
              </div>

              {/* Student Answer Input */}
              <div className="space-y-2.5 pt-2">
                <label className="text-xs font-mono font-bold text-star-soft">
                  Nhập đáp số của em:
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={userVal}
                    onChange={(e) =>
                      setUserAnswers({ ...userAnswers, [q.id]: e.target.value })
                    }
                    placeholder="Ví dụ: 5, -2/3, (1; 2), 12..."
                    className="flex-1 px-4 py-2.5 rounded-xl border border-void-border bg-void-subtle text-star text-xs sm:text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 font-mono transition"
                  />
                  <button
                    onClick={() => handleCheck(q.id, q.answer)}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose to-rose-deep text-white font-mono font-bold text-xs shadow-glow-rose hover:opacity-90 transition shrink-0"
                  >
                    Kiểm tra
                  </button>
                </div>
              </div>

              {/* Solution breakdown */}
              {isRevealed && (
                <div className="p-5 rounded-2xl bg-void-subtle/90 border border-void-border space-y-3 animate-fade-in-up">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold text-star-mute">
                      Đáp án chuẩn:
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-void-card border border-cyan/40 font-mono font-bold text-xs sm:text-sm text-cyan-glow shadow-glow-cyan">
                      {q.answer}
                    </span>
                    {userVal.trim() && (
                      <span
                        className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                          isMatch
                            ? "bg-emerald/20 border-emerald/40 text-emerald-glow shadow-glow-emerald"
                            : "bg-rose/20 border-rose/40 text-rose-glow"
                        }`}
                      >
                        {isMatch ? "✓ Chính xác" : "✗ Chưa khớp"}
                      </span>
                    )}
                  </div>

                  {q.explain && (
                    <div className="text-xs sm:text-sm text-star-soft leading-relaxed border-t border-void-border/70 pt-3">
                      <strong className="text-cyan-glow">💡 Hướng dẫn phương pháp giải: </strong>
                      <MathText content={q.explain} />
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
