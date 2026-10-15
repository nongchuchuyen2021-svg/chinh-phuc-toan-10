"use client";

import React, { useState, useMemo } from "react";
import MathText from "@/components/MathText";

type InputMode = "SAS" | "SSS";

interface Preset {
  label: string;
  mode: InputMode;
  vals: { a?: number; b: number; c: number; angleA?: number };
}

const PRESETS: Preset[] = [
  { label: "Tam giác đẹp Heron (13, 14, 15)", mode: "SSS", vals: { a: 14, b: 13, c: 15 } },
  { label: "Góc tù 120° (b=5, c=8)", mode: "SAS", vals: { b: 5, c: 8, angleA: 120 } },
  { label: "Tam giác vuông kinh điển (3, 4, 5)", mode: "SSS", vals: { a: 5, b: 4, c: 3 } },
  { label: "Góc 60° (b=6, c=8)", mode: "SAS", vals: { b: 6, c: 8, angleA: 60 } },
  { label: "Tam giác đều cạnh 6", mode: "SSS", vals: { a: 6, b: 6, c: 6 } },
];

export default function TriangleSolverLab() {
  const [mode, setMode] = useState<InputMode>("SAS");

  // State for SAS: b, c, angleA (in degrees)
  const [bVal, setBVal] = useState<number>(6);
  const [cVal, setCVal] = useState<number>(8);
  const [angleAVal, setAngleAVal] = useState<number>(60);

  // State for SSS: a, b, c
  const [aSideVal, setASideVal] = useState<number>(14);
  const [bSideVal, setBSideVal] = useState<number>(13);
  const [cSideVal, setCSideVal] = useState<number>(15);

  // Visual toggles
  const [showCircumcircle, setShowCircumcircle] = useState<boolean>(true);
  const [showIncircle, setShowIncircle] = useState<boolean>(false);
  const [showAltitude, setShowAltitude] = useState<boolean>(true);

  // Computation
  const result = useMemo(() => {
    let a = 0;
    let b = 0;
    let c = 0;
    let angleA = 0;
    let angleB = 0;
    let angleC = 0;
    let isValid = true;
    let errorMsg = "";

    if (mode === "SAS") {
      b = bVal;
      c = cVal;
      angleA = angleAVal;

      if (b <= 0 || c <= 0 || angleA <= 0 || angleA >= 180) {
        isValid = false;
        errorMsg = "Cạnh phải > 0 và góc A nằm trong khoảng (0°, 180°)";
      } else {
        const radA = (angleA * Math.PI) / 180;
        const aSq = b * b + c * c - 2 * b * c * Math.cos(radA);
        if (aSq <= 0) {
          isValid = false;
          errorMsg = "Không thể tạo tam giác với số liệu này";
        } else {
          a = Math.sqrt(aSq);
          // Angle B using Law of Cosines
          const cosB = Math.max(-1, Math.min(1, (a * a + c * c - b * b) / (2 * a * c)));
          angleB = (Math.acos(cosB) * 180) / Math.PI;
          angleC = 180 - angleA - angleB;
        }
      }
    } else {
      // SSS
      a = aSideVal;
      b = bSideVal;
      c = cSideVal;

      if (a <= 0 || b <= 0 || c <= 0) {
        isValid = false;
        errorMsg = "Cả 3 cạnh phải > 0";
      } else if (a + b <= c || a + c <= b || b + c <= a) {
        isValid = false;
        errorMsg = "Vi phạm bất đẳng thức tam giác: Tổng 2 cạnh bất kì phải lớn hơn cạnh còn lại";
      } else {
        const cosA = Math.max(-1, Math.min(1, (b * b + c * c - a * a) / (2 * b * c)));
        const cosB = Math.max(-1, Math.min(1, (a * a + c * c - b * b) / (2 * a * c)));
        angleA = (Math.acos(cosA) * 180) / Math.PI;
        angleB = (Math.acos(cosB) * 180) / Math.PI;
        angleC = 180 - angleA - angleB;
      }
    }

    if (!isValid) {
      return { isValid: false as const, errorMsg };
    }

    // Secondary metrics
    const p = (a + b + c) / 2;
    const sTerm = p * (p - a) * (p - b) * (p - c);
    const S = Math.sqrt(Math.max(0, sTerm));
    const radA = (angleA * Math.PI) / 180;
    const sinA = Math.sin(radA);
    const R = sinA > 1e-6 ? a / (2 * sinA) : a * b * c / (4 * Math.max(0.001, S));
    const r = p > 0 ? S / p : 0;
    const ha = a > 0 ? (2 * S) / a : 0;
    const ma = Math.sqrt(Math.max(0, (2 * (b * b + c * c) - a * a) / 4));

    // Type of triangle
    let triType = "Tam giác nhọn";
    const maxAngle = Math.max(angleA, angleB, angleC);
    if (Math.abs(maxAngle - 90) < 0.1) {
      triType = "Tam giác vuông";
    } else if (maxAngle > 90) {
      triType = "Tam giác tù";
    }
    if (Math.abs(a - b) < 0.01 && Math.abs(b - c) < 0.01) {
      triType = "Tam giác đều";
    } else if (Math.abs(a - b) < 0.01 || Math.abs(b - c) < 0.01 || Math.abs(a - c) < 0.01) {
      triType += " & Cân";
    }

    return {
      isValid: true as const,
      a,
      b,
      c,
      angleA,
      angleB,
      angleC,
      p,
      S,
      R,
      r,
      ha,
      ma,
      triType,
    };
  }, [mode, bVal, cVal, angleAVal, aSideVal, bSideVal, cSideVal]);

  // SVG Geometry Calculation
  const svgData = useMemo(() => {
    if (!result.isValid || !result.a) return null;

    const { a, b, c, angleA, R, r } = result;

    // Place B at origin (0, 0), C at (a, 0)
    // Angle B in radians
    const radB = (result.angleB * Math.PI) / 180;
    const Ax = c * Math.cos(radB);
    const Ay = c * Math.sin(radB); // Ay > 0
    const Bx = 0;
    const By = 0;
    const Cx = a;
    const Cy = 0;

    // Bound box of raw coordinates
    const minX = Math.min(Ax, Bx, Cx);
    const maxX = Math.max(Ax, Bx, Cx);
    const minY = Math.min(Ay, By, Cy);
    const maxY = Math.max(Ay, By, Cy);

    // Padding & ViewBox (SVG width: 440, height: 280)
    const svgW = 440;
    const svgH = 270;
    const pad = 42;

    const rawW = maxX - minX || 1;
    const rawH = maxY - minY || 1;
    const scale = Math.min((svgW - pad * 2) / rawW, (svgH - pad * 2) / rawH);

    // Function to transform raw coords into SVG canvas coords (invert Y because SVG y grows downward)
    const toSvg = (x: number, y: number) => {
      const sx = pad + (x - minX) * scale + (svgW - pad * 2 - rawW * scale) / 2;
      const sy = svgH - pad - (y - minY) * scale - (svgH - pad * 2 - rawH * scale) / 2;
      return { x: sx, y: sy };
    };

    const ptA = toSvg(Ax, Ay);
    const ptB = toSvg(Bx, By);
    const ptC = toSvg(Cx, Cy);

    // Foot of altitude from A to BC (y=0)
    const Hx = Ax;
    const Hy = 0;
    const ptH = toSvg(Hx, Hy);

    // Circumcenter O
    // Circle passes through (0,0), (a,0), (Ax, Ay)
    // Ox = a / 2
    // (Ax - a/2)^2 + (Ay - Oy)^2 = R^2 => Oy = (Ax^2 + Ay^2 - a*Ax) / (2*Ay)
    let ptO = null;
    let svgR = 0;
    if (Ay > 1e-4) {
      const Ox = a / 2;
      const Oy = (Ax * Ax + Ay * Ay - a * Ax) / (2 * Ay);
      ptO = toSvg(Ox, Oy);
      svgR = R * scale;
    }

    // Incenter I: Ix = (a*Ax + b*Bx + c*Cx)/(a+b+c), Iy = (a*Ay + b*By + c*Cy)/(a+b+c)
    const peri = a + b + c;
    const Ix = (a * Ax + b * Bx + c * Cx) / peri;
    const Iy = (a * Ay + b * By + c * Cy) / peri;
    const ptI = toSvg(Ix, Iy);
    const svgInR = r * scale;

    return {
      ptA,
      ptB,
      ptC,
      ptH,
      ptO,
      ptI,
      svgR,
      svgInR,
      scale,
    };
  }, [result]);

  const applyPreset = (preset: Preset) => {
    setMode(preset.mode);
    if (preset.mode === "SAS") {
      setBVal(preset.vals.b);
      setCVal(preset.vals.c);
      if (preset.vals.angleA) setAngleAVal(preset.vals.angleA);
    } else {
      if (preset.vals.a) setASideVal(preset.vals.a);
      setBSideVal(preset.vals.b);
      setCSideVal(preset.vals.c);
    }
  };

  return (
    <div className="rounded-3xl border border-cyan/40 bg-void-card/95 p-5 sm:p-7 shadow-glow-cyan backdrop-blur-xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-void-border/80 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl animate-pulse">📐</span>
          <div>
            <h4 className="font-display font-bold text-base sm:text-lg text-star">
              Phòng Thí Nghiệm Giải Tam Giác & Hệ Thức Lượng
            </h4>
            <p className="text-xs text-star-soft">
              <MathText content="Mô phỏng hình học trực quan thời gian thực: tính toán tức thì 3 cạnh, 3 góc, diện tích $S$, bán kính $R, r$ và đường cao" />
            </p>
          </div>
        </div>
        {result.isValid && (
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold border bg-cyan/20 text-cyan-glow border-cyan/40">
            {result.triType}
          </span>
        )}
      </div>

      {/* Preset Buttons */}
      <div className="space-y-2">
        <div className="text-xs font-mono text-star-soft">Tam giác mẫu kinh điển:</div>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => applyPreset(p)}
              className="text-xs px-3 py-1.5 rounded-xl border border-void-border bg-void/60 text-star-soft hover:text-cyan-glow hover:border-cyan/50 hover:bg-cyan/10 transition duration-150"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Control Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Input controls (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Mode switch */}
          <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-void/80 border border-void-border">
            <button
              type="button"
              onClick={() => setMode("SAS")}
              className={`py-2 px-3 rounded-xl text-xs font-bold font-mono transition duration-150 ${
                mode === "SAS"
                  ? "bg-cyan text-void shadow-glow-cyan"
                  : "text-star-soft hover:text-star"
              }`}
            >
              C-G-C (2 cạnh & góc)
            </button>
            <button
              type="button"
              onClick={() => setMode("SSS")}
              className={`py-2 px-3 rounded-xl text-xs font-bold font-mono transition duration-150 ${
                mode === "SSS"
                  ? "bg-cyan text-void shadow-glow-cyan"
                  : "text-star-soft hover:text-star"
              }`}
            >
              C-C-C (Biết 3 cạnh)
            </button>
          </div>

          {/* Sliders / Inputs */}
          {mode === "SAS" ? (
            <div className="space-y-4 rounded-2xl border border-void-border/80 bg-void/40 p-4">
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-1">
                  <span className="text-star-soft">
                    <MathText content="Cạnh $b$ ($AC$):" />
                  </span>
                  <span className="font-bold text-cyan-glow">{bVal}</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="20"
                  step="0.5"
                  value={bVal}
                  onChange={(e) => setBVal(parseFloat(e.target.value))}
                  className="w-full accent-cyan h-1.5 bg-void-border rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-1">
                  <span className="text-star-soft">
                    <MathText content="Cạnh $c$ ($AB$):" />
                  </span>
                  <span className="font-bold text-cyan-glow">{cVal}</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="20"
                  step="0.5"
                  value={cVal}
                  onChange={(e) => setCVal(parseFloat(e.target.value))}
                  className="w-full accent-cyan h-1.5 bg-void-border rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-1">
                  <span className="text-star-soft">
                    <MathText content="Góc $\widehat{A}$:" />
                  </span>
                  <span className="font-bold text-amber-glow">{angleAVal}°</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="165"
                  step="1"
                  value={angleAVal}
                  onChange={(e) => setAngleAVal(parseFloat(e.target.value))}
                  className="w-full accent-amber h-1.5 bg-void-border rounded-lg cursor-pointer"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-4 rounded-2xl border border-void-border/80 bg-void/40 p-4">
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-1">
                  <span className="text-star-soft">
                    <MathText content="Cạnh $a$ ($BC$):" />
                  </span>
                  <span className="font-bold text-cyan-glow">{aSideVal}</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="25"
                  step="0.5"
                  value={aSideVal}
                  onChange={(e) => setASideVal(parseFloat(e.target.value))}
                  className="w-full accent-cyan h-1.5 bg-void-border rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-1">
                  <span className="text-star-soft">
                    <MathText content="Cạnh $b$ ($AC$):" />
                  </span>
                  <span className="font-bold text-cyan-glow">{bSideVal}</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="25"
                  step="0.5"
                  value={bSideVal}
                  onChange={(e) => setBSideVal(parseFloat(e.target.value))}
                  className="w-full accent-cyan h-1.5 bg-void-border rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-1">
                  <span className="text-star-soft">
                    <MathText content="Cạnh $c$ ($AB$):" />
                  </span>
                  <span className="font-bold text-cyan-glow">{cSideVal}</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="25"
                  step="0.5"
                  value={cSideVal}
                  onChange={(e) => setCSideVal(parseFloat(e.target.value))}
                  className="w-full accent-cyan h-1.5 bg-void-border rounded-lg cursor-pointer"
                />
              </div>
            </div>
          )}

          {/* Display Toggles */}
          <div className="flex flex-wrap gap-2 text-xs">
            <button
              type="button"
              onClick={() => setShowCircumcircle(!showCircumcircle)}
              className={`px-3 py-1.5 rounded-xl border transition flex items-center gap-1.5 ${
                showCircumcircle
                  ? "border-emerald/50 bg-emerald/15 text-emerald-glow"
                  : "border-void-border bg-void/50 text-star-mute"
              }`}
            >
              <span>🔵</span>
              <MathText content="Đường tròn ngoại tiếp $(O; R)$" />
            </button>
            <button
              type="button"
              onClick={() => setShowIncircle(!showIncircle)}
              className={`px-3 py-1.5 rounded-xl border transition flex items-center gap-1.5 ${
                showIncircle
                  ? "border-amber/50 bg-amber/15 text-amber-glow"
                  : "border-void-border bg-void/50 text-star-mute"
              }`}
            >
              <span>🟠</span>
              <MathText content="Đường tròn nội tiếp $(I; r)$" />
            </button>
            <button
              type="button"
              onClick={() => setShowAltitude(!showAltitude)}
              className={`px-3 py-1.5 rounded-xl border transition flex items-center gap-1.5 ${
                showAltitude
                  ? "border-rose/50 bg-rose/15 text-rose-glow"
                  : "border-void-border bg-void/50 text-star-mute"
              }`}
            >
              <span>📏</span>
              <MathText content="Đường cao $h_a$" />
            </button>
          </div>
        </div>

        {/* Right: SVG Canvas (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl border border-void-border bg-void/70 p-3 sm:p-4 flex flex-col items-center justify-center min-h-[300px]">
          {!result.isValid ? (
            <div className="text-center p-6 space-y-2">
              <span className="text-3xl">⚠️</span>
              <p className="text-sm font-bold text-rose-glow">{result.errorMsg}</p>
              <p className="text-xs text-star-mute">Vui lòng điều chỉnh lại độ dài các cạnh hoặc góc</p>
            </div>
          ) : svgData ? (
            <div className="w-full relative flex flex-col items-center">
              <svg
                viewBox="0 0 440 270"
                className="w-full max-w-[460px] h-auto select-none overflow-visible"
              >
                <defs>
                  {/* Subtle grid */}
                  <pattern id="solverGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#233554" strokeWidth="0.4" opacity="0.3" />
                  </pattern>
                  <radialGradient id="triGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.03" />
                  </radialGradient>
                </defs>

                <rect width="440" height="270" fill="url(#solverGrid)" rx="12" />

                {/* Circumcircle */}
                {showCircumcircle && svgData.ptO && svgData.svgR > 0 && (
                  <g className="transition-all duration-300">
                    <circle
                      cx={svgData.ptO.x}
                      cy={svgData.ptO.y}
                      r={svgData.svgR}
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      opacity="0.65"
                    />
                    <circle cx={svgData.ptO.x} cy={svgData.ptO.y} r="3" fill="#10b981" />
                    <text
                      x={svgData.ptO.x + 6}
                      y={svgData.ptO.y - 6}
                      fill="#10b981"
                      fontSize="10"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      O (R = {result.R.toFixed(2)})
                    </text>
                  </g>
                )}

                {/* Incircle */}
                {showIncircle && svgData.ptI && svgData.svgInR > 0 && (
                  <g className="transition-all duration-300">
                    <circle
                      cx={svgData.ptI.x}
                      cy={svgData.ptI.y}
                      r={svgData.svgInR}
                      fill="#f59e0b"
                      fillOpacity="0.08"
                      stroke="#f59e0b"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                      opacity="0.85"
                    />
                    <circle cx={svgData.ptI.x} cy={svgData.ptI.y} r="3" fill="#f59e0b" />
                    <text
                      x={svgData.ptI.x + 5}
                      y={svgData.ptI.y + 12}
                      fill="#f59e0b"
                      fontSize="10"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      I (r = {result.r.toFixed(2)})
                    </text>
                  </g>
                )}

                {/* Altitude ha */}
                {showAltitude && (
                  <g className="transition-all duration-300">
                    <line
                      x1={svgData.ptA.x}
                      y1={svgData.ptA.y}
                      x2={svgData.ptH.x}
                      y2={svgData.ptH.y}
                      stroke="#f43f5e"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                    {/* Right angle marker at H */}
                    <path
                      d={`M ${svgData.ptH.x - 6} ${svgData.ptH.y} L ${svgData.ptH.x - 6} ${svgData.ptH.y - 6} L ${svgData.ptH.x} ${svgData.ptH.y - 6}`}
                      fill="none"
                      stroke="#f43f5e"
                      strokeWidth="1"
                    />
                    <text
                      x={svgData.ptH.x}
                      y={svgData.ptH.y + 12}
                      fill="#f43f5e"
                      fontSize="9"
                      fontFamily="monospace"
                      textAnchor="middle"
                    >
                      H (ha = {result.ha.toFixed(2)})
                    </text>
                  </g>
                )}

                {/* Triangle Fill & Stroke */}
                <polygon
                  points={`${svgData.ptA.x},${svgData.ptA.y} ${svgData.ptB.x},${svgData.ptB.y} ${svgData.ptC.x},${svgData.ptC.y}`}
                  fill="url(#triGlow)"
                  stroke="#00d4ff"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />

                {/* Side Labels */}
                {/* Side a (BC) */}
                <text
                  x={(svgData.ptB.x + svgData.ptC.x) / 2}
                  y={svgData.ptB.y + 16}
                  fill="#67e8f9"
                  fontSize="11"
                  fontFamily="monospace"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  a = {result.a.toFixed(2)}
                </text>

                {/* Side b (AC) */}
                <text
                  x={(svgData.ptA.x + svgData.ptC.x) / 2 + 10}
                  y={(svgData.ptA.y + svgData.ptC.y) / 2}
                  fill="#67e8f9"
                  fontSize="11"
                  fontFamily="monospace"
                  fontWeight="bold"
                  textAnchor="start"
                >
                  b = {result.b.toFixed(2)}
                </text>

                {/* Side c (AB) */}
                <text
                  x={(svgData.ptA.x + svgData.ptB.x) / 2 - 10}
                  y={(svgData.ptA.y + svgData.ptB.y) / 2}
                  fill="#67e8f9"
                  fontSize="11"
                  fontFamily="monospace"
                  fontWeight="bold"
                  textAnchor="end"
                >
                  c = {result.c.toFixed(2)}
                </text>

                {/* Vertices */}
                {/* Vertex A */}
                <circle cx={svgData.ptA.x} cy={svgData.ptA.y} r="5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
                <text
                  x={svgData.ptA.x}
                  y={svgData.ptA.y - 10}
                  fill="#ffffff"
                  fontSize="12"
                  fontFamily="sans-serif"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  A ({result.angleA.toFixed(1)}°)
                </text>

                {/* Vertex B */}
                <circle cx={svgData.ptB.x} cy={svgData.ptB.y} r="5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
                <text
                  x={svgData.ptB.x - 10}
                  y={svgData.ptB.y + 14}
                  fill="#ffffff"
                  fontSize="12"
                  fontFamily="sans-serif"
                  fontWeight="bold"
                  textAnchor="end"
                >
                  B ({result.angleB.toFixed(1)}°)
                </text>

                {/* Vertex C */}
                <circle cx={svgData.ptC.x} cy={svgData.ptC.y} r="5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
                <text
                  x={svgData.ptC.x + 10}
                  y={svgData.ptC.y + 14}
                  fill="#ffffff"
                  fontSize="12"
                  fontFamily="sans-serif"
                  fontWeight="bold"
                  textAnchor="start"
                >
                  C ({result.angleC.toFixed(1)}°)
                </text>
              </svg>

              <div className="text-[11px] font-mono text-star-mute mt-1 text-center">
                <MathText content="Màu xanh dương: $\triangle ABC$ | Xanh lục nét đứt: Đường tròn $(O; R)$ | Cam nét đứt: Đường tròn $(I; r)$" />
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Numerical Results Grid */}
      {result.isValid && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-void-border/80 pt-4">
          <div className="p-3 rounded-2xl bg-void/60 border border-void-border space-y-1">
            <span className="text-[11px] font-mono text-star-mute block">
              <MathText content="Diện tích $S$" />
            </span>
            <span className="text-base sm:text-lg font-mono font-bold text-cyan-glow block">
              {result.S.toFixed(2)}
            </span>
            <span className="text-[10px] text-star-mute block">
              <MathText content="$S = \frac{1}{2}bc\sin A = \sqrt{p(p-a)...}$" />
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-void/60 border border-void-border space-y-1">
            <span className="text-[11px] font-mono text-star-mute block">
              <MathText content="Bán kính ngoại tiếp $R$" />
            </span>
            <span className="text-base sm:text-lg font-mono font-bold text-emerald-glow block">
              {result.R.toFixed(2)}
            </span>
            <span className="text-[10px] text-star-mute block">
              <MathText content="$R = \frac{a}{2\sin A} = \frac{abc}{4S}$" />
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-void/60 border border-void-border space-y-1">
            <span className="text-[11px] font-mono text-star-mute block">
              <MathText content="Bán kính nội tiếp $r$" />
            </span>
            <span className="text-base sm:text-lg font-mono font-bold text-amber-glow block">
              {result.r.toFixed(2)}
            </span>
            <span className="text-[10px] text-star-mute block">
              <MathText content={`$r = \\frac{S}{p} \\quad (p = ${result.p.toFixed(1)})$`} />
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-void/60 border border-void-border space-y-1">
            <span className="text-[11px] font-mono text-star-mute block">
              <MathText content="Đường cao $h_a$ & Trung tuyến $m_a$" />
            </span>
            <div className="text-xs font-mono font-bold text-rose-glow">
              <MathText content={`$h_a = ${result.ha.toFixed(2)}$ | $m_a = ${result.ma.toFixed(2)}$`} />
            </div>
            <span className="text-[10px] text-star-mute block">
              <MathText content="$h_a = \frac{2S}{a}$" />
            </span>
          </div>
        </div>
      )}

      {/* Step-by-step Formulas */}
      {result.isValid && (
        <div className="rounded-2xl border border-void-border/70 bg-void/40 p-4 space-y-3 text-xs sm:text-sm text-star-soft leading-relaxed">
          <div className="font-display font-bold text-star flex items-center gap-2">
            <span>📝</span>
            <span>Các bước tính toán chi tiết bằng Hệ thức lượng:</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">
            <div className="p-2.5 rounded-xl bg-void-card/60 border border-void-border">
              <span className="text-cyan-glow font-bold block mb-1">1. Định lí Côsin:</span>
              <MathText
                content={`$$a^2 = b^2 + c^2 - 2bc\\cos A = ${result.b.toFixed(1)}^2 + ${result.c.toFixed(1)}^2 - 2(${result.b.toFixed(1)})(${result.c.toFixed(1)})\\cos(${result.angleA.toFixed(0)}^\\circ) \\implies a \\approx ${result.a.toFixed(2)}$$`}
              />
            </div>
            <div className="p-2.5 rounded-xl bg-void-card/60 border border-void-border">
              <div className="text-emerald-glow font-bold mb-1">
                <MathText content="2. Định lí Sin & Bán kính $R$:" />
              </div>
              <MathText
                content={`$$2R = \\frac{a}{\\sin A} = \\frac{${result.a.toFixed(2)}}{\\sin(${result.angleA.toFixed(0)}^\\circ)} \\approx ${(2 * result.R).toFixed(2)} \\implies R \\approx ${result.R.toFixed(2)}$$`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
