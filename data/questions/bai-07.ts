import type { Question } from "@/lib/types";

const bai07: Question[] = [
  // ─── MỨC ĐỘ 1: NHẬN BIẾT (CÂU 1 - 4) ─────────────────────────────
  {
    id: "b7-q1",
    q: "Khẳng định nào sau đây là định nghĩa chính xác về vectơ trong hình học?",
    options: [
      "Vectơ là một đoạn thẳng có hướng.",
      "Vectơ là một đường thẳng có hướng.",
      "Vectơ là một đoạn thẳng có độ dài lớn hơn 0.",
      "Vectơ là một tia trong mặt phẳng."
    ],
    answer: 0,
    explain: "Theo định nghĩa SGK Toán 10: Vectơ là một đoạn thẳng có hướng (đã chỉ rõ điểm đầu và điểm cuối)."
  },
  {
    id: "b7-q2",
    q: "Kí hiệu nào sau đây biểu diễn độ dài của vectơ $\\overrightarrow{AB}$?",
    options: [
      "$|\\overrightarrow{AB}|$",
      "$\\overrightarrow{|AB|}$",
      "$(AB)$",
      "$\\pm AB$"
    ],
    answer: 0,
    explain: "Độ dài của vectơ $\\overrightarrow{AB}$ được kí hiệu bằng hai dấu gạch đứng: $|\\overrightarrow{AB}|$, và chính bằng khoảng cách số học giữa hai điểm $A$ và $B$ ($|\\overrightarrow{AB}| = AB$)."
  },
  {
    id: "b7-q3",
    q: "Hai vectơ được gọi là cùng phương khi và chỉ khi:",
    options: [
      "Giá của chúng song song hoặc trùng nhau.",
      "Chúng có cùng độ dài và cùng hướng.",
      "Giá của chúng vuông góc với nhau.",
      "Chúng có chung điểm đầu hoặc chung điểm cuối."
    ],
    answer: 0,
    explain: "Theo định nghĩa: Đường thẳng đi qua điểm đầu và điểm cuối của vectơ gọi là giá của vectơ. Hai vectơ cùng phương khi giá của chúng song song hoặc trùng nhau."
  },
  {
    id: "b7-q4",
    q: "Khẳng định nào sau đây là ĐÚNG về vectơ-không $\\vec{0}$?",
    options: [
      "Vectơ-không cùng phương và cùng hướng với mọi vectơ, có độ dài bằng 0.",
      "Vectơ-không không có phương và không có hướng.",
      "Vectơ-không có độ dài bằng 1.",
      "Điểm đầu và điểm cuối của vectơ-không luôn phân biệt."
    ],
    answer: 0,
    explain: "Theo quy ước nền tảng của hình học: Vectơ-không có điểm đầu trùng điểm cuối (ví dụ $\\overrightarrow{AA}$), độ dài bằng $0$ ($|\\vec{0}| = 0$), và được quy ước là cùng phương, cùng hướng với mọi vectơ."
  },

  // ─── MỨC ĐỘ 2: THÔNG HIỂU (CÂU 5 - 8) ───────────────────────────
  {
    id: "b7-q5",
    q: "Cho hình bình hành $ABCD$. Vectơ nào sau đây bằng vectơ $\\overrightarrow{AB}$?",
    options: [
      "$\\overrightarrow{DC}$",
      "$\\overrightarrow{CD}$",
      "$\\overrightarrow{BA}$",
      "$\\overrightarrow{BC}$"
    ],
    answer: 0,
    explain: "Trong hình bình hành $ABCD$, cạnh $AB$ song song và bằng $DC$. Hướng từ $A$ đến $B$ cùng hướng từ $D$ đến $C$. Do đó $\\overrightarrow{AB} = \\overrightarrow{DC}$ (lưu ý: $\\overrightarrow{AB} \\ne \\overrightarrow{CD}$ vì ngược hướng)."
  },
  {
    id: "b7-q6",
    q: "Cho ba điểm phân biệt $A, B, C$ thẳng hàng, trong đó điểm $B$ nằm giữa hai điểm $A$ và $C$. Khẳng định nào sau đây là ĐÚNG?",
    options: [
      "Hai vectơ $\\overrightarrow{BA}$ và $\\overrightarrow{BC}$ ngược hướng nhau.",
      "Hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{BC}$ ngược hướng nhau.",
      "Hai vectơ $\\overrightarrow{BA}$ và $\\overrightarrow{CA}$ ngược hướng nhau.",
      "Hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{CB}$ cùng hướng nhau."
    ],
    answer: 0,
    explain: "Vì $B$ nằm giữa $A$ và $C$ nên tia $BA$ và tia $BC$ là hai tia đối nhau. Do đó vectơ $\\overrightarrow{BA}$ và vectơ $\\overrightarrow{BC}$ ngược hướng nhau."
  },
  {
    id: "b7-q7",
    q: "Cho hình bình hành $ABCD$ tâm $O$. Khẳng định nào sau đây là SAI?",
    options: [
      "$\\overrightarrow{OA} = \\overrightarrow{CO}$",
      "$\\overrightarrow{AO} = \\overrightarrow{OC}$",
      "$\\overrightarrow{OB} = \\overrightarrow{DO}$",
      "$\\overrightarrow{AD} = \\overrightarrow{BC}$"
    ],
    answer: 0,
    explain: "Vì $O$ là trung điểm của đoạn thẳng $AC$, hai vectơ $\\overrightarrow{OA}$ và $\\overrightarrow{OC}$ có cùng độ dài nhưng ngược hướng nhau (chúng là hai vectơ đối nhau). Do đó khẳng định $\\overrightarrow{OA} = \\overrightarrow{OC}$ là SAI (đẳng thức đúng phải là $\\overrightarrow{OA} = -\\overrightarrow{OC} = \\overrightarrow{CO}$)."
  },
  {
    id: "b7-q8",
    q: "Cho lục giác đều $ABCDEF$ tâm $O$. Số lượng vectơ khác $\\vec{0}$ có điểm đầu và điểm cuối là các đỉnh của lục giác hoặc tâm $O$ bằng với vectơ $\\overrightarrow{AB}$ là:",
    options: [
      "3",
      "2",
      "4",
      "1"
    ],
    answer: 0,
    explain: "Trong lục giác đều $ABCDEF$ tâm $O$, các đoạn thẳng song song và bằng $AB$ là: $FO, OC, ED$. Xét cùng hướng từ $A$ đến $B$, ta có đúng 3 vectơ bằng $\\overrightarrow{AB}$ là: $\\overrightarrow{FO}, \\overrightarrow{OC}, \\overrightarrow{ED}$."
  },

  // ─── MỨC ĐỘ 3: VẬN DỤNG (CÂU 9 - 12) ────────────────────────────
  {
    id: "b7-q9",
    q: "Cho hình vuông $ABCD$ có cạnh bằng $a\\sqrt{2}$. Độ dài của vectơ $\\overrightarrow{AC}$ bằng:",
    options: [
      "$2a$",
      "$a\\sqrt{2}$",
      "$4a$",
      "$a\\sqrt{3}$"
    ],
    answer: 0,
    explain: "Độ dài vectơ $|\\overrightarrow{AC}| = AC$. Trong hình vuông cạnh $s = a\\sqrt{2}$, đường chéo $AC = s\\sqrt{2} = a\\sqrt{2} \\cdot \\sqrt{2} = 2a$."
  },
  {
    id: "b7-q10",
    q: "Cho 5 điểm phân biệt $A, B, C, D, E$ trong đó không có 3 điểm nào thẳng hàng. Có bao nhiêu vectơ khác vectơ-không có điểm đầu và điểm cuối là các điểm đã cho?",
    options: [
      "20",
      "10",
      "25",
      "15"
    ],
    answer: 0,
    explain: "Mỗi cách chọn 2 điểm phân biệt theo thứ tự (điểm đầu và điểm cuối) từ 5 điểm cho trước tạo thành 1 vectơ khác $\\vec{0}$. Số vectơ là chỉnh hợp chập 2 của 5: $A_5^2 = 5 \\times 4 = 20$."
  },
  {
    id: "b7-q11",
    q: "Cho tam giác $ABC$ vuông tại $A$ có $AB = 6\\text{ cm}$ và $AC = 8\\text{ cm}$. Gọi $M$ là trung điểm của cạnh huyền $BC$. Độ dài của vectơ $\\overrightarrow{AM}$ bằng:",
    options: [
      "$5\\text{ cm}$",
      "$10\\text{ cm}$",
      "$7\\text{ cm}$",
      "$4\\text{ cm}$"
    ],
    answer: 0,
    explain: "Cạnh huyền $BC = \\sqrt{AB^2 + AC^2} = \\sqrt{6^2 + 8^2} = 10\\text{ cm}$. Trong tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng một nửa cạnh huyền: $AM = \\frac{BC}{2} = 5\\text{ cm}$. Do đó $|\\overrightarrow{AM}| = 5\\text{ cm}$."
  },
  {
    id: "b7-q12",
    q: "Cho tam giác đều $ABC$ cạnh $2a$. Gọi $H$ là trung điểm của cạnh $BC$. Độ dài của vectơ $\\overrightarrow{AH}$ bằng:",
    options: [
      "$a\\sqrt{3}$",
      "$a$",
      "$2a\\sqrt{3}$",
      "$\\frac{a\\sqrt{3}}{2}$"
    ],
    answer: 0,
    explain: "Trong tam giác đều cạnh $2a$, đường cao $AH = \\frac{(2a)\\sqrt{3}}{2} = a\\sqrt{3}$. Vậy $|\\overrightarrow{AH}| = AH = a\\sqrt{3}$."
  },

  // ─── MỨC ĐỘ 4: VẬN DỤNG CAO (CÂU 13 - 16) ────────────────────────
  {
    id: "b7-q13",
    q: "Một chiếc máy bay phản lực bay theo hướng chính Đông với vận tốc riêng có độ lớn $600\\text{ km/h}$. Cùng lúc đó, một cơn gió bão thổi theo hướng chính Nam với vận tốc $80\\text{ km/h}$. Độ lớn vận tốc thực tế của máy bay so với mặt đất (làm tròn đến hàng đơn vị) là:",
    options: [
      "$605\\text{ km/h}$",
      "$680\\text{ km/h}$",
      "$520\\text{ km/h}$",
      "$640\\text{ km/h}$"
    ],
    answer: 0,
    explain: "Hướng chính Đông và hướng chính Nam vuông góc với nhau ($90^\\circ$). Vectơ vận tốc tổng hợp $\\vec{v}$ là đường chéo hình chữ nhật tạo bởi $\\vec{v}_1$ (hướng Đông) và $\\vec{v}_2$ (hướng Nam). Độ lớn vận tốc thực tế: $v = \\sqrt{v_1^2 + v_2^2} = \\sqrt{600^2 + 80^2} = \\sqrt{360000 + 6400} = \\sqrt{366400} \\approx 605.31\\text{ km/h} \\approx 605\\text{ km/h}$."
  },
  {
    id: "b7-q14",
    q: "Một vật chịu tác dụng của hai lực $\\vec{F}_1$ và $\\vec{F}_2$ có phương vuông góc với nhau, với độ lớn lần lượt là $|\vec{F}_1| = 30\\text{ N}$ và $|\vec{F}_2| = 40\\text{ N}$. Để vật ở trạng thái cân bằng, cần tác dụng thêm một lực $\\vec{F}_3$ có độ lớn bằng bao nhiêu?",
    options: [
      "$50\\text{ N}$",
      "$70\\text{ N}$",
      "$10\\text{ N}$",
      "$25\\text{ N}$"
    ],
    answer: 0,
    explain: "Vật cân bằng khi tổng lực tác dụng bằng vectơ-không: $\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0} \\implies \\vec{F}_3 = -(\\vec{F}_1 + \\vec{F}_2)$. Do đó độ lớn $|\vec{F}_3| = |\\vec{F}_1 + \\vec{F}_2| = \\sqrt{F_1^2 + F_2^2} = \\sqrt{30^2 + 40^2} = 50\\text{ N}$."
  },
  {
    id: "b7-q15",
    q: "Cho lục giác đều $ABCDEF$ cạnh bằng $2$. Độ dài của vectơ đường chéo $\\overrightarrow{AC}$ bằng:",
    options: [
      "$2\\sqrt{3}$",
      "$4$",
      "$\\sqrt{3}$",
      "$2\\sqrt{2}$"
    ],
    answer: 0,
    explain: "Trong lục giác đều $ABCDEF$ cạnh $a = 2$, góc $\\widehat{ABC} = 120^\\circ$. Áp dụng định lí Côsin trong tam giác $ABC$: $AC^2 = AB^2 + BC^2 - 2AB \\cdot BC \\cdot \\cos 120^\\circ = 2^2 + 2^2 - 2(2)(2)\\left(-\\frac{1}{2}\\right) = 4 + 4 + 4 = 12 \\implies AC = \\sqrt{12} = 2\\sqrt{3}$. Do đó $|\\overrightarrow{AC}| = 2\\sqrt{3}$."
  },
  {
    id: "b7-q16",
    q: "Cho một tập hợp gồm $n$ điểm phân biệt ($n \\ge 2$) trong đó không có ba điểm nào thẳng hàng. Biết rằng số vectơ khác $\\vec{0}$ có điểm đầu và điểm cuối thuộc tập hợp đó bằng $72$. Giá trị của $n$ là:",
    options: [
      "$n = 9$",
      "$n = 8$",
      "$n = 12$",
      "$n = 6$"
    ],
    answer: 0,
    explain: "Số vectơ khác $\\vec{0}$ tạo từ $n$ điểm phân biệt là $A_n^2 = n(n - 1)$. Theo đề bài: $n(n - 1) = 72 \\iff n^2 - n - 72 = 0 \\iff (n - 9)(n + 8) = 0$. Vì $n \\ge 2$ nên $n = 9$."
  }
];

export default bai07;
