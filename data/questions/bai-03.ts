import type { Question } from "@/lib/types";

const bai03: Question[] = [
  {
    id: "b3-q1",
    q: "Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?",
    options: [
      "$2x^2 + 3y \\le 5$",
      "$3x - 4y > 7$",
      "$xy + 2x - 1 \\ge 0$",
      "$\\frac{2}{x} + 3y < 1$"
    ],
    answer: 1,
    explain: "Bất phương trình bậc nhất hai ẩn có dạng tổng quát là $ax + by < c$ (hoặc $\\le, >, \\ge$) với $a, b$ không đồng thời bằng 0, bậc của $x$ và $y$ đều là bậc 1. Do đó $3x - 4y > 7$ là BPT bậc nhất hai ẩn."
  },
  {
    id: "b3-q2",
    q: "Điểm nào sau đây thuộc miền nghiệm của bất phương trình $2x - y + 1 > 0$?",
    options: [
      "$(0; 2)$",
      "$(1; 1)$",
      "$(-1; 0)$",
      "$(0; 3)$"
    ],
    answer: 1,
    explain: "Thay toạ độ điểm $(1; 1)$ vào vế trái BPT: $2(1) - 1 + 1 = 2 > 0$ (thoả mãn). Vậy điểm $(1; 1)$ thuộc miền nghiệm."
  },
  {
    id: "b3-q3",
    q: "Miền nghiệm của bất phương trình $x + 2y \\le 4$ chứa điểm nào sau đây?",
    options: [
      "$(2; 3)$",
      "$(5; 0)$",
      "$(0; 0)$",
      "$(4; 1)$"
    ],
    answer: 2,
    explain: "Thay $(0; 0)$ vào BPT: $0 + 2(0) = 0 \\le 4$ (đúng). Vậy gốc toạ độ $O(0; 0)$ thuộc miền nghiệm."
  },
  {
    id: "b3-q4",
    q: "Đường thẳng $d: x - 2y = 2$ chia mặt phẳng toạ độ thành hai nửa mặt phẳng. Điểm $M(3; 1)$ nằm ở nửa mặt phẳng biểu diễn miền nghiệm của BPT nào sau đây?",
    options: [
      "$x - 2y > 2$",
      "$x - 2y < 2$",
      "$x - 2y \\ge 3$",
      "$x - 2y \\le 0$"
    ],
    answer: 1,
    explain: "Thay toạ độ $M(3; 1)$ vào biểu thức $x - 2y$: $3 - 2(1) = 1 < 2$. Do đó điểm $M$ thuộc miền nghiệm của BPT $x - 2y < 2$."
  },
  {
    id: "b3-q5",
    q: "Bác Năm dự định trồng lúa và ngô trên thửa ruộng có diện tích 8 sào ($8000\\text{ m}^2$). Gọi $x$ là số sào trồng lúa và $y$ là số sào trồng ngô ($x, y \\ge 0$). Bất phương trình thể hiện giới hạn diện tích là:",
    options: [
      "$x + y \\le 8$",
      "$x + y > 8$",
      "$x - y \\le 8$",
      "$xy \\le 8$"
    ],
    answer: 0,
    explain: "Tổng diện tích trồng lúa và ngô không vượt quá 8 sào nên ta có BPT: $x + y \\le 8$ với $x \\ge 0, y \\ge 0$."
  }
];

export default bai03;
