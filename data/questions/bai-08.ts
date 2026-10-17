import type { Question } from "@/lib/types";

// ══════════════════════════════════════════════════════════════════════════════
// BÀI 8: TỔNG VÀ HIỆU CỦA HAI VECTƠ — 12 CÂU HỎI TRẮC NGHIỆM ĐA TẦNG NHẬN THỨC
// Chuẩn cấu trúc ma trận mới của Bộ GD&ĐT (2025+)
// ══════════════════════════════════════════════════════════════════════════════

const bai08: Question[] = [
  // ── NHẬN BIẾT (CÂU 1 - 4) ──────────────────────────────────────────────────
  {
    id: "b8-q1",
    q: "Với ba điểm bất kì $A, B, C$, khẳng định nào sau đây là **Quy tắc ba điểm** của phép cộng vectơ?",
    options: [
      "$\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$",
      "$\\overrightarrow{AB} + \\overrightarrow{AC} = \\overrightarrow{BC}$",
      "$\\overrightarrow{BA} + \\overrightarrow{BC} = \\overrightarrow{AC}$",
      "$\\overrightarrow{AB} - \\overrightarrow{BC} = \\overrightarrow{AC}$"
    ],
    answer: 0,
    explain: "Theo định nghĩa và quy tắc ba điểm (nối đuôi) trong SGK Toán 10: Với ba điểm bất kì $A, B, C$, ta luôn có $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$."
  },
  {
    id: "b8-q2",
    q: "Cho hình bình hành $ABCD$. Khẳng định nào sau đây là **Quy tắc hình bình hành**?",
    options: [
      "$\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{BD}$",
      "$\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$",
      "$\\overrightarrow{AB} + \\overrightarrow{AC} = \\overrightarrow{AD}$",
      "$\\overrightarrow{BA} + \\overrightarrow{BC} = \\overrightarrow{CA}$"
    ],
    answer: 1,
    explain: "Theo quy tắc hình bình hành: Nếu $ABCD$ là hình bình hành thì tổng hai vectơ chung gốc tạo bởi hai cạnh kề bằng vectơ đường chéo xuất phát từ đỉnh đó: $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$."
  },
  {
    id: "b8-q3",
    q: "Với ba điểm bất kì $O, M, N$, đẳng thức nào sau đây thể hiện **Quy tắc hiệu** của hai vectơ chung gốc?",
    options: [
      "$\\overrightarrow{OM} - \\overrightarrow{ON} = \\overrightarrow{MN}$",
      "$\\overrightarrow{ON} - \\overrightarrow{OM} = \\overrightarrow{MN}$",
      "$\\overrightarrow{ON} - \\overrightarrow{OM} = \\overrightarrow{NM}$",
      "$\\overrightarrow{ON} + \\overrightarrow{OM} = \\overrightarrow{MN}$"
    ],
    answer: 1,
    explain: "Theo quy tắc hiệu: $\\overrightarrow{ON} - \\overrightarrow{OM} = \\overrightarrow{MO} + \\overrightarrow{ON} = \\overrightarrow{MN}$ (điểm sau trừ điểm trước: 'ngọn trừ gốc')."
  },
  {
    id: "b8-q4",
    q: "Hai vectơ được gọi là **vectơ đối nhau** khi và chỉ khi:",
    options: [
      "Chúng cùng độ dài và cùng hướng.",
      "Chúng cùng phương và cùng độ dài.",
      "Chúng có cùng độ dài và ngược hướng.",
      "Giá của chúng song song và cùng độ dài."
    ],
    answer: 2,
    explain: "Theo định nghĩa SGK Toán 10: Vectơ có cùng độ dài và ngược hướng với vectơ $\\vec{a}$ được gọi là vectơ đối của $\\vec{a}$, kí hiệu là $-\\vec{a}$. Tổng của hai vectơ đối nhau luôn bằng $\\vec{0}$."
  },

  // ── THÔNG HIỂU (CÂU 5 - 8) ─────────────────────────────────────────────────
  {
    id: "b8-q5",
    q: "Cho đoạn thẳng $AB$ có trung điểm là $I$. Với điểm $M$ tuỳ ý, khẳng định nào sau đây luôn đúng?",
    options: [
      "$\\overrightarrow{MA} + \\overrightarrow{MB} = \\overrightarrow{MI}$",
      "$\\overrightarrow{MA} + \\overrightarrow{MB} = 2\\overrightarrow{MI}$",
      "$\\overrightarrow{MA} + \\overrightarrow{MB} = \\vec{0}$",
      "$\\overrightarrow{IA} + \\overrightarrow{IB} = 2\\overrightarrow{MI}$"
    ],
    answer: 1,
    explain: "Do $I$ là trung điểm của $AB$ nên $\\overrightarrow{IA} + \\overrightarrow{IB} = \\vec{0}$. Với điểm $M$ bất kì, ta có $\\overrightarrow{MA} + \\overrightarrow{MB} = (\\overrightarrow{MI} + \\overrightarrow{IA}) + (\\overrightarrow{MI} + \\overrightarrow{IB}) = 2\\overrightarrow{MI} + (\\overrightarrow{IA} + \\overrightarrow{IB}) = 2\\overrightarrow{MI}$."
  },
  {
    id: "b8-q6",
    q: "Cho tam giác $ABC$ có trọng tâm $G$. Đẳng thức vectơ nào sau đây là **sai**?",
    options: [
      "$\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$",
      "$\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} = 3\\overrightarrow{MG}$ (với mọi điểm $M$)",
      "$\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CA} = \\vec{0}$",
      "$\\overrightarrow{GA} + \\overrightarrow{GB} = \\overrightarrow{GC}$"
    ],
    answer: 3,
    explain: "Vì $G$ là trọng tâm nên $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0} \\implies \\overrightarrow{GA} + \\overrightarrow{GB} = -\\overrightarrow{GC}$ (chứ không phải $\\overrightarrow{GC}$). Do đó khẳng định D là sai."
  },
  {
    id: "b8-q7",
    q: "Cho tam giác đều $ABC$ có cạnh bằng $a$. Độ dài của vectơ hiệu $\\overrightarrow{AB} - \\overrightarrow{AC}$ bằng:",
    options: [
      "$a$",
      "$a\\sqrt{3}$",
      "$\\frac{a\\sqrt{3}}{2}$",
      "$2a$"
    ],
    answer: 0,
    explain: "Theo quy tắc hiệu: $\\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{CB}$. Do đó độ dài $|\\overrightarrow{AB} - \\overrightarrow{AC}| = |\\overrightarrow{CB}| = CB = a$."
  },
  {
    id: "b8-q8",
    q: "Cho hình vuông $ABCD$ có cạnh bằng $a$. Độ dài của vectơ tổng $\\overrightarrow{AB} + \\overrightarrow{AD}$ bằng:",
    options: [
      "$a$",
      "$2a$",
      "$a\\sqrt{2}$",
      "$\\frac{a\\sqrt{2}}{2}$"
    ],
    answer: 2,
    explain: "Theo quy tắc hình bình hành: $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$. Độ dài đường chéo hình vuông cạnh $a$ là $AC = a\\sqrt{2}$. Do đó $|\\overrightarrow{AB} + \\overrightarrow{AD}| = a\\sqrt{2}$."
  },

  // ── VẬN DỤNG (CÂU 9 - 12) ──────────────────────────────────────────────────
  {
    id: "b8-q9",
    q: "Hai lực $\\vec{F}_1$ và $\\vec{F}_2$ có độ lớn lần lượt là $3\\text{ N}$ và $2\\text{ N}$ cùng tác động vào một vật tại điểm $O$. Góc giữa hai lực bằng $120^\\circ$. Độ lớn của hợp lực $\\vec{F} = \\vec{F}_1 + \\vec{F}_2$ bằng:",
    options: [
      "$\\sqrt{7}\\text{ N}$",
      "$5\\text{ N}$",
      "$\\sqrt{13}\\text{ N}$",
      "$\\sqrt{19}\\text{ N}$"
    ],
    answer: 0,
    explain: "Áp dụng công thức tính độ lớn hợp lực theo định lí hình bình hành: $|\\vec{F}|^2 = F_1^2 + F_2^2 + 2F_1 F_2 \\cos 120^\\circ = 3^2 + 2^2 + 2 \\cdot 3 \\cdot 2 \\cdot \\left(-\\frac{1}{2}\\right) = 9 + 4 - 6 = 7 \\implies |\\vec{F}| = \\sqrt{7}\\text{ N} \\approx 2{,}65\\text{ N}$."
  },
  {
    id: "b8-q10",
    q: "Cho hình thoi $ABCD$ có cạnh bằng $a$ và góc $\\widehat{BAD} = 120^\\circ$. Độ dài của vectơ tổng $\\overrightarrow{CB} + \\overrightarrow{CD}$ bằng:",
    options: [
      "$a$",
      "$a\\sqrt{3}$",
      "$2a$",
      "$\\frac{a\\sqrt{3}}{2}$"
    ],
    answer: 0,
    explain: "Theo quy tắc hình bình hành: $\\overrightarrow{CB} + \\overrightarrow{CD} = \\overrightarrow{CA}$. Trong hình thoi $ABCD$, góc $\\widehat{BCD} = 180^\\circ - 120^\\circ = 60^\\circ$, suy ra tam giác $CBD$ đều cạnh $a$. Đường chéo $BD = a$. Đường chéo $AC = 2 \\cdot \\frac{a\\sqrt{3}}{2}$? Lưu ý: $\\widehat{BCD} = 60^\\circ$ thì tam giác $ABC$ là tam giác cân tại $B$ có $\\widehat{ABC} = 120^\\circ \\implies AC = 2a \\sin 60^\\circ = a\\sqrt{3}$? Khoan, xét góc: $\\widehat{BAD} = 120^\\circ \\implies \\widehat{BCD} = 120^\\circ$! Tam giác $BCD$ có $CB = CD = a$ và góc $\\widehat{BCD} = 120^\\circ$. Khi đó đường chéo $BD = 2a \\sin 60^\\circ = a\\sqrt{3}$, còn $CA = 2a \\cos 60^\\circ = 2a \\cdot \\frac{1}{2} = a$. Vậy $|\\overrightarrow{CB} + \\overrightarrow{CD}| = CA = a$."
  },
  {
    id: "b8-q11",
    q: "Một khẩu pháo có trọng lượng $22\\,148\\text{ N}$ được kéo lên một con dốc nghiêng $30^\\circ$ so với mặt phẳng ngang. Biết mỗi người có thể tạo ra lực kéo tối đa $100\\text{ N}$ song song với mặt dốc. Bỏ qua ma sát, cần tối thiểu bao nhiêu người để kéo khẩu pháo lên dốc?",
    options: [
      "$111\\text{ người}$",
      "$110\\text{ người}$",
      "$222\\text{ người}$",
      "$192\\text{ người}$"
    ],
    answer: 0,
    explain: "Thành phần của trọng lực xuôi theo phương mặt dốc hướng xuống là $P_x = P \\sin 30^\\circ = 22\\,148 \\cdot \\frac{1}{2} = 11\\,074\\text{ N}$. Để kéo được khẩu pháo lên, tổng lực kéo tối thiểu cần đạt $11\\,074\\text{ N}$. Số người cần thiết là $N \\ge \\frac{11\\,074}{100} = 110{,}74$. Vì số người phải là số nguyên nên cần tối thiểu $111$ người."
  },
  {
    id: "b8-q12",
    q: "Một con tàu chuyển động từ bờ này sang bờ kia của một con sông thẳng có hai bờ song song với vận tốc riêng $\\vec{v}_r$ không đổi. Dòng nước chảy với vận tốc $\\vec{v}_n$ không đổi. Để tàu sang được bờ bên kia trong thời gian **ngắn nhất**, người lái tàu phải giữ mũi tàu hướng theo phương nào?",
    options: [
      "Mũi tàu hướng chếch về phía thượng nguồn.",
      "Mũi tàu hướng chếch về phía hạ lưu.",
      "Mũi tàu luôn hướng vuông góc với bờ sông.",
      "Tuỳ thuộc vào tỉ số giữa độ lớn của $\\vec{v}_r$ và $\\vec{v}_n$."
    ],
    answer: 2,
    explain: "Gọi chiều rộng của sông là $h$. Vận tốc đưa tàu sang bờ theo phương vuông góc với bờ sông phụ thuộc duy nhất vào thành phần vuông góc của vận tốc riêng: $v_y = v_r \\sin\\alpha$ (với $\\alpha$ là góc giữa mũi tàu và bờ sông), vì dòng nước chỉ chảy song song với bờ sông. Thời gian sang sông $t = \\frac{h}{v_r \\sin\\alpha}$ ngắn nhất khi $\\sin\\alpha = 1 \\iff \\alpha = 90^\\circ$. Vậy tàu phải luôn giữ mũi vuông góc với bờ sông."
  }
];

export default bai08;
