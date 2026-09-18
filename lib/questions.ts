import type { Question } from "./types";
import bai01 from "@/data/questions/bai-01";
import bai02 from "@/data/questions/bai-02";
import bai03 from "@/data/questions/bai-03";
import bai04 from "@/data/questions/bai-04";

// Ngân hàng câu hỏi trắc nghiệm 4 lựa chọn cho toàn bộ 27 bài học Toán 10 (Bộ sách Kết nối tri thức).
export const QUESTION_BANK: Record<string, Question[]> = {
  "bai-01": bai01,
  "bai-02": bai02,
  "bai-03": bai03,
  "bai-04": bai04,

  "bai-05": [
    {
      id: "b5-q1",
      q: "Giá trị của $\\cos 60^\\circ$ bằng:",
      options: [
        "$\\frac{1}{2}$",
        "$\\frac{\\sqrt{3}}{2}$",
        "$\\frac{\\sqrt{2}}{2}$",
        "$1$"
      ],
      answer: 0,
      explain: "Theo bảng giá trị lượng giác của các góc đặc biệt: $\\cos 60^\\circ = \\frac{1}{2}$."
    },
    {
      id: "b5-q2",
      q: "Với mọi góc $\\alpha$ thoả mãn $0^\\circ \\le \\alpha \\le 180^\\circ$, khẳng định nào sau đây là đúng?",
      options: [
        "$\\sin(180^\\circ - \\alpha) = -\\sin \\alpha$",
        "$\\cos(180^\\circ - \\alpha) = -\\cos \\alpha$",
        "$\\tan(180^\\circ - \\alpha) = \\tan \\alpha$",
        "$\\cot(180^\\circ - \\alpha) = \\cot \\alpha$"
      ],
      answer: 1,
      explain: "Hai góc bù nhau có sin bằng nhau, côsin, tang và côtang đối nhau: $\\cos(180^\\circ - \\alpha) = -\\cos \\alpha$."
    },
    {
      id: "b5-q3",
      q: "Cho góc tù $\\alpha$ thoả mãn $\\sin \\alpha = \\frac{3}{5}$. Giá trị của $\\cos \\alpha$ bằng:",
      options: [
        "$\\frac{4}{5}$",
        "$-\\frac{4}{5}$",
        "$\\frac{2}{5}$",
        "$-\\frac{2}{5}$"
      ],
      answer: 1,
      explain: "Vì $\\alpha$ là góc tù nên $90^\\circ < \\alpha < 180^\\circ \\Rightarrow \\cos \\alpha < 0$. Ta có $\\cos^2 \\alpha = 1 - \\sin^2 \\alpha = 1 - \\frac{9}{25} = \\frac{16}{25} \\Rightarrow \\cos \\alpha = -\\frac{4}{5}$."
    }
  ],

  "bai-06": [
    {
      id: "b6-q1",
      q: "Trong tam giác $ABC$, định lí côsin được biểu diễn bởi công thức nào sau đây?",
      options: [
        "$a^2 = b^2 + c^2 - 2bc \\cos A$",
        "$a^2 = b^2 + c^2 + 2bc \\cos A$",
        "$a^2 = b^2 + c^2 - 2bc \\sin A$",
        "$a^2 = b^2 + c^2 - bc \\cos A$"
      ],
      answer: 0,
      explain: "Theo định lí côsin trong tam giác: $a^2 = b^2 + c^2 - 2bc \\cos A$."
    },
    {
      id: "b6-q2",
      q: "Tam giác $ABC$ có cạnh $b = 6, c = 8$ và góc $A = 60^\\circ$. Độ dài cạnh $a$ bằng:",
      options: [
        "$2\\sqrt{13}$",
        "$2\\sqrt{37}$",
        "$10$",
        "$\\sqrt{52}$"
      ],
      answer: 0,
      explain: "Áp dụng định lí côsin: $a^2 = b^2 + c^2 - 2bc\\cos A = 6^2 + 8^2 - 2 \\cdot 6 \\cdot 8 \\cdot \\cos 60^\\circ = 36 + 64 - 48 = 52 \\Rightarrow a = \\sqrt{52} = 2\\sqrt{13}$."
    },
    {
      id: "b6-q3",
      q: "Tam giác $ABC$ có $b = 4, c = 5$ và góc $A = 30^\\circ$. Diện tích của tam giác $ABC$ bằng:",
      options: [
        "$10$",
        "$5$",
        "$5\\sqrt{3}$",
        "$20$"
      ],
      answer: 1,
      explain: "Diện tích tam giác $S = \\frac{1}{2}bc \\sin A = \\frac{1}{2} \\cdot 4 \\cdot 5 \\cdot \\sin 30^\\circ = 10 \\cdot \\frac{1}{2} = 5$."
    }
  ],

  "bai-07": [
    {
      id: "b7-q1",
      q: "Khẳng định nào sau đây là đúng về hai vectơ cùng phương?",
      options: [
        "Hai vectơ cùng phương là hai vectơ có giá song song hoặc trùng nhau.",
        "Hai vectơ cùng phương luôn có cùng độ dài.",
        "Hai vectơ cùng phương luôn có cùng hướng.",
        "Hai vectơ cùng phương có giá vuông góc với nhau."
      ],
      answer: 0,
      explain: "Theo định nghĩa, hai vectơ được gọi là cùng phương nếu giá của chúng song song hoặc trùng nhau."
    },
    {
      id: "b7-q2",
      q: "Cho hình bình hành $ABCD$. Vectơ nào sau đây bằng vectơ $\\overrightarrow{AB}$?",
      options: [
        "$\\overrightarrow{CD}$",
        "$\\overrightarrow{DC}$",
        "$\\overrightarrow{BC}$",
        "$\\overrightarrow{AD}$"
      ],
      answer: 1,
      explain: "Trong hình bình hành $ABCD$, đoạn thẳng $AB$ song song và bằng $CD$, hướng từ $A$ sang $B$ cùng hướng từ $D$ sang $C$. Vậy $\\overrightarrow{AB} = \\overrightarrow{DC}$."
    }
  ],

  "bai-08": [
    {
      id: "b8-q1",
      q: "Với ba điểm phân biệt $A, B, C$ tuỳ ý, đẳng thức nào sau đây luôn đúng (Quy tắc ba điểm)?",
      options: [
        "$\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$",
        "$\\overrightarrow{AB} + \\overrightarrow{CA} = \\overrightarrow{BC}$",
        "$\\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{BC}$",
        "$\\overrightarrow{BA} + \\overrightarrow{AC} = \\overrightarrow{CB}$"
      ],
      answer: 0,
      explain: "Theo quy tắc ba điểm: $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$."
    },
    {
      id: "b8-q2",
      q: "Cho hình bình hành $ABCD$. Tổng vectơ $\\overrightarrow{AB} + \\overrightarrow{AD}$ bằng:",
      options: [
        "$\\overrightarrow{CA}$",
        "$\\overrightarrow{BD}$",
        "$\\overrightarrow{AC}$",
        "$\\overrightarrow{DB}$"
      ],
      answer: 2,
      explain: "Theo quy tắc hình bình hành: $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$."
    }
  ],

  "bai-09": [
    {
      id: "b9-q1",
      q: "Cho điểm $I$ là trung điểm của đoạn thẳng $AB$. Với điểm $M$ bất kì, đẳng thức vectơ nào sau đây là đúng?",
      options: [
        "$\\overrightarrow{MA} + \\overrightarrow{MB} = \\overrightarrow{MI}$",
        "$\\overrightarrow{MA} + \\overrightarrow{MB} = 2\\overrightarrow{MI}$",
        "$\\overrightarrow{MA} + \\overrightarrow{MB} = 3\\overrightarrow{MI}$",
        "$\\overrightarrow{MA} - \\overrightarrow{MB} = 2\\overrightarrow{MI}$"
      ],
      answer: 1,
      explain: "Tính chất trung điểm: $\\overrightarrow{MA} + \\overrightarrow{MB} = 2\\overrightarrow{MI}$ với mọi điểm $M$."
    },
    {
      id: "b9-q2",
      q: "Cho tam giác $ABC$ có trọng tâm $G$. Đẳng thức nào sau đây là đúng?",
      options: [
        "$\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$",
        "$\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = 3\\overrightarrow{AB}$",
        "$\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CA} = 3\\overrightarrow{AG}$",
        "$\\overrightarrow{GA} + \\overrightarrow{GB} = \\overrightarrow{GC}$"
      ],
      answer: 0,
      explain: "Tính chất trọng tâm tam giác: $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$."
    }
  ],

  "bai-10": [
    {
      id: "b10-q1",
      q: "Trong mặt phẳng toạ độ $Oxy$, cho điểm $A(2; -3)$ và $B(4; 1)$. Toạ độ của vectơ $\\overrightarrow{AB}$ là:",
      options: [
        "$(6; -2)$",
        "$(2; 4)$",
        "$(2; -2)$",
        "$(-2; -4)$"
      ],
      answer: 1,
      explain: "Toạ độ vectơ $\\overrightarrow{AB} = (x_B - x_A; y_B - y_A) = (4 - 2; 1 - (-3)) = (2; 4)$."
    },
    {
      id: "b10-q2",
      q: "Cho $\\vec{u} = (2; -1)$ và $\\vec{v} = (-3; 4)$. Toạ độ của vectơ $2\\vec{u} + \\vec{v}$ là:",
      options: [
        "$(1; 2)$",
        "$(7; -6)$",
        "$(1; 3)$",
        "$(-1; 2)$"
      ],
      answer: 0,
      explain: "$2\\vec{u} = (4; -2) \\Rightarrow 2\\vec{u} + \\vec{v} = (4 + (-3); -2 + 4) = (1; 2)$."
    }
  ],

  "bai-11": [
    {
      id: "b11-q1",
      q: "Trong mặt phẳng toạ độ $Oxy$, cho $\\vec{a} = (1; 3)$ và $\\vec{b} = (-2; 4)$. Tích vô hướng $\\vec{a} \\cdot \\vec{b}$ bằng:",
      options: [
        "10",
        "14",
        "-10",
        "5"
      ],
      answer: 0,
      explain: "Tích vô hướng biểu thức toạ độ: $\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 = 1(-2) + 3(4) = -2 + 12 = 10$."
    },
    {
      id: "b11-q2",
      q: "Hai vectơ khác vectơ-không $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau khi và chỉ khi:",
      options: [
        "$\\vec{u} \\cdot \\vec{v} = 1$",
        "$\\vec{u} \\cdot \\vec{v} = 0$",
        "$|\\vec{u}| = |\\vec{v}|$",
        "$\\vec{u} + \\vec{v} = \\vec{0}$"
      ],
      answer: 1,
      explain: "Hai vectơ vuông góc với nhau khi góc giữa chúng bằng $90^\\circ$, khi đó $\\cos 90^\\circ = 0 \\Rightarrow \\vec{u} \\cdot \\vec{v} = 0$."
    }
  ],

  "bai-12": [
    {
      id: "b12-q1",
      q: "Quy tròn số gần đúng $a = 354{,}672$ đến hàng phần mười ta được kết quả là:",
      options: [
        "354,6",
        "354,7",
        "355",
        "354,67"
      ],
      answer: 1,
      explain: "Chữ số sau hàng phần mười là 7 $(\\ge 5)$ nên tăng hàng phần mười thêm 1: $354{,}7$."
    },
    {
      id: "b12-q2",
      q: "Một sợi dây có chiều dài đo được là $l = 15{,}4 \\pm 0{,}2\\text{ m}$. Sai số tuyệt đối của phép đo không vượt quá:",
      options: [
        "$0{,}2\\text{ m}$",
        "$15{,}4\\text{ m}$",
        "$0{,}1\\text{ m}$",
        "$0{,}4\\text{ m}$"
      ],
      answer: 0,
      explain: "Độ chính xác $d = 0{,}2\\text{ m}$ chính là cận trên của sai số tuyệt đối: $\\Delta_l \\le 0{,}2\\text{ m}$."
    }
  ],

  "bai-13": [
    {
      id: "b13-q1",
      q: "Cho mẫu số liệu điểm kiểm tra: 6, 7, 7, 8, 9, 9, 9, 10. Mốt của mẫu số liệu là:",
      options: [
        "7",
        "8",
        "9",
        "10"
      ],
      answer: 2,
      explain: "Mốt ($M_o$) là giá trị có tần số xuất hiện nhiều nhất. Điểm 9 xuất hiện 3 lần nên $M_o = 9$."
    },
    {
      id: "b13-q2",
      q: "Cho mẫu số liệu đã sắp xếp: 3, 5, 7, 8, 10, 12, 14. Trung vị ($Q_2$) của mẫu số liệu bằng:",
      options: [
        "7",
        "8",
        "8,5",
        "10"
      ],
      answer: 1,
      explain: "Mẫu số liệu có $n = 7$ giá trị lẻ. Trung vị là giá trị đứng chính giữa ở vị trí thứ 4, tức là số 8."
    }
  ],

  "bai-14": [
    {
      id: "b14-q1",
      q: "Cho mẫu số liệu: 4, 6, 7, 8, 10, 15. Khoảng biến thiên $R$ của mẫu số liệu bằng:",
      options: [
        "11",
        "15",
        "4",
        "7"
      ],
      answer: 0,
      explain: "Khoảng biến thiên $R = x_{\\max} - x_{\\min} = 15 - 4 = 11$."
    },
    {
      id: "b14-q2",
      q: "Độ lệch chuẩn $s$ của một mẫu số liệu bằng căn bậc hai của đại lượng nào sau đây?",
      options: [
        "Khoảng biến thiên",
        "Số trung bình",
        "Phương sai",
        "Khoảng tứ phân vị"
      ],
      answer: 2,
      explain: "Độ lệch chuẩn $s = \\sqrt{s^2}$, chính là căn bậc hai của phương sai."
    }
  ],

  "bai-15": [
    {
      id: "b15-q1",
      q: "Tập xác định của hàm số $y = \\frac{1}{x - 3}$ là:",
      options: [
        "$\\mathbb{R}$",
        "$\\mathbb{R} \\setminus \\{3\\}$",
        "$(3; +\\infty)$",
        "$(-\\infty; 3)$"
      ],
      answer: 1,
      explain: "Điều kiện xác định: mẫu số khác 0, tức $x - 3 \\ne 0 \\Leftrightarrow x \\ne 3$. Vậy $D = \\mathbb{R} \\setminus \\{3\\}$."
    },
    {
      id: "b15-q2",
      q: "Tập xác định của hàm số $y = \\sqrt{2x - 4}$ là:",
      options: [
        "$[2; +\\infty)$",
        "$(2; +\\infty)$",
        "$(-\\infty; 2]$",
        "$\\mathbb{R} \\setminus \\{2\\}$"
      ],
      answer: 0,
      explain: "Điều kiện xác định: $2x - 4 \\ge 0 \\Leftrightarrow 2x \\ge 4 \\Leftrightarrow x \\ge 2$. Vậy $D = [2; +\\infty)$."
    }
  ],

  "bai-16": [
    {
      id: "b16-q1",
      q: "Toạ độ đỉnh của parabol $y = x^2 - 4x + 3$ là:",
      options: [
        "$(2; -1)$",
        "$(2; 3)$",
        "$(-2; 15)$",
        "$(4; 3)$"
      ],
      answer: 0,
      explain: "Hoành độ đỉnh $x_I = -\\frac{b}{2a} = -\\frac{-4}{2(1)} = 2$. Tung độ đỉnh $y_I = 2^2 - 4(2) + 3 = 4 - 8 + 3 = -1$. Vậy toạ độ đỉnh là $I(2; -1)$."
    },
    {
      id: "b16-q2",
      q: "Trục đối xứng của parabol $y = -2x^2 + 8x - 5$ là đường thẳng:",
      options: [
        "$x = 2$",
        "$x = -2$",
        "$x = 4$",
        "$y = 3$"
      ],
      answer: 0,
      explain: "Trục đối xứng có phương trình $x = -\\frac{b}{2a} = -\\frac{8}{2(-2)} = 2$."
    }
  ],

  "bai-17": [
    {
      id: "b17-q1",
      q: "Tập nghiệm của bất phương trình $x^2 - 5x + 6 > 0$ là:",
      options: [
        "$(2; 3)$",
        "$(-\\infty; 2) \\cup (3; +\\infty)$",
        "$[2; 3]$",
        "$\\mathbb{R}$"
      ],
      answer: 1,
      explain: "Tam thức $f(x) = x^2 - 5x + 6$ có hai nghiệm $x_1 = 2, x_2 = 3$ và hệ số $a = 1 > 0$. Theo quy tắc trong trái ngoài cùng, $f(x) > 0 \\Leftrightarrow x < 2$ hoặc $x > 3$."
    },
    {
      id: "b17-q2",
      q: "Tam thức bậc hai $f(x) = ax^2 + bx + c$ ($a \\ne 0$) luôn cùng dấu với hệ số $a$ với mọi $x \\in \\mathbb{R}$ khi và chỉ khi:",
      options: [
        "$\\Delta < 0$",
        "$\\Delta > 0$",
        "$\\Delta = 0$",
        "$\\Delta \\le 0$"
      ],
      answer: 0,
      explain: "Định lí dấu tam thức bậc hai: Nếu $\\Delta < 0$ thì $f(x)$ cùng dấu với hệ số $a$ với mọi $x \\in \\mathbb{R}$."
    }
  ],

  "bai-18": [
    {
      id: "b18-q1",
      q: "Số nghiệm của phương trình $\\sqrt{2x^2 - 5x - 3} = \\sqrt{x^2 - 2x + 1}$ là:",
      options: [
        "0",
        "1",
        "2",
        "3"
      ],
      answer: 1,
      explain: "Bình phương hai vế: $2x^2 - 5x - 3 = x^2 - 2x + 1 \\Leftrightarrow x^2 - 3x - 4 = 0 \\Leftrightarrow x = -1$ hoặc $x = 4$. Thử lại vào phương trình ban đầu, chỉ có $x = 4$ thoả mãn căn thức có nghĩa."
    }
  ],

  "bai-19": [
    {
      id: "b19-q1",
      q: "Đường thẳng đi qua điểm $M(1; 2)$ và có vectơ pháp tuyến $\\vec{n} = (3; -2)$ có phương trình tổng quát là:",
      options: [
        "$3x - 2y + 1 = 0$",
        "$3x - 2y - 1 = 0$",
        "$2x + 3y - 8 = 0$",
        "$3x + 2y - 7 = 0$"
      ],
      answer: 0,
      explain: "PTTQ: $3(x - 1) - 2(y - 2) = 0 \\Leftrightarrow 3x - 3 - 2y + 4 = 0 \\Leftrightarrow 3x - 2y + 1 = 0$."
    },
    {
      id: "b19-q2",
      q: "Vectơ chỉ phương của đường thẳng $d: 2x - 3y + 5 = 0$ có thể là:",
      options: [
        "$\\vec{u} = (2; -3)$",
        "$\\vec{u} = (3; 2)$",
        "$\\vec{u} = (3; -2)$",
        "$\\vec{u} = (-2; 3)$"
      ],
      answer: 1,
      explain: "VTPT là $\\vec{n} = (2; -3)$ suy ra VTCP $\\vec{u} = (3; 2)$ vì $\\vec{n} \\cdot \\vec{u} = 2(3) + (-3)(2) = 0$."
    }
  ],

  "bai-20": [
    {
      id: "b20-q1",
      q: "Khoảng cách từ điểm $M(1; -2)$ đến đường thẳng $\\Delta: 3x - 4y + 4 = 0$ bằng:",
      options: [
        "3",
        "5",
        "2",
        "4"
      ],
      answer: 0,
      explain: "$d(M, \\Delta) = \\frac{|3(1) - 4(-2) + 4|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|3 + 8 + 4|}{5} = \\frac{15}{5} = 3$."
    },
    {
      id: "b20-q2",
      q: "Góc giữa hai đường thẳng $d_1: x - 2y + 1 = 0$ và $d_2: 2x + y - 3 = 0$ bằng:",
      options: [
        "$90^\\circ$",
        "$45^\\circ$",
        "$60^\\circ$",
        "$30^\\circ$"
      ],
      answer: 0,
      explain: "Hai VTPT $\\vec{n}_1 = (1; -2)$ và $\\vec{n}_2 = (2; 1)$ có $\\vec{n}_1 \\cdot \\vec{n}_2 = 1(2) + (-2)(1) = 0 \\Rightarrow d_1 \\perp d_2$, góc bằng $90^\\circ$."
    }
  ],

  "bai-21": [
    {
      id: "b21-q1",
      q: "Phương trình đường tròn tâm $I(2; -1)$ bán kính $R = 3$ là:",
      options: [
        "$(x - 2)^2 + (y + 1)^2 = 9$",
        "$(x + 2)^2 + (y - 1)^2 = 9$",
        "$(x - 2)^2 + (y + 1)^2 = 3$",
        "$(x - 2)^2 + (y - 1)^2 = 9$"
      ],
      answer: 0,
      explain: "Phương trình chính tắc của đường tròn tâm $I(a; b)$, bán kính $R$ là $(x - a)^2 + (y - b)^2 = R^2$. Với $a = 2, b = -1, R = 3$, ta có $(x - 2)^2 + (y + 1)^2 = 9$."
    }
  ],

  "bai-22": [
    {
      id: "b22-q1",
      q: "Độ dài trục lớn của elip $(E): \\frac{x^2}{25} + \\frac{y^2}{9} = 1$ bằng:",
      options: [
        "5",
        "10",
        "3",
        "6"
      ],
      answer: 1,
      explain: "Ta có $a^2 = 25 \\Rightarrow a = 5$. Độ dài trục lớn $2a = 2 \\times 5 = 10$."
    }
  ],

  "bai-23": [
    {
      id: "b23-q1",
      q: "Một quán ăn có 5 món cơm và 3 món phở. Một thực khách muốn chọn 1 món ăn cho bữa trưa thì có bao nhiêu cách chọn?",
      options: [
        "8 cách",
        "15 cách",
        "5 cách",
        "3 cách"
      ],
      answer: 0,
      explain: "Vì chọn 1 món cơm HOẶC 1 món phở, hai hành động này độc lập nên áp dụng quy tắc cộng: $5 + 3 = 8$ cách."
    },
    {
      id: "b23-q2",
      q: "Bạn An có 4 chiếc áo khác nhau và 3 chiếc quần khác nhau. Số cách chọn một bộ quần áo gồm 1 áo và 1 quần là:",
      options: [
        "7",
        "12",
        "10",
        "14"
      ],
      answer: 1,
      explain: "Để có một bộ quần áo, An phải chọn 1 áo VÀ chọn 1 quần. Áp dụng quy tắc nhân: $4 \\times 3 = 12$ cách."
    }
  ],

  "bai-24": [
    {
      id: "b24-q1",
      q: "Số cách xếp 5 bạn học sinh thành một hàng dọc là:",
      options: [
        "$5! = 120$",
        "$5^5 = 3125$",
        "$A_5^1 = 5$",
        "$C_5^2 = 10$"
      ],
      answer: 0,
      explain: "Xếp 5 học sinh vào 5 vị trí là một hoán vị của 5 phần tử: $P_5 = 5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$ cách."
    },
    {
      id: "b24-q2",
      q: "Từ một tổ gồm 10 bạn, cần chọn ra 3 bạn để phân công trực nhật. Số cách chọn là:",
      options: [
        "$C_{10}^3 = 120$",
        "$A_{10}^3 = 720$",
        "$10^3 = 1000$",
        "$30$"
      ],
      answer: 0,
      explain: "Chọn 3 bạn trong 10 bạn không tính thứ tự là tổ hợp chập 3 của 10: $C_{10}^3 = \\frac{10!}{3!7!} = 120$ cách."
    }
  ],

  "bai-25": [
    {
      id: "b25-q1",
      q: "Trong khai triển nhị thức Newton $(x + 2)^4$, hệ số của $x^3$ là:",
      options: [
        "4",
        "8",
        "6",
        "12"
      ],
      answer: 1,
      explain: "Số hạng chứa $x^3$ là $C_4^1 \\cdot x^3 \\cdot 2^1 = 4 \\cdot 2 \\cdot x^3 = 8x^3$. Hệ số bằng 8."
    }
  ],

  "bai-26": [
    {
      id: "b26-q1",
      q: "Gieo một con xúc xắc cân đối và đồng chất một lần. Xác suất để xuất hiện mặt có số chấm là số chẵn bằng:",
      options: [
        "$\\frac{1}{2}$",
        "$\\frac{1}{3}$",
        "$\\frac{1}{6}$",
        "$\\frac{2}{3}$"
      ],
      answer: 0,
      explain: "Không gian mẫu $n(\\Omega) = 6$. Biến cố $A = \\{2; 4; 6\\} \\Rightarrow n(A) = 3$. Xác suất $P(A) = \\frac{3}{6} = \\frac{1}{2}$."
    }
  ],

  "bai-27": [
    {
      id: "b27-q1",
      q: "Một hộp chứa 5 quả cầu đỏ và 4 quả cầu xanh. Lấy ngẫu nhiên 2 quả cầu. Xác suất để lấy được 2 quả cầu cùng màu đỏ là:",
      options: [
        "$\\frac{5}{18}$",
        "$\\frac{5}{9}$",
        "$\\frac{10}{36}$",
        "$\\frac{1}{6}$"
      ],
      answer: 0,
      explain: "Số phần tử không gian mẫu: $n(\\Omega) = C_9^2 = 36$. Số cách chọn 2 quả đỏ: $n(A) = C_5^2 = 10$. Xác suất: $P(A) = \\frac{10}{36} = \\frac{5}{18}$."
    }
  ]
};

export function getQuestions(lessonId: string): Question[] {
  return QUESTION_BANK[lessonId] ?? [];
}
