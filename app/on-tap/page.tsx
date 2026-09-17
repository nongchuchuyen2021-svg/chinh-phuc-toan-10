"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import MathText from "@/components/MathText";
import Confetti from "@/components/Confetti";
import { playClick, playCorrect, playWrong, playCelebration } from "@/lib/sound";

interface MistakeQuestion {
  id: string;
  source: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const DEFAULT_REVIEW_QUESTIONS: MistakeQuestion[] = [
  {
    id: "rev-01",
    source: "Chương I: Mệnh đề và tập hợp",
    question: "Phủ định của mệnh đề $P: \"\\forall x \\in \\mathbb{R}, x^2 - x + 7 > 0\"$ là mệnh đề nào sau đây?",
    options: [
      "$\\overline{P}: \"\\exists x \\in \\mathbb{R}, x^2 - x + 7 \\le 0\"$",
      "$\\overline{P}: \"\\exists x \\in \\mathbb{R}, x^2 - x + 7 < 0\"$",
      "$\\overline{P}: \"\\forall x \\in \\mathbb{R}, x^2 - x + 7 \\le 0\"$",
      "$\\overline{P}: \"\\exists x \\in \\mathbb{R}, x^2 - x + 7 \\ge 0\"$",
    ],
    correctAnswer: 0,
    explanation: "Phủ định của $\\forall x \\in X, P(x)$ là $\\exists x \\in X, \\overline{P(x)}$. Phủ định của dấu $>$ là dấu $\\le$. Do đó $\\overline{P}: \"\\exists x \\in \\mathbb{R}, x^2 - x + 7 \\le 0\"$.",
  },
  {
    id: "rev-02",
    source: "Chương I: Mệnh đề và tập hợp",
    question: "Cho hai tập hợp $A = [-2; 3)$ và $B = [1; 5]$. Tìm tập hợp $A \\cap B$.",
    options: ["[1; 3)", "[-2; 5]", "(1; 3)", "[-2; 1)"],
    correctAnswer: 0,
    explanation: "Giao của hai tập hợp $A \\cap B$ lấy phần tử chung: từ $1$ (ngoặc vuông do thuộc cả hai) đến $3$ (ngoặc tròn do không thuộc $A$). Vậy $A \\cap B = [1; 3)$.",
  },
  {
    id: "rev-03",
    source: "Chương II: BPT bậc nhất hai ẩn",
    question: "Điểm nào sau đây thuộc miền nghiệm của bất phương trình $2x - 3y + 1 > 0$?",
    options: ["(2; 1)", "(1; 2)", "(0; 1)", "(-1; 0)"],
    correctAnswer: 0,
    explanation: "Thay $(2; 1)$ vào vế trái: $2(2) - 3(1) + 1 = 4 - 3 + 1 = 2 > 0$ (thỏa mãn). Điểm $(1; 2)$ cho $2(1) - 3(2) + 1 = -3 < 0$ (không thỏa).",
  },
  {
    id: "rev-04",
    source: "Chương III: Hệ thức lượng trong tam giác",
    question: "Cho tam giác $ABC$ có $a = 6$, $\\widehat{A} = 30^\\circ$. Bán kính đường tròn ngoại tiếp $R$ của tam giác $ABC$ bằng:",
    options: ["6", "12", "3", "$6\\sqrt{3}$"],
    correctAnswer: 0,
    explanation: "Theo định lí sin trong tam giác: $\\dfrac{a}{\\sin A} = 2R \\implies R = \\dfrac{a}{2\\sin A} = \\dfrac{6}{2\\sin 30^\\circ} = \\dfrac{6}{2 \\times 0.5} = 6$.",
  },
  {
    id: "rev-05",
    source: "Chương IV: Vectơ & Tích vô hướng",
    question: "Cho hai vectơ $\\vec{a} = (1; 2)$ và $\\vec{b} = (-2; 1)$. Góc giữa hai vectơ $\\vec{a}$ và $\\vec{b}$ bằng:",
    options: ["90°", "0°", "180°", "45°"],
    correctAnswer: 0,
    explanation: "Tính tích vô hướng: $\\vec{a} \\cdot \\vec{b} = 1(-2) + 2(1) = -2 + 2 = 0$. Vì $\\vec{a} \\cdot \\vec{b} = 0$ và hai vectơ khác $\\vec{0}$ nên $\\vec{a} \\perp \\vec{b} \\implies (\\vec{a}, \\vec{b}) = 90^\\circ$.",
  },
  {
    id: "rev-06",
    source: "Chương V: Thống kê không ghép nhóm",
    question: "Mẫu số liệu có tứ phân vị thứ nhất $Q_1 = 15$ và tứ phân vị thứ ba $Q_3 = 28$. Khoảng tứ phân vị $\\Delta_Q$ bằng:",
    options: ["13", "43", "21.5", "7"],
    correctAnswer: 0,
    explanation: "Khoảng tứ phân vị được tính theo công thức $\\Delta_Q = Q_3 - Q_1 = 28 - 15 = 13$.",
  },
  {
    id: "rev-07",
    source: "Chương VI: Hàm số bậc hai",
    question: "Trục đối xứng của parabol $y = -2x^2 + 8x - 1$ là đường thẳng:",
    options: ["x = 2", "x = -2", "x = 4", "y = 2"],
    correctAnswer: 0,
    explanation: "Trục đối xứng của parabol $y = ax^2 + bx + c$ có phương trình $x = -\\dfrac{b}{2a} = -\\dfrac{8}{2(-2)} = 2$.",
  },
  {
    id: "rev-08",
    source: "Chương VII: Tọa độ phẳng Oxy",
    question: "Bán kính của đường tròn $(C): x^2 + y^2 - 6x + 8y = 0$ là:",
    options: ["5", "25", "10", "$\\sqrt{7}$"],
    correctAnswer: 0,
    explanation: "Phương trình có $a = 3$, $b = -4$, $c = 0$. Bán kính $R = \\sqrt{a^2 + b^2 - c} = \\sqrt{3^2 + (-4)^2 - 0} = \\sqrt{9 + 16} = 5$.",
  },
  {
    id: "rev-09",
    source: "Chương VIII: Đại số tổ hợp",
    question: "Số cách chọn 3 bạn từ một nhóm 10 bạn để bầu vào một tổ trực nhật (không phân chia nhiệm vụ) là:",
    options: ["$C_{10}^3 = 120$", "$A_{10}^3 = 720$", "$10^3 = 1000$", "$3! = 6$"],
    correctAnswer: 0,
    explanation: "Vì không phân biệt thứ tự hay công việc nên dùng tổ hợp: $C_{10}^3 = \\dfrac{10!}{3! \\times 7!} = 120$.",
  },
  {
    id: "rev-10",
    source: "Chương IX: Xác suất cổ điển",
    question: "Một hộp chứa 5 quả cầu đỏ và 4 quả cầu xanh. Lấy ngẫu nhiên 2 quả. Xác suất để lấy được 2 quả cùng màu đỏ là:",
    options: ["$\\dfrac{5}{18}$", "$\\dfrac{1}{6}$", "$\\dfrac{5}{9}$", "$\\dfrac{2}{9}$"],
    correctAnswer: 0,
    explanation: "Số phần tử không gian mẫu $n(\\Omega) = C_9^2 = 36$. Số cách chọn 2 quả đỏ là $n(A) = C_5^2 = 10$. Xác suất $P(A) = \\dfrac{10}{36} = \\dfrac{5}{18}$.",
  },
];

export default function OnTapPage() {
  const [questions, setQuestions] = useState<MistakeQuestion[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});
  const [fixedQuestions, setFixedQuestions] = useState<Set<string>>(new Set());
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("toan10_mistakes");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setQuestions(parsed);
          return;
        }
      }
    } catch {
      // Fallback
    }
    setQuestions(DEFAULT_REVIEW_QUESTIONS);
  }, []);

  const handleSelectOption = (qId: string, optIdx: number, correctIdx: number) => {
    if (fixedQuestions.has(qId)) return;
    playClick();

    setSelectedAnswers((prev) => ({ ...prev, [qId]: optIdx }));
    setShowExplanation((prev) => ({ ...prev, [qId]: true }));

    if (optIdx === correctIdx) {
      playCorrect();
      setFixedQuestions((prev) => {
        const next = new Set(prev);
        next.add(qId);
        if (next.size === questions.length) {
          playCelebration();
          setShowConfetti(true);
        }
        return next;
      });
    } else {
      playWrong();
    }
  };

  const handleClearHistory = () => {
    if (confirm("Em có chắc muốn xóa lịch sử câu làm sai và làm lại từ đầu không?")) {
      playClick();
      localStorage.removeItem("toan10_mistakes");
      setQuestions(DEFAULT_REVIEW_QUESTIONS);
      setSelectedAnswers({});
      setShowExplanation({});
      setFixedQuestions(new Set());
      setShowConfetti(false);
    }
  };

  const completedCount = fixedQuestions.size;
  const progressPercent = questions.length > 0 ? Math.round((completedCount / questions.length) * 100) : 0;

  return (
    <main className="min-h-screen pt-10 pb-20 px-4 sm:px-6 max-w-5xl mx-auto">
      {showConfetti && <Confetti trigger={true} />}

      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-glow-rose">
          <span>🎯</span> Khắc Phục Lỗ Hổng Kiến Thức
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-star tracking-tight mb-4">
          Sổ Tay{" "}
          <span className="bg-gradient-to-r from-rose-400 via-amber-400 to-cyan-400 bg-clip-text text-transparent">
            Ôn Luyện Câu Hay Sai & Bẫy Đề Thi
          </span>
        </h1>
        <p className="text-star-soft max-w-2xl mx-auto text-sm sm:text-base">
          Tập hợp các câu hỏi em từng làm sai trong quá trình luyện tập và tuyển tập {DEFAULT_REVIEW_QUESTIONS.length} bẫy lý thuyết kinh điển của 9 chương Toán 10. Hãy làm lại thật chuẩn để không bao giờ mất điểm đáng tiếc!
        </p>
      </div>

      {/* Overview Progress Card */}
      <div className="bg-void-card/90 border border-void-border rounded-3xl p-6 shadow-card backdrop-blur-xl mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-void-subtle border border-void-border font-display text-xl font-bold text-cyan-glow">
            {progressPercent}%
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-star">
              Tiến độ khắc phục sai sót
            </h3>
            <p className="text-xs text-star-soft">
              Đã làm đúng <strong>{completedCount}</strong> / {questions.length} câu hỏi thử thách
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleClearHistory}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-void-subtle border border-void-border text-star-soft hover:text-rose-glow hover:border-rose/40 transition"
          >
            Làm lại từ đầu
          </button>
          <Link
            href="/thi-thu"
            onClick={() => playClick()}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan to-cyan-deep text-white shadow-glow-cyan hover:opacity-95 transition"
          >
            Vào Kiểm Tra ⏱️
          </Link>
        </div>
      </div>

      {/* Question List */}
      <div className="space-y-6">
        {questions.map((q, qIdx) => {
          const selectedOpt = selectedAnswers[q.id];
          const isFixed = fixedQuestions.has(q.id);
          const isRevealed = showExplanation[q.id];

          return (
            <div
              key={q.id}
              className={`rounded-3xl border p-5 sm:p-7 transition-all duration-300 ${
                isFixed
                  ? "bg-void-card/95 border-emerald/40 shadow-glow-emerald"
                  : "bg-void-card/85 border-void-border shadow-card hover:border-cyan/30"
              }`}
            >
              {/* Question Meta */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-void-subtle border border-void-border font-mono text-xs font-bold text-cyan-glow">
                    {qIdx + 1}
                  </span>
                  <span className="text-xs font-mono text-star-mute uppercase">
                    {q.source}
                  </span>
                </div>
                {isFixed && (
                  <span className="px-2.5 py-1 rounded-full bg-emerald/20 text-emerald-glow border border-emerald/30 text-[11px] font-bold flex items-center gap-1">
                    ✓ Đã sửa đúng
                  </span>
                )}
              </div>

              {/* Question Text */}
              <div className="text-sm sm:text-base font-medium text-star leading-relaxed mb-5">
                <MathText content={q.question} />
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {q.options.map((opt, optIdx) => {
                  const isChosen = selectedOpt === optIdx;
                  const isCorrectAnswer = optIdx === q.correctAnswer;

                  let btnStyle = "bg-void-subtle border-void-border text-star-soft hover:border-cyan/40 hover:text-star";
                  if (isRevealed) {
                    if (isCorrectAnswer) {
                      btnStyle = "bg-emerald/20 border-emerald text-emerald-glow font-bold shadow-glow-emerald";
                    } else if (isChosen) {
                      btnStyle = "bg-rose/20 border-rose text-rose-glow font-bold shadow-glow-rose";
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={isFixed}
                      onClick={() => handleSelectOption(q.id, optIdx, q.correctAnswer)}
                      className={`flex items-start gap-3 rounded-2xl border-2 p-3.5 text-left text-xs sm:text-sm transition-all duration-200 ${btnStyle}`}
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-void-card font-mono text-xs font-bold text-star-soft">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="flex-1 pt-0.5 leading-relaxed">
                        <MathText content={opt} />
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {isRevealed && (
                <div className="mt-4 p-4 rounded-2xl bg-cyan/10 border border-cyan/25 text-xs sm:text-sm space-y-1.5 animate-fade-in-up">
                  <p className="font-bold text-cyan-glow flex items-center gap-1.5">
                    <span>💡</span>
                    <span>Giải thích chi tiết & Điểm bẫy cần tránh:</span>
                  </p>
                  <div className="text-star-soft leading-relaxed">
                    <MathText content={q.explanation} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
