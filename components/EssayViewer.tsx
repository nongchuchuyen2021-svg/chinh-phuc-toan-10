"use client";

import React, { useState } from 'react';
import { EssayQuestion } from '@/lib/types';
import MathText from './MathText';

interface EssayViewerProps {
  questions: EssayQuestion[];
}

export default function EssayViewer({ questions }: EssayViewerProps) {
  const [openSolutions, setOpenSolutions] = useState<{ [qId: string]: boolean }>({});

  const toggleSolution = (qId: string) => {
    setOpenSolutions(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  return (
    <div className="space-y-4">
      {questions.map((q, idx) => (
        <div key={q.id} className="p-6 rounded-2xl glass-card shadow-sm border border-slate-200 space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 px-2.5 py-1 rounded-md bg-purple-100 text-purple-800 text-xs font-bold">
              Bài {idx + 1}
            </span>
            <div className="font-semibold text-slate-800 text-sm leading-relaxed flex-1">
              <MathText content={q.question} />
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-slate-100">
            {q.shortAnswer && (
              <span className="text-xs text-slate-500 font-medium">
                Đáp số ngắn gọn: <strong className="text-indigo-600"><MathText content={q.shortAnswer} /></strong>
              </span>
            )}
            <button
              onClick={() => toggleSolution(q.id)}
              className="ml-auto px-4 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold transition flex items-center gap-1.5"
            >
              <span>{openSolutions[q.id] ? 'Ẩn lời giải' : 'Xem hướng dẫn giải'}</span>
              <svg className={`w-3.5 h-3.5 transform transition ${openSolutions[q.id] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
          </div>

          {openSolutions[q.id] && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
              <div className="font-bold text-purple-800">Lời giải chi tiết từng bước:</div>
              <div className="leading-relaxed whitespace-pre-line">
                <MathText content={q.solution} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
