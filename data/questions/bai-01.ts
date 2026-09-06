import type { Question } from "@/lib/types";

const bai01: Question[] = [
  {
    id: "b1-q1",
    q: "Câu nào sau đây là một mệnh đề toán học?",
    options: [
      "Bạn có thích học môn Toán không?",
      "Số 17 là số nguyên tố.",
      "Hãy làm bài tập về nhà ngay đi!",
      "Thời tiết hôm nay thật đẹp!"
    ],
    answer: 1,
    explain: "Mệnh đề toán học là một khẳng định có tính đúng hoặc sai rõ ràng. 'Số 17 là số nguyên tố' là một mệnh đề đúng. Các câu hỏi, câu cảm thán và câu mệnh lệnh không phải là mệnh đề."
  },
  {
    id: "b1-q2",
    q: "Phủ định của mệnh đề $P$: 'Số 12 chia hết cho 4' là mệnh đề nào sau đây?",
    options: [
      "Số 12 chia hết cho 2",
      "Số 12 không chia hết cho 4",
      "Số 12 là số chẵn",
      "Số 12 chia hết cho 6"
    ],
    answer: 1,
    explain: "Mệnh đề phủ định $\\overline{P}$ của mệnh đề $P$ là 'Số 12 không chia hết cho 4'."
  },
  {
    id: "b1-q3",
    q: "Cho mệnh đề chứa biến $P(n)$: '$n$ chia hết cho 3' với $n \\in \\mathbb{N}$. Khẳng định nào sau đây là mệnh đề đúng?",
    options: [
      "$P(4)$",
      "$P(7)$",
      "$P(9)$",
      "$P(11)$"
    ],
    answer: 2,
    explain: "Với $n = 9$, ta có 9 chia hết cho 3 là một khẳng định đúng, nên $P(9)$ là mệnh đề đúng."
  },
  {
    id: "b1-q4",
    q: "Mệnh đề phủ định của mệnh đề '$P: \\forall x \\in \\mathbb{R},\\ x^2 + 1 > 0$' là:",
    options: [
      "$\\exists x \\in \\mathbb{R},\\ x^2 + 1 \\le 0$",
      "$\\forall x \\in \\mathbb{R},\\ x^2 + 1 < 0$",
      "$\\exists x \\in \\mathbb{R},\\ x^2 + 1 > 0$",
      "$\\forall x \\in \\mathbb{R},\\ x^2 + 1 \\le 0$"
    ],
    answer: 0,
    explain: "Phủ định của kí hiệu $\\forall$ (với mọi) là $\\exists$ (tồn tại), và phủ định của dấu '$>$' là '$\\le$'. Do đó phủ định của $P$ là '$\\exists x \\in \\mathbb{R},\\ x^2 + 1 \\le 0$'."
  },
  {
    id: "b1-q5",
    q: "Cho hai mệnh đề $P$: 'Tứ giác $ABCD$ là hình vuông' và $Q$: 'Tứ giác $ABCD$ là hình thoi có một góc vuông'. Mệnh đề tương đương $P \\Leftrightarrow Q$ phát biểu như thế nào?",
    options: [
      "Tứ giác $ABCD$ là hình vuông nếu và chỉ nếu nó là hình chữ nhật.",
      "Tứ giác $ABCD$ là hình vuông khi và chỉ khi nó là hình thoi có một góc vuông.",
      "Nếu tứ giác $ABCD$ là hình vuông thì nó là hình bình hành.",
      "Tứ giác $ABCD$ là hình thoi kéo theo nó là hình vuông."
    ],
    answer: 1,
    explain: "Mệnh đề tương đương $P \\Leftrightarrow Q$ đọc là '$P$ khi và chỉ khi $Q$' hoặc '$P$ nếu và chỉ nếu $Q$'."
  },
  {
    id: "b1-q6",
    q: "Mệnh đề nào sau đây là mệnh đề sai?",
    options: [
      "$\\exists x \\in \\mathbb{R},\\ x^2 = 2$",
      "$\\forall n \\in \\mathbb{N},\\ n^2 \\ge 0$",
      "$\\forall x \\in \\mathbb{R},\\ x^2 - 2x + 2 > 0$",
      "$\\forall x \\in \\mathbb{R},\\ x^2 > x$"
    ],
    answer: 3,
    explain: "Với $x = 0$ hoặc $x = \\frac{1}{2}$, ta có $(\\frac{1}{2})^2 = \\frac{1}{4} < \\frac{1}{2}$, nên mệnh đề '$\\forall x \\in \\mathbb{R},\\ x^2 > x$' là sai."
  }
];

export default bai01;
