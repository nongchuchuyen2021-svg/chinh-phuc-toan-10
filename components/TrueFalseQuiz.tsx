"use client";

import { useState } from "react";
import type { TFQuestion } from "@/lib/types";
import MathText from "@/components/MathText";
import Confetti from "@/components/Confetti";
import { playClick, playCorrect, playWrong, playCelebration } from "@/lib/sound";

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
  const [finished, setFinished] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const q = questions[current];

  function handleSelect(statementIdx: number, value: boolean) {
    if (submitted) return;
    playClick();
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

    if (correct >= 3) {
      playCorrect();
    } else {
      playWrong();
    }
  }

  function next() {
    playClick();
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setUserAnswers({});
      setSubmitted(false);
    } else {
      setFinished(true);
      const maxPossible = questions.length;
      if (totalScore / maxPossible >= 0.7) {
        playCelebration();
        setShowConfetti(true);
      }
    }
  }

  function restart() {
    playClick();
    setCurrent(0);
    setUserAnswers({});
    setSubmitted(false);
    setTotalScore(0);
    setFinished(false);
    setShowConfetti(false);
  }

  if (!q) {
    return (
      <div className="text-center py-20 bg-void-card/60 rounded-3xl border border-void-border p-8">
        <p className="text-star-mute">Chưa có câu hỏi đúng/sai cho bài học này.</p>
        {onBack && (
          <button
            onClick={onBack}
            className="mt-4 px-4 py-2 bg-cyan text-white rounded-xl text-xs font-semibold"
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

  if (finished) {
    const maxScore = questions.length * 1.0;
    const pct = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;

    return (
      <div className="max-w-2xl mx-auto space-y-6 pb-12 animate-fade-in-up">
        {showConfetti && <Confetti trigger={true} />}

        <div className="rounded-3xl border border-emerald/40 bg-void-card/95 p-6 sm:p-8 text-center shadow-glow-emerald backdrop-blur-xl space-y-5">
          <span className="text-5xl">{pct >= 80 ? "🏆" : pct >= 50 ? "👍" : "💪"}</span>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-star">
              Hoàn thành phần thi Đúng / Sai!
            </h2>
            <p className="text-xs sm:text-sm text-star-soft mt-1">
              Barem điểm Bộ GD&ĐT: 0.1 - 0.25 - 0.5 - 1.0 điểm
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-void-subtle border border-void-border inline-block px-8">
            <span className="block text-3xl font-mono font-bold text-emerald-glow">
              {totalScore.toFixed(2)} / {maxScore.toFixed(1)} điểm
            </span>
            <span className="text-xs text-star-mute">Đạt {pct}%</span>
          </div>

          <div className="flex justify-center gap-3 pt-3">
            <button
              onClick={restart}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald to-cyan text-white font-mono text-xs font-bold shadow-glow-emerald hover:opacity-90 transition"
            >
              🔄 Luyện lại dạng Đúng/Sai
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      {/* Progress & Score Bar */}
      <div className="rounded-2xl border border-void-border bg-void-card/90 p-4 shadow-card backdrop-blur-xl flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-emerald/15 border border-emerald/30 text-xs font-mono font-bold text-emerald-glow">
            {current + 1}
          </span>
          <span className="text-xs font-mono text-star-soft">
            / {questions.length} câu Đúng/Sai
          </span>
        </div>

        <div className="text-xs font-mono text-emerald-glow font-bold">
          Tổng điểm: {totalScore.toFixed(2)}
        </div>
      </div>

      {/* Context Card */}
      <div key={q.id} className="rounded-3xl border border-void-border bg-void-card/95 p-6 sm:p-8 shadow-card backdrop-blur-xl space-y-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald/10 border border-emerald/30 text-emerald-glow text-[11px] font-mono font-bold uppercase tracking-wider mb-3">
            ⚖️ Dạng thức Đúng / Sai 4 mệnh đề
          </div>
          <div className="text-base sm:text-lg font-medium text-star leading-relaxed">
            <MathText content={q.context} />
          </div>
        </div>

        {/* 4 Statements */}
        <div className="space-y-4 pt-2">
          {q.statements.map((st, idx) => {
            const userPick = userAnswers[idx];
            const isRight = userPick === st.answer;

            return (
              <div
                key={idx}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 ${
                  submitted
                    ? isRight
                      ? "bg-emerald/10 border-emerald/40"
                      : "bg-rose/10 border-rose/40"
                    : "bg-void-subtle border-void-border"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <span className="w-6 h-6 rounded-full bg-void-card border border-void-border flex items-center justify-center font-mono text-xs font-bold text-cyan-glow shrink-0 mt-0.5">
                      {["a", "b", "c", "d"][idx]}
                    </span>
                    <div className="text-xs sm:text-sm text-star leading-relaxed">
                      <MathText content={st.text} />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                    <button
                      disabled={submitted}
                      onClick={() => handleSelect(idx, true)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold border transition ${
                        userPick === true
                          ? "bg-emerald/20 border-emerald text-emerald-glow shadow-glow-emerald"
                          : "bg-void-card border-void-border text-star-soft hover:text-star hover:border-emerald/30"
                      }`}
                    >
                      Đúng
                    </button>
                    <button
                      disabled={submitted}
                      onClick={() => handleSelect(idx, false)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold border transition ${
                        userPick === false
                          ? "bg-rose/20 border-rose text-rose-glow shadow-glow-rose"
                          : "bg-void-card border-void-border text-star-soft hover:text-star hover:border-rose/30"
                      }`}
                    >
                      Sai
                    </button>
                  </div>
                </div>

                {/* Explanation */}
                {submitted && (
                  <div className="mt-3 pt-3 border-t border-void-border/70 text-xs text-star-soft leading-relaxed flex items-start gap-2">
                    <span className={st.answer ? "text-emerald-glow font-bold" : "text-rose-glow font-bold"}>
                      Đáp án: {st.answer ? "Đúng" : "Sai"}.
                    </span>
                    <span>
                      <MathText content={st.explain} />
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="pt-4 flex items-center justify-between border-t border-void-border/70">
          {!submitted ? (
            <button
              disabled={!allAnswered}
              onClick={handleSubmit}
              className={`px-6 py-3 rounded-2xl font-display font-bold text-xs sm:text-sm transition ${
                allAnswered
                  ? "bg-gradient-to-r from-emerald to-cyan text-white shadow-glow-emerald hover:opacity-95 transform hover:scale-105"
                  : "bg-void-subtle border border-void-border text-star-mute cursor-not-allowed"
              }`}
            >
              Chấm điểm câu này
            </button>
          ) : (
            <div className="flex items-center justify-between w-full">
              <span className="text-xs font-mono text-cyan-glow">
                Đúng {statementCorrectCount}/4 ý • +{calculateStatementScore(statementCorrectCount)} điểm
              </span>
              <button
                onClick={next}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan to-violet text-white font-display font-bold text-xs sm:text-sm shadow-glow-cyan hover:opacity-95 transition transform hover:scale-105"
              >
                {current + 1 < questions.length ? "Câu tiếp theo →" : "Xem tổng kết →"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
