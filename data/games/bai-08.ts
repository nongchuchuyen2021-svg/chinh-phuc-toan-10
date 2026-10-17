import type { LessonGame, SortGame, MatchGame } from "@/lib/types";

// ══════════════════════════════════════════════════════════════════════════════
// GAME 1: Đấu Trường Chuỗi Vectơ: Đẳng Thức Nối Đuôi Đúng hay Sai?
// ══════════════════════════════════════════════════════════════════════════════
const chainGame: SortGame = {
  kind: "sort",
  id: "dau-truong-chuoi-vecto",
  title: "Đấu Trường Chuỗi Vectơ: Đẳng Thức Nối Đuôi Đúng hay Sai?",
  emoji: "🔗",
  instructions:
    "Kiểm tra nhanh các đẳng thức cộng và trừ vectơ xem đó là ĐẲNG THỨC ĐÚNG hay ĐẲNG THỨC SAI (CÓ BẪY).",
  matchLabel: "ĐẲNG THỨC ĐÚNG ✅",
  matchEmoji: "✅",
  noMatchLabel: "ĐẲNG THỨC SAI ❌",
  noMatchEmoji: "❌",
  items: [
    {
      id: "ch-1",
      emoji: "1️⃣",
      label: "Với ba điểm bất kì $A, B, C$: $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$.",
      isMatch: true,
      explain: "Đúng! Đây là Quy tắc ba điểm (nối đuôi liên tiếp) cơ bản nhất của phép cộng vectơ.",
    },
    {
      id: "ch-2",
      emoji: "2️⃣",
      label: "Với ba điểm bất kì $A, B, C$: $\\overrightarrow{AB} + \\overrightarrow{CA} = \\overrightarrow{CB}$.",
      isMatch: true,
      explain: "Đúng! Giao hoán lại: $\\overrightarrow{CA} + \\overrightarrow{AB} = \\overrightarrow{CB}$ (điểm $A$ nối giữa).",
    },
    {
      id: "ch-3",
      emoji: "3️⃣",
      label: "Với ba điểm bất kì $A, B, C$: $\\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{BC}$.",
      isMatch: false,
      explain: "Sai bẫy kinh điển! Quy tắc hiệu chung gốc: $\\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{CB}$ (chứ không phải $\\overrightarrow{BC}$).",
    },
    {
      id: "ch-4",
      emoji: "4️⃣",
      label: "Với bốn điểm $A, B, C, D$: $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CD} + \\overrightarrow{DA} = \\vec{0}$.",
      isMatch: true,
      explain: "Đúng! Nối vòng khép kín: $\\overrightarrow{AC} + \\overrightarrow{CD} + \\overrightarrow{DA} = \\overrightarrow{AD} + \\overrightarrow{DA} = \\overrightarrow{AA} = \\vec{0}$.",
    },
    {
      id: "ch-5",
      emoji: "5️⃣",
      label: "Cho hình bình hành $ABCD$: $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{BD}$.",
      isMatch: false,
      explain: "Sai! Theo quy tắc hình bình hành, tổng hai cạnh kề bằng vectơ đường chéo xuất phát từ đỉnh đó: $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$.",
    },
    {
      id: "ch-6",
      emoji: "6️⃣",
      label: "Cho đoạn thẳng $AB$ có trung điểm $I$: $\\overrightarrow{IA} + \\overrightarrow{IB} = \\vec{0}$.",
      isMatch: true,
      explain: "Đúng! Hai vectơ $\\overrightarrow{IA}$ và $\\overrightarrow{IB}$ cùng độ dài nhưng ngược hướng nên là hai vectơ đối nhau, có tổng bằng $\\vec{0}$.",
    },
    {
      id: "ch-7",
      emoji: "7️⃣",
      label: "Cho tam giác $ABC$ có trọng tâm $G$: $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = 0$.",
      isMatch: false,
      explain: "Sai về ký hiệu toán học! Tổng của ba vectơ phải là vectơ-không $\\vec{0}$, không thể bằng số $0$.",
    },
    {
      id: "ch-8",
      emoji: "8️⃣",
      label: "Với ba điểm bất kì $M, N, P$: $\\overrightarrow{MN} - \\overrightarrow{MP} = \\overrightarrow{PN}$.",
      isMatch: true,
      explain: "Đúng! Quy tắc hiệu hai vectơ chung gốc $M$: $\\overrightarrow{MN} - \\overrightarrow{MP} = \\overrightarrow{PM} + \\overrightarrow{MN} = \\overrightarrow{PN}$.",
    },
    {
      id: "ch-9",
      emoji: "9️⃣",
      label: "Độ dài tổng hai vectơ luôn bằng tổng độ dài: $|\\vec{a} + \\vec{b}| = |\\vec{a}| + |\\vec{b}|$.",
      isMatch: false,
      explain: "Sai! Theo bất đẳng thức tam giác: $|\\vec{a} + \\vec{b}| \\le |\\vec{a}| + |\\vec{b}|$. Dấu bằng chỉ xảy ra khi $\\vec{a}$ và $\\vec{b}$ cùng hướng (hoặc ít nhất một vectơ bằng $\\vec{0}$).",
    },
    {
      id: "ch-10",
      emoji: "🔟",
      label: "Cho $I$ là trung điểm $AB$. Với điểm $M$ bất kì: $\\overrightarrow{MA} + \\overrightarrow{MB} = 2\\overrightarrow{MI}$.",
      isMatch: true,
      explain: "Đúng! Đây là công thức trung điểm mở rộng kinh điển trong toàn bộ chương trình hình học THPT.",
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// GAME 2: Ghép Đôi Phép Toán & Quy Tắc Vectơ Vàng
// ══════════════════════════════════════════════════════════════════════════════
const matchGame: MatchGame = {
  kind: "match",
  id: "ghep-doi-quy-tac-vecto",
  title: "Ghép Đôi Phép Toán & Quy Tắc Vectơ Vàng",
  emoji: "🧩",
  leftLabel: "↗️ Biểu thức / Tình huống",
  rightLabel: "🎯 Kết quả rút gọn / Quy tắc",
  instructions:
    "Ghép từng biểu thức phép toán vectơ hoặc tình huống hình học với kết quả hoặc quy tắc toán học chuẩn xác tương ứng.",
  pairs: [
    {
      id: "p1",
      left: "$\\overrightarrow{AB} + \\overrightarrow{BC}$",
      right: "$\\overrightarrow{AC}$ (Quy tắc ba điểm)",
      explain: "Điểm B đứng sau nối với điểm B đứng trước: $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$.",
    },
    {
      id: "p2",
      left: "$\\overrightarrow{AB} + \\overrightarrow{AD}$ ($ABCD$ là hình bình hành)",
      right: "$\\overrightarrow{AC}$ (Quy tắc hình bình hành)",
      explain: "Tổng hai vectơ chung gốc tạo bởi hai cạnh kề hình bình hành bằng vectơ đường chéo $\\overrightarrow{AC}$.",
    },
    {
      id: "p3",
      left: "$\\overrightarrow{OB} - \\overrightarrow{OA}$ (chung gốc $O$)",
      right: "$\\overrightarrow{AB}$ (Quy tắc hiệu)",
      explain: "Quy tắc hiệu: ngọn trừ gốc $\\overrightarrow{OB} - \\overrightarrow{OA} = \\overrightarrow{AB}$.",
    },
    {
      id: "p4",
      left: "$I$ là trung điểm đoạn thẳng $AB$",
      right: "$\\overrightarrow{IA} + \\overrightarrow{IB} = \\vec{0}$",
      explain: "Hai vectơ xuất phát từ trung điểm tới hai đầu mút là hai vectơ đối nhau.",
    },
    {
      id: "p5",
      left: "$G$ là trọng tâm tam giác $ABC$",
      right: "$\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$",
      explain: "Hệ thức trọng tâm kinh điển: tổng ba vectơ từ trọng tâm tới ba đỉnh luôn bằng $\\vec{0}$.",
    },
    {
      id: "p6",
      left: "Hai lực $\\vec{F}_1 \\perp \\vec{F}_2$ vuông góc nhau",
      right: "$F = \\sqrt{F_1^2 + F_2^2}$ (Định lí Pythagore)",
      explain: "Hình bình hành lực trở thành hình chữ nhật, độ dài hợp lực bằng đường chéo Pythagore.",
    },
    {
      id: "p7",
      left: "Hai lực $F_1 = F_2 = F$ hợp nhau góc $120^\\circ$",
      right: "Hợp lực có độ lớn đúng bằng $F$",
      explain: "Hình thoi có góc $120^\\circ$ chia thành hai tam giác đều, nên đường chéo hợp lực có độ dài đúng bằng $F$.",
    },
    {
      id: "p8",
      left: "Kéo pháo trọng lượng $P$ trên dốc nghiêng $30^\\circ$",
      right: "Lực kéo cần thiết $F = P \\sin 30^\\circ = \\frac{1}{2}P$",
      explain: "Thành phần trượt dọc mặt dốc cân bằng với lực kéo là $P \\sin 30^\\circ$.",
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// GAME 3: Máy Quét Hợp Lực & Cân Bằng Lực Thực Tế
// ══════════════════════════════════════════════════════════════════════════════
const physicsGame: SortGame = {
  kind: "sort",
  id: "may-quet-hop-luc-thuc-te",
  title: "Máy Quét Hợp Lực & Cân Bằng Lực Thực Tế",
  emoji: "⚡",
  instructions:
    "Phân tích các tình huống thực tế về tổng hợp lực, cân bằng lực và vận tốc trên sông xem nhận định là CHÍNH XÁC hay SAI LẦM.",
  matchLabel: "CHÍNH XÁC 🎯",
  matchEmoji: "🎯",
  noMatchLabel: "SAI LẦM ⚠️",
  noMatchEmoji: "⚠️",
  items: [
    {
      id: "ph-1",
      emoji: "1️⃣",
      label: "Trong trò chơi kéo co, nếu sợi dây đứng yên thì hợp lực tác dụng lên sợi dây bằng $\\vec{0}$.",
      isMatch: true,
      explain: "Chính xác! Vật đứng yên (cân bằng) khi tổng hợp các lực tác dụng lên vật bằng vectơ-không $\\vec{0}$.",
    },
    {
      id: "ph-2",
      emoji: "2️⃣",
      label: "Khi góc giữa hai lực tăng từ $0^\\circ$ đến $180^\\circ$, độ lớn của hợp lực cũng tăng dần.",
      isMatch: false,
      explain: "Sai lầm! Khi góc giữa hai lực tăng dần từ $0^\\circ$ đến $180^\\circ$, $\\cos\\theta$ giảm dần dẫn tới độ lớn hợp lực GIẢM DẦN (cực đại tại $0^\\circ$ và cực tiểu tại $180^\\circ$).",
    },
    {
      id: "ph-3",
      emoji: "3️⃣",
      label: "Để thuyền sang bờ bên kia của con sông nhanh nhất, người lái phải luôn giữ mũi thuyền vuông góc với bờ.",
      isMatch: true,
      explain: "Chính xác! Thành phần vận tốc đưa thuyền sang bờ vuông góc $v_y = v_r \\sin\\alpha$ đạt giá trị lớn nhất khi $\\alpha = 90^\\circ$.",
    },
    {
      id: "ph-4",
      emoji: "4️⃣",
      label: "Hai lực có độ lớn $5\\text{ N}$ và $12\\text{ N}$ vuông góc nhau thì hợp lực có độ lớn bằng $17\\text{ N}$.",
      isMatch: false,
      explain: "Sai lầm! Hai lực vuông góc thì hợp lực tính theo Pythagore: $F = \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13\\text{ N}$ (chứ không phải $17\\text{ N}$).",
    },
    {
      id: "ph-5",
      emoji: "5️⃣",
      label: "Vận tốc thực tế của thuyền trên sông là tổng vectơ của vận tốc riêng của thuyền và vận tốc dòng nước.",
      isMatch: true,
      explain: "Chính xác! $\\vec{v} = \\vec{v}_r + \\vec{v}_n$ theo định luật cộng vận tốc Galilée.",
    },
    {
      id: "ph-6",
      emoji: "6️⃣",
      label: "Hai con tàu cùng vận tốc riêng $v_r$, giữ cùng một góc nhọn với bờ sông (một xuôi, một ngược) thì sang bờ cùng một lúc.",
      isMatch: true,
      explain: "Chính xác! (Bài tập 4.10 SGK). Vì thành phần vận tốc sang sông vuông góc với bờ $v_r \\sin\\alpha$ của hai tàu là như nhau, nên thời gian sang bờ là bằng nhau.",
    },
    {
      id: "ph-7",
      emoji: "7️⃣",
      label: "Trọng tâm của một tam giác phẳng đồng chất là điểm đặt của trọng lực tác dụng lên tam giác đó.",
      isMatch: true,
      explain: "Chính xác! Đây là ứng dụng vật lí trực quan của trọng tâm hình học được nêu trong mục 'Em có biết' SGK trang 53.",
    },
    {
      id: "ph-8",
      emoji: "8️⃣",
      label: "Hợp lực của hai lực có độ lớn $10\\text{ N}$ và $6\\text{ N}$ có thể nhận giá trị bằng $20\\text{ N}$.",
      isMatch: false,
      explain: "Sai lầm! Độ lớn hợp lực luôn nằm trong đoạn $[|F_1 - F_2|; F_1 + F_2] = [4\\text{ N}; 16\\text{ N}]$, không thể vượt quá $16\\text{ N}$.",
    },
  ],
};

const gamesBai08: LessonGame[] = [chainGame, matchGame, physicsGame];

export default gamesBai08;
