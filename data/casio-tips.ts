export interface CasioTip {
  id: string;
  category: string;
  title: string;
  model: string;
  icon: string;
  shortcut: string;
  description: string;
  steps: { key: string; note: string }[];
  example: {
    problem: string;
    action: string;
    result: string;
  };
  pitfall?: string;
  lessonIds: string[];
}

export const CASIO_TIPS: CasioTip[] = [
  {
    id: "casio-01",
    category: "Hàm số bậc hai & Parabol",
    title: "Giải PT Bậc 2, Tìm Tọa độ Đỉnh Parabol & Min/Max",
    model: "fx-580VNX & fx-880BTG",
    icon: "📉",
    shortcut: "[MENU] [9] [2] [2] (fx-580) / [HOME] > [Phương trình] (fx-880)",
    description:
      "Chế độ giải phương trình bậc hai $ax^2 + bx + c = 0$ không chỉ tìm nghiệm mà còn tự động tính tọa độ đỉnh của parabol $I(x_v; y_v)$ và giá trị lớn nhất/nhỏ nhất của hàm số bậc hai.",
    steps: [
      { key: "[MENU] [9] [2] [2]", note: "Vào chức năng Giải phương trình bậc hai" },
      { key: "Nhập a, b, c", note: "Nhập các hệ số $a, b, c$ và nhấn [=] sau mỗi số" },
      { key: "Nhấn [=] để xem nghiệm", note: "Máy hiển thị nghiệm $x_1, x_2$ (hoặc vô nghiệm nếu có chữ $i$)" },
      { key: "Nhấn [=] tiếp tục", note: "Máy hiển thị Giá trị nhỏ nhất/lớn nhất: Hoành độ đỉnh $x$ và Tung độ đỉnh $y$" },
    ],
    example: {
      problem: "Tìm tọa độ đỉnh của Parabol $(P): y = 2x^2 - 4x + 5$ và giá trị nhỏ nhất của hàm số.",
      action: "Bấm [MENU] [9] [2] [2], nhập $a=2, b=-4, c=5$, nhấn [=] liên tiếp.",
      result: "Bỏ qua nghiệm $x$, máy báo 'Giá trị nhỏ nhất của $y$': $x = 1$, giá trị nhỏ nhất $y = 3$. Đỉnh $I(1; 3)$, $\\min y = 3$.",
    },
    pitfall: "Lưu ý nếu $a > 0$ máy hiển thị 'Giá trị nhỏ nhất', nếu $a < 0$ máy hiển thị 'Giá trị lớn nhất'. Đừng nhầm lẫn giữa hoành độ đỉnh $x$ và tung độ đỉnh $y$.",
    lessonIds: ["bai-16"],
  },
  {
    id: "casio-02",
    category: "Bất phương trình bậc hai",
    title: "Xét dấu Tam thức bậc hai & Giải Bất phương trình bậc 2",
    model: "fx-580VNX & fx-880BTG",
    icon: "⚖️",
    shortcut: "[MENU] [A] [2] (fx-580) / [HOME] > [Bất phương trình] (fx-880)",
    description:
      "Giải trực tiếp các bất phương trình bậc hai $ax^2 + bx + c > 0$, $\\ge 0$, $< 0$, $\\le 0$, cho kết quả tập nghiệm chính xác dưới dạng khoảng hoặc nửa khoảng.",
    steps: [
      { key: "[MENU] [A]", note: "Nhấn phím [A] (phím dấu trừ [-] màu đỏ) để vào Bất phương trình" },
      { key: "Chọn bậc [2]", note: "Chọn đa thức bậc 2" },
      { key: "Chọn loại dấu [1]-[4]", note: "1: $> 0$, 2: $< 0$, 3: $\\ge 0$, 4: $\\le 0$" },
      { key: "Nhập hệ số và bấm [=]", note: "Máy hiển thị tập nghiệm ngay lập tức" },
    ],
    example: {
      problem: "Giải bất phương trình $x^2 - 5x + 6 \\le 0$.",
      action: "Bấm [MENU] [A] [2] [4], nhập $a=1, b=-5, c=6$ rồi bấm [=].",
      result: "Màn hình hiển thị $2 \\le x \\le 3$. Tập nghiệm là đoạn $[2; 3]$.",
    },
    pitfall: "Nếu máy hiện 'Tất cả số thực' nghĩa là tập nghiệm $S = \\mathbb{R}$. Nếu hiện 'Không có nghiệm' nghĩa là $S = \\varnothing$.",
    lessonIds: ["bai-17"],
  },
  {
    id: "casio-03",
    category: "Hệ phương trình bậc nhất",
    title: "Giải Hệ hai & ba phương trình bậc nhất hai/ba ẩn",
    model: "fx-580VNX & fx-880BTG",
    icon: "🧮",
    shortcut: "[MENU] [9] [1] [2] hoặc [3]",
    description:
      "Tìm giao điểm của hai đường thẳng trong mặt phẳng toạ độ Oxy hoặc giải bài toán tìm toạ độ điểm thoả mãn hệ điều kiện.",
    steps: [
      { key: "[MENU] [9] [1]", note: "Chọn 1: Hệ phương trình" },
      { key: "Chọn số ẩn: [2] hoặc [3]", note: "2 ẩn cho Oxy thông thường, 3 ẩn cho bài toán tọa độ nâng cao" },
      { key: "Nhập ma trận hệ số", note: "Đưa hệ về dạng chuẩn $a_1 x + b_1 y = c_1$ rồi nhập" },
      { key: "Bấm [=]", note: "Nhận kết quả nghiệm $x$ và $y$" },
    ],
    example: {
      problem: "Tìm tọa độ giao điểm của hai đường thẳng $d_1: 2x - y = 3$ và $d_2: x + 3y = 5$.",
      action: "Bấm [MENU] [9] [1] [2], nhập dòng 1: $2, -1, 3$; dòng 2: $1, 3, 5$.",
      result: "Máy tính xuất $x = 2, y = 1$. Giao điểm là $M(2; 1)$.",
    },
    pitfall: "Hệ số tự do $c$ phải nằm ở vế phải đẳng thức. Nếu đề cho $2x - y - 3 = 0$ thì phải chuyển vế thành $2x - y = 3$ trước khi nhập máy.",
    lessonIds: ["bai-04", "bai-20"],
  },
  {
    id: "casio-04",
    category: "Vectơ & Tọa độ Oxy",
    title: "Tính Tích Vô Hướng, Góc & Độ Dài Vectơ (Chế độ Vector)",
    model: "fx-580VNX & fx-880BTG",
    icon: "↗️",
    shortcut: "[MENU] [5] (Vector Mode)",
    description:
      "Chế độ Vector cho phép lưu 2 vectơ $\\vec{u}, \\vec{v}$, tính độ dài $|\\vec{u}|$, tích vô hướng $\\vec{u} \\cdot \\vec{v}$ và góc giữa 2 vectơ $(\\vec{u}, \\vec{v})$.",
    steps: [
      { key: "[MENU] [5] [1] [2]", note: "Tạo VctA, kích thước 2 chiều (Oxy)" },
      { key: "Nhập toạ độ vectơ u", note: "Nhập $x_1, y_1$" },
      { key: "[OPTN] [1] [2] [2]", note: "Tạo VctB, kích thước 2 chiều, nhập $x_2, y_2$" },
      { key: "[AC] > [OPTN] [3]", note: "Gọi VctA ra màn hình" },
      { key: "[OPTN] [v] [2]", note: "Gọi lệnh Tích vô hướng (Dot Product)" },
      { key: "[OPTN] [4] [=]", note: "Gọi VctB và bấm [=] để tính $\\vec{u} \\cdot \\vec{v}$" },
    ],
    example: {
      problem: "Cho hai vectơ $\\vec{u} = (3; 4)$ và $\\vec{v} = (1; -2)$. Tính tích vô hướng $\\vec{u} \\cdot \\vec{v}$ và độ dài $|\\vec{u}|$.",
      action: "Lưu VctA=(3; 4), VctB=(1; -2). Bấm VctA Dot VctB. Bấm Abs(VctA).",
      result: "VctA $\\cdot$ VctB = $3(1) + 4(-2) = -5$. Abs(VctA) = $5$.",
    },
    pitfall: "Toán 10 chỉ dùng 2 chiều (Oxy), khi máy hỏi 'Kích thước' chọn [2] chứ không chọn [3] (không gian 3 chiều).",
    lessonIds: ["bai-10", "bai-11"],
  },
  {
    id: "casio-05",
    category: "Lượng giác & Hệ thức lượng",
    title: "Tính Giá trị Lượng giác góc 0° đến 180° & Đổi Đơn vị Độ",
    model: "fx-580VNX & fx-880BTG",
    icon: "🔺",
    shortcut: "[SHIFT] [MENU] [2] [1] (Đổi sang Degree °)",
    description:
      "Tính nhanh các giá trị $\\sin, \\cos, \\tan, \\cot$ của các góc tù và góc nhọn, tự động xử lý góc bù nhau: $\\sin(180^\\circ - \\alpha) = \\sin\\alpha$, $\\cos(180^\\circ - \\alpha) = -\\cos\\alpha$.",
    steps: [
      { key: "[SHIFT] [MENU] [2] [1]", note: "Cài đặt đơn vị góc về Độ (Degree D)" },
      { key: "Bấm sin, cos, tan trực tiếp", note: "Ví dụ: [cos] [1] [5] [0] [=]" },
      { key: "Tính cotang", note: "Bấm $1 / \\tan(\\alpha)$ hoặc $\\cos(\\alpha) / \\sin(\\alpha)$" },
    ],
    example: {
      problem: "Tính giá trị của $A = \\sin 120^\\circ + \\cos 150^\\circ + \\tan 135^\\circ$.",
      action: "Đảm bảo góc ở chữ D. Nhập $\\sin(120) + \\cos(150) + \\tan(135)$ rồi bấm [=].",
      result: "Màn hình xuất $-1$ (do $\\sin 120^\\circ = \\dfrac{\\sqrt{3}}{2}, \\cos 150^\\circ = -\\dfrac{\\sqrt{3}}{2}, \\tan 135^\\circ = -1$).",
    },
    pitfall: "Luôn kiểm tra ký hiệu góc trên đỉnh màn hình (phải là chữ D). Nếu là chữ R (Radian) máy sẽ tính sai hoàn toàn!",
    lessonIds: ["bai-05", "bai-06"],
  },
  {
    id: "casio-06",
    category: "Bảng giá trị (Table)",
    title: "Tìm GTLN, GTNN của Hàm số & Thử nghiệm Nghiệm trên Đoạn",
    model: "fx-580VNX & fx-880BTG",
    icon: "📊",
    shortcut: "[MENU] [8] (Table Mode)",
    description:
      "Dùng bảng giá trị quét hàm số $f(x)$ trên khoảng/đoạn để tìm Min, Max hoặc nghiệm gần đúng của phương trình chứa căn thức.",
    steps: [
      { key: "[MENU] [8]", note: "Vào chế độ Bảng giá trị" },
      { key: "Nhập hàm f(x)", note: "Nhập biểu thức cần tìm Min/Max" },
      { key: "Cài đặt Start, End, Step", note: "Step thường chọn $(End - Start) / 29$" },
      { key: "Dò cột f(x)", note: "Tìm số lớn nhất (Max) và số bé nhất (Min)" },
    ],
    example: {
      problem: "Tìm giá trị lớn nhất của hàm số $y = -x^2 + 4x + 1$ trên đoạn $[0; 4]$.",
      action: "Nhập $f(x) = -x^2 + 4x + 1$, Start: $0$, End: $4$, Step: $4/20 = 0.2$.",
      result: "Dò cột $f(x)$, thấy đỉnh cao nhất là $5$ tại $x = 2$. Vậy $\\max = 5$.",
    },
    pitfall: "Nếu khoảng quá dài, bước nhảy lớn có thể làm bỏ sót điểm cực trị. Nên thu hẹp khoảng quanh vùng nghi ngờ.",
    lessonIds: ["bai-15", "bai-16"],
  },
  {
    id: "casio-07",
    category: "Thống kê không ghép nhóm",
    title: "Tính Số Trung Bình, Trung Vị, Tứ Phân Vị & Độ Lệch Chuẩn",
    model: "fx-580VNX & fx-880BTG",
    icon: "📈",
    shortcut: "[MENU] [6] [1] (1-Variable Statistics)",
    description:
      "Tự động tính tất cả số đặc trưng đo xu thế trung tâm ($\\bar{x}, Me, Q_1, Q_3$) và độ phân tán ($s^2, s$) chỉ với 1 bảng dữ liệu.",
    steps: [
      { key: "[MENU] [6] [1]", note: "Chọn Thống kê 1 biến" },
      { key: "Nhập dãy số liệu", note: "Nhập từng giá trị $x_i$ và bấm [=]" },
      { key: "[OPTN] [2]", note: "Chọn Tính 1 biến (1-Variable Calc)" },
      { key: "Xem kết quả toàn diện", note: "Máy liệt kê $\\bar{x}, \\sum x, s_x^2, s_x, n, \\min X, Q_1, Med, Q_3, \\max X$" },
    ],
    example: {
      problem: "Cho mẫu số liệu điểm kiểm tra: 6, 7, 7, 8, 8, 9, 10. Tìm số trung bình, trung vị và khoảng tứ phân vị.",
      action: "Bấm [MENU] [6] [1], nhập các điểm số. Sau đó bấm [OPTN] [2].",
      result: "$\\bar{x} = 7.857$, $Med = 8$, $Q_1 = 7$, $Q_3 = 9$. Khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1 = 2$.",
    },
    pitfall: "Để ý $s_x$ là độ lệch chuẩn mẫu hiệu chỉnh, còn $\\sigma_x$ là độ lệch chuẩn theo công thức SGK. SGK Toán 10 KNTT dùng công thức chia $n$, hãy xem $\\sigma_x$.",
    lessonIds: ["bai-13", "bai-14"],
  },
  {
    id: "casio-08",
    category: "Đại số tổ hợp",
    title: "Tính Giai thừa $n!$, Chỉnh hợp $A_n^k$ & Tổ hợp $C_n^k$",
    model: "fx-580VNX & fx-880BTG",
    icon: "🎲",
    shortcut: "[x!] (Giai thừa) | [SHIFT] [×] (P) | [SHIFT] [÷] (C)",
    description:
      "Tính toán nhanh số cách chọn, xếp thứ tự trong các bài toán đếm quy tắc cộng, nhân, hoán vị, chỉnh hợp và tổ hợp.",
    steps: [
      { key: "Giai thừa: n [SHIFT] [x⁻¹]", note: "Nhập $n!$, ví dụ $5! = 120$" },
      { key: "Chỉnh hợp: n [SHIFT] [×] k", note: "Kí hiệu $nPr$ trên máy tương ứng $A_n^k$" },
      { key: "Tổ hợp: n [SHIFT] [÷] k", note: "Kí hiệu $nCr$ trên máy tương ứng $C_n^k$" },
    ],
    example: {
      problem: "Một lớp có 30 học sinh. Có bao nhiêu cách chọn ban cán sự gồm 1 lớp trưởng, 1 lớp phó, 1 thủ quỹ? Có bao nhiêu cách chọn 3 bạn đi trực nhật?",
      action: "Chọn 3 có phân công: $30$ [SHIFT] [×] $3$. Chọn 3 bạn không phân công: $30$ [SHIFT] [÷] $3$.",
      result: "$A_{30}^3 = 24360$ cách; $C_{30}^3 = 4060$ cách.",
    },
    pitfall: "Quy ước bấm số lớn $n$ trước rồi mới bấm phím phép tính, sau đó nhập số nhỏ $k$. Nếu nhập $k$ trước sẽ báo lỗi cú pháp Math ERROR.",
    lessonIds: ["bai-23", "bai-24"],
  },
  {
    id: "casio-09",
    category: "Phương pháp toạ độ Oxy",
    title: "Tính Khoảng Cách Từ Điểm Đến Đường Thẳng Trong Oxy",
    model: "fx-580VNX & fx-880BTG",
    icon: "📏",
    shortcut: "Biểu thức phân thức có Trị tuyệt đối [ABS]",
    description:
      "Sử dụng công thức $d(M, \\Delta) = \\dfrac{|a x_0 + b y_0 + c|}{\\sqrt{a^2 + b^2}}$ với chức năng [CALC] để tính nhanh khoảng cách mà không sợ nhầm dấu.",
    steps: [
      { key: "Bấm phím phân số", note: "Tạo biểu thức tử / mẫu" },
      { key: "Tử số: [SHIFT] [(] (Abs)", note: "Nhập trị tuyệt đối $|A X + B Y + C|$" },
      { key: "Mẫu số: căn bậc hai", note: "Nhập $\\sqrt{A^2 + B^2}$" },
      { key: "Bấm [CALC]", note: "Nhập tọa độ điểm $X, Y$ và nhận kết quả tức thì" },
    ],
    example: {
      problem: "Tính khoảng cách từ điểm $M(1; -2)$ đến đường thẳng $\\Delta: 3x - 4y + 4 = 0$.",
      action: "Nhập $\\dfrac{|3X - 4Y + 4|}{\\sqrt{3^2 + 4^2}}$, bấm [CALC], nhập $X = 1, Y = -2$, bấm [=].",
      result: "Máy xuất kết quả $3$. Khoảng cách $d = 3$.",
    },
    pitfall: "Nhớ đưa đường thẳng về phương trình tổng quát dạng $ax + by + c = 0$ trước khi nhập hệ số.",
    lessonIds: ["bai-20"],
  },
  {
    id: "casio-10",
    category: "Xác suất cổ điển",
    title: "Tính Xác Suất Biến Cố & Phép Thử Cổ Điển",
    model: "fx-580VNX & fx-880BTG",
    icon: "🎯",
    shortcut: "Phân thức n(A) / n(Omega)",
    description:
      "Tự động tính tỉ số giữa số kết quả thuận lợi và số kết quả có thể, rút gọn phân số tối giản và chuyển đổi giữa phân số và số thập phân bằng phím [S<=>D].",
    steps: [
      { key: "Nhập tử số n(A)", note: "Dùng các phép tính $C_n^k$ hoặc $A_n^k$ nếu cần" },
      { key: "Nhập mẫu số n(Ω)", note: "Số phần tử không gian mẫu" },
      { key: "Bấm [=]", note: "Máy xuất phân số tối giản" },
      { key: "Bấm [S<=>D]", note: "Chuyển đổi tức thì sang số thập phân (ví dụ $0.25$)" },
    ],
    example: {
      problem: "Gieo 2 con xúc xắc cân đối. Tính xác suất để tổng số chấm xuất hiện bằng 7.",
      action: "Không gian mẫu $n(\\Omega) = 6 \\times 6 = 36$. Các cặp tổng bằng 7 có 6 kết quả: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$. Nhập $6/36$ bấm [=].",
      result: "$P(A) = \\dfrac{1}{6} \\approx 0.1667$.",
    },
    pitfall: "Khi đề hỏi xác suất dưới dạng phần trăm (%), lấy kết quả nhân thêm $100$.",
    lessonIds: ["bai-26", "bai-27"],
  },
  {
    id: "casio-11",
    category: "Phương trình chứa căn",
    title: "Dò Nghiệm Phương Trình Quy Về Bậc Hai Bằng Lệnh [SOLVE]",
    model: "fx-580VNX & fx-880BTG",
    icon: "🔍",
    shortcut: "[SHIFT] [CALC] (SOLVE)",
    description:
      "Tìm nghiệm chính xác của phương trình vô tỉ dạng $\\sqrt{ax^2 + bx + c} = \\sqrt{dx^2 + ex + f}$ hoặc $\\sqrt{ax^2 + bx + c} = dx + e$.",
    steps: [
      { key: "Nhập phương trình vào máy", note: "Dấu [=] nhập bằng [ALPHA] [CALC]" },
      { key: "Bấm [SHIFT] [CALC]", note: "Gọi lệnh dò nghiệm Newton-Raphson" },
      { key: "Nhập giá trị dự đoán x=", note: "Nhập số gần nghiệm để máy hội tụ nhanh (ví dụ 0, 1, 2)" },
      { key: "Bấm [=] và chờ kết quả", note: "Máy xuất nghiệm $X = \\dots$ và $L - R = 0$" },
    ],
    example: {
      problem: "Giải phương trình $\\sqrt{3x^2 - 9x + 7} = x - 2$.",
      action: "Nhập $\\sqrt{3x^2 - 9x + 7} - (x - 2) = 0$, bấm [SHIFT] [CALC], thử $x = 3$.",
      result: "Máy tính báo 'Can't Solve' hoặc nghiệm ảo $\\implies$ phương trình vô nghiệm (do điều kiện $x - 2 \\ge 0$ không thỏa).",
    },
    pitfall: "Lệnh SOLVE chỉ tìm được 1 nghiệm gần điểm xuất phát nhất. Với phương trình có 2 nghiệm, hãy lấy biểu thức chia cho $(x - x_1)$ rồi SOLVE tiếp để tìm nghiệm còn lại.",
    lessonIds: ["bai-18"],
  },
  {
    id: "casio-12",
    category: "Đường tròn trong Oxy",
    title: "Xác Định Tâm & Bán Kính Đường Tròn $x^2 + y^2 - 2ax - 2by + c = 0$",
    model: "fx-580VNX & fx-880BTG",
    icon: "⭕",
    shortcut: "Biểu thức R = sqrt(a^2 + b^2 - c)",
    description:
      "Từ phương trình tổng quát, chia đôi hệ số của $x$ và $y$ đổi dấu để tìm tâm $I(a; b)$, sau đó bấm nhanh căn bậc hai để kiểm tra $a^2 + b^2 - c > 0$ và tính bán kính $R$.",
    steps: [
      { key: "Tìm tâm I(a; b)", note: "Lấy hệ số $x$ chia cho $-2$, hệ số $y$ chia cho $-2$" },
      { key: "Tính bán kính R", note: "Bấm $\\sqrt{a^2 + b^2 - c}$" },
      { key: "Điều kiện là đường tròn", note: "Nếu biểu thức dưới căn $\\le 0$ thì không phải phương trình đường tròn" },
    ],
    example: {
      problem: "Tìm tâm và bán kính của đường tròn $(C): x^2 + y^2 - 4x + 6y - 12 = 0$.",
      action: "$a = -4/(-2) = 2$, $b = 6/(-2) = -3$, $c = -12$. Bấm $\\sqrt{2^2 + (-3)^2 - (-12)}$.",
      result: "Tâm $I(2; -3)$, bán kính $R = \\sqrt{4 + 9 + 12} = \\sqrt{25} = 5$.",
    },
    pitfall: "Chú ý dấu của hệ số $c$. Ở đây $-c$ thành $-(-12) = +12$. Học sinh rất hay quên đổi dấu dẫn đến tính sai $R$.",
    lessonIds: ["bai-21"],
  },
];
