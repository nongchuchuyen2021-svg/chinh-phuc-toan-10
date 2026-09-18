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

  "bai-03": {
    summary: "Nắm vững định nghĩa bất phương trình bậc nhất hai ẩn, thành thạo kỹ thuật vẽ đường thẳng bờ $d$ (phân biệt nét đứt vs nét liền), kỹ thuật thử toạ độ điểm $O(0;0)$ và ứng dụng mô hình hoá bài toán kinh tế thực tế.",
    keyPoints: [
      "Dạng tổng quát: $ax + by \\le c$ (hoặc $\\ge c, < c, > c$) với $a^2 + b^2 \\ne 0$ (hệ số $a, b$ không đồng thời bằng 0).",
      "Nghiệm của BPT là cặp số thực $(x_0; y_0)$ thoả mãn đẳng thức số học: $ax_0 + by_0 \\le c$. BPT luôn có VÔ SỐ nghiệm.",
      "Đường thẳng biên $d: ax + by = c$ chia mặt phẳng toạ độ $Oxy$ thành hai nửa mặt phẳng đối nhau.",
      "Quy tắc nét vẽ bờ $d$: BPT mang dấu ngặt ($<, >$) vẽ NÉT ĐỨT (không kể bờ); BPT mang dấu có bằng ($\\le, \\ge$) vẽ NÉT LIỀN (kể cả bờ).",
      "Phương pháp thử điểm: Nếu $c \\ne 0$, thay toạ độ gốc $O(0;0)$ vào để kiểm tra. Nếu mệnh đề đúng $\\to$ lấy nửa mặt phẳng chứa $O$; nếu sai $\\to$ lấy nửa mặt phẳng không chứa $O$.",
      "Mô hình thực tế: Luôn bổ sung các điều kiện tự nhiên của biến như $x \\ge 0, y \\ge 0$ hoặc $x, y \\in \\mathbb{N}$ khi bài toán liên quan đến số lượng sản phẩm, diện tích, con người."
    ],
    commonMistakes: [
      {
        mistake: "Vẽ nét liền cho bất phương trình dấu ngặt ($<$ hoặc $>$).",
        fix: "Quy tắc vàng: Bất phương trình ngặt ($<, >$) không lấy các điểm trên đường biên $d$, bắt buộc phải vẽ bằng NÉT ĐỨT. Chỉ vẽ nét liền khi có dấu bằng ($\\le, \\ge$)."
      },
      {
        mistake: "Cố tình dùng gốc toạ độ $O(0;0)$ làm điểm thử khi đường thẳng biên đi qua gốc $O$ ($c = 0$).",
        fix: "Khi $c = 0$, đường thẳng $ax + by = 0$ đi qua chính gốc $O(0;0)$. Bắt buộc phải chọn một điểm thử khác nằm ngoài bờ, thuận tiện nhất là điểm $(1; 0)$ trên trục $Ox$ hoặc $(0; 1)$ trên trục $Oy$."
      },
      {
        mistake: "Quên đổi chiều bất đẳng thức khi chia cho hệ số âm để rút $y$.",
        fix: "Khi biến đổi dạng $by \\le -ax + c$, nếu chia cả hai vế cho số âm $b < 0$ thì BẮT BUỘC phải đổi chiều bất đẳng thức: $\\le$ thành $\\ge$."
      }
    ],
    tips: [
      "Mẹo nhớ nét vẽ bờ: 'Có dấu bằng $\\to$ Nét liền vững chãi · Không dấu bằng $\to$ Nét đứt cách ngăn'.",
      "Kiểm tra nhanh điểm $O(0; 0)$: Khi BPT có dạng $ax + by \\le c$, thay $O(0;0)$ vế trái luôn bằng 0. Chỉ cần so sánh $0$ với $c$ là biết ngay $O$ thuộc hay không thuộc miền nghiệm trong 1 giây.",
      "Vẽ đường thẳng bờ $ax + by = c$: Tìm 2 giao điểm với các trục toạ độ $A(c/a; 0)$ trên $Ox$ (cho $y = 0$) và $B(0; c/b)$ trên $Oy$ (cho $x = 0$) rồi nối lại là xong."
    ],
    flashcards: [
      {
        front: "Bất phương trình bậc nhất hai ẩn có dạng tổng quát như thế nào?",
        back: "$ax + by \\le c$ (hoặc $\\ge c, < c, > c$) với $a, b, c \\in \\mathbb{R}$ và $a^2 + b^2 \\ne 0$."
      },
      {
        front: "Một bất phương trình bậc nhất hai ẩn có bao nhiêu nghiệm?",
        back: "Luôn có VÔ SỐ nghiệm. Tập nghiệm được biểu diễn bởi một nửa mặt phẳng trên toạ độ $Oxy$."
      },
      {
        front: "Khi nào đường thẳng bờ $d$ được vẽ bằng NÉT ĐỨT?",
        back: "Khi bất phương trình mang dấu ngặt ($<$ hoặc $>$), tức là không lấy các điểm nằm trên bờ."
      },
      {
        front: "Khi nào đường thẳng bờ $d$ được vẽ bằng NÉT LIỀN?",
        back: "Khi bất phương trình mang dấu có bằng ($\\le$ hoặc $\\ge$), tức là miền nghiệm bao gồm cả các điểm trên bờ."
      },
      {
        front: "Nếu đường thẳng bờ $d$ đi qua gốc toạ độ $O(0;0)$, ta chọn điểm thử như thế nào?",
        back: "Chọn một điểm bất kì không nằm trên bờ $d$, thuận tiện nhất là điểm $(1; 0)$ hoặc $(0; 1)$."
      },
      {
        front: "Điểm $M(x_0; y_0)$ là nghiệm của $ax + by \\le c$ khi nào?",
        back: "Khi thay toạ độ $x_0, y_0$ vào cho ta một bất đẳng thức đúng: $ax_0 + by_0 \\le c$."
      },
      {
        front: "Đường thẳng biên $y = 3$ có vị trí hình học như thế nào?",
        back: "Là đường thẳng nằm ngang, vuông góc với $Oy$ tại $(0; 3)$ và song song với trục hoành $Ox$."
      },
      {
        front: "Để vẽ nhanh đường thẳng bờ $2x - 3y = 6$, ta tìm 2 điểm đặc biệt nào?",
        back: "Giao trục $Ox$: cho $y = 0 \\Rightarrow x = 3 \\to (3; 0)$. Giao trục $Oy$: cho $x = 0 \\Rightarrow y = -2 \\to (0; -2)$."
      }
    ],
    checklist: [
      "Tôi nhận biết chính xác đâu là bất phương trình bậc nhất hai ẩn và đâu không phải.",
      "Tôi kiểm tra nhanh một cặp toạ độ $(x_0; y_0)$ có phải là nghiệm hay không.",
      "Tôi vẽ chuẩn xác đường thẳng bờ $d$ (phân biệt đúng nét liền và nét đứt).",
      "Tôi thành thạo kĩ thuật thử điểm $O(0; 0)$ để xác định nửa mặt phẳng nghiệm.",
      "Tôi biết thiết lập bất phương trình từ bài toán thực tế (kinh tế, sản xuất, dinh dưỡng)."
    ],
    mindmap: [
      {
        id: "mm-b3-1",
        title: "1. Khái niệm & Dạng tổng quát",
        emoji: "📐",
        description: "Nền tảng đại số bất phương trình 2 biến",
        formula: "$ax + by \\le c \\ (a^2 + b^2 \\ne 0)$",
        children: [
          {
            title: "Hệ số & Ẩn",
            detail: "$x, y$ là hai ẩn số; $a, b, c \\in \\mathbb{R}$. Bậc cao nhất của cả $x$ và $y$ đều là bậc 1.",
          },
          {
            title: "Cặp nghiệm $(x_0; y_0)$",
            detail: "Thay vào cho bất đẳng thức đúng. Luôn có vô số nghiệm tạo thành một nửa mặt phẳng.",
          }
        ]
      },
      {
        id: "mm-b3-2",
        title: "2. Đường thẳng bờ d & Quy tắc nét vẽ",
        emoji: "➖",
        description: "Ranh giới phân chia mặt phẳng toạ độ Oxy",
        children: [
          {
            title: "Nét đứt (Không kể bờ)",
            detail: "Áp dụng cho BPT dấu ngặt ($<, >$). Các điểm nằm trên bờ không phải là nghiệm.",
            formula: "$ax + by < c \\text{ hoặc } > c$"
          },
          {
            title: "Nét liền (Kể cả bờ)",
            detail: "Áp dụng cho BPT có dấu bằng ($\\le, \\ge$). Các điểm nằm trên bờ vẫn là nghiệm hợp lệ.",
            formula: "$ax + by \\le c \\text{ hoặc } \\ge c$"
          }
        ]
      },
      {
        id: "mm-b3-3",
        title: "3. Quy trình 3 bước biểu diễn miền nghiệm",
        emoji: "🗺️",
        description: "Trực quan hoá miền nghiệm trên hệ trục toạ độ Oxy",
        children: [
          {
            title: "Bước 1: Vẽ đường bờ d",
            detail: "Vẽ đường thẳng $ax + by = c$ đi qua 2 giao điểm với 2 trục toạ độ.",
          },
          {
            title: "Bước 2: Chọn điểm kiểm tra",
            detail: "Nếu $c \\ne 0$, chọn $O(0;0)$. Nếu $c = 0$, chọn $M(1;0)$ hoặc $M(0;1)$.",
          },
          {
            title: "Bước 3: Kết luận & Gạch bỏ",
            detail: "Gạch bỏ nửa mặt phẳng không chứa nghiệm, giữ lại nửa mặt phẳng chứa nghiệm.",
          }
        ]
      },
      {
        id: "mm-b3-4",
        title: "4. Ứng dụng thực tế",
        emoji: "🏭",
        description: "Mô hình hoá bài toán tối ưu kinh tế",
        children: [
          {
            title: "Đặt biến & Điều kiện",
            detail: "Gọi $x, y$ là số sản phẩm/diện tích. Luôn có điều kiện $x \\ge 0, y \\ge 0$.",
          },
          {
            title: "Bất phương trình ràng buộc",
            detail: "Giới hạn thời gian máy móc, giới hạn nguyên vật liệu, hoặc ngân sách chi tiêu.",
          }
        ]
      }
    ]
  },

  "bai-04": {
    summary: "Nắm trọn bản chất Hệ bất phương trình bậc nhất hai ẩn, thành thạo phương pháp biểu diễn miền nghiệm đa giác bằng kỹ thuật gạch bỏ, nằm lòng Định lí Cực trị trên miền đa giác và chinh phục các bài toán tối ưu hoá kinh tế thực tế.",
    keyPoints: [
      "Hệ bất phương trình bậc nhất hai ẩn gồm nhiều BPT bậc nhất hai ẩn. Cặp $(x_0; y_0)$ là nghiệm của hệ khi thoả mãn đồng thời tất cả các BPT trong hệ.",
      "Miền nghiệm của hệ là PHẦN GIAO của miền nghiệm từng BPT thành phần. Biểu diễn bằng cách gạch bỏ các phần không thoả mãn, miền trắng còn lại chính là nghiệm.",
      "Quy tắc đường biên: BPT có dấu bằng ($\\le, \\ge$) vẽ NÉT LIỀN (thuộc miền nghiệm); BPT dấu ngặt ($<, >$) vẽ NÉT ĐỨT (không thuộc miền nghiệm).",
      "Miền đa giác: Khi hệ giới hạn bởi các đường thẳng cắt nhau khép kín, miền nghiệm là miền đa giác (tam giác, tứ giác). Toạ độ các đỉnh tìm bằng cách giải hệ 2 phương trình từng cặp đường biên.",
      "Định lí cực trị: Giá trị lớn nhất (hoặc nhỏ nhất) của biểu thức bậc nhất $F(x; y) = ax + by$ trên một miền đa giác đóng LUÔN ĐẠT ĐƯỢC TẠI MỘT TRONG CÁC ĐỈNH của đa giác đó.",
      "Mô hình quy hoạch tuyến tính: Thiết lập hệ điều kiện ràng buộc tài nguyên $\\to$ Xác định miền nghiệm và toạ độ các đỉnh $\\to$ Lập bảng tính $F$ tại từng đỉnh $\\to$ Kết luận phương án tối ưu."
    ],
    commonMistakes: [
      {
        mistake: "Quên đặt điều kiện không âm $x \\ge 0, y \\ge 0$ (hoặc $x, y \\in \\mathbb{N}$) khi mô hình hoá bài toán thực tế.",
        fix: "Số sản phẩm, số máy điều hoà, diện tích trồng trọt, số lượng thực phẩm trong đời sống không thể nhận giá trị âm. Luôn luôn bổ sung $x \\ge 0, y \\ge 0$ vào hệ ràng buộc."
      },
      {
        mistake: "Lấy cả các đỉnh nằm trên đường biên nét đứt khi hệ có bất phương trình dấu ngặt ($<, >$).",
        fix: "Nếu một đỉnh là giao điểm của một đường nét đứt với một đường khác, đỉnh đó KHÔNG THUỘC miền nghiệm. Không được lấy giá trị tại đỉnh này làm nghiệm tối ưu."
      },
      {
        mistake: "Giải sai hệ phương trình dẫn đến toạ độ đỉnh bị lệch, kéo theo tính sai giá trị $F_{\\max}, F_{\\min}$.",
        fix: "Sau khi giải hệ tìm toạ độ giao điểm $(x; y)$, luôn thay ngược lại vào cả hai phương trình đường thẳng để kiểm tra đẳng thức trước khi tính biểu thức $F$."
      }
    ],
    tips: [
      "Bí quyết trắc nghiệm 30s: Thay trực tiếp các phương án $(x; y)$ của 4 đáp án vào hệ BPT. Phương án nào vi phạm loại ngay, phương án nào thoả mãn cho giá trị $F$ cao nhất là đáp án đúng!",
      "Kĩ thuật Lập bảng đỉnh: Liệt kê danh sách các đỉnh theo thứ tự ngược chiều kim đồng hồ quanh đa giác. Lập cột Toạ độ và cột Giá trị $F(x; y)$ để không bao giờ bị tính sót đỉnh.",
      "Đỉnh tối ưu thường gặp: Trong các bài toán kinh tế có hai ràng buộc lớn (vốn và số lượng), đỉnh tối ưu hầu như luôn là GIAO ĐIỂM của hai đường thẳng giới hạn hai tài nguyên đó."
    ],
    flashcards: [
      {
        front: "Khi nào cặp số $(x_0; y_0)$ là nghiệm của một hệ bất phương trình?",
        back: "Khi nó đồng thời là nghiệm của TẤT CẢ các bất phương trình trong hệ đó."
      },
      {
        front: "Miền nghiệm của hệ bất phương trình bậc nhất hai ẩn được xác định như thế nào?",
        back: "Là giao (phần chung) của miền nghiệm tất cả các bất phương trình có trong hệ."
      },
      {
        front: "Nêu nội dung Định lí cực trị của biểu thức $F(x; y) = ax + by$ trên miền đa giác?",
        back: "Giá trị lớn nhất (hoặc nhỏ nhất) của $F(x; y)$ luôn đạt được tại một trong các đỉnh của đa giác đó."
      },
      {
        front: "Làm thế nào để tìm toạ độ một đỉnh của miền đa giác nghiệm?",
        back: "Giải hệ gồm hai phương trình của hai đường thẳng biên cắt nhau tạo nên đỉnh đó."
      },
      {
        front: "Miền nghiệm của hệ $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\end{cases}$ là miền nào?",
        back: "Là góc phần tư thứ nhất của mặt phẳng toạ độ $Oxy$ (kể cả hai trục toạ độ)."
      },
      {
        front: "Nếu hai đỉnh $A$ và $B$ của đa giác cùng cho giá trị $F$ lớn nhất thì kết luận gì?",
        back: "Mọi điểm thuộc đoạn thẳng $AB$ đều cho giá trị lớn nhất đó."
      },
      {
        front: "Đường thẳng biên nét đứt biểu diễn điều gì?",
        back: "Biểu diễn BPT dấu ngặt ($<, >$); các điểm trên đường này không thuộc miền nghiệm."
      },
      {
        front: "Trong bài toán quy hoạch tuyến tính, $F(x; y) = ax + by$ được gọi là gì?",
        back: "Được gọi là hàm mục tiêu (Objective Function) cần tìm giá trị lớn nhất hoặc nhỏ nhất."
      }
    ],
    checklist: [
      "Tôi nhận biết chính xác hệ bất phương trình bậc nhất hai ẩn.",
      "Tôi kiểm tra nhanh một điểm có phải là nghiệm của hệ hay không.",
      "Tôi biểu diễn thành thạo miền nghiệm của hệ trên mặt phẳng toạ độ bằng phương pháp gạch bỏ.",
      "Tôi tìm chuẩn xác toạ độ các đỉnh của miền đa giác nghiệm.",
      "Tôi vận dụng thành thạo định lí cực trị để giải các bài toán tối ưu kinh tế thực tế."
    ],
    mindmap: [
      {
        id: "mm-b4-1",
        title: "1. Khái niệm & Nghiệm của hệ",
        emoji: "🎯",
        description: "Định nghĩa đại số và tính chất giao",
        formula: "$\\begin{cases} a_1 x + b_1 y \\le c_1 \\\\ a_2 x + b_2 y \\le c_2 \\end{cases}$",
        children: [
          {
            title: "Hệ BPT bậc nhất 2 ẩn",
            detail: "Gồm từ hai BPT bậc nhất hai ẩn trở lên. Chỉ chứa bậc 1 của $x$ và $y$."
          },
          {
            title: "Nghiệm của hệ",
            detail: "Thoả mãn đồng thời mọi BPT trong hệ. Chỉ cần vi phạm một BPT là bị loại."
          }
        ]
      },
      {
        id: "mm-b4-2",
        title: "2. Biểu diễn miền nghiệm hình học",
        emoji: "🗺️",
        description: "Phương pháp gạch bỏ trên mặt phẳng Oxy",
        children: [
          {
            title: "Vẽ đường biên",
            detail: "Vẽ các đường thẳng $d_i$. BPT có bằng $\\to$ nét liền; BPT ngặt $\\to$ nét đứt."
          },
          {
            title: "Gạch bỏ phần sai",
            detail: "Thử điểm $O(0;0)$ cho từng BPT, gạch bỏ nửa mặt phẳng không chứa nghiệm."
          },
          {
            title: "Miền nghiệm đa giác",
            detail: "Phần mặt phẳng không bị gạch chính là miền nghiệm (tam giác, tứ giác)."
          }
        ]
      },
      {
        id: "mm-b4-3",
        title: "3. Định lí cực trị & Tìm GTLN, GTNN",
        emoji: "⭐",
        description: "Quy tắc vàng của Quy hoạch tuyến tính",
        formula: "$F(x; y) = ax + by \\to \\text{cực trị tại các đỉnh}$",
        children: [
          {
            title: "Tìm toạ độ các đỉnh",
            detail: "Giải hệ phương trình từng cặp đường biên cắt nhau để lập danh sách đỉnh $A_i$."
          },
          {
            title: "Tính giá trị tại đỉnh",
            detail: "Thay toạ độ từng đỉnh vào $F(x; y)$ để so sánh tìm $\\max$ và $\\min$."
          }
        ]
      },
      {
        id: "mm-b4-4",
        title: "4. Bài toán tối ưu thực tế",
        emoji: "💼",
        description: "Ứng dụng trong sản xuất, kinh doanh, dinh dưỡng",
        children: [
          {
            title: "Ràng buộc tài nguyên",
            detail: "Hạn mức vốn, nhân lực, diện tích, kho bãi: $a x + b y \\le C$ cùng với $x, y \\ge 0$."
          },
          {
            title: "Hàm mục tiêu",
            detail: "Lợi nhuận cần tối đa hoá ($L \\to \\max$) hoặc chi phí cần tối thiểu hoá ($C \\to \\min$)."
          }
        ]
      }
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
