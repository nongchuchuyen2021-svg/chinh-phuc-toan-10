"use client";

import React, { useEffect, useRef } from "react";
import renderMathInElement from "katex/contrib/auto-render";

interface MathTextProps {
  content: string;
  className?: string;
}

// Chia nội dung theo cú pháp markdown nhẹ "**đậm**" thành các đoạn text
// thường / đậm xen kẽ, để React tự render (không dùng dangerouslySetInnerHTML).
function renderBoldSegments(content: string): React.ReactNode[] {
  const parts = content.split(/(\*\*[^*]+\*\*)/g).filter((p) => p !== "");
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

// Chuẩn hóa cú pháp LaTeX tự động: chuyển các vectơ 2 chữ cái viết hoa (\vec{AB})
// thành \overrightarrow{AB} để mũi tên kéo dài phủ kín toàn bộ tên vectơ theo chuẩn SGK
function normalizeLatex(text: string): string {
  if (!text) return "";
  return text.replace(/\\vec\{([A-Z]{2,})\}/g, "\\overrightarrow{$1}");
}

export default function MathText({ content, className = "" }: MathTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const normalized = React.useMemo(() => normalizeLatex(content), [content]);

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
  }, [normalized]);

  return (
    <span ref={containerRef} className={`math-content ${className}`}>
      {renderBoldSegments(normalized)}
    </span>
  );
}
