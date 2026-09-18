"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { SortGame, SortGameItem } from "@/lib/types";
import { getLessonProgress, saveAttempt } from "@/lib/progress";
import { playClick, playCorrect, playWrong, playStreak, playCelebration } from "@/lib/sound";
import MathText from "@/components/MathText";
import Confetti from "@/components/Confetti";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const SWIPE_THRESHOLD = 80;

export default function SortGameClient({
  lessonId,
  game,
  onBack,
}: {
  lessonId: string;
  game: SortGame;
  onBack?: () => void;
}) {
  const progressKey = `${lessonId}:game:${game.id}`;
  const [deck, setDeck] = useState<SortGameItem[]>([]);
  const [current, setCurrent] = useState(0);
  const [answered, setAnswered] = useState<null | { picked: boolean; correct: boolean }>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [wrongItems, setWrongItems] = useState<SortGameItem[]>([]);
  const [finished, setFinished] = useState(false);
  const [best, setBest] = useState<number | null>(null);

  // Kéo vuốt thẻ
  const [dragX, setDragX] = useState(0);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDeck(shuffle(game.items));
    setBest(getLessonProgress(progressKey)?.best ?? null);
  }, [game, progressKey]);

  const item = deck[current];
  const scorePercent = deck.length ? Math.round((correctCount / deck.length) * 100) : 0;

  function commit(pickedMatch: boolean) {
    if (answered || !item) return;
    const correct = pickedMatch === item.isMatch;
    setAnswered({ picked: pickedMatch, correct });

    if (correct) {
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      setCorrectCount((c) => c + 1);
      if (nextStreak >= 3 && nextStreak % 3 === 0) {
        playStreak();
      } else {
        playCorrect();
      }
    } else {
      setStreak(0);
      playWrong();
      setWrongItems((list) => [...list, item]);
    }
    setDragX(0);
  }

  function next() {
    playClick();
    if (current + 1 >= deck.length) {
      const finalScore = Math.round(((correctCount + (answered?.correct ? 0 : 0)) / deck.length) * 100);
      saveAttempt(progressKey, finalScore);
      if (finalScore >= 80) playCelebration();
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setAnswered(null);
      setDragX(0);
    }
  }

  function restart() {
    playClick();
    setDeck(shuffle(game.items));
    setCurrent(0);
    setAnswered(null);
    setCorrectCount(0);
    setStreak(0);
    setWrongItems([]);
    setFinished(false);
    setDragX(0);
    setBest(getLessonProgress(progressKey)?.best ?? null);
  }

  // Pointer Events: Vuốt mượt trên cả Mobile lẫn PC
  function onPointerDown(e: React.PointerEvent) {
    if (answered) return;
    draggingRef.current = true;
    startXRef.current = e.clientX - dragX;
    cardRef.current?.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!draggingRef.current || answered) return;
    setDragX(e.clientX - startXRef.current);
  }

  function onPointerUp() {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    if (answered) return;
    if (dragX > SWIPE_THRESHOLD) {
      commit(true);
    } else if (dragX < -SWIPE_THRESHOLD) {
      commit(false);
    } else {
      setDragX(0);
    }
  }

  if (deck.length === 0) {
    return (
      <div className="flex min-h-[300px] items-center justify-center font-mono text-sm text-star-soft">
        Đang khởi tạo máy dò logic…
      </div>
    );
  }

  // ===== MÀN HÌNH KẾT QUẢ =====
  if (finished) {
    return (
      <div className="mx-auto max-w-xl animate-fade-in-up space-y-6 pb-12">
        <Confetti trigger={scorePercent >= 80} />
        <div className="rounded-3xl border border-void-border bg-void-card/90 p-8 text-center shadow-card backdrop-blur-xl">
          <div className="text-5xl mb-3">{scorePercent >= 80 ? "🏆" : scorePercent >= 50 ? "🎖️" : "💪"}</div>
          <h2 className="font-display text-2xl font-bold text-star">
            {scorePercent === 100
              ? "Tuyệt đỉnh Mệnh đề Toán học!"
              : scorePercent >= 80
              ? "Rất xuất sắc!"
              : scorePercent >= 50
              ? "Khá tốt, hãy cố gắng thêm!"
              : "Cần ôn lại lý thuyết Mệnh đề!"}
          </h2>
          <p className="mt-2 text-sm text-star-soft font-mono">
            Chính xác: {correctCount}/{deck.length} câu ({scorePercent}%)
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={restart}
              className="rounded-2xl bg-gradient-to-r from-cyan to-cyan-deep px-6 py-3 font-mono text-xs font-bold text-void-darker shadow-glow-cyan transition hover:scale-105"
            >
              🔄 Thử thách lại
            </button>
            {onBack && (
              <button
                onClick={() => {
                  playClick();
                  onBack();
                }}
                className="rounded-2xl border border-void-border bg-void-subtle px-6 py-3 font-mono text-xs font-bold text-star-soft hover:text-white transition"
              >
                ← Danh sách trò chơi
              </button>
            )}
          </div>
        </div>

        {wrongItems.length > 0 && (
          <div className="rounded-3xl border border-rose/30 bg-rose/10 p-6 space-y-4 shadow-glow-rose">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-rose-glow flex items-center gap-2">
              <span>⚠️</span>
              <span>Các câu cần lưu ý rút kinh nghiệm ({wrongItems.length})</span>
            </h3>
            <div className="space-y-3">
              {wrongItems.map((w, idx) => (
                <div key={idx} className="rounded-2xl bg-void-card/90 p-4 border border-void-border text-xs sm:text-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-semibold text-star">
                    <span>{w.emoji}</span>
                    <MathText content={w.label} />
                  </div>
                  <div className="text-[11px] font-mono text-cyan-glow flex items-center gap-1.5">
                    <span>Chuẩn:</span>
                    <span className="font-bold">{w.isMatch ? game.matchLabel : game.noMatchLabel}</span>
                  </div>
                  <div className="text-xs text-star-soft leading-relaxed border-t border-void-border/60 pt-1 mt-1">
                    💡 <MathText content={w.explain} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // ===== MÀN HÌNH CHƠI GAME =====
  const rotation = dragX * 0.06;
  const isRightGlow = dragX > 20;
  const isLeftGlow = dragX < -20;

  return (
    <div className="mx-auto max-w-xl space-y-6 select-none pb-10">
      {/* Header bar */}
      <div className="flex items-center justify-between gap-3 rounded-2xl border border-void-border bg-void-card/90 p-4 backdrop-blur-xl shadow-card">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={() => {
                playClick();
                onBack();
              }}
              className="rounded-xl border border-void-border bg-void-subtle px-3 py-1.5 font-mono text-xs font-bold text-star-soft hover:text-white transition"
            >
              ← Trở về
            </button>
          )}
          <span className="font-mono text-xs font-bold text-cyan-glow flex items-center gap-1.5">
            <span>{game.emoji}</span>
            <span>{game.title}</span>
          </span>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs">
          {streak >= 2 && (
            <span className="animate-pulse font-bold text-amber-glow flex items-center gap-1">
              🔥 {streak}
            </span>
          )}
          <span className="text-star-mute">
            {current + 1}/{deck.length}
          </span>
        </div>
      </div>

      {/* Instructions */}
      <div className="text-center text-xs text-star-soft/80 font-mono px-2">
        <MathText content={game.instructions} />
      </div>

      {/* Swipe Arena */}
      <div className="relative min-h-[340px] flex items-center justify-center perspective-[1000px] overflow-hidden py-4">
        {/* Drop zones indicators */}
        <div className="absolute inset-y-0 left-0 w-24 flex flex-col items-center justify-center pointer-events-none opacity-40 z-0">
          <span className="text-3xl">{game.noMatchEmoji}</span>
          <span className="mt-1 font-mono text-[10px] font-bold text-rose-glow uppercase tracking-wider">
            {game.noMatchLabel}
          </span>
        </div>

        <div className="absolute inset-y-0 right-0 w-24 flex flex-col items-center justify-center pointer-events-none opacity-40 z-0">
          <span className="text-3xl">{game.matchEmoji}</span>
          <span className="mt-1 font-mono text-[10px] font-bold text-emerald-glow uppercase tracking-wider">
            {game.matchLabel}
          </span>
        </div>

        {/* The Card */}
        {item && (
          <div
            key={item.id}
            ref={cardRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            style={{
              transform: `translate3d(${dragX}px, 0, 0) rotate(${rotation}deg)`,
              transition: draggingRef.current ? "none" : "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              touchAction: "none",
            }}
            className={`relative z-10 w-full max-w-sm cursor-grab active:cursor-grabbing rounded-3xl p-8 text-center border transition-shadow duration-200 backdrop-blur-2xl shadow-card ${
              answered
                ? answered.correct
                  ? "border-emerald/60 bg-emerald/15 shadow-glow-emerald"
                  : "border-rose/60 bg-rose/15 shadow-glow-rose"
                : isRightGlow
                ? "border-emerald/60 bg-void-card/95 shadow-glow-emerald"
                : isLeftGlow
                ? "border-rose/60 bg-void-card/95 shadow-glow-rose"
                : "border-void-border bg-void-card/95 hover:border-cyan/40 hover:shadow-glow-cyan"
            }`}
          >
            <div className="text-4xl mb-4">{item.emoji}</div>
            <div className="min-h-[90px] flex items-center justify-center text-base sm:text-lg font-semibold text-star leading-relaxed px-2">
              <MathText key={item.id} content={item.label} />
            </div>

            {answered && (
              <div className="mt-4 pt-3 border-t border-void-border/80 animate-fade-in-up text-left">
                <div className="flex items-center gap-2 font-mono text-xs font-bold">
                  {answered.correct ? (
                    <span className="text-emerald-glow">✓ CHÍNH XÁC!</span>
                  ) : (
                    <span className="text-rose-glow">✕ CHƯA ĐÚNG!</span>
                  )}
                  <span className="text-star-mute">· Đáp án: {item.isMatch ? game.matchLabel : game.noMatchLabel}</span>
                </div>
                <div className="mt-1 text-xs text-star-soft leading-relaxed">
                  <MathText content={item.explain} />
                </div>
              </div>
            )}

            {!answered && (
              <div className="mt-6 text-[10px] font-mono text-star-mute flex items-center justify-between">
                <span>← Vuốt trái: {game.noMatchLabel}</span>
                <span>Vuốt phải: {game.matchLabel} →</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Buttons Controller */}
      <div className="flex items-center justify-center gap-4 pt-2">
        {!answered ? (
          <>
            <button
              onClick={() => commit(false)}
              className="flex-1 max-w-[160px] rounded-2xl border border-rose/40 bg-rose/15 py-3 font-mono text-xs font-bold text-rose-glow hover:bg-rose/25 hover:shadow-glow-rose transition active:scale-95 flex items-center justify-center gap-2"
            >
              <span>{game.noMatchEmoji}</span>
              <span>{game.noMatchLabel}</span>
            </button>

            <button
              onClick={() => commit(true)}
              className="flex-1 max-w-[160px] rounded-2xl border border-emerald/40 bg-emerald/15 py-3 font-mono text-xs font-bold text-emerald-glow hover:bg-emerald/25 hover:shadow-glow-emerald transition active:scale-95 flex items-center justify-center gap-2"
            >
              <span>{game.matchEmoji}</span>
              <span>{game.matchLabel}</span>
            </button>
          </>
        ) : (
          <button
            onClick={next}
            className="w-full max-w-xs rounded-2xl bg-gradient-to-r from-cyan to-cyan-deep py-3.5 font-mono text-xs font-bold text-void-darker shadow-glow-cyan hover:opacity-95 hover:scale-105 transition flex items-center justify-center gap-2"
          >
            <span>Tiếp tục</span>
            <span>→</span>
          </button>
        )}
      </div>
    </div>
  );
}
