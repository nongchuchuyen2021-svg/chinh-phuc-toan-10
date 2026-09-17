"use client";

import { useEffect, useRef, useState } from "react";
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
  const [picked, setPicked] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongQuestions, setWrongQuestions] = useState<ShuffledQuestion[]>([]);
  const [finished, setFinished] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setQuiz(prepare(questions));
  }, [questions]);

  const q = quiz[current];
  const scorePercent = quiz.length ? Math.round((correctCount / quiz.length) * 100) : 0;

  function pick(index: number) {
    if (picked !== null || !q) return;
    setPicked(index);
    if (index === q.correctIndex) {
      playCorrect();
      setCorrectCount((c) => c + 1);
    } else {
      playWrong();
      setWrongQuestions((prev) => [...prev, q]);

      // Save mistake to localStorage for /on-tap
      try {
        const saved = localStorage.getItem("toan10_mistakes");
        const list = saved ? JSON.parse(saved) : [];
        const exists = list.some((item: { id: string }) => item.id === q.id);
        if (!exists) {
          list.push({
            id: q.id,
            source: `${topicName} — ${lessonTitle}`,
            question: q.q,
            options: q.shuffledOptions,
            correctAnswer: q.correctIndex,
            explanation: q.explain,
          });
          localStorage.setItem("toan10_mistakes", JSON.stringify(list));
        }
      } catch {}
    }
  }

  function next() {
    playClick();
    if (current + 1 >= quiz.length) {
      const percent = Math.round((correctCount / quiz.length) * 100);
      saveAttempt(lessonId, percent);
      if (percent >= 80) {
        playCelebration();
        setShowConfetti(true);
      }
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setPicked(null);
    }
  }

  function restart() {
    playClick();
    setQuiz(prepare(questions));
    setCurrent(0);
    setPicked(null);
    setCorrectCount(0);
    setWrongQuestions([]);
    setFinished(false);
    setShowConfetti(false);
  }

  function practiceWrongOnly() {
    playClick();
    if (wrongQuestions.length === 0) return;
    setQuiz(wrongQuestions);
    setCurrent(0);
    setPicked(null);
    setCorrectCount(0);
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
              <span className="font-display text-xl font-bold text-star">{scorePercent}%</span>
            </ProgressRing>
          </div>

          <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto text-center font-mono text-xs">
            <div className="p-3 rounded-2xl bg-emerald/10 border border-emerald/30 text-emerald-glow">
              <span className="block text-xl font-bold">{correctCount}</span>
              <span>Số câu đúng</span>
            </div>
            <div className="p-3 rounded-2xl bg-rose/10 border border-rose/30 text-rose-glow">
              <span className="block text-xl font-bold">{quiz.length - correctCount}</span>
              <span>Số câu sai</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              onClick={restart}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan to-cyan-deep text-white font-mono text-xs font-bold shadow-glow-cyan hover:opacity-90 transition"
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

  if (!q) {
    return (
      <div className="text-center py-16 text-star-mute">
        Đang chuẩn bị câu hỏi...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      {/* Progress Bar & Counter */}
      <div className="rounded-2xl border border-void-border bg-void-card/90 p-4 shadow-card backdrop-blur-xl flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-cyan/15 border border-cyan/30 text-xs font-mono font-bold text-cyan-glow">
            {current + 1}
          </span>
          <span className="text-xs font-mono text-star-soft">
            / {quiz.length} câu
          </span>
        </div>

        {/* Progress Bar */}
        <div className="flex-1 max-w-xs h-2 rounded-full bg-void-subtle overflow-hidden border border-void-border">
          <div
            className="h-full bg-gradient-to-r from-cyan to-emerald transition-all duration-300"
            style={{ width: `${((current + 1) / quiz.length) * 100}%` }}
          />
        </div>

        <div className="text-xs font-mono text-emerald-glow font-bold">
          Đúng: {correctCount}
        </div>
      </div>

      {/* Question Card */}
      <div key={q.id} className="rounded-3xl border border-void-border bg-void-card/95 p-6 sm:p-8 shadow-card backdrop-blur-xl space-y-6">
        <div className="text-base sm:text-lg font-medium text-star leading-relaxed">
          <MathText content={q.q} />
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 gap-3">
          {q.shuffledOptions.map((opt, idx) => {
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
                onClick={() => pick(idx)}
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
        {picked !== null && (
          <div className="p-4 sm:p-5 rounded-2xl bg-void-subtle/80 border border-void-border text-xs sm:text-sm space-y-1.5 animate-fade-in-up">
            <p className="font-bold text-cyan-glow flex items-center gap-1.5">
              <span>💡</span>
              <span>Giải thích chi tiết:</span>
            </p>
            <div className="text-star-soft leading-relaxed">
              <MathText content={q.explain} />
            </div>
          </div>
        )}

        {/* Next Question Button */}
        {picked !== null && (
          <div className="pt-2 flex justify-end">
            <button
              onClick={next}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan to-violet text-white font-display font-bold text-xs sm:text-sm shadow-glow-cyan hover:opacity-95 transition transform hover:scale-105 flex items-center gap-2"
            >
              <span>{current + 1 >= quiz.length ? "Xem kết quả" : "Câu tiếp theo"}</span>
              <span>→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
