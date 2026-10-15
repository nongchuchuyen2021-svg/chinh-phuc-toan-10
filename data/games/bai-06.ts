import type { LessonGame, SortGame, MatchGame } from "@/lib/types";

// Game 1: Máy Chọn Định Lí & Công Thức: Định lí Côsin vs Định lí Sin
const sortGame: SortGame = {
  kind: "sort",
  id: "dau-truong-he-thuc-luong",
  title: "Đấu Trường: Định lí Côsin hay Định lí Sin?",
  emoji: "⚖️",
  instructions:
    "Phân loại xem tình huống bài toán dưới đây nên sử dụng ĐỊNH LÍ CÔSIN hay ĐỊNH LÍ SIN để giải quyết nhanh nhất.",
  matchLabel: "Dùng ĐỊNH LÍ CÔSIN",
  matchEmoji: "📐",
  noMatchLabel: "Dùng ĐỊNH LÍ SIN",
  noMatchEmoji: "🔵",
  items: [
    {
      id: "htl-1",
      emoji: "1️⃣",
      label: "Biết hai cạnh $b = 6, c = 8$ và góc kẹp giữa $\\widehat{A} = 60^\\circ$, tính cạnh $a$.",
      isMatch: true,
      explain: "Biết 2 cạnh và góc xen giữa (C-G-C) là dấu hiệu kinh điển của định lí Côsin: $a^2 = b^2 + c^2 - 2bc\\cos A$.",
    },
    {
      id: "htl-2",
      emoji: "2️⃣",
      label: "Biết cạnh $a = 10$, góc đối diện $\\widehat{A} = 45^\\circ$, tính bán kính ngoại tiếp $R$.",
      isMatch: false,
      explain: "Liên hệ trực tiếp giữa cạnh đối diện và bán kính ngoại tiếp $R$ là định lí Sin: $2R = \\frac{a}{\\sin A}$.",
    },
    {
      id: "htl-3",
      emoji: "3️⃣",
      label: "Biết độ dài ba cạnh $a = 7, b = 8, c = 5$, tính góc $\\widehat{A}$.",
      isMatch: true,
      explain: "Biết cả 3 cạnh (C-C-C) muốn tìm góc ta dùng hệ quả định lí Côsin: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$.",
    },
    {
      id: "htl-4",
      emoji: "4️⃣",
      label: "Biết cạnh $a = 12$, góc $\\widehat{B} = 45^\\circ$ và $\\widehat{C} = 75^\\circ$, tính cạnh $b$.",
      isMatch: false,
      explain: "Biết 1 cạnh và 2 góc (G-C-G), tính $\\widehat{A} = 60^\\circ$ rồi dùng định lí Sin tính cạnh $b = \\frac{a\\sin B}{\\sin A}$.",
    },
    {
      id: "htl-5",
      emoji: "5️⃣",
      label: "Biết hai cạnh $a = 4, c = 6$ và góc tù xen giữa $\\widehat{B} = 120^\\circ$, tính cạnh $b$.",
      isMatch: true,
      explain: "Biết 2 cạnh và góc xen giữa (kể cả góc tù), áp dụng định lí Côsin: $b^2 = a^2 + c^2 - 2ac\\cos B$.",
    },
    {
      id: "htl-6",
      emoji: "6️⃣",
      label: "Biết bán kính ngoại tiếp $R = 10$ và góc $\\widehat{A} = 30^\\circ$, tính cạnh $a$.",
      isMatch: false,
      explain: "Định lí Sin cho ta công thức tính cạnh tức thì: $a = 2R\\sin A = 2(10)\\sin 30^\\circ = 10$.",
    },
    {
      id: "htl-7",
      emoji: "7️⃣",
      label: "Tính độ dài đường trung tuyến $m_a$ kẻ từ đỉnh $A$ khi biết 3 cạnh $a, b, c$.",
      isMatch: true,
      explain: "Công thức đường trung tuyến $m_a^2 = \\frac{2(b^2+c^2)-a^2}{4}$ được chứng minh trực tiếp từ định lí Côsin.",
    },
    {
      id: "htl-8",
      emoji: "8️⃣",
      label: "Biết cặp cạnh $a$ và góc đối $\\widehat{A}$, cần tính $\\sin B$ khi biết thêm cạnh $b$.",
      isMatch: false,
      explain: "Khi có một cặp cạnh - góc đối diện hoàn chỉnh, tính các góc khác qua tỉ số định lí Sin: $\\sin B = \\frac{b\\sin A}{a}$.",
    },
  ],
};

// Game 2: Ghép đôi Hệ thức Lượng & Công thức Diện tích
const matchGame: MatchGame = {
  kind: "match",
  id: "ghep-doi-he-thuc-luong",
  title: "Ghép Đôi Hệ Thức Lượng & Công Thức Vàng",
  emoji: "🔗",
  instructions:
    "Ghép nối công thức toán học với tên gọi hoặc ý nghĩa hình học chuẩn xác tương ứng.",
  pairs: [
    {
      id: "p1",
      left: "$a^2 = b^2 + c^2 - 2bc\\cos A$",
      right: "Định lí Côsin",
      explain: "Định lí Côsin biểu diễn bình phương cạnh đối qua 2 cạnh kề và góc xen giữa.",
    },
    {
      id: "p2",
      left: "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = 2R$",
      right: "Định lí Sin",
      explain: "Định lí Sin liên hệ tỉ số cạnh với sin góc đối và đường kính ngoại tiếp $2R$.",
    },
    {
      id: "p3",
      left: "$S = \\sqrt{p(p-a)(p-b)(p-c)}$",
      right: "Công thức Heron",
      explain: "Công thức Heron tính diện tích thần tốc qua nửa chu vi $p$ và 3 cạnh.",
    },
    {
      id: "p4",
      left: "$R = \\frac{abc}{4S}$",
      right: "Bán kính ngoại tiếp R",
      explain: "Rút ra từ công thức diện tích $S = \\frac{abc}{4R}$.",
    },
    {
      id: "p5",
      left: "$r = \\frac{S}{p}$",
      right: "Bán kính nội tiếp r",
      explain: "Rút ra từ công thức diện tích tam giác $S = p \\cdot r$.",
    },
    {
      id: "p6",
      left: "$S = \\frac{1}{2}bc\\sin A$",
      right: "Diện tích qua góc xen giữa",
      explain: "Diện tích bằng nửa tích hai cạnh nhân sin của góc kẹp giữa.",
    },
  ],
};

const bai06Games: LessonGame[] = [sortGame, matchGame];

export default bai06Games;
