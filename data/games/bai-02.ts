import type { LessonGame, SortGame, MatchGame } from "@/lib/types";

// Game 1: Máy dò Phần tử — phân biệt cạm bẫy kinh điển nhất của Bài 2:
// kí hiệu THUỘC (∈, dùng cho phần tử) và kí hiệu TẬP CON (⊂, dùng cho tập hợp),
// cùng các trường hợp đặc biệt về tập rỗng, số tập con, khoảng/đoạn.
const sortGame: SortGame = {
  kind: "sort",
  id: "may-do-phan-tu",
  title: "Máy dò Phần tử: Thuộc hay Tập con?",
  emoji: "🔍",
  instructions:
    "Vuốt thẻ (hoặc bấm nút) để phân loại: khẳng định này dùng ĐÚNG kí hiệu $\\in$ / $\\subset$ và đúng bản chất tập hợp, hay là một CẠM BẪY sai?",
  matchLabel: "Đúng",
  matchEmoji: "✅",
  noMatchLabel: "Cạm bẫy (Sai)",
  noMatchEmoji: "❌",
  items: [
    {
      id: "th-1",
      emoji: "🔹",
      label: "$a \\in \\{a; b; c\\}$",
      isMatch: true,
      explain: "Đúng — $a$ là một phần tử của tập hợp nên dùng kí hiệu thuộc $\\in$.",
    },
    {
      id: "th-2",
      emoji: "🔸",
      label: "$\\{a\\} \\in \\{a; b; c\\}$",
      isMatch: false,
      explain: "Sai — $\\{a\\}$ là một TẬP HỢP (chứa phần tử $a$), không phải một phần tử, nên phải viết $\\{a\\} \\subset \\{a; b; c\\}$.",
    },
    {
      id: "th-3",
      emoji: "🔹",
      label: "$\\varnothing \\subset A, \\forall A$",
      isMatch: true,
      explain: "Đúng — tập rỗng là tập con của mọi tập hợp, kể cả chính nó.",
    },
    {
      id: "th-4",
      emoji: "🔸",
      label: "$\\varnothing \\in A, \\forall A$",
      isMatch: false,
      explain: "Sai — $\\varnothing$ là một tập hợp (không có phần tử nào), không đương nhiên là phần tử của $A$.",
    },
    {
      id: "th-5",
      emoji: "🔹",
      label: "$\\{1; 2\\} \\subset \\{1; 2; 3\\}$",
      isMatch: true,
      explain: "Đúng — mọi phần tử của $\\{1;2\\}$ (là 1 và 2) đều thuộc $\\{1;2;3\\}$ nên đây là quan hệ tập con.",
    },
    {
      id: "th-6",
      emoji: "🔸",
      label: "$1 \\subset \\{1; 2; 3\\}$",
      isMatch: false,
      explain: "Sai — số 1 là một phần tử, không phải một tập hợp, nên phải viết $1 \\in \\{1;2;3\\}$.",
    },
    {
      id: "th-7",
      emoji: "🔹",
      label: "Tập hợp có 3 phần tử thì có đúng $2^3 = 8$ tập con.",
      isMatch: true,
      explain: "Đúng — công thức số tập con của một tập có $n$ phần tử là $2^n$, ở đây $2^3 = 8$.",
    },
    {
      id: "th-8",
      emoji: "🔹",
      label: "$-2 \\in [-2; 5)$",
      isMatch: true,
      explain: "Đúng — ngoặc vuông ở $-2$ nghĩa là nửa khoảng LẤY đầu mút này.",
    },
    {
      id: "th-9",
      emoji: "🔸",
      label: "$5 \\in [-2; 5)$",
      isMatch: false,
      explain: "Sai — ngoặc tròn ở $5$ nghĩa là nửa khoảng KHÔNG lấy đầu mút này, nên $5$ không thuộc tập hợp.",
    },
    {
      id: "th-10",
      emoji: "🔹",
      label: "$\\mathbb{N}^* \\subset \\mathbb{N}$",
      isMatch: true,
      explain: "Đúng — $\\mathbb{N}^* = \\{1; 2; 3; \\ldots\\}$ chỉ thiếu mỗi phần tử 0 so với $\\mathbb{N} = \\{0; 1; 2; \\ldots\\}$, nên là tập con.",
    },
    {
      id: "th-11",
      emoji: "🔸",
      label: "$0 \\in \\mathbb{N}^*$",
      isMatch: false,
      explain: "Sai — $\\mathbb{N}^*$ là tập số tự nhiên KHÁC 0, nên $0$ không thuộc $\\mathbb{N}^*$.",
    },
    {
      id: "th-12",
      emoji: "🔸",
      label: "$\\sqrt{2} \\in \\mathbb{Q}$",
      isMatch: false,
      explain: "Sai — $\\sqrt{2}$ là số vô tỉ (không viết được dưới dạng phân số), nên $\\sqrt{2} \\notin \\mathbb{Q}$ mà $\\sqrt{2} \\in \\mathbb{R} \\setminus \\mathbb{Q}$.",
    },
  ],
};

// Game 2: Thợ săn Phép toán Tập hợp — ghép mỗi câu hỏi tính giao/hợp/hiệu/
// phần bù trên khoảng, đoạn số thực với đúng kết quả của nó.
const matchGame: MatchGame = {
  kind: "match",
  id: "tho-san-phep-toan",
  title: "Thợ săn Phép toán Tập hợp",
  emoji: "🏹",
  instructions:
    "Chọn một thẻ phép toán ở cột trái và ghép với kết quả đúng tương ứng ở cột phải.",
  leftLabel: "📌 Phép toán tập hợp",
  rightLabel: "🎯 Kết quả",
  pairs: [
    {
      id: "pt-1",
      left: "Cho $A = [-2; 3]$ và $B = (1; 5)$. Giao $A \\cap B$ là:",
      right: "$(1; 3]$",
      explain: "Lấy phần chung: vừa $\\ge -2$ và $\\le 3$ (thuộc $A$), vừa $> 1$ và $< 5$ (thuộc $B$) — thu hẹp lại còn $1 < x \\le 3$.",
    },
    {
      id: "pt-2",
      left: "Cho $A = [-2; 3]$ và $B = (1; 5)$. Hợp $A \\cup B$ là:",
      right: "$[-2; 5)$",
      explain: "Gộp toàn bộ hai tập, từ mút nhỏ nhất $-2$ (lấy, vì thuộc $A$) đến mút lớn nhất $5$ (không lấy, vì $B$ là khoảng mở tại 5).",
    },
    {
      id: "pt-3",
      left: "Cho $A = [-2; 3]$ và $B = (1; 5)$. Hiệu $A \\setminus B$ là:",
      right: "$[-2; 1]$",
      explain: "Thuộc $A$ nhưng gạt bỏ phần thuộc $B$: chỉ còn lại $-2 \\le x \\le 1$ (mút 1 không thuộc $B$ nên vẫn giữ lại, dùng ngoặc vuông).",
    },
    {
      id: "pt-4",
      left: "Phần bù $C_{\\mathbb{R}} (-\\infty; 4]$ là:",
      right: "$(4; +\\infty)$",
      explain: "Phần bù trong $\\mathbb{R}$ đảo ngược mút: nửa khoảng gốc lấy điểm 4 (ngoặc vuông) thì phần bù không lấy điểm 4 (ngoặc tròn).",
    },
    {
      id: "pt-5",
      left: "Cho $A = (-\\infty; 2)$ và $B = [2; +\\infty)$. Giao $A \\cap B$ là:",
      right: "$\\varnothing$",
      explain: "$A$ dừng trước 2 (không lấy 2), $B$ bắt đầu từ 2 (lấy 2) — hai tập không có điểm chung nào, gọi là hai tập rời nhau.",
    },
    {
      id: "pt-6",
      left: "Cho $n(A) = 15$, $n(B) = 20$, $n(A \\cap B) = 7$. Số phần tử $n(A \\cup B)$ là:",
      right: "$28$",
      explain: "Áp dụng công thức $n(A \\cup B) = n(A) + n(B) - n(A \\cap B) = 15 + 20 - 7 = 28$ (trừ phần giao để không đếm trùng).",
    },
  ],
};

const games: LessonGame[] = [sortGame, matchGame];

export default games;
