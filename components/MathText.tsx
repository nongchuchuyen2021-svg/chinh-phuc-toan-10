"use client";

import React, { useEffect, useRef } from "react";

interface MathTextProps {
  content: string;
  className?: string;
}

export default function MathText({ content, className = "" }: MathTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const win = typeof window !== "undefined" ? (window as any) : null;
    if (!win) return;

    const render = () => {
      if (win.renderMathInElement && containerRef.current) {
        try {
          win.renderMathInElement(containerRef.current, {
            delimiters: [
              { left: "$$", right: "$$", display: true },
              { left: "$", right: "$", display: false },
              { left: "\\[", right: "\\]", display: true },
              { left: "\\(", right: "\\)", display: false },
            ],
            throwOnError: false,
          });
        } catch (e) {
          console.error("KaTeX render error:", e);
        }
      }
    };

    if (win.renderMathInElement) {
      render();
    } else {
      const interval = setInterval(() => {
        if (win.renderMathInElement) {
          clearInterval(interval);
          render();
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [content]);

  return (
    <span ref={containerRef} className={`math-content ${className}`}>
      {content}
    </span>
  );
}
