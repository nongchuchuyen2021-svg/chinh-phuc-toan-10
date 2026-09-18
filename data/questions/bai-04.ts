import type { Question } from "@/lib/types";

const bai04: Question[] = [
  {
    id: "b4-q1",
    q: "Hệ bất phương trình nào sau đây là hệ bất phương trình bậc nhất hai ẩn?",
    options: [
      "$\\begin{cases} x - 2y \\le 3 \\\\ 2x + y^2 > 1 \\end{cases}$",
      "$\\begin{cases} 2x + 3y > 5 \\\\ x - y \\le 4 \\end{cases}$",
      "$\\begin{cases} xy \\le 2 \\\\ x + y > 1 \\end{cases}$",
      "$\\begin{cases} x^2 + y^2 \\le 4 \\\\ 3x - y \\ge 0 \\end{cases}$"
    ],
    answer: 1,
    explain: "Hệ bất phương trình bậc nhất hai ẩn là hệ gồm hai hay nhiều bất phương trình bậc nhất hai ẩn. Hệ $\\begin{cases} 2x + 3y > 5 \\\\ x - y \\le 4 \\end{cases}$ chỉ chứa các biến bậc 1 đối với cả $x$ và $y$ và không có tích $xy$ hay bậc cao."
  },
  {
    id: "b4-q2",
    q: "Cặp số $(x; y) = (0; 0)$ là một nghiệm của hệ bất phương trình nào sau đây?",
    options: [
      "$\\begin{cases} x + y - 2 \\ge 0 \\\\ 2x - 3y + 1 > 0 \\end{cases}$",
      "$\\begin{cases} x + y - 2 \\le 0 \\\\ 2x - 3y + 2 > 0 \\end{cases}$",
      "$\\begin{cases} 3x - y + 1 < 0 \\\\ x + 2y - 4 \\le 0 \\end{cases}$",
      "$\\begin{cases} 2x + y > 1 \\\\ x - y \\le 0 \\end{cases}$"
    ],
    answer: 1,
    explain: "Thay $(x; y) = (0; 0)$ vào từng BPT:\\n• $x + y - 2 = 0 + 0 - 2 = -2 \\le 0$ (đúng).\\n• $2x - 3y + 2 = 2(0) - 3(0) + 2 = 2 > 0$ (đúng).\\nVậy $(0; 0)$ là nghiệm của hệ $\\begin{cases} x + y - 2 \\le 0 \\\\ 2x - 3y + 2 > 0 \\end{cases}$."
  },
  {
    id: "b4-q3",
    q: "Miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\end{cases}$ trên mặt phẳng toạ độ $Oxy$ là:",
    options: [
      "Nửa mặt phẳng bên phải trục tung $Oy$.",
      "Nửa mặt phẳng phía trên trục hoành $Ox$.",
      "Góc phần tư thứ nhất (kể cả hai tia toạ độ $Ox, Oy$).",
      "Góc phần tư thứ ba (kể cả hai tia toạ độ)."
    ],
    answer: 2,
    explain: "$x \\ge 0$ là nửa mặt phẳng bên phải trục $Oy$, còn $y \\ge 0$ là nửa mặt phẳng bên trên trục $Ox$. Giao của hai miền này chính là góc phần tư thứ nhất, bao gồm cả hai trục toạ độ."
  },
  {
    id: "b4-q4",
    q: "Cho biểu thức bậc nhất $F(x; y) = ax + by$ xác định trên miền đa giác lồi $A_1A_2...A_n$ (kể cả biên). Khẳng định nào sau đây là đúng?",
    options: [
      "Giá trị lớn nhất của $F(x; y)$ luôn đạt tại trọng tâm của đa giác.",
      "Giá trị nhỏ nhất của $F(x; y)$ luôn đạt tại gốc toạ độ $O(0; 0)$.",
      "Giá trị lớn nhất (hoặc nhỏ nhất) của $F(x; y)$ luôn đạt tại một trong các đỉnh của đa giác.",
      "Biểu thức $F(x; y)$ không thể đạt giá trị lớn nhất trên miền đa giác."
    ],
    answer: 2,
    explain: "Theo định lí cực trị trên miền đa giác: Giá trị lớn nhất (hoặc nhỏ nhất) của biểu thức $F(x; y) = ax + by$ trên một miền đa giác luôn đạt tại một trong các đỉnh của đa giác đó."
  },
  {
    id: "b4-q5",
    q: "Điểm $M(1; -2)$ thuộc miền nghiệm của hệ bất phương trình nào sau đây?",
    options: [
      "$\\begin{cases} 2x - y \\le 3 \\\\ x + 3y > 1 \\end{cases}$",
      "$\\begin{cases} x + y > 0 \\\\ 2x - y \\ge 1 \\end{cases}$",
      "$\\begin{cases} 3x - y \\ge 4 \\\\ x - 2y \\le 6 \\end{cases}$",
      "$\\begin{cases} 2x + y \\ge 0 \\\\ x - y > 2 \\end{cases}$"
    ],
    answer: 3,
    explain: "Thay $x = 1, y = -2$ vào hệ $\\begin{cases} 2x + y \\ge 0 \\\\ x - y > 2 \\end{cases}$:\\n• $2(1) + (-2) = 0 \\ge 0$ (thoả mãn).\\n• $1 - (-2) = 3 > 2$ (thoả mãn).\\nVậy $M(1; -2)$ thuộc miền nghiệm của hệ này."
  },
  {
    id: "b4-q6",
    q: "Miền nghiệm của hệ bất phương trình $\\begin{cases} x + y \\le 2 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$ là một tam giác vuông có diện tích bằng:",
    options: [
      "4",
      "2",
      "1",
      "$\\sqrt{2}$"
    ],
    answer: 1,
    explain: "Miền nghiệm là tam giác vuông $OAB$ với $O(0; 0), A(2; 0), B(0; 2)$. Hai cạnh góc vuông $OA = 2, OB = 2$. Do đó diện tích $S = \\frac{1}{2} \\cdot OA \\cdot OB = \\frac{1}{2} \\cdot 2 \\cdot 2 = 2$."
  },
  {
    id: "b4-q7",
    q: "Cho hệ bất phương trình $\\begin{cases} x - y \\le 1 \\\\ x + 2y \\le 4 \\\\ x \\ge 0 \\end{cases}$. Toạ độ giao điểm của hai đường thẳng biên $d_1: x - y = 1$ và $d_2: x + 2y = 4$ là:",
    options: [
      "$(2; 1)$",
      "$(1; 2)$",
      "$(3; 2)$",
      "$(0; 2)$"
    ],
    answer: 0,
    explain: "Giải hệ phương trình hai đường thẳng: $\\begin{cases} x - y = 1 \\\\ x + 2y = 4 \\end{cases} \\iff \\begin{cases} 3y = 3 \\\\ x = y + 1 \\end{cases} \\iff \\begin{cases} y = 1 \\\\ x = 2 \\end{cases}$. Vậy toạ độ giao điểm là $(2; 1)$."
  },
  {
    id: "b4-q8",
    q: "Giá trị nhỏ nhất của biểu thức $F(x; y) = 3x - 2y$ trên miền tam giác có toạ độ các đỉnh $A(1; 1), B(4; 1), C(1; 4)$ là:",
    options: [
      "1",
      "10",
      "$-5$",
      "0"
    ],
    answer: 2,
    explain: "Tính giá trị tại 3 đỉnh của tam giác:\\n• $F(A) = F(1; 1) = 3(1) - 2(1) = 1$.\\n• $F(B) = F(4; 1) = 3(4) - 2(1) = 10$.\\n• $F(C) = F(1; 4) = 3(1) - 2(4) = -5$.\\nVậy giá trị nhỏ nhất của $F(x; y)$ bằng $-5$ (đạt tại đỉnh $C$)."
  },
  {
    id: "b4-q9",
    q: "Giá trị lớn nhất của biểu thức $F(x; y) = 4x + 3y$ trên miền tứ giác có toạ độ các đỉnh $O(0; 0), A(0; 3), B(2; 4), C(4; 0)$ là:",
    options: [
      "16",
      "20",
      "18",
      "22"
    ],
    answer: 1,
    explain: "Tính giá trị $F(x; y)$ tại 4 đỉnh:\\n• $F(0; 0) = 0$\\n• $F(0; 3) = 4(0) + 3(3) = 9$\\n• $F(2; 4) = 4(2) + 3(4) = 8 + 12 = 20$\\n• $F(4; 0) = 4(4) + 3(0) = 16$\\nVậy giá trị lớn nhất là 20 (đạt tại đỉnh $B(2; 4)$)."
  },
  {
    id: "b4-q10",
    q: "Một xưởng may gia công áo sơ mi và quần âu. Mỗi chiếc áo cần 2 m vải và 1 giờ công; mỗi chiếc quần cần 1,5 m vải và 2 giờ công. Biết xưởng có 120 m vải và tối đa 100 giờ công. Gọi $x, y$ lần lượt là số áo và quần xưởng có thể may ($x, y \\ge 0$). Hệ bất phương trình ràng buộc là:",
    options: [
      "$\\begin{cases} 2x + 1,5y \\le 120 \\\\ x + 2y \\le 100 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$",
      "$\\begin{cases} 1,5x + 2y \\le 120 \\\\ 2x + y \\le 100 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$",
      "$\\begin{cases} 2x + y \\le 120 \\\\ 1,5x + 2y \\le 100 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$",
      "$\\begin{cases} 2x + 1,5y \\ge 120 \\\\ x + 2y \\ge 100 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$"
    ],
    answer: 0,
    explain: "• Tổng số mét vải dùng để may $x$ áo và $y$ quần là $2x + 1,5y \\le 120$.\\n• Tổng số giờ công là $x + 2y \\le 100$.\\n• Điều kiện không âm: $x \\ge 0, y \\ge 0$."
  },
  {
    id: "b4-q11",
    q: "Trong bài toán kinh doanh máy điều hoà ở SGK, miền nghiệm là tứ giác $OABC$ với $O(0; 0), A(0; 100), B(20; 80), C(60; 0)$. Lợi nhuận là $F(x; y) = 3,5x + 2y$ (triệu đồng). Cửa hàng nên nhập bao nhiêu máy mỗi loại để lợi nhuận lớn nhất?",
    options: [
      "60 máy hai chiều, lợi nhuận 210 triệu đồng.",
      "100 máy một chiều, lợi nhuận 200 triệu đồng.",
      "20 máy hai chiều và 80 máy một chiều, lợi nhuận 230 triệu đồng.",
      "50 máy hai chiều và 50 máy một chiều, lợi nhuận 225 triệu đồng."
    ],
    answer: 2,
    explain: "Tính lợi nhuận tại các đỉnh:\\n• $F(0; 0) = 0$\\n• $F(0; 100) = 2(100) = 200$ triệu\\n• $F(20; 80) = 3,5(20) + 2(80) = 70 + 160 = 230$ triệu\\n• $F(60; 0) = 3,5(60) = 210$ triệu.\\nVậy lợi nhuận lớn nhất bằng 230 triệu đồng khi nhập 20 máy hai chiều và 80 máy một chiều."
  },
  {
    id: "b4-q12",
    q: "Một bác nông dân dự định đầu tư tối đa 18 triệu đồng để trồng ngô và khoai tây trên diện tích không quá 6 sào. Chi phí trồng 1 sào ngô là 2 triệu đồng (lãi 3 triệu đồng); trồng 1 sào khoai là 4 triệu đồng (lãi 5 triệu đồng). Bác nông dân nên trồng bao nhiêu sào mỗi loại để tiền lãi thu được lớn nhất?",
    options: [
      "6 sào ngô, lãi 18 triệu đồng.",
      "4,5 sào khoai, lãi 22,5 triệu đồng.",
      "3 sào ngô và 3 sào khoai, lãi 24 triệu đồng.",
      "2 sào ngô và 4 sào khoai, lãi 26 triệu đồng."
    ],
    answer: 2,
    explain: "Gọi $x, y$ lần lượt là số sào ngô và khoai ($x, y \\ge 0$).\\nHệ ràng buộc: $\\begin{cases} x + y \\le 6 \\\\ 2x + 4y \\le 18 \\iff x + 2y \\le 9 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$.\\nCác đỉnh của miền nghiệm: $O(0; 0), A(0; 4,5), B(3; 3), C(6; 0)$.\\nBiểu thức tiền lãi $L(x; y) = 3x + 5y$:\\n• $L(O) = 0$\\n• $L(A) = 5(4,5) = 22,5$ triệu\\n• $L(B) = 3(3) + 5(3) = 9 + 15 = 24$ triệu\\n• $L(C) = 3(6) = 18$ triệu.\\nPhương án (2 sào ngô, 4 sào khoai) vi phạm vốn vì $2(2) + 4(4) = 20 > 18$. Vậy lợi nhuận tối đa là 24 triệu đồng khi trồng 3 sào ngô và 3 sào khoai."
  }
];

export default bai04;
