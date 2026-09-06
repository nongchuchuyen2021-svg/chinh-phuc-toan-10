"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { MOCK_EXAM_INFO, MOCK_EXAM_QUESTIONS } from "@/data/mockExam";
import type { MockExamQuestion } from "@/lib/types";
import MathText from "@/components/MathText";

export default function MockExamClient() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(MOCK_EXAM_INFO.durationMinutes * 60);

  // User answers state
  const [part1Answers, setPart1Answers] = useState<Record<string, number>>({});
  const [part2Answers, setPart2Answers] = useState<Record<string, Record<number, boolean>>>({});
  const [part3Answers, setPart3Answers] = useState<Record<string, string>>({});

  // Active question navigation
  const [activeQId, setActiveQId] = useState<string>(MOCK_EXAM_QUESTIONS[0].id);

  // Countdown timer
  useEffect(() => {
    if (!started || submitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [started, submitted]);

  function formatTime(seconds: number) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }

  function handlePart1Select(qId: string, optIdx: number) {
    if (submitted) return;
    setPart1Answers((prev) => ({ ...prev, [qId]: optIdx }));
  }

  function handlePart2Select(qId: string, statementIdx: number, val: boolean) {
    if (submitted) return;
    setPart2Answers((prev) => ({
      ...prev,
      [qId]: {
        ...(prev[qId] || {}),
        [statementIdx]: val,
      },
    }));
  }

  function handlePart3Input(qId: string, val: string) {
    if (submitted) return;
    setPart3Answers((prev) => ({ ...prev, [qId]: val }));
  }

  // Calculate scores
  function computeResults() {
    let p1Score = 0;
    let p2Score = 0;
    let p3Score = 0;

    MOCK_EXAM_QUESTIONS.forEach((q) => {
      if (q.part === 1) {
        if (part1Answers[q.id] === q.answer) {
          p1Score += 0.25;
        }
      } else if (q.part === 2 && q.statements) {
        const uAns = part2Answers[q.id] || {};
        let correctCount = 0;
        q.statements.forEach((st, idx) => {
          if (uAns[idx] === st.answer) correctCount++;
        });
        if (correctCount === 1) p2Score += 0.1;
        else if (correctCount === 2) p2Score += 0.25;
        else if (correctCount === 3) p2Score += 0.5;
        else if (correctCount === 4) p2Score += 1.0;
      } else if (q.part === 3) {
        const uAns = (part3Answers[q.id] || "").trim().toLowerCase();
        const expected = String(q.answer).trim().toLowerCase();
        if (uAns === expected) {
          p3Score += 0.5;
        }
      }
    });

    const total = Number((p1Score + p2Score + p3Score).toFixed(2));
    return { p1Score, p2Score, p3Score, total };
  }

  function handleSubmit() {
    setSubmitted(true);
    const { total } = computeResults();
    if (total >= 8.0) {
      try {
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
      } catch {}
    }
  }

  const results = submitted ? computeResults() : null;

  // ─── Welcome screen before starting ──────────────────────────────────────
  if (!started) {
    return (
      <main className="cosmos relative min-h-screen py-10 px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl glass text-xs font-semibold text-slate-700 hover:bg-indigo-50 transition"
          >
            ← Quay lại trang chủ
          </Link>

          <div className="glass rounded-3xl p-8 sm:p-12 space-y-6 shadow-xl border border-indigo-100 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-nebula to-plasma text-white flex items-center justify-center text-4xl shadow-glow">
              ⏱️
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-nebula">
                Phòng Thi Thử Trực Tuyến
              </span>
              <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900">
                {MOCK_EXAM_INFO.title}
              </h1>
              <p className="text-sm text-slate-600 max-w-xl mx-auto">
                {MOCK_EXAM_INFO.subtitle}
              </p>
            </div>

            {/* Exam specs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto text-left">
              <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-1">
                <div className="text-xs font-medium text-slate-500">Thời gian làm bài</div>
                <div className="font-display text-xl font-bold text-slate-900">
                  {MOCK_EXAM_INFO.durationMinutes} phút
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100 space-y-1">
                <div className="text-xs font-medium text-slate-500">Số lượng câu hỏi</div>
                <div className="font-display text-xl font-bold text-slate-900">
                  {MOCK_EXAM_INFO.totalQuestions} câu (3 phần)
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-1">
                <div className="text-xs font-medium text-slate-500">Thang điểm chuẩn</div>
                <div className="font-display text-xl font-bold text-slate-900">
                  {MOCK_EXAM_INFO.maxScore.toFixed(1)} điểm
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
              * Hệ thống sẽ tự động tính điểm theo thang barem mới của Bộ GD&ĐT ngay sau khi nộp bài hoặc khi hết giờ.
            </div>

            <div className="pt-2">
              <button
                onClick={() => setStarted(true)}
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-nebula to-plasma text-white font-display font-bold text-base shadow-glow hover:opacity-95 transition transform hover:scale-105"
              >
                Bắt đầu làm bài thi ngay →
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ─── Exam In Progress / Submitted ─────────────────────────────────────────
  return (
    <main className="cosmos relative min-h-screen py-6 px-4 pb-20">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Sticky Header Bar */}
        <div className="sticky top-20 z-40 glass-bright rounded-2xl p-4 shadow-md border border-indigo-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs font-semibold text-slate-600 hover:text-nebula transition"
            >
              ← Thoát
            </Link>
            <span className="font-display text-xs sm:text-sm font-bold text-slate-900 hidden sm:inline">
              Đề thi thử Toán 10
            </span>
          </div>

          <div className="flex items-center gap-4">
            {!submitted ? (
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 font-mono font-bold text-sm sm:text-base">
                <span>⏳</span>
                <span>{formatTime(timeLeft)}</span>
              </div>
            ) : (
              <div className="px-4 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-display font-bold text-sm">
                Tổng điểm: {results?.total} / 10.0đ
              </div>
            )}

            {!submitted && (
              <button
                onClick={() => {
                  if (confirm("Bạn có chắc chắn muốn nộp bài thi ngay bây giờ?")) {
                    handleSubmit();
                  }
                }}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm shadow-md transition"
              >
                Nộp bài thi
              </button>
            )}
          </div>
        </div>

        {/* Results Banner when Submitted */}
        {submitted && results && (
          <div className="glass rounded-3xl p-6 sm:p-8 space-y-4 border border-emerald-200 bg-emerald-50/20 text-center animate-pop-in">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              KẾT QUẢ THI THỬ TRỰC TUYẾN
            </span>
            <div className="font-display text-4xl sm:text-5xl font-extrabold text-emerald-600">
              {results.total} / 10.0 điểm
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg mx-auto text-xs pt-2">
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                Phần I (MCQ): <strong>{results.p1Score.toFixed(2)}/3.0đ</strong>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                Phần II (Đúng/Sai): <strong>{results.p2Score.toFixed(2)}/4.0đ</strong>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                Phần III (Trả lời ngắn): <strong>{results.p3Score.toFixed(2)}/3.0đ</strong>
              </div>
            </div>
            <p className="text-xs text-slate-500 pt-2">
              Xem lại toàn bộ câu hỏi và lời giải chi tiết của từng phần dưới đây.
            </p>
          </div>
        )}

        {/* ─── Question List By Parts ────────────────────────────────────── */}
        <div className="space-y-10">
          {/* PHẦN I */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold flex items-center justify-center text-sm">
                I
              </div>
              <div>
                <h2 className="font-display font-bold text-lg text-slate-900">
                  PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn
                </h2>
                <p className="text-xs text-slate-500">
                  12 câu hỏi (mỗi câu đúng được 0.25 điểm). Thí sinh chọn 1 phương án duy nhất.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {MOCK_EXAM_QUESTIONS.filter((q) => q.part === 1).map((q, idx) => {
                const userPick = part1Answers[q.id];
                const isCorrect = userPick === q.answer;

                return (
                  <div
                    key={q.id}
                    className="glass rounded-2xl p-5 sm:p-6 space-y-4 border border-indigo-100/70 shadow-sm"
                  >
                    <div className="flex items-start gap-2">
                      <span className="font-display font-bold text-xs px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 shrink-0 mt-0.5">
                        Câu {idx + 1}
                      </span>
                      <div className="text-sm font-semibold text-slate-900 leading-relaxed">
                        <MathText content={q.q} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {q.options?.map((opt, oIdx) => {
                        const isSelected = userPick === oIdx;
                        let btnStyle = "glass border-slate-200 hover:bg-indigo-50/40";
                        if (submitted) {
                          if (oIdx === q.answer) {
                            btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold";
                          } else if (isSelected) {
                            btnStyle = "bg-rose-50 border-rose-500 text-rose-900";
                          } else {
                            btnStyle = "opacity-50 border-slate-200";
                          }
                        } else if (isSelected) {
                          btnStyle = "bg-indigo-50 border-indigo-500 text-indigo-900 ring-1 ring-indigo-500";
                        }

                        return (
                          <button
                            key={oIdx}
                            disabled={submitted}
                            onClick={() => handlePart1Select(q.id, oIdx)}
                            className={`p-3 rounded-xl border text-left text-xs sm:text-sm flex items-center gap-2.5 transition ${btnStyle}`}
                          >
                            <span className="w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold shrink-0">
                              {["A", "B", "C", "D"][oIdx]}
                            </span>
                            <MathText content={opt} />
                          </button>
                        );
                      })}
                    </div>

                    {submitted && (
                      <div className="pt-2 text-xs text-slate-600 bg-white/70 p-3 rounded-xl border border-slate-200 leading-relaxed">
                        <strong className="text-slate-900">Giải thích: </strong>
                        <MathText content={q.explain} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* PHẦN II */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-600 text-white font-bold flex items-center justify-center text-sm">
                II
              </div>
              <div>
                <h2 className="font-display font-bold text-lg text-slate-900">
                  PHẦN II. Câu trắc nghiệm Đúng / Sai
                </h2>
                <p className="text-xs text-slate-500">
                  4 câu hỏi (mỗi câu gồm 4 ý a, b, c, d). Điểm tối đa mỗi câu là 1.0 điểm theo barem Bộ GD&ĐT.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {MOCK_EXAM_QUESTIONS.filter((q) => q.part === 2).map((q, idx) => {
                const uAns = part2Answers[q.id] || {};

                return (
                  <div
                    key={q.id}
                    className="glass rounded-2xl p-5 sm:p-6 space-y-4 border border-sky-100 shadow-sm"
                  >
                    <div className="flex items-start gap-2">
                      <span className="font-display font-bold text-xs px-2 py-0.5 rounded bg-sky-50 text-sky-700 shrink-0 mt-0.5">
                        Câu {idx + 1}
                      </span>
                      <div className="text-sm font-semibold text-slate-900 leading-relaxed">
                        <MathText content={q.q} />
                      </div>
                    </div>

                    <div className="space-y-3 pt-1">
                      {q.statements?.map((st, sIdx) => {
                        const val = uAns[sIdx];
                        const isRight = val === st.answer;

                        let rowStyle = "glass border-slate-200";
                        if (submitted) {
                          rowStyle = isRight ? "bg-emerald-50/60 border-emerald-300" : "bg-rose-50/60 border-rose-300";
                        }

                        return (
                          <div key={sIdx} className={`p-3 rounded-xl border space-y-1.5 ${rowStyle}`}>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-800">
                                <span className="font-bold text-sky-700">{["a)", "b)", "c)", "d)"][sIdx]}</span>
                                <MathText content={st.text} />
                              </div>

                              <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                                <button
                                  disabled={submitted}
                                  onClick={() => handlePart2Select(q.id, sIdx, true)}
                                  className={`px-3 py-1 rounded-lg text-xs font-bold transition border ${
                                    val === true
                                      ? "bg-emerald-600 text-white border-emerald-600"
                                      : "bg-white text-slate-700 border-slate-200 hover:bg-emerald-50"
                                  }`}
                                >
                                  Đúng
                                </button>
                                <button
                                  disabled={submitted}
                                  onClick={() => handlePart2Select(q.id, sIdx, false)}
                                  className={`px-3 py-1 rounded-lg text-xs font-bold transition border ${
                                    val === false
                                      ? "bg-rose-600 text-white border-rose-600"
                                      : "bg-white text-slate-700 border-slate-200 hover:bg-rose-50"
                                  }`}
                                >
                                  Sai
                                </button>
                              </div>
                            </div>

                            {submitted && (
                              <div className="text-xs text-slate-600 pt-1 border-t border-slate-200/60">
                                <strong>Đáp án: </strong>
                                <span className="font-bold text-sky-700">{st.answer ? "Đúng" : "Sai"}</span> — <MathText content={st.explain} />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* PHẦN III */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-600 text-white font-bold flex items-center justify-center text-sm">
                III
              </div>
              <div>
                <h2 className="font-display font-bold text-lg text-slate-900">
                  PHẦN III. Câu trắc nghiệm trả lời ngắn
                </h2>
                <p className="text-xs text-slate-500">
                  6 câu hỏi (mỗi câu đúng được 0.5 điểm). Thí sinh điền đáp số vào ô trống.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {MOCK_EXAM_QUESTIONS.filter((q) => q.part === 3).map((q, idx) => {
                const uAns = part3Answers[q.id] || "";
                const isRight = submitted && uAns.trim().toLowerCase() === String(q.answer).trim().toLowerCase();

                return (
                  <div
                    key={q.id}
                    className="glass rounded-2xl p-5 sm:p-6 space-y-3 border border-amber-100 shadow-sm"
                  >
                    <div className="flex items-start gap-2">
                      <span className="font-display font-bold text-xs px-2 py-0.5 rounded bg-amber-50 text-amber-700 shrink-0 mt-0.5">
                        Câu {idx + 1}
                      </span>
                      <div className="text-sm font-semibold text-slate-900 leading-relaxed">
                        <MathText content={q.q} />
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-1">
                      <span className="text-xs font-semibold text-slate-600">Đáp số:</span>
                      <input
                        type="text"
                        disabled={submitted}
                        value={uAns}
                        onChange={(e) => handlePart3Input(q.id, e.target.value)}
                        placeholder="Nhập kết quả..."
                        className="px-3.5 py-1.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-mono focus:ring-2 focus:ring-amber-500 outline-none w-48"
                      />
                      {submitted && (
                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded ${
                            isRight ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                          }`}
                        >
                          {isRight ? "✓ Đúng" : `✗ Sai (Đáp án: ${q.answer})`}
                        </span>
                      )}
                    </div>

                    {submitted && (
                      <div className="pt-1 text-xs text-slate-600 bg-white/70 p-3 rounded-xl border border-slate-200">
                        <strong>Hướng dẫn giải: </strong>
                        <MathText content={q.explain} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* Bottom submit button */}
        {!submitted && (
          <div className="pt-6 flex justify-center">
            <button
              onClick={() => {
                if (confirm("Bạn có chắc chắn muốn nộp bài thi ngay bây giờ?")) {
                  handleSubmit();
                }
              }}
              className="px-10 py-3.5 rounded-2xl bg-gradient-to-r from-nebula to-plasma text-white font-display font-bold text-sm shadow-glow hover:opacity-95 transition"
            >
              Hoàn thành và nộp bài thi →
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
