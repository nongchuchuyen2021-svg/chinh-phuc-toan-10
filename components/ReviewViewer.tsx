"use client";

import { useState, useEffect } from "react";
import type { LessonReview, MindmapNode } from "@/lib/types";
import MathText from "@/components/MathText";
import Confetti from "@/components/Confetti";
import { playClick, playCorrect, playCelebration } from "@/lib/sound";

type ReviewSubTab = "flashcards" | "mindmap" | "mistakes" | "checklist";

export default function ReviewViewer({
  lessonId,
  lessonTitle,
  review,
  onBack,
}: {
  lessonId?: string;
  lessonTitle: string;
  review: LessonReview;
  onBack?: () => void;
}) {
  const [activeSubTab, setActiveSubTab] = useState<ReviewSubTab>("flashcards");

  // Flashcards state
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState<Record<number, boolean>>({});

  // Checklist state
  const [checkedList, setCheckedList] = useState<Record<number, boolean>>({});
  const [hasCelebratedChecklist, setHasCelebratedChecklist] = useState(false);

  // Mindmap expanded nodes
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    "mm-1": true,
    "mm-2": true,
    "mm-3": true,
  });

  const card = review.flashcards[currentCard] || review.flashcards[0];
  const masteredCount = Object.values(masteredCards).filter(Boolean).length;
  const masteryPercent = review.flashcards.length
    ? Math.round((masteredCount / review.flashcards.length) * 100)
    : 0;

  const checkedCount = Object.values(checkedList).filter(Boolean).length;
  const checklistPercent = review.checklist.length
    ? Math.round((checkedCount / review.checklist.length) * 100)
    : 0;

  // Keyboard navigation for Flashcards
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (activeSubTab !== "flashcards") return;
      if (e.code === "Space") {
        e.preventDefault();
        handleFlip();
      } else if (e.code === "ArrowRight") {
        nextCard();
      } else if (e.code === "ArrowLeft") {
        prevCard();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSubTab, isFlipped, currentCard]);

  function handleFlip() {
    playClick();
    setIsFlipped((f) => !f);
  }

  function nextCard() {
    playClick();
    setIsFlipped(false);
    setCurrentCard((c) => (c + 1) % review.flashcards.length);
  }

  function prevCard() {
    playClick();
    setIsFlipped(false);
    setCurrentCard((c) => (c - 1 + review.flashcards.length) % review.flashcards.length);
  }

  function markMastered(mastered: boolean) {
    if (mastered) playCorrect();
    else playClick();
    setMasteredCards((prev) => ({ ...prev, [currentCard]: mastered }));
    nextCard();
  }

  function toggleCheck(idx: number) {
    playClick();
    const nextState = { ...checkedList, [idx]: !checkedList[idx] };
    setCheckedList(nextState);

    const newCheckedCount = Object.values(nextState).filter(Boolean).length;
    if (newCheckedCount === review.checklist.length && !hasCelebratedChecklist) {
      playCelebration();
      setHasCelebratedChecklist(true);
    }
  }

  function toggleMindmapNode(nodeId: string) {
    playClick();
    setExpandedNodes((prev) => ({ ...prev, [nodeId]: !prev[nodeId] }));
  }

  function expandAllMindmap() {
    playClick();
    const all: Record<string, boolean> = {};
    review.mindmap?.forEach((m) => {
      all[m.id] = true;
    });
    setExpandedNodes(all);
  }

  function collapseAllMindmap() {
    playClick();
    setExpandedNodes({});
  }

  const subTabs: { key: ReviewSubTab; label: string; icon: string; count?: number }[] = [
    { key: "flashcards", label: "Flashcard 3D", icon: "🗂️", count: review.flashcards.length },
    ...(review.mindmap && review.mindmap.length > 0
      ? [{ key: "mindmap" as ReviewSubTab, label: "Sơ đồ Tư duy", icon: "🧠" }]
      : []),
    { key: "mistakes", label: "Bẫy thi & Mẹo nhớ", icon: "⚠️", count: review.commonMistakes.length },
    { key: "checklist", label: "Bảng kiểm Năng lực", icon: "✅", count: review.checklist.length },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-16 animate-fade-in-up">
      {/* Top Bar Navigation */}
      <div className="rounded-3xl border border-void-border bg-void-card/90 p-5 shadow-card backdrop-blur-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/15 px-3 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider text-amber-glow">
            📋 Ôn tập tổng kết & Khắc sâu
          </div>
          <h2 className="mt-1 font-display text-xl sm:text-2xl font-bold text-star">
            Ghi Nhớ Trọng Tâm — {lessonTitle}
          </h2>
        </div>

        {onBack && (
          <button
            onClick={() => {
              playClick();
              onBack();
            }}
            className="rounded-2xl border border-void-border bg-void-subtle px-4 py-2 font-mono text-xs font-bold text-star-soft hover:text-white transition"
          >
            ← Trở về
          </button>
        )}
      </div>

      {/* Sub Tab Switcher */}
      <div className="flex flex-wrap gap-2 rounded-2xl border border-void-border bg-void-card/80 p-2 shadow-card backdrop-blur-xl">
        {subTabs.map((st) => {
          const isActive = activeSubTab === st.key;
          return (
            <button
              key={st.key}
              onClick={() => {
                playClick();
                setActiveSubTab(st.key);
              }}
              className={`flex items-center gap-2 rounded-xl px-3.5 py-2 font-mono text-xs font-bold transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-cyan to-cyan-deep text-void-darker shadow-glow-cyan"
                  : "bg-transparent text-star-soft hover:bg-void-subtle hover:text-white"
              }`}
            >
              <span>{st.icon}</span>
              <span>{st.label}</span>
              {st.count !== undefined && (
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                    isActive ? "bg-void-darker/20 text-void-darker" : "bg-void-subtle text-star-mute"
                  }`}
                >
                  {st.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ─── TAB 1: FLASHCARD 3D ────────────────────────────────────────────── */}
      {activeSubTab === "flashcards" && card && (
        <section className="space-y-4">
          {/* Mastery Progress Bar */}
          <div className="rounded-2xl border border-void-border bg-void-card/90 p-4 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-star-soft">Tiến độ ghi nhớ thuộc lòng:</span>
              <span className="font-bold text-cyan-glow">
                {masteredCount}/{review.flashcards.length} thẻ ({masteryPercent}%)
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-void-subtle overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan to-emerald transition-all duration-300 shadow-glow-cyan"
                style={{ width: `${masteryPercent}%` }}
              />
            </div>
          </div>

          {/* 3D Flip Card Container */}
          <div className="perspective-[1200px] min-h-[260px] cursor-pointer" onClick={handleFlip}>
            <div
              className={`relative w-full min-h-[260px] rounded-3xl p-8 text-center border transition-all duration-500 transform-style-3d shadow-card backdrop-blur-2xl flex flex-col justify-between ${
                isFlipped
                  ? "border-emerald/50 bg-gradient-to-br from-void-card via-emerald/10 to-void-card shadow-glow-emerald"
                  : "border-void-border bg-gradient-to-br from-void-card via-void-subtle to-void-card hover:border-cyan/50 hover:shadow-glow-cyan"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-widest">
                <span className={isFlipped ? "text-emerald-glow" : "text-cyan-glow"}>
                  {isFlipped ? "💡 ĐÁP ÁN / ĐỊNH NGHĨA" : "❓ CÂU HỎI GHI NHỚ"}
                </span>
                <span className="text-[11px] text-star-mute">
                  Thẻ {currentCard + 1}/{review.flashcards.length}
                </span>
              </div>

              <div className="my-auto py-6 text-base sm:text-xl font-semibold text-star leading-relaxed px-2">
                <MathText key={`${currentCard}-${isFlipped}`} content={isFlipped ? card.back : card.front} />
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-star-mute border-t border-void-border/50 pt-3">
                <span>Phím Space để lật</span>
                <span>{isFlipped ? "Nhấn để xem câu hỏi" : "Nhấn để lật mặt sau"}</span>
              </div>
            </div>
          </div>

          {/* Action Controller */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button
              onClick={prevCard}
              className="rounded-2xl border border-void-border bg-void-subtle px-4 py-2.5 font-mono text-xs font-bold text-star-soft hover:text-white transition"
            >
              ← Thẻ trước
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  markMastered(false);
                }}
                className="rounded-2xl border border-rose/30 bg-rose/10 px-4 py-2.5 font-mono text-xs font-bold text-rose-glow hover:bg-rose/20 transition"
              >
                🔄 Cần ôn lại
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  markMastered(true);
                }}
                className="rounded-2xl border border-emerald/30 bg-emerald/10 px-4 py-2.5 font-mono text-xs font-bold text-emerald-glow hover:bg-emerald/20 transition shadow-glow-emerald"
              >
                ⭐ Đã thuộc!
              </button>
            </div>

            <button
              onClick={nextCard}
              className="rounded-2xl border border-void-border bg-void-subtle px-4 py-2.5 font-mono text-xs font-bold text-star-soft hover:text-white transition"
            >
              Thẻ sau →
            </button>
          </div>
        </section>
      )}

      {/* ─── TAB 2: INTERACTIVE MINDMAP ──────────────────────────────────────── */}
      {activeSubTab === "mindmap" && review.mindmap && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-xs font-mono text-star-soft">
              Sơ đồ tư duy dạng cây mở rộng, hệ thống hóa kiến thức toàn bài.
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={expandAllMindmap}
                className="rounded-xl border border-void-border bg-void-subtle px-2.5 py-1 text-[11px] font-mono text-star-soft hover:text-cyan-glow transition"
              >
                Mở rộng tất cả
              </button>
              <button
                onClick={collapseAllMindmap}
                className="rounded-xl border border-void-border bg-void-subtle px-2.5 py-1 text-[11px] font-mono text-star-soft hover:text-cyan-glow transition"
              >
                Thu gọn
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {review.mindmap.map((node) => {
              const isExpanded = !!expandedNodes[node.id];
              return (
                <div
                  key={node.id}
                  className="rounded-3xl border border-void-border bg-void-card/90 overflow-hidden shadow-card transition-all"
                >
                  <button
                    onClick={() => toggleMindmapNode(node.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-void-subtle/60 transition"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl sm:text-3xl p-2 rounded-2xl bg-void-subtle border border-void-border">
                        {node.emoji}
                      </span>
                      <div>
                        <h4 className="font-display font-bold text-base sm:text-lg text-star">
                          <MathText content={node.title} />
                        </h4>
                        <div className="text-xs text-star-soft mt-0.5">
                          <MathText content={node.description} />
                        </div>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-star-mute p-2">
                      {isExpanded ? "▲" : "▼"}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="border-t border-void-border/60 bg-void-subtle/30 p-5 space-y-3 animate-fade-in-up">
                      {node.formula && (
                        <div className="rounded-2xl border border-cyan/30 bg-cyan/10 p-3 text-center text-cyan-glow font-bold">
                          <MathText content={node.formula} />
                        </div>
                      )}

                      {node.children && (
                        <div className="grid grid-cols-1 gap-2.5">
                          {node.children.map((c, cIdx) => (
                            <div
                              key={cIdx}
                              className="rounded-2xl border border-void-border bg-void-card/90 p-3.5 space-y-1"
                            >
                              <div className="font-semibold text-xs sm:text-sm text-star flex items-center gap-2">
                                <span className="text-cyan-glow">●</span>
                                <MathText content={c.title} />
                              </div>
                              <div className="text-xs text-star-soft leading-relaxed pl-4">
                                <MathText content={c.detail} />
                              </div>
                              {c.formula && (
                                <div className="pl-4 pt-1 font-mono text-xs text-amber-glow">
                                  <MathText content={c.formula} />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ─── TAB 3: BẪY THI & MẸO NHỚ ──────────────────────────────────────── */}
      {activeSubTab === "mistakes" && (
        <section className="space-y-6">
          {/* Tips Section */}
          {review.tips.length > 0 && (
            <div className="rounded-3xl border border-amber/30 bg-gradient-to-br from-void-card via-amber/10 to-void-card p-6 space-y-3 shadow-glow-amber">
              <h3 className="font-display font-bold text-base sm:text-lg text-amber-glow flex items-center gap-2">
                <span>⚡</span>
                <span>Bí Kíp Vàng Của Thủ Khoa Toán 10</span>
              </h3>
              <div className="space-y-2.5">
                {review.tips.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-star">
                    <span className="text-amber-glow font-bold">✦</span>
                    <div className="leading-relaxed">
                      <MathText content={tip} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Common Mistakes */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-base sm:text-lg text-star flex items-center gap-2">
              <span>⚠️</span>
              <span>Bẫy Đề Thi & Lỗi Sai Thường Gặp ({review.commonMistakes.length})</span>
            </h3>

            <div className="space-y-3">
              {review.commonMistakes.map((m, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl p-5 border border-rose/30 bg-rose/10 space-y-3 shadow-glow-rose"
                >
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-rose-glow">
                    <span className="text-lg">❌</span>
                    <div className="leading-relaxed">
                      <strong className="text-rose-glow">Sai lầm thường gặp: </strong>
                      <MathText content={m.mistake} />
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-glow bg-void-card/95 p-4 rounded-2xl border border-emerald/30">
                    <span className="text-lg">💡</span>
                    <div className="leading-relaxed">
                      <strong className="text-emerald-glow">Cách hóa giải chuẩn xác: </strong>
                      <MathText content={m.fix} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── TAB 4: SELF-CHECK CHECKLIST ────────────────────────────────────── */}
      {activeSubTab === "checklist" && (
        <section className="space-y-4">
          <Confetti trigger={checklistPercent === 100} />

          {/* Progress Card */}
          <div className="rounded-3xl border border-void-border bg-void-card/90 p-5 space-y-2 shadow-card backdrop-blur-xl">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-star-soft">Mục tiêu chuẩn đầu ra đã đạt:</span>
              <span
                className={`font-bold ${
                  checklistPercent === 100 ? "text-emerald-glow" : "text-cyan-glow"
                }`}
              >
                {checkedCount}/{review.checklist.length} mục ({checklistPercent}%)
              </span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-void-subtle overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan to-emerald transition-all duration-300 shadow-glow-emerald"
                style={{ width: `${checklistPercent}%` }}
              />
            </div>
            {checklistPercent === 100 && (
              <p className="text-center font-mono text-xs font-bold text-emerald-glow pt-1 animate-pulse">
                🎉 Tuyệt vời! Bạn đã hoàn thành 100% mục tiêu bài học!
              </p>
            )}
          </div>

          {/* Checklist items */}
          <div className="rounded-3xl border border-void-border bg-void-card/90 p-5 space-y-2.5 shadow-card backdrop-blur-xl">
            {review.checklist.map((item, idx) => {
              const isChecked = !!checkedList[idx];
              return (
                <label
                  key={idx}
                  className={`flex items-start gap-3 p-3.5 rounded-2xl cursor-pointer transition border ${
                    isChecked
                      ? "border-emerald/40 bg-emerald/10 text-emerald-glow"
                      : "border-transparent bg-void-subtle/50 hover:bg-void-subtle text-star-soft"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleCheck(idx)}
                    className="mt-0.5 w-4 h-4 rounded text-cyan focus:ring-cyan border-void-border bg-void-card cursor-pointer"
                  />
                  <span
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isChecked ? "line-through opacity-80" : ""
                    }`}
                  >
                    <MathText content={item} />
                  </span>
                </label>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
