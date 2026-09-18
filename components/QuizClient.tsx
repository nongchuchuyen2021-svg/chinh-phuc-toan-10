"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Question } from "@/lib/types";
import { saveAttempt } from "@/lib/progress";
import MathText from "@/components/MathText";
import Confetti from "@/components/Confetti";
import ProgressRing from "@/components/ProgressRing";
import { playClick, playCorrect, playWrong, playCelebration } from "@/lib/sound";

type ShuffledQuestion = Question & {
  shuffledOptions: string[];
  correctIndex: number;
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function prepare(questions: Question[]): ShuffledQuestion[] {
  return shuffle(questions).map((q) => {
    const order = shuffle([0, 1, 2, 3]);
    return {
      ...q,
      shuffledOptions: order.map((i) => q.options[i]),
      correctIndex: order.indexOf(q.answer),
    };
  });
}

const OPTION_LABELS = ["A", "B", "C", "D"];

export default function QuizClient({
  lessonId,
  lessonTitle,
  topicName,
  questions,
  onBack,
}: {
  lessonId: string;
  lessonTitle: string;
  topicName: string;
  questions: Question[];
  onBack?: () => void;
}) {
  const [quiz, setQuiz] = useState<ShuffledQuestion[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [viewMode, setViewMode] = useState<"single" | "list">("single");
  const [wrongQuestions, setWrongQuestions] = useState<ShuffledQuestion[]>([]);
  const [finished, setFinished] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const feedbackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQuiz(prepare(questions));
    setAnswers({});
    setCurrent(0);
    setWrongQuestions([]);
    setFinished(false);
  }, [questions]);

  const q = quiz[current];
  const answeredCount = Object.keys(answers).length;
  const correctCount = useMemo(() => {
    return Object.entries(answers).reduce((acc, [qIdxStr, pickedIdx]) => {
      const qIdx = Number(qIdxStr);
      return acc + (quiz[qIdx]?.correctIndex === pickedIdx ? 1 : 0);
    }, 0);
  }, [answers, quiz]);

  const scorePercent = quiz.length ? Math.round((correctCount / quiz.length) * 100) : 0;

  function pickAnswer(qIdx: number, optionIdx: number) {
    if (answers[qIdx] !== undefined) return; // already answered
    const targetQ = quiz[qIdx];
    if (!targetQ) return;

    setAnswers((prev) => ({ ...prev, [qIdx]: optionIdx }));

    if (optionIdx === targetQ.correctIndex) {
      playCorrect();
    } else {
      playWrong();
      setWrongQuestions((prev) => (prev.some((item) => item.id === targetQ.id) ? prev : [...prev, targetQ]));

      // Save mistake to localStorage for /on-tap
      try {
        const saved = localStorage.getItem("toan10_mistakes");
        const list = saved ? JSON.parse(saved) : [];
        const exists = list.some((item: { id: string }) => item.id === targetQ.id);
        if (!exists) {
          list.push({
            id: targetQ.id,
            source: `${topicName} — ${lessonTitle}`,
            question: targetQ.q,
            options: targetQ.shuffledOptions,
            correctAnswer: targetQ.correctIndex,
            explanation: targetQ.explain,
          });
          localStorage.setItem("toan10_mistakes", JSON.stringify(list));
        }
      } catch {}
    }

    if (viewMode === "single") {
      setTimeout(() => {
        feedbackRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);
    }
  }

  function next() {
    playClick();
    if (current + 1 >= quiz.length) {
      finishQuiz();
    } else {
      setCurrent((c) => c + 1);
    }
  }

  function prev() {
    playClick();
    setCurrent((c) => Math.max(0, c - 1));
  }

  function finishQuiz() {
    saveAttempt(lessonId, scorePercent);
    if (scorePercent >= 80) {
      playCelebration();
      setShowConfetti(true);
    }
    setFinished(true);
  }

  function restart() {
    playClick();
    setQuiz(prepare(questions));
    setCurrent(0);
    setAnswers({});
    setWrongQuestions([]);
    setFinished(false);
    setShowConfetti(false);
  }

  function practiceWrongOnly() {
    playClick();
    if (wrongQuestions.length === 0) return;
    setQuiz(wrongQuestions);
    setCurrent(0);
    setAnswers({});
    setWrongQuestions([]);
    setFinished(false);
    setShowConfetti(false);
  }

  if (finished) {
    return (
      <div className="max-w-2xl mx-auto space-y-6 pb-12 animate-fade-in-up">
        {showConfetti && <Confetti trigger={true} />}

        <div className="rounded-3xl border border-cyan/40 bg-void-card/95 p-6 sm:p-8 text-center shadow-glow-cyan backdrop-blur-xl space-y-5">
          <span className="text-5xl">{scorePercent >= 80 ? "🏆" : scorePercent >= 50 ? "👍" : "💪"}</span>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-star">
              {scorePercent >= 80 ? "Xuất sắc! Em đã nắm rất vững!" : scorePercent >= 50 ? "Khá tốt! Cần rèn luyện thêm" : "Đừng nản lòng, hãy làm lại nhé!"}
            </h2>
            <p className="text-xs sm:text-sm text-star-soft mt-1">
              {topicName} • {lessonTitle}
            </p>
          </div>

          <div className="flex justify-center py-2">
            <ProgressRing
              percent={scorePercent}
              size={90}
              strokeWidth={6}
              gradientFrom="#06B6D4"
              gradientTo="#10B981"
            >
              <div className="text-center">
                <span className="font-display text-2xl font-bold text-star">
                  {scorePercent}%
                </span>
                <span className="block text-[10px] font-mono text-star-mute">
                  {correctCount}/{quiz.length}
                </span>
              </div>
            </ProgressRing>
          </div>

          <p className="text-xs sm:text-sm text-star-soft">
            Đúng <strong className="text-emerald-glow">{correctCount}</strong> / {quiz.length} câu
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={restart}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan to-cyan-deep text-void-darker font-mono text-xs font-bold shadow-glow-cyan hover:opacity-95 transition"
            >
              🔄 Luyện lại bài này
            </button>

            {wrongQuestions.length > 0 && (
              <button
                onClick={practiceWrongOnly}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose to-rose-deep text-white font-mono text-xs font-bold shadow-glow-rose hover:opacity-90 transition"
              >
                🎯 Luyện lại {wrongQuestions.length} câu sai
              </button>
            )}

            <Link
              href="/on-tap"
              onClick={() => playClick()}
              className="px-5 py-2.5 rounded-xl bg-void-subtle border border-void-border text-star-soft font-mono text-xs font-bold hover:text-star hover:border-cyan/40 transition"
            >
              Sổ tay câu sai →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!quiz.length) {
    return (
      <div className="text-center py-16 text-star-mute font-mono text-xs">
        Đang chuẩn bị câu hỏi...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-5 pb-12">
      {/* Header Bar: Status & Mode Switcher */}
      <div className="rounded-2xl border border-void-border bg-void-card/90 p-4 shadow-card backdrop-blur-xl flex flex-wrap items-center justify-between gap-4">
        {/* Left: Progress count */}
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="flex h-7 px-2.5 items-center justify-center rounded-xl bg-cyan/15 border border-cyan/30 font-bold text-cyan-glow">
            {viewMode === "single" ? `Câu ${current + 1}/${quiz.length}` : `Toàn bộ ${quiz.length} câu`}
          </span>
          <span className="text-star-mute">
            Đã làm: <strong className="text-star">{answeredCount}</strong>/{quiz.length}
          </span>
          <span className="text-emerald-glow font-bold">
            ✓ Đúng: {correctCount}
          </span>
        </div>

        {/* Right: View Mode Toggle */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-void-subtle border border-void-border text-xs font-mono">
          <button
            onClick={() => {
              playClick();
              setViewMode("single");
            }}
            className={`px-3 py-1.5 rounded-lg font-bold transition ${
              viewMode === "single"
                ? "bg-cyan/20 text-cyan-glow border border-cyan/40 shadow-glow-cyan"
                : "text-star-mute hover:text-star"
            }`}
          >
            🎯 Từng câu
          </button>
          <button
            onClick={() => {
              playClick();
              setViewMode("list");
            }}
            className={`px-3 py-1.5 rounded-lg font-bold transition ${
              viewMode === "list"
                ? "bg-cyan/20 text-cyan-glow border border-cyan/40 shadow-glow-cyan"
                : "text-star-mute hover:text-star"
            }`}
          >
            📜 Toàn bộ danh sách
          </button>
        </div>
      </div>

      {/* Question Palette (Thanh chọn câu hỏi) */}
      <div className="rounded-2xl border border-void-border bg-void-card/90 p-4 shadow-card backdrop-blur-xl space-y-2">
        <div className="flex items-center justify-between font-mono text-[11px] text-star-mute">
          <span className="font-bold uppercase tracking-wider text-cyan-glow">
            Bảng điều hướng câu hỏi:
          </span>
          <span>Bấm vào số để chuyển câu ngay</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {quiz.map((item, idx) => {
            const ans = answers[idx];
            const isCurrent = current === idx && viewMode === "single";
            const isAnswered = ans !== undefined;
            const isCorrect = isAnswered && ans === item.correctIndex;

            let style = "border-void-border bg-void-subtle text-star-soft hover:border-cyan/40";
            if (isAnswered) {
              style = isCorrect
                ? "bg-emerald/20 border-emerald text-emerald-glow font-bold shadow-glow-emerald"
                : "bg-rose/20 border-rose text-rose-glow font-bold shadow-glow-rose";
            }
            if (isCurrent) {
              style += " ring-2 ring-cyan shadow-glow-cyan font-bold scale-105";
            }

            return (
              <button
                key={idx}
                onClick={() => {
                  playClick();
                  setCurrent(idx);
                  if (viewMode === "list") {
                    const el = document.getElementById(`quiz-q-${idx}`);
                    el?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }
                }}
                className={`h-8 min-w-[32px] px-2 rounded-xl border text-xs font-mono flex items-center justify-center transition-all ${style}`}
                title={`Câu ${idx + 1}: ${isAnswered ? (isCorrect ? "Đúng" : "Sai") : "Chưa làm"}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* ===== CHẾ ĐỘ 1: TỪNG CÂU (SINGLE QUESTION MODE) ===== */}
      {viewMode === "single" && q && (
        <div key={q.id} className="rounded-3xl border border-void-border bg-void-card/95 p-6 sm:p-8 shadow-card backdrop-blur-xl space-y-6 animate-fade-in-up">
          {/* Question Title */}
          <div className="space-y-2">
            <span className="inline-block text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-lg bg-cyan/15 text-cyan-glow border border-cyan/30">
              CÂU {current + 1} / {quiz.length}
            </span>
            <div className="text-base sm:text-lg font-medium text-star leading-relaxed whitespace-pre-line">
              <MathText content={q.q} />
            </div>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-3">
            {q.shuffledOptions.map((opt, idx) => {
              const picked = answers[current] ?? null;
              const isPicked = picked === idx;
              const isRight = idx === q.correctIndex;
              const revealed = picked !== null;

              let btnStyle = "bg-void-subtle border-void-border text-star-soft hover:border-cyan/40 hover:text-star";
              if (revealed) {
                if (isRight) {
                  btnStyle = "bg-emerald/20 border-emerald text-emerald-glow font-bold shadow-glow-emerald";
                } else if (isPicked) {
                  btnStyle = "bg-rose/20 border-rose text-rose-glow font-bold shadow-glow-rose";
                } else {
                  btnStyle = "opacity-40 border-void-border text-star-mute";
                }
              }

              return (
                <button
                  key={idx}
                  disabled={revealed}
                  onClick={() => pickAnswer(current, idx)}
                  className={`flex items-start gap-3.5 rounded-2xl border-2 p-4 text-left text-sm transition-all duration-200 ${btnStyle} ${
                    revealed ? "cursor-default" : "cursor-pointer"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold ${
                      revealed && isRight
                        ? "bg-emerald text-white"
                        : revealed && isPicked
                        ? "bg-rose text-white"
                        : "bg-void-card border border-void-border text-star-mute"
                    }`}
                  >
                    {OPTION_LABELS[idx]}
                  </span>
                  <span className="flex-1 pt-0.5 leading-relaxed">
                    <MathText content={opt} />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Explanation Card */}
          {answers[current] !== undefined && (
            <div ref={feedbackRef} className="p-4 sm:p-5 rounded-2xl bg-void-subtle/80 border border-void-border text-xs sm:text-sm space-y-1.5 animate-fade-in-up">
              <p className="font-bold text-cyan-glow flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider">
                <span>💡 Giải thích chi tiết:</span>
              </p>
              <div className="text-star-soft leading-relaxed whitespace-pre-line">
                <MathText content={q.explain} />
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={prev}
              disabled={current === 0}
              className={`px-5 py-2.5 rounded-2xl border border-void-border font-mono text-xs font-bold transition flex items-center gap-1.5 ${
                current === 0
                  ? "opacity-30 cursor-not-allowed text-star-mute"
                  : "bg-void-subtle text-star-soft hover:text-white hover:border-cyan/40"
              }`}
            >
              <span>←</span>
              <span>Câu trước</span>
            </button>

            <div className="flex items-center gap-3">
              {current + 1 < quiz.length ? (
                <button
                  onClick={next}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan to-cyan-deep text-void-darker font-mono text-xs font-bold shadow-glow-cyan hover:opacity-95 transition transform hover:scale-105 flex items-center gap-2"
                >
                  <span>Câu tiếp theo</span>
                  <span>→</span>
                </button>
              ) : (
                <button
                  onClick={finishQuiz}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald to-emerald-deep text-white font-mono text-xs font-bold shadow-glow-emerald hover:opacity-95 transition transform hover:scale-105 flex items-center gap-2"
                >
                  <span>Hoàn thành & Xem kết quả</span>
                  <span>🏆</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ===== CHẾ ĐỘ 2: TOÀN BỘ DANH SÁCH (FULL LIST MODE) ===== */}
      {viewMode === "list" && (
        <div className="space-y-6">
          {quiz.map((item, qIdx) => {
            const picked = answers[qIdx] ?? null;

            return (
              <div
                key={item.id}
                id={`quiz-q-${qIdx}`}
                className={`rounded-3xl border p-6 sm:p-8 space-y-5 transition duration-200 backdrop-blur-xl shadow-card ${
                  picked !== null
                    ? picked === item.correctIndex
                      ? "border-emerald/40 bg-void-card/95"
                      : "border-rose/40 bg-void-card/95"
                    : "border-void-border bg-void-card/95 hover:border-cyan/30"
                }`}
              >
                {/* Question Title */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="inline-block text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-lg bg-cyan/15 text-cyan-glow border border-cyan/30">
                      CÂU {qIdx + 1}
                    </span>
                    {picked !== null && (
                      <span className={`font-mono text-xs font-bold ${
                        picked === item.correctIndex ? "text-emerald-glow" : "text-rose-glow"
                      }`}>
                        {picked === item.correctIndex ? "✓ Chính xác" : "✕ Chưa đúng"}
                      </span>
                    )}
                  </div>
                  <div className="text-base sm:text-lg font-medium text-star leading-relaxed whitespace-pre-line">
                    <MathText content={item.q} />
                  </div>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 gap-3">
                  {item.shuffledOptions.map((opt, optIdx) => {
                    const isPicked = picked === optIdx;
                    const isRight = optIdx === item.correctIndex;
                    const revealed = picked !== null;

                    let btnStyle = "bg-void-subtle border-void-border text-star-soft hover:border-cyan/40 hover:text-star";
                    if (revealed) {
                      if (isRight) {
                        btnStyle = "bg-emerald/20 border-emerald text-emerald-glow font-bold shadow-glow-emerald";
                      } else if (isPicked) {
                        btnStyle = "bg-rose/20 border-rose text-rose-glow font-bold shadow-glow-rose";
                      } else {
                        btnStyle = "opacity-40 border-void-border text-star-mute";
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={revealed}
                        onClick={() => pickAnswer(qIdx, optIdx)}
                        className={`flex items-start gap-3.5 rounded-2xl border-2 p-3.5 text-left text-sm transition-all duration-200 ${btnStyle} ${
                          revealed ? "cursor-default" : "cursor-pointer"
                        }`}
                      >
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold ${
                            revealed && isRight
                              ? "bg-emerald text-white"
                              : revealed && isPicked
                              ? "bg-rose text-white"
                              : "bg-void-card border border-void-border text-star-mute"
                          }`}
                        >
                          {OPTION_LABELS[optIdx]}
                        </span>
                        <span className="flex-1 pt-0.5 leading-relaxed">
                          <MathText content={opt} />
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {picked !== null && (
                  <div className="p-4 rounded-2xl bg-void-subtle/80 border border-void-border text-xs sm:text-sm space-y-1.5 animate-fade-in-up">
                    <p className="font-bold text-cyan-glow flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider">
                      <span>💡 Giải thích:</span>
                    </p>
                    <div className="text-star-soft leading-relaxed whitespace-pre-line">
                      <MathText content={item.explain} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Finish Button at bottom of list */}
          <div className="flex justify-center pt-4">
            <button
              onClick={finishQuiz}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan to-emerald text-void-darker font-mono text-sm font-bold shadow-glow-cyan hover:scale-105 transition"
            >
              Hoàn thành bài luyện tập ({answeredCount}/{quiz.length} câu) →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
