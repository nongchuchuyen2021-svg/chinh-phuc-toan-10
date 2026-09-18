"use client";

import { useEffect, useState } from "react";
import type { VennGame, VennQuestion, VennRegionId } from "@/lib/types";
import { saveAttempt } from "@/lib/progress";
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

// ─── Hình học cố định của biểu đồ Venn (2 tập hợp, không đổi giữa các câu) ───
const VB_W = 400;
const VB_H = 260;
const RECT = { x: 16, y: 16, width: 368, height: 228, rx: 20 };
const CIRCLE_A = { cx: 150, cy: 140, r: 92 };
const CIRCLE_B = { cx: 250, cy: 140, r: 92 };

function circlePath(c: { cx: number; cy: number; r: number }): string {
  return `M ${c.cx - c.r} ${c.cy} a ${c.r} ${c.r} 0 1 0 ${c.r * 2} 0 a ${c.r} ${c.r} 0 1 0 ${-c.r * 2} 0 Z`;
}

function rectPath(r: { x: number; y: number; width: number; height: number }): string {
  return `M ${r.x} ${r.y} H ${r.x + r.width} V ${r.y + r.height} H ${r.x} Z`;
}

function regionsEqual(selected: Set<VennRegionId>, answer: VennRegionId[]): boolean {
  if (selected.size !== answer.length) return false;
  return answer.every((r) => selected.has(r));
}

type RegionVisual = {
  fill: string;
  fillOpacity: number;
  stroke: string;
  strokeOpacity: number;
  strokeWidth: number;
  strokeDasharray?: string;
};

const REGION_BASE_COLOR: Record<VennRegionId, string> = {
  onlyA: "#06B6D4",
  onlyB: "#F59E0B",
  both: "#8B5CF6",
  outside: "#64748B",
};

const REGION_LEGEND: { id: VennRegionId; label: string }[] = [
  { id: "onlyA", label: "Chỉ A" },
  { id: "both", label: "A ∩ B" },
  { id: "onlyB", label: "Chỉ B" },
  { id: "outside", label: "Ngoài U" },
];

export default function VennGameClient({
  lessonId,
  game,
  onBack,
}: {
  lessonId: string;
  game: VennGame;
  onBack?: () => void;
}) {
  const progressKey = `${lessonId}:game:${game.id}`;
  const [deck, setDeck] = useState<VennQuestion[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<Set<VennRegionId>>(new Set());
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [wrongItems, setWrongItems] = useState<VennQuestion[]>([]);
  const [finished, setFinished] = useState(false);

  const labelA = game.labelA ?? "A";
  const labelB = game.labelB ?? "B";

  useEffect(() => {
    setDeck(shuffle(game.questions));
    setCurrent(0);
    setSelected(new Set());
    setChecked(false);
    setCorrectCount(0);
    setStreak(0);
    setWrongItems([]);
    setFinished(false);
  }, [game]);

  const question = deck[current];
  const scorePercent = deck.length ? Math.round((correctCount / deck.length) * 100) : 0;

  function toggleRegion(id: VennRegionId) {
    if (checked) return;
    playClick();
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function checkAnswer() {
    if (checked || !question || selected.size === 0) return;
    const correct = regionsEqual(selected, question.answer);
    setChecked(true);
    if (correct) {
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      setCorrectCount((c) => c + 1);
      if (nextStreak >= 3 && nextStreak % 3 === 0) playStreak();
      else playCorrect();
    } else {
      setStreak(0);
      playWrong();
      setWrongItems((list) => [...list, question]);
    }
  }

  function next() {
    playClick();
    if (current + 1 >= deck.length) {
      const finalScore = Math.round((correctCount / deck.length) * 100);
      saveAttempt(progressKey, finalScore);
      if (finalScore >= 80) playCelebration();
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(new Set());
      setChecked(false);
    }
  }

  function restart() {
    playClick();
    setDeck(shuffle(game.questions));
    setCurrent(0);
    setSelected(new Set());
    setChecked(false);
    setCorrectCount(0);
    setStreak(0);
    setWrongItems([]);
    setFinished(false);
  }

  function regionVisual(id: VennRegionId): RegionVisual {
    const base = REGION_BASE_COLOR[id];
    if (!checked) {
      const isSelected = selected.has(id);
      return {
        fill: base,
        fillOpacity: isSelected ? 0.55 : 0.1,
        stroke: base,
        strokeOpacity: isSelected ? 0.9 : 0,
        strokeWidth: 2.5,
      };
    }
    const isAnswer = question.answer.includes(id);
    const isSelected = selected.has(id);
    if (isAnswer && isSelected) {
      return { fill: "#10B981", fillOpacity: 0.55, stroke: "#10B981", strokeOpacity: 0.9, strokeWidth: 2.5 };
    }
    if (isAnswer && !isSelected) {
      return {
        fill: "#F59E0B",
        fillOpacity: 0.22,
        stroke: "#F59E0B",
        strokeOpacity: 0.9,
        strokeWidth: 2.5,
        strokeDasharray: "6 4",
      };
    }
    if (!isAnswer && isSelected) {
      return { fill: "#F43F5E", fillOpacity: 0.5, stroke: "#F43F5E", strokeOpacity: 0.9, strokeWidth: 2.5 };
    }
    return { fill: base, fillOpacity: 0.05, stroke: "transparent", strokeOpacity: 0, strokeWidth: 0 };
  }

  if (deck.length === 0 || !question) {
    return (
      <div className="flex min-h-[300px] items-center justify-center font-mono text-sm text-star-soft">
        Đang khởi tạo biểu đồ Venn…
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
              ? "Bậc thầy Vùng Venn!"
              : scorePercent >= 80
              ? "Rất xuất sắc!"
              : scorePercent >= 50
              ? "Khá tốt, hãy cố gắng thêm!"
              : "Cần ôn lại các phép toán tập hợp!"}
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
                  <div className="font-semibold text-star">
                    <MathText content={w.expression} />
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

  const visOnlyA = regionVisual("onlyA");
  const visOnlyB = regionVisual("onlyB");
  const visBoth = regionVisual("both");
  const visOutside = regionVisual("outside");
  const correct = checked && regionsEqual(selected, question.answer);

  // ===== MÀN HÌNH CHƠI GAME =====
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

      {/* Câu hỏi */}
      <div className="rounded-2xl border border-void-border bg-void-card/90 p-4 text-center shadow-card backdrop-blur-xl">
        <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-glow mb-1.5">
          🎯 Tô đúng (các) vùng biểu diễn
        </div>
        <div className="text-base sm:text-lg font-semibold text-star">
          <MathText content={question.expression} />
        </div>
      </div>

      {/* Biểu đồ Venn */}
      <div className="rounded-3xl border border-void-border bg-void-card/90 p-4 shadow-card backdrop-blur-xl">
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="w-full h-auto max-h-[320px]">
          <defs>
            <clipPath id="vg-clip-b">
              <circle cx={CIRCLE_B.cx} cy={CIRCLE_B.cy} r={CIRCLE_B.r} />
            </clipPath>
            <clipPath id="vg-clip-not-a" clipRule="evenodd">
              <path d={`${rectPath(RECT)} ${circlePath(CIRCLE_A)}`} />
            </clipPath>
            <clipPath id="vg-clip-not-b" clipRule="evenodd">
              <path d={`${rectPath(RECT)} ${circlePath(CIRCLE_B)}`} />
            </clipPath>
          </defs>

          {/* Vùng ngoài U \ (A ∪ B) — lồng 2 lớp clip để trừ đúng hợp của 2 hình tròn dù chúng giao nhau */}
          <g clipPath="url(#vg-clip-not-a)">
            <rect
              {...RECT}
              clipPath="url(#vg-clip-not-b)"
              onClick={() => toggleRegion("outside")}
              className="cursor-pointer transition-all duration-200"
              fill={visOutside.fill}
              fillOpacity={visOutside.fillOpacity}
              stroke={visOutside.stroke}
              strokeOpacity={visOutside.strokeOpacity}
              strokeWidth={visOutside.strokeWidth}
              strokeDasharray={visOutside.strokeDasharray}
            />
          </g>

          {/* onlyA = A \ B */}
          <circle
            cx={CIRCLE_A.cx}
            cy={CIRCLE_A.cy}
            r={CIRCLE_A.r}
            clipPath="url(#vg-clip-not-b)"
            onClick={() => toggleRegion("onlyA")}
            className="cursor-pointer transition-all duration-200"
            fill={visOnlyA.fill}
            fillOpacity={visOnlyA.fillOpacity}
            stroke={visOnlyA.stroke}
            strokeOpacity={visOnlyA.strokeOpacity}
            strokeWidth={visOnlyA.strokeWidth}
            strokeDasharray={visOnlyA.strokeDasharray}
          />

          {/* onlyB = B \ A */}
          <circle
            cx={CIRCLE_B.cx}
            cy={CIRCLE_B.cy}
            r={CIRCLE_B.r}
            clipPath="url(#vg-clip-not-a)"
            onClick={() => toggleRegion("onlyB")}
            className="cursor-pointer transition-all duration-200"
            fill={visOnlyB.fill}
            fillOpacity={visOnlyB.fillOpacity}
            stroke={visOnlyB.stroke}
            strokeOpacity={visOnlyB.strokeOpacity}
            strokeWidth={visOnlyB.strokeWidth}
            strokeDasharray={visOnlyB.strokeDasharray}
          />

          {/* both = A ∩ B */}
          <circle
            cx={CIRCLE_A.cx}
            cy={CIRCLE_A.cy}
            r={CIRCLE_A.r}
            clipPath="url(#vg-clip-b)"
            onClick={() => toggleRegion("both")}
            className="cursor-pointer transition-all duration-200"
            fill={visBoth.fill}
            fillOpacity={visBoth.fillOpacity}
            stroke={visBoth.stroke}
            strokeOpacity={visBoth.strokeOpacity}
            strokeWidth={visBoth.strokeWidth}
            strokeDasharray={visBoth.strokeDasharray}
          />

          {/* Viền + nhãn trang trí (không bắt sự kiện chuột) */}
          <g pointerEvents="none">
            <rect {...RECT} fill="none" stroke="#24324D" strokeWidth={2} />
            <circle cx={CIRCLE_A.cx} cy={CIRCLE_A.cy} r={CIRCLE_A.r} fill="none" stroke="#06B6D4" strokeOpacity={0.7} strokeWidth={2} />
            <circle cx={CIRCLE_B.cx} cy={CIRCLE_B.cy} r={CIRCLE_B.r} fill="none" stroke="#F59E0B" strokeOpacity={0.7} strokeWidth={2} />
            <text x={RECT.x + 14} y={RECT.y + 24} fill="#64748B" fontSize={13} fontFamily="var(--font-mono)" fontWeight={700}>
              U
            </text>
            <text x={CIRCLE_A.cx - 52} y={CIRCLE_A.cy - CIRCLE_A.r + 26} fill="#22D3EE" fontSize={17} fontFamily="var(--font-mono)" fontWeight={700}>
              {labelA}
            </text>
            <text x={CIRCLE_B.cx + 40} y={CIRCLE_B.cy - CIRCLE_B.r + 26} fill="#FBBF24" fontSize={17} fontFamily="var(--font-mono)" fontWeight={700}>
              {labelB}
            </text>
          </g>
        </svg>

        {/* Chú giải màu vùng */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 font-mono text-[10px] text-star-mute">
          {REGION_LEGEND.map((r) => (
            <span key={r.id} className="flex items-center gap-1.5">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: REGION_BASE_COLOR[r.id], opacity: 0.85 }}
              />
              {r.label}
            </span>
          ))}
        </div>
      </div>

      {/* Giải thích sau khi kiểm tra */}
      {checked && (
        <div
          className={`animate-fade-in-up rounded-2xl border p-4 text-xs sm:text-sm space-y-1 shadow-card ${
            correct ? "border-emerald/30 bg-emerald/10" : "border-rose/30 bg-rose/10"
          }`}
        >
          <div
            className={`font-bold flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider ${
              correct ? "text-emerald-glow" : "text-rose-glow"
            }`}
          >
            <span>{correct ? "✓ CHÍNH XÁC!" : "✕ CHƯA ĐÚNG — xem vùng viền nét đứt là đáp án đúng"}</span>
          </div>
          <div className="leading-relaxed text-star">
            <MathText content={question.explain} />
          </div>
        </div>
      )}

      {/* Buttons Controller */}
      <div className="flex items-center justify-center gap-3 pt-1">
        {!checked ? (
          <>
            {selected.size > 0 && (
              <button
                onClick={() => {
                  playClick();
                  setSelected(new Set());
                }}
                className="rounded-2xl border border-void-border bg-void-subtle px-5 py-3.5 font-mono text-xs font-bold text-star-soft hover:text-white transition active:scale-95"
              >
                Bỏ chọn
              </button>
            )}
            <button
              onClick={checkAnswer}
              disabled={selected.size === 0}
              className="flex-1 max-w-sm rounded-2xl bg-gradient-to-r from-cyan to-cyan-deep py-3.5 font-mono text-xs font-bold text-void-darker shadow-glow-cyan hover:opacity-95 hover:scale-[1.02] transition active:scale-95 disabled:opacity-40 disabled:hover:scale-100 disabled:cursor-not-allowed"
            >
              ✅ Kiểm tra vùng đã chọn
            </button>
          </>
        ) : (
          <button
            onClick={next}
            className="w-full max-w-sm rounded-2xl bg-gradient-to-r from-cyan to-cyan-deep py-3.5 font-mono text-xs font-bold text-void-darker shadow-glow-cyan hover:opacity-95 hover:scale-[1.02] transition flex items-center justify-center gap-2"
          >
            <span>Câu tiếp theo</span>
            <span>→</span>
          </button>
        )}
      </div>
    </div>
  );
}
