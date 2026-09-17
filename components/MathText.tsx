"use client";

import React, { useEffect, useRef } from "react";
import renderMathInElement from "katex/contrib/auto-render";

interface MathTextProps {
  content: string;
  className?: string;
}

export default function MathText({ content, className = "" }: MathTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    try {
      renderMathInElement(containerRef.current, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\[", right: "\\]", display: true },
          { left: "\\(", right: "\\)", display: false },
        ],
        throwOnError: false,
        strict: (errorCode: string) => (errorCode === "unicodeTextInMathMode" ? "ignore" : "warn"),
      });
    } catch (e) {
      console.error("KaTeX render error:", e);
    }
  }, [content]);

  return (
    <span ref={containerRef} className={`math-content ${className}`}>
      {content}
    </span>
  );
}
