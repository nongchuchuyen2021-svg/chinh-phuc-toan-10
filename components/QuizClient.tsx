"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import type { Question } from "@/lib/types";
import { getLessonProgress, saveAttempt } from "@/lib/progress";
import MathText from "@/components/MathText";

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
  const [wrongIds, setWrongIds] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);
  const [filterWrong, setFilterWrong] = useState(false);
  const feedbackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQuiz(prepare(questions));
  }, [questions]);

  const q = quiz[current];
  const scorePercent = quiz.length ? Math.round((correctCount / quiz.length) * 100) : 0;

  function pick(index: number) {
    if (picked !== null || !q) return;
    setPicked(index);
    if (index === q.correctIndex) {
      setCorrectCount((c) => c + 1);
    } else {
      setWrongIds((ids) => [...ids, q.id]);
    }
  }

  function next() {
    if (current + 1 >= quiz.length) {
      const percent = Math.round((correctCount / quiz.length) * 100);
      saveAttempt(lessonId, percent);
      if (percent >= 80) {
        try {
          confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        } catch {}
      }
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setPicked(null);
    }
  }

  function restart() {
    setQuiz(prepare(questions));
    setCurrent(0);
    setPicked(null);
    setCorrectCount(0);
    setWrongIds([]);
    setFinished(false);
    setFilterWrong(false);
  }

  function retryWrongs() {
    const wrongQuestions = questions.filter((item) => wrongIds.includes(item.id));
    if (wrongQuestions.length > 0) {
      setQuiz(prepare(wrongQuestions));
      setCurrent(0);
      setPicked(null);
      setCorrectCount(0);
      setWrongIds([]);
      setFinished(false);
      setFilterWrong(true);
    }
  }

  if (quiz.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-500">Chưa có câu hỏi trắc nghiệm cho bài này.</p>
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

  if (finished) {
    return (
      <div className="max-w-2xl mx-auto py-10 px-4">
        <div className="glass rounded-3xl p-8 text-center space-y-6 shadow-xl">
          <div className="w-20 h-20 mx-auto rounded-full bg-indigo-50 border-4 border-indigo-200 flex items-center justify-center text-3xl shadow-inner">
            {scorePercent >= 80 ? "🏆" : scorePercent >= 50 ? "👍" : "💪"}
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-nebula">
              Kết quả luyện tập trắc nghiệm
            </span>
            <h2 className="font-display text-2xl font-bold text-slate-900 mt-1">
              {lessonTitle}
            </h2>
          </div>

          <div className="py-6 px-4 bg-indigo-50/50 rounded-2xl border border-indigo-100/60 max-w-sm mx-auto space-y-1">
            <div className="font-display text-5xl font-extrabold text-indigo-600">
              {scorePercent}%
            </div>
            <p className="text-sm font-medium text-slate-600">
              Đúng {correctCount} / {quiz.length} câu hỏi
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={restart}
              className="px-5 py-2.5 rounded-xl bg-nebula hover:bg-nebula-deep text-white font-semibold text-sm shadow-glow transition"
            >
              🔄 Luyện tập lại
            </button>

            {wrongIds.length > 0 && !filterWrong && (
              <button
                onClick={retryWrongs}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm shadow-sm transition"
              >
                ⚠️ Làm lại {wrongIds.length} câu sai
              </button>
            )}

            {onBack && (
              <button
                onClick={onBack}
                className="px-5 py-2.5 rounded-xl glass hover:bg-indigo-50 text-slate-700 font-semibold text-sm transition"
              >
                ← Quay lại bài học
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Quiz Progress Header */}
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
            Câu {current + 1} / {quiz.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium">Đúng: {correctCount}</span>
          <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-nebula to-plasma transition-all duration-300"
              style={{ width: `${((current + 1) / quiz.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="glass rounded-3xl p-6 sm:p-8 space-y-6 shadow-md border border-indigo-100/70">
        <div className="space-y-3">
          <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100">
            CÂU HỎI {current + 1}
          </span>
          <div className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed">
            <MathText content={q.q} />
          </div>
        </div>

        {/* Options */}
        <div className="space-y-3 pt-2">
          {q.shuffledOptions.map((opt, idx) => {
            const isPicked = picked === idx;
            const isCorrect = idx === q.correctIndex;

            let btnStyle = "glass border-slate-200 text-slate-800 hover:border-indigo-300 hover:bg-indigo-50/40";
            if (picked !== null) {
              if (isCorrect) {
                btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-900 shadow-sm ring-1 ring-emerald-500";
              } else if (isPicked) {
                btnStyle = "bg-rose-50 border-rose-500 text-rose-900 shadow-sm ring-1 ring-rose-500";
              } else {
                btnStyle = "opacity-50 border-slate-200 text-slate-500";
              }
            }

            return (
              <button
                key={idx}
                disabled={picked !== null}
                onClick={() => pick(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition flex items-center gap-3.5 group ${btnStyle}`}
              >
                <span
                  className={`w-8 h-8 rounded-xl flex items-center justify-center font-display font-bold text-xs shrink-0 transition ${
                    picked !== null && isCorrect
                      ? "bg-emerald-600 text-white"
                      : picked !== null && isPicked
                      ? "bg-rose-600 text-white"
                      : "bg-indigo-100 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white"
                  }`}
                >
                  {OPTION_LABELS[idx]}
                </span>
                <span className="text-sm font-medium leading-relaxed flex-1">
                  <MathText content={opt} />
                </span>
              </button>
            );
          })}
        </div>

        {/* Feedback & Step-by-step Solution */}
        {picked !== null && (
          <div
            ref={feedbackRef}
            className={`p-5 rounded-2xl border animate-pop-in space-y-3 ${
              picked === q.correctIndex
                ? "bg-emerald-50/70 border-emerald-200 text-emerald-900"
                : "bg-rose-50/70 border-rose-200 text-rose-900"
            }`}
          >
            <div className="flex items-center gap-2 font-display font-bold text-sm">
              <span>{picked === q.correctIndex ? "🎉 Chính xác!" : "❌ Chưa chính xác!"}</span>
              <span className="text-xs font-normal opacity-80">
                (Đáp án đúng là phương án {OPTION_LABELS[q.correctIndex]})
              </span>
            </div>

            <div className="text-xs sm:text-sm leading-relaxed text-slate-700 pt-1 border-t border-slate-200/60">
              <strong className="text-slate-900">Lời giải chi tiết: </strong>
              <MathText content={q.explain} />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={next}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md transition"
              >
                {current + 1 >= quiz.length ? "Xem kết quả →" : "Câu tiếp theo →"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
