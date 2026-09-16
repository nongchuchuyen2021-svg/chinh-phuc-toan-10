"use client";

import { useState } from "react";
import type { LessonTheory, TheoryBlock } from "@/lib/types";
import { markTheoryRead } from "@/lib/progress";
import { playClick, playCorrect, playWrong, playCelebration } from "@/lib/sound";
import MathText from "@/components/MathText";

export default function TheoryViewer({
  lessonId,
  lessonTitle,
  topicName,
  theory,
  onGoQuiz,
}: {
  lessonId: string;
  lessonTitle: string;
  topicName: string;
  theory: LessonTheory;
  onGoQuiz?: () => void;
}) {
  const [checks, setChecks] = useState<Record<string, number>>({});
  const [completed, setCompleted] = useState(false);

  function handleCheck(blockIdx: number, optIdx: number, isRight: boolean) {
    if (checks[blockIdx] !== undefined) return;
    setChecks((prev) => ({ ...prev, [blockIdx]: optIdx }));
    if (isRight) {
      playCorrect();
    } else {
      playWrong();
    }
  }

  function handleComplete() {
    playCelebration();
    markTheoryRead(lessonId);
    setCompleted(true);
    if (onGoQuiz) {
      setTimeout(() => {
        onGoQuiz();
      }, 500);
    }
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      {/* Intro Banner */}
      <div className="rounded-3xl border border-void-border/90 bg-void-card/90 p-6 sm:p-8 space-y-3 shadow-card backdrop-blur-xl">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-glow">
            {topicName}
          </span>
          <span className="text-xs font-mono text-star-mute">
            ⏱️ ~{theory.minutes} phút tự học
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-star">
          {lessonTitle}
        </h2>
        <div className="text-sm sm:text-base text-star-soft leading-relaxed pt-1">
          <MathText content={theory.intro} />
        </div>
      </div>

      {/* Sections */}
      {theory.sections.map((sec, secIdx) => (
        <section key={sec.id || secIdx} className="space-y-4">
          <div className="flex items-center gap-2.5 pt-2">
            <span className="text-2xl">{sec.emoji}</span>
            <h3 className="font-display font-bold text-lg sm:text-xl text-star">
              {sec.heading}
            </h3>
          </div>

          <div className="space-y-4">
            {sec.blocks.map((block, bIdx) => (
              <div key={bIdx}>
                {/* 1. Text */}
                {block.kind === "text" && (
                  <div className="rounded-2xl border border-void-border bg-void-card/85 p-5 text-sm sm:text-base text-star-soft leading-relaxed shadow-card">
                    <MathText content={block.text} />
                  </div>
                )}

                {/* 2. Cards */}
                {block.kind === "cards" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {block.items.map((card, cIdx) => (
                      <div
                        key={cIdx}
                        className="rounded-2xl border border-void-border bg-void-card/90 p-5 space-y-2 shadow-card hover:border-cyan/40 hover:shadow-glow-cyan transition duration-200"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{card.emoji}</span>
                          <h4 className="font-display font-bold text-sm text-star">
                            {card.title}
                          </h4>
                        </div>
                        <div className="text-xs sm:text-sm text-star-soft leading-relaxed whitespace-pre-line">
                          <MathText content={card.text} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 3. Compare */}
                {block.kind === "compare" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-2xl border-l-4 border-l-violet border-y border-r border-void-border bg-void-card/90 p-5 space-y-3 shadow-card">
                      <div className="flex items-center gap-2 font-display font-bold text-sm text-violet-glow">
                        <span>{block.left.emoji}</span>
                        <span>{block.left.title}</span>
                      </div>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-star-soft">
                        {block.left.items.map((it, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2">
                            <span className="text-violet-glow font-bold">•</span>
                            <MathText content={it} />
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border-l-4 border-l-cyan border-y border-r border-void-border bg-void-card/90 p-5 space-y-3 shadow-card">
                      <div className="flex items-center gap-2 font-display font-bold text-sm text-cyan-glow">
                        <span>{block.right.emoji}</span>
                        <span>{block.right.title}</span>
                      </div>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-star-soft">
                        {block.right.items.map((it, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2">
                            <span className="text-cyan-glow font-bold">•</span>
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
                        className="rounded-2xl border border-void-border bg-void-card/90 p-4 sm:p-5 flex items-start gap-4 shadow-card"
                      >
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan to-violet text-white font-display font-bold text-xs flex items-center justify-center shrink-0 shadow-glow-cyan">
                          {sIdx + 1}
                        </div>
                        <div className="space-y-1">
                          <h5 className="font-display font-bold text-sm text-star">
                            {st.title}
                          </h5>
                          <div className="text-xs sm:text-sm text-star-soft leading-relaxed">
                            <MathText content={st.text} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 5. Quick Check */}
                {block.kind === "check" && (
                  <div className="rounded-3xl border border-violet/40 bg-void-card/95 shadow-glow-violet overflow-hidden backdrop-blur-xl">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-violet-deep via-violet to-cyan-deep px-5 py-3 text-white">
                      <span className="text-xl">🤔</span>
                      <p className="font-display text-sm font-semibold">
                        Kiểm tra nhanh xem em đã hiểu chưa
                      </p>
                    </div>

                    <div className="p-5 sm:p-6 space-y-4">
                      <div className="text-sm font-semibold text-star leading-relaxed">
                        <MathText content={block.q} />
                      </div>

                      <div className="space-y-2">
                        {block.options.map((opt, oIdx) => {
                          const isPicked = checks[bIdx] === oIdx;
                          const isAnswer = oIdx === block.answer;
                          const answered = checks[bIdx] !== undefined;

                          let style = "bg-void-subtle border-void-border text-star-soft hover:border-cyan/40 hover:text-star";
                          if (answered) {
                            if (isAnswer) {
                              style = "bg-emerald/20 border-emerald text-emerald-glow font-bold shadow-glow-emerald";
                            } else if (isPicked) {
                              style = "bg-rose/20 border-rose text-rose-glow font-bold shadow-glow-rose";
                            } else {
                              style = "opacity-40 border-void-border text-star-mute";
                            }
                          }

                          return (
                            <button
                              key={oIdx}
                              disabled={answered}
                              onClick={() => handleCheck(bIdx, oIdx, isAnswer)}
                              className={`w-full text-left p-3.5 rounded-2xl border text-xs sm:text-sm transition flex items-center gap-3 ${style}`}
                            >
                              <span className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                                answered && isAnswer
                                  ? "bg-emerald text-white border-emerald"
                                  : answered && isPicked
                                  ? "bg-rose text-white border-rose"
                                  : "border-void-border text-star-mute"
                              }`}>
                                {["A", "B", "C", "D"][oIdx]}
                              </span>
                              <span className="flex-1">
                                <MathText content={opt} />
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {checks[bIdx] !== undefined && (
                        <div className="text-xs text-star-soft bg-void-subtle/80 p-3.5 rounded-2xl border border-void-border animate-fade-in-up">
                          <strong className="text-cyan-glow">💡 Giải thích: </strong>
                          <MathText content={block.explain} />
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* 6. Note */}
                {block.kind === "note" && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-amber/10 border border-amber/30 text-xs sm:text-sm text-amber-200/90 flex items-start gap-3 shadow-glow-amber">
                    <span className="text-lg shrink-0">📌</span>
                    <div className="leading-relaxed">
                      <MathText content={block.text} />
                    </div>
                  </div>
                )}

                {/* 7. List */}
                {block.kind === "list" && (
                  <div className="rounded-2xl border border-void-border bg-void-card/85 p-5 shadow-card space-y-2 text-xs sm:text-sm text-star-soft">
                    {block.items.map((li, lIdx) => (
                      <div key={lIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="text-cyan-glow font-bold">•</span>
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
      <div className="rounded-3xl p-6 sm:p-7 space-y-4 border border-emerald/30 bg-emerald/10 shadow-glow-emerald">
        <h4 className="font-display font-bold text-base text-emerald-glow flex items-center gap-2">
          <span>📝</span>
          <span>Tóm tắt trọng tâm ghi nhớ</span>
        </h4>
        <ul className="space-y-2 text-xs sm:text-sm text-star-soft">
          {theory.summary.map((sm, sIdx) => (
            <li key={sIdx} className="flex items-start gap-2.5">
              <span className="text-emerald-glow font-bold">✓</span>
              <MathText content={sm} />
            </li>
          ))}
        </ul>
      </div>

      {/* Completion Button */}
      <div className="pt-4 flex justify-center">
        <button
          onClick={handleComplete}
          className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan to-violet hover:opacity-95 text-white font-display font-bold text-sm shadow-glow-cyan transition transform hover:scale-105 flex items-center gap-2"
        >
          <span>{completed ? "✓ Đã hiểu bài" : "✨ Đã hiểu bài — Chuyển sang Luyện Trắc Nghiệm"}</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}
