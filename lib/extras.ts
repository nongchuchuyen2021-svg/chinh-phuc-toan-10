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

  "bai-04": {
    tf: [
      {
        id: "b4-tf1",
        context: "Cho hệ bất phương trình bậc nhất hai ẩn $(I): \\begin{cases} x + y - 2 \\le 0 \\\\ 2x - 3y + 6 > 0 \\\\ x \\ge 0 \\end{cases}$.",
        statements: [
          {
            text: "Điểm $O(0; 0)$ thuộc miền nghiệm của hệ bất phương trình $(I)$.",
            answer: true,
            explain: "Thay $(0; 0)$ vào từng BPT: $0 + 0 - 2 = -2 \\le 0$ (đúng), $2(0) - 3(0) + 6 = 6 > 0$ (đúng), $0 \\ge 0$ (đúng). Do đó $O(0; 0)$ thuộc miền nghiệm."
          },
          {
            text: "Điểm $M(1; 1)$ thuộc miền nghiệm của hệ bất phương trình $(I)$.",
            answer: true,
            explain: "Thay $(1; 1)$: $1 + 1 - 2 = 0 \\le 0$ (đúng), $2(1) - 3(1) + 6 = 5 > 0$ (đúng), $1 \\ge 0$ (đúng). Cả 3 BPT đều thỏa mãn."
          },
          {
            text: "Điểm $N(0; 2)$ thuộc miền nghiệm của hệ bất phương trình $(I)$.",
            answer: false,
            explain: "Thay $(0; 2)$ vào BPT thứ hai: $2(0) - 3(2) + 6 = 0 \\not> 0$ (không thoả mãn vì bất phương trình mang dấu ngặt '$>$')."
          },
          {
            text: "Miền nghiệm của hệ $(I)$ trên mặt phẳng toạ độ $Oxy$ là một miền tam giác bao gồm cả 3 cạnh biên.",
            answer: false,
            explain: "Vì bất phương trình $2x - 3y + 6 > 0$ mang dấu ngặt '$>$' nên cạnh nằm trên đường thẳng này không thuộc miền nghiệm (được biểu diễn bằng nét đứt)."
          }
        ]
      },
      {
        id: "b4-tf2",
        context: "Cho miền nghiệm của hệ bất phương trình $\\begin{cases} x + 2y \\le 8 \\\\ 2x + y \\le 7 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$ là miền tứ giác $OABC$ với $O(0; 0), A(0; 4), B(2; 3), C(3,5; 0)$. Xét biểu thức $F(x; y) = 3x + 2y$.",
        statements: [
          {
            text: "Điểm $B(2; 3)$ là giao điểm của hai đường thẳng $x + 2y = 8$ và $2x + y = 7$.",
            answer: true,
            explain: "Giải hệ $\\begin{cases} x + 2y = 8 \\\\ 2x + y = 7 \\end{cases} \\Leftrightarrow \\begin{cases} 2x + 4y = 16 \\\\ 2x + y = 7 \\end{cases} \\Leftrightarrow \\begin{cases} 3y = 9 \\\\ x = 8 - 2y \\end{cases} \\Leftrightarrow \\begin{cases} x = 2 \\\\ y = 3 \\end{cases}$."
          },
          {
            text: "Giá trị của biểu thức $F(x; y)$ tại đỉnh $A(0; 4)$ bằng 8.",
            answer: true,
            explain: "$F(A) = F(0; 4) = 3(0) + 2(4) = 8$."
          },
          {
            text: "Giá trị lớn nhất của biểu thức $F(x; y)$ trên miền tứ giác $OABC$ bằng 12.",
            answer: true,
            explain: "Tính giá trị tại 4 đỉnh: $F(O) = 0$, $F(A) = 8$, $F(B) = 3(2) + 2(3) = 12$, $F(C) = 3(3,5) + 2(0) = 10,5$. Giá trị lớn nhất là 12 đạt tại đỉnh $B(2; 3)$."
          },
          {
            text: "Biểu thức $F(x; y)$ đạt giá trị nhỏ nhất tại điểm $C(3,5; 0)$.",
            answer: false,
            explain: "Giá trị nhỏ nhất của $F(x; y)$ trên miền tứ giác là $F(O) = 0$ tại gốc toạ độ $O(0; 0)$ chứ không phải tại điểm $C$ ($F(C) = 10,5$)."
          }
        ]
      }
    ],
    essay: [
      {
        id: "b4-es1",
        q: "Cho hệ bất phương trình $\\begin{cases} x + y \\le 4 \\\\ 2x + y \\le 6 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$. Tìm toạ độ giao điểm của hai đường thẳng biên $x + y = 4$ và $2x + y = 6$.",
        answer: "(2; 2)",
        explain: "Trừ vế theo vế hai phương trình: $(2x + y) - (x + y) = 6 - 4 \\Leftrightarrow x = 2$. Thay $x = 2$ vào phương trình thứ nhất: $2 + y = 4 \\Leftrightarrow y = 2$. Vậy toạ độ giao điểm là $(2; 2)$."
      },
      {
        id: "b4-es2",
        q: "Cho miền nghiệm của một hệ bất phương trình là miền đa giác có toạ độ các đỉnh $O(0; 0), A(0; 5), B(3; 4), C(5; 0)$. Tìm giá trị lớn nhất của biểu thức $F(x; y) = 2x + 5y$ trên miền đa giác này.",
        answer: "26",
        explain: "Tính giá trị của $F(x; y)$ tại 4 đỉnh:\\n• $F(O) = 2(0) + 5(0) = 0$\\n• $F(A) = 2(0) + 5(5) = 25$\\n• $F(B) = 2(3) + 5(4) = 6 + 20 = 26$\\n• $F(C) = 2(5) + 5(0) = 10$\\nTheo định lí cực trị trên miền đa giác, giá trị lớn nhất của $F(x; y)$ bằng 26 đạt tại đỉnh $B(3; 4)$."
      },
      {
        id: "b4-es3",
        q: "Trong bài toán kinh doanh máy tính ở phần Vận dụng SGK, công ty nhập $x$ máy loại A (lãi 2,5 triệu/máy) và $y$ máy loại B (lãi 4 triệu/máy) thoả mãn hệ $\\begin{cases} x \\ge 0, y \\ge 0 \\\\ x + y \\le 250 \\\\ x + 2y \\le 400 \\end{cases}$. Lợi nhuận lớn nhất mà công ty thu được là bao nhiêu triệu đồng?",
        answer: "850",
        explain: "Miền nghiệm là tứ giác có các đỉnh $O(0; 0), M(0; 200), N(100; 150), P(250; 0)$.\\nTính lợi nhuận $F(x; y) = 2,5x + 4y$:\\n• $F(O) = 0$\\n• $F(M) = 4(200) = 800$\\n• $F(N) = 2,5(100) + 4(150) = 250 + 600 = 850$\\n• $F(P) = 2,5(250) = 625$\\nVậy lợi nhuận lớn nhất bằng 850 triệu đồng khi nhập 100 máy loại A và 150 máy loại B."
      }
    ]
  },

  "bai-05": {
    tf: [
      {
        id: "b5-tf1",
        context: "Cho góc $\\alpha$ thỏa mãn $90^\\circ < \\alpha < 180^\\circ$ và $\\sin\\alpha = \\frac{3}{5}$.",
        statements: [
          {
            text: "Góc $\\alpha$ là góc tù nên điểm biểu diễn $M$ của góc $\\alpha$ trên nửa đường tròn đơn vị có hoành độ âm ($x_0 < 0$).",
            answer: true,
            explain: "Vì $90^\\circ < \\alpha < 180^\\circ$, điểm $M$ nằm ở góc phần tư thứ II của hệ toạ độ Oxy nên hoành độ $x_0 = \\cos\\alpha < 0$."
          },
          {
            text: "Giá trị của $\\cos\\alpha$ bằng $\\frac{4}{5}$.",
            answer: false,
            explain: "Ta có $\\cos^2\\alpha = 1 - \\sin^2\\alpha = 1 - \\frac{9}{25} = \\frac{16}{25}$. Vì $\\alpha$ là góc tù nên $\\cos\\alpha = -\\sqrt{\\frac{16}{25}} = -\\frac{4}{5}$ chứ không thể bằng dương $\\frac{4}{5}$."
          },
          {
            text: "Giá trị của $\\tan\\alpha$ bằng $-\\frac{3}{4}$.",
            answer: true,
            explain: "$\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} = \\frac{3/5}{-4/5} = -\\frac{3}{4}$."
          },
          {
            text: "Giá trị của biểu thức $E = 2\\sin(180^\\circ - \\alpha) + 5\\cos(180^\\circ - \\alpha)$ bằng $\\frac{26}{5}$.",
            answer: true,
            explain: "Theo công thức hai góc bù nhau: $\\sin(180^\\circ - \\alpha) = \\sin\\alpha = \\frac{3}{5}$ và $\\cos(180^\\circ - \\alpha) = -\\cos\\alpha = -\\left(-\\frac{4}{5}\\right) = \\frac{4}{5}$. Do đó $E = 2\\left(\\frac{3}{5}\\right) + 5\\left(\\frac{4}{5}\\right) = \\frac{6}{5} + 4 = \\frac{26}{5}$ là mệnh đề ĐÚNG."
          }
        ]
      },
      {
        id: "b5-tf2",
        context: "Cho hai biểu thức lượng giác: $A = \\sin^2 10^\\circ + \\sin^2 20^\\circ + ... + \\sin^2 80^\\circ + \\sin^2 90^\\circ$ và $B = \\frac{\\tan 25^\\circ \\cdot \\tan 65^\\circ}{\\cos 120^\\circ}$.",
        statements: [
          {
            text: "Hai góc $25^\\circ$ và $65^\\circ$ là hai góc phụ nhau nên $\\tan 25^\\circ \\cdot \\tan 65^\\circ = 1$.",
            answer: true,
            explain: "Vì $25^\\circ + 65^\\circ = 90^\\circ$ nên $\\tan 65^\\circ = \\cot 25^\\circ \\implies \\tan 25^\\circ \\cdot \\cot 25^\\circ = 1$."
          },
          {
            text: "Giá trị của biểu thức $B$ bằng $2$.",
            answer: false,
            explain: "Ta có $\\cos 120^\\circ = -\\cos 60^\\circ = -\\frac{1}{2}$. Do đó $B = \\frac{1}{-\\frac{1}{2}} = -2$."
          },
          {
            text: "Trong biểu thức $A$, ta có $\\sin^2 80^\\circ = \\cos^2 10^\\circ$ và $\\sin^2 10^\\circ + \\sin^2 80^\\circ = 1$.",
            answer: true,
            explain: "Do $80^\\circ$ và $10^\\circ$ phụ nhau nên $\\sin 80^\\circ = \\cos 10^\\circ \\implies \\sin^2 10^\\circ + \\sin^2 80^\\circ = \\sin^2 10^\\circ + \\cos^2 10^\\circ = 1$."
          },
          {
            text: "Giá trị của biểu thức $A$ bằng $5$.",
            answer: true,
            explain: "Ghép 4 cặp góc phụ nhau: $(\\sin^2 10^\\circ + \\sin^2 80^\\circ) + (\\sin^2 20^\\circ + \\sin^2 70^\\circ) + (\\sin^2 30^\\circ + \\sin^2 60^\\circ) + (\\sin^2 40^\\circ + \\sin^2 50^\\circ) + \\sin^2 90^\\circ = 1 + 1 + 1 + 1 + 1^2 = 5$."
          }
        ]
      }
    ],
    essay: [
      {
        id: "b5-es1",
        q: "Cho góc $\\alpha$ thoả mãn $\\tan\\alpha = -2$. Tính giá trị của biểu thức $P = \\frac{4\\sin\\alpha + 5\\cos\\alpha}{2\\sin\\alpha - 3\\cos\\alpha}$. (Kết quả viết dưới dạng phân số tối giản a/b)",
        answer: "3/7",
        explain: "Vì $\\tan\\alpha = -2$ xác định nên $\\cos\\alpha \\ne 0$. Chia cả tử và mẫu của $P$ cho $\\cos\\alpha$ ta được: $P = \\frac{4\\tan\\alpha + 5}{2\\tan\\alpha - 3} = \\frac{4(-2) + 5}{2(-2) - 3} = \\frac{-8 + 5}{-4 - 3} = \\frac{-3}{-7} = \\frac{3}{7}$."
      },
      {
        id: "b5-es2",
        q: "Tính giá trị số của biểu thức: $S = \\cos^2 15^\\circ + \\cos^2 35^\\circ + \\cos^2 55^\\circ + \\cos^2 75^\\circ$.",
        answer: "2",
        explain: "Áp dụng quan hệ góc phụ nhau: $\\cos 75^\\circ = \\sin 15^\\circ$ và $\\cos 55^\\circ = \\sin 35^\\circ$. Khi đó: $S = (\\cos^2 15^\\circ + \\sin^2 15^\\circ) + (\\cos^2 35^\\circ + \\sin^2 35^\\circ) = 1 + 1 = 2$."
      },
      {
        id: "b5-es3",
        q: "Một tàu thuỷ di chuyển từ cảng A theo hướng lệch một góc $\\alpha = 135^\\circ$ so với hướng đông. Sau khi đi được $20\\sqrt{2}\\text{ km}$, khoảng cách từ tàu đến đường kinh tuyến chạy qua cảng A (khoảng cách lùi về phía tây) bằng bao nhiêu km?",
        answer: "20",
        explain: "Khoảng cách từ tàu đến đường kinh tuyến chạy qua cảng A theo phương ngang là độ dài hình chiếu trên trục hoành: $d = 20\\sqrt{2} \\cdot |\\cos 135^\\circ| = 20\\sqrt{2} \\cdot \\frac{\\sqrt{2}}{2} = 20\\text{ km}$."
      }
    ]
  },

  "bai-06": {
    tf: [
      {
        id: "b6-tf1",
        context: "Cho tam giác $ABC$ có ba cạnh lần lượt là $a = 13, b = 14, c = 15$.",
        statements: [
          {
            text: "Nửa chu vi của tam giác $ABC$ bằng $p = 21$.",
            answer: true,
            explain: "$p = \\frac{a + b + c}{2} = \\frac{13 + 14 + 15}{2} = \\frac{42}{2} = 21$."
          },
          {
            text: "Diện tích của tam giác $ABC$ tính theo công thức Heron bằng $S = 84$.",
            answer: true,
            explain: "Áp dụng công thức Heron: $S = \\sqrt{p(p-a)(p-b)(p-c)} = \\sqrt{21(21-13)(21-14)(21-15)} = \\sqrt{21 \\times 8 \\times 7 \\times 6} = \\sqrt{7056} = 84$."
          },
          {
            text: "Bán kính đường tròn nội tiếp $r = 4$ và bán kính đường tròn ngoại tiếp $R = 8.125$.",
            answer: true,
            explain: "• Bán kính nội tiếp: $r = \\frac{S}{p} = \\frac{84}{21} = 4$.\n• Bán kính ngoại tiếp: $R = \\frac{abc}{4S} = \\frac{13 \\times 14 \\times 15}{4 \\times 84} = \\frac{2730}{336} = \\frac{65}{8} = 8.125$."
          },
          {
            text: "Góc lớn nhất của tam giác $ABC$ là một góc tù.",
            answer: false,
            explain: "Góc lớn nhất đối diện cạnh lớn nhất $c = 15$: $\\cos C = \\frac{a^2 + b^2 - c^2}{2ab} = \\frac{13^2 + 14^2 - 15^2}{2 \\times 13 \\times 14} = \\frac{169 + 196 - 225}{364} = \\frac{140}{364} = \\frac{5}{13} > 0$. Do $\\cos C > 0$ nên góc $\\widehat{C}$ là góc nhọn. Vậy tam giác $ABC$ là tam giác nhọn, không có góc tù."
          }
        ]
      },
      {
        id: "b6-tf2",
        context: "Cho tam giác $ABC$ có hai cạnh $b = 6, c = 8$ và góc tù $\\widehat{A} = 120^\\circ$.",
        statements: [
          {
            text: "Độ dài cạnh $a$ bằng $2\\sqrt{37}$.",
            answer: true,
            explain: "Theo định lí Côsin: $a^2 = b^2 + c^2 - 2bc\\cos A = 6^2 + 8^2 - 2(6)(8)\\cos 120^\\circ = 36 + 64 - 96\\left(-\\frac{1}{2}\\right) = 100 + 48 = 148 \\implies a = \\sqrt{148} = 2\\sqrt{37}$."
          },
          {
            text: "Diện tích tam giác $ABC$ bằng $12\\sqrt{3}$.",
            answer: true,
            explain: "$S = \\frac{1}{2}bc\\sin A = \\frac{1}{2} \\cdot 6 \\cdot 8 \\cdot \\sin 120^\\circ = 24 \\cdot \\frac{\\sqrt{3}}{2} = 12\\sqrt{3}$."
          },
          {
            text: "Bán kính đường tròn ngoại tiếp $R$ bằng $\\frac{2\\sqrt{111}}{3}$.",
            answer: true,
            explain: "Theo định lí Sin: $R = \\frac{a}{2\\sin A} = \\frac{2\\sqrt{37}}{2 \\cdot \\frac{\\sqrt{3}}{2}} = \\frac{2\\sqrt{37}}{\\sqrt{3}} = \\frac{2\\sqrt{111}}{3}$."
          },
          {
            text: "Độ dài đường trung tuyến $m_a$ kẻ từ đỉnh $A$ bằng $\\sqrt{13}$.",
            answer: true,
            explain: "Công thức đường trung tuyến: $m_a^2 = \\frac{2(b^2+c^2)-a^2}{4} = \\frac{2(36+64)-148}{4} = \\frac{200-148}{4} = \\frac{52}{4} = 13 \\implies m_a = \\sqrt{13}$."
          }
        ]
      },
      {
        id: "b6-tf3",
        context: "Để đo chiều cao toà tháp truyền hình $CD = h$ (với $D$ là chân tháp trên mặt đất), hai quan sát viên đứng tại hai cọc tiêu $A$ và $B$ trên mặt đất cách nhau $40\\text{ m}$ thẳng hàng với $D$ ($B$ ở giữa $A$ và $D$). Sử dụng giác kế, người ta đo được góc nâng nhìn đỉnh tháp từ $A$ là $\\widehat{CAD} = 30^\\circ$ và từ $B$ là $\\widehat{CBD} = 60^\\circ$.",
        statements: [
          {
            text: "Góc ngắm giữa hai vị trí quan sát từ đỉnh tháp là $\\widehat{ACB} = 30^\\circ$.",
            answer: true,
            explain: "Góc ngoài của $\\triangle ABC$ tại đỉnh $B$ là $\\widehat{CBD} = \\widehat{CAD} + \\widehat{ACB} \\implies \\widehat{ACB} = 60^\\circ - 30^\\circ = 30^\\circ$."
          },
          {
            text: "Tam giác $ABC$ là tam giác cân tại $B$ và độ dài đoạn nghiêng $BC = 40\\text{ m}$.",
            answer: true,
            explain: "Vì $\\widehat{CAB} = 30^\\circ$ và $\\widehat{ACB} = 30^\\circ$ nên $\\triangle ABC$ cân tại $B$. Do đó $BC = AB = 40\\text{ m}$."
          },
          {
            text: "Chiều cao $h$ của ngọn tháp bằng $20\\sqrt{3}\\text{ m} \\approx 34.6\\text{ m}$.",
            answer: true,
            explain: "Trong tam giác vuông $BCD$: chiều cao tháp $h = CD = BC \\cdot \\sin 60^\\circ = 40 \\cdot \\frac{\\sqrt{3}}{2} = 20\\sqrt{3}\\text{ m} \\approx 34.64\\text{ m}$."
          },
          {
            text: "Khoảng cách từ cọc tiêu $A$ đến chân tháp $D$ bằng $80\\text{ m}$.",
            answer: false,
            explain: "Trong $\\triangle BCD$ vuông tại $D$: $BD = BC \\cdot \\cos 60^\\circ = 40 \\cdot 0.5 = 20\\text{ m}$. Suy ra khoảng cách $AD = AB + BD = 40 + 20 = 60\\text{ m} \\ne 80\\text{ m}$."
          }
        ]
      },
      {
        id: "b6-tf4",
        context: "Từ trung tâm cứu hộ bờ biển $O$, hai tàu cứu hộ $A$ và $B$ nhận lệnh xuất phát đồng thời lúc 6 giờ sáng. Tàu $A$ chạy theo hướng đông với vận tốc $30\\text{ km/h}$. Tàu $B$ chạy theo hướng đông - bắc tạo với hướng tàu $A$ một góc $60^\\circ$ với vận tốc $40\\text{ km/h}$.",
        statements: [
          {
            text: "Sau 2 giờ di chuyển, quãng đường tàu $A$ và tàu $B$ đi được lần lượt là $OA = 60\\text{ km}$ và $OB = 80\\text{ km}$.",
            answer: true,
            explain: "$OA = 30 \\times 2 = 60\\text{ km}$ và $OB = 40 \\times 2 = 80\\text{ km}$."
          },
          {
            text: "Sau 2 giờ, khoảng cách giữa hai tàu $A$ và $B$ là $20\\sqrt{13}\\text{ km} \\approx 72.1\\text{ km}$.",
            answer: true,
            explain: "Áp dụng định lí Côsin trong $\\triangle OAB$:\n$AB^2 = OA^2 + OB^2 - 2 \\cdot OA \\cdot OB \\cdot \\cos 60^\\circ = 60^2 + 80^2 - 2(60)(80)(0.5) = 3600 + 6400 - 4800 = 5200$.\nSuy ra $AB = \\sqrt{5200} = 20\\sqrt{13} \\approx 72.11\\text{ km}$."
          },
          {
            text: "Diện tích vùng biển tam giác $OAB$ được bao quát bởi hai tàu sau 2 giờ bằng $1200\\sqrt{3}\\text{ km}^2$.",
            answer: true,
            explain: "$S = \\frac{1}{2} \\cdot OA \\cdot OB \\cdot \\sin 60^\\circ = \\frac{1}{2} \\cdot 60 \\cdot 80 \\cdot \\frac{\\sqrt{3}}{2} = 1200\\sqrt{3}\\text{ km}^2$."
          },
          {
            text: "Một máy bay tuần tra có thiết bị định vị phát hiện sóng trong bán kính tối đa $70\\text{ km}$ đặt tại tàu $A$ vẫn có thể quét tới vị trí tàu $B$ sau 2 giờ.",
            answer: false,
            explain: "Khoảng cách thực tế giữa hai tàu sau 2 giờ là $AB \\approx 72.11\\text{ km} > 70\\text{ km}$. Do đó tàu $B$ đã nằm ngoài tầm quét $70\\text{ km}$ của thiết bị định vị trên tàu $A$."
          }
        ]
      }
    ],
    essay: [
      {
        id: "b6-es1",
        q: "Cho tam giác $ABC$ có ba cạnh $a = 4, b = 5, c = 6$. Tính côsin của góc lớn nhất trong tam giác $ABC$. (Kết quả viết dưới dạng phân số tối giản dạng a/b)",
        answer: "1/8",
        explain: "Góc lớn nhất trong tam giác là góc đối diện cạnh lớn nhất ($c = 6$, tức góc $\\widehat{C}$).\nÁp dụng hệ quả định lí Côsin:\n$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab} = \\frac{4^2 + 5^2 - 6^2}{2 \\cdot 4 \\cdot 5} = \\frac{16 + 25 - 36}{40} = \\frac{5}{40} = \\frac{1}{8}$."
      },
      {
        id: "b6-es2",
        q: "Một tam giác có độ dài ba cạnh lần lượt là $13, 14, 15$. Tính bán kính đường tròn nội tiếp $r$ của tam giác này.",
        answer: "4",
        explain: "1. Nửa chu vi: $p = \\frac{13+14+15}{2} = 21$.\n2. Công thức Heron: $S = \\sqrt{p(p-a)(p-b)(p-c)} = \\sqrt{21(21-13)(21-14)(21-15)} = \\sqrt{21 \\times 8 \\times 7 \\times 6} = \\sqrt{7056} = 84$.\n3. Bán kính đường tròn nội tiếp: $r = \\frac{S}{p} = \\frac{84}{21} = 4$."
      },
      {
        id: "b6-es3",
        q: "Cho tam giác $ABC$ có $b = 5, c = 8$ và $\\widehat{A} = 60^\\circ$. Tính độ dài cạnh $a$.",
        answer: "7",
        explain: "Áp dụng định lí Côsin:\n$a^2 = b^2 + c^2 - 2bc\\cos A = 5^2 + 8^2 - 2 \\cdot 5 \\cdot 8 \\cdot \\cos 60^\\circ = 25 + 64 - 80 \\cdot 0.5 = 89 - 40 = 49 \\implies a = 7$."
      },
      {
        id: "b6-es4",
        q: "Để đo chiều cao toà tháp $CD$, người ta cắm hai cọc tiêu tại $A$ và $B$ trên mặt đất cách nhau $30\\text{ m}$ thẳng hàng với chân tháp $D$ ($B$ ở giữa $A$ và $D$). Góc nâng nhìn đỉnh tháp từ $A$ là $30^\\circ$ và từ $B$ là $45^\\circ$. Tính chiều cao $h = CD$ của toà tháp (làm tròn đến hàng đơn vị mét).",
        answer: "41",
        explain: "1. Trong $\\triangle ABC$: góc ngắm $\\widehat{ACB} = 45^\\circ - 30^\\circ = 15^\\circ$.\n2. Định lí Sin: $BC = \\frac{AB \\cdot \\sin 30^\\circ}{\\sin 15^\\circ} = \\frac{30 \\cdot 0.5}{\\sin 15^\\circ} \\approx 57.96\\text{ m}$.\n3. Chiều cao $CD = BC \\cdot \\sin 45^\\circ \\approx 57.96 \\cdot \\frac{\\sqrt{2}}{2} \\approx 40.98\\text{ m} \\approx 41\\text{ m}$."
      },
      {
        id: "b6-es5",
        q: "Hai tàu thuỷ cùng xuất phát từ bến cảng $O$ lúc 8 giờ sáng, chạy thẳng theo hai hướng tạo với nhau một góc $60^\\circ$. Tàu 1 chạy với vận tốc $20\\text{ km/h}$, tàu 2 chạy với vận tốc $30\\text{ km/h}$. Hỏi sau 2 giờ, khoảng cách giữa hai tàu là bao nhiêu km? (Làm tròn đến chữ số thập phân thứ nhất, viết dạng thập phân dấu chấm như 52.9)",
        answer: "52.9",
        explain: "Sau 2 giờ: $OA = 20 \\times 2 = 40\\text{ km}$, $OB = 30 \\times 2 = 60\\text{ km}$.\nÁp dụng định lí Côsin trong $\\triangle OAB$:\n$AB = \\sqrt{OA^2 + OB^2 - 2 \\cdot OA \\cdot OB \\cdot \\cos 60^\\circ} = \\sqrt{40^2 + 60^2 - 2(40)(60)(0.5)} = \\sqrt{1600 + 3600 - 2400} = \\sqrt{2800} = 20\\sqrt{7} \\approx 52.9\\text{ km}$."
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
            text: "Vectơ $\\overrightarrow{AB} = (-3; 4)$ và độ dài $|\\overrightarrow{AB}| = 5$.",
            answer: true,
            explain: "$\\overrightarrow{AB} = (-2-1; 6-2) = (-3; 4) \\Rightarrow |\\overrightarrow{AB}| = \\sqrt{(-3)^2 + 4^2} = 5$."
          },
          {
            text: "Vectơ $\\overrightarrow{AC} = (8; 6)$.",
            answer: true,
            explain: "$\\overrightarrow{AC} = (9-1; 8-2) = (8; 6)$."
          },
          {
            text: "Tích vô hướng $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 0$.",
            answer: true,
            explain: "$\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = (-3)(8) + 4(6) = -24 + 24 = 0$."
          },
          {
            text: "Tam giác $ABC$ là tam giác nhọn.",
            answer: false,
            explain: "Vì $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 0 \\Rightarrow AB \\perp AC$, tam giác $ABC$ vuông tại $A$."
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
  },

  "bai-07": {
  "tf": [
    {
      "id": "b7-tf1",
      "context": "Cho hình bình hành $ABCD$ có tâm $O$. Xét tính đúng/sai của các khẳng định sau:",
      "statements": [
        {
          "text": "$\\overrightarrow{AB} = \\overrightarrow{DC}$.",
          "answer": true,
          "explain": "Trong hình bình hành $ABCD$, cạnh $AB$ song song và bằng cạnh $DC$. Hướng từ $A$ sang $B$ cùng hướng từ $D$ sang $C$. Do đó hai vectơ cùng hướng và cùng độ dài, nên $\\overrightarrow{AB} = \\overrightarrow{DC}$."
        },
        {
          "text": "Hai vectơ $\\overrightarrow{AD}$ và $\\overrightarrow{CB}$ cùng hướng nhau.",
          "answer": false,
          "explain": "Tứ giác $ABCD$ là hình bình hành nên $AD \\parallel CB$. Tuy nhiên, hướng từ $A$ đến $D$ ngược với hướng từ $C$ đến $B$. Do đó hai vectơ $\\overrightarrow{AD}$ và $\\overrightarrow{CB}$ ngược hướng nhau."
        },
        {
          "text": "Độ dài $|\\overrightarrow{AO}| = |\\overrightarrow{CO}|$.",
          "answer": true,
          "explain": "Tâm $O$ là trung điểm của đường chéo $AC$ nên khoảng cách $AO = CO$. Vì độ dài vectơ là khoảng cách hình học nên $|\\overrightarrow{AO}| = |\\overrightarrow{CO}| = AO$."
        },
        {
          "text": "Hai vectơ $\\overrightarrow{OA}$ và $\\overrightarrow{OC}$ bằng nhau.",
          "answer": false,
          "explain": "Hai vectơ $\\overrightarrow{OA}$ và $\\overrightarrow{OC}$ có cùng độ dài nhưng ngược hướng nhau (chúng là hai vectơ đối nhau). Do đó $\\overrightarrow{OA} \\ne \\overrightarrow{OC}$."
        }
      ]
    },
    {
      "id": "b7-tf2",
      "context": "Cho lục giác đều $ABCDEF$ có tâm $O$. Xét tính đúng/sai của các mệnh đề sau:",
      "statements": [
        {
          "text": "Vectơ $\\overrightarrow{AB}$ cùng phương với vectơ $\\overrightarrow{ED}$.",
          "answer": true,
          "explain": "Trong lục giác đều, cạnh $AB$ song song với cạnh $ED$ nên giá của hai vectơ song song với nhau. Do đó $\\overrightarrow{AB}$ và $\\overrightarrow{ED}$ cùng phương."
        },
        {
          "text": "Có đúng 4 vectơ có hai mút thuộc các đỉnh và tâm O bằng $\\overrightarrow{AB}$.",
          "answer": true,
          "explain": "Gồm AB, ED, FO, OC. Phải tính cả AB."
        },
        {
          "text": "Độ dài $|\\overrightarrow{AD}| = 2|\\overrightarrow{AB}|$.",
          "answer": true,
          "explain": "Đường chéo chính $AD$ của lục giác đều đi qua tâm $O$ và có độ dài $AD = 2AB$. Do đó $|\\overrightarrow{AD}| = 2|\\overrightarrow{AB}|$."
        },
        {
          "text": "Hai vectơ $\\overrightarrow{AO}$ và $\\overrightarrow{OD}$ là hai vectơ đối nhau.",
          "answer": false,
          "explain": "Điểm $O$ là trung điểm của $AD$, nên vectơ $\\overrightarrow{AO}$ và vectơ $\\overrightarrow{OD}$ có cùng hướng và cùng độ dài. Chúng là hai vectơ bằng nhau ($\\overrightarrow{AO} = \\overrightarrow{OD}$), không phải đối nhau."
        }
      ]
    },
    {
      "id": "b7-tf3",
      "context": "Xét các tính chất cơ bản về vectơ và vectơ-không trong mặt phẳng:",
      "statements": [
        {
          "text": "Vectơ $\\overrightarrow{AA}$ là một vectơ-không.",
          "answer": true,
          "explain": "Vectơ có điểm đầu trùng với điểm cuối được định nghĩa là vectơ-không."
        },
        {
          "text": "Vectơ-không có độ dài bằng 0, kí hiệu $|\\vec{0}| = 0$.",
          "answer": true,
          "explain": "Khoảng cách giữa hai điểm trùng nhau bằng 0 nên độ dài vectơ-không bằng 0."
        },
        {
          "text": "Vectơ-không cùng phương và cùng hướng với mọi vectơ.",
          "answer": true,
          "explain": "Đây là quy ước nền tảng được định nghĩa trong SGK Toán 10."
        },
        {
          "text": "Nếu hai vectơ $\\vec{a}$ và $\\vec{b}$ có cùng độ dài ($|\\vec{a}| = |\\vec{b}|$) thì $\\vec{a} = \\vec{b}$.",
          "answer": false,
          "explain": "Hai vectơ bằng nhau đòi hỏi đồng thời cả 2 điều kiện: Cùng độ dài VÀ Cùng hướng. Nếu chỉ cùng độ dài nhưng khác hướng thì hai vectơ không bằng nhau."
        }
      ]
    },
    {
      "id": "b7-tf4",
      "context": "Cho hình vuông ABCD cạnh 1 có tâm O. Đếm mũi tên theo cặp điểm đầu–cuối, rồi phân nhóm vectơ bằng nhau.",
      "statements": [
        {
          "text": "Có 20 mũi tên khác vectơ-không có hai mút trong A, B, C, D, O.",
          "answer": true,
          "explain": "5 điểm đầu × 4 điểm cuối khác điểm đầu = 20."
        },
        {
          "text": "$\\overrightarrow{AO}$ = $\\overrightarrow{OC}$.",
          "answer": true,
          "explain": "O là trung điểm AC; AO và OC cùng hướng, cùng độ dài."
        },
        {
          "text": "$\\overrightarrow{AC}$ = $\\overrightarrow{BD}$.",
          "answer": false,
          "explain": "Hai đường chéo cùng độ dài nhưng khác phương."
        },
        {
          "text": "Gộp các vectơ bằng nhau được 12 nhóm.",
          "answer": true,
          "explain": "4 nhóm cạnh đôi, 4 nhóm nửa đường chéo đôi và 4 nhóm đường chéo đơn: 4 + 4 + 4 = 12."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b7-es1",
      "q": "Cho 5 điểm phân biệt $A, B, C, D, E$ trong đó không có 3 điểm nào thẳng hàng. Có bao nhiêu vectơ khác vectơ-không có điểm đầu và điểm cuối là các đỉnh của ngũ giác?",
      "answer": "20",
      "explain": "Mỗi cách chọn có thứ tự 2 điểm từ 5 điểm cho trước tạo thành 1 vectơ khác $\\vec{0}$. Số lượng vectơ là: $A_5^2 = 5 \\times 4 = 20$."
    },
    {
      "id": "b7-es2",
      "q": "Cho hình vuông $ABCD$ có cạnh bằng $5\\text{ cm}$. Tính độ dài của vectơ đường chéo $\\overrightarrow{AC}$ (nhập kết quả làm tròn đến chữ số thập phân thứ nhất, dùng dấu chấm, ví dụ: 7.1).",
      "answer": "7.1",
      "explain": "Độ dài đường chéo hình vuông: $AC = 5\\sqrt{2} \\approx 7.071\\text{ cm} \\approx 7.1\\text{ cm}$."
    },
    {
      "id": "b7-es3",
      "q": "Cho tam giác $ABC$ đều cạnh bằng $6\\text{ cm}$. Gọi $M$ là trung điểm của cạnh $BC$. Tính độ dài của vectơ trung tuyến $\\overrightarrow{AM}$ (nhập kết quả làm tròn đến chữ số thập phân thứ nhất, ví dụ: 5.2).",
      "answer": "5.2",
      "explain": "Đường cao tam giác đều: $AM = \\frac{6\\sqrt{3}}{2} = 3\\sqrt{3} \\approx 5.196\\text{ cm} \\approx 5.2\\text{ cm}$."
    },
    {
      "id": "b7-es4",
      "q": "Theo Bài 4.5 SGK: O(0;0), A(1;2), M(0;−1), N(3;5). Vật từ M đi đều với vận tốc biểu diễn bằng OA, thời gian tính bằng giờ. Sau bao nhiêu giờ vật tới N?",
      "answer": "3",
      "explain": "Sau t giờ, vật đi t ô ngang, 2t ô lên. Từ M tới N cần 3 ô ngang và 6 ô lên, nên t = 3 giờ."
    },
    {
      "id": "b7-es5",
      "q": "Trong xưởng dựng: A(1;1), B(5;3), C(2;4). Đặt D sao cho CD bằng AB về vectơ. Hoành độ của D bằng bao nhiêu?",
      "answer": "6",
      "explain": "A tới B đi 4 ô ngang và 2 ô lên. Từ C(2;4), tới D(6;6). Hoành độ D là 6. Ví dụ bổ sung."
    },
    {
      "id": "b7-es6",
      "q": "Trong hình vuông ABCD tâm O, phân các mũi tên khác vectơ-không với hai mút trong A,B,C,D,O thành nhóm vectơ bằng nhau. Có bao nhiêu nhóm?",
      "answer": "12",
      "explain": "4 nhóm cạnh đôi; 4 nhóm nửa đường chéo đôi; 4 nhóm đường chéo đơn. Tổng 12 nhóm, gồm 20 mũi tên."
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
