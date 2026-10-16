"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import type {
  EssayQuestion,
  LessonGame,
  LessonReview,
  LessonTheory,
  Question,
  TFQuestion,
} from "@/lib/types";
import { getProgress } from "@/lib/progress";
import { playClick } from "@/lib/sound";
import MathText from "./MathText";
import QuizClient from "./QuizClient";
import TrueFalseQuiz from "./TrueFalseQuiz";
import EssayViewer from "./EssayViewer";
import TheoryViewer from "./TheoryViewer";
import ReviewViewer from "./ReviewViewer";
import GameHub from "./GameHub";

type Mode = "menu" | "theory" | "slides" | "sgk" | "games" | "mc" | "tf" | "essay" | "review";

interface LessonClientProps {
  lessonId: string;
  lessonTitle: string;
  topicName: string;
  theory: LessonTheory | null;
  mcq: Question[];
  tf: TFQuestion[];
  essay: EssayQuestion[];
  review: LessonReview;
  games?: LessonGame[];
  hasSgk?: boolean;
  slideUrl?: string | null;
}

export default function LessonClient({
  lessonId,
  lessonTitle,
  topicName,
  theory,
  mcq,
  tf,
  essay,
  review,
  games = [],
  hasSgk = false,
  slideUrl = null,
}: LessonClientProps) {
  const [mode, setMode] = useState<Mode>("menu");
  const [theoryDone, setTheoryDone] = useState(false);
  const [bestMc, setBestMc] = useState<number | null>(null);
  const [tfScore, setTfScore] = useState<number | null>(null);

  useEffect(() => {
    if (mode === "menu") {
      const all = getProgress();
      const p = all[lessonId] || {};
      const isLtDone = !!p.completedTheory || all[`${lessonId}:lt`]?.best === 100;
      setTheoryDone(isLtDone);
      setBestMc(p.mcScore?.percent ?? p.best ?? null);
      setTfScore(p.tfScore?.score ?? null);
    }
  }, [mode, lessonId]);

  function switchMode(next: Mode) {
    playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMode(next);
  }

  // 1. Chế độ đọc SGK toàn màn hình
  if (mode === "sgk" && hasSgk) {
    return (
      <div className="fixed inset-0 z-50 bg-[#060A12] flex flex-col">
        <header className="flex h-14 shrink-0 items-center justify-between border-b border-void-border/80 bg-void/90 px-4 backdrop-blur-xl">
          <button
            onClick={() => switchMode("menu")}
            className="flex items-center gap-2 rounded-xl border border-void-border bg-void-card px-3.5 py-1.5 font-mono text-xs font-bold text-star-soft transition hover:border-cyan/50 hover:text-cyan-glow hover:shadow-glow-cyan"
          >
            ← Quay lại bài học
          </button>
          <div className="flex items-center gap-2 font-mono text-xs text-star-mute">
            <span className="hidden sm:inline">Sách Giáo Khoa (HTML) ·</span>
            <span className="text-amber-glow font-bold truncate max-w-[280px]">{lessonTitle}</span>
          </div>
          <a
            href={`/sgk/${lessonId}.html`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-amber/40 bg-amber/15 px-3 py-1.5 font-mono text-xs font-bold text-amber-glow transition hover:bg-amber/30"
          >
            ↗ Mở tab riêng
          </a>
        </header>
        <iframe
          src={`/sgk/${lessonId}.html`}
          title={`SGK ${lessonTitle}`}
          className="h-full w-full border-0"
        />
      </div>
    );
  }

  // 2. Chế độ Slide trình chiếu toàn màn hình
  if (mode === "slides" && slideUrl) {
    return (
      <div id="slide-wrapper" className="fixed inset-0 z-[100] bg-[#060A12] flex flex-col">
        <header className="flex h-14 shrink-0 items-center justify-between border-b border-void-border/80 bg-void/90 px-4 backdrop-blur-xl">
          <button
            onClick={() => switchMode("menu")}
            className="flex items-center gap-2 rounded-xl border border-cyan/40 bg-void-card px-3.5 py-1.5 font-mono text-xs font-bold text-cyan-glow transition hover:border-cyan hover:bg-cyan/15 hover:shadow-glow-cyan"
          >
            ← Quay lại bài học
          </button>
          <div className="flex items-center gap-2 font-mono text-xs text-star-mute">
            <span className="hidden sm:inline">Bài giảng điện tử tương tác ·</span>
            <span className="text-cyan-glow font-bold truncate max-w-[280px]">{lessonTitle}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const el = document.getElementById("slide-wrapper");
                if (!document.fullscreenElement) {
                  el?.requestFullscreen().catch(() => {});
                } else {
                  document.exitFullscreen().catch(() => {});
                }
              }}
              className="flex items-center gap-1.5 rounded-xl border border-purple-500/50 bg-purple-500/20 px-3.5 py-1.5 font-mono text-xs font-bold text-purple-300 shadow-glow-violet transition hover:bg-purple-500/35 hover:scale-105"
              title="Phóng to toàn màn hình máy tính (F11/Fullscreen)"
            >
              ⛶ Phóng to toàn màn hình
            </button>
            <a
              href={slideUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-cyan/40 bg-cyan/15 px-3 py-1.5 font-mono text-xs font-bold text-cyan-glow transition hover:bg-cyan/30"
            >
              ↗ Tab mới
            </a>
          </div>
        </header>
        <iframe
          src={slideUrl}
          title={`Slide Trình chiếu ${lessonTitle}`}
          className="h-full w-full border-0"
          allow="fullscreen; autoplay"
          allowFullScreen
        />
      </div>
    );
  }

  // 3. Khung điều hướng chung khi đang xem một mục cụ thể
  const renderFocusHeader = (title: string, icon: string) => (
    <div className="sticky top-0 z-30 mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-void-border/80 bg-void/95 px-4 py-3 backdrop-blur-xl -mx-4 sm:-mx-6 sm:px-6 shadow-md">
      <button
        onClick={() => switchMode("menu")}
        className="flex items-center gap-2 rounded-2xl border border-cyan/40 bg-void-card px-4 py-2 font-mono text-xs font-bold text-cyan-glow shadow-glow-cyan backdrop-blur-md transition hover:border-cyan hover:bg-cyan/15 hover:-translate-x-0.5"
      >
        ← Quay lại danh mục bài học
      </button>
      <div className="flex items-center gap-2 font-mono text-xs text-star-mute">
        <span>{icon}</span>
        <span className="hidden sm:inline text-star-soft">{lessonTitle}</span>
        <span className="hidden sm:inline">/</span>
        <span className="text-cyan-glow font-bold">{title}</span>
      </div>
    </div>
  );

  const renderFocusFooter = () => (
    <div className="mt-12 flex justify-center border-t border-void-border/60 pt-8 pb-4">
      <button
        onClick={() => switchMode("menu")}
        className="flex items-center gap-2.5 rounded-2xl border border-cyan/40 bg-void-card/90 px-6 py-3 font-mono text-sm font-bold text-cyan-glow shadow-glow-cyan backdrop-blur-md transition hover:border-cyan hover:bg-cyan/15 hover:-translate-y-0.5"
      >
        ← Quay lại danh mục bài học
      </button>
    </div>
  );

  // 4. Các chế độ xem chi tiết riêng biệt
  if (mode === "theory" && theory) {
    return (
      <main className="relative min-h-screen pb-20 pt-2">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {renderFocusHeader("Tóm tắt & Khắc sâu", "⚡")}
          <TheoryViewer
            lessonId={lessonId}
            lessonTitle={lessonTitle}
            topicName={topicName}
            theory={theory}
            onGoQuiz={() => switchMode("mc")}
          />
          {renderFocusFooter()}
        </div>
      </main>
    );
  }

  if (mode === "games" && games && games.length > 0) {
    return (
      <main className="relative min-h-screen pb-20 pt-2">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {renderFocusHeader("Đấu trường Game tương tác", "🎮")}
          <GameHub lessonId={lessonId} games={games} onBack={() => switchMode("menu")} />
          {renderFocusFooter()}
        </div>
      </main>
    );
  }

  if (mode === "mc") {
    return (
      <main className="relative min-h-screen pb-20 pt-2">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {renderFocusHeader("Trắc nghiệm 4 lựa chọn", "🎯")}
          <QuizClient
            lessonId={lessonId}
            lessonTitle={lessonTitle}
            topicName={topicName}
            questions={mcq}
            onBack={() => switchMode("menu")}
          />
          {renderFocusFooter()}
        </div>
      </main>
    );
  }

  if (mode === "tf") {
    return (
      <main className="relative min-h-screen pb-20 pt-2">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {renderFocusHeader("Đúng / Sai 4 ý", "⚖️")}
          <TrueFalseQuiz
            lessonId={lessonId}
            lessonTitle={lessonTitle}
            questions={tf}
            onBack={() => switchMode("menu")}
          />
          {renderFocusFooter()}
        </div>
      </main>
    );
  }

  if (mode === "essay") {
    return (
      <main className="relative min-h-screen pb-20 pt-2">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {renderFocusHeader("Tự luận & Trả lời ngắn", "✍️")}
          <EssayViewer lessonId={lessonId} lessonTitle={lessonTitle} questions={essay} />
          {renderFocusFooter()}
        </div>
      </main>
    );
  }

  if (mode === "review") {
    return (
      <main className="relative min-h-screen pb-20 pt-2">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {renderFocusHeader("Ôn tập tổng kết", "📋")}
          <ReviewViewer lessonId={lessonId} lessonTitle={lessonTitle} review={review} />
          {renderFocusFooter()}
        </div>
      </main>
    );
  }

  // 5. MÀN HÌNH MENU CHÍNH (HUB DASHBOARD CHUẨN TOÁN 12)
  const menuOptions = [
    {
      key: "theory" as Mode,
      icon: "⚡",
      name: "Tóm tắt & Khắc sâu",
      desc: theory
        ? `~${theory.minutes || 7} phút đọc · ${theory.sections?.length || 4} mục kiến thức trọng tâm, có hình vẽ đồ thị và ví dụ mẫu`
        : "Lý thuyết trọng tâm bài học",
      done: theoryDone,
      badge: theoryDone ? "✓ Đã học" : null,
      badgeColor: "bg-emerald/20 text-emerald-glow border-emerald/30",
      enabled: theory !== null,
    },
    ...(slideUrl
      ? [
          {
            key: "slides" as Mode,
            icon: "📽️",
            name: "Slide Trình chiếu tương tác",
            desc: lessonId === "bai-05"
              ? "20 slide tương tác · Nửa đường tròn đơn vị, góc bù, góc phụ, vòng quay và 10 câu hỏi tự chấm"
              : lessonId === "bai-06"
              ? "26 slide tương tác · Khám phá côsin, sin, giải tam giác, đo khoảng cách, diện tích và 12 câu hỏi tự chấm"
              : lessonId === "bai-07"
              ? "28 slide tương tác · Xưởng tự dựng 3 nhiệm vụ, phản hồi sửa sai, 12 câu tự chấm và bài tập đúng SGK"
              : "15 slide bài giảng điện tử tương tác chuẩn GDPT 2018 · Phòng thí nghiệm mô phỏng động & Đấu trường Quiz",
            done: false,
            badge: "Mới ✨",
            badgeColor: "bg-cyan/20 text-cyan-glow border-cyan/40 shadow-glow-cyan",
            enabled: true,
          },
        ]
      : []),
    ...(hasSgk
      ? [
          {
            key: "sgk" as Mode,
            icon: "📖",
            name: "Sách giáo khoa (HTML)",
            desc: lessonId === "bai-05"
              ? "Bài học theo SGK trang 33–37 · Đúng đề bài gốc, có lời giải gợi ý và ảnh trang gốc để đối chiếu"
              : lessonId === "bai-06"
              ? "Bài học theo SGK trang 38–43 · Tình huống thực địa hai con tàu, hoạt động khám phá, ví dụ mẫu và bài tập luyện tập giải chi tiết"
              : lessonId === "bai-07"
              ? "SGK trang 46–50 · Đúng đề 4.1–4.5, lời giải bổ sung và 5 trang gốc để đối chiếu"
              : "Đọc nguyên bản sách giáo khoa Toán 10 Kết nối tri thức có hình vẽ đồ thị và bài tập",
            done: false,
            badge: null,
            badgeColor: "",
            enabled: true,
          },
        ]
      : []),
    ...(games && games.length > 0
      ? [
          {
            key: "games" as Mode,
            icon: "🎮",
            name: "Đấu trường Game tương tác",
            desc: lessonId === "bai-05"
              ? "2 trò chơi · Phân loại dấu lượng giác và ghép công thức góc bù"
              : lessonId === "bai-06"
              ? "3 trò chơi hấp dẫn · Đấu trường Côsin vs Sin, Ghép đôi công thức vàng & Máy quét tam giác nhọn/tù"
              : lessonId === "bai-07"
              ? "3 trò chơi hấp dẫn · Đấu trường Hướng vectơ, Ghép đôi khái niệm vàng & Máy quét chân lý vectơ"
              : `${games.length} trò chơi sinh động · Kéo co tri thức 2 đội, Chinh phục đỉnh cao & Ghép thẻ`,
            done: false,
            badge: `${games.length} game`,
            badgeColor: "bg-indigo/20 text-indigo-300 border-indigo/40",
            enabled: true,
          },
        ]
      : []),
    {
      key: "mc" as Mode,
      icon: "🎯",
      name: "Trắc nghiệm 4 lựa chọn",
      desc: `${mcq.length} câu hỏi chuẩn cấu trúc đề thi · Chấm điểm ngay từng câu, có lời giải chi tiết`,
      done: bestMc !== null,
      badge: bestMc !== null ? `⭐ ${bestMc}%` : `${mcq.length} câu`,
      badgeColor:
        bestMc !== null && bestMc >= 80
          ? "bg-emerald/20 text-emerald-glow border-emerald/30"
          : "bg-void-border text-star-soft",
      enabled: mcq.length > 0,
    },
    {
      key: "tf" as Mode,
      icon: "⚖️",
      name: "Đúng / Sai 4 ý",
      desc: `${tf.length} câu tình huống · Mỗi câu 4 ý a,b,c,d, tính điểm lũy tiến 0.1 - 0.25 - 0.5 - 1.0đ theo chuẩn QĐ 764`,
      done: tfScore !== null,
      badge: tfScore !== null ? `Điểm: ${tfScore}` : `${tf.length} câu`,
      badgeColor:
        tfScore !== null
          ? "bg-amber/20 text-amber-glow border-amber/30"
          : "bg-void-border text-star-soft",
      enabled: tf.length > 0,
    },
    {
      key: "essay" as Mode,
      icon: "✍️",
      name: "Tự luận & Trả lời ngắn",
      desc: `${essay.length} câu · Tự tính toán điền kết quả rồi đối chiếu các bước giải chi tiết và mẹo Casio`,
      done: false,
      badge: `${essay.length} câu`,
      badgeColor: "bg-void-border text-star-soft",
      enabled: essay.length > 0,
    },
    {
      key: "review" as Mode,
      icon: "📋",
      name: "Ôn tập tổng kết",
      desc: "Bản đồ tư duy, bảng đối chiếu sai lầm phổ biến, flashcards ghi nhớ nhanh và checklist kiến thức",
      done: false,
      badge: "Tổng kết",
      badgeColor: "bg-void-border text-star-soft",
      enabled: true,
    },
  ];

  return (
    <main className="relative min-h-screen pb-20">
      <div className="mx-auto max-w-3xl px-4 pt-8 sm:px-6">
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
          <span className="text-cyan-glow truncate max-w-[240px] sm:max-w-none">{lessonTitle}</span>
        </div>

        {/* Lesson Header Card */}
        <div className="mt-5 animate-fade-in-up rounded-3xl border border-void-border/90 bg-void-card/90 p-6 sm:p-7 shadow-card backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/15 px-3.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-cyan-glow">
              ✨ {topicName}
            </span>
            <span className="font-mono text-xs text-star-mute">Bấm vào nội dung để bắt đầu học</span>
          </div>

          <h1 className="mt-3 font-display text-2xl font-bold text-star sm:text-3xl leading-snug">
            <MathText content={lessonTitle} />
          </h1>
          <p className="mt-2 text-sm text-star-soft leading-relaxed">
            Chọn một trong các phân hệ học tập dưới đây. Toàn bộ nội dung khác sẽ được ẩn đi để
            Thầy/Cô và học sinh tập trung tối đa!
          </p>
        </div>

        {/* Menu Cards Grid */}
        <div className="mt-6 space-y-3.5">
          {menuOptions
            .filter((o) => o.enabled)
            .map((o) => (
              <button
                key={o.key}
                onClick={() => switchMode(o.key)}
                className="group flex w-full items-start gap-4 rounded-3xl border border-void-border bg-void-card/85 p-5 text-left shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-cyan/40 hover:bg-void-card hover:shadow-glow-cyan"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-void-subtle text-2xl shadow-inner border border-white/5 transition-transform group-hover:scale-110">
                  {o.icon}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    <span className="font-display text-base font-bold text-star group-hover:text-cyan-glow transition-colors">
                      {o.name}
                    </span>
                    {o.badge && (
                      <span
                        className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-bold ${o.badgeColor}`}
                      >
                        {o.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-star-soft">{o.desc}</p>
                </div>

                <span className="shrink-0 self-center font-mono text-star-mute text-lg transition-transform group-hover:translate-x-1 group-hover:text-cyan">
                  →
                </span>
              </button>
            ))}
        </div>
      </div>
    </main>
  );
}
