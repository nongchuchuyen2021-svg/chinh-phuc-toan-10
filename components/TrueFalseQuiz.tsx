"use client";

import React, { useState } from 'react';
import { TrueFalseQuestion } from '@/lib/types';
import { updateLessonTFScore } from '@/lib/progress';
import MathText from './MathText';

interface TrueFalseQuizProps {
  baiId: string;
  questions: TrueFalseQuestion[];
}

export default function TrueFalseQuiz({ baiId, questions }: TrueFalseQuizProps) {
  const [answers, setAnswers] = useState<{ [qId: string]: { [sId: string]: boolean } }>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (qId: string, sId: string, val: boolean) => {
    if (showResults) return;
    setAnswers(prev => ({
      ...prev,
      [qId]: { ...(prev[qId] || {}), [sId]: val }
    }));
  };

  const calculateScore = () => {
    let totalScore = 0;
    let correctStatements = 0;
    let totalStatements = 0;

    questions.forEach(q => {
      const qAns = answers[q.id] || {};
      let qCorrect = 0;
      q.statements.forEach(s => {
        totalStatements++;
        if (qAns[s.id] === s.isCorrect) {
          qCorrect++;
          correctStatements++;
        }
      });

      // Scoring table per question (standard exam):
      // 1 correct: 0.1 pt, 2 correct: 0.25 pt, 3 correct: 0.5 pt, 4 correct: 1.0 pt
      if (qCorrect === 1) totalScore += 0.1;
      else if (qCorrect === 2) totalScore += 0.25;
      else if (qCorrect === 3) totalScore += 0.5;
      else if (qCorrect === 4) totalScore += 1.0;
    });

    return { totalScore, correctStatements, totalStatements };
  };

  const handleFinish = () => {
    setShowResults(true);
    const { totalScore, correctStatements, totalStatements } = calculateScore();
    updateLessonTFScore(baiId, correctStatements, totalStatements, totalScore);
  };

  const { totalScore, correctStatements, totalStatements } = calculateScore();

  return (
    <div className="space-y-6">
      {showResults && (
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold">Kết quả dạng Đúng / Sai</h3>
            <p className="text-xs text-emerald-100 mt-1">
              Đúng <strong>{correctStatements}/{totalStatements}</strong> ý — Điểm số: <strong>{totalScore.toFixed(2)}/{(questions.length * 1.0).toFixed(1)} điểm</strong>
            </p>
          </div>
          <button
            onClick={() => { setAnswers({}); setShowResults(false); }}
            className="px-5 py-2.5 rounded-xl bg-white text-emerald-800 text-xs font-bold hover:bg-emerald-50 transition shadow"
          >
            Làm lại từ đầu
          </button>
        </div>
      )}

      <div className="space-y-6">
        {questions.map((q, idx) => (
          <div key={q.id} className="p-6 rounded-2xl glass-card shadow-sm border border-slate-200 space-y-4">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 px-2 py-1 rounded-md bg-teal-100 text-teal-800 text-xs font-bold">
                Câu {idx + 1}
              </span>
              <div className="font-semibold text-slate-800 text-sm leading-relaxed">
                <MathText content={q.context} />
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {q.statements.map((s, sIdx) => {
                const letters = ["a", "b", "c", "d"];
                const userChoice = answers[q.id]?.[s.id];
                const isCorrect = showResults && userChoice === s.isCorrect;
                const isWrong = showResults && userChoice !== undefined && userChoice !== s.isCorrect;

                return (
                  <div
                    key={s.id}
                    className={`p-3.5 rounded-xl border text-xs transition ${
                      showResults
                        ? isCorrect
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                          : isWrong
                          ? 'bg-rose-50 border-rose-300 text-rose-950'
                          : 'bg-slate-50 border-slate-200'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-2 flex-1">
                        <span className="font-bold text-slate-600">{letters[sIdx]})</span>
                        <div className="leading-relaxed">
                          <MathText content={s.statement} />
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <button
                          onClick={() => handleSelect(q.id, s.id, true)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                            userChoice === true
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          Đúng
                        </button>
                        <button
                          onClick={() => handleSelect(q.id, s.id, false)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                            userChoice === false
                              ? 'bg-rose-600 text-white'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          Sai
                        </button>
                      </div>
                    </div>

                    {showResults && (
                      <div className="mt-2.5 pt-2 border-t border-slate-200/60 text-[11px] text-slate-600">
                        <span className="font-bold text-indigo-700">Đáp án: {s.isCorrect ? 'ĐÚNG' : 'SAI'}</span> — <MathText content={s.explanation} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {!showResults && (
        <div className="text-center pt-4">
          <button
            onClick={handleFinish}
            className="px-8 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm transition shadow-lg shadow-teal-200"
          >
            Chấm điểm Đúng / Sai
          </button>
        </div>
      )}
    </div>
  );
}
