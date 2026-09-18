import type { CoordinateGame, LessonGame, MatchGame, SortGame } from "@/lib/types";

// ══════════════════════════════════════════════════════════════════════════════
// GAME 1: Xạ thủ Miền nghiệm Oxy (Coordinate Radar Shooter)
// Trực quan hoá hình học giải tích trên mặt phẳng toạ độ Oxy
// ══════════════════════════════════════════════════════════════════════════════
const coordinateGame: CoordinateGame = {
  kind: "coordinate",
  id: "xa-thu-mien-nghiem",
  title: "Xạ thủ Miền nghiệm Oxy",
  emoji: "🎯",
  instructions:
    "Quan sát bất phương trình và đường thẳng bờ $d$ trên hệ trục toạ độ $Oxy$. Hãy bắn trúng Điểm mục tiêu nằm TRONG MIỀN NGHIỆM!",
  questions: [
    {
      id: "coord-1",
      inequality: "$x + y - 2 \\le 0$",
      boundary: {
        a: 1,
        b: 1,
        c: -2,
        label: "d: x + y - 2 = 0",
        isStrict: false,
        solutionSide: -1,
      },
      prompt: "Chọn điểm có toạ độ thoả mãn $x + y - 2 \\le 0$:",
      points: [
        {
          id: "pt-1a",
          name: "A",
          x: 0,
          y: 0,
          isSolution: true,
          calcSteps: "Thay A(0; 0): $0 + 0 - 2 = -2 \\le 0$ (Đúng!)",
        },
        {
          id: "pt-1b",
          name: "B",
          x: 2,
          y: 2,
          isSolution: false,
          calcSteps: "Thay B(2; 2): $2 + 2 - 2 = 2 > 0$ (Không thoả mãn)",
        },
        {
          id: "pt-1c",
          name: "C",
          x: 3,
          y: 1,
          isSolution: false,
          calcSteps: "Thay C(3; 1): $3 + 1 - 2 = 2 > 0$ (Không thoả mãn)",
        },
        {
          id: "pt-1d",
          name: "D",
          x: 1,
          y: 3,
          isSolution: false,
          calcSteps: "Thay D(1; 3): $1 + 3 - 2 = 2 > 0$ (Không thoả mãn)",
        },
      ],
      explain:
        "Bất phương trình mang dấu '$\\le$' nên đường bờ $d$ vẽ bằng nét liền (kể cả bờ). Thay toạ độ gốc $O(0;0)$ vào vế trái ta được $-2 \\le 0$ (mệnh đề đúng), do đó nửa mặt phẳng chứa gốc toạ độ $O(0;0)$ là miền nghiệm.",
    },
    {
      id: "coord-2",
      inequality: "$2x - y + 1 > 0$",
      boundary: {
        a: 2,
        b: -1,
        c: 1,
        label: "d: 2x - y + 1 = 0",
        isStrict: true,
        solutionSide: 1,
      },
      prompt: "Chọn điểm có toạ độ thoả mãn $2x - y + 1 > 0$:",
      points: [
        {
          id: "pt-2a",
          name: "A",
          x: -2,
          y: 1,
          isSolution: false,
          calcSteps: "Thay A(-2; 1): $2(-2) - 1 + 1 = -4 < 0$ (Không thoả)",
        },
        {
          id: "pt-2b",
          name: "B",
          x: 1,
          y: 1,
          isSolution: true,
          calcSteps: "Thay B(1; 1): $2(1) - 1 + 1 = 2 > 0$ (Đúng!)",
        },
        {
          id: "pt-2c",
          name: "C",
          x: -1,
          y: 0,
          isSolution: false,
          calcSteps: "Thay C(-1; 0): $2(-1) - 0 + 1 = -1 < 0$ (Không thoả)",
        },
        {
          id: "pt-2d",
          name: "D",
          x: 0,
          y: 2,
          isSolution: false,
          calcSteps: "Thay D(0; 2): $2(0) - 2 + 1 = -1 < 0$ (Không thoả)",
        },
      ],
      explain:
        "BPT mang dấu ngặt '$>$' nên đường thẳng bờ $d$ được vẽ bằng NÉT ĐỨT (không kể bờ). Điểm $B(1; 1)$ cho giá trị $2 > 0$ nên nằm trong miền nghiệm.",
    },
    {
      id: "coord-3",
      inequality: "$x - 2y \\ge 0$",
      boundary: {
        a: 1,
        b: -2,
        c: 0,
        label: "d: x - 2y = 0",
        isStrict: false,
        solutionSide: 1,
      },
      prompt: "Đường bờ d đi qua gốc O(0; 0). Điểm nào sau đây thuộc miền nghiệm?",
      points: [
        {
          id: "pt-3a",
          name: "A",
          x: 0,
          y: 2,
          isSolution: false,
          calcSteps: "Thay A(0; 2): $0 - 2(2) = -4 < 0$ (Không thoả)",
        },
        {
          id: "pt-3b",
          name: "B",
          x: -2,
          y: 1,
          isSolution: false,
          calcSteps: "Thay B(-2; 1): $-2 - 2(1) = -4 < 0$ (Không thoả)",
        },
        {
          id: "pt-3c",
          name: "C",
          x: 2,
          y: 1,
          isSolution: true,
          calcSteps: "Thay C(2; 1): $2 - 2(1) = 0 \\ge 0$ (Đúng! Nằm trên bờ d)",
        },
        {
          id: "pt-3d",
          name: "D",
          x: 1,
          y: 2,
          isSolution: false,
          calcSteps: "Thay D(1; 2): $1 - 2(2) = -3 < 0$ (Không thoả)",
        },
      ],
      explain:
        "Vì đường bờ $d: x - 2y = 0$ đi qua gốc $O(0;0)$, ta không thể dùng $O$ làm điểm thử mà chọn điểm khác như $M(1;0) \\Rightarrow 1 - 0 = 1 \\ge 0$. Đặc biệt, vì có dấu '$\\ge$' nên điểm $C(2; 1)$ nằm ngay trên bờ $d$ vẫn là nghiệm hợp lệ!",
    },
    {
      id: "coord-4",
      inequality: "$-x + 2y - 4 < 0$",
      boundary: {
        a: -1,
        b: 2,
        c: -4,
        label: "d: -x + 2y - 4 = 0",
        isStrict: true,
        solutionSide: -1,
      },
      prompt: "Chọn điểm có toạ độ thoả mãn $-x + 2y - 4 < 0$:",
      points: [
        {
          id: "pt-4a",
          name: "A",
          x: 0,
          y: 0,
          isSolution: true,
          calcSteps: "Thay A(0; 0): $-0 + 2(0) - 4 = -4 < 0$ (Đúng!)",
        },
        {
          id: "pt-4b",
          name: "B",
          x: -2,
          y: 3,
          isSolution: false,
          calcSteps: "Thay B(-2; 3): $-(-2) + 2(3) - 4 = 4 > 0$ (Không thoả)",
        },
        {
          id: "pt-4c",
          name: "C",
          x: 0,
          y: 3,
          isSolution: false,
          calcSteps: "Thay C(0; 3): $-0 + 2(3) - 4 = 2 > 0$ (Không thoả)",
        },
        {
          id: "pt-4d",
          name: "D",
          x: 2,
          y: 4,
          isSolution: false,
          calcSteps: "Thay D(2; 4): $-2 + 2(4) - 4 = 2 > 0$ (Không thoả)",
        },
      ],
      explain:
        "Thay gốc toạ độ $O(0; 0)$ vào vế trái ta được $-4 < 0$ (thoả mãn). Do đó nửa mặt phẳng chứa gốc toạ độ (bờ nét đứt) chính là miền nghiệm.",
    },
    {
      id: "coord-5",
      inequality: "$3x + 2y + 6 \\ge 0$",
      boundary: {
        a: 3,
        b: 2,
        c: 6,
        label: "d: 3x + 2y + 6 = 0",
        isStrict: false,
        solutionSide: 1,
      },
      prompt: "Chọn điểm có toạ độ thoả mãn $3x + 2y + 6 \\ge 0$:",
      points: [
        {
          id: "pt-5a",
          name: "A",
          x: -3,
          y: 0,
          isSolution: false,
          calcSteps: "Thay A(-3; 0): $3(-3) + 2(0) + 6 = -3 < 0$ (Không thoả)",
        },
        {
          id: "pt-5b",
          name: "B",
          x: -1,
          y: 0,
          isSolution: true,
          calcSteps: "Thay B(-1; 0): $3(-1) + 2(0) + 6 = 3 \\ge 0$ (Đúng!)",
        },
        {
          id: "pt-5c",
          name: "C",
          x: -4,
          y: 1,
          isSolution: false,
          calcSteps: "Thay C(-4; 1): $3(-4) + 2(1) + 6 = -4 < 0$ (Không thoả)",
        },
        {
          id: "pt-5d",
          name: "D",
          x: -2,
          y: -2,
          isSolution: false,
          calcSteps: "Thay D(-2; -2): $3(-2) + 2(-2) + 6 = -4 < 0$ (Không thoả)",
        },
      ],
      explain:
        "Gốc $O(0; 0)$ cho $6 \\ge 0$ nên miền nghiệm là nửa mặt phẳng chứa $O$. Điểm $B(-1; 0)$ nằm trong nửa mặt phẳng này và thoả mãn biểu thức $\\ge 0$.",
    },
    {
      id: "coord-6",
      inequality: "$x - y + 1 \\le 0$",
      boundary: {
        a: 1,
        b: -1,
        c: 1,
        label: "d: x - y + 1 = 0",
        isStrict: false,
        solutionSide: -1,
      },
      prompt: "Chọn điểm có toạ độ thoả mãn $x - y + 1 \\le 0$:",
      points: [
        {
          id: "pt-6a",
          name: "A",
          x: 0,
          y: 0,
          isSolution: false,
          calcSteps: "Thay A(0; 0): $0 - 0 + 1 = 1 > 0$ (Bẫy: O không thuộc miền nghiệm)",
        },
        {
          id: "pt-6b",
          name: "B",
          x: 2,
          y: 1,
          isSolution: false,
          calcSteps: "Thay B(2; 1): $2 - 1 + 1 = 2 > 0$ (Không thoả)",
        },
        {
          id: "pt-6c",
          name: "C",
          x: -1,
          y: 2,
          isSolution: true,
          calcSteps: "Thay C(-1; 2): $-1 - 2 + 1 = -2 \\le 0$ (Đúng!)",
        },
        {
          id: "pt-6d",
          name: "D",
          x: 1,
          y: 0,
          isSolution: false,
          calcSteps: "Thay D(1; 0): $1 - 0 + 1 = 2 > 0$ (Không thoả)",
        },
      ],
      explain:
        "Cạm bẫy: Nhiều bạn cứ quen tay nghĩ gốc $O(0;0)$ luôn thuộc miền nghiệm. Ở câu này, thay $O(0;0) \\to 1 \\le 0$ (vô lý), do đó miền nghiệm là nửa mặt phẳng KHÔNG chứa gốc $O$. Điểm $C(-1; 2)$ nằm ở nửa mặt phẳng đúng.",
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// GAME 2: Máy dò Bất phương trình Bậc nhất hai ẩn (Sort Game)
// Phân loại thẻ: "Là BPT bậc nhất hai ẩn ✅" vs "Không phải ❌"
// ══════════════════════════════════════════════════════════════════════════════
const sortGame: SortGame = {
  kind: "sort",
  id: "may-do-bpt-2-an",
  title: "Máy dò BPT Bậc Nhất Hai Ẩn",
  emoji: "🧭",
  instructions:
    "Vuốt thẻ (hoặc bấm nút) để phân loại: Biểu thức có đúng dạng chuẩn $ax + by < c$ (hoặc $\\le, >, \\ge$) với $a^2 + b^2 \\ne 0$ hay không?",
  matchLabel: "Là BPT bậc nhất 2 ẩn",
  matchEmoji: "✅",
  noMatchLabel: "Không phải",
  noMatchEmoji: "❌",
  items: [
    {
      id: "b3-s1",
      emoji: "📐",
      label: "$2x + 3y \\le 5$",
      isMatch: true,
      explain: "Chuẩn dạng $ax + by \\le c$ với $a = 2, b = 3, c = 5$. Bậc của cả $x$ và $y$ đều là bậc 1.",
    },
    {
      id: "b3-s2",
      emoji: "💥",
      label: "$x^2 + 2y > 0$",
      isMatch: false,
      explain: "Không phải, vì chứa $x^2$ là bậc hai.",
    },
    {
      id: "b3-s3",
      emoji: "📏",
      label: "$3x - 4y + 1 = 0$",
      isMatch: false,
      explain: "Đây là PHƯƠNG TRÌNH đường thẳng, mang dấu '=' chứ không mang dấu bất đẳng thức ($<, \\le, >, \\ge$).",
    },
    {
      id: "b3-s4",
      emoji: "⚠️",
      label: "$xy + 2x - 3 \\ge 0$",
      isMatch: false,
      explain: "Bẫy: Chứa tích $xy$ có bậc là $1 + 1 = 2$ (bậc hai), không phải bậc nhất.",
    },
    {
      id: "b3-s5",
      emoji: "⚡",
      label: "$2x - 5y > 10$",
      isMatch: true,
      explain: "Bất phương trình bậc nhất hai ẩn với $a = 2, b = -5, c = 10$.",
    },
    {
      id: "b3-s6",
      emoji: "➗",
      label: "$\\frac{3}{x} + 2y < 1$",
      isMatch: false,
      explain: "Không phải vì ẩn $x$ nằm ở mẫu thức (bậc $-1$).",
    },
    {
      id: "b3-s7",
      emoji: "🎯",
      label: "$y \\ge 3$",
      isMatch: true,
      explain: "Là BPT bậc nhất hai ẩn dạng đặc biệt: $0x + 1y \\ge 3$ (với $a = 0, b = 1 \\ne 0$, thỏa mãn $a^2 + b^2 \\ne 0$).",
    },
    {
      id: "b3-s8",
      emoji: "🔢",
      label: "$x - 4 \\le 0$",
      isMatch: true,
      explain: "Dạng $1x + 0y \\le 4$ với $a = 1, b = 0 \\ne 0$. Trong mặt phẳng $Oxy$, đây là miền nghiệm nửa mặt phẳng bờ $x = 4$.",
    },
    {
      id: "b3-s9",
      emoji: "🌐",
      label: "$x + y + z > 1$",
      isMatch: false,
      explain: "Không phải vì có 3 ẩn ($x, y, z$), không phải hai ẩn.",
    },
    {
      id: "b3-s10",
      emoji: "✨",
      label: "$2(x - 1) + 3(y + 2) < 4$",
      isMatch: true,
      explain: "Rút gọn thành $2x + 3y + 4 < 0$, đúng chuẩn bậc nhất hai ẩn.",
    },
    {
      id: "b3-s11",
      emoji: "🧮",
      label: "$\\sqrt{x} + 2y \\le 4$",
      isMatch: false,
      explain: "Không phải vì ẩn $x$ nằm dưới dấu căn bậc hai (bậc $1/2$).",
    },
    {
      id: "b3-s12",
      emoji: "🕳️",
      label: "$0x + 0y > 5$",
      isMatch: false,
      explain: "Không phải vì cả $a = 0$ và $b = 0$, vi phạm điều kiện tiên quyết $a^2 + b^2 \\ne 0$.",
    },
    {
      id: "b3-s13",
      emoji: "💡",
      label: "$\\frac{x}{2} - \\frac{y}{3} \\ge 1$",
      isMatch: true,
      explain: "Là BPT bậc nhất hai ẩn với hệ số hữu tỉ $a = \\frac{1}{2}, b = -\\frac{1}{3}$.",
    },
    {
      id: "b3-s14",
      emoji: "📦",
      label: "$\\begin{cases} x + y > 1 \\\\ 2x - y \\le 3 \\end{cases}$",
      isMatch: false,
      explain: "Đây là HỆ bất phương trình bậc nhất hai ẩn (nội dung Bài 4), không phải 1 bất phương trình đơn lẻ.",
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// GAME 3: Thợ săn Đường bờ & Điểm thử (Match Game)
// Ghép đôi Bất phương trình với Đặc trưng Hình học Giải tích của Miền nghiệm
// ══════════════════════════════════════════════════════════════════════════════
const matchGame: MatchGame = {
  kind: "match",
  id: "tho-san-duong-bo",
  title: "Thợ săn Đường bờ & Điểm thử",
  emoji: "🏹",
  instructions:
    "Ghép đôi Bất phương trình ở cột trái với Đặc trưng Hình học Giải tích chuẩn xác tương ứng ở cột phải.",
  leftLabel: "📌 Bất phương trình $ax + by \\le c$",
  rightLabel: "🗺️ Đặc trưng Hình học Miền nghiệm",
  pairs: [
    {
      id: "m-pair-1",
      left: "$2x - y + 4 > 0$",
      right: "Bờ $d$ nét đứt, miền nghiệm CHỨA gốc toạ độ $O(0; 0)$",
      explain: "Dấu ngặt '$>$' $\\to$ vẽ nét đứt; thay $O(0;0) \\to 4 > 0$ (đúng) $\\to$ miền nghiệm chứa gốc $O$.",
    },
    {
      id: "m-pair-2",
      left: "$x + 2y - 4 \\le 0$",
      right: "Bờ $d$ nét liền, miền nghiệm CHỨA gốc toạ độ $O(0; 0)$",
      explain: "Dấu '$\\le$' $\\to$ vẽ nét liền (kể cả bờ); thay $O(0;0) \\to -4 \\le 0$ (đúng) $\\to$ miền nghiệm chứa gốc $O$.",
    },
    {
      id: "m-pair-3",
      left: "$3x - y \\ge 0$",
      right: "Bờ $d$ nét liền ĐI QUA gốc $O(0; 0)$, chọn điểm thử $(1; 0)$",
      explain: "Vì hệ số tự do $c = 0$ nên bờ $d$ đi qua gốc toạ độ $O(0;0)$. Bắt buộc phải chọn điểm thử khác nằm ngoài bờ như $(1; 0)$.",
    },
    {
      id: "m-pair-4",
      left: "$x - y + 2 < 0$",
      right: "Bờ $d$ nét đứt, miền nghiệm KHÔNG CHỨA gốc toạ độ $O(0; 0)$",
      explain: "Thay $O(0;0) \\to 2 < 0$ (vô lý, sai) $\\to$ miền nghiệm là nửa mặt phẳng không chứa gốc toạ độ $O(0;0)$.",
    },
    {
      id: "m-pair-5",
      left: "$y \\le 3$",
      right: "Bờ $d$ là đường thẳng NẰM NGANG song song với trục $Ox$",
      explain: "Đường thẳng $y = 3$ vuông góc với trục tung $Oy$ tại điểm $(0; 3)$ và song song với trục hoành $Ox$.",
    },
    {
      id: "m-pair-6",
      left: "$x > -2$",
      right: "Bờ $d$ là đường thẳng ĐỨNG nét đứt song song với trục $Oy$",
      explain: "Đường thẳng $x = -2$ vuông góc với trục hoành $Ox$ tại điểm $(-2; 0)$ và song song với trục tung $Oy$, vẽ bằng nét đứt vì dấu '$>$'.",
    },
  ],
};

const games: LessonGame[] = [coordinateGame, sortGame, matchGame];

export default games;
