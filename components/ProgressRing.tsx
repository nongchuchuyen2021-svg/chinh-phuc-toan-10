"use client";

import { useId } from "react";

interface ProgressRingProps {
  percent: number; // 0-100
  size?: number;
  strokeWidth?: number;
  trackColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function ProgressRing({
  percent,
  size = 72,
  strokeWidth = 5,
  trackColor = "rgba(51, 65, 85, 0.45)",
  gradientFrom = "#06B6D4",
  gradientTo = "#10B981",
  className = "",
  children,
}: ProgressRingProps) {
  const rawId = useId();
  const gradientId = `ring-${rawId.replace(/[^a-zA-Z0-9]/g, "")}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.max(0, Math.min(100, isNaN(percent) ? 0 : percent));
  const offset = circumference * (1 - pct / 100);

  return (
    <div className={`relative inline-flex shrink-0 items-center justify-center ${className}`}>
      <svg width={size} height={size} className="-rotate-90 drop-shadow-md">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={trackColor} strokeWidth={strokeWidth} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.8s ease" }}
        />
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gradientFrom} />
            <stop offset="100%" stopColor={gradientTo} />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center justify-center">{children}</div>
    </div>
  );
}
