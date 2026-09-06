import type { MockExamQuestion } from "@/lib/types";

export const MOCK_EXAM_INFO = {
  title: "Đề thi thử Tốt nghiệp THPT — Môn Toán 10",
  subtitle: "Cấu trúc đề minh hoạ theo định dạng mới của Bộ Giáo dục và Đào tạo",
  durationMinutes: 45,
  totalQuestions: 22,
  maxScore: 10.0
};

export const MOCK_EXAM_QUESTIONS: MockExamQuestion[] = [
  // ─── PHẦN I: Trắc nghiệm 4 lựa chọn (12 câu, 0.25đ/câu) ─────────────────
  {
    id: "me-p1-1",
    part: 1,
    q: "Câu nào sau đây là một mệnh đề toán học?",
    options: [
      "Số 19 là một số nguyên tố.",
      "Bạn có thích học toán không?",
      "Hãy giải phương trình sau!",
      "Thời tiết hôm nay đẹp quá!"
    ],
    answer: 0,
    explain: "Mệnh đề toán học là một câu khẳng định có tính đúng hoặc sai rõ ràng."
  },
  {
    id: "me-p1-2",
    part: 1,
    q: "Cho hai tập hợp $A = \\{1; 2; 3; 4\\}$ và $B = \\{3; 4; 5; 6\\}$. Giao của hai tập hợp $A \\cap B$ là:",
    options: [
      "$\\{3; 4\\}$",
      "$\\{1; 2; 3; 4; 5; 6\\}$",
      "$\\{1; 2\\}$",
      "$\\{5; 6\\}$"
    ],
    answer: 0,
    explain: "Giao của hai tập hợp gồm các phần tử chung: $\\{3; 4\\}$."
  },
  {
    id: "me-p1-3",
    part: 1,
    q: "Điểm nào sau đây thuộc miền nghiệm của bất phương trình $2x - y + 1 > 0$?",
    options: [
      "$(1; 1)$",
      "$(0; 2)$",
      "$(-1; 0)$",
      "$(0; 3)$"
    ],
    answer: 0,
    explain: "Thay $(1; 1)$: $2(1) - 1 + 1 = 2 > 0$ (thoả mãn)."
  },
  {
    id: "me-p1-4",
    part: 1,
    q: "Giá trị của $\\cos 60^\\circ$ bằng:",
    options: [
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$\\frac{\\sqrt{2}}{2}$",
      "$1$"
    ],
    answer: 0,
    explain: "Theo bảng giá trị lượng giác góc đặc biệt: $\\cos 60^\\circ = \\frac{1}{2}$."
  },
  {
    id: "me-p1-5",
    part: 1,
    q: "Trong tam giác $ABC$, định lí côsin biểu diễn cạnh $a$ qua các cạnh $b, c$ và góc $A$ là:",
    options: [
      "$a^2 = b^2 + c^2 - 2bc \\cos A$",
      "$a^2 = b^2 + c^2 + 2bc \\cos A$",
      "$a^2 = b^2 + c^2 - 2bc \\sin A$",
      "$a^2 = b^2 + c^2 - bc \\cos A$"
    ],
    answer: 0,
    explain: "$a^2 = b^2 + c^2 - 2bc \\cos A$."
  },
  {
    id: "me-p1-6",
    part: 1,
    q: "Cho hình bình hành $ABCD$. Vectơ nào sau đây bằng vectơ $\\vec{AB}$?",
    options: [
      "$\\vec{DC}$",
      "$\\vec{CD}$",
      "$\\vec{BC}$",
      "$\\vec{AD}$"
    ],
    answer: 0,
    explain: "Hai vectơ có cùng hướng và cùng độ dài: $\\vec{AB} = \\vec{DC}$."
  },
  {
    id: "me-p1-7",
    part: 1,
    q: "Trong mặt phẳng toạ độ $Oxy$, cho $\\vec{a} = (1; 3)$ và $\\vec{b} = (-2; 4)$. Tích vô hướng $\\vec{a} \\cdot \\vec{b}$ bằng:",
    options: [
      "10",
      "14",
      "-10",
      "5"
    ],
    answer: 0,
    explain: "$\\vec{a} \\cdot \\vec{b} = 1(-2) + 3(4) = 10$."
  },
  {
    id: "me-p1-8",
    part: 1,
    q: "Cho mẫu số liệu điểm kiểm tra: 6, 7, 7, 8, 9, 9, 9, 10. Mốt của mẫu số liệu là:",
    options: [
      "9",
      "7",
      "8",
      "10"
    ],
    answer: 0,
    explain: "Số 9 có tần số xuất hiện nhiều nhất (3 lần)."
  },
  {
    id: "me-p1-9",
    part: 1,
    q: "Toạ độ đỉnh của parabol $y = x^2 - 4x + 3$ là:",
    options: [
      "$(2; -1)$",
      "$(2; 3)$",
      "$(-2; 15)$",
      "$(4; 3)$"
    ],
    answer: 0,
    explain: "$x_I = -\\frac{-4}{2} = 2; y_I = 2^2 - 4(2) + 3 = -1$."
  },
  {
    id: "me-p1-10",
    part: 1,
    q: "Đường thẳng đi qua $M(1; 2)$ có VTPT $\\vec{n} = (3; -2)$ có phương trình tổng quát là:",
    options: [
      "$3x - 2y + 1 = 0$",
      "$3x - 2y - 1 = 0$",
      "$2x + 3y - 8 = 0$",
      "$3x + 2y - 7 = 0$"
    ],
    answer: 0,
    explain: "$3(x - 1) - 2(y - 2) = 0 \\Leftrightarrow 3x - 2y + 1 = 0$."
  },
  {
    id: "me-p1-11",
    part: 1,
    q: "Số cách xếp 5 bạn học sinh thành một hàng dọc là:",
    options: [
      "$5! = 120$",
      "$5^5 = 3125$",
      "$A_5^1 = 5$",
      "$C_5^2 = 10$"
    ],
    answer: 0,
    explain: "Hoán vị của 5 phần tử: $P_5 = 5! = 120$."
  },
  {
    id: "me-p1-12",
    part: 1,
    q: "Gieo một con xúc xắc cân đối một lần. Xác suất xuất hiện mặt chẵn là:",
    options: [
      "$\\frac{1}{2}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{6}$",
      "$\\frac{2}{3}$"
    ],
    answer: 0,
    explain: "Mặt chẵn gồm $\\{2; 4; 6\\}$, xác suất $P = \\frac{3}{6} = \\frac{1}{2}$."
  },

  // ─── PHẦN II: Trắc nghiệm Đúng / Sai (4 câu, tối đa 1.0đ/câu) ─────────────
  {
    id: "me-p2-1",
    part: 2,
    q: "Cho hai tập hợp $A = [-3; 4)$ và $B = (0; 6]$.",
    statements: [
      {
        text: "Giao của hai tập hợp là $A \\cap B = (0; 4)$.",
        answer: true,
        explain: "Phần khoảng giao nhau của $[-3; 4)$ và $(0; 6]$ là $(0; 4)$."
      },
      {
        text: "Hợp của hai tập hợp là $A \\cup B = [-3; 6]$.",
        answer: true,
        explain: "Khoảng bao phủ từ -3 đến 6: $[-3; 6]$."
      },
      {
        text: "Hiệu $A \\setminus B = [-3; 0)$.",
        answer: false,
        explain: "$A \\setminus B = [-3; 0]$ vì 0 thuộc A nhưng không thuộc B."
      },
      {
        text: "Tập hợp $A$ có đúng 7 số nguyên.",
        answer: true,
        explain: "Số nguyên trong $[-3; 4)$ là: $-3, -2, -1, 0, 1, 2, 3$ (7 số)."
      }
    ],
    explain: "Các phép toán tập hợp trên trục số thực."
  },
  {
    id: "me-p2-2",
    part: 2,
    q: "Cho tam giác $ABC$ có $a = 7, b = 8, c = 5$.",
    statements: [
      {
        text: "Nửa chu vi của tam giác bằng $p = 10$.",
        answer: true,
        explain: "$p = (7 + 8 + 5)/2 = 10$."
      },
      {
        text: "Góc $A$ có $\\cos A = \\frac{1}{2}$ và $\\widehat{A} = 60^\\circ$.",
        answer: true,
        explain: "$\\cos A = (64 + 25 - 49)/(2 \\cdot 8 \\cdot 5) = 40/80 = 1/2$."
      },
      {
        text: "Diện tích tam giác bằng $10\\sqrt{3}$.",
        answer: true,
        explain: "$S = \\frac{1}{2} \\cdot 8 \\cdot 5 \\cdot \\sin 60^\\circ = 10\\sqrt{3}$."
      },
      {
        text: "Bán kính đường tròn nội tiếp $r = 2\\sqrt{3}$.",
        answer: false,
        explain: "$r = S/p = 10\\sqrt{3}/10 = \\sqrt{3}$."
      }
    ],
    explain: "Hệ thức lượng trong tam giác bất kì."
  },
  {
    id: "me-p2-3",
    part: 2,
    q: "Trong mặt phẳng toạ độ $Oxy$, cho ba điểm $A(1; 2), B(-2; 6), C(9; 8)$.",
    statements: [
      {
        text: "Vectơ $\\vec{AB} = (-3; 4)$ và độ dài đoạn thẳng $AB = 5$.",
        answer: true,
        explain: "$\\vec{AB} = (-3; 4) \\Rightarrow AB = \\sqrt{(-3)^2 + 4^2} = 5$."
      },
      {
        text: "Vectơ $\\vec{AC} = (8; 6)$.",
        answer: true,
        explain: "$\\vec{AC} = (9-1; 8-2) = (8; 6)$."
      },
      {
        text: "Tích vô hướng $\\vec{AB} \\cdot \\vec{AC} = 0$.",
        answer: true,
        explain: "$(-3)(8) + 4(6) = -24 + 24 = 0$."
      },
      {
        text: "Tam giác $ABC$ là tam giác nhọn.",
        answer: false,
        explain: "Tam giác $ABC$ vuông tại $A$ do $\\vec{AB} \\perp \\vec{AC}$."
      }
    ],
    explain: "Ứng dụng toạ độ Oxy và tích vô hướng."
  },
  {
    id: "me-p2-4",
    part: 2,
    q: "Cho hàm số bậc hai $y = x^2 - 4x + 3$.",
    statements: [
      {
        text: "Bề lõm của parabol quay lên trên do $a = 1 > 0$.",
        answer: true,
        explain: "Hệ số $a > 0$ bề lõm quay lên."
      },
      {
        text: "Đỉnh của parabol là $I(2; -1)$.",
        answer: true,
        explain: "$x_I = 2, y_I = -1$."
      },
      {
        text: "Hàm số đồng biến trên khoảng $(-\\infty; 2)$.",
        answer: false,
        explain: "Hàm số nghịch biến trên $(-\\infty; 2)$."
      },
      {
        text: "Giá trị nhỏ nhất của hàm số trên $\\mathbb{R}$ bằng $-1$.",
        answer: true,
        explain: "Giá trị nhỏ nhất đạt tại đỉnh $y_I = -1$."
      }
    ],
    explain: "Khảo sát sự biến thiên của hàm số bậc hai."
  },

  // ─── PHẦN III: Câu trắc nghiệm Trả lời ngắn (6 câu, 0.5đ/câu) ────────────
  {
    id: "me-p3-1",
    part: 3,
    q: "Tìm toạ độ giao điểm của đường thẳng biên $3x - 4y = 12$ với trục hoành $Ox$. (Nhập dưới dạng toạ độ, ví dụ: (4; 0))",
    answer: "(4; 0)",
    explain: "Cho $y = 0 \\Rightarrow 3x = 12 \\Rightarrow x = 4$. Toạ độ là $(4; 0)$."
  },
  {
    id: "me-p3-2",
    part: 3,
    q: "Cho tam giác $ABC$ có cạnh $a = 6$ và góc $\\widehat{A} = 30^\\circ$. Tính bán kính đường tròn ngoại tiếp $R$ của tam giác.",
    answer: "6",
    explain: "$\\frac{a}{\\sin A} = 2R \\Rightarrow 2R = \\frac{6}{1/2} = 12 \\Rightarrow R = 6$."
  },
  {
    id: "me-p3-3",
    part: 3,
    q: "Tính khoảng cách từ điểm $M(1; -2)$ đến đường thẳng $\\Delta: 3x - 4y + 4 = 0$.",
    answer: "3",
    explain: "$d(M, \\Delta) = \\frac{|3(1) - 4(-2) + 4|}{\\sqrt{3^2 + (-4)^2}} = \\frac{15}{5} = 3$."
  },
  {
    id: "me-p3-4",
    part: 3,
    q: "Cho parabol $y = x^2 - 4x + 3$. Tìm hoành độ đỉnh của parabol.",
    answer: "2",
    explain: "$x_I = -\\frac{-4}{2} = 2$."
  },
  {
    id: "me-p3-5",
    part: 3,
    q: "Có bao nhiêu cách chọn ra 3 học sinh từ một nhóm gồm 10 học sinh để phân công làm trực nhật?",
    answer: "120",
    explain: "$C_{10}^3 = \\frac{10!}{3!7!} = 120$."
  },
  {
    id: "me-p3-6",
    part: 3,
    q: "Gieo đồng thời hai con xúc xắc cân đối. Có bao nhiêu kết quả thuận lợi để tổng số chấm trên hai mặt bằng 7?",
    answer: "6",
    explain: "Các cặp $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$ có 6 cặp."
  }
];
