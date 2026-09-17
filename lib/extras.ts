import type { EssayQuestion, LessonExtra, TFQuestion } from "./types";

export const EXTRA_BANK: Record<string, LessonExtra> = {
  "bai-01": {
    tf: [
      {
        id: "b1-tf1",
        context: "Cho mệnh đề chứa biến $P(x)$: '$x^2 - 5x + 6 = 0$' với $x \\in \\mathbb{R}$.",
        statements: [
          {
            text: "Với $x = 2$, $P(2)$ là một mệnh đề đúng.",
            answer: true,
            explain: "Thay $x = 2$: $2^2 - 5(2) + 6 = 4 - 10 + 6 = 0$ (đúng)."
          },
          {
            text: "Với $x = 1$, $P(1)$ là một mệnh đề đúng.",
            answer: false,
            explain: "Thay $x = 1$: $1^2 - 5(1) + 6 = 2 \\ne 0$, nên $P(1)$ sai."
          },
          {
            text: "Mệnh đề '$\\exists x \\in \\mathbb{R},\\ x^2 - 5x + 6 = 0$' là mệnh đề đúng.",
            answer: true,
            explain: "Vì tồn tại $x = 2$ hoặc $x = 3$ thoả mãn phương trình."
          },
          {
            text: "Mệnh đề '$\\forall x \\in \\mathbb{R},\\ x^2 - 5x + 6 = 0$' là mệnh đề đúng.",
            answer: false,
            explain: "Phương trình chỉ có 2 nghiệm, không đúng với mọi số thực."
          }
        ]
      },
      {
        id: "b1-tf2",
        context: "Cho tam giác $ABC$. Xét hai mệnh đề: $P$: 'Tam giác $ABC$ có ba cạnh bằng nhau' và $Q$: 'Tam giác $ABC$ có ba góc bằng nhau'.",
        statements: [
          {
            text: "Mệnh đề kéo theo $P \\Rightarrow Q$ là một mệnh đề đúng.",
            answer: true,
            explain: "Tam giác có 3 cạnh bằng nhau là tam giác đều, do đó cả 3 góc bằng nhau (đều bằng $60^\\circ$). Khẳng định này đúng."
          },
          {
            text: "Mệnh đề đảo $Q \\Rightarrow P$ là một mệnh đề sai.",
            answer: false,
            explain: "Tam giác có 3 góc bằng nhau thì tam giác đó đều, suy ra 3 cạnh bằng nhau. Do đó mệnh đề đảo $Q \\Rightarrow P$ là mệnh đề ĐÚNG, phát biểu cho rằng sai là nhận định sai."
          },
          {
            text: "Khẳng định '$P$ là điều kiện cần và đủ để có $Q$' là đúng.",
            answer: true,
            explain: "Vì cả hai mệnh đề $P \\Rightarrow Q$ và $Q \\Rightarrow P$ đều đúng nên $P \\Leftrightarrow Q$. Do đó $P$ là điều kiện cần và đủ để có $Q$."
          },
          {
            text: "Phủ định của mệnh đề $P$ là 'Tam giác $ABC$ có ba cạnh đôi một khác nhau'.",
            answer: false,
            explain: "Phủ định của 'ba cạnh bằng nhau' là 'có ít nhất hai cạnh có độ dài khác nhau', không bắt buộc cả ba cạnh phải đôi một khác nhau."
          }
        ]
      }
    ],
    essay: [
      {
        id: "b1-es1",
        q: "Tìm mệnh đề phủ định của mệnh đề: 'Mọi hình vuông đều là hình chữ nhật'.",
        answer: "Có ít nhất một hình vuông không phải là hình chữ nhật",
        explain: "Phủ định của mệnh đề 'Mọi $A$ đều là $B$' là 'Tồn tại ít nhất một $A$ không phải là $B$'."
      },
      {
        id: "b1-es2",
        q: "Trong các câu sau, có bao nhiêu câu là mệnh đề toán học?\n(1) Năm 2026 là năm nhuận.\n(2) Số 31 là số nguyên tố.\n(3) Hãy giải phương trình này cẩn thận!\n(4) Bất đẳng thức $x^2 - 2x + 5 > 0$ đúng với mọi số thực $x$.\n(5) Bầu trời hôm nay nhiều mây quá!",
        answer: "3",
        explain: "Các câu (1), (2), (4) là mệnh đề toán học vì là câu khẳng định có tính đúng/sai xác định. Câu (3) là câu cầu khiến/mệnh lệnh, câu (5) là câu cảm thán nên không phải mệnh đề."
      },
      {
        id: "b1-es3",
        q: "Có bao nhiêu số nguyên $x \\in [-5; 5]$ để mệnh đề chứa biến $P(x)$: '$x^2 - 9 \\le 0$' trở thành một mệnh đề đúng?",
        answer: "7",
        explain: "Giải bất phương trình: $x^2 - 9 \\le 0 \\Leftrightarrow -3 \\le x \\le 3$. Các giá trị nguyên thỏa mãn trên đoạn $[-5; 5]$ là: $-3, -2, -1, 0, 1, 2, 3$. Có tất cả 7 giá trị nguyên."
      }
    ]
  },

  "bai-02": {
    tf: [
      {
        id: "b2-tf1",
        context: "Cho hai tập hợp $A = [-3; 4)$ và $B = (0; 6]$.",
        statements: [
          {
            text: "Giao của hai tập hợp là $A \\cap B = (0; 4)$.",
            answer: true,
            explain: "Phần khoảng giao nhau của $[-3; 4)$ và $(0; 6]$ là $(0; 4)$."
          },
          {
            text: "Hợp của hai tập hợp là $A \\cup B = [-3; 6]$.",
            answer: true,
            explain: "Khoảng bao phủ liên tục từ -3 đến 6: $[-3; 6]$."
          },
          {
            text: "Hiệu $A \\setminus B = [-3; 0)$.",
            answer: false,
            explain: "$A \\setminus B = [-3; 0]$ vì số 0 thuộc $A$ nhưng không thuộc $B$ (tại $B$ là ngoặc tròn $(0$). Phát biểu là $[-3; 0)$ là sai."
          },
          {
            text: "Tập hợp $A$ có chứa đúng 7 số nguyên.",
            answer: true,
            explain: "Các số nguyên trong $[-3; 4)$ là $-3, -2, -1, 0, 1, 2, 3$ (tổng cộng 7 số nguyên)."
          }
        ]
      },
      {
        id: "b2-tf2",
        context: "Cho hai tập hợp $X = \\{x \\in \\mathbb{Z} \\mid (2x^2 - 5x + 2)(x^2 - 9) = 0\\}$ và $Y = \\{x \\in \\mathbb{N} \\mid x^2 \\le 16\\}$.",
        statements: [
          {
            text: "Tập hợp $X$ có đúng 4 phần tử.",
            answer: false,
            explain: "Phương trình $(2x^2 - 5x + 2)(x^2 - 9) = 0$ có các nghiệm là $x = \\frac{1}{2}, x = 2, x = 3, x = -3$. Vì $x \\in \\mathbb{Z}$ nên ta loại $x = \\frac{1}{2}$. Vậy $X = \\{-3; 2; 3\\}$ chỉ có 3 phần tử."
          },
          {
            text: "Tập hợp $Y$ được viết dưới dạng liệt kê là $Y = \\{0; 1; 2; 3; 4\\}$.",
            answer: true,
            explain: "Vì $x \\in \\mathbb{N}$ và $x^2 \\le 16 \\Leftrightarrow 0 \\le x \\le 4$, các số tự nhiên thỏa mãn là $0, 1, 2, 3, 4$."
          },
          {
            text: "Giao của hai tập hợp là $X \\cap Y = \\{2; 3\\}$.",
            answer: true,
            explain: "Các phần tử chung giữa $X = \\{-3; 2; 3\\}$ và $Y = \\{0; 1; 2; 3; 4\\}$ là $2$ và $3$."
          },
          {
            text: "Số tập hợp con của tập hợp $X \\cap Y$ bằng 4.",
            answer: true,
            explain: "Tập hợp $X \\cap Y$ có 2 phần tử, do đó số tập hợp con là $2^2 = 4$ (gồm $\\emptyset, \\{2\\}, \\{3\\}, \\{2; 3\\}$)."
          }
        ]
      }
    ],
    essay: [
      {
        id: "b2-es1",
        q: "Cho tập hợp $A = \\{x \\in \\mathbb{Q} \\mid (2x^2 - 3x + 1)(x^2 - 2) = 0\\}$. Hỏi tập hợp $A$ có bao nhiêu phần tử?",
        answer: "2",
        explain: "Phương trình $(2x^2 - 3x + 1)(x^2 - 2) = 0 \\Leftrightarrow x \\in \\{1; \\frac{1}{2}; \\sqrt{2}; -\\sqrt{2}\\}$. Vì điều kiện $x \\in \\mathbb{Q}$ (số hữu tỉ) nên chỉ nhận $x = 1$ và $x = \\frac{1}{2}$ (hai nghiệm $\\pm\\sqrt{2}$ là số vô tỉ, không thuộc $\\mathbb{Q}$). Vậy tập hợp $A = \\{1; \\frac{1}{2}\\}$ có đúng 2 phần tử."
      },
      {
        id: "b2-es2",
        q: "Lớp 10A có 45 học sinh. Trong đó có 25 bạn đăng kí tham gia câu lạc bộ Bóng đá, 23 bạn tham gia câu lạc bộ Cầu lông, và 11 bạn tham gia cả hai câu lạc bộ. Hỏi lớp 10A có bao nhiêu bạn không tham gia câu lạc bộ nào trong hai câu lạc bộ trên?",
        answer: "8",
        explain: "Số bạn tham gia ít nhất một câu lạc bộ là: $n(B \\cup C) = n(B) + n(C) - n(B \\cap C) = 25 + 23 - 11 = 37$ học sinh. Số bạn không tham gia câu lạc bộ nào là: $45 - 37 = 8$ học sinh."
      },
      {
        id: "b2-es3",
        q: "Có bao nhiêu giá trị nguyên của tham số $m \\in [-5; 5]$ để hai tập hợp $A = [-2; 3]$ và $B = (m; m + 4)$ có giao khác rỗng ($A \\cap B \\ne \\emptyset$)?",
        answer: "8",
        explain: "Hai tập hợp $A = [-2; 3]$ và $B = (m; m + 4)$ giao nhau khác rỗng khi và chỉ khi: $\\begin{cases} m < 3 \\\\ m + 4 > -2 \\end{cases} \\Leftrightarrow \\begin{cases} m < 3 \\\\ m > -6 \\end{cases} \\Leftrightarrow -6 < m < 3$. Với điều kiện $m \\in \\mathbb{Z}$ và $m \\in [-5; 5]$, ta nhận các giá trị $m \\in \\{-5; -4; -3; -2; -1; 0; 1; 2\\}$. Tổng cộng có 8 giá trị nguyên."
      }
    ]
  },

  "bai-03": {
    tf: [
      {
        id: "b3-tf1",
        context: "Cho bất phương trình bậc nhất hai ẩn $2x + 3y - 6 \\le 0$.",
        statements: [
          {
            text: "Đường thẳng biên $2x + 3y - 6 = 0$ đi qua hai điểm $A(3; 0)$ và $B(0; 2)$.",
            answer: true,
            explain: "Thay $(3; 0)$: $2(3) + 3(0) - 6 = 0$; thay $(0; 2)$: $2(0) + 3(2) - 6 = 0$. Cả hai điểm đều thuộc đường thẳng."
          },
          {
            text: "Gốc toạ độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình.",
            answer: true,
            explain: "Thay $(0; 0)$: $2(0) + 3(0) - 6 = -6 \\le 0$ (thoả mãn)."
          },
          {
            text: "Điểm $M(2; 1)$ thuộc miền nghiệm của bất phương trình.",
            answer: false,
            explain: "Thay $(2; 1)$: $2(2) + 3(1) - 6 = 4 + 3 - 6 = 1 > 0$ (không thoả mãn BPT)."
          },
          {
            text: "Miền nghiệm của bất phương trình là nửa mặt phẳng bờ $d: 2x + 3y - 6 = 0$ chứa gốc toạ độ $O(0; 0)$, kể cả bờ $d$.",
            answer: true,
            explain: "Vì dấu của BPT là '$\\le$' (có dấu bằng) nên miền nghiệm bao gồm cả các điểm nằm trên đường thẳng biên $d$."
          }
        ]
      },
      {
        id: "b3-tf2",
        context: "Cho bất phương trình bậc nhất hai ẩn $\\Delta: 3x - 2y + 6 > 0$.",
        statements: [
          {
            text: "Bất phương trình $\\Delta$ không phải là bất phương trình bậc nhất hai ẩn vì hệ số của $y$ là số âm.",
            answer: false,
            explain: "Hệ số $a, b$ chỉ cần không đồng thời bằng 0 và nhận giá trị thực tùy ý. Bất phương trình $3x - 2y + 6 > 0$ có $a = 3 \\ne 0, b = -2 \\ne 0$ nên là BPT bậc nhất hai ẩn."
          },
          {
            text: "Điểm $N(-2; 0)$ thuộc đường thẳng biên nhưng không thuộc miền nghiệm của bất phương trình $\\Delta$.",
            answer: true,
            explain: "Thay $N(-2; 0)$ vào biểu thức: $3(-2) - 2(0) + 6 = 0$. Điểm $N$ nằm trên bờ $3x - 2y + 6 = 0$. Tuy nhiên do BPT là dấu ngặt '$>$' (không có dấu bằng) nên điểm trên bờ không thuộc miền nghiệm."
          },
          {
            text: "Điểm $P(1; 2)$ thuộc miền nghiệm của bất phương trình $\\Delta$.",
            answer: true,
            explain: "Thay $P(1; 2)$ vào vế trái: $3(1) - 2(2) + 6 = 3 - 4 + 6 = 5 > 0$ (thoả mãn)."
          },
          {
            text: "Đường thẳng biên $3x - 2y + 6 = 0$ khi biểu diễn miền nghiệm của $\\Delta$ trên mặt phẳng toạ độ được vẽ bằng nét liền.",
            answer: false,
            explain: "Vì bất phương trình mang dấu ngặt '$>$' nên đường thẳng biên phải được vẽ bằng nét đứt."
          }
        ]
      }
    ],
    essay: [
      {
        id: "b3-es1",
        q: "Xác định toạ độ giao điểm của đường thẳng biên $3x - 4y = 12$ với trục hoành $Ox$.",
        answer: "(4; 0)",
        explain: "Điểm thuộc trục hoành $Ox$ có tung độ $y = 0$. Thay $y = 0$ vào phương trình: $3x - 4(0) = 12 \\Leftrightarrow 3x = 12 \\Leftrightarrow x = 4$. Vậy toạ độ giao điểm là $(4; 0)$."
      },
      {
        id: "b3-es2",
        q: "Có bao nhiêu cặp số nguyên không âm $(x; y)$ thỏa mãn bất phương trình $3x + 4y \\le 12$?",
        answer: "11",
        explain: "Vì $x, y \\in \\mathbb{N}$ nên $x, y \\ge 0$.\\n• Với $y = 0$: $3x \\le 12 \\Rightarrow x \\in \\{0; 1; 2; 3; 4\\}$ (5 cặp).\\n• Với $y = 1$: $3x + 4 \\le 12 \\Rightarrow 3x \\le 8 \\Rightarrow x \\in \\{0; 1; 2\\}$ (3 cặp).\\n• Với $y = 2$: $3x + 8 \\le 12 \\Rightarrow 3x \\le 4 \\Rightarrow x \\in \\{0; 1\\}$ (2 cặp).\\n• Với $y = 3$: $3x + 12 \\le 12 \\Rightarrow 3x \\le 0 \\Rightarrow x = 0$ (1 cặp).\\n• Với $y \\ge 4$: $3x + 4y \\ge 16 > 12$ (không có nghiệm).\\nTổng cộng có: $5 + 3 + 2 + 1 = 11$ cặp số nguyên không âm."
      },
      {
        id: "b3-es3",
        q: "Một người thợ làm hai loại bánh A và B. Một chiếc bánh A cần 100g bột; một chiếc bánh B cần 150g bột. Người thợ hiện có 1,2 kg bột. Gọi $x, y$ lần lượt là số bánh loại A và B người đó làm ($x, y \\in \\mathbb{N}$). Viết bất phương trình rút gọn thể hiện giới hạn lượng bột có thể dùng dưới dạng $ax + by \\le c$ (với $a, b, c$ là các số nguyên dương nguyên tố cùng nhau).",
        answer: "2x + 3y <= 24",
        explain: "Đổi 1,2 kg = 1200g bột. Tổng lượng bột cần cho $x$ bánh A và $y$ bánh B là $100x + 150y$ (g). Bất phương trình giới hạn: $100x + 150y \\le 1200$. Chia cả hai vế cho 50 ta được bất phương trình tối giản: $2x + 3y \\le 24$."
      }
    ]
  },

  "bai-06": {
    tf: [
      {
        id: "b6-tf1",
        context: "Cho tam giác $ABC$ có ba cạnh $a = 7, b = 8, c = 5$.",
        statements: [
          {
            text: "Nửa chu vi của tam giác $ABC$ bằng $p = 10$.",
            answer: true,
            explain: "$p = \\frac{7 + 8 + 5}{2} = \\frac{20}{2} = 10$."
          },
          {
            text: "Góc $A$ của tam giác có $\\cos A = \\frac{1}{2}$ và $\\widehat{A} = 60^\\circ$.",
            answer: true,
            explain: "$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc} = \\frac{64 + 25 - 49}{2 \\cdot 8 \\cdot 5} = \\frac{40}{80} = \\frac{1}{2} \\Rightarrow \\widehat{A} = 60^\\circ$."
          },
          {
            text: "Diện tích của tam giác $ABC$ bằng $10\\sqrt{3}$.",
            answer: true,
            explain: "$S = \\frac{1}{2}bc \\sin A = \\frac{1}{2} \\cdot 8 \\cdot 5 \\cdot \\sin 60^\\circ = 20 \\cdot \\frac{\\sqrt{3}}{2} = 10\\sqrt{3}$."
          },
          {
            text: "Bán kính đường tròn nội tiếp $r$ bằng $2\\sqrt{3}$.",
            answer: false,
            explain: "$r = \\frac{S}{p} = \\frac{10\\sqrt{3}}{10} = \\sqrt{3}$."
          }
        ]
      }
    ],
    essay: [
      {
        id: "b6-es1",
        q: "Cho tam giác $ABC$ có $a = 6, \\widehat{A} = 30^\\circ$. Tính bán kính đường tròn ngoại tiếp $R$ của tam giác.",
        answer: "6",
        explain: "Theo định lí sin: $\\frac{a}{\\sin A} = 2R \\Rightarrow 2R = \\frac{6}{\\sin 30^\\circ} = \\frac{6}{1/2} = 12 \\Rightarrow R = 6$."
      }
    ]
  },

  "bai-11": {
    tf: [
      {
        id: "b11-tf1",
        context: "Trong mặt phẳng toạ độ $Oxy$, cho ba điểm $A(1; 2), B(-2; 6), C(9; 8)$.",
        statements: [
          {
            text: "Vectơ $\\vec{AB} = (-3; 4)$ và độ dài $|\\vec{AB}| = 5$.",
            answer: true,
            explain: "$\\vec{AB} = (-2-1; 6-2) = (-3; 4) \\Rightarrow |\\vec{AB}| = \\sqrt{(-3)^2 + 4^2} = 5$."
          },
          {
            text: "Vectơ $\\vec{AC} = (8; 6)$.",
            answer: true,
            explain: "$\\vec{AC} = (9-1; 8-2) = (8; 6)$."
          },
          {
            text: "Tích vô hướng $\\vec{AB} \\cdot \\vec{AC} = 0$.",
            answer: true,
            explain: "$\\vec{AB} \\cdot \\vec{AC} = (-3)(8) + 4(6) = -24 + 24 = 0$."
          },
          {
            text: "Tam giác $ABC$ là tam giác nhọn.",
            answer: false,
            explain: "Vì $\\vec{AB} \\cdot \\vec{AC} = 0 \\Rightarrow AB \\perp AC$, tam giác $ABC$ vuông tại $A$."
          }
        ]
      }
    ],
    essay: [
      {
        id: "b11-es1",
        q: "Tìm toạ độ trung điểm $M$ của đoạn thẳng nối $A(2; 4)$ và $B(-4; 8)$.",
        answer: "(-1; 6)",
        explain: "$x_M = \\frac{2 + (-4)}{2} = -1; y_M = \\frac{4 + 8}{2} = 6 \\Rightarrow M(-1; 6)$."
      }
    ]
  },

  "bai-16": {
    tf: [
      {
        id: "b16-tf1",
        context: "Cho hàm số bậc hai $y = f(x) = x^2 - 4x + 3$.",
        statements: [
          {
            text: "Đồ thị hàm số là parabol có bề lõm quay lên trên do hệ số $a = 1 > 0$.",
            answer: true,
            explain: "Hệ số $a = 1 > 0$ nên parabol có bề lõm quay lên."
          },
          {
            text: "Đỉnh của parabol có toạ độ là $I(2; -1)$.",
            answer: true,
            explain: "$x_I = -\\frac{-4}{2} = 2; y_I = 2^2 - 4(2) + 3 = -1$."
          },
          {
            text: "Hàm số đồng biến trên khoảng $(-\\infty; 2)$.",
            answer: false,
            explain: "Hàm số nghịch biến trên $(-\\infty; 2)$ và đồng biến trên $(2; +\\infty)$."
          },
          {
            text: "Giá trị nhỏ nhất của hàm số trên $\\mathbb{R}$ bằng $-1$.",
            answer: true,
            explain: "Vì parabol đạt cực tiểu tại đỉnh $I(2; -1)$ nên $\\min y = -1$."
          }
        ]
      }
    ],
    essay: [
      {
        id: "b16-es1",
        q: "Tìm toạ độ giao điểm của parabol $y = x^2 - 4x + 3$ với trục tung $Oy$.",
        answer: "(0; 3)",
        explain: "Cho $x = 0 \\Rightarrow y = 3$. Giao điểm là $(0; 3)$."
      }
    ]
  },

  "bai-24": {
    tf: [
      {
        id: "b24-tf1",
        context: "Một nhóm gồm 6 bạn nam và 4 bạn nữ.",
        statements: [
          {
            text: "Số cách chọn 3 bạn bất kì đi dự đại hội là $C_{10}^3 = 120$.",
            answer: true,
            explain: "Chọn 3 trong tổng số 10 bạn là $C_{10}^3 = 120$ cách."
          },
          {
            text: "Số cách chọn 2 bạn nam và 1 bạn nữ là $C_6^2 \\times C_4^1 = 60$.",
            answer: true,
            explain: "$C_6^2 \\times C_4^1 = 15 \\times 4 = 60$ cách."
          },
          {
            text: "Số cách xếp 4 bạn nữ ngồi vào một bàn dài 4 chỗ là $4! = 24$.",
            answer: true,
            explain: "Hoán vị của 4 phần tử: $P_4 = 4! = 24$."
          },
          {
            text: "Số tập con có 2 phần tử của một tập hợp có 6 phần tử là $A_6^2 = 30$.",
            answer: false,
            explain: "Số tập con 2 phần tử là tổ hợp $C_6^2 = 15$ (không kể thứ tự)."
          }
        ]
      }
    ],
    essay: [
      {
        id: "b24-es1",
        q: "Tính giá trị của biểu thức $P = \\frac{A_5^3}{C_5^3}$.",
        answer: "6",
        explain: "$A_5^3 = \\frac{5!}{2!} = 60; C_5^3 = \\frac{5!}{3!2!} = 10 \\Rightarrow P = \\frac{60}{10} = 6 = 3!$."
      }
    ]
  },

  "bai-26": {
    tf: [
      {
        id: "b26-tf1",
        context: "Gieo đồng thời hai con xúc xắc cân đối và đồng chất.",
        statements: [
          {
            text: "Số phần tử của không gian mẫu là $n(\\Omega) = 36$.",
            answer: true,
            explain: "Mỗi con xúc xắc có 6 mặt, gieo 2 con có $6 \\times 6 = 36$ kết quả."
          },
          {
            text: "Xác suất để xuất hiện hai mặt có số chấm bằng nhau là $\\frac{1}{6}$.",
            answer: true,
            explain: "Có 6 cặp: $(1,1), (2,2), (3,3), (4,4), (5,5), (6,6) \\Rightarrow P = \\frac{6}{36} = \\frac{1}{6}$."
          },
          {
            text: "Xác suất để tổng số chấm trên hai con xúc xắc bằng 7 là $\\frac{1}{6}$.",
            answer: true,
            explain: "Các cặp có tổng bằng 7: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$ có 6 cặp $\\Rightarrow P = \\frac{6}{36} = \\frac{1}{6}$."
          },
          {
            text: "Biến cố 'tổng số chấm trên hai mặt lớn hơn 12' là biến cố chắc chắn.",
            answer: false,
            explain: "Tổng lớn nhất là $6 + 6 = 12$, nên tổng lớn hơn 12 là biến cố không thể (xác suất bằng 0)."
          }
        ]
      }
    ],
    essay: [
      {
        id: "b26-es1",
        q: "Một lớp có 20 học sinh nam và 15 học sinh nữ. Chọn ngẫu nhiên một bạn làm lớp trưởng. Tính xác suất để chọn được một bạn nữ (viết dưới dạng phân số tối giản).",
        answer: "3/7",
        explain: "Tổng số học sinh là $20 + 15 = 35$. Xác suất chọn bạn nữ: $P = \\frac{15}{35} = \\frac{3}{7}$."
      }
    ]
  }
};

export function getTF(lessonId: string): TFQuestion[] {
  return EXTRA_BANK[lessonId]?.tf ?? [
    {
      id: `${lessonId}-tf-gen`,
      context: `Xét các mệnh đề và tính chất toán học trọng tâm của bài học.`,
      statements: [
        {
          text: "Định nghĩa và công thức toán học cần áp dụng đúng điều kiện xác định.",
          answer: true,
          explain: "Luôn đặt điều kiện cho mẫu số khác 0 và biểu thức dưới dấu căn bậc chẵn không âm."
        },
        {
          text: "Mọi biểu thức toán học đều có thể giản ước mà không cần xét trường hợp chia cho 0.",
          answer: false,
          explain: "Phép chia chỉ thực hiện được khi mẫu số khác 0."
        },
        {
          text: "Việc thử lại nghiệm vào phương trình ban đầu giúp loại bỏ nghiệm ngoại lai.",
          answer: true,
          explain: "Khi biến đổi hệ quả (bình phương hai vế), bắt buộc phải thử lại nghiệm."
        },
        {
          text: "Tính đúng đắn của một khẳng định toán học được chứng minh bằng lập luận logic chặt chẽ.",
          answer: true,
          explain: "Toán học đòi hỏi tính logic và suy luận chứng minh suy rộng."
        }
      ]
    }
  ];
}

export function getEssay(lessonId: string): EssayQuestion[] {
  return EXTRA_BANK[lessonId]?.essay ?? [
    {
      id: `${lessonId}-es-gen`,
      q: "Nêu điều kiện cốt lõi để áp dụng công thức của bài học.",
      answer: "Biểu thức có nghĩa và thoả mãn điều kiện giả thiết",
      explain: "Nắm vững giả thiết và phạm vi áp dụng của từng định lí trong SGK."
    }
  ];
}
