import type { LessonTheory } from "./types";

export const THEORY_BANK: Record<string, LessonTheory> = {
  "bai-01": {
    intro: "Mệnh đề là khái niệm nền tảng của tư duy logic và toán học hiện đại. Nắm vững bài học này giúp em hiểu bản chất của các định lí, thành thạo lập luận suy diễn, phân biệt điều kiện cần và đủ, cũng như tránh mọi cạm bẫy phủ định phổ biến trong các kì thi.",
    minutes: 12,
    sections: [
      {
        id: "sec-1",
        emoji: "💡",
        heading: "1. Mệnh đề & Mệnh đề chứa biến",
        blocks: [
          {
            kind: "text",
            text: "Mỗi mệnh đề toán học là một khẳng định có tính đúng hoặc sai rõ ràng. Một mệnh đề không thể vừa đúng vừa sai."
          },
          {
            kind: "cards",
            tone: "nebula",
            items: [
              {
                emoji: "✅",
                title: "Mệnh đề đúng",
                text: "Khẳng định phản ánh đúng chân lí khách quan.\nVí dụ: 'Số 17 là số nguyên tố', '$\\sqrt{2}$ là số vô tỉ'."
              },
              {
                emoji: "❌",
                title: "Mệnh đề sai",
                text: "Khẳng định trái với sự thật toán học.\nVí dụ: 'Số 15 chia hết cho 2', 'Tổng 3 góc tam giác bằng 360°'."
              },
              {
                emoji: "❓",
                title: "Không phải mệnh đề",
                text: "Các câu cảm thán, nghi vấn, mệnh lệnh (chưa xác định đúng/sai):\n'Hôm nay trời đẹp quá!', 'Mấy giờ rồi?'."
              },
              {
                emoji: "🧬",
                title: "Mệnh đề chứa biến P(x)",
                text: "Câu khẳng định chứa biến, chỉ trở thành mệnh đề khi thay biến bằng giá trị cụ thể.\nVí dụ: $P(n)$: '$n$ chia hết cho 3'."
              }
            ]
          },
          {
            kind: "check",
            q: "Trong các câu sau, câu nào là một mệnh đề toán học?",
            options: [
              "Học toán thật là thú vị!",
              "Phương trình $x^2 - 4 = 0$ có hai nghiệm thực phân biệt.",
              "Hãy giải phương trình này ngay đi!",
              "Số $2x + 1$ có phải là số lẻ không?"
            ],
            answer: 1,
            explain: "Chỉ có khẳng định về nghiệm của phương trình $x^2 - 4 = 0$ là có tính đúng/sai xác định (mệnh đề đúng vì có 2 nghiệm $x = \\pm 2$). Các câu còn lại là câu cảm thán, câu lệnh hoặc câu hỏi."
          }
        ]
      },
      {
        id: "sec-2",
        emoji: "🔄",
        heading: "2. Mệnh đề phủ định (\\overline{P})",
        blocks: [
          {
            kind: "text",
            text: "Để phủ định một mệnh đề $P$, ta thường thêm hoặc bớt từ 'không' (hoặc 'không phải') trước vị ngữ của $P$. Kí hiệu mệnh đề phủ định của $P$ là $\\overline{P}$."
          },
          {
            kind: "compare",
            left: {
              title: "Mệnh đề gốc P",
              emoji: "📌",
              items: [
                "Nếu $P$ ĐÚNG thì $\\overline{P}$ SAI.",
                "Nếu $P$ SAI thì $\\overline{P}$ ĐÚNG.",
                "Ví dụ: $P$: 'Số 2 là số nguyên tố chẵn duy nhất' (Đúng)."
              ]
            },
            right: {
              title: "Mệnh đề phủ định P̄",
              emoji: "🔄",
              items: [
                "Khẳng định hoàn toàn trái ngược với $P$.",
                "Không bao giờ xảy ra trường hợp cả hai cùng đúng hoặc cùng sai.",
                "Ví dụ: $\\overline{P}$: 'Số 2 không phải là số nguyên tố chẵn duy nhất' (Sai)."
              ]
            }
          },
          {
            kind: "note",
            text: "📌 **Khắc sâu**: Hai mệnh đề $P$ và $\\overline{P}$ luôn có giá trị chân trị đối lập nhau. Muốn bác bỏ một mệnh đề sai, ta chỉ cần chứng minh mệnh đề phủ định của nó là đúng!"
          },
          {
            kind: "check",
            q: "Cho mệnh đề $P$: 'Số 13 là số nguyên tố'. Mệnh đề phủ định $\\overline{P}$ là gì?",
            options: [
              "Số 13 là hợp số.",
              "Số 13 không phải là số nguyên tố.",
              "Số 13 là số chẵn.",
              "Số 13 chia hết cho 3."
            ],
            answer: 1,
            explain: "Mệnh đề phủ định chuẩn ngữ pháp và logic là thêm 'không phải': $\\overline{P}$: 'Số 13 không phải là số nguyên tố'."
          }
        ]
      },
      {
        id: "sec-3",
        emoji: "➡️",
        heading: "3. Mệnh đề kéo theo (P ⇒ Q) & Mệnh đề đảo",
        blocks: [
          {
            kind: "text",
            text: "Mệnh đề 'Nếu $P$ thì $Q$' được gọi là mệnh đề kéo theo, kí hiệu $P \\Rightarrow Q$. Hầu hết các định lí toán học đều có dạng mệnh đề kéo theo."
          },
          {
            kind: "compare",
            left: {
              title: "Mệnh đề kéo theo P ⇒ Q",
              emoji: "➡️",
              items: [
                "Chỉ SAI khi $P$ ĐÚNG mà $Q$ SAI. Đúng trong mọi trường hợp còn lại!",
                "Nếu $P$ sai, mệnh đề $P \\Rightarrow Q$ luôn mặc nhiên là ĐÚNG.",
                "$P$ là giả thiết, $Q$ là kết luận của định lí."
              ]
            },
            right: {
              title: "Mệnh đề đảo Q ⇒ P",
              emoji: "🔁",
              items: [
                "Được thành lập bằng cách hoán đổi vị trí: 'Nếu $Q$ thì $P$'.",
                "Mệnh đề đảo của một định lí đúng KHÔNG nhất thiết phải đúng!",
                "Ví dụ: 'Nếu tam giác đều thì cân' (Đúng) nhưng 'Nếu tam giác cân thì đều' (Sai)."
              ]
            }
          },
          {
            kind: "note",
            text: "🌟 **BÍ KÍP VÀNG: 'ĐẾN TRƯỚC LÀ ĐỦ, ĐẾN SAU LÀ CẦN'**\n\nKhi mệnh đề kéo theo $P \\Rightarrow Q$ là một định lí (luôn đúng):\n• $P$ (đứng trước mũi tên) là **điều kiện ĐỦ** để có $Q$.\n• $Q$ (đứng sau mũi tên) là **điều kiện CẦN** để có $P$."
          },
          {
            kind: "check",
            q: "Cho định lí: 'Nếu tứ giác $ABCD$ là hình thoi thì tứ giác $ABCD$ có hai đường chéo vuông góc với nhau'. Khẳng định nào sau đây dùng thuật ngữ 'điều kiện đủ' là CHÍNH XÁC?",
            options: [
              "Hai đường chéo vuông góc là điều kiện đủ để tứ giác là hình thoi.",
              "Tứ giác là hình thoi là điều kiện đủ để hai đường chéo vuông góc.",
              "Hai đường chéo vuông góc là điều kiện cần và đủ để tứ giác là hình thoi.",
              "Tứ giác là hình thoi là điều kiện cần để hai đường chéo vuông góc."
            ],
            answer: 1,
            explain: "Trong mệnh đề $P \\Rightarrow Q$, giả thiết $P$ ('là hình thoi') đứng trước mũi tên nên là ĐIỀU KIỆN ĐỦ để có kết luận $Q$ ('hai đường chéo vuông góc')."
          }
        ]
      },
      {
        id: "sec-4",
        emoji: "↔️",
        heading: "4. Mệnh đề tương đương (P ⇔ Q)",
        blocks: [
          {
            kind: "text",
            text: "Mệnh đề 'P nếu và chỉ nếu Q' (hoặc 'P khi và chỉ khi Q') gọi là mệnh đề tương đương, kí hiệu $P \\Leftrightarrow Q$."
          },
          {
            kind: "cards",
            tone: "plasma",
            items: [
              {
                emoji: "⚖️",
                title: "Tính chân trị",
                text: "$P \\Leftrightarrow Q$ ĐÚNG khi và chỉ khi cả hai mệnh đề kéo theo $P \\Rightarrow Q$ và $Q \\Rightarrow P$ đều đúng (tức $P, Q$ cùng đúng hoặc cùng sai)."
              },
              {
                emoji: "🔑",
                title: "Điều kiện Cần và Đủ",
                text: "Khi $P \\Leftrightarrow Q$ đúng, ta nói:\n• '$P$ là điều kiện cần và đủ để có $Q$'.\n• Hoặc ngược lại: '$Q$ là điều kiện cần và đủ để có $P$'."
              }
            ]
          },
          {
            kind: "steps",
            items: [
              {
                label: "Bước 1",
                title: "Chứng minh chiều thuận",
                text: "Chứng minh $P \\Rightarrow Q$ là đúng (từ giả thiết $P$ suy ra kết luận $Q$)."
              },
              {
                label: "Bước 2",
                title: "Chứng minh chiều đảo",
                text: "Chứng minh $Q \\Rightarrow P$ là đúng (từ giả thiết $Q$ suy ra kết luận $P$)."
              },
              {
                label: "Bước 3",
                title: "Kết luận tương đương",
                text: "Khi cả hai chiều đều đúng, kết luận $P \\Leftrightarrow Q$ đúng và sử dụng cụm từ 'khi và chỉ khi'."
              }
            ]
          }
        ]
      },
      {
        id: "sec-5",
        emoji: "🎯",
        heading: "5. Lượng từ Với mọi (\\forall), Tồn tại (\\exists) & Bẫy phủ định",
        blocks: [
          {
            kind: "text",
            text: "Trong toán học, các kí hiệu $\\forall$ (với mọi) và $\\exists$ (tồn tại / có ít nhất một) đóng vai trò định lượng phạm vi của biến."
          },
          {
            kind: "compare",
            left: {
              title: "Lượng từ ∀ (Với mọi)",
              emoji: "🌐",
              items: [
                "$\\forall x \\in D, P(x)$: khẳng định ĐÚNG khi $P(x)$ đúng với TẤT CẢ mọi $x \\in D$.",
                "Cách chứng minh ĐÚNG: Phải chứng minh cho phần tử tổng quát trong $D$.",
                "Cách bác bỏ (chứng minh SAI): Chỉ cần chỉ ra MỘT phản ví dụ $x_0 \\in D$ làm cho $P(x_0)$ sai!"
              ]
            },
            right: {
              title: "Lượng từ ∃ (Tồn tại)",
              emoji: "🎯",
              items: [
                "$\\exists x \\in D, P(x)$: khẳng định ĐÚNG khi có ÍT NHẤT MỘT giá trị $x \\in D$ thỏa mãn $P(x)$.",
                "Cách chứng minh ĐÚNG: Chỉ cần chỉ ra MỘT ví dụ cụ thể $x_0 \\in D$ thỏa mãn.",
                "Cách chứng minh SAI: Phải chứng minh $P(x)$ sai với mọi $x \\in D$."
              ]
            }
          },
          {
            kind: "steps",
            items: [
              {
                label: "Bước 1",
                title: "Đổi lượng từ",
                text: "Lượng từ $\\forall$ chuyển thành $\\exists$, và ngược lại $\\exists$ chuyển thành $\\forall$."
              },
              {
                label: "Bước 2",
                title: "Giữ nguyên tập xác định",
                text: "Tập hợp phần tử thuộc về ($x \\in \\mathbb{R}, n \\in \\mathbb{N},...$) được giữ NGUYÊN, tuyệt đối không đổi sang $\\notin$."
              },
              {
                label: "Bước 3",
                title: "Phủ định mệnh đề thành phần",
                text: "Phủ định tính chất $P(x)$ thành $\\overline{P(x)}$. Lưu ý cạm bẫy dấu bất đẳng thức!"
              }
            ]
          },
          {
            kind: "note",
            text: "⚠️ **CẢNH BÁO BẪY DẤU BẤT ĐẲNG THỨC KHI PHỦ ĐỊNH**:\n\n• Phủ định của $>$ là $\\le$ (có thêm dấu bằng).\n• Phủ định của $<$ là $\\ge$ (có thêm dấu bằng).\n• Phủ định của $\\ge$ là $<$ (bỏ dấu bằng).\n• Phủ định của $\\le$ là $>$ (bỏ dấu bằng).\n• Phủ định của $=$ là $\\ne$."
          },
          {
            kind: "check",
            q: "Mệnh đề phủ định của mệnh đề: '$\\forall x \\in \\mathbb{R}, x^2 + 2x + 3 > 0$' là gì?",
            options: [
              "$\\exists x \\in \\mathbb{R}, x^2 + 2x + 3 \\le 0$",
              "$\\forall x \\in \\mathbb{R}, x^2 + 2x + 3 \\le 0$",
              "$\\exists x \\in \\mathbb{R}, x^2 + 2x + 3 < 0$",
              "$\\exists x \\notin \\mathbb{R}, x^2 + 2x + 3 \\le 0$"
            ],
            answer: 0,
            explain: "Quy tắc: Đổi $\\forall$ thành $\\exists$, giữ nguyên tập xác định $x \\in \\mathbb{R}$, phủ định dấu '>' thành '$\\le$'. Do đó đáp án chính xác là $\\exists x \\in \\mathbb{R}, x^2 + 2x + 3 \\le 0$."
          }
        ]
      }
    ],
    summary: [
      "1. Mệnh đề là câu khẳng định chỉ nhận một trong hai giá trị chân trị: Đúng (Đ) hoặc Sai (S).",
      "2. Phủ định: $P$ đúng thì $\\overline{P}$ sai; $\\overline{\\forall x, P(x)} \\equiv \\exists x, \\overline{P(x)}$; $\\overline{\\exists x, P(x)} \\equiv \\forall x, \\overline{P(x)}$.",
      "3. Mệnh đề kéo theo: $P \\Rightarrow Q$ chỉ sai khi $P$ đúng mà $Q$ sai. Mẹo: 'Đến TRƯỚC là ĐỦ, Đến SAU là CẦN'.",
      "4. Mệnh đề tương đương: $P \\Leftrightarrow Q$ đúng khi cả hai cùng chân trị. Khi đó $P$ là điều kiện cần và đủ để có $Q$.",
      "5. Phản ví dụ: Để bác bỏ mệnh đề '$\\forall x \\in D, P(x)$', chỉ cần chỉ ra MỘT giá trị $x_0 \\in D$ làm cho khẳng định sai."
    ]
  },

  "bai-02": {
    intro: "Tập hợp là một trong những khái niệm cơ bản nhất của toán học. Nắm vững các phép toán hợp, giao, hiệu và biểu đồ Ven giúp giải quyết xuất sắc các bài toán đếm và phân loại.",
    minutes: 10,
    sections: [
      {
        id: "sec-1",
        emoji: "📚",
        heading: "1. Khái niệm tập hợp & Tập hợp con",
        blocks: [
          {
            kind: "text",
            text: "Tập hợp gồm các phần tử xác định. Kí hiệu $x \\in A$ (x thuộc A) hoặc $x \\notin A$ (x không thuộc A)."
          },
          {
            kind: "cards",
            tone: "plasma",
            items: [
              {
                emoji: "📦",
                title: "Tập hợp con",
                text: "$A \\subset B \\Leftrightarrow (\\forall x \\in A \\Rightarrow x \\in B)$. Tập rỗng $\\emptyset$ là con của mọi tập hợp."
              },
              {
                emoji: "⚖️",
                title: "Hai tập hợp bằng nhau",
                text: "$A = B \\Leftrightarrow (A \\subset B \\text{ và } B \\subset A)$."
              }
            ]
          }
        ]
      },
      {
        id: "sec-2",
        emoji: "⚙️",
        heading: "2. Các phép toán trên tập hợp",
        blocks: [
          {
            kind: "text",
            text: "Các phép toán cốt lõi giữa hai tập hợp $A$ và $B$:"
          },
          {
            kind: "cards",
            tone: "nebula",
            items: [
              {
                emoji: "🤝",
                title: "Giao của hai tập hợp (A ∩ B)",
                text: "$A \\cap B = \\{x \\mid x \\in A \\text{ và } x \\in B\\}$ (phần chung)."
              },
              {
                emoji: "🌐",
                title: "Hợp của hai tập hợp (A ∪ B)",
                text: "$A \\cup B = \\{x \\mid x \\in A \\text{ hoặc } x \\in B\\}$ (gộp chung)."
              },
              {
                emoji: "✂️",
                title: "Hiệu của hai tập hợp (A \\ B)",
                text: "$A \\setminus B = \\{x \\mid x \\in A \\text{ và } x \\notin B\\}$."
              }
            ]
          },
          {
            kind: "note",
            text: "Công thức số phần tử: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$."
          }
        ]
      }
    ],
    summary: [
      "Giao $A \\cap B$: lấy phần chung thuộc cả hai tập.",
      "Hợp $A \\cup B$: lấy tất cả các phần tử thuộc ít nhất một trong hai tập.",
      "Hiệu $A \\setminus B$: thuộc $A$ nhưng bỏ đi phần thuộc $B$."
    ]
  },

  "bai-06": {
    intro: "Hệ thức lượng trong tam giác mở rộng định lí Pythagore sang tam giác bất kì, cung cấp bộ công thức định lí côsin, định lí sin và 5 công thức tính diện tích kinh điển.",
    minutes: 12,
    sections: [
      {
        id: "sec-1",
        emoji: "📐",
        heading: "1. Định lí Côsin và Định lí Sin",
        blocks: [
          {
            kind: "text",
            text: "Cho tam giác $ABC$ có các cạnh đối diện các góc $A, B, C$ lần lượt là $a, b, c$."
          },
          {
            kind: "cards",
            tone: "nebula",
            items: [
              {
                emoji: "🔹",
                title: "Định lí Côsin",
                text: "$a^2 = b^2 + c^2 - 2bc \\cos A$\n$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$"
              },
              {
                emoji: "🔹",
                title: "Định lí Sin",
                text: "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$\n(R là bán kính đường tròn ngoại tiếp)"
              }
            ]
          }
        ]
      },
      {
        id: "sec-2",
        emoji: "🔺",
        heading: "2. Các công thức tính diện tích tam giác",
        blocks: [
          {
            kind: "list",
            items: [
              "1. $S = \\frac{1}{2} a h_a = \\frac{1}{2} b h_b = \\frac{1}{2} c h_c$",
              "2. $S = \\frac{1}{2} ab \\sin C = \\frac{1}{2} bc \\sin A = \\frac{1}{2} ca \\sin B$",
              "3. $S = \\frac{abc}{4R}$",
              "4. $S = pr$ (với $p = \\frac{a+b+c}{2}$, $r$ là bán kính đường tròn nội tiếp)",
              "5. Công thức Heron: $S = \\sqrt{p(p-a)(p-b)(p-c)}$"
            ]
          }
        ]
      }
    ],
    summary: [
      "Định lí côsin dùng khi biết 2 cạnh và góc kẹp giữa, hoặc biết cả 3 cạnh.",
      "Định lí sin dùng khi biết 1 cạnh và góc đối diện kết hợp với bán kính $R$.",
      "Lựa chọn công thức diện tích phù hợp với giả thiết đề bài."
    ]
  },

  "bai-11": {
    intro: "Tích vô hướng của hai vectơ là công cụ kết nối giữa hình học thuần tuý và đại số giải tích, ứng dụng để tính góc, độ dài và chứng minh vuông góc.",
    minutes: 10,
    sections: [
      {
        id: "sec-1",
        emoji: "↗️",
        heading: "1. Định nghĩa và Biểu thức toạ độ",
        blocks: [
          {
            kind: "cards",
            tone: "plasma",
            items: [
              {
                emoji: "📐",
                title: "Định nghĩa tích vô hướng",
                text: "$\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\vec{u}, \\vec{v})$"
              },
              {
                emoji: "📊",
                title: "Biểu thức toạ độ trong Oxy",
                text: "Với $\\vec{u} = (x_1; y_1)$ và $\\vec{v} = (x_2; y_2)$:\n$\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2$"
              }
            ]
          },
          {
            kind: "note",
            text: "Điều kiện vuông góc: $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0 \\Leftrightarrow x_1 x_2 + y_1 y_2 = 0$."
          }
        ]
      }
    ],
    summary: [
      "Tích vô hướng của hai vectơ là một SỐ THỰC, không phải là một vectơ.",
      "Hai vectơ vuông góc khi và chỉ khi tích vô hướng bằng 0."
    ]
  },

  "bai-16": {
    intro: "Hàm số bậc hai $y = ax^2 + bx + c$ ($a \\ne 0$) có đồ thị là một parabol kinh điển. Khảo sát đỉnh, trục đối xứng và sự biến thiên là kĩ năng nền tảng trong toàn cấp THPT.",
    minutes: 10,
    sections: [
      {
        id: "sec-1",
        emoji: "📉",
        heading: "1. Đỉnh và Trục đối xứng của Parabol",
        blocks: [
          {
            kind: "cards",
            tone: "nebula",
            items: [
              {
                emoji: "📍",
                title: "Toạ độ đỉnh I",
                text: "$I\\left(-\\frac{b}{2a}; -\\frac{\\Delta}{4a}\\right)$"
              },
              {
                emoji: "📏",
                title: "Trục đối xứng",
                text: "Đường thẳng $x = -\\frac{b}{2a}$"
              },
              {
                emoji: "🔄",
                title: "Bề lõm parabol",
                text: "$a > 0$: Bề lõm quay lên (đỉnh là điểm thấp nhất).\n$a < 0$: Bề lõm quay xuống (đỉnh là điểm cao nhất)."
              }
            ]
          }
        ]
      }
    ],
    summary: [
      "Hoành độ đỉnh $x_I = -\\frac{b}{2a}$ là trục đối xứng.",
      "Hàm số đạt giá trị cực trị tại đỉnh của parabol."
    ]
  }
};

export function hasTheory(lessonId: string): boolean {
  return true;
}

export function getLessonTheory(lessonId: string): LessonTheory {
  return (
    THEORY_BANK[lessonId] ?? {
      intro: `Lý thuyết trọng tâm bài học theo chuẩn SGK Toán 10 (Kết nối tri thức với cuộc sống). Nắm vững định nghĩa, quy tắc biến đổi và phương pháp giải toán chuẩn xác.`,
      minutes: 10,
      sections: [
        {
          id: "sec-1",
          emoji: "💡",
          heading: "1. Kiến thức cốt lõi & Định nghĩa",
          blocks: [
            {
              kind: "text",
              text: "Mỗi bài học toán học đều được xây dựng từ các định nghĩa chính xác và định lí chứng minh logic."
            },
            {
              kind: "cards",
              tone: "nebula",
              items: [
                {
                  emoji: "🎯",
                  title: "Trọng tâm bài học",
                  text: "Học sinh cần nắm vững bản chất toán học, vẽ hình trực quan hoặc lập luận đại số rõ ràng."
                },
                {
                  emoji: "📐",
                  title: "Phương pháp giải toán",
                  text: "Nhận dạng bài toán, thiết lập phương trình / bất phương trình và sử dụng công thức biến đổi tương đương."
                }
              ]
            }
          ]
        },
        {
          id: "sec-2",
          emoji: "⚡",
          heading: "2. Kĩ năng & Lưu ý làm bài",
          blocks: [
            {
              kind: "list",
              items: [
                "Luôn tìm điều kiện xác định trước khi giải bài toán chứa mẫu số hoặc căn bậc hai.",
                "Kiểm tra lại nghiệm hoặc dùng máy tính cầm tay để kiểm tra nhanh kết quả trắc nghiệm.",
                "Rèn luyện tư duy phân tích hình học bằng việc vẽ hình phác thảo."
              ]
            }
          ]
        }
      ],
      summary: [
        "Nắm vững định nghĩa và hệ thống công thức then chốt của bài học.",
        "Rèn kĩ năng nhận diện dạng bài toán trong đề thi trắc nghiệm.",
        "Tránh các bẫy thường gặp về điều kiện xác định và dấu của số."
      ]
    }
  );
}
