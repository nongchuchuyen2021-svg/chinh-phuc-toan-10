import type { Question } from "@/lib/types";

const bai02: Question[] = [
  {
    id: "b2-q1",
    q: "Cho tập hợp $A = \\{x \\in \\mathbb{N} \\mid x < 5\\}$. Viết tập hợp $A$ dưới dạng liệt kê các phần tử:",
    options: [
      "$A = \\{1; 2; 3; 4\\}$",
      "$A = \\{0; 1; 2; 3; 4\\}$",
      "$A = \\{0; 1; 2; 3; 4; 5\\}$",
      "$A = \\{1; 2; 3; 4; 5\\}$"
    ],
    answer: 1,
    explain: "Tập số tự nhiên $\\mathbb{N} = \\{0; 1; 2; 3; \\dots\\}$. Các số tự nhiên nhỏ hơn 5 là 0, 1, 2, 3, 4. Do đó $A = \\{0; 1; 2; 3; 4\\}$."
  },
  {
    id: "b2-q2",
    q: "Cho hai tập hợp $A = \\{1; 2; 3; 4\\}$ và $B = \\{3; 4; 5; 6\\}$. Giao của hai tập hợp $A \\cap B$ là:",
    options: [
      "$\\{1; 2; 3; 4; 5; 6\\}$",
      "$\\{3; 4\\}$",
      "$\\{1; 2\\}$",
      "$\\{5; 6\\}$"
    ],
    answer: 1,
    explain: "Giao của hai tập hợp $A \\cap B$ gồm các phần tử vừa thuộc $A$ vừa thuộc $B$. Ta thấy 3 và 4 thuộc cả hai tập nên $A \\cap B = \\{3; 4\\}$."
  },
  {
    id: "b2-q3",
    q: "Cho hai tập hợp $A = \\{a; b; c\\}$ và $B = \\{b; c; d; e\\}$. Hợp của hai tập hợp $A \\cup B$ là:",
    options: [
      "$\\{b; c\\}$",
      "$\\{a; b; c; d; e\\}$",
      "$\\{a; d; e\\}$",
      "$\\{a\\}$"
    ],
    answer: 1,
    explain: "Hợp của hai tập hợp $A \\cup B$ gồm các phần tử thuộc $A$ hoặc thuộc $B$. Mỗi phần tử chỉ liệt kê một lần. Vậy $A \\cup B = \\{a; b; c; d; e\\}$."
  },
  {
    id: "b2-q4",
    q: "Cho hai tập hợp $A = [-2; 5)$ và $B = (1; 7]$. Khi đó tập hợp $A \\cap B$ bằng:",
    options: [
      "$[-2; 7]$",
      "$(1; 5)$",
      "$[1; 5)$",
      "$(-2; 1]$"
    ],
    answer: 1,
    explain: "Giao của $A = [-2; 5)$ và $B = (1; 7]$ là phần chung của hai tập hợp trên trục số: $\\max(-2, 1) = 1$ (ngoặc tròn vì $1 \\notin B$) và $\\min(5, 7) = 5$ (ngoặc tròn vì $5 \\notin A$). Vậy $A \\cap B = (1; 5)$."
  },
  {
    id: "b2-q5",
    q: "Cho hai tập hợp $A = \\{1; 2; 3\\}$ và $B = \\{2; 3; 4; 5\\}$. Hiệu $A \\setminus B$ là:",
    options: [
      "$\\{1\\}$",
      "$\\{4; 5\\}$",
      "$\\{2; 3\\}$",
      "$\\emptyset$"
    ],
    answer: 0,
    explain: "Hiệu $A \\setminus B$ gồm các phần tử thuộc $A$ nhưng không thuộc $B$. Phần tử 1 thuộc $A$ và không thuộc $B$, trong khi 2 và 3 đều thuộc $B$. Do đó $A \\setminus B = \\{1\\}$."
  },
  {
    id: "b2-q6",
    q: "Một lớp học có 40 học sinh, trong đó có 25 em thích môn Toán, 20 em thích môn Văn, và 10 em thích cả hai môn. Số học sinh không thích môn nào trong hai môn trên là:",
    options: [
      "3 em",
      "5 em",
      "7 em",
      "10 em"
    ],
    answer: 1,
    explain: "Theo công thức đếm số phần tử của hợp hai tập hợp: $n(T \\cup V) = n(T) + n(V) - n(T \\cap V) = 25 + 20 - 10 = 35$ em thích ít nhất một môn. Vậy số học sinh không thích môn nào là $40 - 35 = 5$ em."
  },
  {
    id: "b2-q7",
    q: "Cho tập hợp $X = \\{1; 2; 3; 4\\}$. Số tập hợp con của tập hợp $X$ là:",
    options: [
      "8",
      "14",
      "15",
      "16"
    ],
    answer: 3,
    explain: "Một tập hợp gồm $n$ phần tử thì có tất cả $2^n$ tập hợp con (kể cả tập rỗng $\\emptyset$ và chính nó). Tập $X$ có 4 phần tử nên số tập con là $2^4 = 16$."
  },
  {
    id: "b2-q8",
    q: "Cho tập hợp $A = [-3; 2)$. Phần bù của $A$ trong $\\mathbb{R}$, kí hiệu $C_{\\mathbb{R}} A$ (hay $\\mathbb{R} \\setminus A$), là tập hợp nào sau đây?",
    options: [
      "$(-\\infty; -3) \\cup [2; +\\infty)$",
      "$(-\\infty; -3] \\cup (2; +\\infty)$",
      "$(-\\infty; -3) \\cup (2; +\\infty)$",
      "$(-\\infty; -3] \\cup [2; +\\infty)$"
    ],
    answer: 0,
    explain: "Phần bù $C_{\\mathbb{R}} A = \\mathbb{R} \\setminus [-3; 2)$ gồm các số thực nhỏ hơn $-3$ hoặc không nhỏ hơn $2$. Do $-3 \\in A$ nên trong phần bù $-3$ bị loại (thành ngoặc tròn '$)$'); $2 \\notin A$ nên trong phần bù $2$ được giữ lại (thành ngoặc vuông '$[$'). Vậy $C_{\\mathbb{R}} A = (-\\infty; -3) \\cup [2; +\\infty)$."
  },
  {
    id: "b2-q9",
    q: "Cho hai tập hợp $A = (-\\infty; 2]$ và $B = (-1; 5)$. Khi đó tập hợp $A \\cup B$ bằng:",
    options: [
      "$(-1; 2]$",
      "$(-\\infty; 5)$",
      "$(-\\infty; 5]$",
      "$[-1; 5)$"
    ],
    answer: 1,
    explain: "Hợp của hai khoảng phủ kín từ $-\\infty$ đến 5: tại giao điểm 2, số 2 thuộc $A$ nên hai khoảng nối liền nhau liên tục. Đầu mút phải là 5 (ngoặc tròn vì $5 \\notin B$ và $5 \\notin A$). Vậy $A \\cup B = (-\\infty; 5)$."
  },
  {
    id: "b2-q10",
    q: "Cho ba tập hợp $A = [-4; 2]$, $B = (-2; 4)$ và $C = [1; 6]$. Khi đó tập hợp $(A \\cap B) \\setminus C$ là:",
    options: [
      "$(-2; 1)$",
      "$[-2; 1)$",
      "$(-2; 1]$",
      "$(1; 2]$"
    ],
    answer: 0,
    explain: "Bước 1: Tìm $A \\cap B = [-4; 2] \\cap (-2; 4) = (-2; 2]$.\\nBước 2: Tìm $(A \\cap B) \\setminus C = (-2; 2] \\setminus [1; 6]$. Lấy các phần tử thuộc $(-2; 2]$ nhưng loại bỏ phần thuộc $[1; 6]$. Vì $1 \\in C$ nên điểm 1 bị loại, đầu mút phải trở thành ngoặc tròn. Do đó kết quả là $(-2; 1)$."
  },
  {
    id: "b2-q11",
    q: "Cho hai khoảng $A = (-\\infty; m + 1)$ và $B = (3; +\\infty)$. Điều kiện của tham số $m$ để $A \\cap B = \\emptyset$ là:",
    options: [
      "$m < 2$",
      "$m \\le 2$",
      "$m \\ge 2$",
      "$m > 2$"
    ],
    answer: 1,
    explain: "Để hai khoảng không có điểm chung ($A \\cap B = \\emptyset$) thì mút phải của $A$ phải nhỏ hơn hoặc bằng mút trái của $B$:\\n$m + 1 \\le 3 \\Leftrightarrow m \\le 2$.\\nLưu ý: Khi $m = 2$, $A = (-\\infty; 3)$ và $B = (3; +\\infty)$, cả hai tập đều không chứa số 3 nên giao nhau vẫn bằng $\\emptyset$. Vì vậy dấu '=' được chấp nhận."
  },
  {
    id: "b2-q12",
    q: "Cho hai tập hợp $A = \\{x \\in \\mathbb{R} \\mid (x - 1)(x^2 - 4) = 0\\}$ và $B = \\{x \\in \\mathbb{Z} \\mid -2 \\le x \\le 2\\}$. Khẳng định nào sau đây là đúng?",
    options: [
      "$A = B$",
      "$A \\subset B$",
      "$B \\subset A$",
      "$A \\cap B = \\emptyset$"
    ],
    answer: 1,
    explain: "Giải phương trình $(x - 1)(x^2 - 4) = 0 \\Leftrightarrow x \\in \\{-2; 1; 2\\}$. Vậy $A = \\{-2; 1; 2\\}$.\\nTập các số nguyên thỏa mãn $-2 \\le x \\le 2$ là $B = \\{-2; -1; 0; 1; 2\\}$.\\nTa thấy mọi phần tử của $A$ đều thuộc $B$ (nhưng $B$ có thêm $-1$ và $0$ không thuộc $A$), do đó $A$ là tập con thực sự của $B$: $A \\subset B$."
  }
];

export default bai02;
