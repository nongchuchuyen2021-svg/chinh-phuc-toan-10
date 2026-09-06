"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type {
  EssayQuestion,
  LessonReview,
  LessonTheory,
  Question,
  TFQuestion,
} from "@/lib/types";
import { getLessonProgress, theoryKey } from "@/lib/progress";
import QuizClient from "@/components/QuizClient";
import TrueFalseQuiz from "@/components/TrueFalseQuiz";
import EssayViewer from "@/components/EssayViewer";
import TheoryViewer from "@/components/TheoryViewer";
import ReviewViewer from "@/components/ReviewViewer";

type Mode = "menu" | "theory" | "mcq" | "tf" | "essay" | "review";

export default function LessonClient({
  lessonId,
  lessonTitle,
  topicName,
  theory,
  mcq,
  tf,
  essay,
  review,
}: {
  lessonId: string;
  lessonTitle: string;
  topicName: string;
  theory: LessonTheory | null;
  mcq: Question[];
  tf: TFQuestion[];
  essay: EssayQuestion[];
  review: LessonReview;
}) {
  const [mode, setMode] = useState<Mode>("menu");
  const [bestMcq, setBestMcq] = useState<number | null>(null);
  const [readTheory, setReadTheory] = useState(false);

  useEffect(() => {
    if (mode === "menu") {
      setBestMcq(getLessonProgress(lessonId)?.best ?? null);
      setReadTheory(getLessonProgress(theoryKey(lessonId)) !== null);
    }
  }, [mode, lessonId]);

  function switchMode(next: Mode) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMode(next);
  }

  if (mode === "theory" && theory) {
    return (
      <main className="cosmos relative min-h-screen py-8 px-4">
        <TheoryViewer
          lessonId={lessonId}
          lessonTitle={lessonTitle}
          topicName={topicName}
          theory={theory}
          onBack={() => switchMode("menu")}
          onGoQuiz={() => switchMode("mcq")}
        />
      </main>
    );
  }

  if (mode === "mcq") {
    return (
      <main className="cosmos relative min-h-screen py-8 px-4">
        <QuizClient
          lessonId={lessonId}
          lessonTitle={lessonTitle}
          topicName={topicName}
          questions={mcq}
          onBack={() => switchMode("menu")}
        />
      </main>
    );
  }

  if (mode === "tf") {
    return (
      <main className="cosmos relative min-h-screen py-8 px-4">
        <TrueFalseQuiz
          lessonId={lessonId}
          lessonTitle={lessonTitle}
          questions={tf}
          onBack={() => switchMode("menu")}
        />
      </main>
    );
  }

  if (mode === "essay") {
    return (
      <main className="cosmos relative min-h-screen py-8 px-4">
        <EssayViewer
          lessonTitle={lessonTitle}
          questions={essay}
          onBack={() => switchMode("menu")}
        />
      </main>
    );
  }

  if (mode === "review") {
    return (
      <main className="cosmos relative min-h-screen py-8 px-4">
        <ReviewViewer
          lessonTitle={lessonTitle}
          review={review}
          onBack={() => switchMode("menu")}
        />
      </main>
    );
  }

  // ─── Main Lesson Menu ─────────────────────────────────────────────────────
  return (
    <main className="cosmos relative min-h-screen py-8 sm:py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="px-3.5 py-1.5 rounded-xl glass hover:bg-indigo-50 text-xs font-semibold text-slate-700 transition flex items-center gap-1.5"
          >
            ← Danh sách bài học
          </Link>
          <span className="text-xs font-bold text-nebula px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100">
            {lessonId.toUpperCase()}
          </span>
        </div>

        {/* Lesson Hero */}
        <div className="glass rounded-3xl p-6 sm:p-10 border border-indigo-100/80 shadow-md space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-nebula">
            {topicName}
          </span>
          <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {lessonTitle}
          </h1>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600">
            <span className="inline-flex items-center gap-1">
              📖 Lý thuyết {readTheory ? "✓ Đã đọc" : "Chưa hoàn thành"}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              📝 Trắc nghiệm: {bestMcq !== null ? `Kỷ lục ${bestMcq}%` : "Chưa làm"}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              ⚖️ {tf.length} câu Đúng/Sai
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              ✍️ {essay.length} câu tự luận
            </span>
          </div>
        </div>

        {/* 5 Learning Action Hub Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* 1. Lý thuyết */}
          <button
            onClick={() => switchMode("theory")}
            className="text-left p-6 rounded-3xl glass hover:border-indigo-400 hover:shadow-glow transition duration-200 group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                📖
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-nebula transition">
                  Lý thuyết trọng tâm
                </h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  Bài giảng trực quan với thẻ phân loại, bảng so sánh và các câu hỏi kiểm tra nhanh.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-nebula">
              <span>{readTheory ? "Đọc lại lý thuyết" : "Bắt đầu học ngay"}</span>
              <span className="group-hover:translate-x-1 transition">→</span>
            </div>
          </button>

          {/* 2. Trắc nghiệm 4 lựa chọn */}
          <button
            onClick={() => switchMode("mcq")}
            className="text-left p-6 rounded-3xl glass hover:border-indigo-400 hover:shadow-glow transition duration-200 group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                📝
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-nebula transition">
                  Trắc nghiệm 4 lựa chọn
                </h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  Luyện tập phản xạ giải nhanh, đảo ngẫu nhiên phương án kèm lời giải chi tiết từng bước.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-600">
              <span>{mcq.length} câu hỏi • Bấm vào để luyện</span>
              <span className="group-hover:translate-x-1 transition">→</span>
            </div>
          </button>

          {/* 3. Đúng / Sai */}
          <button
            onClick={() => switchMode("tf")}
            className="text-left p-6 rounded-3xl glass hover:border-indigo-400 hover:shadow-glow transition duration-200 group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                ⚖️
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-nebula transition">
                  Trắc nghiệm Đúng / Sai
                </h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  Cấu trúc thi mới Bộ GD&ĐT 4 mệnh đề. Tính điểm luỹ tiến 0.1 - 0.25 - 0.5 - 1.0 điểm.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600">
              <span>Luyện câu Đúng/Sai</span>
              <span className="group-hover:translate-x-1 transition">→</span>
            </div>
          </button>

          {/* 4. Trả lời ngắn / Tự luận */}
          <button
            onClick={() => switchMode("essay")}
            className="text-left p-6 rounded-3xl glass hover:border-indigo-400 hover:shadow-glow transition duration-200 group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                ✍️
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-nebula transition">
                  Trả lời ngắn & Tự luận
                </h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  Tự điền đáp số và so sánh với phương pháp giải toán chi tiết của giáo viên.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-600">
              <span>Luyện điền kết quả</span>
              <span className="group-hover:translate-x-1 transition">→</span>
            </div>
          </button>

          {/* 5. Ôn tập & Flashcards */}
          <button
            onClick={() => switchMode("review")}
            className="text-left p-6 rounded-3xl glass hover:border-indigo-400 hover:shadow-glow transition duration-200 group flex flex-col justify-between sm:col-span-2"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                🧠
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-nebula transition">
                  Flashcard Ghi nhớ & Bẫy thường gặp
                </h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  Lật thẻ Flashcard ôn công thức tức thì, phòng tránh các bẫy đề thi và kiểm tra bảng mục tiêu học tập.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-600">
              <span>Mở Flashcards & Bảng kiểm</span>
              <span className="group-hover:translate-x-1 transition">→</span>
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
