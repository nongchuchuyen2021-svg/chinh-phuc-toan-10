"use client";

import React, { useState } from 'react';
import { MultipleChoiceQuestion } from '@/lib/types';
import { updateLessonMCScore } from '@/lib/progress';
import MathText from './MathText';

interface QuizClientProps {
  baiId: string;
  questions: MultipleChoiceQuestion[];
}

export default function QuizClient({ baiId, questions }: QuizClientProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: string]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (qId: string, optIdx: number) => {
    if (showResults) return;
    setSelectedAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const handleFinish = () => {
    setShowResults(true);
    let correct = 0;
    const wrongIds: string[] = [];
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correct++;
      } else {
        wrongIds.push(q.id);
      }
    });
    updateLessonMCScore(baiId, correct, questions.length, wrongIds);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const correctCount = questions.filter(q => selectedAnswers[q.id] === q.correctAnswer).length;
  const percent = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Score Summary if Finished */}
      {showResults && (
        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold">Kết quả luyện tập</h3>
            <p className="text-xs text-indigo-100 mt-1">
              Bạn trả lời đúng <strong>{correctCount}/{questions.length}</strong> câu ({percent}%)
            </p>
          </div>
          <button
            onClick={handleReset}
            className="px-5 py-2.5 rounded-xl bg-white text-indigo-700 text-xs font-bold hover:bg-indigo-50 transition shadow"
          >
            Làm lại từ đầu
          </button>
        </div>
      )}

      {/* Question List */}
      <div className="space-y-4">
        {questions.map((q, idx) => {
          const userAns = selectedAnswers[q.id];
          const isAnswered = userAns !== undefined;
          const isCorrect = isAnswered && userAns === q.correctAnswer;

          return (
            <div key={q.id} className="p-6 rounded-2xl glass-card shadow-sm border border-slate-200 space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-indigo-100 text-indigo-800 text-xs font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <div className="font-semibold text-slate-800 text-sm leading-relaxed">
                  <MathText content={q.question} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {q.options.map((opt, optIdx) => {
                  let optStyle = "border-slate-200 hover:border-indigo-400 bg-white text-slate-700";
                  const letters = ["A", "B", "C", "D"];

                  if (showResults) {
                    if (optIdx === q.correctAnswer) {
                      optStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold ring-1 ring-emerald-400";
                    } else if (userAns === optIdx) {
                      optStyle = "border-rose-400 bg-rose-50 text-rose-800";
                    } else {
                      optStyle = "border-slate-100 bg-slate-50 text-slate-400 opacity-60";
                    }
                  } else if (userAns === optIdx) {
                    optStyle = "border-indigo-600 bg-indigo-50 text-indigo-900 font-semibold ring-1 ring-indigo-500";
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(q.id, optIdx)}
                      className={`p-3 rounded-xl border text-left text-xs transition flex items-start gap-2.5 ${optStyle}`}
                    >
                      <span className="font-bold flex-shrink-0">{letters[optIdx]}.</span>
                      <span className="flex-1"><MathText content={opt} /></span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {showResults && (
                <div className="mt-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                  <div className="font-bold text-indigo-700 flex items-center gap-1.5">
                    <span>💡 Lời giải chi tiết:</span>
                  </div>
                  <div className="leading-relaxed">
                    <MathText content={q.explanation} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Button */}
      {!showResults && (
        <div className="text-center pt-4">
          <button
            onClick={handleFinish}
            disabled={Object.keys(selectedAnswers).length === 0}
            className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition shadow-lg shadow-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Nộp bài và Xem kết quả
          </button>
        </div>
      )}
    </div>
  );
}
