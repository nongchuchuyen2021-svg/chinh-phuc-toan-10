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
        heading: "2. Mệnh đề phủ định ($\\overline{P}$)",
        blocks: [
          {
            kind: "text",
            text: "Để phủ định một mệnh đề $P$, ta thường thêm hoặc bớt từ 'không' (hoặc 'không phải') trước vị ngữ của $P$. Kí hiệu mệnh đề phủ định của $P$ là $\\overline{P}$."
          },
          {
            kind: "compare",
            left: {
              title: "Mệnh đề gốc $P$",
              emoji: "📌",
              items: [
                "Nếu $P$ ĐÚNG thì $\\overline{P}$ SAI.",
                "Nếu $P$ SAI thì $\\overline{P}$ ĐÚNG.",
                "Ví dụ: $P$: 'Số 2 là số nguyên tố chẵn duy nhất' (Đúng)."
              ]
            },
            right: {
              title: "Mệnh đề phủ định $\\overline{P}$",
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
        heading: "3. Mệnh đề kéo theo ($P \\Rightarrow Q$) & Mệnh đề đảo",
        blocks: [
          {
            kind: "text",
            text: "Mệnh đề 'Nếu $P$ thì $Q$' được gọi là mệnh đề kéo theo, kí hiệu $P \\Rightarrow Q$. Hầu hết các định lí toán học đều có dạng mệnh đề kéo theo."
          },
          {
            kind: "compare",
            left: {
              title: "Mệnh đề kéo theo $P \\Rightarrow Q$",
              emoji: "➡️",
              items: [
                "Chỉ SAI khi $P$ ĐÚNG mà $Q$ SAI. Đúng trong mọi trường hợp còn lại!",
                "Nếu $P$ sai, mệnh đề $P \\Rightarrow Q$ luôn mặc nhiên là ĐÚNG.",
                "$P$ là giả thiết, $Q$ là kết luận của định lí."
              ]
            },
            right: {
              title: "Mệnh đề đảo $Q \\Rightarrow P$",
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
        heading: "4. Mệnh đề tương đương ($P \\Leftrightarrow Q$)",
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
        heading: "5. Lượng từ Với mọi ($\\forall$), Tồn tại ($\\exists$) & Bẫy phủ định",
        blocks: [
          {
            kind: "text",
            text: "Trong toán học, các kí hiệu $\\forall$ (với mọi) và $\\exists$ (tồn tại / có ít nhất một) đóng vai trò định lượng phạm vi của biến."
          },
          {
            kind: "compare",
            left: {
              title: "Lượng từ $\\forall$ (Với mọi)",
              emoji: "🌐",
              items: [
                "$\\forall x \\in D, P(x)$: khẳng định ĐÚNG khi $P(x)$ đúng với TẤT CẢ mọi $x \\in D$.",
                "Cách chứng minh ĐÚNG: Phải chứng minh cho phần tử tổng quát trong $D$.",
                "Cách bác bỏ (chứng minh SAI): Chỉ cần chỉ ra MỘT phản ví dụ $x_0 \\in D$ làm cho $P(x_0)$ sai!"
              ]
            },
            right: {
              title: "Lượng từ $\\exists$ (Tồn tại)",
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
    intro: "Tập hợp là viên gạch nền móng xây dựng toàn bộ toán học hiện đại. Làm chủ các phép toán giao, hợp, hiệu, phần bù và biểu diễn trên trục số giúp em dễ dàng giải quyết các bài toán về phương trình, bất phương trình, xác suất và tối ưu hóa trong đời sống.",
    minutes: 12,
    sections: [
      {
        id: "sec-1",
        emoji: "📦",
        heading: "1. Khái niệm tập hợp, Tập con & Hai tập hợp bằng nhau",
        blocks: [
          {
            kind: "text",
            text: "Tập hợp là một bộ sưu tập các đối tượng xác định gọi là các phần tử của tập hợp. Kí hiệu $a \\in S$ (a thuộc S) hoặc $b \\notin S$ (b không thuộc S)."
          },
          {
            kind: "cards",
            tone: "nebula",
            items: [
              {
                emoji: "🎯",
                title: "Hai cách xác định tập hợp",
                text: "1. Liệt kê các phần tử: $A = \\{1; 2; 3; 4\\}$.\n2. Nêu tính chất đặc trưng: $B = \\{x \\in \\mathbb{R} \\mid x^2 - 4 = 0\\}$."
              },
              {
                emoji: "📦",
                title: "Tập hợp con (A ⊂ B)",
                text: "Nếu mọi phần tử của $A$ đều thuộc $B$ thì $A$ là tập con của $B$.\nQuy ước: Tập rỗng $\\emptyset$ là con của mọi tập hợp ($\\emptyset \\subset A$ với mọi $A$)."
              },
              {
                emoji: "⚖️",
                title: "Hai tập hợp bằng nhau (A = B)",
                text: "$A = B \\Leftrightarrow (A \\subset B \\text{ và } B \\subset A)$.\nHai tập hợp có chính xác các phần tử giống nhau."
              },
              {
                emoji: "🔢",
                title: "Số tập hợp con: 2ⁿ",
                text: "Một tập hợp có $n$ phần tử sẽ có tất cả $2^n$ tập con (tính cả $\\emptyset$ và chính nó)."
              }
            ]
          },
          {
            kind: "compare",
            left: {
              title: "Tập hợp rỗng ∅",
              emoji: "⭕",
              items: [
                "Là tập hợp KHÔNG chứa phần tử nào.",
                "Kí hiệu chuẩn: $\\emptyset$ (Tuyệt đối KHÔNG viết $\\{\\emptyset\\}$!).",
                "Tập con của mọi tập hợp: $\\emptyset \\subset A$."
              ]
            },
            right: {
              title: "Tập hợp khác rỗng",
              emoji: "💎",
              items: [
                "Chứa ít nhất một phần tử: $\\exists x, x \\in A$.",
                "Nếu tập có $n$ phần tử, số tập con khác rỗng là $2^n - 1$.",
                "Số tập con thực sự (khác chính nó) là $2^n - 1$."
              ]
            }
          },
          {
            kind: "note",
            text: "⚠️ **CẢNH BÁO BẪY KÍ HIỆU**: Tuyệt đối không nhầm lẫn giữa quan hệ thuộc '$\\in$' (giữa phần tử và tập hợp, ví dụ $1 \\in \\{1; 2\\}$) và quan hệ tập con '$\\subset$' (giữa tập hợp và tập hợp, ví dụ $\\{1\\} \\subset \\{1; 2\\}$)."
          },
          {
            kind: "check",
            q: "Cho tập hợp $A = \\{0; 1; 2\\}$. Khẳng định nào sau đây là SAI?",
            options: [
              "$0 \\in A$",
              "$\\{1; 2\\} \\subset A$",
              "$\\emptyset \\subset A$",
              "$\\{0\\} \\in A$"
            ],
            answer: 3,
            explain: "$\\{0\\}$ là một tập hợp chứa phần tử 0, không phải một phần tử đơn lẻ của $A$. Do đó phải dùng kí hiệu quan hệ tập con $\\{0\\} \\subset A$. Việc ghi $\\{0\\} \\in A$ là sai!"
          }
        ]
      },
      {
        id: "sec-2",
        emoji: "📐",
        heading: "2. Các tập hợp số & Biểu diễn khoảng, đoạn trên trục số",
        blocks: [
          {
            kind: "text",
            text: "Tập hợp số thực $\\mathbb{R}$ chứa các tập số quen thuộc: $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$. Các tập con vô hạn của $\\mathbb{R}$ thường được mô tả bằng khoảng, đoạn hoặc nửa khoảng."
          },
          {
            kind: "cards",
            tone: "plasma",
            items: [
              {
                emoji: "🔹",
                title: "Đoạn [a; b]",
                text: "$[a; b] = \\{x \\in \\mathbb{R} \\mid a \\le x \\le b\\}$.\nLấy cả hai đầu mút $a$ và $b$ (dùng hai ngoặc vuông $[\\dots]$)."
              },
              {
                emoji: "🔸",
                title: "Khoảng (a; b)",
                text: "$(a; b) = \\{x \\in \\mathbb{R} \\mid a < x < b\\}$.\nKHÔNG lấy hai đầu mút $a$ và $b$ (dùng hai ngoặc tròn $(\\dots)$)."
              },
              {
                emoji: "🔹",
                title: "Nửa khoảng [a; b) và (a; b]",
                text: "$[a; b) = \\{x \\mid a \\le x < b\\}$ (lấy $a$, bỏ $b$).\n$(a; b] = \\{x \\mid a < x \\le b\\}$ (bỏ $a$, lấy $b$)."
              },
              {
                emoji: "♾️",
                title: "Nửa đường thẳng vô cực",
                text: "$(-\\infty; a)$, $[a; +\\infty)$ biểu diễn miền giá trị kéo dài vô tận về phía âm hoặc dương."
              }
            ]
          },
          {
            kind: "steps",
            items: [
              {
                label: "Bước 1",
                title: "Vẽ trục số & Đánh dấu",
                text: "Vẽ trục số nằm ngang, đánh dấu các điểm mút theo thứ tự từ bé đến lớn từ trái sang phải."
              },
              {
                label: "Bước 2",
                title: "Đặt ngoặc chuẩn xác",
                text: "Dấu $\\le, \\ge$ đặt ngoặc vuông $[, ]$; dấu $<, >$ hoặc $\\pm\\infty$ đặt ngoặc tròn $(, )$ quay bề lõm về phía miền cần lấy."
              },
              {
                label: "Bước 3",
                title: "Gạch bỏ phần không lấy",
                text: "Gạch chéo toàn bộ phần trục số nằm ngoài tập hợp để dễ dàng quan sát khi thực hiện các phép toán giao, hợp, hiệu."
              }
            ]
          },
          {
            kind: "note",
            text: "💡 **MẸO VÀNG NHỚ NGOẶC**:\n• **Ngoặc vuông $[$ hoặc $]$**: Có dấu bằng ($=$), điểm mút được nhận vào tập hợp.\n• **Ngoặc tròn $($ hoặc $)$**: Không có dấu bằng, điểm mút bị bỏ ra ngoài.\n• Đầu vô cực $\\pm\\infty$ LUÔN LUÔN đi kèm ngoặc tròn, tuyệt đối không bao giờ dùng ngoặc vuông!"
          },
          {
            kind: "check",
            q: "Tập hợp nào sau đây biểu diễn nửa khoảng $\\{x \\in \\mathbb{R} \\mid -2 < x \\le 5\\}$?",
            options: [
              "$[-2; 5]$",
              "$(-2; 5)$",
              "$(-2; 5]$",
              "$[-2; 5)$"
            ],
            answer: 2,
            explain: "Tại $-2$ là dấu '$<$' (không có dấu bằng) nên dùng ngoặc tròn '$($'; tại $5$ là dấu '$\\le$' (có dấu bằng) nên dùng ngoặc vuông '$]$'. Do đó kí hiệu chuẩn là $(-2; 5]$."
          }
        ]
      },
      {
        id: "sec-3",
        emoji: "🤝",
        heading: "3. Phép giao (A ∩ B) & Phép hợp (A ∪ B)",
        blocks: [
          {
            kind: "text",
            text: "Giao và Hợp là hai phép toán cơ bản nhất kết nối các tập hợp lại với nhau trong không gian số."
          },
          {
            kind: "compare",
            left: {
              title: "Phép giao A ∩ B ('VÀ')",
              emoji: "🤝",
              items: [
                "$A \\cap B = \\{x \\mid x \\in A \\text{ và } x \\in B\\}$.",
                "Lấy PHẦN CHUNG mà cả hai tập hợp cùng sở hữu.",
                "Quy tắc trục số: Gạch bỏ phần không thuộc $A$, rồi gạch tiếp phần không thuộc $B$. Phần còn lại chưa bị gạch là $A \\cap B$."
              ]
            },
            right: {
              title: "Phép hợp A ∪ B ('HOẶC')",
              emoji: "🌐",
              items: [
                "$A \\cup B = \\{x \\mid x \\in A \\text{ hoặc } x \\in B\\}$.",
                "Lấy TẤT CẢ các phần tử thuộc ít nhất một trong hai tập hợp.",
                "Quy tắc trục số: Tô đậm toàn bộ phần thuộc $A$ và toàn bộ phần thuộc $B$. Toàn bộ vùng được tô là $A \\cup B$."
              ]
            }
          },
          {
            kind: "steps",
            items: [
              {
                label: "Giao khoảng",
                title: "Tìm miền giao thoa",
                text: "Giao của hai khoảng $[a; b] \\cap [c; d] = [\\max(a, c); \\min(b, d)]$ (khi $\\max(a, c) \\le \\min(b, d)$)."
              },
              {
                label: "Hợp khoảng",
                title: "Nối liền khoảng liên tục",
                text: "Nếu hai khoảng có phần giao khác rỗng hoặc nối tiếp nhau thì hợp là một khoảng/đoạn kéo dài từ mút nhỏ nhất đến mút lớn nhất."
              }
            ]
          },
          {
            kind: "note",
            text: "📌 **KHẮC SÂU**: Nếu $A \\subset B$ thì $A \\cap B = A$ và $A \\cup B = B$. Đây là tính chất rất hay gặp trong các câu hỏi trắc nghiệm lí thuyết nhận biết."
          },
          {
            kind: "check",
            q: "Cho $A = [-1; 4)$ và $B = [1; 6]$. Khi đó $A \\cap B$ và $A \\cup B$ lần lượt là:",
            options: [
              "$A \\cap B = [1; 4)$ và $A \\cup B = [-1; 6]$",
              "$A \\cap B = [-1; 6]$ và $A \\cup B = [1; 4)$",
              "$A \\cap B = (1; 4)$ và $A \\cup B = [-1; 6)$",
              "$A \\cap B = [1; 4]$ và $A \\cup B = [-1; 6]$"
            ],
            answer: 0,
            explain: "Phần chung của $[-1; 4)$ và $[1; 6]$ là khoảng $[1; 4)$ (1 có trong cả hai, 4 không thuộc $A$). Hợp bao phủ liên tục từ mút trái $-1$ đến mút phải $6$, tức là $[-1; 6]$."
          }
        ]
      },
      {
        id: "sec-4",
        emoji: "✂️",
        heading: "4. Phép hiệu (A \\ B) & Phần bù (C_E A)",
        blocks: [
          {
            kind: "text",
            text: "Phép lấy hiệu tương đương với phép trừ trong tập hợp: giữ lại những phần tử của $A$ và loại bỏ thẳng tay những phần tử dính líu đến $B$."
          },
          {
            kind: "cards",
            tone: "nebula",
            items: [
              {
                emoji: "✂️",
                title: "Hiệu A \\ B",
                text: "$A \\setminus B = \\{x \\mid x \\in A \\text{ và } x \\notin B\\}$.\nGồm các phần tử thuộc $A$ nhưng KHÔNG thuộc $B$."
              },
              {
                emoji: "🌓",
                title: "Phần bù C_E A",
                text: "Khi $A \\subset E$, hiệu $E \\setminus A$ được gọi là phần bù của $A$ trong $E$, kí hiệu là $C_E A$."
              },
              {
                emoji: "🌍",
                title: "Phần bù trong ℝ",
                text: "$C_{\\mathbb{R}} A = \\mathbb{R} \\setminus A$.\nLà tập hợp tất cả các số thực không thuộc $A$."
              },
              {
                emoji: "⭕",
                title: "Tính chất quan trọng",
                text: "$A \\setminus A = \\emptyset$; $A \\setminus \\emptyset = A$.\n$C_E(C_E A) = A$; $A \\cap C_E A = \\emptyset$."
              }
            ]
          },
          {
            kind: "note",
            text: "⚠️ **CẢNH BÁO BẪY ĐẦU MÚT KHI TÌM HIỆU & PHẦN BÙ KHOẢNG/ĐOẠN**:\n\nKhi thực hiện $\\mathbb{R} \\setminus A$ hoặc $A \\setminus B$:\n• Nếu điểm mút $x_0$ **THUỘC $B$** (ngoặc vuông $[$ của $B$) $\\Rightarrow$ Điểm đó **BỊ LOẠI BỎ** khỏi hiệu, đầu mút của hiệu trở thành **ngoặc tròn** $($!\n• Nếu điểm mút $x_0$ **KHÔNG THUỘC $B$** (ngoặc tròn $($ của $B$) nhưng thuộc $A$ $\\Rightarrow$ Điểm đó **ĐƯỢC GIỮ LẠI**, đầu mút của hiệu trở thành **ngoặc vuông** $[$!"
          },
          {
            kind: "check",
            q: "Cho tập hợp $A = [-2; 3)$. Phần bù của $A$ trong $\\mathbb{R}$ là:",
            options: [
              "$(-\\infty; -2) \\cup [3; +\\infty)$",
              "$(-\\infty; -2] \\cup (3; +\\infty)$",
              "$(-\\infty; -2) \\cup (3; +\\infty)$",
              "$(-\\infty; -2] \\cup [3; +\\infty)$"
            ],
            answer: 0,
            explain: "Ta có $C_{\\mathbb{R}} A = \\mathbb{R} \\setminus [-2; 3)$. Tại $-2 \\in A$ nên trong phần bù $-2$ bị loại, trở thành ngoặc tròn $(-\\infty; -2)$. Tại $3 \\notin A$ nên trong phần bù $3$ được giữ lại, trở thành ngoặc vuông $[3; +\\infty)$. Do đó kết quả chuẩn là $(-\\infty; -2) \\cup [3; +\\infty)$."
          }
        ]
      },
      {
        id: "sec-5",
        emoji: "📊",
        heading: "5. Biểu đồ Ven & Công thức vàng giải toán thực tế",
        blocks: [
          {
            kind: "text",
            text: "Biểu đồ Ven trực quan hóa các mối quan hệ giữa các tập hợp bằng các đường cong kín phẳng, là công cụ trực quan mạnh mẽ nhất giải quyết các bài toán đếm thực tế."
          },
          {
            kind: "cards",
            tone: "plasma",
            items: [
              {
                emoji: "🌟",
                title: "Công thức hợp hai tập hợp",
                text: "$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$\nPhải trừ đi $n(A \\cap B)$ vì phần giao được tính lặp lại hai lần."
              },
              {
                emoji: "💎",
                title: "Chỉ thuộc duy nhất một tập",
                text: "• Số phần tử chỉ thuộc $A$: $n(A \\setminus B) = n(A) - n(A \\cap B)$.\n• Số phần tử chỉ thuộc $B$: $n(B \\setminus A) = n(B) - n(A \\cap B)$."
              }
            ]
          },
          {
            kind: "steps",
            items: [
              {
                label: "Bước 1",
                title: "Vẽ các đường cong bao kín",
                text: "Vẽ hai hình tròn (hoặc elip) lồng vào nhau đại diện cho tập $A$ và tập $B$ bên trong hình chữ nhật đại diện cho tập vũ trụ."
              },
              {
                label: "Bước 2",
                title: "Điền phần giao nhau trước tiên",
                text: "Bí quyết sống còn: Luôn luôn điền số lượng phần tử của phần chung $A \\cap B$ trước tiên vào vùng giao thoa ở giữa!"
              },
              {
                label: "Bước 3",
                title: "Tính các vùng thành phần còn lại",
                text: "Lấy tổng số của từng tập trừ đi phần giao để tìm số lượng các đối tượng chỉ tham gia $A$ hoặc chỉ tham gia $B$."
              }
            ]
          },
          {
            kind: "note",
            text: "💡 **MẸO ĐẾM BA TẬP HỢP (MỞ RỘNG CHO HỌC SINH GIỎI)**:\n\n$$n(A \\cup B \\cup C) = n(A) + n(B) + n(C) - n(A \\cap B) - n(B \\cap C) - n(C \\cap A) + n(A \\cap B \\cap C)$$\n(Cộng đơn, trừ đôi, cộng ba)."
          },
          {
            kind: "check",
            q: "Một lớp có 40 học sinh, 25 em thích môn Toán, 20 em thích môn Lý, và 12 em thích cả hai môn. Số học sinh chỉ thích đúng một môn Toán là:",
            options: [
              "8 em",
              "13 em",
              "25 em",
              "15 em"
            ],
            answer: 1,
            explain: "Số học sinh CHỈ thích môn Toán là phần hiệu của tập Toán và phần giao: $n(T \\setminus L) = n(T) - n(T \\cap L) = 25 - 12 = 13$ em."
          }
        ]
      }
    ],
    summary: [
      "1. Tập con & Bằng nhau: $A \\subset B \\Leftrightarrow (\\forall x \\in A \\Rightarrow x \\in B)$. Một tập hợp gồm $n$ phần tử thì có đúng $2^n$ tập con.",
      "2. Khoảng & Đoạn: Ngoặc vuông $[, ]$ là có lấy dấu bằng (lấy đầu mút); Ngoặc tròn $(, )$ là không lấy dấu bằng (bỏ đầu mút). Vô cực $\\pm\\infty$ luôn đi kèm ngoặc tròn.",
      "3. Giao & Hợp: $A \\cap B$ lấy phần chung (và); $A \\cup B$ lấy tất cả các phần tử của cả hai tập (hoặc).",
      "4. Hiệu & Phần bù: $A \\setminus B$ gồm các phần tử thuộc $A$ nhưng không thuộc $B$. Lưu ý quy tắc đảo ngoặc vuông $\\leftrightarrow$ tròn tại đầu mút giao nhau.",
      "5. Công thức đếm thực tế: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$. Khi giải bài toán thực tế bằng biểu đồ Ven, luôn điền phần giao ở giữa trước tiên!"
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
