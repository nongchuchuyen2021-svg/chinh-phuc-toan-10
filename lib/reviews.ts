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

  "bai-05": {
    summary: "Nắm vững bản chất toạ độ điểm $M(x_0; y_0)$ trên nửa đường tròn đơn vị, thuộc làu quy tắc 'Sin bù — Phụ chéo', bộ 4 hệ thức lượng giác cơ bản và bảng góc đặc biệt để giải nhanh bài toán tam giác.",
    keyPoints: [
      "Nửa đường tròn đơn vị: tâm $O(0;0)$, bán kính $R = 1$ nằm trên nửa mặt phẳng $y \\ge 0$. Điểm $M(x_0; y_0)$ ứng với góc $\\alpha$ có $\\cos\\alpha = x_0$ (trục hoành) và $\\sin\\alpha = y_0$ (trục tung).",
      "Dấu lượng giác: $\\sin\\alpha \\ge 0$ với mọi $\\alpha \\in [0^\\circ; 180^\\circ]$. Góc nhọn $\\implies \\cos, \\tan, \\cot > 0$; Góc tù $\\implies \\cos, \\tan, \\cot < 0$.",
      "Góc bù: $\\sin(180^\\circ-\\alpha)=\\sin\\alpha$, $\\cos(180^\\circ-\\alpha)=-\\cos\\alpha$. Tang và côtang của hai góc bù đối nhau khi xác định: tang cần $\\alpha\\ne90^\\circ$; côtang cần $0^\\circ<\\alpha<180^\\circ$.",
      "Góc phụ: với $0^\\circ\\le\\alpha\\le90^\\circ$, $\\sin(90^\\circ-\\alpha)=\\cos\\alpha$ và $\\cos(90^\\circ-\\alpha)=\\sin\\alpha$. Với $0^\\circ<\\alpha<90^\\circ$, $\\tan(90^\\circ-\\alpha)=\\cot\\alpha$ và $\\cot(90^\\circ-\\alpha)=\\tan\\alpha$.",
      "Hệ thức cơ bản: $\\sin^2\\alpha+\\cos^2\\alpha=1$ trên $[0^\\circ;180^\\circ]$; $1+\\tan^2\\alpha=1/\\cos^2\\alpha$ khi $\\alpha\\ne90^\\circ$; $1+\\cot^2\\alpha=1/\\sin^2\\alpha$ khi $0^\\circ<\\alpha<180^\\circ$; $\\tan\\alpha\\cot\\alpha=1$ khi $\\alpha\\ne0^\\circ,90^\\circ,180^\\circ$.",
      "Kĩ thuật đồng bậc: Khi biết $\\tan\\alpha = k$, tính phân thức đồng bậc bằng cách chia cả tử và mẫu cho $\\cos\\alpha$."
    ],
    commonMistakes: [
      {
        mistake: "Quên dấu trừ khi tính côsin, tang của góc tù (ví dụ: viết nhầm $\\cos 120^\\circ = \\frac{1}{2}$).",
        fix: "Góc tù có điểm $M$ nằm bên trái trục $Oy$ ($x_0 < 0$) nên $\\cos, \\tan, \\cot$ LUÔN MANG DẤU ÂM: $\\cos 120^\\circ = -\\cos 60^\\circ = -\\frac{1}{2}$."
      },
      {
        mistake: "Khai căn $\\cos\\alpha = \\sqrt{1 - \\sin^2\\alpha}$ mà quên xét trường hợp dấu âm của góc tù.",
        fix: "$\\cos^2\\alpha = 1 - \\sin^2\\alpha \\implies \\cos\\alpha = \\pm\\sqrt{1 - \\sin^2\\alpha}$. Phải kiểm tra đề bài: nếu $\\alpha$ là góc nhọn thì lấy dấu $+$, nếu $\\alpha$ là góc tù thì BẮT BUỘC lấy dấu $-$."
      },
      {
        mistake: "Để máy tính cầm tay ở chế độ Radian (chữ R) khi tính toán các góc đo bằng độ.",
        fix: "Chọn đơn vị Degree (Độ). Trên fx-580VN X: SHIFT → MENU (SETUP) → 2 (Angle Unit) → 1 (Degree). Các dòng máy khác có cách vào phần cài đặt khác; chọn Angle Unit → Degree theo hướng dẫn máy."
      }
    ],
    tips: [
      "Ghi nhớ 'SIN BÙ — PHỤ CHÉO': góc bù có sin bằng nhau, cos đối nhau; góc phụ đổi vai sin–cos, tan–cot. Luôn kiểm tra điều kiện xác định của tan, cot.",
      "Mẹo nhẩm góc đặc biệt: Quy luật tử số căn thức của sin: $0, 30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ \\to \\frac{\\sqrt{0}}{2}, \\frac{\\sqrt{1}}{2}, \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{3}}{2}, \\frac{\\sqrt{4}}{2}$.",
      "Triệt tiêu tổng góc bù: $\\cos\\alpha + \\cos(180^\\circ - \\alpha) = 0$. Khi gặp dãy tổng côsin có các góc bù nhau, ghép cặp triệt tiêu ngay về 0."
    ],
    flashcards: [
      {
        front: "Trên nửa đường tròn đơn vị, toạ độ điểm $M(x_0; y_0)$ biểu thị giá trị lượng giác nào?",
        back: "Hoành độ $x_0 = \\cos\\alpha$, Tung độ $y_0 = \\sin\\alpha$."
      },
      {
        front: "Trong khoảng $0^\\circ \\le \\alpha \\le 180^\\circ$, giá trị $\\sin\\alpha$ có bao giờ nhận giá trị âm không?",
        back: "Không bao giờ! $\\sin\\alpha \\ge 0$ với mọi $\\alpha \\in [0^\\circ; 180^\\circ]$ (do nửa đường tròn nằm trên trục hoành $y \\ge 0$)."
      },
      {
        front: "Khi $\\alpha$ là góc tù ($90^\\circ < \\alpha < 180^\\circ$), dấu của $\\cos\\alpha, \\tan\\alpha, \\cot\\alpha$ là gì?",
        back: "Cả ba giá trị này đều mang dấu ÂM ($< 0$)."
      },
      {
        front: "Phát biểu công thức 'Sin bù' đối với $\\sin(180^\\circ - \\alpha)$ và $\\cos(180^\\circ - \\alpha)$?",
        back: "$\\sin(180^\\circ - \\alpha) = \\sin\\alpha$ và $\\cos(180^\\circ - \\alpha) = -\\cos\\alpha$."
      },
      {
        front: "Hệ thức lượng giác nào liên hệ giữa $\\sin\\alpha$ và $\\cos\\alpha$?",
        back: "$\\sin^2\\alpha + \\cos^2\\alpha = 1$."
      },
      {
        front: "Hệ thức lượng giác nào liên hệ giữa $\\tan\\alpha$ và $\\cos\\alpha$?",
        back: "$1 + \\tan^2\\alpha = \\frac{1}{\\cos^2\\alpha}$ (với $\\alpha \\ne 90^\\circ$)."
      },
      {
        front: "Giá trị của $\\tan 90^\\circ$ bằng bao nhiêu?",
        back: "Không xác định (vì $\\cos 90^\\circ = 0$, phép chia cho 0 không có nghĩa)."
      },
      {
        front: "Hai góc bù nhau có tổng côsin bằng bao nhiêu?",
        back: "$\\cos\\alpha + \\cos(180^\\circ - \\alpha) = \\cos\\alpha - \\cos\\alpha = 0$."
      }
    ],
    checklist: [
      "Tôi hiểu rõ bản chất hình học của sin và cos qua toạ độ trên nửa đường tròn đơn vị.",
      "Tôi xác định chính xác dấu của 4 hàm lượng giác đối với góc nhọn và góc tù.",
      "Tôi thuộc làu các công thức góc bù 'Sin bù' và góc phụ 'Phụ chéo'.",
      "Tôi thành thạo bộ 4 hệ thức lượng giác cơ bản để tính toán các giá trị còn lại.",
      "Tôi biết bấm máy tính Casio chính xác ở chế độ Độ (Degree) và tránh bẫy dấu âm."
    ],
    mindmap: [
      {
        id: "mm-b5-1",
        title: "1. Nửa đường tròn đơn vị",
        emoji: "🎯",
        description: "Định nghĩa giải tích của góc lượng giác",
        formula: "$M(x_0; y_0) \\implies x_0 = \\cos\\alpha, y_0 = \\sin\\alpha$",
        children: [
          {
            title: "Trục toạ độ",
            detail: "Trục hoành $Ox$ là trục côsin; Trục tung $Oy$ là trục sin."
          },
          {
            title: "Quy tắc dấu",
            detail: "Nhọn: tất cả $> 0$. Tù: chỉ $\\sin > 0$, còn $\\cos, \\tan, \\cot < 0$."
          }
        ]
      },
      {
        id: "mm-b5-2",
        title: "2. Góc bù & Góc phụ",
        emoji: "🔄",
        description: "Quan hệ đối xứng trên đường tròn",
        formula: "$\\sin(180^\\circ - \\alpha) = \\sin\\alpha; \\cos(180^\\circ - \\alpha) = -\\cos\\alpha$",
        children: [
          {
            title: "Sin bù",
            detail: "Hai góc bù nhau có sin bằng nhau, cos đối nhau; tan và cot đối nhau khi các biểu thức tương ứng xác định."
          },
          {
            title: "Phụ chéo",
            detail: "$\\sin(90^\\circ-\\alpha)=\\cos\\alpha$ với $0^\\circ\\le\\alpha\\le90^\\circ$; $\\tan(90^\\circ-\\alpha)=\\cot\\alpha$ với $0^\\circ<\\alpha<90^\\circ$."
          }
        ]
      },
      {
        id: "mm-b5-3",
        title: "3. Bộ 4 Hệ thức cơ bản",
        emoji: "⚡",
        description: "Công cụ chuyển đổi giá trị lượng giác",
        formula: "$\\sin^2\\alpha + \\cos^2\\alpha = 1; 1 + \\tan^2\\alpha = \\frac{1}{\\cos^2\\alpha}$",
        children: [
          {
            title: "Định lí Pythagore",
            detail: "$\\sin^2\\alpha + \\cos^2\\alpha = 1$, chú ý dấu khi khai căn tìm cos."
          },
          {
            title: "Nghịch đảo",
            detail: "$\\tan\\alpha \\cdot \\cot\\alpha = 1$ khi các biểu thức xác định."
          }
        ]
      },
      {
        id: "mm-b5-4",
        title: "4. Kĩ thuật tính toán & Casio",
        emoji: "💻",
        description: "Giải nhanh đề thi trắc nghiệm",
        children: [
          {
            title: "Đồng bậc",
            detail: "Biết $\\tan\\alpha$, chia cả tử và mẫu cho $\\cos\\alpha$ để tính nhanh."
          },
          {
            title: "Cài đặt Casio",
            detail: "Cài chế độ D (Degree), bấm `SHIFT sin/cos/tan` để tìm góc."
          }
        ]
      }
    ]
  },

  "bai-06": {
    summary: "Làm chủ bộ đôi Định lí Côsin và Định lí Sin, công thức đường trung tuyến, ngũ đại công thức diện tích và tuyệt kĩ Heron để bẻ khoá mọi bài toán giải tam giác, đo đạc trắc địa và câu hỏi trắc nghiệm thực tế.",
    keyPoints: [
      "Định lí Côsin: $a^2 = b^2 + c^2 - 2bc\\cos A$, là định lí Pythagore tổng quát cho tam giác bất kì; dùng để tính cạnh thứ ba khi biết C-G-C.",
      "Hệ quả tính góc: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$. Dấu của $\\cos A$ quyết định tính chất góc: $\\cos > 0$ là góc nhọn, $\\cos = 0$ là vuông, $\\cos < 0$ là góc tù.",
      "Công thức đường trung tuyến: $m_a^2 = \\frac{2(b^2+c^2)-a^2}{4}, m_b^2 = \\frac{2(a^2+c^2)-b^2}{4}, m_c^2 = \\frac{2(a^2+b^2)-c^2}{4}$.",
      "Định lí Sin: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$. Tỉ số giữa cạnh và sin góc đối bằng đường kính đường tròn ngoại tiếp $2R$.",
      "Ngũ đại công thức diện tích: $S = \\frac{1}{2}ah_a = \\frac{1}{2}bc\\sin A = \\frac{abc}{4R} = pr = \\sqrt{p(p-a)(p-b)(p-c)}$ (Heron).",
      "Bán kính đường tròn: Bán kính ngoại tiếp $R = \\frac{a}{2\\sin A} = \\frac{abc}{4S}$; Bán kính nội tiếp $r = \\frac{S}{p}$ với nửa chu vi $p = \\frac{a+b+c}{2}$.",
      "Ứng dụng thực tế: Đo chiều cao ngọn tháp / ngọn núi qua 2 góc nâng $\\alpha, \\beta$ từ khoảng cách cọc tiêu $d$: $h = \\frac{d \\cdot \\sin\\alpha \\cdot \\sin\\beta}{\\sin(\\beta - \\alpha)}$."
    ],
    commonMistakes: [
      {
        mistake: "Quên dấu trừ trong định lí Côsin hoặc bỏ quên dấu âm của côsin khi tính góc tù (ví dụ: viết nhầm $\\cos 120^\\circ = \\frac{1}{2}$).",
        fix: "Ghi nhớ: $a^2 = b^2 + c^2 - 2bc\\cos A$. Khi góc $A$ tù thì $\\cos A < 0$, khi đó $-2bc\\cos A > 0$ làm cạnh đối diện $a^2 > b^2 + c^2$. Ví dụ $\\cos 120^\\circ = -\\frac{1}{2} \\implies a^2 = b^2 + c^2 + bc$."
      },
      {
        mistake: "Nhầm lẫn giữa bán kính ngoại tiếp $R$ và đường kính $2R$ khi áp dụng định lí Sin.",
        fix: "Định lí Sin cho tỉ số $\\frac{a}{\\sin A} = 2R$ (đường kính). Muốn tính bán kính $R$ bắt buộc phải chia đôi: $R = \\frac{a}{2\\sin A}$."
      },
      {
        mistake: "Dùng định lí Sin để tìm góc và bị sót hoặc nhận nhầm nghiệm góc tù.",
        fix: "Phương trình $\\sin B = k$ luôn có 2 nghiệm: góc nhọn $B$ và góc tù $180^\\circ - B$. Khi cần tìm góc, NÊN ƯU TIÊN HỆ QUẢ ĐỊNH LÍ CÔSIN vì hàm $\\cos$ chỉ ứng với 1 góc duy nhất trên $[0^\\circ; 180^\\circ]$."
      },
      {
        mistake: "Nhầm lẫn giữa công thức tính bán kính ngoại tiếp $R$ và bán kính nội tiếp $r$.",
        fix: "Khắc sâu: $R$ (ngoại tiếp - to hơn) gắn liền với tích 3 cạnh: $R = \\frac{abc}{4S}$. Còn $r$ (nội tiếp - nhỏ hơn) gắn liền với nửa chu vi: $r = \\frac{S}{p}$."
      },
      {
        mistake: "Để máy tính cầm tay ở chế độ Radian (chữ R) khi tính toán các góc đo bằng độ.",
        fix: "Bắt buộc kiểm tra chữ **D** (Degree) trên màn hình Casio: Trên fx-580VNX bấm `SHIFT MENU 2 1`. Nếu để chữ R, mọi kết quả tính $\\sin, \\cos$ sẽ sai hoàn toàn."
      }
    ],
    tips: [
      "Chiến thuật chọn định lí: Biết 2 cạnh + góc xen giữa (C-G-C) hoặc 3 cạnh (C-C-C) $\\to$ Định lí Côsin; Biết 1 cạnh + 2 góc (G-C-G) hoặc cặp cạnh-góc đối hoặc hỏi bán kính $R \\to$ Định lí Sin.",
      "Tuyệt chiêu bẻ khoá tam giác 3 cạnh: Luôn tính nửa chu vi $p = (a+b+c)/2 \\to$ tính $S$ bằng Heron $\\to$ tính nhanh $R = \\frac{abc}{4S}, r = \\frac{S}{p}, h_a = \\frac{2S}{a}$.",
      "Tam giác đều cạnh a tính nhẩm trong 3 giây: Diện tích $S = \\frac{a^2\\sqrt{3}}{4}$, chiều cao $h = \\frac{a\\sqrt{3}}{2}$, bán kính ngoại tiếp $R = \\frac{a\\sqrt{3}}{3}$, bán kính nội tiếp $r = \\frac{a\\sqrt{3}}{6}$.",
      "Kĩ thuật bấm Casio lưu biến không sai số: Gán 3 cạnh vào biến nhớ `STO A`, `STO B`, `STO C`. Sau đó gán $(A+B+C)/2 \\to X$ và bấm $\\sqrt{X(X-A)(X-B)(X-C)}$ để ra diện tích tuyệt đối chính xác.",
      "Phân biệt bài toán trắc địa thực tế: Góc nâng là góc nhìn ngước lên so với phương ngang; Góc hạ là góc nhìn chúc xuống. Khi đo tháp từ 2 cọc tiêu $A, B$, góc ngắm giữa 2 cọc là $\\beta - \\alpha$."
    ],
    flashcards: [
      {
        front: "Định lí Côsin tính độ dài cạnh $a$ khi biết hai cạnh $b, c$ và góc xen giữa $\\widehat{A}$?",
        back: "$a^2 = b^2 + c^2 - 2bc\\cos A$."
      },
      {
        front: "Hệ quả định lí Côsin dùng để tính côsin góc $\\widehat{A}$ khi biết cả 3 cạnh?",
        back: "$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$."
      },
      {
        front: "Công thức tính độ dài đường trung tuyến $m_a$ kẻ từ đỉnh $A$ xuống cạnh $BC$?",
        back: "$m_a^2 = \\frac{2(b^2 + c^2) - a^2}{4}$."
      },
      {
        front: "Phát biểu hệ thức định lí Sin trong tam giác $ABC$?",
        back: "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$ (với $R$ là bán kính đường tròn ngoại tiếp)."
      },
      {
        front: "Công thức tính bán kính đường tròn ngoại tiếp $R$ qua 3 cạnh và diện tích?",
        back: "$R = \\frac{abc}{4S} \\iff S = \\frac{abc}{4R}$."
      },
      {
        front: "Công thức liên hệ giữa diện tích $S$, nửa chu vi $p$ và bán kính nội tiếp $r$?",
        back: "$S = p \\cdot r \\iff r = \\frac{S}{p}$ (với $p = \\frac{a+b+c}{2}$)."
      },
      {
        front: "Công thức Heron tính diện tích tam giác theo độ dài 3 cạnh?",
        back: "$S = \\sqrt{p(p-a)(p-b)(p-c)}$ với nửa chu vi $p = \\frac{a+b+c}{2}$."
      },
      {
        front: "Dấu hiệu nhận biết góc $\\widehat{A}$ là góc tù thông qua độ dài 3 cạnh?",
        back: "$b^2 + c^2 < a^2 \\iff \\cos A < 0 \\iff \\widehat{A} > 90^\\circ$."
      },
      {
        front: "Công thức tính nhanh diện tích và chiều cao của tam giác đều cạnh $a$?",
        back: "Diện tích $S = \\frac{a^2\\sqrt{3}}{4}$ và chiều cao $h = \\frac{a\\sqrt{3}}{2}$."
      },
      {
        front: "Trong bài toán đo chiều cao tháp $h$ từ hai cọc tiêu cách nhau $d$ với hai góc nâng $\\alpha < \\beta$, công thức tính $h$ là gì?",
        back: "$h = \\frac{d \\cdot \\sin\\alpha \\cdot \\sin\\beta}{\\sin(\\beta - \\alpha)}$."
      }
    ],
    checklist: [
      "Tôi thuộc làu định lí Côsin, hệ quả tính góc và công thức đường trung tuyến.",
      "Tôi áp dụng thành thạo định lí Sin và tính chính xác bán kính đường tròn ngoại tiếp $R$.",
      "Tôi nắm vững cả 5 công thức tính diện tích tam giác, đặc biệt là tuyệt kĩ Heron.",
      "Tôi giải trọn vẹn tam giác trong cả 3 trường hợp C-G-C, C-C-C và G-C-G.",
      "Tôi biết cách nhận dạng tam giác nhọn, vuông, tù và tránh bẫy góc tù khi dùng định lí Sin.",
      "Tôi giải quyết thành thạo bài toán trắc địa đo chiều cao và khoảng cách thực tế bằng Casio."
    ],
    mindmap: [
      {
        id: "mm-b6-1",
        title: "1. Định lí Côsin & Đường trung tuyến",
        emoji: "📐",
        description: "Mở rộng định lí Pythagore cho tam giác bất kì",
        formula: "$a^2 = b^2 + c^2 - 2bc\\cos A$",
        children: [
          {
            title: "Hệ quả tính góc",
            detail: "$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$. $\\cos > 0$ là nhọn, $\\cos = 0$ là vuông, $\\cos < 0$ là tù."
          },
          {
            title: "Đường trung tuyến",
            detail: "$m_a^2 = \\frac{2(b^2+c^2)-a^2}{4}, m_b^2 = \\frac{2(a^2+c^2)-b^2}{4}, m_c^2 = \\frac{2(a^2+b^2)-c^2}{4}$."
          }
        ]
      },
      {
        id: "mm-b6-2",
        title: "2. Định lí Sin & Bán kính R",
        emoji: "🔵",
        description: "Tỉ số vàng giữa cạnh và sin góc đối diện",
        formula: "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$",
        children: [
          {
            title: "Bán kính ngoại tiếp R",
            detail: "$R = \\frac{a}{2\\sin A} = \\frac{b}{2\\sin B} = \\frac{c}{2\\sin C} = \\frac{abc}{4S}$."
          },
          {
            title: "Dấu hiệu nhận biết",
            detail: "Áp dụng khi biết 1 cạnh + 2 góc (G-C-G), hoặc có cặp cạnh-góc đối, hoặc hỏi về bán kính $R$."
          }
        ]
      },
      {
        id: "mm-b6-3",
        title: "3. Ngũ đại Công thức Diện tích",
        emoji: "🌟",
        description: "Bộ công cụ vạn năng tính diện tích tam giác",
        formula: "$S = \\frac{1}{2}ah_a = \\frac{1}{2}bc\\sin A = \\frac{abc}{4R} = pr = \\sqrt{p(p-a)(p-b)(p-c)}$",
        children: [
          {
            title: "Tuyệt kĩ Heron",
            detail: "Tính diện tích khi biết 3 cạnh $a, b, c$: tính $p \\to S \\to$ rút ra $R, r, h_a$."
          },
          {
            title: "Tam giác đều cạnh a",
            detail: "$S = \\frac{a^2\\sqrt{3}}{4}, h = \\frac{a\\sqrt{3}}{2}, R = \\frac{a\\sqrt{3}}{3}, r = \\frac{a\\sqrt{3}}{6}$."
          }
        ]
      },
      {
        id: "mm-b6-4",
        title: "4. Thuật toán Giải tam giác",
        emoji: "🧭",
        description: "Quy trình tìm tất cả các yếu tố còn lại của tam giác",
        formula: "3 trường hợp chuẩn: C-G-C, C-C-C, G-C-G",
        children: [
          {
            title: "C-G-C & C-C-C",
            detail: "Dùng Định lí Côsin tính cạnh/góc để tránh bẫy 2 nghiệm của hàm Sin."
          },
          {
            title: "G-C-G",
            detail: "Tính góc thứ ba qua tổng $180^\\circ$, rồi dùng Định lí Sin tính 2 cạnh còn lại."
          }
        ]
      },
      {
        id: "mm-b6-5",
        title: "5. Ứng dụng Thực địa & Kĩ thuật Casio",
        emoji: "🏗️",
        description: "Đo đạc trắc địa thực tế và mẹo bấm máy tính",
        formula: "Chiều cao tháp: $h = \\frac{d \\cdot \\sin\\alpha \\cdot \\sin\\beta}{\\sin(\\beta - \\alpha)}$",
        children: [
          {
            title: "Mô hình trắc địa",
            detail: "Đo khoảng cách qua đầm lầy, đo chiều cao tháp không tới được chân tháp."
          },
          {
            title: "Kĩ thuật Casio",
            detail: "Cài đặt Degree (D), lưu biến STO A, B, C và bấm Heron 1 dòng không sai số."
          }
        ]
      }
    ]
  },

  "bai-07": {
  "summary": "Tự dựng và kiểm tra vectơ, ôn theo SGK trang 46–50; phân biệt phương, hướng, độ dài và số nhóm vectơ bằng nhau.",
  "keyPoints": [
    "Vectơ là đoạn thẳng có hướng: $\\overrightarrow{AB}$ có gốc A, ngọn B; $|\\overrightarrow{AB}|=AB$.",
    "Hai vectơ khác 0 cùng phương khi giá song song hoặc trùng nhau. Chỉ khi cùng phương mới xét cùng hướng hay ngược hướng.",
    "Hai vectơ bằng nhau khi cùng hướng và cùng độ dài. Vị trí khác nhau vẫn có thể biểu diễn cùng một vectơ.",
    "Vectơ-không có hai mút trùng nhau, độ dài 0; quy ước cùng phương và cùng hướng với mọi vectơ.",
    "Với A,B,C phân biệt: A,B,C thẳng hàng khi và chỉ khi AB và AC cùng phương. M nằm giữa A,B khi MA và MB ngược hướng.",
    "Đếm theo cặp điểm đầu–cuối khác nhau từ n điểm: n(n−1) mũi tên. Nếu gộp những vectơ bằng nhau, số nhóm có thể ít hơn."
  ],
  "commonMistakes": [
    {
      "mistake": "Cùng độ dài nên hai vectơ bằng nhau.",
      "fix": "Kiểm tra thêm cùng hướng. Hai đường chéo hình chữ nhật là phản ví dụ."
    },
    {
      "mistake": "Không cùng hướng nghĩa là ngược hướng.",
      "fix": "Chỉ xét cùng/ngược hướng sau khi đã cùng phương; hai vectơ vuông góc không thuộc hai trường hợp đó."
    },
    {
      "mistake": "Lục giác đều có 3 vectơ bằng AB.",
      "fix": "Nếu hai mút thuộc các đỉnh và tâm, phải có 4: AB, ED, FO, OC. Tính cả chính AB."
    },
    {
      "mistake": "20 mũi tên trong hình vuông là 20 nhóm vectơ khác nhau.",
      "fix": "20 cặp điểm đầu–cuối chia 12 nhóm vectơ bằng nhau. Nói rõ đang đếm mũi tên hay đếm nhóm."
    },
    {
      "mistake": "AB và BA luôn khác nhau, không cần điều kiện.",
      "fix": "Chỉ khác nhau khi A khác B. Nếu A trùng B thì cả hai là vectơ-không."
    },
    {
      "mistake": "Gán một đường thẳng giá duy nhất cho vectơ-không.",
      "fix": "Không có giá duy nhất; dùng quy ước cùng phương, cùng hướng với mọi vectơ."
    }
  ],
  "tips": [
    "Đọc theo thứ tự: gốc → ngọn.",
    "Trước khi kết luận bằng nhau, kiểm tra hướng rồi độ dài.",
    "Đếm mũi tên bằng cách chọn điểm đầu rồi điểm cuối; phân nhóm bằng nhau là bước khác.",
    "Tự dựng một phản ví dụ khi gặp mệnh đề “luôn luôn”."
  ],
  "flashcards": [
    {
      "front": "Vectơ được xác định như thế nào?",
      "back": "Vectơ là đoạn thẳng có hướng: $\\overrightarrow{AB}$ có gốc A, ngọn B; $|\\overrightarrow{AB}|=AB$."
    },
    {
      "front": "Cùng phương khác cùng hướng ở đâu?",
      "back": "Hai vectơ khác 0 cùng phương khi giá song song hoặc trùng nhau. Chỉ khi cùng phương mới xét cùng hướng hay ngược hướng."
    },
    {
      "front": "Khi nào hai vectơ bằng nhau?",
      "back": "Hai vectơ bằng nhau khi cùng hướng và cùng độ dài. Vị trí khác nhau vẫn có thể biểu diễn cùng một vectơ."
    },
    {
      "front": "Vectơ-không có gì đặc biệt?",
      "back": "Vectơ-không có hai mút trùng nhau, độ dài 0; quy ước cùng phương và cùng hướng với mọi vectơ."
    },
    {
      "front": "Làm sao nhận biết thẳng hàng và nằm giữa?",
      "back": "Với A,B,C phân biệt: A,B,C thẳng hàng khi và chỉ khi AB và AC cùng phương. M nằm giữa A,B khi MA và MB ngược hướng."
    },
    {
      "front": "Đếm mũi tên khác đếm nhóm thế nào?",
      "back": "Đếm theo cặp điểm đầu–cuối khác nhau từ n điểm: n(n−1) mũi tên. Nếu gộp những vectơ bằng nhau, số nhóm có thể ít hơn."
    }
  ],
  "checklist": [
    "Tôi dựng đúng D ở cả ba nhiệm vụ của xưởng.",
    "Tôi giải thích được vì sao một kết luận sai bằng phản ví dụ.",
    "Tôi làm lại Bài 4.1–4.5 đúng đề SGK.",
    "Tôi không nhầm độ dài vectơ với chính vectơ."
  ],
  "mindmap": [
    {
      "id": "vector-0",
      "title": "Gốc và ngọn",
      "emoji": "↗️",
      "description": "Vectơ là đoạn thẳng có hướng: $\\overrightarrow{AB}$ có gốc A, ngọn B; $|\\overrightarrow{AB}|=AB$."
    },
    {
      "id": "vector-1",
      "title": "Phương và hướng",
      "emoji": "↗️",
      "description": "Hai vectơ khác 0 cùng phương khi giá song song hoặc trùng nhau. Chỉ khi cùng phương mới xét cùng hướng hay ngược hướng."
    },
    {
      "id": "vector-2",
      "title": "Bằng nhau",
      "emoji": "↗️",
      "description": "Hai vectơ bằng nhau khi cùng hướng và cùng độ dài. Vị trí khác nhau vẫn có thể biểu diễn cùng một vectơ."
    },
    {
      "id": "vector-3",
      "title": "Vectơ-không",
      "emoji": "↗️",
      "description": "Vectơ-không có hai mút trùng nhau, độ dài 0; quy ước cùng phương và cùng hướng với mọi vectơ."
    }
  ]
}
,

  "bai-08": {
    summary: "Làm chủ hai quy tắc nền tảng: Quy tắc ba điểm (nối đuôi) và Quy tắc hình bình hành (chung gốc), hiểu bản chất phép trừ vectơ và vận dụng thành thạo vào bài toán vật lí tổng hợp lực, kéo pháo và thuyền qua sông.",
    keyPoints: [
      "Quy tắc ba điểm (nối đuôi liên tiếp): $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$. Mở rộng: $\\overrightarrow{A_1 A_2} + \\dots + \\overrightarrow{A_{n-1} A_n} = \\overrightarrow{A_1 A_n}$.",
      "Quy tắc hình bình hành (chung gốc): Nếu $ABCD$ là hình bình hành thì $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$.",
      "Vectơ đối và phép trừ: $\\vec{a} - \\vec{b} = \\vec{a} + (-\\vec{b})$. Quy tắc hiệu chung gốc: $\\overrightarrow{OB} - \\overrightarrow{OA} = \\overrightarrow{AB}$ ('ngọn trừ gốc').",
      "Hệ thức trung điểm kinh điển: $I$ là trung điểm $AB \\iff \\overrightarrow{IA} + \\overrightarrow{IB} = \\vec{0}$, và $\\overrightarrow{MA} + \\overrightarrow{MB} = 2\\overrightarrow{MI}$ với mọi điểm $M$.",
      "Hệ thức trọng tâm kinh điển: $G$ là trọng tâm $\\triangle ABC \\iff \\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$, và $\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} = 3\\overrightarrow{MG}$ với mọi điểm $M$.",
      "Ứng dụng vật lí: Hợp lực $\\vec{F} = \\vec{F}_1 + \\vec{F}_2$ có độ lớn $F = \\sqrt{F_1^2 + F_2^2 + 2F_1 F_2 \\cos\\theta}$; thuyền sang sông nhanh nhất khi mũi tàu vuông góc bờ sông."
    ],
    commonMistakes: [
      {
        mistake: "Nhầm lẫn giữa quy tắc hiệu và viết ngược đỉnh: $\\overrightarrow{OB} - \\overrightarrow{OA} = \\overrightarrow{BA}$.",
        fix: "Thần chú ghi nhớ: 'Ngọn trừ gốc'. Vectơ bị trừ ($OB$) có ngọn là $B$ thì vectơ hiệu phải có ngọn là $B$: $\\overrightarrow{OB} - \\overrightarrow{OA} = \\overrightarrow{AB}$."
      },
      {
        mistake: "Đồng nhất độ dài của tổng bằng tổng độ dài: $|\\vec{a} + \\vec{b}| = |\\vec{a}| + |\\vec{b}|$.",
        fix: "Theo bất đẳng thức tam giác: $|\\vec{a} + \\vec{b}| \\le |\\vec{a}| + |\\vec{b}|$. Dấu bằng chỉ xảy ra khi hai vectơ cùng hướng."
      },
      {
        mistake: "Quên nhân hệ số 2 trong công thức trung điểm: viết nhầm $\\overrightarrow{MA} + \\overrightarrow{MB} = \\overrightarrow{MI}$.",
        fix: "Phải là $2\\overrightarrow{MI}$ vì $\\overrightarrow{MA} + \\overrightarrow{MB} = (\\overrightarrow{MI} + \\overrightarrow{IA}) + (\\overrightarrow{MI} + \\overrightarrow{IB}) = 2\\overrightarrow{MI} + \\vec{0} = 2\\overrightarrow{MI}$."
      }
    ],
    tips: [
      "Khi gặp tổng nhiều vectơ nối tiếp nhau vòng quanh một đa giác khép kín, kết quả luôn bằng vectơ-không $\\vec{0}$.",
      "Để tính độ dài của tổng hoặc hiệu vectơ trong hình thoi/tam giác, hãy thay thế bằng một vectơ đơn lẻ trước khi tính độ dài số học.",
      "Mẹo nhớ công thức hợp lực: $F^2 = F_1^2 + F_2^2 + 2F_1 F_2 \\cos\\theta$. Chú ý dấu cộng $+2F_1 F_2 \\cos\\theta$ (khác với dấu trừ trong định lí Côsin vì đây là đường chéo hình bình hành)."
    ],
    flashcards: [
      {
        front: "Phát biểu Quy tắc ba điểm của phép cộng vectơ?",
        back: "Với ba điểm bất kì $A, B, C$, ta luôn có: $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$."
      },
      {
        front: "Phát biểu Quy tắc hình bình hành?",
        back: "Nếu $ABCD$ là hình bình hành thì $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$ (tổng hai cạnh kề bằng vectơ đường chéo chung gốc)."
      },
      {
        front: "Phát biểu Quy tắc hiệu của hai vectơ chung gốc?",
        back: "Với ba điểm bất kì $O, M, N$, ta có: $\\overrightarrow{MN} = \\overrightarrow{ON} - \\overrightarrow{OM}$ ('ngọn trừ gốc')."
      },
      {
        front: "Thế nào là hai vectơ đối nhau?",
        back: "Là hai vectơ có cùng độ dài nhưng ngược hướng. Tổng của hai vectơ đối nhau luôn bằng $\\vec{0}$."
      },
      {
        front: "Hệ thức vectơ đối với trung điểm $I$ của đoạn thẳng $AB$?",
        back: "$\\overrightarrow{IA} + \\overrightarrow{IB} = \\vec{0}$, và $\\overrightarrow{MA} + \\overrightarrow{MB} = 2\\overrightarrow{MI}$ với mọi điểm $M$."
      },
      {
        front: "Hệ thức vectơ đối với trọng tâm $G$ của tam giác $ABC$?",
        back: "$\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$, và $\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} = 3\\overrightarrow{MG}$ với mọi điểm $M$."
      },
      {
        front: "Độ lớn hợp lực của hai lực vuông góc $\\vec{F}_1 \\perp \\vec{F}_2$ tính như thế nào?",
        back: "$F = \\sqrt{F_1^2 + F_2^2}$ (theo định lí Pythagore)."
      },
      {
        front: "Để thuyền sang bờ bên kia nhanh nhất, cần giữ bánh lái như thế nào?",
        back: "Luôn giữ mũi thuyền vuông góc với bờ sông (vì thành phần vận tốc vuông góc với bờ đạt cực đại $v_r$)."
      }
    ],
    checklist: [
      "Tôi áp dụng thành thạo Quy tắc ba điểm để rút gọn chuỗi vectơ nối tiếp.",
      "Tôi không bị nhầm lẫn chiều vectơ trong Quy tắc hiệu $\\overrightarrow{OB} - \\overrightarrow{OA} = \\overrightarrow{AB}$.",
      "Tôi vận dụng chuẩn xác hệ thức trung điểm $2\\overrightarrow{MI}$ và hệ thức trọng tâm $3\\overrightarrow{MG}$.",
      "Tôi giải đúng các bài toán vật lí về tổng hợp lực và bài toán kéo pháo trên dốc nghiêng."
    ],
    mindmap: [
      {
        id: "mm-b8-1",
        title: "1. Quy tắc Ba Điểm (Nối đuôi)",
        emoji: "🔺",
        description: "Ngọn vectơ trước nối với gốc vectơ sau",
        formula: "$\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$"
      },
      {
        id: "mm-b8-2",
        title: "2. Quy tắc Hình bình hành",
        emoji: "▱",
        description: "Hai vectơ chung gốc tạo thành đường chéo",
        formula: "$\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$"
      },
      {
        id: "mm-b8-3",
        title: "3. Quy tắc Hiệu & Vectơ đối",
        emoji: "➖",
        description: "Chung gốc: ngọn trừ gốc",
        formula: "$\\overrightarrow{OB} - \\overrightarrow{OA} = \\overrightarrow{AB}$"
      },
      {
        id: "mm-b8-4",
        title: "4. Trung điểm & Trọng tâm",
        emoji: "⭐",
        description: "Tính chất cân bằng vectơ",
        formula: "$\\overrightarrow{MA} + \\overrightarrow{MB} = 2\\overrightarrow{MI}; \\quad \\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} = 3\\overrightarrow{MG}$"
      },
      {
        id: "mm-b8-5",
        title: "5. Hợp lực & Vận tốc Sông nước",
        emoji: "🚀",
        description: "Mô hình hoá thực tế",
        formula: "$F = \\sqrt{F_1^2 + F_2^2 + 2F_1 F_2 \\cos\\theta}; \\quad F_{\\text{kéo}} = P \\sin\\alpha$"
      }
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
