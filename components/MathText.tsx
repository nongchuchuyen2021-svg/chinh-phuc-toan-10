"use client";

import React, { useEffect, useRef } from "react";
import renderMathInElement from "katex/contrib/auto-render";

interface MathTextProps {
  content: string;
  className?: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function formatBoldToHtml(content: string): string {
  const parts = content.split(/(\*\*[^*]+\*\*)/g);
  return parts
    .map((part) => {
      if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
        return `<strong>${escapeHtml(part.slice(2, -2))}</strong>`;
      }
      return escapeHtml(part);
    })
    .join("");
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

    // Reset DOM an toàn bằng text & markdown đã escape
    containerRef.current.innerHTML = formatBoldToHtml(normalized);

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

  return <span ref={containerRef} className={`math-content ${className}`} />;
}
