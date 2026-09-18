import type { LessonGame, MatchGame, SortGame } from "@/lib/types";

// ══════════════════════════════════════════════════════════════════════════════
// GAME 1: Máy Dò Điểm Miền Nghiệm (Sort Game 1)
// Phân loại điểm: "Thuộc Miền Nghiệm Của Hệ ✅" vs "Không Thuộc Miền Nghiệm ❌"
// ══════════════════════════════════════════════════════════════════════════════
const sortGamePoints: SortGame = {
  kind: "sort",
  id: "may-do-nghiem-he-bpt",
  title: "Máy Dò Điểm Miền Nghiệm",
  emoji: "🧭",
  instructions:
    "Xét hệ ràng buộc sản xuất: $\\begin{cases} x + y \\le 10 \\\\ 2x + y \\le 14 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$. Hãy phân loại xem điểm toạ độ có THUỘC MIỀN NGHIỆM của hệ hay không!",
  matchLabel: "Thuộc miền nghiệm",
  matchEmoji: "✅",
  noMatchLabel: "Không thuộc miền nghiệm",
  noMatchEmoji: "❌",
  items: [
    {
      id: "b4-s1",
      emoji: "📍",
      label: "$O(0; 0)$",
      isMatch: true,
      explain: "$0 + 0 = 0 \\le 10$, $2(0) + 0 = 0 \\le 14$, $0 \\ge 0$ (thoả mãn tất cả các điều kiện).",
    },
    {
      id: "b4-s2",
      emoji: "📍",
      label: "$M(2; 3)$",
      isMatch: true,
      explain: "$2 + 3 = 5 \\le 10$, $2(2) + 3 = 7 \\le 14$, $2, 3 \\ge 0$ (thoả mãn tất cả).",
    },
    {
      id: "b4-s3",
      emoji: "💥",
      label: "$N(4; 7)$",
      isMatch: false,
      explain: "Thay vào $x + y$: $4 + 7 = 11 > 10$ (vi phạm BPT thứ nhất).",
    },
    {
      id: "b4-s4",
      emoji: "📍",
      label: "$B(4; 6)$",
      isMatch: true,
      explain: "Điểm đỉnh giao: $4 + 6 = 10 \\le 10$ và $2(4) + 6 = 14 \\le 14$. Thoả mãn cả hai dấu bằng!",
    },
    {
      id: "b4-s5",
      emoji: "⚠️",
      label: "$P(6; 3)$",
      isMatch: false,
      explain: "Thay vào $2x + y$: $2(6) + 3 = 15 > 14$ (vi phạm BPT thứ hai).",
    },
    {
      id: "b4-s6",
      emoji: "🛑",
      label: "$Q(-1; 2)$",
      isMatch: false,
      explain: "Vi phạm điều kiện không âm $x \\ge 0$ (vì $x = -1 < 0$).",
    },
    {
      id: "b4-s7",
      emoji: "📍",
      label: "$A(0; 10)$",
      isMatch: true,
      explain: "$0 + 10 = 10 \\le 10$, $2(0) + 10 = 10 \\le 14$ (đỉnh nằm trên trục Oy thoả mãn).",
    },
    {
      id: "b4-s8",
      emoji: "📍",
      label: "$C(7; 0)$",
      isMatch: true,
      explain: "$7 + 0 = 7 \\le 10$, $2(7) + 0 = 14 \\le 14$ (đỉnh nằm trên trục Ox thoả mãn).",
    },
    {
      id: "b4-s9",
      emoji: "💥",
      label: "$D(8; 0)$",
      isMatch: false,
      explain: "Thay vào $2x + y$: $2(8) + 0 = 16 > 14$ (vi phạm BPT thứ hai).",
    },
    {
      id: "b4-s10",
      emoji: "🛑",
      label: "$E(3; -2)$",
      isMatch: false,
      explain: "Vi phạm điều kiện không âm $y \\ge 0$ (vì $y = -2 < 0$).",
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// GAME 2: Máy Dò Hệ BPT Bậc Nhất Hai Ẩn (Sort Game 2)
// Phân loại biểu thức: "Là Hệ BPT Bậc Nhất 2 Ẩn ✅" vs "Không Phải ❌"
// ══════════════════════════════════════════════════════════════════════════════
const sortGameSys: SortGame = {
  kind: "sort",
  id: "may-do-he-bpt-2-an",
  title: "Máy Dò Hệ BPT Bậc Nhất 2 Ẩn",
  emoji: "🔬",
  instructions:
    "Phân loại biểu thức: Hệ có đúng dạng gồm các BPT bậc nhất hai ẩn (không chứa $x^2, y^2, xy, \\sqrt{x}, 1/x$) hay không?",
  matchLabel: "Là hệ BPT bậc nhất 2 ẩn",
  matchEmoji: "✅",
  noMatchLabel: "Không phải",
  noMatchEmoji: "❌",
  items: [
    {
      id: "b4-sys1",
      emoji: "📐",
      label: "$\\begin{cases} 2x + 3y \\le 5 \\\\ x - y > 1 \\end{cases}$",
      isMatch: true,
      explain: "Chuẩn dạng hệ gồm hai bất phương trình bậc nhất hai ẩn.",
    },
    {
      id: "b4-sys2",
      emoji: "💥",
      label: "$\\begin{cases} x^2 + y \\le 4 \\\\ 2x - y > 0 \\end{cases}$",
      isMatch: false,
      explain: "Chứa $x^2$ là bậc hai, không phải bậc nhất.",
    },
    {
      id: "b4-sys3",
      emoji: "⚠️",
      label: "$\\begin{cases} xy + 2 \\le 0 \\\\ x - y > 1 \\end{cases}$",
      isMatch: false,
      explain: "Chứa tích $xy$ (bậc hai), không phải bậc nhất.",
    },
    {
      id: "b4-sys4",
      emoji: "📐",
      label: "$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + 2y \\le 10 \\end{cases}$",
      isMatch: true,
      explain: "Hệ gồm 3 bất phương trình bậc nhất hai ẩn (hệ ràng buộc kinh điển).",
    },
    {
      id: "b4-sys5",
      emoji: "🧮",
      label: "$\\begin{cases} \\frac{1}{x} + y \\le 2 \\\\ 3x - y > 0 \\end{cases}$",
      isMatch: false,
      explain: "Chứa ẩn $x$ dưới mẫu số, không phải đa thức bậc nhất.",
    },
    {
      id: "b4-sys6",
      emoji: "📐",
      label: "$\\begin{cases} 2x - y + 1 > 0 \\\\ x + 3y - 4 \\le 0 \\\\ 5x - 2y \\ge 2 \\end{cases}$",
      isMatch: true,
      explain: "Hệ gồm 3 bất phương trình bậc nhất hai ẩn hợp lệ.",
    },
    {
      id: "b4-sys7",
      emoji: "💥",
      label: "$\\begin{cases} x + \\sqrt{y} \\le 3 \\\\ 2x - y > 1 \\end{cases}$",
      isMatch: false,
      explain: "Chứa $\\sqrt{y}$ (bậc 1/2), không phải bậc nhất.",
    },
    {
      id: "b4-sys8",
      emoji: "📐",
      label: "$\\begin{cases} \\frac{x}{2} + \\frac{y}{3} \\le 1 \\\\ x - y > 0 \\end{cases}$",
      isMatch: true,
      explain: "Các hệ số hữu tỉ $\\frac{1}{2}, \\frac{1}{3}$, các biến $x, y$ đều bậc 1.",
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// GAME 3: Thợ Săn Đỉnh Đa Giác & Cực Trị (Match Game)
// Ghép đôi Hệ BPT / Bài toán với Đỉnh đa giác hoặc Giá trị tối ưu
// ══════════════════════════════════════════════════════════════════════════════
const matchGame: MatchGame = {
  kind: "match",
  id: "tho-san-dinh-da-giac",
  title: "Thợ Săn Đỉnh Đa Giác & Cực Trị",
  emoji: "🏹",
  instructions:
    "Ghép đôi Hệ bất phương trình / Bài toán tối ưu ở cột trái với Đặc trưng Đỉnh hoặc Giá trị lớn nhất $F_{\\max}$ tương ứng ở cột phải.",
  leftLabel: "📌 Hệ BPT / Bài toán tối ưu",
  rightLabel: "🎯 Đỉnh đa giác & Giá trị cực trị",
  pairs: [
    {
      id: "b4-m1",
      left: "$\\begin{cases} x \\ge 0, y \\ge 0 \\\\ x + y \\le 4 \\end{cases}$",
      right: "Tam giác vuông đỉnh $O(0;0), A(4;0), B(0;4)$ (Diện tích $S = 8$)",
      explain: "Giới hạn bởi hai trục toạ độ và đường $x + y = 4$, diện tích $S = \\frac{1}{2} \\cdot 4 \\cdot 4 = 8$.",
    },
    {
      id: "b4-m2",
      left: "$\\begin{cases} x + 2y = 8 \\\\ 2x + y = 7 \\end{cases}$",
      right: "Toạ độ đỉnh giao điểm là $B(2; 3)$",
      explain: "Giải hệ hai phương trình đường biên ta tìm được nghiệm duy nhất $x = 2, y = 3$.",
    },
    {
      id: "b4-m3",
      left: "Bài toán Máy điều hoà SGK: $F = 3,5x + 2y$",
      right: "$F_{\\max} = 230$ triệu đồng tại đỉnh $B(20; 80)$",
      explain: "Nhập 20 máy hai chiều và 80 máy một chiều cho lợi nhuận cao nhất đạt 230 triệu đồng.",
    },
    {
      id: "b4-m4",
      left: "Bài toán Máy tính xách tay: $F = 2,5x + 4y$",
      right: "$F_{\\max} = 850$ triệu đồng tại đỉnh $N(100; 150)$",
      explain: "Nhập 100 máy loại A và 150 máy loại B thu lợi nhuận lớn nhất 850 triệu đồng.",
    },
    {
      id: "b4-m5",
      left: "$F = 2x + 3y$ trên tam giác $O(0;0), A(150;0), B(0;150)$",
      right: "Giá trị lớn nhất $F_{\\max} = 450$ tại đỉnh $B(0; 150)$",
      explain: "Tại $O: F=0$; tại $A: F=300$; tại $B: F=2(0)+3(150)=450$ (lớn nhất).",
    },
    {
      id: "b4-m6",
      left: "Định lí cực trị trên miền đa giác",
      right: "GTLN và GTNN luôn đạt tại một trong các đỉnh của đa giác",
      explain: "Đây là nguyên lí cơ bản của quy hoạch tuyến tính hai biến.",
    },
  ],
};

const games: LessonGame[] = [sortGamePoints, sortGameSys, matchGame];

export default games;
