"use client";

import React from 'react';
import { LessonTheory } from '@/lib/types';
import MathText from './MathText';

interface TheoryViewerProps {
  theory: LessonTheory;
}

export default function TheoryViewer({ theory }: TheoryViewerProps) {
  return (
    <div className="space-y-6">
      {/* Key Concepts */}
      <div className="p-6 rounded-2xl glass-card shadow-sm border border-slate-200 space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <span className="w-2 h-5 rounded bg-indigo-600"></span>
          Kiến thức trọng tâm cần nhớ
        </h3>
        <ul className="space-y-2.5 text-xs text-slate-700 leading-relaxed list-disc list-inside">
          {theory.summary.map((item, idx) => (
            <li key={idx} className="pl-1">
              <MathText content={item} />
            </li>
          ))}
        </ul>
      </div>

      {/* Key Formulas */}
      {theory.keyFormulas && theory.keyFormulas.length > 0 && (
        <div className="p-6 rounded-2xl glass-card shadow-sm border border-slate-200 space-y-4">
          <h3 className="text-base font-bold text-indigo-900 flex items-center gap-2">
            <span className="w-2 h-5 rounded bg-purple-600"></span>
            Bảng công thức quan trọng
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {theory.keyFormulas.map((form, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-100 text-xs font-semibold text-indigo-950 flex items-center justify-center text-center">
                <MathText content={form} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
