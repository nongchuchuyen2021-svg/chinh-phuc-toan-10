import type { LessonTheory } from "./types";

export const THEORY_BANK: Record<string, LessonTheory> = {
  "bai-01": {
    intro: "Mệnh đề là khái niệm nền tảng của toán học hiện đại. Bài học này trang bị tư duy logic, cách phát biểu mệnh đề phủ định, mệnh đề kéo theo, mệnh đề tương đương và các kí hiệu với mọi ($\\forall$), tồn tại ($\\exists$).",
    minutes: 10,
    sections: [
      {
        id: "sec-1",
        emoji: "💡",
        heading: "1. Mệnh đề và Mệnh đề chứa biến",
        blocks: [
          {
            kind: "text",
            text: "Mệnh đề là một câu khẳng định có tính đúng hoặc sai rõ ràng. Một mệnh đề không thể vừa đúng vừa sai."
          },
          {
            kind: "cards",
            tone: "nebula",
            items: [
              {
                emoji: "✅",
                title: "Mệnh đề đúng",
                text: "Ví dụ: 'Số 19 là số nguyên tố', 'Tổng ba góc trong một tam giác bằng 180°'."
              },
              {
                emoji: "❌",
                title: "Mệnh đề sai",
                text: "Ví dụ: 'Số 10 là số lẻ', 'Tam giác đều có 4 cạnh bằng nhau'."
              },
              {
                emoji: "❓",
                title: "Không phải mệnh đề",
                text: "Các câu hỏi, câu cảm thán, câu cầu khiến: 'Hôm nay trời đẹp quá!', 'Mấy giờ rồi?'."
              }
            ]
          },
          {
            kind: "check",
            q: "Câu nào sau đây là một mệnh đề toán học?",
            options: [
              "Học toán thật là vui!",
              "Phương trình x² - 4 = 0 có hai nghiệm phân biệt trên ℝ.",
              "Hãy giải phương trình này ngay!",
              "Bạn đã làm bài tập chưa?"
            ],
            answer: 1,
            explain: "Chỉ có khẳng định về nghiệm của phương trình x² - 4 = 0 là có tính đúng/sai xác định."
          }
        ]
      },
      {
        id: "sec-2",
        emoji: "🔄",
        heading: "2. Phủ định và Mệnh đề kéo theo",
        blocks: [
          {
            kind: "text",
            text: "Kí hiệu mệnh đề phủ định của $P$ là $\\overline{P}$. Nếu $P$ đúng thì $\\overline{P}$ sai và ngược lại."
          },
          {
            kind: "compare",
            left: {
              title: "Mệnh đề kéo theo P ⇒ Q",
              emoji: "➡️",
              items: [
                "Đọc là: 'Nếu P thì Q' hoặc 'P kéo theo Q'.",
                "P là điều kiện đủ để có Q.",
                "Q là điều kiện cần để có P.",
                "Chỉ sai khi P đúng mà Q sai."
              ]
            },
            right: {
              title: "Mệnh đề tương đương P ⇔ Q",
              emoji: "↔️",
              items: [
                "Đọc là: 'P khi và chỉ khi Q' hoặc 'P nếu và chỉ nếu Q'.",
                "P là điều kiện cần và đủ để có Q.",
                "Đúng khi cả P và Q cùng đúng hoặc cùng sai."
              ]
            }
          },
          {
            kind: "steps",
            items: [
              {
                label: "Bước 1",
                title: "Phủ định kí hiệu lượng từ",
                text: "Phủ định của kí hiệu $\\forall$ (với mọi) là kí hiệu $\\exists$ (tồn tại) và ngược lại."
              },
              {
                label: "Bước 2",
                title: "Phủ định biểu thức khẳng định",
                text: "Phủ định dấu '>' là '≤', dấu '<' là '≥', dấu '=' là '≠'."
              }
            ]
          }
        ]
      }
    ],
    summary: [
      "Mệnh đề là câu khẳng định đúng hoặc sai.",
      "Phủ định của mệnh đề: đổi $\\forall$ thành $\\exists$ và ngược lại.",
      "Mệnh đề kéo theo $P \\Rightarrow Q$ chỉ sai khi $P$ đúng mà $Q$ sai.",
      "Mệnh đề tương đương $P \\Leftrightarrow Q$ đúng khi cả hai cùng chân trị."
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
