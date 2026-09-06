"use client";

import { useState } from "react";
import type { EssayQuestion } from "@/lib/types";
import MathText from "@/components/MathText";

export default function EssayViewer({
  lessonTitle,
  questions,
  onBack,
}: {
  lessonTitle: string;
  questions: EssayQuestion[];
  onBack?: () => void;
}) {
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  function handleCheck(qId: string) {
    setRevealed((prev) => ({ ...prev, [qId]: true }));
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="glass rounded-2xl p-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-indigo-50 transition"
            >
              ← Trở về
            </button>
          )}
          <span className="font-display text-xs font-bold text-slate-700">
            Câu hỏi Trả lời ngắn / Tự luận ({questions.length} câu)
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
              className="glass rounded-3xl p-6 sm:p-8 space-y-5 shadow-md border border-indigo-100/70"
            >
              <div className="space-y-2">
                <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-100">
                  CÂU HỎI {idx + 1}
                </span>
                <div className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed">
                  <MathText content={q.q} />
                </div>
              </div>

              {/* Student Answer Input */}
              <div className="space-y-3 pt-2">
                <label className="text-xs font-semibold text-slate-600">
                  Nhập đáp số của bạn:
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={userVal}
                    onChange={(e) =>
                      setUserAnswers({ ...userAnswers, [q.id]: e.target.value })
                    }
                    placeholder="Ví dụ: 5, -2/3, (1; 2)..."
                    className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 glass text-sm focus:outline-none focus:ring-2 focus:ring-nebula shadow-sm font-mono"
                  />
                  <button
                    onClick={() => handleCheck(q.id)}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md transition shrink-0"
                  >
                    Kiểm tra
                  </button>
                </div>
              </div>

              {/* Solution breakdown */}
              {isRevealed && (
                <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 space-y-3 animate-pop-in">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900">
                      Đáp án chuẩn:
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-white border border-indigo-200 font-mono font-bold text-sm text-indigo-700">
                      {q.answer}
                    </span>
                    {userVal.trim() && (
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          isMatch
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-rose-100 text-rose-800"
                        }`}
                      >
                        {isMatch ? "✓ Chính xác" : "✗ Chưa khớp"}
                      </span>
                    )}
                  </div>

                  {q.explain && (
                    <div className="text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-indigo-100 pt-2">
                      <strong className="text-slate-900">Hướng dẫn giải: </strong>
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
