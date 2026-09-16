"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MOCK_EXAM_INFO, MOCK_EXAM_QUESTIONS } from "@/data/mockExam";
import type { MockExamQuestion } from "@/lib/types";
import MathText from "@/components/MathText";
import Confetti from "@/components/Confetti";
import ProgressRing from "@/components/ProgressRing";
import { playClick, playCorrect, playWrong, playCelebration } from "@/lib/sound";

export default function MockExamClient() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(MOCK_EXAM_INFO.durationMinutes * 60);
  const [showConfetti, setShowConfetti] = useState(false);

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
    playClick();
    setPart1Answers((prev) => ({ ...prev, [qId]: optIdx }));
  }

  function handlePart2Select(qId: string, statementIdx: number, val: boolean) {
    if (submitted) return;
    playClick();
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
      playCelebration();
      setShowConfetti(true);
    } else {
      playCorrect();
    }
  }

  const results = submitted ? computeResults() : null;

  // ─── Welcome screen before starting ──────────────────────────────────────
  if (!started) {
    return (
      <main className="relative min-h-screen py-10 px-4 max-w-3xl mx-auto">
        <div className="space-y-6">
          <Link
            href="/"
            onClick={() => playClick()}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-void-card border border-void-border text-xs font-mono font-bold text-star-soft hover:text-cyan-glow transition shadow-card"
          >
            ← Quay lại trang chủ
          </Link>

          <div className="rounded-3xl p-8 sm:p-12 space-y-6 shadow-card border border-void-border bg-void-card/95 text-center backdrop-blur-xl">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-violet to-cyan text-white flex items-center justify-center text-4xl shadow-glow-cyan animate-float">
              ⏱️
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-glow">
                Phòng Thi Thử Trực Tuyến
              </span>
              <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-star">
                {MOCK_EXAM_INFO.title}
              </h1>
              <p className="text-sm text-star-soft max-w-xl mx-auto">
                {MOCK_EXAM_INFO.subtitle}
              </p>
            </div>

            {/* Exam specs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto text-left">
              <div className="p-4 rounded-2xl bg-void-subtle border border-void-border space-y-1">
                <div className="text-xs font-mono text-star-mute">Thời gian làm bài</div>
                <div className="font-display text-xl font-bold text-cyan-glow">
                  {MOCK_EXAM_INFO.durationMinutes} phút
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-void-subtle border border-void-border space-y-1">
                <div className="text-xs font-mono text-star-mute">Số lượng câu hỏi</div>
                <div className="font-display text-xl font-bold text-violet-glow">
                  {MOCK_EXAM_INFO.totalQuestions} câu (3 phần)
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-void-subtle border border-void-border space-y-1">
                <div className="text-xs font-mono text-star-mute">Thang điểm chuẩn</div>
                <div className="font-display text-xl font-bold text-emerald-glow">
                  {MOCK_EXAM_INFO.maxScore.toFixed(1)} điểm
                </div>
              </div>
            </div>

            <div className="text-xs text-star-mute max-w-md mx-auto leading-relaxed">
              * Hệ thống chấm điểm tự động theo đúng định dạng barem 3 dạng thức câu hỏi mới nhất của Bộ GD&ĐT.
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  playClick();
                  setStarted(true);
                }}
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan to-violet text-white font-display font-bold text-base shadow-glow-cyan hover:opacity-95 transition transform hover:scale-105"
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
    <main className="relative min-h-screen py-6 px-4 pb-20 max-w-5xl mx-auto space-y-6">
      {showConfetti && <Confetti trigger={true} />}

      {/* Sticky Header Bar */}
      <div className="sticky top-16 z-30 rounded-2xl p-4 shadow-card border border-void-border bg-void-card/90 backdrop-blur-xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            onClick={() => playClick()}
            className="text-xs font-mono text-star-soft hover:text-cyan-glow transition"
          >
            ← Thoát
          </Link>
          <span className="font-display text-xs sm:text-sm font-bold text-star hidden sm:inline">
            Đề thi thử Toán 10
          </span>
        </div>

        <div className="flex items-center gap-4">
          {!submitted ? (
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-star-mute">Thời gian:</span>
              <span
                className={`font-mono font-bold text-sm sm:text-base px-3 py-1 rounded-xl border ${
                  timeLeft <= 300
                    ? "bg-rose/20 text-rose-glow border-rose/40 animate-pulse"
                    : "bg-void-subtle text-cyan-glow border-void-border"
                }`}
              >
                {formatTime(timeLeft)}
              </span>
            </div>
          ) : (
            <span className="font-mono text-xs font-bold text-emerald-glow px-3 py-1 rounded-xl bg-emerald/20 border border-emerald/30">
              ✓ Đã nộp bài
            </span>
          )}

          {!submitted && (
            <button
              onClick={() => {
                if (confirm("Em có chắc chắn muốn nộp bài thi không?")) {
                  handleSubmit();
                }
              }}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan to-violet text-white font-mono text-xs font-bold shadow-glow-cyan hover:opacity-90 transition"
            >
              Nộp bài
            </button>
          )}
        </div>
      </div>

      {/* Results Banner if Submitted */}
      {submitted && results && (
        <div className="rounded-3xl border border-cyan/40 bg-void-card/95 p-6 sm:p-8 shadow-glow-cyan backdrop-blur-xl space-y-5 animate-fade-in-up">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-glow">
                Kết quả bài thi thử
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-star">
                {results.total >= 8.0
                  ? "Xuất sắc! Thành tích đáng tự hào!"
                  : results.total >= 5.0
                  ? "Đạt yêu cầu! Tiếp tục cố gắng nhé"
                  : "Cần ôn tập lại các chuyên đề trọng tâm"}
              </h2>
              <p className="text-xs text-star-mute font-mono">
                Thang điểm chuẩn 10.0 • Bộ Giáo dục và Đào tạo 2025
              </p>
            </div>

            <div className="flex items-center gap-5">
              <ProgressRing
                percent={Math.round((results.total / 10) * 100)}
                size={84}
                strokeWidth={6}
                gradientFrom="#06B6D4"
                gradientTo="#10B981"
              >
                <span className="font-display text-lg font-bold text-star">
                  {results.total}
                </span>
              </ProgressRing>
            </div>
          </div>

          {/* Breakdown by Part */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs pt-2">
            <div className="p-3.5 rounded-2xl bg-void-subtle border border-void-border">
              <span className="text-star-mute block">Phần I (Trắc nghiệm):</span>
              <span className="text-base font-bold text-cyan-glow">
                {results.p1Score.toFixed(2)} / 3.0 điểm
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-void-subtle border border-void-border">
              <span className="text-star-mute block">Phần II (Đúng / Sai):</span>
              <span className="text-base font-bold text-emerald-glow">
                {results.p2Score.toFixed(2)} / 4.0 điểm
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-void-subtle border border-void-border">
              <span className="text-star-mute block">Phần III (Trả lời ngắn):</span>
              <span className="text-base font-bold text-amber-glow">
                {results.p3Score.toFixed(2)} / 3.0 điểm
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main Test Layout: Questions + Navigation Palette */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Left: Questions List */}
        <div className="lg:col-span-3 space-y-6">
          {MOCK_EXAM_QUESTIONS.map((q, idx) => {
            const isPart1 = q.part === 1;
            const isPart2 = q.part === 2;
            const isPart3 = q.part === 3;

            return (
              <div
                id={`q-${q.id}`}
                key={q.id}
                className="rounded-3xl border border-void-border bg-void-card/90 p-5 sm:p-7 shadow-card backdrop-blur-xl space-y-5"
              >
                {/* Question Header */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-cyan/15 border border-cyan/30 text-xs font-mono font-bold text-cyan-glow">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-mono text-star-mute">
                      {isPart1 ? "Trắc nghiệm 4 lựa chọn" : isPart2 ? "Đúng / Sai 4 ý" : "Trả lời ngắn"}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-semibold text-star-soft">
                    {isPart1 ? "0.25 đ" : isPart2 ? "1.0 đ" : "0.5 đ"}
                  </span>
                </div>

                {/* Question Content */}
                <div className="text-sm sm:text-base font-medium text-star leading-relaxed">
                  <MathText content={q.q} />
                </div>

                {/* ─── Part 1: MCQ ─── */}
                {isPart1 && q.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {q.options.map((opt, oIdx) => {
                      const isSelected = part1Answers[q.id] === oIdx;
                      const isCorrect = q.answer === oIdx;

                      let style = "bg-void-subtle border-void-border text-star-soft hover:border-cyan/40 hover:text-star";
                      if (submitted) {
                        if (isCorrect) style = "bg-emerald/20 border-emerald text-emerald-glow font-bold shadow-glow-emerald";
                        else if (isSelected) style = "bg-rose/20 border-rose text-rose-glow font-bold shadow-glow-rose";
                        else style = "opacity-40 border-void-border text-star-mute";
                      } else if (isSelected) {
                        style = "bg-cyan/20 border-cyan text-cyan-glow font-bold shadow-glow-cyan";
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={submitted}
                          onClick={() => handlePart1Select(q.id, oIdx)}
                          className={`p-3.5 rounded-2xl border-2 text-left text-xs sm:text-sm flex items-start gap-3 transition ${style}`}
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-void-card border border-void-border font-mono text-xs font-bold text-star-mute">
                            {["A", "B", "C", "D"][oIdx]}
                          </span>
                          <span className="flex-1 pt-0.5 leading-relaxed">
                            <MathText content={opt} />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* ─── Part 2: True/False ─── */}
                {isPart2 && q.statements && (
                  <div className="space-y-3">
                    {q.statements.map((st, sIdx) => {
                      const userVal = part2Answers[q.id]?.[sIdx];
                      const isRight = userVal === st.answer;

                      return (
                        <div
                          key={sIdx}
                          className={`p-3.5 sm:p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                            submitted
                              ? isRight
                                ? "bg-emerald/10 border-emerald/30"
                                : "bg-rose/10 border-rose/30"
                              : "bg-void-subtle border-void-border"
                          }`}
                        >
                          <div className="flex items-start gap-2.5 flex-1">
                            <span className="w-6 h-6 rounded-full bg-void-card border border-void-border flex items-center justify-center font-mono text-xs font-bold text-cyan-glow shrink-0 mt-0.5">
                              {["a", "b", "c", "d"][sIdx]}
                            </span>
                            <div className="text-xs sm:text-sm text-star leading-relaxed">
                              <MathText content={st.text} />
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                            <button
                              disabled={submitted}
                              onClick={() => handlePart2Select(q.id, sIdx, true)}
                              className={`px-3 py-1 rounded-xl text-xs font-mono font-bold border transition ${
                                userVal === true
                                  ? "bg-emerald/20 border-emerald text-emerald-glow shadow-glow-emerald"
                                  : "bg-void-card border-void-border text-star-soft hover:text-star"
                              }`}
                            >
                              Đúng
                            </button>
                            <button
                              disabled={submitted}
                              onClick={() => handlePart2Select(q.id, sIdx, false)}
                              className={`px-3 py-1 rounded-xl text-xs font-mono font-bold border transition ${
                                userVal === false
                                  ? "bg-rose/20 border-rose text-rose-glow shadow-glow-rose"
                                  : "bg-void-card border-void-border text-star-soft hover:text-star"
                              }`}
                            >
                              Sai
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* ─── Part 3: Short Answer ─── */}
                {isPart3 && (
                  <div className="space-y-3">
                    <div className="flex gap-3 max-w-sm">
                      <input
                        type="text"
                        disabled={submitted}
                        value={part3Answers[q.id] || ""}
                        onChange={(e) => handlePart3Input(q.id, e.target.value)}
                        placeholder="Nhập đáp số..."
                        className="flex-1 px-4 py-2 rounded-xl bg-void-subtle border border-void-border text-star text-xs sm:text-sm font-mono focus:outline-none focus:border-cyan/50 transition"
                      />
                    </div>
                  </div>
                )}

                {/* Solution Explanation if Submitted */}
                {submitted && (
                  <div className="p-4 rounded-2xl bg-void-subtle/80 border border-void-border text-xs sm:text-sm space-y-1.5 animate-fade-in-up">
                    <p className="font-bold text-cyan-glow flex items-center gap-1.5">
                      <span>💡</span>
                      <span>Lời giải chi tiết:</span>
                    </p>
                    <div className="text-star-soft leading-relaxed">
                      <MathText content={q.explain} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right: Question Navigation Palette */}
        <div className="lg:sticky lg:top-36 rounded-3xl border border-void-border bg-void-card/95 p-5 shadow-card backdrop-blur-xl space-y-4">
          <h3 className="font-display font-bold text-sm text-star">
            Mục lục câu hỏi
          </h3>

          <div className="grid grid-cols-5 gap-2">
            {MOCK_EXAM_QUESTIONS.map((q, idx) => {
              let isAnswered = false;
              if (q.part === 1) isAnswered = part1Answers[q.id] !== undefined;
              else if (q.part === 2) isAnswered = Object.keys(part2Answers[q.id] || {}).length === 4;
              else if (q.part === 3) isAnswered = !!(part3Answers[q.id] || "").trim();

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    playClick();
                    const el = document.getElementById(`q-${q.id}`);
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className={`h-8 rounded-xl font-mono text-xs font-bold border transition ${
                    isAnswered
                      ? "bg-cyan/20 border-cyan/40 text-cyan-glow shadow-glow-cyan"
                      : "bg-void-subtle border-void-border text-star-mute hover:text-star"
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-void-border/70 space-y-2 text-[11px] text-star-soft font-mono">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-md bg-cyan/20 border border-cyan/40"></span>
              <span>Đã trả lời</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-md bg-void-subtle border border-void-border"></span>
              <span>Chưa trả lời</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
