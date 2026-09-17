"use client";

import React, { useState } from "react";
import Link from "next/link";
import type {
  EssayQuestion,
  LessonReview,
  LessonTheory,
  Question,
  TFQuestion,
} from "@/lib/types";
import { playClick } from "@/lib/sound";
import MathText from "@/components/MathText";
import QuizClient from "@/components/QuizClient";
import TrueFalseQuiz from "@/components/TrueFalseQuiz";
import EssayViewer from "@/components/EssayViewer";
import TheoryViewer from "@/components/TheoryViewer";
import ReviewViewer from "@/components/ReviewViewer";

type TabKey = "sgk" | "theory" | "mcq" | "tf" | "essay" | "review";

export default function LessonClient({
  lessonId,
  lessonTitle,
  topicName,
  theory,
  mcq,
  tf,
  essay,
  review,
  hasSgk = false,
}: {
  lessonId: string;
  lessonTitle: string;
  topicName: string;
  theory: LessonTheory | null;
  mcq: Question[];
  tf: TFQuestion[];
  essay: EssayQuestion[];
  review: LessonReview;
  hasSgk?: boolean;
}) {
  const [activeTab, setActiveTab] = useState<TabKey>(hasSgk ? "sgk" : "theory");

  const tabs: { key: TabKey; label: string; icon: string; count?: number }[] = [
    ...(hasSgk ? [{ key: "sgk" as TabKey, label: "SGK Chuẩn", icon: "📖" }] : []),
    { key: "theory", label: "Tóm tắt & Khắc sâu", icon: "⚡" },
    { key: "mcq", label: "Trắc nghiệm 4 lựa chọn", icon: "🎯", count: mcq.length },
    { key: "tf", label: "Đúng / Sai 4 ý", icon: "⚖️", count: tf.length },
    { key: "essay", label: "Tự luận / Trả lời ngắn", icon: "✍️", count: essay.length },
    { key: "review", label: "Ôn tập tổng kết", icon: "📋" },
  ];

  const handleTabChange = (key: TabKey) => {
    playClick();
    setActiveTab(key);
  };

  return (
    <main className="relative min-h-screen pb-20">
      <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-6">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 font-mono text-xs text-star-mute">
          <Link
            href="/"
            onClick={() => playClick()}
            className="flex items-center gap-1 rounded-xl border border-void-border bg-void-card px-3 py-1.5 text-star-soft transition hover:border-cyan/40 hover:text-cyan-glow hover:shadow-glow-cyan"
          >
            ← Danh sách 27 bài học
          </Link>
          <span>/</span>
          <span className="text-cyan-glow truncate max-w-[200px] sm:max-w-none">{lessonTitle}</span>
        </div>

        {/* Lesson Header Card */}
        <div className="mt-5 animate-fade-in-up rounded-3xl border border-void-border/90 bg-void-card/90 p-6 shadow-card backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/15 px-3.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-cyan-glow">
                ✨ {topicName}
              </span>
              <h1 className="mt-3 font-display text-2xl font-bold text-star sm:text-3xl">
                <MathText content={lessonTitle} />
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {hasSgk && (
                <a
                  href={`/sgk/${lessonId}.html`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClick()}
                  className="flex shrink-0 items-center gap-2 rounded-2xl bg-gradient-to-r from-amber to-amber-deep px-4 py-2.5 font-mono text-xs font-bold text-white shadow-glow-amber transition hover:opacity-90 hover:scale-105"
                >
                  🚀 Mở tab riêng SGK
                </a>
              )}
              <Link
                href="/cong-thuc"
                onClick={() => playClick()}
                className="flex shrink-0 items-center gap-2 rounded-2xl border border-void-border bg-void-subtle px-4 py-2.5 font-mono text-xs font-bold text-star-soft transition hover:border-cyan/40 hover:text-white hover:scale-105"
              >
                📖 Sổ tay công thức
              </Link>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="mt-6 flex flex-wrap gap-2 border-t border-void-border pt-4">
            {tabs.map((t) => {
              const isActive = activeTab === t.key;
              let activeStyle = "";
              if (isActive) {
                if (t.key === "sgk") activeStyle = "bg-gradient-to-r from-amber to-amber-deep text-white shadow-glow-amber border border-amber/40";
                else if (t.key === "theory") activeStyle = "bg-gradient-to-r from-cyan to-cyan-deep text-white shadow-glow-cyan border border-cyan/40";
                else if (t.key === "mcq") activeStyle = "bg-gradient-to-r from-violet to-violet-deep text-white shadow-glow-violet border border-violet/40";
                else if (t.key === "tf") activeStyle = "bg-gradient-to-r from-emerald to-emerald-deep text-white shadow-glow-emerald border border-emerald/40";
                else if (t.key === "essay") activeStyle = "bg-gradient-to-r from-rose to-rose-deep text-white shadow-glow-rose border border-rose/40";
                else activeStyle = "bg-gradient-to-r from-amber to-amber-deep text-white shadow-glow-amber border border-amber/40";
              } else {
                activeStyle = "border border-void-border bg-void-subtle text-star-soft hover:border-cyan/30 hover:text-star";
              }

              return (
                <button
                  key={t.key}
                  onClick={() => handleTabChange(t.key)}
                  className={`flex items-center gap-2 rounded-2xl px-3.5 sm:px-4 py-2 font-mono text-xs font-bold transition-all duration-200 ${activeStyle}`}
                >
                  <span>{t.icon}</span>
                  <span>{t.label}</span>
                  {t.count !== undefined && (
                    <span className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                      isActive ? "bg-white/20 text-white" : "bg-void-border text-star-mute"
                    }`}>
                      {t.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === "sgk" && (
            <div className="animate-fade-in-up space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-amber/30 bg-amber/10 px-5 py-3 text-sm text-amber-glow shadow-glow-amber">
                <span>📖 Đang đọc bản Sách Giáo Khoa chuẩn tương tác có hình ảnh gốc</span>
                <a
                  href={`/sgk/${lessonId}.html`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline hover:text-white"
                >
                  Phóng to toàn màn hình ↗
                </a>
              </div>
              <div className="overflow-hidden rounded-3xl border border-void-border bg-void shadow-card">
                <iframe
                  src={`/sgk/${lessonId}.html`}
                  title={`SGK ${lessonTitle}`}
                  className="h-[850px] w-full border-0"
                />
              </div>
            </div>
          )}

          {activeTab === "theory" && (
            theory ? (
              <TheoryViewer
                lessonId={lessonId}
                lessonTitle={lessonTitle}
                topicName={topicName}
                theory={theory}
                onGoQuiz={() => handleTabChange("mcq")}
              />
            ) : (
              <div className="rounded-3xl border border-void-border bg-void-card p-8 text-center text-star-soft">
                Lý thuyết đang được cập nhật.
              </div>
            )
          )}

          {activeTab === "mcq" && (
            <QuizClient
              lessonId={lessonId}
              lessonTitle={lessonTitle}
              topicName={topicName}
              questions={mcq}
            />
          )}

          {activeTab === "tf" && (
            <TrueFalseQuiz
              lessonId={lessonId}
              lessonTitle={lessonTitle}
              questions={tf}
            />
          )}

          {activeTab === "essay" && (
            <EssayViewer
              lessonId={lessonId}
              lessonTitle={lessonTitle}
              questions={essay}
            />
          )}

          {activeTab === "review" && (
            <ReviewViewer
              lessonId={lessonId}
              lessonTitle={lessonTitle}
              review={review}
            />
          )}
        </div>
      </div>
    </main>
  );
}
