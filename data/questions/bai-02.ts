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
    explain: "Hợp của hai tập hợp $A \\cup B$ gồm các phần tử thuộc $A$ hoặc thuộc $B$. Vậy $A \\cup B = \\{a; b; c; d; e\\}$."
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
    explain: "Giao của $A = [-2; 5)$ và $B = (1; 7]$ là phần khoảng chung của hai tập hợp: $A \\cap B = (1; 5)$."
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
    explain: "Hiệu $A \\setminus B$ gồm các phần tử thuộc $A$ nhưng không thuộc $B$. Phần tử 1 thuộc $A$ và không thuộc $B$, nên $A \\setminus B = \\{1\\}$."
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
  }
];

export default bai02;
