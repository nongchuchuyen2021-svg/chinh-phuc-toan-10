"use client";

import { useState } from "react";
import type { LessonTheory, TheoryBlock } from "@/lib/types";
import { markTheoryRead } from "@/lib/progress";
import MathText from "@/components/MathText";

export default function TheoryViewer({
  lessonId,
  lessonTitle,
  topicName,
  theory,
  onBack,
  onGoQuiz,
}: {
  lessonId: string;
  lessonTitle: string;
  topicName: string;
  theory: LessonTheory;
  onBack?: () => void;
  onGoQuiz?: () => void;
}) {
  const [checks, setChecks] = useState<Record<string, number>>({});
  const [completed, setCompleted] = useState(false);

  function handleCheck(blockIdx: number, optIdx: number) {
    setChecks((prev) => ({ ...prev, [blockIdx]: optIdx }));
  }

  function handleComplete() {
    markTheoryRead(lessonId);
    setCompleted(true);
    if (onGoQuiz) onGoQuiz();
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-10">
      {/* Top Controls */}
      <div className="glass rounded-2xl p-4 flex items-center justify-between shadow-sm">
        {onBack ? (
          <button
            onClick={onBack}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-indigo-50 transition"
          >
            ← Trở về
          </button>
        ) : (
          <div />
        )}

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium">
            Thời lượng tự học: ~{theory.minutes} phút
          </span>
        </div>
      </div>

      {/* Intro Banner */}
      <div className="glass rounded-3xl p-6 sm:p-8 space-y-3 border border-indigo-100 shadow-sm">
        <span className="text-xs font-bold uppercase tracking-wider text-nebula">
          {topicName}
        </span>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
          {lessonTitle}
        </h2>
        <div className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
          <MathText content={theory.intro} />
        </div>
      </div>

      {/* Sections */}
      {theory.sections.map((sec, secIdx) => (
        <section key={sec.id || secIdx} className="space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">{sec.emoji}</span>
            <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900">
              {sec.heading}
            </h3>
          </div>

          <div className="space-y-4">
            {sec.blocks.map((block, bIdx) => (
              <div key={bIdx}>
                {/* 1. Text */}
                {block.kind === "text" && (
                  <div className="glass rounded-2xl p-5 text-sm sm:text-base text-slate-700 leading-relaxed shadow-sm">
                    <MathText content={block.text} />
                  </div>
                )}

                {/* 2. Cards */}
                {block.kind === "cards" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {block.items.map((card, cIdx) => (
                      <div
                        key={cIdx}
                        className="glass rounded-2xl p-5 space-y-2 border border-indigo-100/60 shadow-sm hover:border-indigo-300 transition"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{card.emoji}</span>
                          <h4 className="font-display font-bold text-sm text-slate-900">
                            {card.title}
                          </h4>
                        </div>
                        <div className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                          <MathText content={card.text} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 3. Compare */}
                {block.kind === "compare" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="glass rounded-2xl p-5 border-l-4 border-l-nebula space-y-3">
                      <div className="flex items-center gap-2 font-display font-bold text-sm text-nebula">
                        <span>{block.left.emoji}</span>
                        <span>{block.left.title}</span>
                      </div>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                        {block.left.items.map((it, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2">
                            <span className="text-nebula">•</span>
                            <MathText content={it} />
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="glass rounded-2xl p-5 border-l-4 border-l-plasma space-y-3">
                      <div className="flex items-center gap-2 font-display font-bold text-sm text-plasma">
                        <span>{block.right.emoji}</span>
                        <span>{block.right.title}</span>
                      </div>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                        {block.right.items.map((it, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2">
                            <span className="text-plasma">•</span>
                            <MathText content={it} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* 4. Steps */}
                {block.kind === "steps" && (
                  <div className="space-y-3">
                    {block.items.map((st, sIdx) => (
                      <div
                        key={sIdx}
                        className="glass rounded-2xl p-4 sm:p-5 flex items-start gap-4 shadow-sm border border-slate-100"
                      >
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-nebula to-plasma text-white font-display font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
                          {sIdx + 1}
                        </div>
                        <div className="space-y-1">
                          <h5 className="font-display font-bold text-sm text-slate-900">
                            {st.title}
                          </h5>
                          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            <MathText content={st.text} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 5. Quick Check */}
                {block.kind === "check" && (
                  <div className="glass rounded-2xl p-5 sm:p-6 border border-amber-200/80 bg-amber-50/20 space-y-4 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                      <span>⚡</span>
                      <span>Kiểm tra nhanh kiến thức</span>
                    </div>

                    <div className="text-sm font-semibold text-slate-900 leading-relaxed">
                      <MathText content={block.q} />
                    </div>

                    <div className="space-y-2">
                      {block.options.map((opt, oIdx) => {
                        const isPicked = checks[bIdx] === oIdx;
                        const isAnswer = oIdx === block.answer;
                        const answered = checks[bIdx] !== undefined;

                        let style = "glass border-slate-200 hover:bg-amber-50/50";
                        if (answered) {
                          if (isAnswer) style = "bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold";
                          else if (isPicked) style = "bg-rose-50 border-rose-400 text-rose-900";
                          else style = "opacity-50";
                        }

                        return (
                          <button
                            key={oIdx}
                            disabled={answered}
                            onClick={() => handleCheck(bIdx, oIdx)}
                            className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition flex items-center gap-2.5 ${style}`}
                          >
                            <span className="w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold shrink-0">
                              {["A", "B", "C", "D"][oIdx]}
                            </span>
                            <MathText content={opt} />
                          </button>
                        );
                      })}
                    </div>

                    {checks[bIdx] !== undefined && (
                      <div className="text-xs text-slate-600 bg-white/70 p-3 rounded-xl border border-amber-100 animate-pop-in">
                        <strong>Giải thích: </strong>
                        <MathText content={block.explain} />
                      </div>
                    )}
                  </div>
                )}

                {/* 6. Note */}
                {block.kind === "note" && (
                  <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200/70 text-xs sm:text-sm text-indigo-950 flex items-start gap-3">
                    <span className="text-lg">📌</span>
                    <div className="leading-relaxed">
                      <MathText content={block.text} />
                    </div>
                  </div>
                )}

                {/* 7. List */}
                {block.kind === "list" && (
                  <div className="glass rounded-2xl p-5 shadow-sm space-y-2 text-xs sm:text-sm text-slate-700">
                    {block.items.map((li, lIdx) => (
                      <div key={lIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="text-nebula font-bold">•</span>
                        <MathText content={li} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Summary Box */}
      <div className="glass rounded-3xl p-6 sm:p-8 space-y-4 border border-indigo-200 bg-indigo-50/30">
        <h4 className="font-display font-bold text-base text-slate-900 flex items-center gap-2">
          <span>📝</span>
          <span>Tóm tắt trọng tâm ghi nhớ</span>
        </h4>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
          {theory.summary.map((sm, sIdx) => (
            <li key={sIdx} className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <MathText content={sm} />
            </li>
          ))}
        </ul>
      </div>

      {/* Completion Button */}
      <div className="pt-4 flex justify-center">
        <button
          onClick={handleComplete}
          className="px-8 py-3 rounded-2xl bg-gradient-to-r from-nebula to-plasma hover:opacity-95 text-white font-display font-bold text-sm shadow-glow transition transform hover:scale-[1.02]"
        >
          {completed ? "✓ Đã hoàn thành lý thuyết" : "Đã hiểu bài — Chuyển sang Trắc nghiệm →"}
        </button>
      </div>
    </div>
  );
}
