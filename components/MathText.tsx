"use client";

import React, { useEffect, useRef } from 'react';

interface MathTextProps {
  content: string;
  className?: string;
}

export default function MathText({ content, className = '' }: MathTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Check if katex is available on window
    const win = window as any;
    if (win.renderMathInElement) {
      try {
        win.renderMathInElement(containerRef.current, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\[', right: '\\]', display: true },
            { left: '\\(', right: '\\)', display: false }
          ],
          throwOnError: false
        });
      } catch (e) {
        console.error('KaTeX render error:', e);
      }
    }
  }, [content]);

  return (
    <span ref={containerRef} className={`math-content ${className}`}>
      {content}
    </span>
  );
}
