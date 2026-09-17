import type { ExamPaper } from "@/lib/types";

// Ngân hàng 4 đề kiểm tra định kỳ Toán 10 (Giữa kỳ 1, Cuối kỳ 1, Giữa kỳ 2, Cuối kỳ 2),
// mỗi đề bám sát cấu trúc 3 phần của đề minh hoạ Tốt nghiệp THPT 2025 (12 câu TN + 4 câu Đúng/Sai + 6 câu Trả lời ngắn,
// 90 phút, thang điểm 10.0) nhưng giới hạn phạm vi kiến thức theo đúng chương đã học tới thời điểm kiểm tra.
export const EXAM_PAPERS: ExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // ĐỀ 1: GIỮA KỲ 1 — Chương I, II, III (Bài 1–6)
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "giua-ky-1",
    title: "Đề kiểm tra Giữa kỳ 1 — Môn Toán 10",
    subtitle: "Cấu trúc bám sát đề minh hoạ Tốt nghiệp THPT của Bộ Giáo dục và Đào tạo",
    scope: "Chương I – III: Mệnh đề & Tập hợp, Bất phương trình bậc nhất hai ẩn, Hệ thức lượng trong tam giác (Bài 1–6)",
    durationMinutes: 90,
    totalQuestions: 22,
    maxScore: 10.0,
    questions: [
      // ─── PHẦN I: Trắc nghiệm 4 lựa chọn (12 câu, 0.25đ/câu) ─────────────
      {
        id: "gk1-p1-1",
        part: 1,
        q: "Câu nào sau đây là một mệnh đề toán học?",
        options: ["Số 17 là số nguyên tố.", "Bạn có thích học môn Toán không?", "Hãy làm bài tập về nhà ngay đi!", "Thời tiết hôm nay thật đẹp!"],
        answer: 0,
        explain: "Mệnh đề toán học là khẳng định có tính đúng hoặc sai rõ ràng. Câu hỏi, câu cảm thán, câu mệnh lệnh không phải là mệnh đề."
      },
      {
        id: "gk1-p1-2",
        part: 1,
        q: "Mệnh đề phủ định của mệnh đề '$P: \\forall x \\in \\mathbb{R},\\ x^2 + 1 > 0$' là:",
        options: ["$\\exists x \\in \\mathbb{R},\\ x^2 + 1 \\le 0$", "$\\forall x \\in \\mathbb{R},\\ x^2 + 1 < 0$", "$\\exists x \\in \\mathbb{R},\\ x^2 + 1 > 0$", "$\\forall x \\in \\mathbb{R},\\ x^2 + 1 \\le 0$"],
        answer: 0,
        explain: "Phủ định của $\\forall$ là $\\exists$, phủ định của '$>$' là '$\\le$'."
      },
      {
        id: "gk1-p1-3",
        part: 1,
        q: "Cho hai tập hợp $A = \\{1; 2; 3; 4\\}$ và $B = \\{3; 4; 5; 6\\}$. Giao của hai tập hợp $A \\cap B$ là:",
        options: ["$\\{3; 4\\}$", "$\\{1; 2; 3; 4; 5; 6\\}$", "$\\{1; 2\\}$", "$\\{5; 6\\}$"],
        answer: 0,
        explain: "Giao của hai tập hợp gồm các phần tử chung: $\\{3; 4\\}$."
      },
      {
        id: "gk1-p1-4",
        part: 1,
        q: "Cho hai tập hợp $A = [-2; 5)$ và $B = (1; 7]$. Khi đó tập hợp $A \\cap B$ bằng:",
        options: ["$(1; 5)$", "$[-2; 7]$", "$[1; 5)$", "$(-2; 1]$"],
        answer: 0,
        explain: "Giao của $A = [-2; 5)$ và $B = (1; 7]$ là phần khoảng chung: $A \\cap B = (1; 5)$."
      },
      {
        id: "gk1-p1-5",
        part: 1,
        q: "Điểm nào sau đây thuộc miền nghiệm của bất phương trình $2x - y + 1 > 0$?",
        options: ["$(1; 1)$", "$(0; 2)$", "$(-1; 0)$", "$(0; 3)$"],
        answer: 0,
        explain: "Thay $(1; 1)$: $2(1) - 1 + 1 = 2 > 0$ (thoả mãn)."
      },
      {
        id: "gk1-p1-6",
        part: 1,
        q: "Bác Năm dự định trồng lúa và ngô trên thửa ruộng 8 sào. Gọi $x$ là số sào trồng lúa, $y$ là số sào trồng ngô ($x, y \\ge 0$). Bất phương trình thể hiện giới hạn diện tích là:",
        options: ["$x + y \\le 8$", "$x + y > 8$", "$x - y \\le 8$", "$xy \\le 8$"],
        answer: 0,
        explain: "Tổng diện tích trồng lúa và ngô không vượt quá 8 sào: $x + y \\le 8$."
      },
      {
        id: "gk1-p1-7",
        part: 1,
        q: "Điểm nào sau đây thuộc miền nghiệm của hệ BPT $\\begin{cases} x + y > 2 \\\\ 2x - y \\le 3 \\end{cases}$?",
        options: ["$(2; 2)$", "$(1; 0)$", "$(0; 1)$", "$(4; 0)$"],
        answer: 0,
        explain: "Thay $(2; 2)$: $2 + 2 = 4 > 2$ và $2(2) - 2 = 2 \\le 3$, cả hai đều thoả mãn."
      },
      {
        id: "gk1-p1-8",
        part: 1,
        q: "Giá trị lớn nhất của $F(x, y) = 2x + 3y$ trên miền nghiệm là tứ giác có các đỉnh $O(0; 0), A(0; 4), B(3; 2), C(4; 0)$ là:",
        options: ["12", "14", "8", "16"],
        answer: 0,
        explain: "$F(0;0)=0; F(0;4)=12; F(3;2)=12; F(4;0)=8$. Giá trị lớn nhất bằng 12."
      },
      {
        id: "gk1-p1-9",
        part: 1,
        q: "Giá trị của $\\cos 60^\\circ$ bằng:",
        options: ["$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$\\frac{\\sqrt{2}}{2}$", "$1$"],
        answer: 0,
        explain: "Theo bảng giá trị lượng giác góc đặc biệt: $\\cos 60^\\circ = \\frac{1}{2}$."
      },
      {
        id: "gk1-p1-10",
        part: 1,
        q: "Cho góc tù $\\alpha$ thoả mãn $\\sin \\alpha = \\frac{3}{5}$. Giá trị của $\\cos \\alpha$ bằng:",
        options: ["$-\\frac{4}{5}$", "$\\frac{4}{5}$", "$\\frac{2}{5}$", "$-\\frac{2}{5}$"],
        answer: 0,
        explain: "Vì $\\alpha$ tù nên $\\cos \\alpha < 0$. $\\cos^2\\alpha = 1 - \\frac{9}{25} = \\frac{16}{25} \\Rightarrow \\cos\\alpha = -\\frac{4}{5}$."
      },
      {
        id: "gk1-p1-11",
        part: 1,
        q: "Trong tam giác $ABC$, định lí côsin biểu diễn cạnh $a$ qua $b, c$ và góc $A$ là:",
        options: ["$a^2 = b^2 + c^2 - 2bc \\cos A$", "$a^2 = b^2 + c^2 + 2bc \\cos A$", "$a^2 = b^2 + c^2 - 2bc \\sin A$", "$a^2 = b^2 + c^2 - bc \\cos A$"],
        answer: 0,
        explain: "Định lí côsin: $a^2 = b^2 + c^2 - 2bc \\cos A$."
      },
      {
        id: "gk1-p1-12",
        part: 1,
        q: "Tam giác $ABC$ có $b = 4, c = 5$ và góc $A = 30^\\circ$. Diện tích tam giác $ABC$ bằng:",
        options: ["$5$", "$10$", "$5\\sqrt{3}$", "$20$"],
        answer: 0,
        explain: "$S = \\frac{1}{2}bc\\sin A = \\frac{1}{2} \\cdot 4 \\cdot 5 \\cdot \\sin 30^\\circ = 10 \\cdot \\frac{1}{2} = 5$."
      },

      // ─── PHẦN II: Trắc nghiệm Đúng / Sai (4 câu, tối đa 1.0đ/câu) ───────
      {
        id: "gk1-p2-1",
        part: 2,
        q: "Một câu lạc bộ Toán học của trường THPT Na Rì khảo sát 30 thành viên về việc tham gia hai đội tuyển: đội Giải toán trên máy tính Casio (tập hợp $C$) và đội Olympic Toán học (tập hợp $O$). Kết quả: có 18 bạn tham gia đội Casio, 15 bạn tham gia đội Olympic, và 8 bạn tham gia cả hai đội.",
        statements: [
          {
            text: "(Nhận biết) Số bạn tham gia ít nhất một trong hai đội là $n(C \\cup O) = 18 + 15 - 8 = 25$ bạn.",
            answer: true,
            explain: "Công thức số phần tử của hợp: $n(C \\cup O) = n(C) + n(O) - n(C \\cap O) = 18 + 15 - 8 = 25$."
          },
          {
            text: "(Thông hiểu) Số bạn không tham gia đội nào là 8 bạn.",
            answer: false,
            explain: "Số bạn không tham gia đội nào là $30 - n(C \\cup O) = 30 - 25 = 5$ bạn, không phải 8."
          },
          {
            text: "(Vận dụng) Số bạn chỉ tham gia đúng một trong hai đội là 17 bạn.",
            answer: true,
            explain: "Số bạn chỉ tham gia đúng 1 đội $= n(C \\cup O) - n(C \\cap O) = 25 - 8 = 17$."
          },
          {
            text: "(Vận dụng cao) Tỉ lệ thành viên không tham gia đội nào chiếm $\\frac{1}{6}$ tổng số thành viên câu lạc bộ.",
            answer: true,
            explain: "Tỉ lệ $= \\frac{5}{30} = \\frac{1}{6}$."
          }
        ],
        explain: "Vận dụng công thức số phần tử của hợp hai tập hợp trong bài toán khảo sát thực tế."
      },
      {
        id: "gk1-p2-2",
        part: 2,
        q: "Một xưởng mộc sản xuất bàn và ghế. Sản xuất 1 bàn cần 2 giờ cắt gỗ và 1 giờ hoàn thiện; 1 ghế cần 1 giờ cắt gỗ và 1 giờ hoàn thiện. Xưởng có tối đa 8 giờ cắt gỗ và 6 giờ hoàn thiện mỗi ngày. Gọi $x$ là số bàn, $y$ là số ghế sản xuất trong ngày ($x, y \\ge 0$).",
        statements: [
          {
            text: "(Nhận biết) Hệ bất phương trình mô tả điều kiện sản xuất là $\\begin{cases} 2x+y \\le 8 \\\\ x+y \\le 6 \\end{cases}$.",
            answer: true,
            explain: "2 giờ cắt gỗ/bàn và 1 giờ/ghế, tối đa 8 giờ: $2x+y\\le8$. Hoàn thiện mỗi sản phẩm 1 giờ, tối đa 6 giờ: $x+y\\le6$."
          },
          {
            text: "(Thông hiểu) Phương án sản xuất $x=2, y=3$ (2 bàn, 3 ghế) thoả mãn cả hai điều kiện trên.",
            answer: true,
            explain: "$2(2)+3=7\\le8$ và $2+3=5\\le6$: cả hai đều thoả mãn."
          },
          {
            text: "(Vận dụng) Nếu lợi nhuận mỗi bàn là 300 nghìn đồng và mỗi ghế là 200 nghìn đồng thì tại phương án $(2; 3)$, lợi nhuận thu được là 1,4 triệu đồng.",
            answer: false,
            explain: "Lợi nhuận thực tế $= 300(2) + 200(3) = 600 + 600 = 1200$ nghìn đồng $= 1,2$ triệu đồng, không phải 1,4 triệu."
          },
          {
            text: "(Vận dụng cao) Với hàm lợi nhuận $F = 300x + 200y$ (nghìn đồng), lợi nhuận lớn nhất xưởng đạt được trong ngày là 1400 nghìn đồng, khi sản xuất 2 bàn và 4 ghế.",
            answer: true,
            explain: "Miền nghiệm có các đỉnh $O(0;0), (4;0), (2;4), (0;6)$. $F(0;0)=0; F(4;0)=1200; F(2;4)=1400; F(0;6)=1200$. Lớn nhất $F=1400$ tại $(2;4)$."
          }
        ],
        explain: "Bài toán quy hoạch tuyến tính đơn giản trong sản xuất thực tế."
      },
      {
        id: "gk1-p2-3",
        part: 2,
        q: "Một mảnh đất hình tam giác $ABC$ có độ dài ba cạnh $BC = a = 7$ m, $CA = b = 8$ m, $AB = c = 5$ m.",
        statements: [
          {
            text: "(Nhận biết) Nửa chu vi của mảnh đất là $p = 20$ m.",
            answer: false,
            explain: "$p = \\frac{7+8+5}{2} = 10$ m, không phải 20 m (đây là sai lầm quên chia đôi chu vi)."
          },
          {
            text: "(Thông hiểu) Số đo góc $A$ (đối diện cạnh $BC$) bằng $60^\\circ$.",
            answer: true,
            explain: "$\\cos A = \\frac{b^2+c^2-a^2}{2bc} = \\frac{64+25-49}{80} = \\frac{1}{2} \\Rightarrow A = 60^\\circ$."
          },
          {
            text: "(Vận dụng) Diện tích mảnh đất bằng $10\\sqrt{3}\\text{ m}^2$, tức là lớn hơn $17\\text{ m}^2$.",
            answer: true,
            explain: "$S = \\frac{1}{2}bc\\sin A = \\frac{1}{2}(8)(5)\\sin 60^\\circ = 10\\sqrt{3} \\approx 17,32 > 17$."
          },
          {
            text: "(Vận dụng cao) Nếu giá đất khu vực này là 5 triệu đồng/m² thì tổng giá trị mảnh đất (làm tròn đến triệu đồng) khoảng 87 triệu đồng.",
            answer: true,
            explain: "$10\\sqrt{3} \\times 5 = 50\\sqrt{3} \\approx 86,6$, làm tròn 87 triệu đồng."
          }
        ],
        explain: "Ứng dụng định lí côsin và công thức diện tích tam giác vào đo đạc đất đai."
      },
      {
        id: "gk1-p2-4",
        part: 2,
        q: "Để tính khoảng cách $AB$ qua một con sông, các bạn học sinh đứng tại điểm $C$ cùng bờ với $A$, đo được $AC = 100$ m, góc $\\widehat{A} = 105^\\circ$, góc $\\widehat{C} = 45^\\circ$.",
        statements: [
          {
            text: "(Nhận biết) Theo định lí tổng ba góc trong tam giác, góc $\\widehat{B} = 30^\\circ$.",
            answer: true,
            explain: "$\\widehat{B} = 180^\\circ - 105^\\circ - 45^\\circ = 30^\\circ$."
          },
          {
            text: "(Thông hiểu) Áp dụng định lí sin, ta có $\\dfrac{AB}{\\sin C} = \\dfrac{AC}{\\sin B}$.",
            answer: true,
            explain: "Cạnh $AB$ đối diện góc $C$, cạnh $AC$ đối diện góc $B$ nên $\\frac{AB}{\\sin C} = \\frac{AC}{\\sin B}$ theo định lí sin."
          },
          {
            text: "(Vận dụng) Khoảng cách $AB = 100\\sqrt{2}$ m.",
            answer: true,
            explain: "$AB = \\frac{AC \\cdot \\sin C}{\\sin B} = \\frac{100 \\cdot \\sin 45^\\circ}{\\sin 30^\\circ} = \\frac{100 \\cdot \\frac{\\sqrt{2}}{2}}{\\frac{1}{2}} = 100\\sqrt{2}$."
          },
          {
            text: "(Vận dụng cao) Một ca nô đi thẳng từ $A$ sang $B$ với vận tốc trung bình 20 m/phút thì mất khoảng hơn 8 phút.",
            answer: false,
            explain: "Thời gian $= \\frac{100\\sqrt{2}}{20} = 5\\sqrt{2} \\approx 7,07$ phút, chưa tới 8 phút."
          }
        ],
        explain: "Ứng dụng định lí sin để đo khoảng cách gián tiếp qua sông."
      },

      // ─── PHẦN III: Câu trắc nghiệm Trả lời ngắn (6 câu, 0.5đ/câu) ───────
      {
        id: "gk1-p3-1",
        part: 3,
        q: "Cho tập hợp $A = \\{x \\in \\mathbb{N} \\mid x \\le 6\\}$. Tập hợp $A$ có bao nhiêu phần tử?",
        answer: "7",
        explain: "$A = \\{0;1;2;3;4;5;6\\}$ có 7 phần tử."
      },
      {
        id: "gk1-p3-2",
        part: 3,
        q: "Cho $A = \\{x \\in \\mathbb{R} \\mid (x^2 - 4)(2x - 1) = 0\\}$. Tính tổng bình phương các phần tử của tập hợp $A$.",
        answer: "8.25",
        explain: "$A = \\{-2; \\frac{1}{2}; 2\\}$. Tổng bình phương $= 4 + 0,25 + 4 = 8,25$."
      },
      {
        id: "gk1-p3-3",
        part: 3,
        q: "Xác định hoành độ giao điểm của đường thẳng biên $3x - 4y = 12$ với trục hoành $Ox$.",
        answer: "4",
        explain: "Cho $y = 0 \\Rightarrow 3x = 12 \\Rightarrow x = 4$."
      },
      {
        id: "gk1-p3-4",
        part: 3,
        q: "Tính giá trị lớn nhất của $F = 3x + 2y$ trên miền tam giác có các đỉnh $O(0; 0), A(0; 5), B(4; 0)$.",
        answer: "12",
        explain: "$F(0;0)=0; F(0;5)=10; F(4;0)=12$. Giá trị lớn nhất bằng 12."
      },
      {
        id: "gk1-p3-5",
        part: 3,
        q: "Cho tam giác $ABC$ có $a = 6, \\widehat{A} = 30^\\circ$. Tính bán kính đường tròn ngoại tiếp $R$ của tam giác.",
        answer: "6",
        explain: "$\\frac{a}{\\sin A} = 2R \\Rightarrow 2R = \\frac{6}{1/2} = 12 \\Rightarrow R = 6$."
      },
      {
        id: "gk1-p3-6",
        part: 3,
        q: "Tam giác $ABC$ có $a = 5, b = 8$ và góc $\\widehat{C} = 60^\\circ$. Tính độ dài cạnh $c$.",
        answer: "7",
        explain: "$c^2 = a^2+b^2-2ab\\cos C = 25+64-2(5)(8)\\cdot\\frac{1}{2} = 89-40 = 49 \\Rightarrow c = 7$."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ĐỀ 2: CUỐI KỲ 1 — Chương I–IV (Bài 1–11)
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "cuoi-ky-1",
    title: "Đề kiểm tra Cuối kỳ 1 — Môn Toán 10",
    subtitle: "Cấu trúc bám sát đề minh hoạ Tốt nghiệp THPT của Bộ Giáo dục và Đào tạo",
    scope: "Chương I – IV: Mệnh đề & Tập hợp, BPT bậc nhất hai ẩn, Hệ thức lượng trong tam giác, Vectơ (Bài 1–11)",
    durationMinutes: 90,
    totalQuestions: 22,
    maxScore: 10.0,
    questions: [
      // ─── PHẦN I ─────────────────────────────────────────────────────────
      {
        id: "ck1-p1-1",
        part: 1,
        q: "Cho mệnh đề chứa biến $P(n)$: '$n$ chia hết cho 3' với $n \\in \\mathbb{N}$. Khẳng định nào sau đây là mệnh đề đúng?",
        options: ["$P(9)$", "$P(4)$", "$P(7)$", "$P(11)$"],
        answer: 0,
        explain: "$9$ chia hết cho 3 nên $P(9)$ đúng."
      },
      {
        id: "ck1-p1-2",
        part: 1,
        q: "Cho tập hợp $A = \\{x \\in \\mathbb{N} \\mid x < 5\\}$. Viết tập hợp $A$ dưới dạng liệt kê:",
        options: ["$A = \\{0; 1; 2; 3; 4\\}$", "$A = \\{1; 2; 3; 4\\}$", "$A = \\{0; 1; 2; 3; 4; 5\\}$", "$A = \\{1; 2; 3; 4; 5\\}$"],
        answer: 0,
        explain: "Các số tự nhiên nhỏ hơn 5: $0,1,2,3,4$."
      },
      {
        id: "ck1-p1-3",
        part: 1,
        q: "Cho hai tập hợp $A = \\{1; 2; 3\\}$ và $B = \\{2; 3; 4; 5\\}$. Hiệu $A \\setminus B$ là:",
        options: ["$\\{1\\}$", "$\\{4; 5\\}$", "$\\{2; 3\\}$", "$\\emptyset$"],
        answer: 0,
        explain: "Phần tử 1 thuộc $A$ nhưng không thuộc $B$: $A \\setminus B = \\{1\\}$."
      },
      {
        id: "ck1-p1-4",
        part: 1,
        q: "Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?",
        options: ["$3x - 4y > 7$", "$2x^2 + 3y \\le 5$", "$xy + 2x - 1 \\ge 0$", "$\\frac{2}{x} + 3y < 1$"],
        answer: 0,
        explain: "BPT bậc nhất hai ẩn có dạng $ax+by<c$: $3x-4y>7$ thoả mãn."
      },
      {
        id: "ck1-p1-5",
        part: 1,
        q: "Đường thẳng $d: x - 2y = 2$ chia mặt phẳng thành hai nửa. Điểm $M(3; 1)$ thuộc miền nghiệm của BPT nào?",
        options: ["$x - 2y < 2$", "$x - 2y > 2$", "$x - 2y \\ge 3$", "$x - 2y \\le 0$"],
        answer: 0,
        explain: "$3 - 2(1) = 1 < 2$, nên $M$ thuộc miền $x-2y<2$."
      },
      {
        id: "ck1-p1-6",
        part: 1,
        q: "Hệ bất phương trình nào sau đây là hệ bất phương trình bậc nhất hai ẩn?",
        options: ["$\\begin{cases} 2x + 3y > 5 \\\\ x - y \\le 4 \\end{cases}$", "$\\begin{cases} x - 2y \\le 3 \\\\ 2x + y^2 > 1 \\end{cases}$", "$\\begin{cases} xy \\le 2 \\\\ x + y > 1 \\end{cases}$", "$\\begin{cases} x^2 + y^2 \\le 4 \\\\ 3x - y \\ge 0 \\end{cases}$"],
        answer: 0,
        explain: "Hệ chỉ chứa các biến bậc 1 là hệ BPT bậc nhất hai ẩn."
      },
      {
        id: "ck1-p1-7",
        part: 1,
        q: "Với mọi góc $\\alpha$ thoả mãn $0^\\circ \\le \\alpha \\le 180^\\circ$, khẳng định nào sau đây đúng?",
        options: ["$\\cos(180^\\circ - \\alpha) = -\\cos \\alpha$", "$\\sin(180^\\circ - \\alpha) = -\\sin \\alpha$", "$\\tan(180^\\circ - \\alpha) = \\tan \\alpha$", "$\\cot(180^\\circ - \\alpha) = \\cot \\alpha$"],
        answer: 0,
        explain: "Hai góc bù nhau có côsin đối nhau: $\\cos(180^\\circ-\\alpha)=-\\cos\\alpha$."
      },
      {
        id: "ck1-p1-8",
        part: 1,
        q: "Tam giác $ABC$ có cạnh $b = 6, c = 8$ và góc $A = 60^\\circ$. Độ dài cạnh $a$ bằng:",
        options: ["$2\\sqrt{13}$", "$2\\sqrt{37}$", "$10$", "$\\sqrt{52}$"],
        answer: 0,
        explain: "$a^2 = 36+64-2(6)(8)\\cos60^\\circ = 52 \\Rightarrow a = 2\\sqrt{13}$."
      },
      {
        id: "ck1-p1-9",
        part: 1,
        q: "Tam giác đều cạnh $4$ có diện tích bằng (biết công thức $S = \\frac{a^2\\sqrt{3}}{4}$):",
        options: ["$4\\sqrt{3}$", "$8\\sqrt{3}$", "$16$", "$2\\sqrt{3}$"],
        answer: 0,
        explain: "$S = \\frac{4^2\\sqrt{3}}{4} = \\frac{16\\sqrt{3}}{4} = 4\\sqrt{3}$."
      },
      {
        id: "ck1-p1-10",
        part: 1,
        q: "Cho hình bình hành $ABCD$. Vectơ nào sau đây bằng vectơ $\\overrightarrow{AB}$?",
        options: ["$\\overrightarrow{DC}$", "$\\overrightarrow{CD}$", "$\\overrightarrow{BC}$", "$\\overrightarrow{AD}$"],
        answer: 0,
        explain: "$\\overrightarrow{AB}$ cùng hướng, cùng độ dài với $\\overrightarrow{DC}$."
      },
      {
        id: "ck1-p1-11",
        part: 1,
        q: "Với ba điểm phân biệt $A, B, C$ tuỳ ý, đẳng thức nào sau đây luôn đúng (Quy tắc ba điểm)?",
        options: ["$\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$", "$\\overrightarrow{AB} + \\overrightarrow{CA} = \\overrightarrow{BC}$", "$\\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{BC}$", "$\\overrightarrow{BA} + \\overrightarrow{AC} = \\overrightarrow{CB}$"],
        answer: 0,
        explain: "Quy tắc ba điểm: $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$."
      },
      {
        id: "ck1-p1-12",
        part: 1,
        q: "Cho điểm $I$ là trung điểm đoạn thẳng $AB$. Với điểm $M$ bất kì, đẳng thức nào đúng?",
        options: ["$\\overrightarrow{MA} + \\overrightarrow{MB} = 2\\overrightarrow{MI}$", "$\\overrightarrow{MA} + \\overrightarrow{MB} = \\overrightarrow{MI}$", "$\\overrightarrow{MA} + \\overrightarrow{MB} = 3\\overrightarrow{MI}$", "$\\overrightarrow{MA} - \\overrightarrow{MB} = 2\\overrightarrow{MI}$"],
        answer: 0,
        explain: "Tính chất trung điểm: $\\overrightarrow{MA} + \\overrightarrow{MB} = 2\\overrightarrow{MI}$."
      },

      // ─── PHẦN II ─────────────────────────────────────────────────────────
      {
        id: "ck1-p2-1",
        part: 2,
        q: "Lớp 10A có 42 học sinh, khảo sát việc đăng ký học thêm hai câu lạc bộ ngoại ngữ: tiếng Anh (tập hợp $E$) và tiếng Trung (tập hợp $C$). Có 30 bạn đăng ký $E$, 18 bạn đăng ký $C$, và 10 bạn đăng ký cả hai.",
        statements: [
          {
            text: "(Nhận biết) Số bạn đăng ký ít nhất một câu lạc bộ là $n(E \\cup C) = 30+18-10 = 38$ bạn.",
            answer: true,
            explain: "$n(E \\cup C) = n(E)+n(C)-n(E\\cap C) = 30+18-10=38$."
          },
          {
            text: "(Thông hiểu) Số bạn không đăng ký câu lạc bộ nào là 4 bạn.",
            answer: true,
            explain: "$42 - 38 = 4$ bạn."
          },
          {
            text: "(Vận dụng) Số bạn chỉ đăng ký đúng 1 câu lạc bộ là 20 bạn.",
            answer: false,
            explain: "Số bạn chỉ đăng ký đúng 1 CLB $= 38 - 10 = 28$ bạn, không phải 20."
          },
          {
            text: "(Vận dụng cao) Nếu chọn ngẫu nhiên 1 bạn trong lớp thì xác suất bạn đó không đăng ký câu lạc bộ nào là $\\frac{2}{21}$.",
            answer: true,
            explain: "$\\frac{4}{42} = \\frac{2}{21}$."
          }
        ],
        explain: "Vận dụng công thức đếm số phần tử của hợp hai tập hợp."
      },
      {
        id: "ck1-p2-2",
        part: 2,
        q: "Một công ty vận chuyển dùng xe tải chở hai loại hàng: loại A nặng 20 kg/thùng, loại B nặng 30 kg/thùng. Xe chở tối đa 600 kg và tối đa 25 thùng. Gọi $x, y$ lần lượt là số thùng loại A, loại B ($x, y \\ge 0$).",
        statements: [
          {
            text: "(Nhận biết) Hệ bất phương trình mô tả điều kiện là $\\begin{cases} 20x+30y \\le 600 \\\\ x+y \\le 25 \\end{cases}$.",
            answer: true,
            explain: "Tổng khối lượng không vượt 600 kg và tổng số thùng không vượt 25 thùng."
          },
          {
            text: "(Thông hiểu) Phương án $x=10, y=10$ thoả mãn cả hai điều kiện trên.",
            answer: true,
            explain: "$20(10)+30(10)=500\\le600$ và $10+10=20\\le25$: thoả mãn."
          },
          {
            text: "(Vận dụng) Nếu cước phí mỗi thùng loại A là 50 nghìn đồng, loại B là 80 nghìn đồng thì phương án $(10;10)$ cho doanh thu 1,3 triệu đồng.",
            answer: true,
            explain: "$50(10)+80(10)=500+800=1300$ nghìn đồng $=1,3$ triệu đồng."
          },
          {
            text: "(Vận dụng cao) Với hàm doanh thu $F=50x+80y$ (nghìn đồng), doanh thu lớn nhất công ty đạt được trong một chuyến xe là 1500 nghìn đồng.",
            answer: false,
            explain: "Các đỉnh miền nghiệm: $(0;0),(25;0),(0;20),(15;10)$. $F(0;20)=1600$ là lớn nhất, không phải 1500."
          }
        ],
        explain: "Bài toán quy hoạch tuyến tính trong vận chuyển hàng hoá."
      },
      {
        id: "ck1-p2-3",
        part: 2,
        q: "Để đo chiều rộng $AB$ của một hồ nước, các bạn học sinh chọn điểm $C$ trên bờ sao cho đo được $AC = 50$ m, $BC = 80$ m và góc $\\widehat{ACB} = 60^\\circ$.",
        statements: [
          {
            text: "(Nhận biết) Vì góc $\\widehat{ACB}=60^\\circ$ nên $\\cos\\widehat{ACB} = \\frac{1}{2}$.",
            answer: true,
            explain: "$\\cos 60^\\circ = \\frac{1}{2}$."
          },
          {
            text: "(Thông hiểu) Áp dụng định lí côsin, $AB^2 = AC^2+BC^2-2 \\cdot AC \\cdot BC \\cdot \\cos\\widehat{ACB}$.",
            answer: true,
            explain: "Đây chính là định lí côsin cho cạnh $AB$ đối diện góc $C$."
          },
          {
            text: "(Vận dụng) Chiều rộng hồ nước $AB = 70$ m.",
            answer: true,
            explain: "$AB^2 = 2500+6400-2(50)(80)(0,5) = 4900 \\Rightarrow AB = 70$ m."
          },
          {
            text: "(Vận dụng cao) Nếu một người bơi qua hồ theo đường thẳng $AB$ với vận tốc trung bình $0,8$ m/s thì thời gian bơi khoảng 2 phút.",
            answer: false,
            explain: "Thời gian $= \\frac{70}{0,8} = 87,5$ giây $\\approx 1,46$ phút, chưa tới 2 phút."
          }
        ],
        explain: "Ứng dụng định lí côsin đo khoảng cách gián tiếp."
      },
      {
        id: "ck1-p2-4",
        part: 2,
        q: "Hai người cùng kéo một khối gỗ bằng hai sợi dây, tạo ra hai lực $\\vec{F_1}$ và $\\vec{F_2}$ tác dụng tại điểm $O$. Trong hệ toạ độ $Oxy$ (đơn vị Newton), $\\vec{F_1} = (30; 40)$ và $\\vec{F_2} = (40; -30)$.",
        statements: [
          {
            text: "(Nhận biết) Độ lớn của lực $\\vec{F_1}$ là $|\\vec{F_1}| = 50$ N.",
            answer: true,
            explain: "$|\\vec{F_1}| = \\sqrt{30^2+40^2} = \\sqrt{2500} = 50$."
          },
          {
            text: "(Thông hiểu) Lực tổng hợp tác dụng lên khối gỗ là $\\vec{F} = \\vec{F_1}+\\vec{F_2} = (70; 10)$.",
            answer: true,
            explain: "$(30+40; 40-30) = (70; 10)$."
          },
          {
            text: "(Vận dụng) Độ lớn của lực tổng hợp là $|\\vec{F}| = 50\\sqrt{2}$ N.",
            answer: true,
            explain: "$|\\vec{F}| = \\sqrt{70^2+10^2} = \\sqrt{5000} = 50\\sqrt{2}$."
          },
          {
            text: "(Vận dụng cao) Tích vô hướng $\\vec{F_1} \\cdot \\vec{F_2} = 2400$, tức là góc giữa hai lực nhỏ hơn $90^\\circ$.",
            answer: false,
            explain: "$\\vec{F_1} \\cdot \\vec{F_2} = 30(40)+40(-30) = 0$, nghĩa là hai lực vuông góc ($90^\\circ$), không phải nhỏ hơn $90^\\circ$."
          }
        ],
        explain: "Ứng dụng vectơ và tích vô hướng trong bài toán lực (Vật lí)."
      },

      // ─── PHẦN III ────────────────────────────────────────────────────────
      {
        id: "ck1-p3-1",
        part: 3,
        q: "Cho $A = \\{x \\in \\mathbb{R} \\mid x^2 - 3x + 2 = 0\\}$. Tính tổng các phần tử của tập hợp $A$.",
        answer: "3",
        explain: "$A=\\{1;2\\}$, tổng $=3$."
      },
      {
        id: "ck1-p3-2",
        part: 3,
        q: "Tìm giá trị lớn nhất của $F(x,y)=2x+3y$ trên miền tứ giác có các đỉnh $O(0;0), A(0;4), B(3;2), C(4;0)$.",
        answer: "12",
        explain: "$F(0;4)=12$ và $F(3;2)=12$ đều là giá trị lớn nhất."
      },
      {
        id: "ck1-p3-3",
        part: 3,
        q: "Một mảnh đất tam giác có hai cạnh 6 m và 8 m, góc xen giữa hai cạnh đó bằng $30^\\circ$. Tính diện tích mảnh đất (đơn vị: m²).",
        answer: "12",
        explain: "$S = \\frac{1}{2}(6)(8)\\sin 30^\\circ = 24 \\times 0,5 = 12$ m²."
      },
      {
        id: "ck1-p3-4",
        part: 3,
        q: "Tam giác $ABC$ có $a = 5, \\widehat{A} = 30^\\circ$. Tính bán kính đường tròn ngoại tiếp $R$.",
        answer: "5",
        explain: "$2R = \\frac{a}{\\sin A} = \\frac{5}{1/2} = 10 \\Rightarrow R = 5$."
      },
      {
        id: "ck1-p3-5",
        part: 3,
        q: "Cho hình bình hành $ABCD$ với $A(1; 2), B(4; 2), D(1; 6)$. Tìm toạ độ điểm $C$.",
        answer: "(4;6)",
        explain: "$\\overrightarrow{AB}=\\overrightarrow{DC} \\Rightarrow C = D + \\overrightarrow{AB} = (1;6)+(3;0) = (4;6)$."
      },
      {
        id: "ck1-p3-6",
        part: 3,
        q: "Tìm toạ độ trung điểm $M$ của đoạn thẳng nối $A(2; 4)$ và $B(-4; 8)$.",
        answer: "(-1;6)",
        explain: "$x_M = \\frac{2+(-4)}{2}=-1; y_M=\\frac{4+8}{2}=6 \\Rightarrow M(-1;6)$."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ĐỀ 3: GIỮA KỲ 2 — Chương V, VI (Bài 12–18)
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "giua-ky-2",
    title: "Đề kiểm tra Giữa kỳ 2 — Môn Toán 10",
    subtitle: "Cấu trúc bám sát đề minh hoạ Tốt nghiệp THPT của Bộ Giáo dục và Đào tạo",
    scope: "Chương V – VI: Các số đặc trưng của mẫu số liệu, Hàm số bậc hai & Dấu tam thức bậc hai (Bài 12–18)",
    durationMinutes: 90,
    totalQuestions: 22,
    maxScore: 10.0,
    questions: [
      // ─── PHẦN I ─────────────────────────────────────────────────────────
      {
        id: "gk2-p1-1",
        part: 1,
        q: "Quy tròn số gần đúng $a = 354{,}672$ đến hàng phần mười ta được:",
        options: ["354,7", "354,6", "355", "354,67"],
        answer: 0,
        explain: "Chữ số sau hàng phần mười là 7 $(\\ge5)$ nên làm tròn thành $354,7$."
      },
      {
        id: "gk2-p1-2",
        part: 1,
        q: "Một sợi dây có chiều dài đo được là $l = 15{,}4 \\pm 0{,}2\\text{ m}$. Sai số tuyệt đối của phép đo không vượt quá:",
        options: ["$0{,}2\\text{ m}$", "$15{,}4\\text{ m}$", "$0{,}1\\text{ m}$", "$0{,}4\\text{ m}$"],
        answer: 0,
        explain: "Độ chính xác $d=0,2$ m chính là cận trên của sai số tuyệt đối."
      },
      {
        id: "gk2-p1-3",
        part: 1,
        q: "Cho mẫu số liệu điểm kiểm tra: 6, 7, 7, 8, 9, 9, 9, 10. Mốt của mẫu số liệu là:",
        options: ["9", "7", "8", "10"],
        answer: 0,
        explain: "Điểm 9 xuất hiện 3 lần, nhiều nhất."
      },
      {
        id: "gk2-p1-4",
        part: 1,
        q: "Cho mẫu số liệu đã sắp xếp: 3, 5, 7, 8, 10, 12, 14. Trung vị của mẫu số liệu bằng:",
        options: ["8", "7", "8,5", "10"],
        answer: 0,
        explain: "$n=7$ lẻ, trung vị là giá trị thứ 4: số 8."
      },
      {
        id: "gk2-p1-5",
        part: 1,
        q: "Cho mẫu số liệu: 4, 6, 7, 8, 10, 15. Khoảng biến thiên $R$ của mẫu số liệu bằng:",
        options: ["11", "15", "4", "7"],
        answer: 0,
        explain: "$R = x_{\\max}-x_{\\min} = 15-4=11$."
      },
      {
        id: "gk2-p1-6",
        part: 1,
        q: "Độ lệch chuẩn $s$ của một mẫu số liệu bằng căn bậc hai của đại lượng nào sau đây?",
        options: ["Phương sai", "Khoảng biến thiên", "Số trung bình", "Khoảng tứ phân vị"],
        answer: 0,
        explain: "$s=\\sqrt{s^2}$, là căn bậc hai của phương sai."
      },
      {
        id: "gk2-p1-7",
        part: 1,
        q: "Tập xác định của hàm số $y = \\frac{1}{x-3}$ là:",
        options: ["$\\mathbb{R} \\setminus \\{3\\}$", "$\\mathbb{R}$", "$(3; +\\infty)$", "$(-\\infty; 3)$"],
        answer: 0,
        explain: "Điều kiện $x-3\\ne0 \\Leftrightarrow x\\ne3$."
      },
      {
        id: "gk2-p1-8",
        part: 1,
        q: "Tập xác định của hàm số $y = \\sqrt{2x - 4}$ là:",
        options: ["$[2; +\\infty)$", "$(2; +\\infty)$", "$(-\\infty; 2]$", "$\\mathbb{R} \\setminus \\{2\\}$"],
        answer: 0,
        explain: "Điều kiện $2x-4\\ge0 \\Leftrightarrow x\\ge2$."
      },
      {
        id: "gk2-p1-9",
        part: 1,
        q: "Toạ độ đỉnh của parabol $y = x^2 - 4x + 3$ là:",
        options: ["$(2; -1)$", "$(2; 3)$", "$(-2; 15)$", "$(4; 3)$"],
        answer: 0,
        explain: "$x_I=-\\frac{-4}{2}=2; y_I=4-8+3=-1$."
      },
      {
        id: "gk2-p1-10",
        part: 1,
        q: "Trục đối xứng của parabol $y = -2x^2 + 8x - 5$ là đường thẳng:",
        options: ["$x = 2$", "$x = -2$", "$x = 4$", "$y = 3$"],
        answer: 0,
        explain: "$x = -\\frac{8}{2(-2)} = 2$."
      },
      {
        id: "gk2-p1-11",
        part: 1,
        q: "Tập nghiệm của bất phương trình $x^2 - 5x + 6 > 0$ là:",
        options: ["$(-\\infty; 2) \\cup (3; +\\infty)$", "$(2; 3)$", "$[2; 3]$", "$\\mathbb{R}$"],
        answer: 0,
        explain: "$f(x)$ có 2 nghiệm $2,3$ và $a=1>0$: $f(x)>0 \\Leftrightarrow x<2$ hoặc $x>3$."
      },
      {
        id: "gk2-p1-12",
        part: 1,
        q: "Tam thức bậc hai $f(x)=ax^2+bx+c$ ($a\\ne0$) luôn cùng dấu với hệ số $a$ với mọi $x\\in\\mathbb{R}$ khi và chỉ khi:",
        options: ["$\\Delta < 0$", "$\\Delta > 0$", "$\\Delta = 0$", "$\\Delta \\le 0$"],
        answer: 0,
        explain: "Nếu $\\Delta<0$ thì $f(x)$ luôn cùng dấu với $a$."
      },

      // ─── PHẦN II ─────────────────────────────────────────────────────────
      {
        id: "gk2-p2-1",
        part: 2,
        q: "Điểm kiểm tra giữa kỳ môn Toán của 7 bạn tổ 1 lớp 10A: 6, 7, 7, 8, 8, 9, 10 (đơn vị: điểm).",
        statements: [
          {
            text: "(Nhận biết) Số trung bình cộng của mẫu số liệu là $\\bar{x} \\approx 7,86$ (làm tròn đến hàng phần trăm).",
            answer: true,
            explain: "$\\bar{x} = \\frac{6+7+7+8+8+9+10}{7} = \\frac{55}{7} \\approx 7,86$."
          },
          {
            text: "(Thông hiểu) Trung vị của mẫu số liệu là $M_e = 8$.",
            answer: true,
            explain: "$n=7$ lẻ, trung vị là giá trị thứ 4 khi đã sắp xếp: 8."
          },
          {
            text: "(Vận dụng) Mẫu số liệu có hai mốt là $M_o = 7$ và $M_o = 8$.",
            answer: true,
            explain: "Điểm 7 và điểm 8 đều xuất hiện 2 lần, nhiều nhất trong mẫu."
          },
          {
            text: "(Vận dụng cao) Nếu thêm điểm của bạn thứ 8 vào mẫu là 10 điểm, trung vị của mẫu số liệu mới (8 giá trị) là 8,5.",
            answer: false,
            explain: "Mẫu mới sắp xếp: 6,7,7,8,8,9,10,10. Trung vị $=\\frac{8+8}{2}=8$, không phải 8,5."
          }
        ],
        explain: "Tính các số đặc trưng đo xu thế trung tâm của điểm kiểm tra."
      },
      {
        id: "gk2-p2-2",
        part: 2,
        q: "Thời gian tự học ở nhà (đơn vị: giờ/ngày) của 5 bạn tổ 2 trong một tuần: 1, 2, 2, 3, 7.",
        statements: [
          {
            text: "(Nhận biết) Khoảng biến thiên của mẫu số liệu là $R = 5$.",
            answer: false,
            explain: "$R = 7-1=6$, không phải 5."
          },
          {
            text: "(Thông hiểu) Số trung bình cộng của mẫu là $\\bar{x}=3$.",
            answer: true,
            explain: "$\\frac{1+2+2+3+7}{5}=3$."
          },
          {
            text: "(Vận dụng) Phương sai của mẫu số liệu là $s^2=4,4$.",
            answer: true,
            explain: "Độ lệch bình phương so với TB: $4,1,1,0,16$; tổng $=22$; $s^2=\\frac{22}{5}=4,4$."
          },
          {
            text: "(Vận dụng cao) Giá trị 7 giờ là một giá trị bất thường so với phần còn lại, vì 4 giá trị còn lại (1,2,2,3) chỉ có phương sai khoảng 0,5.",
            answer: true,
            explain: "Phương sai của $\\{1,2,2,3\\}$ (TB=2): $\\frac{1+0+0+1}{4}=0,5$, nhỏ hơn nhiều so với 4,4 của cả mẫu."
          }
        ],
        explain: "Phân tích độ phân tán và giá trị bất thường trong thống kê."
      },
      {
        id: "gk2-p2-3",
        part: 2,
        q: "Một vật được ném lên theo phương thẳng đứng, độ cao $h$ (mét) sau $t$ giây là $h(t) = -5t^2 + 20t$ (với $0 \\le t \\le 4$).",
        statements: [
          {
            text: "(Nhận biết) Hàm số $h(t)$ là hàm số bậc hai với $a=-5, b=20, c=0$.",
            answer: true,
            explain: "Hàm số có dạng $at^2+bt+c$ với các hệ số như trên."
          },
          {
            text: "(Thông hiểu) Đồ thị hàm số có bề lõm quay xuống dưới vì $a=-5<0$.",
            answer: true,
            explain: "Hệ số $a<0$ nên bề lõm quay xuống."
          },
          {
            text: "(Vận dụng) Độ cao lớn nhất vật đạt được là $h=20$ m, tại thời điểm $t=2$ giây.",
            answer: true,
            explain: "$t_I=-\\frac{20}{-10}=2; h(2)=-20+40=20$."
          },
          {
            text: "(Vận dụng cao) Vật chạm đất ($h=0$) lần thứ hai tại thời điểm $t=5$ giây.",
            answer: false,
            explain: "$-5t^2+20t=0 \\Leftrightarrow t=0$ hoặc $t=4$. Vật chạm đất lần hai tại $t=4$, không phải $t=5$."
          }
        ],
        explain: "Ứng dụng hàm số bậc hai mô tả chuyển động ném thẳng đứng."
      },
      {
        id: "gk2-p2-4",
        part: 2,
        q: "Một cửa hàng bán áo với giá $x$ (nghìn đồng/áo) thì bán được $q(x)=200-x$ áo/ngày ($50\\le x\\le200$). Doanh thu $R(x)=x \\cdot q(x)=x(200-x)$ (nghìn đồng).",
        statements: [
          {
            text: "(Nhận biết) Hàm doanh thu $R(x)=-x^2+200x$ là hàm số bậc hai với $a=-1<0$.",
            answer: true,
            explain: "Khai triển $x(200-x)=-x^2+200x$."
          },
          {
            text: "(Thông hiểu) Đỉnh của parabol biểu diễn $R(x)$ có hoành độ $x=100$.",
            answer: true,
            explain: "$x_I=-\\frac{200}{-2}=100$."
          },
          {
            text: "(Vận dụng) Doanh thu lớn nhất trong ngày là $R=10\\,000$ nghìn đồng, đạt khi giá bán $100$ nghìn đồng/áo.",
            answer: true,
            explain: "$R(100)=100(200-100)=10\\,000$."
          },
          {
            text: "(Vận dụng cao) Nếu bán với giá $x=150$ nghìn đồng/áo thì doanh thu thu được nhiều hơn khi bán giá $x=100$ nghìn đồng/áo.",
            answer: false,
            explain: "$R(150)=150(50)=7\\,500 < R(100)=10\\,000$, doanh thu ít hơn chứ không nhiều hơn."
          }
        ],
        explain: "Bài toán tối ưu doanh thu bằng hàm số bậc hai."
      },

      // ─── PHẦN III ────────────────────────────────────────────────────────
      {
        id: "gk2-p3-1",
        part: 3,
        q: "Quy tròn số gần đúng $a = 27{,}346$ đến hàng phần trăm.",
        answer: "27,35",
        explain: "Chữ số hàng phần nghìn là 6 $(\\ge5)$ nên làm tròn lên: $27,35$."
      },
      {
        id: "gk2-p3-2",
        part: 3,
        q: "Cho mẫu số liệu: 5, 7, 7, 8, 9. Tính số trung bình cộng.",
        answer: "7,2",
        explain: "$\\frac{5+7+7+8+9}{5}=\\frac{36}{5}=7,2$."
      },
      {
        id: "gk2-p3-3",
        part: 3,
        q: "Cho mẫu số liệu: 3, 5, 7, 9, 11. Tính phương sai của mẫu số liệu.",
        answer: "8",
        explain: "TB$=7$; tổng bình phương độ lệch $=16+4+0+4+16=40$; $s^2=\\frac{40}{5}=8$."
      },
      {
        id: "gk2-p3-4",
        part: 3,
        q: "Tập xác định của hàm số $y=\\frac{2}{x-5}$ là $\\mathbb{R}\\setminus\\{a\\}$. Tìm $a$.",
        answer: "5",
        explain: "Điều kiện $x-5\\ne0 \\Leftrightarrow x\\ne5$."
      },
      {
        id: "gk2-p3-5",
        part: 3,
        q: "Tìm hoành độ đỉnh của parabol $y = x^2 - 6x + 5$.",
        answer: "3",
        explain: "$x_I=-\\frac{-6}{2}=3$."
      },
      {
        id: "gk2-p3-6",
        part: 3,
        q: "Bất phương trình $x^2 - 5x + 6 \\le 0$ có tập nghiệm là đoạn $[m; n]$. Tính $m+n$.",
        answer: "5",
        explain: "Tập nghiệm $[2;3]$, $m+n=2+3=5$."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ĐỀ 4: CUỐI KỲ 2 — Chương V–IX (Bài 12–27)
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "cuoi-ky-2",
    title: "Đề kiểm tra Cuối kỳ 2 — Môn Toán 10",
    subtitle: "Cấu trúc bám sát đề minh hoạ Tốt nghiệp THPT của Bộ Giáo dục và Đào tạo",
    scope: "Chương V – IX: Số đặc trưng mẫu số liệu, Hàm số bậc hai, Phương pháp toạ độ mặt phẳng, Đại số tổ hợp, Xác suất cổ điển (Bài 12–27)",
    durationMinutes: 90,
    totalQuestions: 22,
    maxScore: 10.0,
    questions: [
      // ─── PHẦN I ─────────────────────────────────────────────────────────
      {
        id: "ck2-p1-1",
        part: 1,
        q: "Cho mẫu số liệu điểm kiểm tra: 6, 7, 7, 8, 9, 9, 9, 10. Mốt của mẫu số liệu là:",
        options: ["9", "7", "8", "10"],
        answer: 0,
        explain: "Điểm 9 xuất hiện 3 lần, nhiều nhất."
      },
      {
        id: "ck2-p1-2",
        part: 1,
        q: "Độ lệch chuẩn $s$ của một mẫu số liệu bằng căn bậc hai của đại lượng nào sau đây?",
        options: ["Phương sai", "Khoảng biến thiên", "Số trung bình", "Khoảng tứ phân vị"],
        answer: 0,
        explain: "$s=\\sqrt{s^2}$."
      },
      {
        id: "ck2-p1-3",
        part: 1,
        q: "Toạ độ đỉnh của parabol $y = x^2 - 4x + 3$ là:",
        options: ["$(2; -1)$", "$(2; 3)$", "$(-2; 15)$", "$(4; 3)$"],
        answer: 0,
        explain: "$x_I=2; y_I=-1$."
      },
      {
        id: "ck2-p1-4",
        part: 1,
        q: "Tam thức bậc hai $f(x)=ax^2+bx+c$ ($a\\ne0$) luôn cùng dấu với $a$ với mọi $x\\in\\mathbb{R}$ khi và chỉ khi:",
        options: ["$\\Delta < 0$", "$\\Delta > 0$", "$\\Delta = 0$", "$\\Delta \\le 0$"],
        answer: 0,
        explain: "Nếu $\\Delta<0$ thì $f(x)$ luôn cùng dấu với $a$."
      },
      {
        id: "ck2-p1-5",
        part: 1,
        q: "Đường thẳng đi qua $M(1; 2)$ có VTPT $\\vec{n} = (3; -2)$ có phương trình tổng quát là:",
        options: ["$3x - 2y + 1 = 0$", "$3x - 2y - 1 = 0$", "$2x + 3y - 8 = 0$", "$3x + 2y - 7 = 0$"],
        answer: 0,
        explain: "$3(x-1)-2(y-2)=0 \\Leftrightarrow 3x-2y+1=0$."
      },
      {
        id: "ck2-p1-6",
        part: 1,
        q: "Khoảng cách từ điểm $M(1; -2)$ đến đường thẳng $\\Delta: 3x - 4y + 4 = 0$ bằng:",
        options: ["3", "5", "2", "4"],
        answer: 0,
        explain: "$d(M,\\Delta)=\\frac{|3+8+4|}{5}=\\frac{15}{5}=3$."
      },
      {
        id: "ck2-p1-7",
        part: 1,
        q: "Phương trình đường tròn tâm $I(2; -1)$ bán kính $R = 3$ là:",
        options: ["$(x-2)^2+(y+1)^2=9$", "$(x+2)^2+(y-1)^2=9$", "$(x-2)^2+(y+1)^2=3$", "$(x-2)^2+(y-1)^2=9$"],
        answer: 0,
        explain: "Dạng chính tắc $(x-a)^2+(y-b)^2=R^2$."
      },
      {
        id: "ck2-p1-8",
        part: 1,
        q: "Bạn An có 4 chiếc áo khác nhau và 3 chiếc quần khác nhau. Số cách chọn một bộ gồm 1 áo và 1 quần là:",
        options: ["12", "7", "10", "14"],
        answer: 0,
        explain: "Quy tắc nhân: $4 \\times 3 = 12$."
      },
      {
        id: "ck2-p1-9",
        part: 1,
        q: "Số cách xếp 5 bạn học sinh thành một hàng dọc là:",
        options: ["$5! = 120$", "$5^5 = 3125$", "$A_5^1 = 5$", "$C_5^2 = 10$"],
        answer: 0,
        explain: "Hoán vị của 5 phần tử: $P_5=5!=120$."
      },
      {
        id: "ck2-p1-10",
        part: 1,
        q: "Từ một tổ gồm 10 bạn, chọn ra 3 bạn để phân công trực nhật. Số cách chọn là:",
        options: ["$C_{10}^3 = 120$", "$A_{10}^3 = 720$", "$10^3 = 1000$", "$30$"],
        answer: 0,
        explain: "Tổ hợp chập 3 của 10: $C_{10}^3=120$."
      },
      {
        id: "ck2-p1-11",
        part: 1,
        q: "Gieo một con xúc xắc cân đối một lần. Xác suất để xuất hiện mặt có số chấm chẵn bằng:",
        options: ["$\\frac{1}{2}$", "$\\frac{1}{3}$", "$\\frac{1}{6}$", "$\\frac{2}{3}$"],
        answer: 0,
        explain: "Biến cố $\\{2;4;6\\}$: $P=\\frac{3}{6}=\\frac{1}{2}$."
      },
      {
        id: "ck2-p1-12",
        part: 1,
        q: "Một hộp chứa 5 quả cầu đỏ và 4 quả cầu xanh. Lấy ngẫu nhiên 2 quả. Xác suất để lấy được 2 quả cùng màu đỏ là:",
        options: ["$\\frac{5}{18}$", "$\\frac{5}{9}$", "$\\frac{10}{36}$", "$\\frac{1}{6}$"],
        answer: 0,
        explain: "$P=\\frac{C_5^2}{C_9^2}=\\frac{10}{36}=\\frac{5}{18}$."
      },

      // ─── PHẦN II ─────────────────────────────────────────────────────────
      {
        id: "ck2-p2-1",
        part: 2,
        q: "Thu nhập hàng tháng (triệu đồng) của 5 nhân viên phòng Kinh doanh: 8, 9, 10, 11, 12.",
        statements: [
          {
            text: "(Nhận biết) Số trung bình thu nhập là $\\bar{x}=10$ triệu đồng.",
            answer: true,
            explain: "$\\frac{8+9+10+11+12}{5}=10$."
          },
          {
            text: "(Thông hiểu) Phương sai của mẫu số liệu là $s^2=2$.",
            answer: true,
            explain: "Tổng bình phương độ lệch $=4+1+0+1+4=10$; $s^2=\\frac{10}{5}=2$."
          },
          {
            text: "(Vận dụng) Độ lệch chuẩn $s=\\sqrt{2}\\approx1,41$ triệu đồng.",
            answer: true,
            explain: "$s=\\sqrt{s^2}=\\sqrt{2}\\approx1,41$."
          },
          {
            text: "(Vận dụng cao) Nếu tất cả nhân viên đều được tăng lương thêm 10% thì độ lệch chuẩn mới của mẫu vẫn là khoảng 1,41 triệu đồng (không đổi).",
            answer: false,
            explain: "Khi nhân mỗi giá trị với 1,1, độ lệch chuẩn cũng được nhân với 1,1: $s_{mới}\\approx1,41\\times1,1\\approx1,55$, không giữ nguyên."
          }
        ],
        explain: "Phân tích độ phân tán thu nhập và ảnh hưởng của phép biến đổi tuyến tính lên phương sai."
      },
      {
        id: "ck2-p2-2",
        part: 2,
        q: "Một trạm phát sóng đặt tại điểm $M(2; 3)$ (đơn vị km trên bản đồ), và một tuyến đường thẳng $d$ có phương trình $3x - 4y + 5 = 0$.",
        statements: [
          {
            text: "(Nhận biết) Vectơ pháp tuyến của đường thẳng $d$ là $\\vec{n}=(3; -4)$.",
            answer: true,
            explain: "Đường thẳng $ax+by+c=0$ có VTPT $(a;b)$."
          },
          {
            text: "(Thông hiểu) Khoảng cách từ trạm phát sóng $M$ đến tuyến đường $d$ là $d(M,d) = 0,2$ km.",
            answer: true,
            explain: "$d(M,d)=\\frac{|3(2)-4(3)+5|}{\\sqrt{3^2+4^2}}=\\frac{1}{5}=0,2$."
          },
          {
            text: "(Vận dụng) Nếu bán kính phủ sóng của trạm là $R=1$ km thì đường thẳng $d$ cắt vào vùng phủ sóng hình tròn tâm $M$ bán kính $R$.",
            answer: true,
            explain: "Vì $d(M,d)=0,2 < R=1$ nên đường thẳng $d$ cắt đường tròn."
          },
          {
            text: "(Vận dụng cao) Đường tròn biểu diễn vùng phủ sóng có phương trình $(x-2)^2+(y-3)^2=1$ và có đúng 1 điểm chung (tiếp xúc) với đường thẳng $d$.",
            answer: false,
            explain: "Vì $d(M,d)=0,2 \\ne R=1$ nên đường thẳng cắt đường tròn tại 2 điểm, không tiếp xúc."
          }
        ],
        explain: "Ứng dụng phương trình đường thẳng, đường tròn và khoảng cách trong bài toán định vị."
      },
      {
        id: "ck2-p2-3",
        part: 2,
        q: "Lớp 10A có 20 bạn nam và 15 bạn nữ. Giáo viên chủ nhiệm cần chọn Ban cán sự lớp gồm 3 bạn giữ 3 chức vụ khác nhau: Lớp trưởng, Lớp phó học tập, Lớp phó văn thể.",
        statements: [
          {
            text: "(Nhận biết) Vì các chức vụ có phân biệt, số cách chọn Ban cán sự 3 bạn từ 35 bạn là một chỉnh hợp chập 3 của 35 phần tử.",
            answer: true,
            explain: "Có thứ tự/vai trò khác nhau nên dùng chỉnh hợp, không phải tổ hợp."
          },
          {
            text: "(Thông hiểu) Số cách chọn Ban cán sự là $A_{35}^3 = 39\\,270$.",
            answer: true,
            explain: "$A_{35}^3 = 35 \\times 34 \\times 33 = 39\\,270$."
          },
          {
            text: "(Vận dụng) Nếu yêu cầu Lớp trưởng phải là nam, hai chức vụ còn lại chọn tự do trong 34 bạn còn lại, số cách chọn là $20 \\times A_{34}^2$.",
            answer: true,
            explain: "20 cách chọn Lớp trưởng nam, nhân với $A_{34}^2=34\\times33=1122$ cách xếp 2 chức vụ còn lại."
          },
          {
            text: "(Vận dụng cao) Nếu chỉ cần chọn một tổ 3 bạn bất kỳ (không phân biệt chức vụ) thì số cách chọn nhiều hơn số cách chọn Ban cán sự 3 chức vụ riêng biệt ở trên.",
            answer: false,
            explain: "$C_{35}^3=6\\,545 < A_{35}^3=39\\,270$: tổ hợp (không thứ tự) luôn ít cách hơn chỉnh hợp (có thứ tự)."
          }
        ],
        explain: "Phân biệt chỉnh hợp và tổ hợp qua bài toán chọn ban cán sự lớp."
      },
      {
        id: "ck2-p2-4",
        part: 2,
        q: "Một hộp quà bốc thăm trúng thưởng của trường có 10 phiếu, trong đó có 3 phiếu trúng thưởng và 7 phiếu không trúng. Một học sinh bốc ngẫu nhiên đồng thời 2 phiếu.",
        statements: [
          {
            text: "(Nhận biết) Số phần tử không gian mẫu là $n(\\Omega) = C_{10}^2 = 45$.",
            answer: true,
            explain: "$C_{10}^2=45$."
          },
          {
            text: "(Thông hiểu) Xác suất để bốc được cả 2 phiếu đều trúng thưởng là $P = \\frac{1}{15}$.",
            answer: true,
            explain: "$P=\\frac{C_3^2}{C_{10}^2}=\\frac{3}{45}=\\frac{1}{15}$."
          },
          {
            text: "(Vận dụng) Xác suất để bốc được đúng 1 phiếu trúng thưởng là $P = \\frac{7}{15}$.",
            answer: true,
            explain: "$P=\\frac{C_3^1 \\cdot C_7^1}{C_{10}^2}=\\frac{21}{45}=\\frac{7}{15}$."
          },
          {
            text: "(Vận dụng cao) Xác suất để bốc được ít nhất 1 phiếu trúng thưởng là $\\frac{8}{15}$, và xác suất KHÔNG trúng phiếu nào là $\\frac{1}{15}$.",
            answer: false,
            explain: "Xác suất ít nhất 1 phiếu trúng $=\\frac{7}{15}+\\frac{1}{15}=\\frac{8}{15}$ đúng, nhưng xác suất không trúng phiếu nào $=\\frac{C_7^2}{C_{10}^2}=\\frac{21}{45}=\\frac{7}{15}$, không phải $\\frac{1}{15}$."
          }
        ],
        explain: "Vận dụng tổ hợp để tính xác suất cổ điển trong bài toán bốc thăm."
      },

      // ─── PHẦN III ────────────────────────────────────────────────────────
      {
        id: "ck2-p3-1",
        part: 3,
        q: "Cho mẫu số liệu: 4, 6, 7, 8, 10, 15. Tính khoảng biến thiên $R$.",
        answer: "11",
        explain: "$R=15-4=11$."
      },
      {
        id: "ck2-p3-2",
        part: 3,
        q: "Giải phương trình $\\sqrt{2x^2 - 5x - 3} = \\sqrt{x^2 - 2x + 1}$. Nghiệm nhận được là bao nhiêu?",
        answer: "4",
        explain: "Bình phương hai vế: $x^2-3x-4=0 \\Leftrightarrow x=-1$ hoặc $x=4$. Thử lại chỉ $x=4$ thoả mãn."
      },
      {
        id: "ck2-p3-3",
        part: 3,
        q: "Độ dài trục lớn của elip $(E): \\frac{x^2}{25} + \\frac{y^2}{9} = 1$ bằng:",
        answer: "10",
        explain: "$a^2=25\\Rightarrow a=5$; độ dài trục lớn $2a=10$."
      },
      {
        id: "ck2-p3-4",
        part: 3,
        q: "Trong khai triển nhị thức Newton $(x+2)^4$, hệ số của $x^3$ là bao nhiêu?",
        answer: "8",
        explain: "Số hạng chứa $x^3$: $C_4^1 \\cdot x^3 \\cdot 2^1 = 8x^3$."
      },
      {
        id: "ck2-p3-5",
        part: 3,
        q: "Một hộp có 5 quả cầu đỏ, 4 quả cầu xanh. Lấy ngẫu nhiên 2 quả. Không gian mẫu $n(\\Omega)$ bằng bao nhiêu?",
        answer: "36",
        explain: "$C_9^2=36$."
      },
      {
        id: "ck2-p3-6",
        part: 3,
        q: "Gieo đồng thời hai con xúc xắc cân đối. Có bao nhiêu kết quả thuận lợi để tổng số chấm trên hai mặt bằng 7?",
        answer: "6",
        explain: "Các cặp $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$: có 6 cặp."
      }
    ]
  }
];

export function getExamPaper(id: string) {
  return EXAM_PAPERS.find((p) => p.id === id);
}
