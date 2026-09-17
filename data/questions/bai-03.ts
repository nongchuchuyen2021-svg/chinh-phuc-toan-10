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
    explain: "Bất phương trình bậc nhất hai ẩn có dạng tổng quát là $ax + by < c$ (hoặc $\\le, >, \\ge$) với $a, b$ không đồng thời bằng 0, bậc của $x$ và $y$ đều là bậc 1. Do đó $3x - 4y > 7$ là bất phương trình bậc nhất hai ẩn."
  },
  {
    id: "b3-q2",
    q: "Cặp số $(x; y) = (2; -1)$ là nghiệm của bất phương trình nào sau đây?",
    options: [
      "$x + y - 3 > 0$",
      "$2x + 3y + 1 > 0$",
      "$x - 2y - 5 > 0$",
      "$3x + y - 7 \\ge 0$"
    ],
    answer: 1,
    explain: "Thay toạ độ $(x; y) = (2; -1)$ vào từng bất phương trình:\\n• $x + y - 3 = 2 - 1 - 3 = -2 < 0$ (loại).\\n• $2x + 3y + 1 = 2(2) + 3(-1) + 1 = 2 > 0$ (thoả mãn).\\n• $x - 2y - 5 = 2 - 2(-1) - 5 = -1 < 0$ (loại).\\n• $3x + y - 7 = 3(2) - 1 - 7 = -2 < 0$ (loại).\\nDo đó $(2; -1)$ là nghiệm của $2x + 3y + 1 > 0$."
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
    q: "Bác Năm dự định trồng lúa và ngô trên thửa ruộng có diện tích 8 sào ($8\\,000\\text{ m}^2$). Gọi $x$ là số sào trồng lúa và $y$ là số sào trồng ngô ($x, y \\ge 0$). Bất phương trình thể hiện giới hạn diện tích là:",
    options: [
      "$x + y \\le 8$",
      "$x + y > 8$",
      "$x - y \\le 8$",
      "$xy \\le 8$"
    ],
    answer: 0,
    explain: "Tổng diện tích trồng lúa và ngô không vượt quá 8 sào nên ta có bất phương trình: $x + y \\le 8$ với $x \\ge 0, y \\ge 0$."
  },
  {
    id: "b3-q6",
    q: "Trong mặt phẳng toạ độ $Oxy$, miền nghiệm của bất phương trình $2x - y + 4 > 0$ là nửa mặt phẳng bờ $d: 2x - y + 4 = 0$:",
    options: [
      "Chứa gốc toạ độ $O(0; 0)$, kể cả bờ $d$",
      "Chứa gốc toạ độ $O(0; 0)$, không kể bờ $d$",
      "Không chứa gốc toạ độ $O(0; 0)$, kể cả bờ $d$",
      "Không chứa gốc toạ độ $O(0; 0)$, không kể bờ $d$"
    ],
    answer: 1,
    explain: "Thay $O(0; 0)$ vào vế trái: $2(0) - 0 + 4 = 4 > 0$ (thỏa mãn). Bất phương trình mang dấu ngặt '$>$' (không có dấu bằng) nên đường thẳng bờ $d$ vẽ bằng nét đứt và không tính vào miền nghiệm. Vậy miền nghiệm chứa gốc $O(0; 0)$ và không kể bờ $d$."
  },
  {
    id: "b3-q7",
    q: "Điểm nào sau đây KHÔNG thuộc miền nghiệm của bất phương trình $-3x + y + 2 \\le 0$?",
    options: [
      "$(1; 1)$",
      "$(2; 1)$",
      "$(1; 0)$",
      "$(0; 1)$"
    ],
    answer: 3,
    explain: "Thay lần lượt các toạ độ vào vế trái $-3x + y + 2$:\\n• $(1; 1) \\to -3(1) + 1 + 2 = 0 \\le 0$ (thỏa mãn).\\n• $(2; 1) \\to -3(2) + 1 + 2 = -3 \\le 0$ (thỏa mãn).\\n• $(1; 0) \\to -3(1) + 0 + 2 = -1 \\le 0$ (thỏa mãn).\\n• $(0; 1) \\to -3(0) + 1 + 2 = 3 > 0$ (không thỏa mãn). Vậy điểm $(0; 1)$ không thuộc miền nghiệm."
  },
  {
    id: "b3-q8",
    q: "Cho bất phương trình $ax + by \\le c$ có miền nghiệm chứa gốc toạ độ $O(0; 0)$. Khẳng định nào sau đây chắc chắn đúng?",
    options: [
      "$c > 0$",
      "$c \\ge 0$",
      "$c < 0$",
      "$c \\le 0$"
    ],
    answer: 1,
    explain: "Vì $O(0; 0)$ thuộc miền nghiệm nên thay $x = 0, y = 0$ vào BPT ta được: $a(0) + b(0) \\le c \\Leftrightarrow 0 \\le c$, hay $c \\ge 0$."
  },
  {
    id: "b3-q9",
    q: "Tìm tất cả các giá trị thực của tham số $m$ để điểm $M(1; m)$ thuộc miền nghiệm của bất phương trình $2x - 3y + 4 \\ge 0$.",
    options: [
      "$m \\le 2$",
      "$m \\ge 2$",
      "$m < 2$",
      "$m > 2$"
    ],
    answer: 0,
    explain: "Thay toạ độ điểm $M(1; m)$ vào BPT: $2(1) - 3m + 4 \\ge 0 \\Leftrightarrow 6 - 3m \\ge 0 \\Leftrightarrow 3m \\le 6 \\Leftrightarrow m \\le 2$."
  },
  {
    id: "b3-q10",
    q: "Có bao nhiêu cặp số nguyên dương $(x; y)$ thỏa mãn bất phương trình $2x + 3y \\le 10$?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 3,
    explain: "Vì $x, y$ là các số nguyên dương nên $x \\ge 1, y \\ge 1$.\\nTừ $3y \\le 10 - 2x \\le 10 - 2(1) = 8 \\Rightarrow y \\in \\{1; 2\\}$.\\n• Với $y = 1 \\Rightarrow 2x + 3 \\le 10 \\Rightarrow 2x \\le 7 \\Rightarrow x \\in \\{1; 2; 3\\}$ (có 3 cặp: $(1; 1), (2; 1), (3; 1)$).\\n• Với $y = 2 \\Rightarrow 2x + 6 \\le 10 \\Rightarrow 2x \\le 4 \\Rightarrow x \\in \\{1; 2\\}$ (có 2 cặp: $(1; 2), (2; 2)$).\\nTổng cộng có $3 + 2 = 5$ cặp số thỏa mãn."
  },
  {
    id: "b3-q11",
    q: "Đường thẳng biên của miền nghiệm bất phương trình $3x - 4y + 12 = 0$ cắt hai trục toạ độ $Ox$ và $Oy$ lần lượt tại hai điểm $A$ và $B$. Diện tích tam giác $OAB$ bằng:",
    options: [
      "6",
      "12",
      "24",
      "7"
    ],
    answer: 0,
    explain: "Giao điểm với trục $Ox$ (cho $y = 0$): $3x + 12 = 0 \\Rightarrow x = -4 \\Rightarrow A(-4; 0) \\Rightarrow OA = 4$.\\nGiao điểm với trục $Oy$ (cho $x = 0$): $-4y + 12 = 0 \\Rightarrow y = 3 \\Rightarrow B(0; 3) \\Rightarrow OB = 3$.\\nTam giác $OAB$ vuông tại $O$ nên diện tích là: $S = \\frac{1}{2} OA \\cdot OB = \\frac{1}{2} \\cdot 4 \\cdot 3 = 6$."
  },
  {
    id: "b3-q12",
    q: "Một xưởng sản xuất hai loại sản phẩm A và B. Mỗi sản phẩm A cần 2 giờ làm việc của máy, mỗi sản phẩm B cần 3 giờ. Tổng thời gian máy có thể hoạt động tối đa trong ngày là 18 giờ. Gọi $x, y$ lần lượt là số sản phẩm A và B sản xuất trong ngày ($x, y \\in \\mathbb{N}$). Bất phương trình biểu thị giới hạn thời gian làm việc của máy là:",
    options: [
      "$2x + 3y \\le 18$",
      "$3x + 2y \\le 18$",
      "$2x + 3y < 18$",
      "$2x + 3y \\ge 18$"
    ],
    answer: 0,
    explain: "Thời gian làm ra $x$ sản phẩm A là $2x$ giờ, thời gian làm ra $y$ sản phẩm B là $3y$ giờ. Do tổng thời gian hoạt động tối đa là 18 giờ nên $2x + 3y \\le 18$ với $x, y \\ge 0$."
  }
];

export default bai03;
