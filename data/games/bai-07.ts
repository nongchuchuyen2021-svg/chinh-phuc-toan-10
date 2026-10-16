import type { LessonGame, SortGame, MatchGame } from "@/lib/types";

// ══════════════════════════════════════════════════════════════════════════════
// GAME 1: Đấu Trường Hướng: Cùng Hướng hay Ngược Hướng?
// ══════════════════════════════════════════════════════════════════════════════
const directionGame: SortGame = {
  kind: "sort",
  id: "dau-truong-huong-vecto",
  title: "Đấu Trường Hướng: Cùng Hướng hay Ngược Hướng?",
  emoji: "🧭",
  instructions:
    "Đọc nhanh từng cặp vectơ trong các hình học kinh điển và phân loại xem chúng CÙNG HƯỚNG hay NGƯỢC HƯỚNG nhau.",
  matchLabel: "CÙNG HƯỚNG ➡️",
  matchEmoji: "➡️",
  noMatchLabel: "NGƯỢC HƯỚNG ⬅️",
  noMatchEmoji: "⬅️",
  items: [
    {
      id: "dir-1",
      emoji: "1️⃣",
      label: "Trong hình bình hành $ABCD$, cặp vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{DC}$.",
      isMatch: true,
      explain: "Vì $AB \\parallel DC$ và hướng từ $A$ sang $B$ cùng chiều từ $D$ sang $C$ nên chúng cùng hướng.",
    },
    {
      id: "dir-2",
      emoji: "2️⃣",
      label: "Trong hình bình hành $ABCD$, cặp vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{CD}$.",
      isMatch: false,
      explain: "Vì $A \\to B$ hướng sang phải còn $C \\to D$ hướng sang trái, hai vectơ này ngược hướng nhau.",
    },
    {
      id: "dir-3",
      emoji: "3️⃣",
      label: "Cho $M$ là trung điểm của đoạn thẳng $AB$. Cặp vectơ $\\overrightarrow{AM}$ và $\\overrightarrow{MB}$.",
      isMatch: true,
      explain: "Điểm $M$ nằm giữa $A$ và $B$. Hướng từ $A \\to M$ cùng hướng từ $M \\to B$ (cùng hướng sang phải).",
    },
    {
      id: "dir-4",
      emoji: "4️⃣",
      label: "Cho $M$ là trung điểm của đoạn thẳng $AB$. Cặp vectơ $\\overrightarrow{MA}$ và $\\overrightarrow{MB}$.",
      isMatch: false,
      explain: "Tia $MA$ và tia $MB$ là hai tia đối nhau xuất phát từ gốc $M$, do đó hai vectơ ngược hướng nhau.",
    },
    {
      id: "dir-5",
      emoji: "5️⃣",
      label: "Trong lục giác đều $ABCDEF$ tâm $O$, cặp vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{ED}$.",
      isMatch: true,
      explain: "Cạnh $AB \\parallel ED$ và hướng từ $A \\to B$ cùng hướng từ $E \\to D$ nên hai vectơ cùng hướng.",
    },
    {
      id: "dir-6",
      emoji: "6️⃣",
      label: "Trong hình bình hành $ABCD$ tâm $O$, cặp vectơ $\\overrightarrow{OA}$ và $\\overrightarrow{OC}$.",
      isMatch: false,
      explain: "Tâm $O$ là trung điểm $AC$, hướng từ $O \\to A$ ngược với hướng từ $O \\to C$. Chúng là hai vectơ đối nhau.",
    },
    {
      id: "dir-7",
      emoji: "7️⃣",
      label: "Trong tam giác $ABC$, gọi $M, N$ lần lượt là trung điểm $AB, AC$. Cặp vectơ $\\overrightarrow{MN}$ và $\\overrightarrow{BC}$.",
      isMatch: true,
      explain: "$MN$ là đường trung bình của $\\triangle ABC \\implies MN \\parallel BC$ và cùng hướng từ trái sang phải.",
    },
    {
      id: "dir-8",
      emoji: "8️⃣",
      label: "Hai người cùng kéo một chiếc xe về phía trước theo hướng Bắc.",
      isMatch: true,
      explain: "Hai lực kéo có cùng phương Bắc - Nam và cùng chỉ về hướng Bắc nên hai vectơ lực cùng hướng.",
    },
    {
      id: "dir-9",
      emoji: "9️⃣",
      label: "Hai chiếc ô tô chạy ngược chiều nhau trên cùng một đoạn đường cao tốc thẳng.",
      isMatch: false,
      explain: "Cùng phương chuyển động nhưng một xe chạy xuôi, một xe chạy ngược $\\implies$ Hai vectơ vận tốc ngược hướng nhau.",
    },
    {
      id: "dir-10",
      emoji: "🔟",
      label: "Cho ba điểm thẳng hàng theo thứ tự $A - B - C$. Cặp vectơ $\\overrightarrow{AC}$ và $\\overrightarrow{BA}$.",
      isMatch: false,
      explain: "Vectơ $\\overrightarrow{AC}$ hướng từ trái sang phải, còn $\\overrightarrow{BA}$ hướng từ phải sang trái $\\implies$ Ngược hướng.",
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// GAME 2: Ghép Đôi Khái Niệm & Ký Hiệu Vectơ Vàng
// ══════════════════════════════════════════════════════════════════════════════
const matchGame: MatchGame = {
  kind: "match",
  id: "ghep-doi-khai-niem-vecto",
  title: "Ghép Đôi Khái Niệm & Ký Hiệu Vectơ Vàng",
  emoji: "🔗",
  leftLabel: "↗️ Khái niệm & Kí hiệu",
  rightLabel: "🎯 Bản chất & Điều kiện toán học",
  instructions:
    "Ghép nối khái niệm hoặc biểu thức hình học với bản chất hoặc điều kiện toán học chuẩn xác tương ứng.",
  pairs: [
    {
      id: "p1",
      left: "Độ dài $|\\overrightarrow{AB}|$",
      right: "Khoảng cách giữa điểm đầu và điểm cuối ($= AB$)",
      explain: "Độ dài vectơ là một số thực không âm bằng khoảng cách số học giữa 2 điểm.",
    },
    {
      id: "p2",
      left: "Hai vectơ bằng nhau $\\vec{a} = \\vec{b}$",
      right: "Cùng hướng VÀ Cùng độ dài",
      explain: "Hai vectơ bằng nhau đòi hỏi đồng thời 2 yếu tố: Cùng hướng và cùng độ dài.",
    },
    {
      id: "p3",
      left: "Hai vectơ đối nhau $\\vec{a} = -\\vec{b}$",
      right: "Cùng phương, Ngược hướng VÀ Cùng độ dài",
      explain: "Ví dụ kinh điển: với đoạn thẳng $AB$, ta luôn có $\\overrightarrow{BA} = -\\overrightarrow{AB}$.",
    },
    {
      id: "p4",
      left: "Giá của vectơ $\\overrightarrow{AB}$",
      right: "Đường thẳng đi qua gốc $A$ và ngọn $B$",
      explain: "Mỗi vectơ khác $\\vec{0}$ có một giá xác định là đường thẳng nối 2 mút.",
    },
    {
      id: "p5",
      left: "Hai vectơ cùng phương",
      right: "Giá song song hoặc trùng nhau",
      explain: "Định nghĩa cốt lõi: hai vectơ cùng phương khi hai đường thẳng chứa chúng song song hoặc trùng.",
    },
    {
      id: "p6",
      left: "Vectơ-không $\\vec{0}$",
      right: "Điểm đầu trùng điểm cuối, độ dài bằng 0",
      explain: "Quy ước vàng: $\\vec{0}$ cùng phương và cùng hướng với mọi vectơ trong mặt phẳng.",
    },
    {
      id: "p7",
      left: "Ba điểm $A, B, C$ thẳng hàng",
      right: "$\\overrightarrow{AB}$ cùng phương $\\overrightarrow{AC}$",
      explain: "Ứng dụng then chốt: điều kiện để 3 điểm thẳng hàng là 2 vectơ tạo từ chúng cùng phương.",
    },
    {
      id: "p8",
      left: "Số vectơ khác $\\vec{0}$ từ $n$ điểm",
      right: "Chỉnh hợp chập 2: $A_n^2 = n(n-1)$",
      explain: "Công thức đếm nhanh số vectơ khác $\\vec{0}$ tạo từ $n$ điểm phân biệt.",
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// GAME 3: Máy Quét Chân Lý: Mệnh Đề Vectơ Chuẩn Xác
// ══════════════════════════════════════════════════════════════════════════════
const truthGame: SortGame = {
  kind: "sort",
  id: "may-quet-chan-ly-vecto",
  title: "Máy Quét Chân Lý: Mệnh Đề Vectơ Chuẩn Xác",
  emoji: "🛡️",
  instructions:
    "Phân tích nhanh từng khẳng định toán học và quét xem đó là MỆNH ĐỀ ĐÚNG hay MỆNH ĐỀ SAI (CÓ BẪY).",
  matchLabel: "MỆNH ĐỀ ĐÚNG ✅",
  matchEmoji: "✅",
  noMatchLabel: "MỆNH ĐỀ SAI ❌",
  noMatchEmoji: "❌",
  items: [
    {
      id: "tr-1",
      emoji: "1️⃣",
      label: "Hai vectơ cùng hướng thì chắc chắn cùng phương.",
      isMatch: true,
      explain: "Đúng! Cùng hướng là một trường hợp hẹp hơn của cùng phương.",
    },
    {
      id: "tr-2",
      emoji: "2️⃣",
      label: "Hai vectơ cùng phương thì chắc chắn cùng hướng.",
      isMatch: false,
      explain: "Sai! Hai vectơ cùng phương có thể cùng hướng HOẶC ngược hướng nhau.",
    },
    {
      id: "tr-3",
      emoji: "3️⃣",
      label: "Vectơ-không $\\vec{0}$ cùng phương với mọi vectơ.",
      isMatch: true,
      explain: "Đúng! Đây là quy ước nền tảng được định nghĩa trong SGK Toán 10.",
    },
    {
      id: "tr-4",
      emoji: "4️⃣",
      label: "Nếu hai vectơ có cùng độ dài ($|\\vec{a}| = |\\vec{b}|$) thì $\\vec{a} = \\vec{b}$.",
      isMatch: false,
      explain: "Sai bẫy kinh điển! Cùng độ dài chưa đủ, hai vectơ phải cùng hướng nữa mới bằng nhau.",
    },
    {
      id: "tr-5",
      emoji: "5️⃣",
      label: "Với các điểm $A, B, C$, nếu $\\overrightarrow{AB} = \\overrightarrow{AC}$ thì $B$ trùng $C$.",
      isMatch: true,
      explain: "Đúng! Cho trước điểm $A$ và một vectơ, chỉ tồn tại duy nhất một điểm ngọn xác định.",
    },
    {
      id: "tr-6",
      emoji: "6️⃣",
      label: "Trong hình bình hành $ABCD$, luôn có $\\overrightarrow{AB} = \\overrightarrow{CD}$.",
      isMatch: false,
      explain: "Sai! Vì $\\overrightarrow{AB}$ và $\\overrightarrow{CD}$ ngược hướng. Đẳng thức đúng là $\\overrightarrow{AB} = \\overrightarrow{DC}$.",
    },
    {
      id: "tr-7",
      emoji: "7️⃣",
      label: "Vectơ $\\overrightarrow{AA}$ là một vectơ-không.",
      isMatch: true,
      explain: "Đúng! Mọi vectơ có điểm đầu trùng với điểm cuối đều là vectơ-không.",
    },
    {
      id: "tr-8",
      emoji: "8️⃣",
      label: "Hai vectơ có giá vuông góc với nhau thì cùng phương.",
      isMatch: false,
      explain: "Sai! Hai vectơ cùng phương khi giá của chúng song song hoặc trùng nhau.",
    },
  ],
};

const gamesBai07: LessonGame[] = [directionGame, matchGame, truthGame];

export default gamesBai07;
