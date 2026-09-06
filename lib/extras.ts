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
      }
    ],
    essay: [
      {
        id: "b1-es1",
        q: "Tìm mệnh đề phủ định của mệnh đề: 'Mọi hình vuông đều là hình chữ nhật'.",
        answer: "Có ít nhất một hình vuông không phải là hình chữ nhật",
        explain: "Phủ định của mệnh đề 'Mọi $A$ đều là $B$' là 'Tồn tại ít nhất một $A$ không phải là $B$'."
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
            explain: "$A \\setminus B = [-3; 0]$ vì số 0 thuộc $A$ nhưng không thuộc $B$."
          },
          {
            text: "Tập hợp $A$ có chứa đúng 7 số nguyên.",
            answer: true,
            explain: "Các số nguyên trong $[-3; 4)$ là $-3, -2, -1, 0, 1, 2, 3$ (tổng cộng 7 số)."
          }
        ]
      }
    ],
    essay: [
      {
        id: "b2-es1",
        q: "Cho $A = \\{x \\in \\mathbb{R} \\mid (x^2 - 4)(2x - 1) = 0\\}$. Liệt kê các phần tử của tập hợp $A$.",
        answer: "{-2; 1/2; 2}",
        explain: "$(x^2 - 4)(2x - 1) = 0 \\Leftrightarrow x = 2, x = -2, x = 1/2$. Do đó $A = \\{-2; \\frac{1}{2}; 2\\}$."
      }
    ]
  },

  "bai-03": {
    tf: [
      {
        id: "b3-tf1",
        context: "Cho bất phương trình bậc nhất hai ẩn $d: 2x + 3y - 6 \\le 0$.",
        statements: [
          {
            text: "Đường thẳng biên $2x + 3y - 6 = 0$ đi qua điểm $A(3; 0)$ và $B(0; 2)$.",
            answer: true,
            explain: "Thay $(3; 0)$: $2(3) + 0 - 6 = 0$; thay $(0; 2)$: $0 + 3(2) - 6 = 0$ (đúng)."
          },
          {
            text: "Gốc toạ độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình.",
            answer: true,
            explain: "Thay $(0; 0)$: $0 + 0 - 6 = -6 \\le 0$ (thoả mãn)."
          },
          {
            text: "Điểm $M(2; 1)$ thuộc miền nghiệm của bất phương trình.",
            answer: false,
            explain: "Thay $(2; 1)$: $2(2) + 3(1) - 6 = 4 + 3 - 6 = 1 > 0$ (không thoả mãn)."
          },
          {
            text: "Miền nghiệm của BPT chứa các điểm nằm trên đường thẳng biên $2x + 3y - 6 = 0$.",
            answer: true,
            explain: "Vì dấu của BPT là '$\\le$' (có dấu bằng)."
          }
        ]
      }
    ],
    essay: [
      {
        id: "b3-es1",
        q: "Xác định toạ độ giao điểm của đường thẳng biên $3x - 4y = 12$ với trục hoành $Ox$.",
        answer: "(4; 0)",
        explain: "Cho $y = 0 \\Rightarrow 3x = 12 \\Rightarrow x = 4$. Toạ độ giao điểm là $(4; 0)$."
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
            text: "Vectơ $\\vec{AB} = (-3; 4)$ và độ dài $|\vec{AB}| = 5$.",
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
