"use client";

import { useState } from "react";
import type { TFQuestion } from "@/lib/types";
import MathText from "@/components/MathText";

export default function TrueFalseQuiz({
  lessonId,
  lessonTitle,
  questions,
  onBack,
}: {
  lessonId: string;
  lessonTitle: string;
  questions: TFQuestion[];
  onBack?: () => void;
}) {
  const [current, setCurrent] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, boolean | null>>({});
  const [submitted, setSubmitted] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const q = questions[current];

  function handleSelect(statementIdx: number, value: boolean) {
    if (submitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [statementIdx]: value,
    }));
  }

  function calculateStatementScore(correctCount: number): number {
    if (correctCount === 1) return 0.1;
    if (correctCount === 2) return 0.25;
    if (correctCount === 3) return 0.5;
    if (correctCount === 4) return 1.0;
    return 0.0;
  }

  function handleSubmit() {
    if (!q) return;
    let correct = 0;
    q.statements.forEach((st, idx) => {
      if (userAnswers[idx] === st.answer) {
        correct++;
      }
    });
    const score = calculateStatementScore(correct);
    setTotalScore((s) => s + score);
    setSubmitted(true);
  }

  function next() {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setUserAnswers({});
      setSubmitted(false);
    }
  }

  if (!q) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-500">Chưa có câu hỏi đúng/sai cho bài học này.</p>
        {onBack && (
          <button
            onClick={onBack}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold"
          >
            Quay lại
          </button>
        )}
      </div>
    );
  }

  const allAnswered = q.statements.every((_, idx) => userAnswers[idx] !== undefined && userAnswers[idx] !== null);

  let statementCorrectCount = 0;
  if (submitted) {
    q.statements.forEach((st, idx) => {
      if (userAnswers[idx] === st.answer) {
        statementCorrectCount++;
      }
    });
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
            Câu Đúng/Sai {current + 1} / {questions.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100">
            Điểm: {totalScore.toFixed(2)}đ
          </span>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="glass rounded-3xl p-6 sm:p-8 space-y-6 shadow-md border border-indigo-100/70">
        <div className="space-y-3">
          <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-sky-50 text-sky-700 border border-sky-100">
            ĐỊNH DẠNG ĐỀ THI MỚI (4 MỆNH ĐỀ)
          </span>
          <div className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed">
            <MathText content={q.context} />
          </div>
          <p className="text-xs text-slate-500 italic">
            * Barem điểm Bộ GD&ĐT: Đúng 1 ý: 0.1đ | Đúng 2 ý: 0.25đ | Đúng 3 ý: 0.5đ | Đúng cả 4 ý: 1.0đ.
          </p>
        </div>

        {/* 4 Statements */}
        <div className="space-y-4 pt-2">
          {q.statements.map((st, idx) => {
            const userPick = userAnswers[idx];
            const isCorrect = userPick === st.answer;

            let rowStyle = "glass border-slate-200";
            if (submitted) {
              if (isCorrect) {
                rowStyle = "bg-emerald-50/60 border-emerald-300";
              } else {
                rowStyle = "bg-rose-50/60 border-rose-300";
              }
            }

            return (
              <div key={idx} className={`p-4 rounded-2xl border transition space-y-2 ${rowStyle}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1 text-sm font-medium text-slate-900">
                    <span className="font-display font-bold text-xs w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                      {["a)", "b)", "c)", "d)"][idx]}
                    </span>
                    <div className="leading-relaxed">
                      <MathText content={st.text} />
                    </div>
                  </div>

                  {/* True / False Toggle */}
                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                    <button
                      disabled={submitted}
                      onClick={() => handleSelect(idx, true)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
                        userPick === true
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                          : "bg-white text-slate-700 border-slate-200 hover:bg-emerald-50"
                      }`}
                    >
                      Đúng
                    </button>
                    <button
                      disabled={submitted}
                      onClick={() => handleSelect(idx, false)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
                        userPick === false
                          ? "bg-rose-600 text-white border-rose-600 shadow-sm"
                          : "bg-white text-slate-700 border-slate-200 hover:bg-rose-50"
                      }`}
                    >
                      Sai
                    </button>
                  </div>
                </div>

                {/* Explanation after submission */}
                {submitted && (
                  <div className="pt-2 text-xs text-slate-600 border-t border-slate-200/60 space-y-1">
                    <div>
                      <strong>Đáp án: </strong>
                      <span className="font-bold text-indigo-700">
                        {st.answer ? "Đúng" : "Sai"}
                      </span>
                    </div>
                    <div>
                      <strong>Giải thích: </strong>
                      <MathText content={st.explain} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="pt-4 flex items-center justify-between">
          <div>
            {submitted && (
              <span className="font-display text-sm font-bold text-indigo-700">
                Bạn đạt +{calculateStatementScore(statementCorrectCount).toFixed(2)}đ ({statementCorrectCount}/4 ý đúng)
              </span>
            )}
          </div>

          {!submitted ? (
            <button
              disabled={!allAnswered}
              onClick={handleSubmit}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm shadow-md transition ${
                allAnswered
                  ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-glow"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
              }`}
            >
              Chấm điểm câu này
            </button>
          ) : current + 1 < questions.length ? (
            <button
              onClick={next}
              className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md transition"
            >
              Câu tiếp theo →
            </button>
          ) : (
            <button
              onClick={onBack}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition"
            >
              Hoàn thành ôn luyện ✓
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
