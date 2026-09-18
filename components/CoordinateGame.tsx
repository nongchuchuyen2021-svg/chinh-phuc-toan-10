"use client";

import { useEffect, useMemo, useState } from "react";
import type { CoordinateGame, CoordinatePoint, CoordinateQuestion } from "@/lib/types";
import { getLessonProgress, saveAttempt } from "@/lib/progress";
import { playClick, playCorrect, playWrong, playStreak, playCelebration } from "@/lib/sound";
import MathText from "@/components/MathText";
import Confetti from "@/components/Confetti";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[j], a[i]] = [a[i], a[j]];
  }
  return a;
}

// ─── Kích thước và Tỷ lệ Hệ trục Toạ độ Oxy ──────────────────────────────────
const VB_W = 420;
const VB_H = 360;
const ORIGIN_X = 210;
const ORIGIN_Y = 180;
const SCALE = 28; // 28 pixel cho 1 đơn vị toạ độ

function toSvgX(mathX: number): number {
  return ORIGIN_X + mathX * SCALE;
}

function toSvgY(mathY: number): number {
  return ORIGIN_Y - mathY * SCALE;
}

// Tính toán toạ độ 2 đầu mút cắt đường thẳng ax + by + c = 0 qua khung nhìn
function getLineEndpoints(a: number, b: number, c: number) {
  const xMin = -7.5;
  const xMax = 7.5;
  const yMin = -6;
  const yMax = 6;

  if (Math.abs(b) < 1e-6) {
    // Đường thẳng đứng x = -c / a
    const xVal = -c / a;
    return {
      x1: toSvgX(xVal),
      y1: toSvgY(yMin),
      x2: toSvgX(xVal),
      y2: toSvgY(yMax),
    };
  }

  // Đường xiên hoặc ngang y = (-a*x - c) / b
  const yAtXMin = (-a * xMin - c) / b;
  const yAtXMax = (-a * xMax - c) / b;

  return {
    x1: toSvgX(xMin),
    y1: toSvgY(yAtXMin),
    x2: toSvgX(xMax),
    y2: toSvgY(yAtXMax),
  };
}

export default function CoordinateGameClient({
  lessonId,
  game,
  onBack,
}: {
  lessonId: string;
  game: CoordinateGame;
  onBack?: () => void;
}) {
  const progressKey = `${lessonId}:game:${game.id}`;
  const [questions, setQuestions] = useState<CoordinateQuestion[]>([]);
  const [current, setCurrent] = useState(0);
  const [selectedPoint, setSelectedPoint] = useState<CoordinatePoint | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [wrongQuestions, setWrongQuestions] = useState<{ q: CoordinateQuestion; picked: CoordinatePoint }[]>([]);
  const [finished, setFinished] = useState(false);
  const [best, setBest] = useState<number | null>(null);

  useEffect(() => {
    setQuestions(shuffle(game.questions));
    setBest(getLessonProgress(progressKey)?.best ?? null);
  }, [game, progressKey]);

  const q = questions[current];
  const scorePercent = questions.length ? Math.round((correctCount / questions.length) * 100) : 0;

  function handleSelectPoint(pt: CoordinatePoint) {
    if (selectedPoint || !q) return;
    playClick();
    setSelectedPoint(pt);

    if (pt.isSolution) {
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
      setWrongQuestions((list) => [...list, { q, picked: pt }]);
    }
  }

  function handleNext() {
    playClick();
    if (current + 1 >= questions.length) {
      const finalScore = Math.round((correctCount / questions.length) * 100);
      saveAttempt(progressKey, finalScore);
      if (finalScore >= 80) playCelebration();
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelectedPoint(null);
    }
  }

  function restart() {
    playClick();
    setQuestions(shuffle(game.questions));
    setCurrent(0);
    setSelectedPoint(null);
    setCorrectCount(0);
    setStreak(0);
    setWrongQuestions([]);
    setFinished(false);
    setBest(getLessonProgress(progressKey)?.best ?? null);
  }

  if (questions.length === 0 || !q) {
    return (
      <div className="flex min-h-[350px] items-center justify-center font-mono text-sm text-star-soft">
        Đang chuẩn bị Radar Tọa độ Oxy…
      </div>
    );
  }

  // Tính toạ độ đường thẳng bờ
  const lineEnds = getLineEndpoints(q.boundary.a, q.boundary.b, q.boundary.c);

  // ===== MÀN HÌNH KẾT QUẢ =====
  if (finished) {
    return (
      <div className="mx-auto max-w-xl animate-fade-in-up space-y-6 pb-12">
        <Confetti trigger={scorePercent >= 80} />
        <div className="rounded-3xl border border-void-border bg-void-card/90 p-8 text-center shadow-card backdrop-blur-xl">
          <div className="text-5xl mb-3">
            {scorePercent >= 80 ? "🎯 🏆" : scorePercent >= 50 ? "🎖️" : "💪"}
          </div>
          <h2 className="font-display text-2xl font-bold text-star">
            {scorePercent === 100
              ? "Bách Phát Bách Trúng Miền Nghiệm!"
              : scorePercent >= 80
              ? "Xạ Thủ Toạ Độ Xuất Sắc!"
              : scorePercent >= 50
              ? "Khá Tốt, Cần Luyện Thêm Độ Chuẩn!"
              : "Hãy Ôn Lại Quy Tắc Thử Điểm O(0;0)!"}
          </h2>
          <p className="mt-2 text-sm text-star-soft font-mono">
            Độ chính xác: {correctCount}/{questions.length} câu ({scorePercent}%)
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={restart}
              className="rounded-2xl bg-gradient-to-r from-cyan to-cyan-deep px-6 py-3 font-mono text-xs font-bold text-void-darker shadow-glow-cyan transition hover:scale-105"
            >
              🔄 Bắn radar lượt mới
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

        {wrongQuestions.length > 0 && (
          <div className="rounded-3xl border border-rose/30 bg-rose/10 p-6 space-y-4 shadow-glow-rose">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-rose-glow flex items-center gap-2">
              <span>⚠️</span>
              <span>Các câu cần lưu ý rút kinh nghiệm ({wrongQuestions.length})</span>
            </h3>
            <div className="space-y-3">
              {wrongQuestions.map((item, idx) => {
                const solPoint = item.q.points.find((p) => p.isSolution);
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-void-card/90 p-4 border border-void-border text-xs sm:text-sm space-y-2"
                  >
                    <div className="font-semibold text-star flex items-center gap-2">
                      <span className="text-cyan-glow">BPT:</span>
                      <MathText content={item.q.inequality} />
                    </div>
                    <div className="text-xs text-rose-glow flex items-center gap-1.5 flex-wrap">
                      <span>Bạn đã chọn nhầm: Điểm <strong>{item.picked.name}({item.picked.x}; {item.picked.y})</strong> —</span>
                      <MathText content={item.picked.calcSteps} />
                    </div>
                    {solPoint && (
                      <div className="text-xs text-emerald-glow flex items-center gap-1.5 flex-wrap">
                        <span>Đáp án đúng là: Điểm <strong>{solPoint.name}({solPoint.x}; {solPoint.y})</strong> —</span>
                        <MathText content={solPoint.calcSteps} />
                      </div>
                    )}
                    <div className="text-xs text-star-soft border-t border-void-border/60 pt-1.5 mt-1 leading-relaxed">
                      💡 <MathText content={item.q.explain} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  // ===== MÀN HÌNH CHƠI GAME =====
  return (
    <div className="mx-auto max-w-2xl space-y-5 select-none pb-12 animate-fade-in-up">
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

        <div className="flex items-center gap-3 font-mono text-xs">
          {streak >= 2 && (
            <span className="animate-pulse font-bold text-amber-glow flex items-center gap-1">
              🔥 {streak}
            </span>
          )}
          <span className="text-star-mute">
            Câu {current + 1}/{questions.length}
          </span>
        </div>
      </div>

      {/* Target Question Card */}
      <div className="rounded-3xl border border-cyan/30 bg-gradient-to-r from-void-card via-void-subtle to-void-card p-5 shadow-card backdrop-blur-xl text-center space-y-2">
        <div className="font-mono text-[11px] uppercase tracking-wider text-cyan-glow font-bold flex items-center justify-center gap-2">
          <span>🎯 Bất phương trình mục tiêu</span>
          <span className="rounded-full bg-cyan/20 border border-cyan/40 px-2 py-0.5 text-[10px]">
            {q.boundary.isStrict ? "Nét đứt · Không kể bờ" : "Nét liền · Kể cả bờ"}
          </span>
        </div>
        <div className="font-display text-2xl sm:text-3xl font-bold text-star drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
          <MathText content={q.inequality} />
        </div>
        <div className="text-xs text-star-soft font-mono">
          <MathText content={q.prompt ?? "Bấm vào Điểm mục tiêu nằm TRONG MIỀN NGHIỆM của BPT!"} />
        </div>
      </div>

      {/* Interactive Cartesian Coordinate System (SVG) */}
      <div className="relative overflow-hidden rounded-3xl border border-void-border bg-[#080d1a] p-3 shadow-card flex flex-col items-center justify-center">
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          className="w-full max-w-[440px] aspect-[420/360] select-none"
        >
          <defs>
            {/* Lưới toạ độ nhỏ */}
            <pattern id="grid-sub" width={SCALE} height={SCALE} patternUnits="userSpaceOnUse">
              <path d={`M ${SCALE} 0 L 0 0 0 ${SCALE}`} fill="none" stroke="#1c2844" strokeWidth="0.8" />
            </pattern>
            {/* Hiệu ứng phát sáng radar cho điểm */}
            <radialGradient id="point-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="correct-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="wrong-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* 1. Nền lưới toạ độ */}
          <rect width={VB_W} height={VB_H} fill="#070b16" />
          <rect width={VB_W} height={VB_H} fill="url(#grid-sub)" />

          {/* 2. Trục Toạ độ Ox và Oy */}
          {/* Trục Ox */}
          <line x1="15" y1={ORIGIN_Y} x2={VB_W - 15} y2={ORIGIN_Y} stroke="#475569" strokeWidth="1.5" />
          <polygon
            points={`${VB_W - 15},${ORIGIN_Y - 4} ${VB_W - 5},${ORIGIN_Y} ${VB_W - 15},${ORIGIN_Y + 4}`}
            fill="#475569"
          />
          <text x={VB_W - 14} y={ORIGIN_Y + 15} fill="#94a3b8" fontSize="11" fontFamily="monospace" fontWeight="bold">
            x
          </text>

          {/* Trục Oy */}
          <line x1={ORIGIN_X} y1={VB_H - 15} x2={ORIGIN_X} y2="15" stroke="#475569" strokeWidth="1.5" />
          <polygon
            points={`${ORIGIN_X - 4},15 ${ORIGIN_X},5 ${ORIGIN_X + 4},15`}
            fill="#475569"
          />
          <text x={ORIGIN_X + 10} y="18" fill="#94a3b8" fontSize="11" fontFamily="monospace" fontWeight="bold">
            y
          </text>

          {/* Gốc toạ độ O */}
          <text x={ORIGIN_X - 12} y={ORIGIN_Y + 14} fill="#64748b" fontSize="10" fontFamily="monospace">
            O
          </text>

          {/* Các vạch số trên trục Ox */}
          {[-4, -2, 2, 4].map((v) => {
            const xPos = toSvgX(v);
            return (
              <g key={`tick-x-${v}`}>
                <line x1={xPos} y1={ORIGIN_Y - 3} x2={xPos} y2={ORIGIN_Y + 3} stroke="#64748b" strokeWidth="1" />
                <text x={xPos} y={ORIGIN_Y + 14} textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">
                  {v}
                </text>
              </g>
            );
          })}

          {/* Các vạch số trên trục Oy */}
          {[-4, -2, 2, 4].map((v) => {
            const yPos = toSvgY(v);
            return (
              <g key={`tick-y-${v}`}>
                <line x1={ORIGIN_X - 3} y1={yPos} x2={ORIGIN_X + 3} y2={yPos} stroke="#64748b" strokeWidth="1" />
                <text x={ORIGIN_X - 12} y={yPos + 3} textAnchor="end" fill="#64748b" fontSize="9" fontFamily="monospace">
                  {v}
                </text>
              </g>
            );
          })}

          {/* 3. Đường thẳng bờ d */}
          <line
            x1={lineEnds.x1}
            y1={lineEnds.y1}
            x2={lineEnds.x2}
            y2={lineEnds.y2}
            stroke="#06b6d4"
            strokeWidth="2.5"
            strokeDasharray={q.boundary.isStrict ? "6,5" : undefined}
            className="drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
          />

          {/* Nhãn tên đường thẳng bờ */}
          <g transform={`translate(${Math.min(VB_W - 90, Math.max(30, lineEnds.x1 + 20))}, ${Math.min(VB_H - 25, Math.max(25, lineEnds.y1 + 15))})`}>
            <rect x="-4" y="-12" width="70" height="18" rx="4" fill="#0c1427" stroke="#06b6d4" strokeWidth="0.8" opacity="0.9" />
            <text x="31" y="1" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
              {q.boundary.label}
            </text>
          </g>

          {/* 4. Các điểm mục tiêu (A, B, C, D) */}
          {q.points.map((pt) => {
            const px = toSvgX(pt.x);
            const py = toSvgY(pt.y);
            const isSelected = selectedPoint?.id === pt.id;
            const isAnswered = selectedPoint !== null;

            // Màu sắc trạng thái
            let ringFill = "url(#point-glow)";
            let dotStroke = "#38bdf8";
            let dotFill = "#0284c7";
            let textColor = "#f1f5f9";

            if (isAnswered) {
              if (pt.isSolution) {
                ringFill = "url(#correct-glow)";
                dotStroke = "#10b981";
                dotFill = "#059669";
              } else if (isSelected && !pt.isSolution) {
                ringFill = "url(#wrong-glow)";
                dotStroke = "#f43f5e";
                dotFill = "#e11d48";
              }
            }

            return (
              <g
                key={pt.id}
                onClick={() => handleSelectPoint(pt)}
                className={`cursor-pointer transition-transform duration-200 ${
                  isAnswered ? "" : "hover:scale-110 active:scale-95"
                }`}
              >
                {/* Vòng hào quang radar */}
                <circle cx={px} cy={py} r="18" fill={ringFill} className={isAnswered ? "" : "animate-pulse"} />

                {/* Điểm toạ độ chính */}
                <circle cx={px} cy={py} r="5.5" fill={dotFill} stroke={dotStroke} strokeWidth="2" />

                {/* Hộp nhãn toạ độ bên cạnh điểm */}
                <g transform={`translate(${px + 8}, ${py - 8})`}>
                  <rect
                    x="-2"
                    y="-11"
                    width="62"
                    height="16"
                    rx="5"
                    fill="#0a1020"
                    stroke={isSelected ? dotStroke : "#223558"}
                    strokeWidth={isSelected ? "1.5" : "1"}
                    opacity="0.95"
                  />
                  <text
                    x="29"
                    y="1"
                    fill={textColor}
                    fontSize="9.5"
                    fontFamily="monospace"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {pt.name}({pt.x}; {pt.y})
                  </text>
                </g>
              </g>
            );
          })}
        </svg>

        <div className="mt-1 text-[11px] font-mono text-star-mute flex items-center justify-between w-full px-2">
          <span>💡 Bấm trực tiếp vào điểm trên hình, hoặc chọn thẻ bên dưới:</span>
          <span className="text-cyan-glow font-bold">{q.boundary.label}</span>
        </div>
      </div>

      {/* Target Points Selector Buttons (Mobile Friendly) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {q.points.map((pt) => {
          const isSelected = selectedPoint?.id === pt.id;
          const isAnswered = selectedPoint !== null;

          let btnStyle = "border-void-border bg-void-card/90 text-star hover:border-cyan/50 hover:bg-void-subtle";
          if (isAnswered) {
            if (pt.isSolution) {
              btnStyle = "border-emerald/70 bg-emerald/15 text-emerald-glow shadow-glow-emerald font-bold";
            } else if (isSelected && !pt.isSolution) {
              btnStyle = "border-rose/70 bg-rose/15 text-rose-glow shadow-glow-rose font-bold animate-shake";
            } else {
              btnStyle = "border-void-border/50 bg-void-card/50 text-star-mute opacity-60";
            }
          }

          return (
            <button
              key={pt.id}
              disabled={isAnswered}
              onClick={() => handleSelectPoint(pt)}
              className={`rounded-2xl border p-3 text-center transition-all duration-200 active:scale-95 flex flex-col items-center justify-center gap-1 ${btnStyle}`}
            >
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-xs font-bold text-cyan-glow">
                  Điểm {pt.name}
                </span>
                {isAnswered && pt.isSolution && <span className="text-emerald-glow font-bold">✓</span>}
                {isAnswered && isSelected && !pt.isSolution && <span className="text-rose-glow font-bold">✕</span>}
              </div>
              <div className="font-mono text-xs text-star-soft">
                ({pt.x}; {pt.y})
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Live Substitution & Explanation Box */}
      {selectedPoint && (
        <div className="animate-fade-in-up rounded-2xl border border-void-border/90 bg-void-card/95 p-4 space-y-3 shadow-card">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-void-border/60 pb-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl font-mono text-xs font-bold ${
                selectedPoint.isSolution
                  ? "bg-emerald/20 text-emerald-glow border border-emerald/50 shadow-glow-emerald"
                  : "bg-rose/20 text-rose-glow border border-rose/50 shadow-glow-rose"
              }`}
            >
              <span>{selectedPoint.isSolution ? "✓ BẮN TRÚNG MIỀN NGHIỆM!" : "✕ BẪY: ĐIỂM KHÔNG THUỘC MIỀN NGHIỆM!"}</span>
            </span>

            <span className="font-mono text-xs text-star-mute">
              Thử điểm: <strong className="text-cyan-glow">{selectedPoint.name}({selectedPoint.x}; {selectedPoint.y})</strong>
            </span>
          </div>

          <div className="rounded-xl bg-void-subtle p-3 text-xs sm:text-sm font-mono text-star space-y-1">
            <div className="text-star-mute text-[11px]">Phép thử toạ độ tức thì:</div>
            <div className="text-cyan-glow font-semibold">
              <MathText content={selectedPoint.calcSteps} />
            </div>
          </div>

          <div className="text-xs sm:text-sm text-star-soft leading-relaxed border-t border-void-border/60 pt-2">
            💡 <MathText content={q.explain} />
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={handleNext}
              className="w-full sm:w-auto rounded-2xl bg-gradient-to-r from-cyan to-cyan-deep px-6 py-3 font-mono text-xs font-bold text-void-darker shadow-glow-cyan hover:scale-[1.02] transition flex items-center justify-center gap-2"
            >
              <span>{current + 1 >= questions.length ? "Xem tổng kết điểm 🏁" : "Câu tiếp theo"}</span>
              <span>→</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
