import type { Question } from "@/lib/types";

const bai07: Question[] = [
  {
    "id": "b7-q1",
    "q": "Khẳng định nào sau đây là định nghĩa chính xác về vectơ trong hình học?",
    "options": [
      "Vectơ là một đoạn thẳng có hướng.",
      "Vectơ là một đường thẳng có hướng.",
      "Vectơ là một đoạn thẳng có độ dài lớn hơn 0.",
      "Vectơ là một tia trong mặt phẳng."
    ],
    "answer": 0,
    "explain": "Theo định nghĩa SGK Toán 10: Vectơ là một đoạn thẳng có hướng (đã chỉ rõ điểm đầu và điểm cuối)."
  },
  {
    "id": "b7-q2",
    "q": "Kí hiệu nào sau đây biểu diễn độ dài của vectơ $\\overrightarrow{AB}$?",
    "options": [
      "$\\overrightarrow{|AB|}$",
      "$(AB)$",
      "$\\pm AB$",
      "$|\\overrightarrow{AB}|$"
    ],
    "answer": 3,
    "explain": "Độ dài của vectơ $\\overrightarrow{AB}$ được kí hiệu bằng hai dấu gạch đứng: $|\\overrightarrow{AB}|$, và chính bằng khoảng cách số học giữa hai điểm $A$ và $B$ ($|\\overrightarrow{AB}| = AB$)."
  },
  {
    "id": "b7-q3",
    "q": "Hai vectơ khác vectơ-không được gọi là cùng phương khi và chỉ khi:",
    "options": [
      "Giá của chúng vuông góc với nhau.",
      "Chúng có chung điểm đầu hoặc chung điểm cuối.",
      "Giá của chúng song song hoặc trùng nhau.",
      "Chúng có cùng độ dài và cùng hướng."
    ],
    "answer": 2,
    "explain": "Theo định nghĩa: Đường thẳng đi qua điểm đầu và điểm cuối của vectơ gọi là giá của vectơ. Hai vectơ cùng phương khi giá của chúng song song hoặc trùng nhau."
  },
  {
    "id": "b7-q4",
    "q": "Khẳng định nào sau đây là ĐÚNG về vectơ-không $\\vec{0}$?",
    "options": [
      "Điểm đầu và điểm cuối của vectơ-không luôn phân biệt.",
      "Vectơ-không cùng phương và cùng hướng với mọi vectơ, có độ dài bằng 0.",
      "Vectơ-không không có phương và không có hướng.",
      "Vectơ-không có độ dài bằng 1."
    ],
    "answer": 1,
    "explain": "Theo quy ước nền tảng của hình học: Vectơ-không có điểm đầu trùng điểm cuối (ví dụ $\\overrightarrow{AA}$), độ dài bằng $0$ ($|\\vec{0}| = 0$), và được quy ước là cùng phương, cùng hướng với mọi vectơ."
  },
  {
    "id": "b7-q5",
    "q": "Cho hình bình hành $ABCD$. Vectơ nào sau đây bằng vectơ $\\overrightarrow{AB}$?",
    "options": [
      "$\\overrightarrow{DC}$",
      "$\\overrightarrow{CD}$",
      "$\\overrightarrow{BA}$",
      "$\\overrightarrow{BC}$"
    ],
    "answer": 0,
    "explain": "Trong hình bình hành $ABCD$, cạnh $AB$ song song và bằng $DC$. Hướng từ $A$ đến $B$ cùng hướng từ $D$ đến $C$. Do đó $\\overrightarrow{AB} = \\overrightarrow{DC}$ (lưu ý: $\\overrightarrow{AB} \\ne \\overrightarrow{CD}$ vì ngược hướng)."
  },
  {
    "id": "b7-q6",
    "q": "Cho ba điểm phân biệt $A, B, C$ thẳng hàng, trong đó điểm $B$ nằm giữa hai điểm $A$ và $C$. Khẳng định nào sau đây là ĐÚNG?",
    "options": [
      "Hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{BC}$ ngược hướng nhau.",
      "Hai vectơ $\\overrightarrow{BA}$ và $\\overrightarrow{CA}$ ngược hướng nhau.",
      "Hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{CB}$ cùng hướng nhau.",
      "Hai vectơ $\\overrightarrow{BA}$ và $\\overrightarrow{BC}$ ngược hướng nhau."
    ],
    "answer": 3,
    "explain": "Vì $B$ nằm giữa $A$ và $C$ nên tia $BA$ và tia $BC$ là hai tia đối nhau. Do đó vectơ $\\overrightarrow{BA}$ và vectơ $\\overrightarrow{BC}$ ngược hướng nhau."
  },
  {
    "id": "b7-q7",
    "q": "Cho hình bình hành $ABCD$ tâm $O$. Khẳng định nào sau đây là SAI?",
    "options": [
      "$\\overrightarrow{OB} = \\overrightarrow{DO}$",
      "$\\overrightarrow{AD} = \\overrightarrow{BC}$",
      "$\\overrightarrow{OA}$ = $\\overrightarrow{OC}$",
      "$\\overrightarrow{AO} = \\overrightarrow{OC}$"
    ],
    "answer": 2,
    "explain": "O là trung điểm AC nên OA và OC ngược hướng, cùng độ dài. Đẳng thức OA = OC về vectơ là sai; đúng phải là $\\overrightarrow{OA}$ = $\\overrightarrow{CO}$. Ba phương án còn lại đều đúng."
  },
  {
    "id": "b7-q8",
    "q": "Cho lục giác đều $ABCDEF$ tâm $O$. Số lượng vectơ khác $\\vec{0}$ có điểm đầu và điểm cuối là các đỉnh của lục giác hoặc tâm $O$ bằng với vectơ $\\overrightarrow{AB}$ là:",
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "answer": 3,
    "explain": "Có đủ 4 vectơ: $\\overrightarrow{AB}$, $\\overrightarrow{ED}$, $\\overrightarrow{FO}$, $\\overrightarrow{OC}$. Phải đếm cả chính vectơ AB. Đây là ví dụ bổ sung."
  },
  {
    "id": "b7-q9",
    "q": "Cho hình vuông $ABCD$ có cạnh bằng $a\\sqrt{2}$. Độ dài của vectơ $\\overrightarrow{AC}$ bằng:",
    "options": [
      "$2a$",
      "$a\\sqrt{2}$",
      "$4a$",
      "$a\\sqrt{3}$"
    ],
    "answer": 0,
    "explain": "Độ dài vectơ $|\\overrightarrow{AC}| = AC$. Trong hình vuông cạnh $s = a\\sqrt{2}$, đường chéo $AC = s\\sqrt{2} = a\\sqrt{2} \\cdot \\sqrt{2} = 2a$."
  },
  {
    "id": "b7-q10",
    "q": "Cho 5 điểm phân biệt $A, B, C, D, E$ trong đó không có 3 điểm nào thẳng hàng. Đếm theo cặp điểm đầu–cuối: có bao nhiêu mũi tên khác vectơ-không có hai mút là các điểm đã cho?",
    "options": [
      "10",
      "25",
      "15",
      "20"
    ],
    "answer": 3,
    "explain": "Mỗi cách chọn 2 điểm phân biệt theo thứ tự (điểm đầu và điểm cuối) từ 5 điểm cho trước tạo thành 1 vectơ khác $\\vec{0}$. Số vectơ là chỉnh hợp chập 2 của 5: $A_5^2 = 5 \\times 4 = 20$."
  },
  {
    "id": "b7-q11",
    "q": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 6\\text{ cm}$ và $AC = 8\\text{ cm}$. Gọi $M$ là trung điểm của cạnh huyền $BC$. Độ dài của vectơ $\\overrightarrow{AM}$ bằng:",
    "options": [
      "$7\\text{ cm}$",
      "$4\\text{ cm}$",
      "$5\\text{ cm}$",
      "$10\\text{ cm}$"
    ],
    "answer": 2,
    "explain": "Cạnh huyền $BC = \\sqrt{AB^2 + AC^2} = \\sqrt{6^2 + 8^2} = 10\\text{ cm}$. Trong tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng một nửa cạnh huyền: $AM = \\frac{BC}{2} = 5\\text{ cm}$. Do đó $|\\overrightarrow{AM}| = 5\\text{ cm}$."
  },
  {
    "id": "b7-q12",
    "q": "Cho tam giác đều $ABC$ cạnh $2a$. Gọi $H$ là trung điểm của cạnh $BC$. Độ dài của vectơ $\\overrightarrow{AH}$ bằng:",
    "options": [
      "$\\frac{a\\sqrt{3}}{2}$",
      "$a\\sqrt{3}$",
      "$a$",
      "$2a\\sqrt{3}$"
    ],
    "answer": 1,
    "explain": "Trong tam giác đều cạnh $2a$, đường cao $AH = \\frac{(2a)\\sqrt{3}}{2} = a\\sqrt{3}$. Vậy $|\\overrightarrow{AH}| = AH = a\\sqrt{3}$."
  },
  {
    "id": "b7-q13",
    "q": "Trong Bài 4.1 SGK, ba vectơ $\\vec a,\\vec b,\\vec c$ đều khác $\\vec0$. Nếu $\\vec a$ và $\\vec b$ cùng phương với $\\vec c$ thì khẳng định nào đúng?",
    "options": [
      "Chắc chắn cùng hướng",
      "Chắc chắn ngược hướng",
      "Chắc chắn bằng nhau",
      "Chắc chắn cùng phương"
    ],
    "answer": 3,
    "explain": "Vì c khác 0 nên xác định một phương. a và b cùng phương c nên cùng phương nhau; chúng có thể cùng hướng hoặc ngược hướng."
  },
  {
    "id": "b7-q14",
    "q": "Từ điểm O và vectơ $\\vec a$ cho trước, có bao nhiêu điểm A thỏa mãn $\\overrightarrow{OA}=\\vec a$?",
    "options": [
      "Duy nhất một điểm",
      "Hai điểm",
      "Vô số điểm",
      "Không có điểm nào"
    ],
    "answer": 0,
    "explain": "Giữ đúng hướng và độ dài của a từ gốc O xác định duy nhất điểm cuối A. Với vectơ-không, A trùng O."
  },
  {
    "id": "b7-q15",
    "q": "Cho lục giác đều $ABCDEF$ cạnh bằng $2$. Độ dài của vectơ đường chéo $\\overrightarrow{AC}$ bằng:",
    "options": [
      "$\\sqrt{3}$",
      "$2\\sqrt{2}$",
      "$2\\sqrt{3}$",
      "$4$"
    ],
    "answer": 2,
    "explain": "Trong lục giác đều $ABCDEF$ cạnh $a = 2$, góc $\\widehat{ABC} = 120^\\circ$. Áp dụng định lí Côsin trong tam giác $ABC$: $AC^2 = AB^2 + BC^2 - 2AB \\cdot BC \\cdot \\cos 120^\\circ = 2^2 + 2^2 - 2(2)(2)\\left(-\\frac{1}{2}\\right) = 4 + 4 + 4 = 12 \\implies AC = \\sqrt{12} = 2\\sqrt{3}$. Do đó $|\\overrightarrow{AC}| = 2\\sqrt{3}$."
  },
  {
    "id": "b7-q16",
    "q": "Cho một tập hợp gồm $n$ điểm phân biệt ($n \\ge 2$) trong đó không có ba điểm nào thẳng hàng. Đếm theo cặp điểm đầu–cuối khác nhau. Biết rằng số mũi tên khác $\\vec{0}$ có điểm đầu và điểm cuối thuộc tập hợp đó bằng $72$. Giá trị của $n$ là:",
    "options": [
      "$n = 6$",
      "$n = 9$",
      "$n = 8$",
      "$n = 12$"
    ],
    "answer": 1,
    "explain": "Số vectơ khác $\\vec{0}$ tạo từ $n$ điểm phân biệt là $A_n^2 = n(n - 1)$. Theo đề bài: $n(n - 1) = 72 \\iff n^2 - n - 72 = 0 \\iff (n - 9)(n + 8) = 0$. Vì $n \\ge 2$ nên $n = 9$."
  },
  {
    "id": "b7-q17",
    "q": "Theo Hình 4.12 SGK: $\\vec a$ đi từ (0;4) đến (−2;0), $\\vec c$ từ (2;0) đến (0;−4). Quan hệ nào đúng?",
    "options": [
      "Hai vectơ bằng nhau",
      "Hai vectơ ngược hướng",
      "Hai vectơ khác phương",
      "Vectơ a dài gấp đôi c"
    ],
    "answer": 0,
    "explain": "Cả hai đều đi 2 ô sang trái, 4 ô xuống. Chúng cùng hướng và cùng độ dài nên bằng nhau."
  },
  {
    "id": "b7-q18",
    "q": "Trong hình vuông ABCD tâm O, có bao nhiêu mũi tên khác vectơ-không có hai mút thuộc A, B, C, D, O (đếm theo cặp điểm đầu–cuối)?",
    "options": [
      "12",
      "16",
      "20",
      "10"
    ],
    "answer": 2,
    "explain": "Mỗi điểm đầu có 4 điểm cuối khác nó: 5 × 4 = 20 mũi tên. Nếu gộp các vectơ bằng nhau thì được 12 nhóm; đó là phép đếm khác."
  },
  {
    "id": "b7-q19",
    "q": "A(1;1), B(5;3), C(2;4). D là điểm nào để CD bằng AB về vectơ?",
    "options": [
      "D(6;2)",
      "D(2;4)",
      "D(4;5)",
      "D(6;6)"
    ],
    "answer": 3,
    "explain": "Từ A tới B đi 4 ô sang phải và 2 ô lên. Từ C đi như vậy tới D(6;6). Hoạt động lưới là phần bổ sung."
  },
  {
    "id": "b7-q20",
    "q": "Trong Bài 4.5 SGK, vật đi từ M(0;−1) với vận tốc biểu diễn bằng OA, A(1;2). Vật tới N(3;5) sau bao lâu?",
    "options": [
      "Không đi qua N",
      "1 giờ",
      "2 giờ",
      "3 giờ"
    ],
    "answer": 3,
    "explain": "Mỗi giờ đi 1 ô ngang, 2 ô lên: sau 3 giờ từ M(0;−1) đến (3;5), chính là N."
  }
];
export default bai07;
