import type { LessonGame, SortGame, MatchGame } from "@/lib/types";

// ══════════════════════════════════════════════════════════════════════════════
// GAME 1: Đấu Trường Chiến Thuật: Định lí Côsin hay Định lí Sin?
// ══════════════════════════════════════════════════════════════════════════════
const sortGame: SortGame = {
  kind: "sort",
  id: "dau-truong-he-thuc-luong",
  title: "Đấu Trường Chiến Thuật: Côsin hay Sin?",
  emoji: "⚖️",
  instructions:
    "Đọc nhanh từng tình huống bài toán hình học và phân loại xem nên dùng ĐỊNH LÍ CÔSIN hay ĐỊNH LÍ SIN để tìm đáp án tối ưu nhất.",
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
      label: "Biết cạnh $a = 10$, góc đối diện $\\widehat{A} = 45^\\circ$, tính bán kính đường tròn ngoại tiếp $R$.",
      isMatch: false,
      explain: "Liên hệ trực tiếp giữa độ dài cạnh và bán kính ngoại tiếp $R$ là định lí Sin: $2R = \\frac{a}{\\sin A} \\implies R = \\frac{a}{2\\sin A}$.",
    },
    {
      id: "htl-3",
      emoji: "3️⃣",
      label: "Biết độ dài ba cạnh $a = 7, b = 8, c = 5$, tính số đo góc $\\widehat{A}$.",
      isMatch: true,
      explain: "Biết cả 3 cạnh (C-C-C) muốn tìm góc ta dùng hệ quả định lí Côsin: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$.",
    },
    {
      id: "htl-4",
      emoji: "4️⃣",
      label: "Biết cạnh $a = 12$, góc $\\widehat{B} = 45^\\circ$ và $\\widehat{C} = 75^\\circ$, tính độ dài cạnh $b$.",
      isMatch: false,
      explain: "Biết 1 cạnh và 2 góc (G-C-G), tính $\\widehat{A} = 180^\\circ - (45^\\circ + 75^\\circ) = 60^\\circ$ rồi dùng định lí Sin tính $b = \\frac{a\\sin B}{\\sin A}$.",
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
      label: "Biết bán kính ngoại tiếp $R = 10$ và góc $\\widehat{A} = 30^\\circ$, tính độ dài cạnh $a$.",
      isMatch: false,
      explain: "Định lí Sin cho ta công thức tính cạnh tức thì: $a = 2R\\sin A = 2(10)\\sin 30^\\circ = 10$.",
    },
    {
      id: "htl-7",
      emoji: "7️⃣",
      label: "Tính độ dài đường trung tuyến $m_a$ kẻ từ đỉnh $A$ khi biết độ dài 3 cạnh $a, b, c$.",
      isMatch: true,
      explain: "Công thức đường trung tuyến $m_a^2 = \\frac{2(b^2+c^2)-a^2}{4}$ được chứng minh trực tiếp từ định lí Côsin.",
    },
    {
      id: "htl-8",
      emoji: "8️⃣",
      label: "Hai trạm hải đăng quan sát một con tàu: biết khoảng cách 2 trạm và 2 góc nhìn tàu từ mỗi trạm.",
      isMatch: false,
      explain: "Biết 1 cạnh đáy và 2 góc kề của tam giác (G-C-G) $\\implies$ dùng Định lí Sin để tính khoảng cách từ mỗi trạm tới con tàu.",
    },
    {
      id: "htl-9",
      emoji: "9️⃣",
      label: "Đo khoảng cách giữa 2 điểm $A$ và $B$ qua hồ nước bằng cách chọn trạm $C$, đo $CA, CB$ và góc $\\widehat{ACB}$.",
      isMatch: true,
      explain: "Đây là bài toán C-G-C thực tế: biết 2 cạnh $CA, CB$ và góc xen giữa $\\widehat{C} \\implies$ dùng Định lí Côsin tính $AB$.",
    },
    {
      id: "htl-10",
      emoji: "🔟",
      label: "Biết tam giác có cạnh $a = 6$, góc $\\widehat{A} = 60^\\circ$ và cạnh $b = 6\\sqrt{2}$, tính góc $\\widehat{B}$.",
      isMatch: false,
      explain: "Có cặp cạnh - góc đối diện $(a, \\widehat{A})$ hoàn chỉnh, tính góc đối diện cạnh $b$ qua tỉ số định lí Sin: $\\sin B = \\frac{b\\sin A}{a}$.",
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// GAME 2: Ghép Đôi Hệ Thức Lượng & Công Thức Vàng
// ══════════════════════════════════════════════════════════════════════════════
const matchGame: MatchGame = {
  kind: "match",
  id: "ghep-doi-he-thuc-luong",
  title: "Ghép Đôi Hệ Thức Lượng & Công Thức Vàng",
  emoji: "🔗",
  leftLabel: "📐 Hệ thức toán học",
  rightLabel: "🎯 Tên gọi & Ứng dụng",
  instructions:
    "Ghép nối công thức toán học với tên gọi hoặc ý nghĩa hình học chuẩn xác tương ứng.",
  pairs: [
    {
      id: "p1",
      left: "$a^2 = b^2 + c^2 - 2bc\\cos A$",
      right: "Định lí Côsin (tính cạnh)",
      explain: "Định lí Côsin biểu diễn bình phương một cạnh qua 2 cạnh kề và góc xen giữa.",
    },
    {
      id: "p2",
      left: "$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$",
      right: "Hệ quả Côsin (tính góc)",
      explain: "Dùng để tính góc khi biết cả 3 cạnh của tam giác (C-C-C).",
    },
    {
      id: "p3",
      left: "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = 2R$",
      right: "Định lí Sin (tỉ số vàng)",
      explain: "Tỉ số giữa độ dài cạnh và sin góc đối luôn bằng đường kính ngoại tiếp $2R$.",
    },
    {
      id: "p4",
      left: "$S = \\sqrt{p(p-a)(p-b)(p-c)}$",
      right: "Công thức Heron (diện tích 3 cạnh)",
      explain: "Tính diện tích thần tốc qua nửa chu vi $p = (a+b+c)/2$ và độ dài 3 cạnh.",
    },
    {
      id: "p5",
      left: "$R = \\frac{abc}{4S}$",
      right: "Bán kính ngoại tiếp R",
      explain: "Rút ra từ công thức diện tích $S = \\frac{abc}{4R}$.",
    },
    {
      id: "p6",
      left: "$r = \\frac{S}{p}$",
      right: "Bán kính nội tiếp r",
      explain: "Rút ra từ công thức diện tích tam giác $S = p \\cdot r$ với $p$ là nửa chu vi.",
    },
    {
      id: "p7",
      left: "$m_a^2 = \\frac{2(b^2+c^2)-a^2}{4}$",
      right: "Đường trung tuyến $m_a$",
      explain: "Công thức tính độ dài đường trung tuyến kẻ từ đỉnh $A$ xuống cạnh $BC$.",
    },
    {
      id: "p8",
      left: "$S = \\frac{a^2\\sqrt{3}}{4}$",
      right: "Diện tích Tam giác đều cạnh a",
      explain: "Công thức tính nhanh diện tích tam giác đều cạnh $a$ (chiều cao $h = \\frac{a\\sqrt{3}}{2}$).",
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// GAME 3: Chiếc Hộp Thần Kì: Nhận Dạng Tam Giác Nhọn hay Tam Giác Tù?
// Dựa vào định lí Côsin: với a là cạnh lớn nhất, so sánh a^2 với b^2 + c^2
// ══════════════════════════════════════════════════════════════════════════════
const judgeGame: SortGame = {
  kind: "sort",
  id: "nhan-dang-tam-giac",
  title: "Máy Quét: Tam Giác Nhọn hay Tam Giác Tù?",
  emoji: "🔍",
  instructions:
    "Dựa vào độ dài ba cạnh (hoặc số đo góc), hãy quét nhanh xem tam giác sau đây là TAM GIÁC NHỌN (tất cả các góc nhọn) hay TAM GIÁC TÙ (có 1 góc tù).",
  matchLabel: "Tam giác NHỌN (Cả 3 góc < 90°)",
  matchEmoji: "🔷",
  noMatchLabel: "Tam giác TÙ (Có 1 góc > 90°)",
  noMatchEmoji: "🔶",
  items: [
    {
      id: "jg-1",
      emoji: "📐",
      label: "Tam giác có 3 cạnh: $a = 7, b = 8, c = 9$",
      isMatch: true,
      explain: "Cạnh lớn nhất $c = 9$: $c^2 = 81$. Tổng bình phương 2 cạnh còn lại: $a^2 + b^2 = 49 + 64 = 113 > 81$. Do $a^2 + b^2 > c^2 \\implies \\cos C > 0 \\implies$ góc lớn nhất là góc nhọn. Vậy tam giác NHỌN.",
    },
    {
      id: "jg-2",
      emoji: "⚠️",
      label: "Tam giác có 3 cạnh: $a = 3, b = 4, c = 6$",
      isMatch: false,
      explain: "Cạnh lớn nhất $c = 6$: $c^2 = 36$. Tổng hai cạnh kia: $a^2 + b^2 = 9 + 16 = 25 < 36$. Do $a^2 + b^2 < c^2 \\implies \\cos C < 0 \\implies$ góc $\\widehat{C}$ là GÓC TÙ!",
    },
    {
      id: "jg-3",
      emoji: "🌟",
      label: "Tam giác có 3 cạnh: $a = 13, b = 14, c = 15$",
      isMatch: true,
      explain: "Cạnh lớn nhất $c = 15$: $15^2 = 225$. Tổng hai cạnh kia: $13^2 + 14^2 = 169 + 196 = 365 > 225 \\implies \\cos C > 0 \\implies$ tam giác NHỌN.",
    },
    {
      id: "jg-4",
      emoji: "🔥",
      label: "Tam giác có 3 cạnh: $a = 5, b = 7, c = 11$",
      isMatch: false,
      explain: "Cạnh lớn nhất $c = 11$: $11^2 = 121$. Tổng hai cạnh kia: $5^2 + 7^2 = 25 + 49 = 74 < 121 \\implies \\cos C < 0 \\implies$ góc $\\widehat{C}$ là GÓC TÙ!",
    },
    {
      id: "jg-5",
      emoji: "💎",
      label: "Tam giác có 3 cạnh: $a = 6, b = 8, c = 9$",
      isMatch: true,
      explain: "Cạnh lớn nhất $c = 9$: $9^2 = 81$. Hai cạnh kia: $6^2 + 8^2 = 36 + 64 = 100 > 81 \\implies$ tam giác NHỌN.",
    },
    {
      id: "jg-6",
      emoji: "🎯",
      label: "Tam giác có 3 cạnh: $a = 2, b = 3, c = 4$",
      isMatch: false,
      explain: "Cạnh lớn nhất $c = 4$: $4^2 = 16$. Hai cạnh kia: $2^2 + 3^2 = 4 + 9 = 13 < 16 \\implies \\cos C < 0 \\implies$ tam giác TÙ!",
    },
    {
      id: "jg-7",
      emoji: "⭐",
      label: "Tam giác có hai góc $\\widehat{A} = 40^\\circ$ và $\\widehat{B} = 35^\\circ$",
      isMatch: false,
      explain: "Góc thứ ba $\\widehat{C} = 180^\\circ - (40^\\circ + 35^\\circ) = 105^\\circ > 90^\\circ \\implies$ góc $\\widehat{C}$ là GÓC TÙ!",
    },
    {
      id: "jg-8",
      emoji: "🏆",
      label: "Tam giác đều cạnh $a = 10$",
      isMatch: true,
      explain: "Tam giác đều có cả ba góc bằng nhau và bằng $60^\\circ < 90^\\circ \\implies$ tam giác NHỌN.",
    },
  ],
};

const bai06Games: LessonGame[] = [sortGame, matchGame, judgeGame];

export default bai06Games;
