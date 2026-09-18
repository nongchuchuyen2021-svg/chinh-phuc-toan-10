import type { LessonReview } from "./types";

export const REVIEWS_BANK: Record<string, LessonReview> = {
  "bai-01": {
    summary: "Nắm vững bản chất Mệnh đề toán học, mệnh đề phủ định, mệnh đề kéo theo, mệnh đề tương đương, cùng kĩ năng biến đổi lượng từ $\\forall$ và $\\exists$.",
    keyPoints: [
      "Mệnh đề toán học là một khẳng định đúng hoặc sai, không thể vừa đúng vừa sai.",
      "Mệnh đề chứa biến $P(x)$ chỉ trở thành mệnh đề khi gán cho $x$ một giá trị cụ thể.",
      "Phủ định của $\\forall$ là $\\exists$ và ngược lại. Phủ định của $>$ là $\\le$, của $<$ là $\\ge$, của $=$ là $\\ne$.",
      "Mệnh đề kéo theo $P \\Rightarrow Q$ chỉ SAI trong trường hợp duy nhất: $P$ đúng mà $Q$ sai.",
      "Trong $P \\Rightarrow Q$: $P$ là điều kiện ĐỦ để có $Q$; $Q$ là điều kiện CẦN để có $P$.",
      "Mệnh đề $P \\Leftrightarrow Q$ đúng khi cả $P$ và $Q$ cùng đúng hoặc cùng sai ($P$ là điều kiện cần và đủ để có $Q$)."
    ],
    commonMistakes: [
      {
        mistake: "Quên phủ định dấu bất đẳng thức hoặc nhầm phủ định của $>$ là $<$ thay vì $\\le$.",
        fix: "Phủ định của '$>$' là '$\\le$' (phải lấy cả dấu bằng). Tương tự, phủ định của '$\\ge$' là '$<$'."
      },
      {
        mistake: "Nhầm lẫn giữa 'Điều kiện cần' và 'Điều kiện đủ' trong mệnh đề $P \\Rightarrow Q$.",
        fix: "Ghi nhớ quy tắc: '$P$ đứng trước là ĐỦ, $Q$ đứng sau là CẦN' (Nếu $P$ thì $Q \\Leftrightarrow$ Có $P$ là đủ để có $Q$, muốn có $P$ thì cần phải có $Q$)."
      },
      {
        mistake: "Cho rằng câu chứa biến $x$ luôn là mệnh đề toán học.",
        fix: "Câu '$x + 1 > 0$' là mệnh đề chứa biến $P(x)$, không phải mệnh đề vì chưa xác định $x$. Tuy nhiên, '$\\forall x \\in \\mathbb{R},\\ x^2 + 1 > 0$' lại là mệnh đề đúng."
      }
    ],
    tips: [
      "Bác bỏ mệnh đề '$\\forall x \\in X,\\ P(x)$': Chỉ cần tìm đúng 1 phản ví dụ $x_0$ sao cho $P(x_0)$ sai.",
      "Chứng minh mệnh đề '$\\exists x \\in X,\\ P(x)$': Chỉ cần chỉ ra ít nhất 1 phần tử thoả mãn là đủ.",
      "Mẹo nhớ chân trị $P \\Rightarrow Q$: 'Hứa đúng mà không làm ($P$ đúng, $Q$ sai) mới là thất hứa (Sai)'."
    ],
    flashcards: [
      {
        front: "Mệnh đề toán học là gì?",
        back: "Là một câu khẳng định có tính đúng hoặc sai rõ ràng. Một mệnh đề không thể vừa đúng vừa sai."
      },
      {
        front: "Mệnh đề chứa biến $P(x)$ trở thành mệnh đề toán học khi nào?",
        back: "Khi ta gán cho biến $x$ một giá trị cụ thể thuộc tập xác định."
      },
      {
        front: "Phát biểu mệnh đề phủ định của '$\\forall x \\in \\mathbb{R},\\ x^2 + 1 > 0$'?",
        back: "$\\exists x \\in \\mathbb{R},\\ x^2 + 1 \\le 0$."
      },
      {
        front: "Mệnh đề kéo theo $P \\Rightarrow Q$ SAI trong trường hợp duy nhất nào?",
        back: "Khi giả thiết $P$ đúng nhưng kết luận $Q$ sai."
      },
      {
        front: "Trong mệnh đề $P \\Rightarrow Q$, $P$ được gọi là gì của $Q$?",
        back: "$P$ là điều kiện ĐỦ để có $Q$ (còn $Q$ là điều kiện CẦN để có $P$)."
      },
      {
        front: "Mệnh đề tương đương $P \\Leftrightarrow Q$ đúng khi nào?",
        back: "Đúng khi cả hai mệnh đề $P$ và $Q$ có cùng chân trị (cùng đúng hoặc cùng sai)."
      },
      {
        front: "Phủ định của khẳng định 'Mọi số nguyên tố đều là số lẻ' là gì?",
        back: "Tồn tại ít nhất một số nguyên tố không phải là số lẻ (số 2)."
      },
      {
        front: "Để bác bỏ mệnh đề '$\\forall x \\in X,\\ P(x)$', ta làm thế nào?",
        back: "Chỉ cần chỉ ra một giá trị cụ thể $x_0 \\in X$ (phản ví dụ) sao cho $P(x_0)$ sai."
      }
    ],
    checklist: [
      "Tôi phân biệt rành rọt câu nào là mệnh đề, câu nào không phải là mệnh đề.",
      "Tôi nhận biết và xác định được chân trị của mệnh đề chứa biến khi gán giá trị.",
      "Tôi lập thành thạo mệnh đề phủ định (kể cả mệnh đề chứa lượng từ $\\forall$ và $\\exists$).",
      "Tôi hiểu bản chất điều kiện CẦN, điều kiện ĐỦ và bảng chân trị của $P \\Rightarrow Q$.",
      "Tôi biết phát biểu mệnh đề đảo và mệnh đề tương đương $P \\Leftrightarrow Q$.",
      "Tôi biết cách tìm phản ví dụ để chứng minh một mệnh đề 'với mọi' là sai."
    ],
    mindmap: [
      {
        id: "mm-1",
        title: "1. Khái niệm Mệnh đề Toán học",
        emoji: "🎯",
        description: "Nền tảng logic học của toán học",
        children: [
          {
            title: "Định nghĩa",
            detail: "Câu khẳng định có tính đúng hoặc sai khách quan. Không thể vừa đúng vừa sai.",
          },
          {
            title: "Không phải mệnh đề",
            detail: "Câu hỏi (?), câu cảm thán (!), câu cầu khiến, câu bày tỏ ý kiến chủ quan.",
          },
          {
            title: "Mệnh đề chứa biến $P(x)$",
            detail: "Chưa xác định tính đúng sai. Chỉ trở thành mệnh đề khi thay $x$ bằng giá trị cụ thể.",
            formula: "$P(n): \\text{'$n$ chia hết cho 3'}$"
          }
        ]
      },
      {
        id: "mm-2",
        title: "2. Mệnh đề Phủ định $\\overline{P}$",
        emoji: "🔄",
        description: "Khẳng định điều trái ngược với P",
        formula: "$P \\text{ đúng} \\iff \\overline{P} \\text{ sai}$",
        children: [
          {
            title: "Quy tắc lập",
            detail: "Thêm hoặc bớt từ 'không' hoặc 'không phải' trước vị ngữ của mệnh đề.",
          },
          {
            title: "Chân trị",
            detail: "$P$ và $\\overline{P}$ luôn có tính đúng sai trái ngược nhau.",
          }
        ]
      },
      {
        id: "mm-3",
        title: "3. Mệnh đề Kéo theo ($P \\Rightarrow Q$)",
        emoji: "➡️",
        description: "Mối quan hệ nhân quả và logic suy luận",
        formula: "$P \\Rightarrow Q \\text{ chỉ sai khi } P \\text{ đúng, } Q \\text{ sai}$",
        children: [
          {
            title: "Cách phát biểu",
            detail: "\"Nếu P thì Q\", \"P kéo theo Q\", \"P suy ra Q\".",
          },
          {
            title: "Điều kiện Cần và Đủ",
            detail: "$P$ là điều kiện ĐỦ để có $Q$; $Q$ là điều kiện CẦN để có $P$.",
          },
          {
            title: "Mệnh đề đảo",
            detail: "Mệnh đề đảo của $P \\Rightarrow Q$ là $Q \\Rightarrow P$ (không nhất thiết cùng chân trị).",
            formula: "$Q \\Rightarrow P$"
          }
        ]
      },
      {
        id: "mm-4",
        title: "4. Mệnh đề Tương đương ($P \\Leftrightarrow Q$)",
        emoji: "⚖️",
        description: "Hai mệnh đề kéo theo nhau cả hai chiều",
        formula: "$P \\Leftrightarrow Q \\iff (P \\Rightarrow Q) \\text{ và } (Q \\Rightarrow P)$",
        children: [
          {
            title: "Cách phát biểu",
            detail: "\"P khi và chỉ khi Q\", \"P tương đương Q\", \"P là điều kiện cần và đủ để có Q\".",
          },
          {
            title: "Chân trị",
            detail: "Đúng khi cả $P$ và $Q$ cùng đúng hoặc cùng sai.",
          }
        ]
      },
      {
        id: "mm-5",
        title: "5. Lượng từ Với mọi ($\\forall$) & Tồn tại ($\\exists$)",
        emoji: "🌐",
        description: "Mở rộng mệnh đề chứa biến trên một tập hợp",
        children: [
          {
            title: "Kí hiệu $\\forall$",
            detail: "\"$\\forall x \\in X,\\ P(x)$\" đúng khi $P(x)$ đúng với TẤT CẢ $x$. Sai khi có ít nhất 1 phản ví dụ.",
          },
          {
            title: "Kí hiệu $\\exists$",
            detail: "\"$\\exists x \\in X,\\ P(x)$\" đúng khi có ÍT NHẤT 1 phần tử thoả mãn. Sai khi mọi $x$ đều sai.",
          },
          {
            title: "Quy tắc phủ định",
            detail: "Phủ định của $\\forall$ là $\\exists$; phủ định của $\\exists$ là $\\forall$. Đổi dấu bất đẳng thức kèm dấu bằng.",
            formula: "$\\overline{\\forall x \\in X,\\ P(x)} \\iff \\exists x \\in X,\\ \\overline{P(x)}$"
          }
        ]
      }
    ]
  },

  "bai-02": {
    summary: "Nắm trọn bản chất Tập hợp, quan hệ tập con, các tập hợp số thực (khoảng, đoạn) và thành thạo 4 phép toán cốt lõi: Giao ($\\cap$), Hợp ($\\cup$), Hiệu ($\\setminus$) và Phần bù ($C_E A$).",
    keyPoints: [
      "Tập hợp con: $A \\subset B \\Leftrightarrow (\\forall x \\in A \\Rightarrow x \\in B)$. Tập $n$ phần tử có đúng $2^n$ tập con.",
      "Giao của hai tập hợp: $A \\cap B = \\{x \\mid x \\in A \\text{ VÀ } x \\in B\\}$ (lấy phần chung).",
      "Hợp của hai tập hợp: $A \\cup B = \\{x \\mid x \\in A \\text{ HOẶC } x \\in B\\}$ (gom tất cả).",
      "Hiệu của hai tập hợp: $A \\setminus B = \\{x \\mid x \\in A \\text{ VÀ } x \\notin B\\}$ (thuộc $A$, gạt bỏ $B$).",
      "Phần bù: Khi $A \\subset E$, phần bù của $A$ trong $E$ là $C_E A = E \\setminus A$.",
      "Công thức đếm phần tử: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$."
    ],
    commonMistakes: [
      {
        mistake: "Nhầm lẫn giữa kí hiệu phần tử thuộc '∈' và tập con '⊂'.",
        fix: "Quy tắc: Phần tử thì đi với '∈' (ví dụ $1 \\in A$), còn Tập hợp thì đi với '⊂' (ví dụ $\\{1\\} \\subset A$). Riêng tập rỗng $\\varnothing \\subset A$ với mọi $A$."
      },
      {
        mistake: "Xác định sai ngoặc vuông '[' và ngoặc tròn '(' khi tìm hiệu hai khoảng $A \\setminus B$.",
        fix: "Nếu mút $x_0$ thuộc tập bị trừ $B$ thì trong hiệu sẽ không còn $x_0$ (dùng ngoặc tròn). Ngược lại, nếu mút $x_0$ KHÔNG thuộc $B$ thì nó vẫn còn nguyên trong $A$ (dùng ngoặc vuông)."
      },
      {
        mistake: "Quên trừ phần giao khi tính số học sinh thích ít nhất một môn.",
        fix: "Luôn dùng biểu đồ Venn hoặc công thức $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$ để tránh đếm trùng 2 lần phần chung."
      }
    ],
    tips: [
      "Kĩ thuật Trục số 1 chiều: Vẽ trục số, biểu diễn tập hợp bằng cách GẠCH BỎ phần không thuộc tập hợp. Phần trắng còn lại chính là kết quả.",
      "Mẹo nhớ phép toán: Giao là VÀ (giao lưu gặp gỡ - phần chung) · Hợp là HOẶC (hợp tác gom chung) · Hiệu là BỎ (loại trừ sạch sẽ).",
      "Số tập con: Muốn tính số tập con của tập có $n$ phần tử, bấm ngay $2^n$ trên máy tính Casio."
    ],
    flashcards: [
      {
        front: "Tập hợp rỗng $\\varnothing$ có phải là tập con của mọi tập hợp không?",
        back: "Đúng. $\\varnothing \\subset A$ với mọi tập hợp $A$."
      },
      {
        front: "Tập hợp có $n$ phần tử thì có tất cả bao nhiêu tập con?",
        back: "Có đúng $2^n$ tập con (bao gồm cả $\\varnothing$ và chính nó)."
      },
      {
        front: "Điều kiện để hai tập hợp $A$ và $B$ bằng nhau ($A = B$)?",
        back: "$A \\subset B$ và $B \\subset A$."
      },
      {
        front: "Hiệu $A \\setminus B$ là tập hợp gồm những phần tử nào?",
        back: "Gồm các phần tử thuộc $A$ nhưng không thuộc $B$."
      },
      {
        front: "Phần bù $C_E A$ được định nghĩa khi nào?",
        back: "Chỉ được định nghĩa khi $A$ là tập con của $E$ ($A \\subset E$), khi đó $C_E A = E \\setminus A$."
      },
      {
        front: "Nếu $A \\cap B = \\varnothing$ thì hai tập hợp gọi là gì?",
        back: "Hai tập hợp rời nhau."
      },
      {
        front: "Khoảng $(a; b)$ và đoạn $[a; b]$ khác nhau ở điểm nào?",
        back: "Đoạn $[a; b]$ lấy cả 2 đầu mút $a$ và $b$ ($a \\le x \\le b$); khoảng $(a; b)$ không lấy 2 đầu mút ($a < x < b$)."
      },
      {
        front: "Công thức số phần tử của hợp hai tập hữu hạn?",
        back: "$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$."
      }
    ],
    checklist: [
      "Tôi phân biệt chính xác khi nào dùng kí hiệu $\\in$ và khi nào dùng $\\subset$.",
      "Tôi thuộc công thức tính số tập con $2^n$.",
      "Tôi biểu diễn thành thạo các khoảng, đoạn, nửa khoảng trên trục số thực.",
      "Tôi tìm chuẩn xác giao, hợp, hiệu, phần bù của các tập số.",
      "Tôi giải quyết được bài toán thực tế đếm số phần tử bằng biểu đồ Venn."
    ]
  },

  "bai-06": {
    summary: "Định lí côsin, định lí sin, các công thức tính diện tích tam giác và giải tam giác.",
    keyPoints: [
      "Định lí côsin: a² = b² + c² - 2bc cos A.",
      "Định lí sin: a / sin A = b / sin B = c / sin C = 2R.",
      "Diện tích: S = 1/2 bc sin A = abc/(4R) = pr = √(p(p-a)(p-b)(p-c))."
    ],
    commonMistakes: [
      {
        mistake: "Quên dấu trừ trong công thức định lí côsin hoặc nhầm sang hàm sin.",
        fix: "Ghi nhớ: a² = b² + c² TRỪ 2bc COS A."
      },
      {
        mistake: "Nhầm bán kính ngoại tiếp R với 2R khi áp dụng định lí sin.",
        fix: "Ghi nhớ: Tỉ số a / sin A bằng 2R (đường kính), muốn tìm R phải chia cho 2."
      }
    ],
    tips: [
      "Biết 3 cạnh hoặc 2 cạnh và góc xen giữa -> Dùng định lí côsin.",
      "Biết 1 cạnh và góc đối diện -> Dùng định lí sin."
    ],
    flashcards: [
      {
        front: "Công thức định lí côsin tính cạnh a?",
        back: "a² = b² + c² - 2bc cos A."
      },
      {
        front: "Tỉ số a / sin A trong định lí sin bằng gì?",
        back: "Bằng 2R (với R là bán kính đường tròn ngoại tiếp tam giác)."
      },
      {
        front: "Công thức Heron tính diện tích tam giác?",
        back: "S = √(p(p-a)(p-b)(p-c)) với p = (a+b+c)/2 là nửa chu vi."
      }
    ],
    checklist: [
      "Tôi thuộc làu định lí côsin và định lí sin.",
      "Tôi nắm vững cả 5 công thức tính diện tích tam giác.",
      "Tôi biết vận dụng giải các bài toán thực tế (đo khoảng cách, chiều cao không thể tới được)."
    ]
  }
};

export function getLessonReview(lessonId: string): LessonReview {
  return (
    REVIEWS_BANK[lessonId] ?? {
      summary: "Tổng kết kiến thức trọng tâm, ghi nhớ công thức và phòng tránh lỗi sai trong bài kiểm tra.",
      keyPoints: [
        "Nắm vững các định nghĩa, định lí và hệ quả được nêu trong SGK.",
        "Ghi nhớ các công thức tính toán và phạm vi ứng dụng.",
        "Rèn luyện kĩ năng giải trắc nghiệm nhanh và bấm máy tính cầm tay."
      ],
      commonMistakes: [
        {
          mistake: "Không kiểm tra điều kiện xác định trước khi tính toán.",
          fix: "Luôn tìm tập xác định hoặc điều kiện nghiệm trước khi biến đổi."
        }
      ],
      tips: [
        "Dùng phương pháp loại trừ đáp án vô lí trong câu hỏi trắc nghiệm.",
        "Vẽ hình phác thảo để có trực quan hình học chính xác."
      ],
      flashcards: [
        {
          front: "Phương pháp học tốt môn Toán 10 là gì?",
          back: "Hiểu bản chất lý thuyết, làm nhiều dạng bài tập và tự tổng hợp sơ đồ tư duy sau mỗi chương."
        },
        {
          front: "Cách tránh mất điểm đáng tiếc trong bài thi?",
          back: "Đọc kĩ đề bài, kiểm tra điều kiện và bấm lại máy tính để soát đáp số."
        }
      ],
      checklist: [
        "Tôi đã nắm vững kiến thức lý thuyết của bài học.",
        "Tôi đã hoàn thành các câu trắc nghiệm 4 lựa chọn.",
        "Tôi đã vượt qua các câu hỏi đúng/sai và tự luận."
      ]
    }
  );
}
