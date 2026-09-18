"use client";

import { useEffect, useState, useMemo } from "react";
import type { MatchGame, MatchPairItem } from "@/lib/types";
import { getLessonProgress, saveAttempt } from "@/lib/progress";
import { playClick, playCorrect, playWrong, playCelebration } from "@/lib/sound";
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

export default function MatchGameClient({
  lessonId,
  game,
  onBack,
}: {
  lessonId: string;
  game: MatchGame;
  onBack?: () => void;
}) {
  const progressKey = `${lessonId}:game:${game.id}`;
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [wrongShake, setWrongShake] = useState<{ leftId: string; rightId: string } | null>(null);
  const [rightItems, setRightItems] = useState<{ id: string; text: string }[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [finished, setFinished] = useState(false);
  const [lastMatchedExplanation, setLastMatchedExplanation] = useState<string | null>(null);

  useEffect(() => {
    // Xáo trộn danh sách bên phải
    const shuffledRights = shuffle(
      game.pairs.map((p) => ({
        id: p.id,
        text: p.right,
      }))
    );
    setRightItems(shuffledRights);
    setMatchedIds([]);
    setSelectedLeft(null);
    setSelectedRight(null);
    setWrongShake(null);
    setAttempts(0);
    setFinished(false);
    setLastMatchedExplanation(null);
  }, [game]);

  function handleSelectLeft(id: string) {
    if (matchedIds.includes(id) || wrongShake) return;
    playClick();
    setSelectedLeft(id);
    if (selectedRight) {
      checkMatch(id, selectedRight);
    }
  }

  function handleSelectRight(id: string) {
    if (matchedIds.includes(id) || wrongShake) return;
    playClick();
    setSelectedRight(id);
    if (selectedLeft) {
      checkMatch(selectedLeft, id);
    }
  }

  function checkMatch(leftId: string, rightId: string) {
    setAttempts((a) => a + 1);
    if (leftId === rightId) {
      // Đúng cặp!
      playCorrect();
      const pair = game.pairs.find((p) => p.id === leftId);
      setLastMatchedExplanation(pair ? pair.explain : null);
      const newMatched = [...matchedIds, leftId];
      setMatchedIds(newMatched);
      setSelectedLeft(null);
      setSelectedRight(null);

      if (newMatched.length === game.pairs.length) {
        // Hoàn thành tất cả
        playCelebration();
        saveAttempt(progressKey, 100);
        setFinished(true);
      }
    } else {
      // Sai cặp!
      playWrong();
      setWrongShake({ leftId, rightId });
      setTimeout(() => {
        setWrongShake(null);
        setSelectedLeft(null);
        setSelectedRight(null);
      }, 700);
    }
  }

  function restart() {
    playClick();
    setRightItems(
      shuffle(
        game.pairs.map((p) => ({
          id: p.id,
          text: p.right,
        }))
      )
    );
    setMatchedIds([]);
    setSelectedLeft(null);
    setSelectedRight(null);
    setWrongShake(null);
    setAttempts(0);
    setFinished(false);
    setLastMatchedExplanation(null);
  }

  const accuracy = attempts > 0 ? Math.round((game.pairs.length / attempts) * 100) : 100;

  if (finished) {
    return (
      <div className="mx-auto max-w-xl animate-fade-in-up space-y-6 pb-12">
        <Confetti trigger={true} />
        <div className="rounded-3xl border border-void-border bg-void-card/90 p-8 text-center shadow-card backdrop-blur-xl">
          <div className="text-5xl mb-3">🏹 🎯</div>
          <h2 className="font-display text-2xl font-bold text-star">
            Chúc mừng Bậc thầy Logic!
          </h2>
          <p className="mt-2 text-sm text-star-soft">
            Bạn đã ghép đúng toàn bộ {game.pairs.length} cặp mệnh đề và phủ định.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-cyan/10 border border-cyan/30 px-4 py-2 font-mono text-xs font-bold text-cyan-glow">
            <span>Độ chuẩn xác: {accuracy}% ({attempts} lượt thử)</span>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={restart}
              className="rounded-2xl bg-gradient-to-r from-cyan to-cyan-deep px-6 py-3 font-mono text-xs font-bold text-void-darker shadow-glow-cyan transition hover:scale-105"
            >
              🔄 Ghép lại từ đầu
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
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6 select-none pb-12">
      {/* Top Header */}
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

        <div className="font-mono text-xs text-star-mute">
          Đã ghép: <span className="font-bold text-emerald-glow">{matchedIds.length}</span>/{game.pairs.length}
        </div>
      </div>

      {/* Instructions */}
      <div className="text-center text-xs text-star-soft/80 font-mono px-2">
        <MathText content={game.instructions} />
      </div>

      {/* Arena: 2 Columns */}
      <div className="grid grid-cols-2 gap-2 sm:gap-4">
        {/* Cột Trái: Mệnh đề P */}
        <div className="space-y-2 sm:space-y-2.5">
          <div className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-cyan-glow text-center pb-1">
            <MathText content={game.leftLabel ?? "📌 Mệnh đề $P$"} />
          </div>
          {game.pairs.map((p) => {
            const isMatched = matchedIds.includes(p.id);
            const isSelected = selectedLeft === p.id;
            const isShake = wrongShake?.leftId === p.id;

            return (
              <button
                key={p.id}
                disabled={isMatched}
                onClick={() => handleSelectLeft(p.id)}
                className={`w-full text-left p-2.5 sm:p-4 rounded-2xl border transition-all duration-200 text-xs sm:text-sm font-semibold flex items-center justify-between gap-2 sm:gap-3 ${
                  isMatched
                    ? "border-emerald/40 bg-emerald/10 text-emerald-glow line-through opacity-70 cursor-default"
                    : isShake
                    ? "border-rose/60 bg-rose/20 text-rose-glow animate-shake shadow-glow-rose"
                    : isSelected
                    ? "border-cyan/70 bg-cyan/15 text-white shadow-glow-cyan scale-[1.02]"
                    : "border-void-border bg-void-card/90 text-star hover:border-cyan/40 hover:bg-void-subtle"
                }`}
              >
                <div className="leading-relaxed">
                  <MathText content={p.left} />
                </div>
                {isMatched && <span className="text-emerald-glow font-bold">✓</span>}
              </button>
            );
          })}
        </div>

        {/* Cột Phải: Mệnh đề phủ định \overline{P} */}
        <div className="space-y-2 sm:space-y-2.5">
          <div className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-glow text-center pb-1">
            <MathText content={game.rightLabel ?? "🔄 Mệnh đề Phủ định $\\overline{P}$"} />
          </div>
          {rightItems.map((r) => {
            const isMatched = matchedIds.includes(r.id);
            const isSelected = selectedRight === r.id;
            const isShake = wrongShake?.rightId === r.id;

            return (
              <button
                key={r.id}
                disabled={isMatched}
                onClick={() => handleSelectRight(r.id)}
                className={`w-full text-left p-2.5 sm:p-4 rounded-2xl border transition-all duration-200 text-xs sm:text-sm font-semibold flex items-center justify-between gap-2 sm:gap-3 ${
                  isMatched
                    ? "border-emerald/40 bg-emerald/10 text-emerald-glow line-through opacity-70 cursor-default"
                    : isShake
                    ? "border-rose/60 bg-rose/20 text-rose-glow animate-shake shadow-glow-rose"
                    : isSelected
                    ? "border-amber/70 bg-amber/15 text-white shadow-glow-amber scale-[1.02]"
                    : "border-void-border bg-void-card/90 text-star hover:border-amber/40 hover:bg-void-subtle"
                }`}
              >
                <div className="leading-relaxed">
                  <MathText content={r.text} />
                </div>
                {isMatched && <span className="text-emerald-glow font-bold">✓</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mini Explanation Box on last match */}
      {lastMatchedExplanation && (
        <div className="animate-fade-in-up rounded-2xl border border-emerald/30 bg-emerald/10 p-4 text-xs sm:text-sm text-emerald-glow space-y-1 shadow-glow-emerald">
          <div className="font-bold flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider">
            <span>💡 Giải thích logic vừa ghép:</span>
          </div>
          <div className="leading-relaxed text-star">
            <MathText content={lastMatchedExplanation} />
          </div>
        </div>
      )}
    </div>
  );
}
