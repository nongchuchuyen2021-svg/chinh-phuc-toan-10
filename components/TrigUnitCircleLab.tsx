"use client";

import React, { useState, useMemo } from "react";
import MathText from "@/components/MathText";

interface TrigValues {
  angle: number;
  sinStr: string;
  cosStr: string;
  tanStr: string;
  cotStr: string;
  sinNum: number;
  cosNum: number;
  tanNum: number | null;
  cotNum: number | null;
  type: string;
  typeBadge: string;
}

const SPECIAL_ANGLES: Record<number, { sin: string; cos: string; tan: string; cot: string }> = {
  0: { sin: "0", cos: "1", tan: "0", cot: "Không xác định" },
  30: { sin: "\\frac{1}{2}", cos: "\\frac{\\sqrt{3}}{2}", tan: "\\frac{\\sqrt{3}}{3}", cot: "\\sqrt{3}" },
  45: { sin: "\\frac{\\sqrt{2}}{2}", cos: "\\frac{\\sqrt{2}}{2}", tan: "1", cot: "1" },
  60: { sin: "\\frac{\\sqrt{3}}{2}", cos: "\\frac{1}{2}", tan: "\\sqrt{3}", cot: "\\frac{\\sqrt{3}}{3}" },
  90: { sin: "1", cos: "0", tan: "Không xác định", cot: "0" },
  120: { sin: "\\frac{\\sqrt{3}}{2}", cos: "-\\frac{1}{2}", tan: "-\\sqrt{3}", cot: "-\\frac{\\sqrt{3}}{3}" },
  135: { sin: "\\frac{\\sqrt{2}}{2}", cos: "-\\frac{\\sqrt{2}}{2}", tan: "-1", cot: "-1" },
  150: { sin: "\\frac{1}{2}", cos: "-\\frac{\\sqrt{3}}{2}", tan: "-\\frac{\\sqrt{3}}{3}", cot: "-\\sqrt{3}" },
  180: { sin: "0", cos: "-1", tan: "0", cot: "Không xác định" },
};

export default function TrigUnitCircleLab() {
  const [angle, setAngle] = useState<number>(60);

  const rad = (angle * Math.PI) / 180;
  const sinVal = Math.sin(rad);
  const cosVal = Math.cos(rad);

  const data: TrigValues = useMemo(() => {
    const special = SPECIAL_ANGLES[angle];
    const sinNum = Math.round(sinVal * 10000) / 10000;
    const cosNum = Math.round(cosVal * 10000) / 10000;
    const tanNum = Math.abs(cosVal) < 1e-6 ? null : Math.round((sinVal / cosVal) * 10000) / 10000;
    const cotNum = Math.abs(sinVal) < 1e-6 ? null : Math.round((cosVal / sinVal) * 10000) / 10000;

    let type = "Góc nhọn";
    let typeBadge = "bg-cyan/20 text-cyan-glow border-cyan/40";
    if (angle === 0) {
      type = "Góc 0°";
      typeBadge = "bg-star-mute/20 text-star-soft border-star-mute/40";
    } else if (angle === 90) {
      type = "Góc vuông 90°";
      typeBadge = "bg-amber/20 text-amber-glow border-amber/40";
    } else if (angle === 180) {
      type = "Góc bẹt 180°";
      typeBadge = "bg-star-mute/20 text-star-soft border-star-mute/40";
    } else if (angle > 90) {
      type = "Góc tù (90° < α < 180°)";
      typeBadge = "bg-rose/20 text-rose-glow border-rose/40";
    }

    if (special) {
      return {
        angle,
        sinStr: special.sin,
        cosStr: special.cos,
        tanStr: special.tan,
        cotStr: special.cot,
        sinNum,
        cosNum,
        tanNum,
        cotNum,
        type,
        typeBadge,
      };
    }

    return {
      angle,
      sinStr: sinNum.toFixed(4),
      cosStr: cosNum.toFixed(4),
      tanStr: tanNum !== null ? tanNum.toFixed(4) : "Không xác định",
      cotStr: cotNum !== null ? cotNum.toFixed(4) : "Không xác định",
      sinNum,
      cosNum,
      tanNum,
      cotNum,
      type,
      typeBadge,
    };
  }, [angle, sinVal, cosVal]);

  // Semicircle geometry
  const CX = 230;
  const CY = 205;
  const R = 150;

  const mx = CX + R * cosVal;
  const my = CY - R * sinVal;

  const suppAngle = 180 - angle;
  const isSpecial = SPECIAL_ANGLES[angle] !== undefined;

  return (
    <div className="rounded-3xl border border-cyan/40 bg-void-card/95 p-5 sm:p-7 shadow-glow-cyan backdrop-blur-xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-void-border/80 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl animate-pulse">🔬</span>
          <div>
            <h4 className="font-display font-bold text-base sm:text-lg text-star">
              Phòng Thí Nghiệm Nửa Đường Tròn Đơn Vị
            </h4>
            <p className="text-xs text-star-soft">
              <MathText content={"Kéo thanh trượt hoặc chọn góc để quan sát tọa độ $M(x_0; y_0)$ và 4 giá trị lượng giác."} />
            </p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${data.typeBadge}`}>
          {data.type}
        </span>
      </div>

      {/* Angle Presets */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-star-mute">
          <span>Góc đặc biệt thường gặp:</span>
          <span className="text-cyan-glow font-bold">α = {angle}°</span>
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {[0, 30, 45, 60, 90, 120, 135, 150, 180].map((deg) => (
            <button
              key={deg}
              onClick={() => setAngle(deg)}
              className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition duration-150 ${
                angle === deg
                  ? "bg-gradient-to-r from-cyan to-violet text-white shadow-glow-cyan scale-105"
                  : "bg-void-subtle border border-void-border text-star-soft hover:border-cyan/40 hover:text-star"
              }`}
            >
              {deg}°
            </button>
          ))}
        </div>
      </div>

      {/* Slider */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs font-mono text-star-mute">
          <span>0° (trục Ox)</span>
          <span className="text-amber-glow font-bold">Kéo góc tự do: {angle}°</span>
          <span>180° (-Ox)</span>
        </div>
        <input
          aria-label="Góc alpha trên nửa đường tròn đơn vị"
          type="range"
          min="0"
          max="180"
          step="1"
          value={angle}
          onChange={(e) => setAngle(Number(e.target.value))}
          className="w-full h-2.5 bg-void-subtle rounded-lg appearance-none cursor-pointer accent-cyan"
        />
      </div>

      {/* SVG Semicircle Canvas */}
      <div className="rounded-2xl border border-void-border bg-[#080d19] p-3 sm:p-4 flex flex-col items-center justify-center relative overflow-hidden">
        <svg
          viewBox="0 0 460 250"
          className="w-full max-w-[480px] h-auto select-none"
          role="img"
          aria-label={`Nửa đường tròn đơn vị: góc ${angle} độ, M(${data.cosNum}; ${data.sinNum})`}
        >
          <defs>
            <linearGradient id="scArcGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
            <linearGradient id="scFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(56, 189, 248, 0.12)" />
              <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
            </linearGradient>
            <filter id="glowM" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#38bdf8" />
            </filter>
          </defs>

          {/* Background Grid Accent */}
          <line x1="80" y1={CY} x2="380" y2={CY} stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
          <line x1={CX} y1={CY - R} x2={CX} y2={CY} stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />

          {/* Trục Ox */}
          <line x1="40" y1={CY} x2="420" y2={CY} stroke="#475569" strokeWidth="2" />
          <polygon points="420,201 428,205 420,209" fill="#94a3b8" />
          <text x="424" y="196" fill="#94a3b8" fontSize="12" fontFamily="monospace" fontWeight="bold">x</text>
          <text x="350" y="222" fill="#38bdf8" fontSize="11" fontFamily="monospace">(Trục cosin)</text>

          {/* Trục Oy */}
          <line x1={CX} y1="235" x2={CX} y2="30" stroke="#475569" strokeWidth="2" />
          <polygon points="226,30 230,22 234,30" fill="#f43f5e" />
          <text x="238" y="28" fill="#f43f5e" fontSize="12" fontFamily="monospace" fontWeight="bold">y (Trục sin)</text>

          {/* Gốc O */}
          <text x={CX - 16} y={CY + 18} fill="#94a3b8" fontSize="13" fontFamily="monospace" fontWeight="bold">O</text>

          {/* Nửa đường tròn R = 150 */}
          <path d={`M 80 ${CY} A ${R} ${R} 0 0 1 380 ${CY} Z`} fill="url(#scFill)" />
          <path d={`M 80 ${CY} A ${R} ${R} 0 0 1 380 ${CY}`} fill="none" stroke="url(#scArcGrad)" strokeWidth="3" />

          {/* Ticks at -1, 1, and 1 on y */}
          <circle cx="80" cy={CY} r="3" fill="#cbd5e1" />
          <text x="68" y={CY + 18} fill="#94a3b8" fontSize="11" fontFamily="monospace">-1</text>

          <circle cx="380" cy={CY} r="3" fill="#cbd5e1" />
          <text x="376" y={CY + 18} fill="#94a3b8" fontSize="11" fontFamily="monospace">1</text>

          <circle cx={CX} cy={CY - R} r="3" fill="#cbd5e1" />
          <text x={CX + 8} y={CY - R + 12} fill="#94a3b8" fontSize="11" fontFamily="monospace">1</text>

          {/* Dots for special angles on the arc */}
          {[30, 45, 60, 90, 120, 135, 150].map((deg) => {
            const radA = (deg * Math.PI) / 180;
            const px = CX + R * Math.cos(radA);
            const py = CY - R * Math.sin(radA);
            return (
              <circle
                key={deg}
                cx={px}
                cy={py}
                r="2.5"
                fill="#64748b"
                opacity="0.6"
              />
            );
          })}

          {/* Projections from M to Ox and Oy */}
          <line
            x1={mx}
            y1={my}
            x2={mx}
            y2={CY}
            stroke="#f43f5e"
            strokeWidth="2"
            strokeDasharray="4 3"
          />
          <line
            x1={mx}
            y1={my}
            x2={CX}
            y2={my}
            stroke="#38bdf8"
            strokeWidth="2"
            strokeDasharray="4 3"
          />

          {/* Segment on Ox: cos alpha */}
          <line
            x1={CX}
            y1={CY}
            x2={mx}
            y2={CY}
            stroke={cosVal >= 0 ? "#38bdf8" : "#fb7185"}
            strokeWidth="4"
          />

          {/* Segment on Oy: sin alpha */}
          <line
            x1={CX}
            y1={CY}
            x2={CX}
            y2={my}
            stroke="#10b981"
            strokeWidth="4"
          />

          {/* Ray OM */}
          <line x1={CX} y1={CY} x2={mx} y2={my} stroke="#fbbf24" strokeWidth="2.5" />

          {/* Angle arc */}
          {angle > 0 && (
            <path
              d={`M ${CX + 35} ${CY} A 35 35 0 0 0 ${CX + 35 * Math.cos(rad)} ${CY - 35 * Math.sin(rad)}`}
              fill="none"
              stroke="#fbbf24"
              strokeWidth="2"
            />
          )}

          {/* Text labels for projections */}
          {Math.abs(cosVal) > 0.12 && (
            <text
              x={(CX + mx) / 2}
              y={CY + 18}
              fill={cosVal >= 0 ? "#38bdf8" : "#fb7185"}
              fontSize="11"
              fontFamily="monospace"
              fontWeight="bold"
              textAnchor="middle"
            >
              cos α = {data.cosNum}
            </text>
          )}

          {sinVal > 0.12 && (
            <text
              x={CX - 12}
              y={(CY + my) / 2}
              fill="#10b981"
              fontSize="11"
              fontFamily="monospace"
              fontWeight="bold"
              textAnchor="end"
            >
              sin α = {data.sinNum}
            </text>
          )}

          {/* Point M */}
          <circle
            cx={mx}
            cy={my}
            r="6.5"
            fill="#38bdf8"
            stroke="#ffffff"
            strokeWidth="2"
            filter="url(#glowM)"
          />
          <text
            x={mx + (cosVal >= 0 ? 12 : -12)}
            y={my - 10}
            fill="#facc15"
            fontSize="12"
            fontFamily="monospace"
            fontWeight="bold"
            textAnchor={cosVal >= 0 ? "start" : "end"}
          >
            M({data.cosNum}; {data.sinNum})
          </text>
        </svg>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-mono text-star-soft pt-1">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-1 bg-[#10b981] rounded-full inline-block" />
            <span>Tung độ y (sin α): luôn không âm (≥ 0)</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-1 bg-[#38bdf8] rounded-full inline-block" />
            <span>Hoành độ x (cos α): &gt; 0 khi nhọn, &lt; 0 khi tù</span>
          </span>
        </div>
      </div>

      {/* 4 Value Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {/* sin */}
        <div className="rounded-2xl border border-emerald/40 bg-emerald/10 p-3.5 space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-display font-bold text-xs text-emerald-glow">sin α (tung độ)</span>
            <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald/20 text-emerald-glow">
              {data.sinNum === 0 ? "0" : data.sinNum > 0 ? "+" : "−"}
            </span>
          </div>
          <div className="text-base font-mono font-bold text-star">
            <MathText content={data.sinStr} />
          </div>
          <div className="text-[11px] font-mono text-star-mute">≈ {data.sinNum}</div>
        </div>

        {/* cos */}
        <div className={`rounded-2xl border p-3.5 space-y-1 ${
          data.cosNum >= 0 ? "border-cyan/40 bg-cyan/10" : "border-rose/40 bg-rose/10"
        }`}>
          <div className="flex items-center justify-between">
            <span className={`font-display font-bold text-xs ${data.cosNum >= 0 ? "text-cyan-glow" : "text-rose-glow"}`}>
              cos α (hoành độ)
            </span>
            <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
              data.cosNum >= 0 ? "bg-cyan/20 text-cyan-glow" : "bg-rose/20 text-rose-glow"
            }`}>
              {data.cosNum === 0 ? "0" : data.cosNum > 0 ? "+" : "ÂM (−)"}
            </span>
          </div>
          <div className="text-base font-mono font-bold text-star">
            <MathText content={data.cosStr} />
          </div>
          <div className="text-[11px] font-mono text-star-mute">≈ {data.cosNum}</div>
        </div>

        {/* tan */}
        <div className="rounded-2xl border border-void-border bg-void-subtle/80 p-3.5 space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-display font-bold text-xs text-amber-glow">tan α (sin/cos)</span>
            {data.tanNum !== null && (
              <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                data.tanNum >= 0 ? "bg-cyan/20 text-cyan-glow" : "bg-rose/20 text-rose-glow"
              }`}>
                {data.tanNum === 0 ? "0" : data.tanNum > 0 ? "+" : "−"}
              </span>
            )}
          </div>
          <div className="text-base font-mono font-bold text-star break-words">
            <MathText content={data.tanStr} />
          </div>
          <div className="text-[11px] font-mono text-star-mute">
            {data.tanNum !== null ? `≈ ${data.tanNum}` : "Không t.tại tại 90°"}
          </div>
        </div>

        {/* cot */}
        <div className="rounded-2xl border border-void-border bg-void-subtle/80 p-3.5 space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-display font-bold text-xs text-violet-glow">cot α (cos/sin)</span>
            {data.cotNum !== null && (
              <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                data.cotNum >= 0 ? "bg-cyan/20 text-cyan-glow" : "bg-rose/20 text-rose-glow"
              }`}>
                {data.cotNum === 0 ? "0" : data.cotNum > 0 ? "+" : "−"}
              </span>
            )}
          </div>
          <div className="text-base font-mono font-bold text-star break-words">
            <MathText content={data.cotStr} />
          </div>
          <div className="text-[11px] font-mono text-star-mute">
            {data.cotNum !== null ? `≈ ${data.cotNum}` : "Không t.tại tại 0°, 180°"}
          </div>
        </div>
      </div>

      {/* Supplementary Angle Card */}
      <div className="p-4 rounded-2xl border border-violet/30 bg-violet/10 text-xs sm:text-sm text-star-soft flex items-start gap-3">
        <span className="text-xl shrink-0">💡</span>
        <div className="space-y-1">
          <div className="font-display font-bold text-violet-glow">
            Góc bù đối xứng với {angle}° là {suppAngle}° (180° − {angle}°):
          </div>
          <div className="leading-relaxed">
            <MathText content={`• $\\sin ${angle}^\\circ = \\sin ${suppAngle}^\\circ$ (cùng bằng tung độ $y_0 = ${data.sinNum}$).`} />
            <br />
            <MathText content={`• $\\cos ${angle}^\\circ = -\\cos ${suppAngle}^\\circ$ (đối xứng qua trục $Oy$, hoành độ đổi dấu).`} />
          </div>
        </div>
      </div>
    </div>
  );
}
