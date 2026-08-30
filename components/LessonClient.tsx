"use client";

import React, { useState } from 'react';
import { LessonQuestions, LessonTheory } from '@/lib/types';
import MathText from './MathText';
import QuizClient from './QuizClient';
import TrueFalseQuiz from './TrueFalseQuiz';
import EssayViewer from './EssayViewer';
import TheoryViewer from './TheoryViewer';

interface LessonClientProps {
  baiId: string;
  questions: LessonQuestions;
  theory: LessonTheory;
}

export default function LessonClient({ baiId, questions, theory }: LessonClientProps) {
  const [activeTab, setActiveTab] = useState<'mc' | 'tf' | 'essay' | 'theory'>('mc');

  return (
    <div className="space-y-6">
      {/* Navigation Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <a href="/" className="hover:text-indigo-600 transition">Trang chủ</a>
        <span>/</span>
        <span className="text-slate-800 font-semibold">{questions.baiName}</span>
      </div>

      {/* Header */}
      <div className="glass-card rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Luyện tập chuyên đề
            </span>
            <h2 className="text-2xl font-black text-slate-900 mt-2">
              <MathText content={questions.baiName} />
            </h2>
          </div>
          <a
            href="/"
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Quay lại
          </a>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-100">
          <button
            onClick={() => setActiveTab('mc')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              activeTab === 'mc'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <span>Trắc nghiệm 4 lựa chọn</span>
            <span className="px-1.5 py-0.5 rounded bg-white/20 text-[10px]">
              {questions.multipleChoice.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('tf')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              activeTab === 'tf'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <span>Đúng / Sai 4 ý</span>
            <span className="px-1.5 py-0.5 rounded bg-white/20 text-[10px]">
              {questions.trueFalse.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('essay')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              activeTab === 'essay'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <span>Tự luận / Trả lời ngắn</span>
            <span className="px-1.5 py-0.5 rounded bg-white/20 text-[10px]">
              {questions.essay.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('theory')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              activeTab === 'theory'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <span>Tóm tắt Lý thuyết & Công thức</span>
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      <div>
        {activeTab === 'mc' && <QuizClient baiId={baiId} questions={questions.multipleChoice} />}
        {activeTab === 'tf' && <TrueFalseQuiz baiId={baiId} questions={questions.trueFalse} />}
        {activeTab === 'essay' && <EssayViewer questions={questions.essay} />}
        {activeTab === 'theory' && <TheoryViewer theory={theory} />}
      </div>
    </div>
  );
}
