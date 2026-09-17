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
  },
  {
    id: "b1-q7",
    q: "Cho định lí: 'Nếu tứ giác $ABCD$ là hình bình hành thì $ABCD$ có hai đường chéo cắt nhau tại trung điểm của mỗi đường'. Khẳng định nào sau đây diễn đạt đúng định lí trên dưới dạng điều kiện cần và điều kiện đủ?",
    options: [
      "Tứ giác $ABCD$ có hai đường chéo cắt nhau tại trung điểm mỗi đường là điều kiện đủ để $ABCD$ là hình bình hành.",
      "Tứ giác $ABCD$ là hình bình hành là điều kiện đủ để $ABCD$ có hai đường chéo cắt nhau tại trung điểm mỗi đường.",
      "Tứ giác $ABCD$ là hình bình hành là điều kiện cần để $ABCD$ có hai đường chéo cắt nhau tại trung điểm mỗi đường.",
      "Tứ giác $ABCD$ có hai đường chéo cắt nhau tại trung điểm mỗi đường là điều kiện cần và đủ để $ABCD$ là hình vuông."
    ],
    answer: 1,
    explain: "Trong mệnh đề kéo theo $P \\Rightarrow Q$ (Nếu $P$ thì $Q$): Giả thiết $P$ đứng trước là 'điều kiện đủ để có $Q$', còn kết luận $Q$ đứng sau là 'điều kiện cần để có $P$'. Do đó '$ABCD$ là hình bình hành' là điều kiện đủ."
  },
  {
    id: "b1-q8",
    q: "Cho mệnh đề kéo theo $P \\Rightarrow Q$: 'Nếu $a$ và $b$ cùng chia hết cho $c$ thì tổng $a + b$ chia hết cho $c$'. Phát biểu mệnh đề đảo và xác định tính đúng sai của mệnh đề đảo đó:",
    options: [
      "Đảo: 'Nếu $a + b$ chia hết cho $c$ thì $a$ và $b$ cùng chia hết cho $c$' — Mệnh đề đảo này đúng.",
      "Đảo: 'Nếu $a + b$ chia hết cho $c$ thì $a$ và $b$ cùng chia hết cho $c$' — Mệnh đề đảo này sai.",
      "Đảo: 'Nếu $a + b$ không chia hết cho $c$ thì $a$ không chia hết cho $c$' — Mệnh đề đảo này đúng.",
      "Đảo: 'Nếu $a$ hoặc $b$ chia hết cho $c$ thì $a + b$ chia hết cho $c$' — Mệnh đề đảo này sai."
    ],
    answer: 1,
    explain: "Mệnh đề đảo của $P \\Rightarrow Q$ là $Q \\Rightarrow P$: 'Nếu $a + b$ chia hết cho $c$ thì $a$ và $b$ cùng chia hết cho $c$'. Mệnh đề đảo này sai, phản ví dụ: $a = 1, b = 3, c = 2$ có $1 + 3 = 4$ chia hết cho 2 nhưng 1 và 3 đều không chia hết cho 2."
  },
  {
    id: "b1-q9",
    q: "Phủ định của mệnh đề '$P: \\exists x \\in \\mathbb{R},\\ 1 < x < 3$' là mệnh đề nào sau đây?",
    options: [
      "$\\forall x \\in \\mathbb{R},\\ x \\le 1$ hoặc $x \\ge 3$",
      "$\\forall x \\in \\mathbb{R},\\ 1 \\le x \\le 3$",
      "$\\forall x \\in \\mathbb{R},\\ x < 1$ hoặc $x > 3$",
      "$\\exists x \\in \\mathbb{R},\\ x \\le 1$ hoặc $x \\ge 3$"
    ],
    answer: 0,
    explain: "Mệnh đề $1 < x < 3$ có nghĩa là '$x > 1$ và $x < 3$'. Phủ định của lượng từ $\\exists$ là $\\forall$. Phủ định của điều kiện '$1 < x < 3$' là '$x \\le 1$ hoặc $x \\ge 3$'. Do đó $\\overline{P}: \\forall x \\in \\mathbb{R},\\ x \\le 1$ hoặc $x \\ge 3$."
  },
  {
    id: "b1-q10",
    q: "Trong các khẳng định sau, có bao nhiêu mệnh đề đúng?\n(1) $\\forall x \\in \\mathbb{R},\\ x^2 + 2x + 3 > 0$.\n(2) $\\exists n \\in \\mathbb{N},\\ n^2 = n$.\n(3) $\\forall x \\in \\mathbb{R},\\ |x| > 0$.\n(4) $\\exists x \\in \\mathbb{Q},\\ x^2 = 3$.",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 1,
    explain: "(1) Đúng vì $x^2 + 2x + 3 = (x + 1)^2 + 2 \\ge 2 > 0$ với mọi $x$.\n(2) Đúng vì chọn $n = 0$ hoặc $n = 1$ có $n^2 = n$.\n(3) Sai vì với $x = 0$ thì $|0| = 0$ (không lớn hơn 0).\n(4) Sai vì $x^2 = 3 \\Leftrightarrow x = \\pm \\sqrt{3} \\notin \\mathbb{Q}$. Vậy có đúng 2 mệnh đề đúng ((1) và (2))."
  },
  {
    id: "b1-q11",
    q: "Cho mệnh đề chứa biến $P(x)$: '$x^2 - 4x + 3 = 0$' với $x \\in \\mathbb{R}$. Tìm tập hợp tất cả các giá trị của $x$ để nhận được mệnh đề đúng:",
    options: [
      "$\\{1; 3\\}$",
      "$\\{1; -3\\}$",
      "$\\{-1; -3\\}$",
      "$\\{2; 3\\}$"
    ],
    answer: 0,
    explain: "Giải phương trình bậc hai: $x^2 - 4x + 3 = 0 \\Leftrightarrow (x - 1)(x - 3) = 0 \\Leftrightarrow x = 1$ hoặc $x = 3$. Vậy tập hợp các giá trị làm mệnh đề đúng là $\\{1; 3\\}$."
  },
  {
    id: "b1-q12",
    q: "Cặp mệnh đề $P$ và $Q$ nào sau đây là hai mệnh đề tương đương ($P \\Leftrightarrow Q$)?",
    options: [
      "$P$: 'Tam giác $ABC$ đều' và $Q$: 'Tam giác $ABC$ cân'.",
      "$P$: 'Tam giác $ABC$ đều' và $Q$: 'Tam giác $ABC$ có hai góc bằng $60^\\circ$'.",
      "$P$: 'Tứ giác $ABCD$ là hình thoi' và $Q$: 'Tứ giác $ABCD$ có hai đường chéo vuông góc'.",
      "$P$: 'Số tự nhiên $n$ chia hết cho 3' và $Q$: 'Số tự nhiên $n$ chia hết cho 6'."
    ],
    answer: 1,
    explain: "Trong tam giác, nếu có hai góc bằng $60^\\circ$ thì góc thứ ba cũng bằng $180^\\circ - 60^\\circ - 60^\\circ = 60^\\circ$, suy ra tam giác đó đều. Ngược lại tam giác đều thì cả 3 góc bằng $60^\\circ$. Do đó hai mệnh đề này tương đương chiều qua lại."
  }
];

export default bai01;
