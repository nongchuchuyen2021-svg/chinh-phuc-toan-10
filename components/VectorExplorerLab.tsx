"use client";

import React, { useState, useMemo } from "react";
import MathText from "@/components/MathText";

interface Preset {
  label: string;
  desc: string;
  A: { x: number; y: number };
  B: { x: number; y: number };
  C?: { x: number; y: number };
  D?: { x: number; y: number };
}

const PRESETS: Preset[] = [
  {
    label: "Vectơ gốc (1; 2) → (5; 5)",
    desc: "Độ dài đẹp bằng 5 (bộ ba Pytago 3 - 4 - 5)",
    A: { x: 1, y: 2 },
    B: { x: 5, y: 5 },
  },
  {
    label: "Hai vectơ bằng nhau AB = CD",
    desc: "Cùng hướng và cùng độ dài trong hình bình hành",
    A: { x: 1, y: 1 },
    B: { x: 5, y: 2 },
    C: { x: 1, y: 4 },
    D: { x: 5, y: 5 },
  },
  {
    label: "Hai vectơ đối nhau AB = -CD",
    desc: "Cùng phương, ngược hướng, cùng độ dài",
    A: { x: 1, y: 3 },
    B: { x: 6, y: 3 },
    C: { x: 6, y: 5 },
    D: { x: 1, y: 5 },
  },
  {
    label: "Vectơ nằm ngang (trục Ox)",
    desc: "Phương song song trục hoành",
    A: { x: 1, y: 2 },
    B: { x: 7, y: 2 },
  },
  {
    label: "Vectơ-không (A trùng B)",
    desc: "Điểm đầu trùng điểm cuối, độ dài bằng 0",
    A: { x: 4, y: 3 },
    B: { x: 4, y: 3 },
  },
];

export default function VectorExplorerLab() {
  // Điểm đầu A và điểm cuối B của vectơ u = AB
  const [Ax, setAx] = useState<number>(1);
  const [Ay, setAy] = useState<number>(2);
  const [Bx, setBx] = useState<number>(5);
  const [By, setBy] = useState<number>(5);

  // Điểm C và D cho vectơ thứ 2 (để so sánh quan hệ 2 vectơ)
  const [showSecondVector, setShowSecondVector] = useState<boolean>(false);
  const [Cx, setCx] = useState<number>(1);
  const [Cy, setCy] = useState<number>(4);
  const [Dx, setDx] = useState<number>(5);
  const [Dy, setDy] = useState<number>(7);

  // Hiển thị lưới và đường giá của vectơ
  const [showLineOfAction, setShowLineOfAction] = useState<boolean>(true);

  // Tính toán số học cho vectơ AB
  const vecAB = useMemo(() => {
    const vx = Bx - Ax;
    const vy = By - Ay;
    const length = Math.sqrt(vx * vx + vy * vy);
    const isZero = Ax === Bx && Ay === By;
    const angleRad = Math.atan2(vy, vx);
    let angleDeg = (angleRad * 180) / Math.PI;
    if (angleDeg < 0) angleDeg += 360;

    return {
      vx,
      vy,
      length,
      isZero,
      angleDeg,
    };
  }, [Ax, Ay, Bx, By]);

  // Tính toán số học cho vectơ CD
  const vecCD = useMemo(() => {
    const vx = Dx - Cx;
    const vy = Dy - Cy;
    const length = Math.sqrt(vx * vx + vy * vy);
    const isZero = Cx === Dx && Cy === Dy;
    const angleRad = Math.atan2(vy, vx);
    let angleDeg = (angleRad * 180) / Math.PI;
    if (angleDeg < 0) angleDeg += 360;

    return {
      vx,
      vy,
      length,
      isZero,
      angleDeg,
    };
  }, [Cx, Cy, Dx, Dy]);

  // Quan hệ giữa vecAB và vecCD
  const relationship = useMemo(() => {
    if (!showSecondVector) return null;

    if (vecAB.isZero || vecCD.isZero) {
      return {
        type: "Vectơ-không",
        color: "text-amber-glow",
        badge: "bg-amber/20 border-amber/40 text-amber-glow",
        desc: "Theo quy ước vàng của hình học: Vectơ-không $\\vec{0}$ cùng phương và cùng hướng với mọi vectơ!",
        isEqual: vecAB.isZero && vecCD.isZero,
        isCollinear: true,
        isSameDirection: true,
        isOpposite: false,
      };
    }

    // Tích chéo để kiểm tra cùng phương: vx1 * vy2 - vy1 * vx2 = 0
    const cross = vecAB.vx * vecCD.vy - vecAB.vy * vecCD.vx;
    const isCollinear = Math.abs(cross) < 1e-5;

    // Tích vô hướng: dot > 0 => cùng hướng, dot < 0 => ngược hướng
    const dot = vecAB.vx * vecCD.vx + vecAB.vy * vecCD.vy;
    const isSameDirection = isCollinear && dot > 0;
    const isOpposite = isCollinear && dot < 0;

    const isLengthEqual = Math.abs(vecAB.length - vecCD.length) < 1e-4;
    const isEqual = isSameDirection && isLengthEqual;
    const isOppositeVector = isOpposite && isLengthEqual;

    if (isEqual) {
      return {
        type: "Hai vectơ bằng nhau (AB = CD)",
        color: "text-emerald-glow",
        badge: "bg-emerald/20 border-emerald/40 text-emerald-glow",
        desc: "Thoả mãn đầy đủ 2 điều kiện vàng: Cùng hướng và cùng độ dài ($|\\vec{AB}| = |\\vec{CD}|$).",
        isEqual: true,
        isCollinear: true,
        isSameDirection: true,
        isOpposite: false,
      };
    }

    if (isOppositeVector) {
      return {
        type: "Hai vectơ đối nhau (AB = -CD)",
        color: "text-rose-glow",
        badge: "bg-rose/20 border-rose/40 text-rose-glow",
        desc: "Thoả mãn: Cùng phương, ngược hướng và cùng độ dài ($|\\vec{AB}| = |\\vec{CD}|$).",
        isEqual: false,
        isCollinear: true,
        isSameDirection: false,
        isOpposite: true,
      };
    }

    if (isSameDirection) {
      return {
        type: "Cùng phương & Cùng hướng",
        color: "text-cyan-glow",
        badge: "bg-cyan/20 border-cyan/40 text-cyan-glow",
        desc: "Hai vectơ có giá song song hoặc trùng nhau, mũi tên cùng chỉ về một phía nhưng độ dài khác nhau.",
        isEqual: false,
        isCollinear: true,
        isSameDirection: true,
        isOpposite: false,
      };
    }

    if (isOpposite) {
      return {
        type: "Cùng phương & Ngược hướng",
        color: "text-amber-glow",
        badge: "bg-amber/20 border-amber/40 text-amber-glow",
        desc: "Hai vectơ có giá song song hoặc trùng nhau nhưng mũi tên chỉ về hai phía ngược nhau.",
        isEqual: false,
        isCollinear: true,
        isSameDirection: false,
        isOpposite: true,
      };
    }

    return {
      type: "Không cùng phương (Giá cắt nhau)",
      color: "text-star-mute",
      badge: "bg-void-subtle border-void-border text-star-soft",
      desc: "Hai vectơ có đường thẳng chứa chúng cắt nhau, không song song và không trùng nhau.",
      isEqual: false,
      isCollinear: false,
      isSameDirection: false,
      isOpposite: false,
    };
  }, [vecAB, vecCD, showSecondVector]);

  // Áp dụng Preset
  const applyPreset = (p: Preset) => {
    setAx(p.A.x);
    setAy(p.A.y);
    setBx(p.B.x);
    setBy(p.B.y);
    if (p.C && p.D) {
      setShowSecondVector(true);
      setCx(p.C.x);
      setCy(p.C.y);
      setDx(p.D.x);
      setDy(p.D.y);
    } else {
      setShowSecondVector(false);
    }
  };

  // Tạo nhanh vectơ bằng AB từ điểm C(1, 4)
  const makeEqualCD = () => {
    setShowSecondVector(true);
    setCx(1);
    setCy(4);
    setDx(1 + vecAB.vx);
    setDy(4 + vecAB.vy);
  };

  // Tạo nhanh vectơ đối của AB từ điểm C(6, 4)
  const makeOppositeCD = () => {
    setShowSecondVector(true);
    setCx(6);
    setCy(4);
    setDx(6 - vecAB.vx);
    setDy(4 - vecAB.vy);
  };

  // Kích thước canvas toạ độ
  const width = 460;
  const height = 300;
  const originX = 40;
  const originY = 260;
  const step = 28; // 28px mỗi đơn vị (x từ 0 đến 14, y từ 0 đến 8)

  const toSvgX = (x: number) => originX + x * step;
  const toSvgY = (y: number) => originY - y * step;

  // Tính toạ độ SVG
  const svgAx = toSvgX(Ax);
  const svgAy = toSvgY(Ay);
  const svgBx = toSvgX(Bx);
  const svgBy = toSvgY(By);

  const svgCx = toSvgX(Cx);
  const svgCy = toSvgY(Cy);
  const svgDx = toSvgX(Dx);
  const svgDy = toSvgY(Dy);

  return (
    <div className="rounded-3xl border border-cyan/40 bg-void-card/95 p-5 sm:p-7 shadow-glow-cyan backdrop-blur-xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-void-border/80 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl animate-pulse">↗️</span>
          <div>
            <h4 className="font-display font-bold text-base sm:text-lg text-star">
              Phòng Thí Nghiệm Khám Phá & So Sánh Vectơ
            </h4>
            <p className="text-xs text-star-soft">
              <MathText content="Mô phỏng hình học trực quan: điểm đầu, điểm cuối, độ dài $|\vec{u}|$, giá của vectơ và quan hệ cùng hướng / bằng nhau" />
            </p>
          </div>
        </div>

        {relationship ? (
          <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${relationship.badge}`}>
            {relationship.type}
          </span>
        ) : (
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold border bg-cyan/20 text-cyan-glow border-cyan/40">
            {vecAB.isZero ? "Vectơ-không" : `|AB| = ${vecAB.length.toFixed(2)}`}
          </span>
        )}
      </div>

      {/* Preset Buttons */}
      <div className="space-y-2">
        <div className="text-xs font-mono text-star-soft">Mô hình mẫu trực quan:</div>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => applyPreset(p)}
              className="text-xs px-3 py-1.5 rounded-xl border border-void-border bg-void/60 text-star-soft hover:text-cyan-glow hover:border-cyan/50 hover:bg-cyan/10 transition duration-150"
              title={p.desc}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Control Panels & Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Input sliders (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Vectơ 1 (AB) Control Box */}
          <div className="rounded-2xl border border-cyan/30 bg-void/50 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-cyan-glow flex items-center gap-1.5">
                <span>🔵</span>
                <MathText content="Vectơ $\vec{u} = \overrightarrow{AB}$" />
              </span>
              <span className="text-[11px] font-mono text-star-mute">
                <MathText content={`$A(${Ax}; ${Ay}) \\to B(${Bx}; ${By})$`} />
              </span>
            </div>

            {/* Slider Ax, Ay */}
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-star-soft">Gốc xA:</span>
                  <span className="text-cyan-glow font-bold">{Ax}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="12"
                  value={Ax}
                  onChange={(e) => setAx(parseInt(e.target.value))}
                  className="w-full accent-cyan h-1.5 bg-void-border rounded-lg cursor-pointer"
                />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-star-soft">Gốc yA:</span>
                  <span className="text-cyan-glow font-bold">{Ay}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="8"
                  value={Ay}
                  onChange={(e) => setAy(parseInt(e.target.value))}
                  className="w-full accent-cyan h-1.5 bg-void-border rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Slider Bx, By */}
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-star-soft">Ngọn xB:</span>
                  <span className="text-cyan-glow font-bold">{Bx}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="13"
                  value={Bx}
                  onChange={(e) => setBx(parseInt(e.target.value))}
                  className="w-full accent-cyan h-1.5 bg-void-border rounded-lg cursor-pointer"
                />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-star-soft">Ngọn yB:</span>
                  <span className="text-cyan-glow font-bold">{By}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="8"
                  value={By}
                  onChange={(e) => setBy(parseInt(e.target.value))}
                  className="w-full accent-cyan h-1.5 bg-void-border rounded-lg cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Vectơ 2 (CD) Toggle & Control Box */}
          <div className="rounded-2xl border border-void-border bg-void/50 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer font-mono text-xs font-bold text-amber-glow">
                <input
                  type="checkbox"
                  checked={showSecondVector}
                  onChange={(e) => setShowSecondVector(e.target.checked)}
                  className="accent-amber rounded w-4 h-4 cursor-pointer"
                />
                <span>Bật vectơ thứ hai để so sánh: $\overrightarrow{CD}$</span>
              </label>
            </div>

            {showSecondVector && (
              <div className="space-y-3 pt-2 border-t border-void-border/70 animate-fade-in-up">
                <div className="flex justify-between text-[11px] font-mono text-star-mute">
                  <span>Toạ độ:</span>
                  <MathText content={`$C(${Cx}; ${Cy}) \\to D(${Dx}; ${Dy})$`} />
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-star-soft">Gốc xC:</span>
                      <span className="text-amber-glow font-bold">{Cx}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="12"
                      value={Cx}
                      onChange={(e) => setCx(parseInt(e.target.value))}
                      className="w-full accent-amber h-1.5 bg-void-border rounded-lg cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-star-soft">Gốc yC:</span>
                      <span className="text-amber-glow font-bold">{Cy}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="8"
                      value={Cy}
                      onChange={(e) => setCy(parseInt(e.target.value))}
                      className="w-full accent-amber h-1.5 bg-void-border rounded-lg cursor-pointer"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-star-soft">Ngọn xD:</span>
                      <span className="text-amber-glow font-bold">{Dx}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="13"
                      value={Dx}
                      onChange={(e) => setDx(parseInt(e.target.value))}
                      className="w-full accent-amber h-1.5 bg-void-border rounded-lg cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-star-soft">Ngọn yD:</span>
                      <span className="text-amber-glow font-bold">{Dy}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="8"
                      value={Dy}
                      onChange={(e) => setDy(parseInt(e.target.value))}
                      className="w-full accent-amber h-1.5 bg-void-border rounded-lg cursor-pointer"
                    />
                  </div>
                </div>

                {/* Phím tắt tạo nhanh quan hệ */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <button
                    type="button"
                    onClick={makeEqualCD}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-emerald/15 border border-emerald/40 text-emerald-glow hover:bg-emerald/25 transition"
                  >
                    Tạo CD = AB (Bằng nhau)
                  </button>
                  <button
                    type="button"
                    onClick={makeOppositeCD}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-rose/15 border border-rose/40 text-rose-glow hover:bg-rose/25 transition"
                  >
                    Tạo CD = -AB (Đối nhau)
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Toggle Buttons */}
          <div className="flex flex-wrap gap-2 text-xs">
            <button
              type="button"
              onClick={() => setShowLineOfAction(!showLineOfAction)}
              className={`px-3 py-1.5 rounded-xl border transition flex items-center gap-1.5 ${
                showLineOfAction
                  ? "border-cyan/50 bg-cyan/15 text-cyan-glow"
                  : "border-void-border bg-void/50 text-star-mute"
              }`}
            >
              <span>📏</span>
              <span>Hiện đường thẳng giá của vectơ</span>
            </button>
          </div>
        </div>

        {/* Right: SVG Canvas (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl border border-void-border bg-[#050a16] p-3 sm:p-4 flex flex-col items-center justify-center min-h-[320px]">
          <div className="w-full relative flex flex-col items-center">
            <svg
              viewBox="0 0 460 300"
              className="w-full max-w-[480px] h-auto select-none overflow-visible"
            >
              <defs>
                {/* Lưới ô vuông toạ độ */}
                <pattern id="vecGrid" width={step} height={step} patternUnits="userSpaceOnUse">
                  <path d={`M ${step} 0 L 0 0 0 ${step}`} fill="none" stroke="#17243c" strokeWidth="0.8" />
                </pattern>

                {/* Marker đầu mũi tên Cyan cho AB */}
                <marker
                  id="arrowCyan"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#00f2fe" />
                </marker>

                {/* Marker đầu mũi tên Amber cho CD */}
                <marker
                  id="arrowAmber"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#f59e0b" />
                </marker>
              </defs>

              {/* Lưới toạ độ */}
              <rect x="0" y="0" width={width} height={height} fill="url(#vecGrid)" rx="14" />

              {/* Trục toạ độ Ox và Oy */}
              <line x1={originX} y1={originY} x2={width - 20} y2={originY} stroke="#334155" strokeWidth="2" />
              <polygon points={`${width - 15},${originY} ${width - 24},${originY - 4} ${width - 24},${originY + 4}`} fill="#64748b" />
              <text x={width - 16} y={originY + 18} fill="#94a3b8" fontSize="11" fontFamily="monospace">x</text>

              <line x1={originX} y1={originY} x2={originX} y2="15" stroke="#334155" strokeWidth="2" />
              <polygon points={`${originX},12 ${originX - 4},21 ${originX + 4},21`} fill="#64748b" />
              <text x={originX - 16} y="22" fill="#94a3b8" fontSize="11" fontFamily="monospace">y</text>

              {/* Gốc O */}
              <text x={originX - 14} y={originY + 16} fill="#64748b" fontSize="11" fontFamily="monospace">O</text>

              {/* Các vạch số trên trục x */}
              {[2, 4, 6, 8, 10, 12].map((num) => (
                <g key={num}>
                  <line x1={toSvgX(num)} y1={originY} x2={toSvgX(num)} y2={originY + 4} stroke="#475569" />
                  <text x={toSvgX(num)} y={originY + 16} fill="#64748b" fontSize="9" fontFamily="monospace" textAnchor="middle">{num}</text>
                </g>
              ))}

              {/* Các vạch số trên trục y */}
              {[2, 4, 6, 8].map((num) => (
                <g key={num}>
                  <line x1={originX - 4} y1={toSvgY(num)} x2={originX} y2={toSvgY(num)} stroke="#475569" />
                  <text x={originX - 10} y={toSvgY(num) + 3} fill="#64748b" fontSize="9" fontFamily="monospace" textAnchor="end">{num}</text>
                </g>
              ))}

              {/* Đường giá (Line of action) của vectơ AB */}
              {showLineOfAction && !vecAB.isZero && (
                <line
                  x1={svgAx - vecAB.vx * 15}
                  y1={svgAy + vecAB.vy * 15}
                  x2={svgBx + vecAB.vx * 15}
                  y2={svgBy - vecAB.vy * 15}
                  stroke="#00f2fe"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity="0.35"
                />
              )}

              {/* Đường giá của vectơ CD */}
              {showSecondVector && showLineOfAction && !vecCD.isZero && (
                <line
                  x1={svgCx - vecCD.vx * 15}
                  y1={svgCy + vecCD.vy * 15}
                  x2={svgDx + vecCD.vx * 15}
                  y2={svgDy - vecCD.vy * 15}
                  stroke="#f59e0b"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity="0.35"
                />
              )}

              {/* Vectơ CD (nếu bật) */}
              {showSecondVector && (
                <g>
                  {vecCD.isZero ? (
                    <circle cx={svgCx} cy={svgCy} r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                  ) : (
                    <line
                      x1={svgCx}
                      y1={svgCy}
                      x2={svgDx}
                      y2={svgDy}
                      stroke="#f59e0b"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      markerEnd="url(#arrowAmber)"
                    />
                  )}

                  {/* Điểm C và D */}
                  <circle cx={svgCx} cy={svgCy} r="4" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
                  <text x={svgCx - 8} y={svgCy - 8} fill="#fde68a" fontSize="12" fontFamily="sans-serif" fontWeight="bold">C</text>

                  {!vecCD.isZero && (
                    <>
                      <circle cx={svgDx} cy={svgDy} r="4" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
                      <text x={svgDx + 8} y={svgDy - 8} fill="#fde68a" fontSize="12" fontFamily="sans-serif" fontWeight="bold">D</text>
                    </>
                  )}
                </g>
              )}

              {/* Vectơ AB */}
              <g>
                {vecAB.isZero ? (
                  <circle cx={svgAx} cy={svgAy} r="6" fill="#00f2fe" stroke="#ffffff" strokeWidth="2" />
                ) : (
                  <line
                    x1={svgAx}
                    y1={svgAy}
                    x2={svgBx}
                    y2={svgBy}
                    stroke="#00f2fe"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    markerEnd="url(#arrowCyan)"
                  />
                )}

                {/* Điểm A (Gốc) */}
                <circle cx={svgAx} cy={svgAy} r="4.5" fill="#00f2fe" stroke="#ffffff" strokeWidth="1.5" />
                <text x={svgAx - 10} y={svgAy - 8} fill="#ffffff" fontSize="12" fontFamily="sans-serif" fontWeight="bold">A</text>

                {/* Điểm B (Ngọn) */}
                {!vecAB.isZero && (
                  <>
                    <circle cx={svgBx} cy={svgBy} r="4.5" fill="#00f2fe" stroke="#ffffff" strokeWidth="1.5" />
                    <text x={svgBx + 8} y={svgBy - 8} fill="#ffffff" fontSize="12" fontFamily="sans-serif" fontWeight="bold">B</text>
                  </>
                )}
              </g>
            </svg>

            {/* Chú thích màu sắc */}
            <div className="text-[11px] font-mono text-star-mute mt-2 text-center">
              <MathText content="Màu xanh lam: $\overrightarrow{AB}$ | Màu vàng cam: $\overrightarrow{CD}$ | Nét đứt: Đường thẳng giá của vectơ" />
            </div>
          </div>
        </div>
      </div>

      {/* Numerical Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-void-border/80 pt-4">
        {/* Metric 1: Toạ độ vectơ */}
        <div className="p-3 rounded-2xl bg-void/60 border border-void-border space-y-1">
          <span className="text-[11px] font-mono text-star-mute block">
            <MathText content="Tọa độ vectơ $\vec{u}$" />
          </span>
          <span className="text-base sm:text-lg font-mono font-bold text-cyan-glow block">
            ({vecAB.vx}; {vecAB.vy})
          </span>
          <span className="text-[10px] text-star-mute block">
            <MathText content="$\\vec{u} = (x_B - x_A; y_B - y_A)$" />
          </span>
        </div>

        {/* Metric 2: Độ dài vectơ */}
        <div className="p-3 rounded-2xl bg-void/60 border border-void-border space-y-1">
          <span className="text-[11px] font-mono text-star-mute block">
            <MathText content="Độ dài $|\overrightarrow{AB}|$" />
          </span>
          <span className="text-base sm:text-lg font-mono font-bold text-emerald-glow block">
            {vecAB.length.toFixed(2)}
          </span>
          <span className="text-[10px] text-star-mute block">
            <MathText content="$|\\vec{AB}| = \\sqrt{(x_B-x_A)^2 + (y_B-y_A)^2}$" />
          </span>
        </div>

        {/* Metric 3: Phương & Góc nghiêng */}
        <div className="p-3 rounded-2xl bg-void/60 border border-void-border space-y-1">
          <span className="text-[11px] font-mono text-star-mute block">
            <MathText content="Góc định hướng $\\theta$" />
          </span>
          <span className="text-base sm:text-lg font-mono font-bold text-amber-glow block">
            {vecAB.isZero ? "Không xác định" : `${vecAB.angleDeg.toFixed(1)}°`}
          </span>
          <span className="text-[10px] text-star-mute block">
            {vecAB.isZero ? "Vectơ-không có phương tuỳ ý" : "Góc tạo với tia Ox dương"}
          </span>
        </div>

        {/* Metric 4: Trạng thái & Tính chất */}
        <div className="p-3 rounded-2xl bg-void/60 border border-void-border space-y-1">
          <span className="text-[11px] font-mono text-star-mute block">
            <MathText content="Quan hệ đặc biệt" />
          </span>
          <div className="text-xs font-mono font-bold text-rose-glow">
            {relationship ? relationship.type : (vecAB.isZero ? "Vectơ-không 0" : "Vectơ khác 0")}
          </div>
          <span className="text-[10px] text-star-mute block">
            {vecAB.isZero ? "Điểm đầu trùng điểm cuối" : "Đoạn thẳng có hướng từ A đến B"}
          </span>
        </div>
      </div>

      {/* So sánh chi tiết nếu bật 2 vectơ */}
      {relationship && (
        <div className="p-4 rounded-2xl border border-void-border/80 bg-void/40 space-y-2 text-xs sm:text-sm animate-fade-in-up">
          <div className="font-bold flex items-center gap-2 text-star">
            <span>🔍</span>
            <span className={relationship.color}>Kết luận so sánh hai vectơ:</span>
          </div>
          <p className="text-star-soft leading-relaxed">
            <MathText content={relationship.desc} />
          </p>
        </div>
      )}
    </div>
  );
}
