import type { LessonGame, SortGame, MatchGame } from "@/lib/types";

// Game 1: Máy dò Dấu Lượng Giác (Phân loại Dương hay Âm)
const sortGame: SortGame = {
  kind: "sort",
  id: "may-do-dau-luong-giac",
  title: "Đấu trường Dấu Lượng Giác",
  emoji: "🧭",
  instructions:
    "Phân loại nhanh xem giá trị lượng giác sau đây mang DẤU DƯƠNG (> 0) hay DẤU ÂM (< 0).",
  matchLabel: "Mang dấu DƯƠNG (+)",
  matchEmoji: "➕",
  noMatchLabel: "Mang dấu ÂM (-)",
  noMatchEmoji: "➖",
  items: [
    {
      id: "trig-1",
      emoji: "📈",
      label: "$\\sin 150^\\circ$",
      isMatch: true,
      explain: "Góc $150^\\circ$ là góc tù nhưng sin vẫn dương: $\\sin 150^\\circ = \\frac{1}{2} > 0$. Trên $[0^\\circ; 180^\\circ]$, sin không âm; tại hai đầu mút $\\sin 0^\\circ = \\sin 180^\\circ = 0$.",
    },
    {
      id: "trig-2",
      emoji: "📉",
      label: "$\\cos 135^\\circ$",
      isMatch: false,
      explain: "Góc $135^\\circ$ là góc tù nên côsin mang dấu âm: $\\cos 135^\\circ = -\\frac{\\sqrt{2}}{2} < 0$.",
    },
    {
      id: "trig-3",
      emoji: "📐",
      label: "$\\tan 120^\\circ$",
      isMatch: false,
      explain: "Góc $120^\\circ$ là góc tù nên tang mang dấu âm: $\\tan 120^\\circ = -\\sqrt{3} < 0$.",
    },
    {
      id: "trig-4",
      emoji: "🌟",
      label: "$\\cos 45^\\circ$",
      isMatch: true,
      explain: "Góc $45^\\circ$ là góc nhọn nên tất cả các giá trị lượng giác đều dương: $\\cos 45^\\circ = \\frac{\\sqrt{2}}{2} > 0$.",
    },
    {
      id: "trig-5",
      emoji: "📊",
      label: "$\\cot 150^\\circ$",
      isMatch: false,
      explain: "Góc $150^\\circ$ là góc tù nên côtang mang dấu âm: $\\cot 150^\\circ = -\\sqrt{3} < 0$.",
    },
    {
      id: "trig-6",
      emoji: "🎯",
      label: "$\\sin 120^\\circ$",
      isMatch: true,
      explain: "Góc $120^\\circ$ có $\\sin 120^\\circ = \\frac{\\sqrt{3}}{2} > 0$.",
    },
    {
      id: "trig-7",
      emoji: "⛔",
      label: "$\\cos 180^\\circ$",
      isMatch: false,
      explain: "$\\cos 180^\\circ = -1 < 0$ (hoành độ mút cực trái của nửa đường tròn).",
    },
    {
      id: "trig-8",
      emoji: "⭐",
      label: "$\\tan 60^\\circ$",
      isMatch: true,
      explain: "Góc $60^\\circ$ nhọn nên $\\tan 60^\\circ = \\sqrt{3} > 0$.",
    },
  ],
};

// Game 2: Ghép đôi Thần tốc Giá trị Lượng giác & Góc Bù
const matchGame: MatchGame = {
  kind: "match",
  id: "ghep-doi-luong-giac",
  title: "Ghép đôi Lượng giác & Góc Bù",
  emoji: "🔗",
  leftLabel: "📌 Biểu thức lượng giác",
  rightLabel: "🔄 Giá trị tương ứng",
  instructions:
    "Ghép nối biểu thức lượng giác hoặc góc bù với kết quả chính xác tương ứng.",
  pairs: [
    {
      id: "p1",
      left: "$\\cos 120^\\circ$",
      right: "$-\\frac{1}{2}$",
      explain: "$\\cos 120^\\circ = -\\cos 60^\\circ = -\\frac{1}{2}$.",
    },
    {
      id: "p2",
      left: "$\\sin 150^\\circ$",
      right: "$\\frac{1}{2}$",
      explain: "$\\sin 150^\\circ = \\sin 30^\\circ = \\frac{1}{2}$.",
    },
    {
      id: "p3",
      left: "$\\tan 135^\\circ$",
      right: "$-1$",
      explain: "$\\tan 135^\\circ = -\\tan 45^\\circ = -1$.",
    },
    {
      id: "p4",
      left: "$\\sin(180^\\circ - \\alpha)$",
      right: "$\\sin \\alpha$",
      explain: "Hai góc bù nhau có sin bằng nhau.",
    },
    {
      id: "p5",
      left: "$\\cos(180^\\circ - \\alpha)$",
      right: "$-\\cos \\alpha$",
      explain: "Hai góc bù nhau có côsin đối dấu nhau.",
    },
    {
      id: "p6",
      left: "$\\sin^2 \\alpha + \\cos^2 \\alpha$",
      right: "$1$",
      explain: "Hệ thức Pythagore cơ bản của lượng giác luôn bằng 1.",
    },
  ],
};

const bai05Games: LessonGame[] = [sortGame, matchGame];

export default bai05Games;
