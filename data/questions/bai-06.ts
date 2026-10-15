import type { Question } from "@/lib/types";

const bai06: Question[] = [
  {
    id: "b6-q1",
    q: "Trong tam giác $ABC$ có các cạnh $BC = a, CA = b, AB = c$. Định lí Côsin được biểu diễn bởi hệ thức chuẩn xác nào sau đây?",
    options: [
      "$a^2 = b^2 + c^2 - 2bc \\cos A$",
      "$a^2 = b^2 + c^2 + 2bc \\cos A$",
      "$a^2 = b^2 + c^2 - 2bc \\sin A$",
      "$a^2 = b^2 + c^2 - bc \\cos A$"
    ],
    answer: 0,
    explain: "Theo định lí Côsin trong tam giác bất kì, bình phương một cạnh bằng tổng bình phương hai cạnh kia trừ đi hai lần tích của hai cạnh đó với côsin của góc xen giữa: $a^2 = b^2 + c^2 - 2bc\\cos A$."
  },
  {
    id: "b6-q2",
    q: "Từ định lí Côsin, hệ thức nào sau đây dùng để tính côsin của góc $\\widehat{A}$ khi biết độ dài cả ba cạnh $a, b, c$?",
    options: [
      "$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$",
      "$\\cos A = \\frac{b^2 + c^2 + a^2}{2bc}$",
      "$\\cos A = \\frac{a^2 + c^2 - b^2}{2ac}$",
      "$\\cos A = \\frac{b^2 + c^2 - a^2}{bc}$"
    ],
    answer: 0,
    explain: "Từ $a^2 = b^2 + c^2 - 2bc\\cos A$, chuyển vế ta được $2bc\\cos A = b^2 + c^2 - a^2 \\iff \\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$."
  },
  {
    id: "b6-q3",
    q: "Gọi $R$ là bán kính đường tròn ngoại tiếp tam giác $ABC$. Định lí Sin khẳng định hệ thức tỉ lệ vàng nào sau đây?",
    options: [
      "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$",
      "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = R$",
      "$\\frac{a}{\\cos A} = \\frac{b}{\\cos B} = \\frac{c}{\\cos C} = 2R$",
      "$\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c} = 2R$"
    ],
    answer: 0,
    explain: "Định lí Sin khẳng định: trong tam giác $ABC$, tỉ số giữa mỗi cạnh và sin của góc đối diện luôn bằng đường kính $2R$ của đường tròn ngoại tiếp: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$."
  },
  {
    id: "b6-q4",
    q: "Công thức nào sau đây biểu diễn diện tích $S$ của tam giác $ABC$ thông qua ba cạnh $a, b, c$ và bán kính đường tròn ngoại tiếp $R$?",
    options: [
      "$S = \\frac{abc}{4R}$",
      "$S = \\frac{abc}{2R}$",
      "$S = \\frac{abc}{R}$",
      "$S = \\frac{4R}{abc}$"
    ],
    answer: 0,
    explain: "Diện tích tam giác qua bán kính ngoại tiếp $R$ là $S = \\frac{abc}{4R}$. Từ đó suy ra $R = \\frac{abc}{4S}$."
  },
  {
    id: "b6-q5",
    q: "Công thức nào sau đây liên hệ giữa diện tích $S$, nửa chu vi $p = \\frac{a+b+c}{2}$ và bán kính đường tròn nội tiếp $r$?",
    options: [
      "$S = p \\cdot r \\iff r = \\frac{S}{p}$",
      "$S = 2p \\cdot r \\iff r = \\frac{S}{2p}$",
      "$S = \\frac{p}{r} \\iff r = \\frac{p}{S}$",
      "$S = \\frac{1}{2} p \\cdot r$"
    ],
    answer: 0,
    explain: "Diện tích tam giác bằng tích của nửa chu vi với bán kính đường tròn nội tiếp: $S = p \\cdot r \\implies r = \\frac{S}{p}$."
  },
  {
    id: "b6-q6",
    q: "Cho tam giác $ABC$ có $b = 5$, $c = 8$ và góc $\\widehat{A} = 60^\\circ$. Độ dài cạnh $a$ bằng:",
    options: [
      "$a = 7$",
      "$a = \\sqrt{129}$",
      "$a = 49$",
      "$a = 39$"
    ],
    answer: 0,
    explain: "Áp dụng định lí Côsin: $a^2 = b^2 + c^2 - 2bc\\cos A = 5^2 + 8^2 - 2 \\cdot 5 \\cdot 8 \\cdot \\cos 60^\\circ = 25 + 64 - 80 \\cdot 0.5 = 89 - 40 = 49 \\implies a = \\sqrt{49} = 7$."
  },
  {
    id: "b6-q7",
    q: "Cho tam giác $ABC$ có hai cạnh $b = 6, c = 10$ và góc tù $\\widehat{A} = 120^\\circ$. Độ dài cạnh $a$ bằng:",
    options: [
      "$a = 14$",
      "$a = 2\\sqrt{19}$",
      "$a = 196$",
      "$a = 4\\sqrt{7}$"
    ],
    answer: 0,
    explain: "Áp dụng định lí Côsin với góc tù: $a^2 = b^2 + c^2 - 2bc\\cos A = 6^2 + 10^2 - 2 \\cdot 6 \\cdot 10 \\cdot \\cos 120^\\circ = 36 + 100 - 120 \\cdot \\left(-\\frac{1}{2}\\right) = 136 + 60 = 196 \\implies a = \\sqrt{196} = 14$."
  },
  {
    id: "b6-q8",
    q: "Tam giác $ABC$ có cạnh $a = 10$ và góc đối diện $\\widehat{A} = 30^\\circ$. Bán kính đường tròn ngoại tiếp $R$ của tam giác $ABC$ bằng:",
    options: [
      "$R = 10$",
      "$R = 5$",
      "$R = 20$",
      "$R = 10\\sqrt{3}$"
    ],
    answer: 0,
    explain: "Áp dụng định lí Sin: $\\frac{a}{\\sin A} = 2R \\implies 2R = \\frac{10}{\\sin 30^\\circ} = \\frac{10}{0.5} = 20 \\implies R = 10$."
  },
  {
    id: "b6-q9",
    q: "Tam giác $ABC$ có ba cạnh lần lượt là $a = 7, b = 8, c = 10$. Giá trị $\\cos A$ bằng bao nhiêu và góc $\\widehat{A}$ là góc nhọn hay tù?",
    options: [
      "$\\cos A = \\frac{23}{32} > 0$ (góc $A$ nhọn)",
      "$\\cos A = -\\frac{23}{32} < 0$ (góc $A$ tù)",
      "$\\cos A = \\frac{17}{20} > 0$ (góc $A$ nhọn)",
      "$\\cos A = 0$ (góc $A$ vuông)"
    ],
    answer: 0,
    explain: "Áp dụng hệ quả định lí Côsin: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc} = \\frac{8^2 + 10^2 - 7^2}{2 \\cdot 8 \\cdot 10} = \\frac{64 + 100 - 49}{160} = \\frac{115}{160} = \\frac{23}{32} \\approx 0.71875 > 0$. Do $\\cos A > 0$ nên góc $\\widehat{A}$ là góc nhọn."
  },
  {
    id: "b6-q10",
    q: "Cho tam giác $ABC$ có $b = 6, c = 10$ và góc $\\widehat{A} = 150^\\circ$. Diện tích của tam giác $ABC$ bằng:",
    options: [
      "$S = 15$",
      "$S = 15\\sqrt{3}$",
      "$S = 30$",
      "$S = 60$"
    ],
    answer: 0,
    explain: "Áp dụng công thức tính diện tích qua góc xen giữa: $S = \\frac{1}{2}bc \\sin A = \\frac{1}{2} \\cdot 6 \\cdot 10 \\cdot \\sin 150^\\circ$. Vì $\\sin 150^\\circ = \\sin(180^\\circ - 30^\\circ) = \\sin 30^\\circ = \\frac{1}{2}$, ta có $S = 30 \\cdot \\frac{1}{2} = 15$."
  },
  {
    id: "b6-q11",
    q: "Một tam giác có độ dài ba cạnh lần lượt là $a = 13, b = 14, c = 15$. Bán kính đường tròn nội tiếp $r$ của tam giác này bằng:",
    options: [
      "$r = 4$",
      "$r = 8$",
      "$r = 2$",
      "$r = 3.5$"
    ],
    answer: 0,
    explain: "1. Nửa chu vi: $p = \\frac{13+14+15}{2} = 21$.\n2. Công thức Heron: $S = \\sqrt{21(21-13)(21-14)(21-15)} = \\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = \\sqrt{7056} = 84$.\n3. Bán kính nội tiếp: $r = \\frac{S}{p} = \\frac{84}{21} = 4$."
  },
  {
    id: "b6-q12",
    q: "Cho tam giác $ABC$ có ba cạnh $a = 6, b = 8, c = 10$. Độ dài đường trung tuyến $m_a$ kẻ từ đỉnh $A$ xuống cạnh $BC$ bằng:",
    options: [
      "$m_a = \\sqrt{73}$",
      "$m_a = 5$",
      "$m_a = 7$",
      "$m_a = \\sqrt{65}$"
    ],
    answer: 0,
    explain: "Áp dụng công thức độ dài đường trung tuyến: $m_a^2 = \\frac{2(b^2+c^2)-a^2}{4} = \\frac{2(8^2+10^2)-6^2}{4} = \\frac{2(64+100)-36}{4} = \\frac{328-36}{4} = \\frac{292}{4} = 73 \\implies m_a = \\sqrt{73}$."
  },
  {
    id: "b6-q13",
    q: "Tam giác $ABC$ có $b = 7, c = 5$ và $\\cos A = \\frac{3}{5}$. Độ dài đường cao $h_a$ hạ từ đỉnh $A$ xuống cạnh $BC$ bằng:",
    options: [
      "$h_a = \\frac{7\\sqrt{2}}{2}$",
      "$h_a = 4$",
      "$h_a = \\frac{14\\sqrt{2}}{3}$",
      "$h_a = 6$"
    ],
    answer: 0,
    explain: "1. Tính cạnh $a$: $a^2 = b^2 + c^2 - 2bc\\cos A = 7^2 + 5^2 - 2 \\cdot 7 \\cdot 5 \\cdot \\frac{3}{5} = 49 + 25 - 42 = 32 \\implies a = \\sqrt{32} = 4\\sqrt{2}$.\n2. Vì $\\cos A = \\frac{3}{5}$ nên $\\sin A = \\sqrt{1 - \\cos^2 A} = \\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5}$.\n3. Diện tích: $S = \\frac{1}{2}bc\\sin A = \\frac{1}{2} \\cdot 7 \\cdot 5 \\cdot \\frac{4}{5} = 14$.\n4. Đường cao: $h_a = \\frac{2S}{a} = \\frac{28}{4\\sqrt{2}} = \\frac{7}{\\sqrt{2}} = \\frac{7\\sqrt{2}}{2}$."
  },
  {
    id: "b6-q14",
    q: "Hai tàu thuỷ cùng xuất phát từ bến cảng $O$ lúc 8 giờ sáng, chạy thẳng theo hai hướng tạo với nhau một góc $60^\\circ$. Tàu thứ nhất chạy với vận tốc $20\\text{ km/h}$, tàu thứ hai chạy với vận tốc $30\\text{ km/h}$. Sau 2 giờ, khoảng cách giữa hai tàu xấp xỉ bằng:",
    options: [
      "$52.9\\text{ km}$",
      "$40.0\\text{ km}$",
      "$50.0\\text{ km}$",
      "$87.2\\text{ km}$"
    ],
    answer: 0,
    explain: "Sau 2 giờ:\n• Quãng đường tàu 1 đi được: $OA = 20 \\times 2 = 40\\text{ km}$.\n• Quãng đường tàu 2 đi được: $OB = 30 \\times 2 = 60\\text{ km}$.\n• Góc xen giữa $\\widehat{AOB} = 60^\\circ$.\nÁp dụng định lí Côsin trong $\\triangle OAB$ để tính khoảng cách $AB$:\n$AB^2 = OA^2 + OB^2 - 2 \\cdot OA \\cdot OB \\cdot \\cos 60^\\circ = 40^2 + 60^2 - 2 \\cdot 40 \\cdot 60 \\cdot 0.5 = 1600 + 3600 - 2400 = 2800$.\nSuy ra $AB = \\sqrt{2800} = 20\\sqrt{7} \\approx 52.92\\text{ km}$."
  },
  {
    id: "b6-q15",
    q: "Để đo chiều cao toà tháp $CD$, người ta cắm hai cọc tiêu tại $A$ và $B$ trên mặt đất cách nhau $30\\text{ m}$ thẳng hàng với chân tháp $D$ ($B$ ở giữa $A$ và $D$). Góc nâng nhìn đỉnh tháp từ $A$ là $30^\\circ$ và từ $B$ là $45^\\circ$. Chiều cao toà tháp gần nhất với giá trị nào?",
    options: [
      "$41.0\\text{ m}$",
      "$20.5\\text{ m}$",
      "$56.5\\text{ m}$",
      "$30.0\\text{ m}$"
    ],
    answer: 0,
    explain: "1. Xét $\\triangle ABC$: $\\widehat{ACB} = 45^\\circ - 30^\\circ = 15^\\circ$.\n2. Theo định lí Sin: $BC = \\frac{AB \\cdot \\sin 30^\\circ}{\\sin 15^\\circ} = \\frac{30 \\cdot 0.5}{\\sin 15^\\circ} = \\frac{15}{\\sin 15^\\circ} \\approx 57.96\\text{ m}$.\n3. Trong tam giác vuông $BCD$: chiều cao $CD = BC \\cdot \\sin 45^\\circ \\approx 57.96 \\cdot \\frac{\\sqrt{2}}{2} \\approx 40.98\\text{ m} \\approx 41.0\\text{ m}$."
  },
  {
    id: "b6-q16",
    q: "Để đo khoảng cách giữa hai vị trí $A$ và $B$ bị ngăn cách bởi một hồ nước sâu, một kĩ sư trắc địa đứng tại vị trí quan sát $C$ đo được $CA = 80\\text{ m}, CB = 100\\text{ m}$ và góc ngắm $\\widehat{ACB} = 120^\\circ$. Khoảng cách $AB$ giữa hai vị trí xấp xỉ bằng:",
    options: [
      "$156.2\\text{ m}$",
      "$180.0\\text{ m}$",
      "$128.1\\text{ m}$",
      "$91.7\\text{ m}$"
    ],
    answer: 0,
    explain: "Áp dụng định lí Côsin trong $\\triangle ABC$ có góc tù $\\widehat{C} = 120^\\circ$:\n$AB^2 = CA^2 + CB^2 - 2 \\cdot CA \\cdot CB \\cdot \\cos 120^\\circ = 80^2 + 100^2 - 2(80)(100)\\left(-\\frac{1}{2}\\right) = 6400 + 10000 + 8000 = 24400$.\nSuy ra $AB = \\sqrt{24400} = 20\\sqrt{61} \\approx 156.2\\text{ m}$."
  }
];

export default bai06;
