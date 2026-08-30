"use client";

import React, { useState, useEffect } from 'react';
import { ChapterItem } from '@/lib/types';
import { getProgress } from '@/lib/progress';

interface HomeClientProps {
  curriculum: ChapterItem[];
  grade: number;
}

export default function HomeClient({ curriculum, grade }: HomeClientProps) {
  const [progress, setProgress] = useState<any>({});
  const [search, setSearch] = useState('');

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const totalLessons = curriculum.reduce((acc, ch) => acc + ch.lessons.length, 0);
  const completedLessons = Object.keys(progress).filter(k => progress[k]?.mcScore).length;
  const overallPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 p-8 text-white shadow-xl">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide uppercase mb-3">
            Học tập thông minh 2026–2027
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Luyện trắc nghiệm Toán {grade}
          </h2>
          <p className="mt-2 text-indigo-100 text-sm sm:text-base leading-relaxed">
            Hệ thống ngân hàng câu hỏi chuẩn cấu trúc thi tốt nghiệp mới: Trắc nghiệm 4 lựa chọn, Đúng/Sai 4 mệnh đề, Tự luận ngắn và Tóm tắt công thức trọng tâm.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6">
            <div>
              <div className="text-2xl font-bold">{completedLessons}/{totalLessons}</div>
              <div className="text-xs text-indigo-200">Bài đã hoàn thành</div>
            </div>
            <div className="h-8 w-px bg-white/20"></div>
            <div>
              <div className="text-2xl font-bold">{overallPercent}%</div>
              <div className="text-xs text-indigo-200">Tiến độ tổng thể</div>
            </div>
          </div>
        </div>

        {/* Decorative Circle */}
        <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
      </div>

      {/* Search Input */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Tìm kiếm bài học, chủ đề..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2.5 pl-10 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
          <svg className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
      </div>

      {/* Chapters & Lessons */}
      <div className="space-y-8">
        {curriculum.map((chapter) => {
          const filteredLessons = chapter.lessons.filter(l =>
            l.name.toLowerCase().includes(search.toLowerCase()) ||
            l.desc.toLowerCase().includes(search.toLowerCase())
          );

          if (filteredLessons.length === 0) return null;

          return (
            <div key={chapter.id} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-6 rounded-full bg-indigo-600"></div>
                <h3 className="text-lg font-bold text-slate-800">{chapter.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredLessons.map((lesson) => {
                  const lessonProg = progress[lesson.id];
                  const score = lessonProg?.mcScore;

                  return (
                    <a
                      key={lesson.id}
                      href={`/luyen/${lesson.id}`}
                      className="group block p-5 rounded-2xl glass-card hover:border-indigo-400 hover:shadow-md transition duration-200 relative"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-700 transition">
                          {lesson.id.toUpperCase()}
                        </span>
                        {score ? (
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            score.percent >= 80 ? 'bg-emerald-100 text-emerald-700' :
                            score.percent >= 50 ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'
                          }`}>
                            {score.correct}/{score.total} ({score.percent}%)
                          </span>
                        ) : (
                          <span className="text-xs text-slate-400">Chưa làm</span>
                        )}
                      </div>

                      <h4 className="mt-3 font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition">
                        {lesson.name}
                      </h4>
                      <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {lesson.desc}
                      </p>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-indigo-600 font-semibold">
                        <span>Vào luyện tập</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
