'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const m=t=>katex.renderToString(t,{throwOnError:false,trust:false,output:'htmlAndMathml'});
const V=t=>m(`\\overrightarrow{${t}}`);
const graph=(id,label)=>`<div class="scene"><svg id="${id}" viewBox="0 0 620 340" role="img" aria-label="${label}"></svg></div>`;
const step=t=>`<p class="reveal" aria-hidden="true" inert>${t}</p>`;
const ribbon=t=>`<div class="ribbon">${t}</div>`;
const formula=t=>`<div class="formula">${m(t)}</div>`;
const card=(icon,title,text)=>`<div class="card reveal" aria-hidden="true" inert><h3>${title}</h3><p>${text}</p></div>`;
const pick=(id,options)=>`<div class="responses" id="${id}">${options.map((t,i)=>`<button class="choice" data-choice="${id}" data-value="${i}"><span class="letter">${'ABCD'[i]}</span><span>${t}</span></button>`).join('')}</div><div class="feedback" id="${id}-feedback" role="status"></div>`;
const split=(id,label,right)=>`<div class="split">${graph(id,label)}<div class="lab">${right}</div></div>`;

const quizQuestions=[
  ['Cho 3 điểm A, B, C bất kì. Phép cộng nối tiếp cho kết quả là vectơ nào?',[V('CA'),V('AC'),V('BA'),V('CB')],1,'Quy tắc ba điểm: ngọn của vectơ thứ nhất ghép với gốc của vectơ thứ hai: AB + BC = AC.'],
  ['Trong hình bình hành ABCD, vectơ tổng AB + AD bằng vectơ nào sau đây?',[V('BD'),V('DB'),V('AC'),V('CA')],2,'Quy tắc hình bình hành: đường chéo chính xuất phát từ đỉnh chung A là AC: AB + AD = AC.'],
  ['Vectơ đối của vectơ a là vectơ có đặc điểm gì?',['Cùng hướng và cùng độ dài','Ngược hướng và cùng độ dài','Cùng hướng và khác độ dài','Vuông góc và cùng độ dài'],1,'Vectơ đối có cùng độ dài nhưng ngược hướng hoàn toàn: a + (-a) = 0.'],
  ['Vectơ đối của vectơ AB được kí hiệu và viết lại là:',[V('AB'),V('BA'),'-'+V('BA'),'0'],1,'Vectơ đối của AB là -AB = BA.'],
  ['Với ba điểm O, A, B bất kì, quy tắc hiệu (ngọn trừ gốc) cho đẳng thức:',[V('OB')+'-'+V('OA')+'='+V('AB'),V('OB')+'-'+V('OA')+'='+V('BA'),V('OA')+'-'+V('OB')+'='+V('AB'),V('OB')+'+'+V('OA')+'='+V('AB')],0,'Quy tắc hiệu với gốc chung O: OB - OA = AB (lấy ngọn của số bị trừ trừ ngọn của số trừ).'],
  ['Cho điểm I là trung điểm của đoạn thẳng AB. Khẳng định nào sau đây là SAI?',[V('IA')+'+'+V('IB')+'=\\vec0',V('IA')+'='+V('IB'),'|'+V('IA')+'|=|'+V('IB')+'|',V('MA')+'+'+V('MB')+'=2'+V('MI')],1,'IA và IB ngược hướng nhau nên IA = -IB ≠ IB.'],
  ['Cho tam giác ABC có trọng tâm G. Đẳng thức vectơ nào sau đây luôn đúng?',[V('GA')+'+'+V('GB')+'+'+V('GC')+'=\\vec0',V('GA')+'+'+V('GB')+'='+V('GC'),'|'+V('GA')+'|=|'+V('GB')+'|',V('MA')+'+'+V('MB')+'=3'+V('MG')],0,'Hệ thức trọng tâm cơ bản: GA + GB + GC = 0.'],
  ['Hình thoi ABCD cạnh a có góc BAD = 60°. Độ lớn của vectơ AB + AD bằng bao nhiêu?',['a',m('a\\sqrt2'),m('a\\sqrt3'),'2a'],2,'AB + AD = AC. Tam giác ABD đều cạnh a, đường chéo AC = 2·(a√3/2) = a√3.'],
  ['Hai lực F1 = 3 N và F2 = 2 N cùng tác dụng vào một chất điểm, hợp nhau góc 120°. Hợp lực có độ lớn bằng:',['5 N','1 N',m('\\sqrt7\\text{ N} \\approx 2{,}65\\text{ N}'),m('\\sqrt{13}\\text{ N}')],2,'Theo định lí côsin: F² = 3² + 2² + 2·3·2·cos(120°) = 9 + 4 - 6 = 7 ⇒ F = √7 N.'],
  ['Kéo pháo nặng 2 260 kg lên dốc nghiêng 30°, g = 9,8 m/s². Mỗi chiến sĩ tạo lực 100 N. Cần tối thiểu bao nhiêu người?',['110 người','111 người','226 người','150 người'],1,'Lực trượt dốc Px = P·sin30° = 2260·9,8·0,5 = 11 074 N. Số người tối thiểu = ⌈11 074 / 100⌉ = 111 chiến sĩ.'],
  ['Hai tàu cùng vận tốc riêng, cùng bẻ lái góc α so với bờ để qua sông xiết. Tàu nào cập bến đối diện trước?',['Tàu xuôi dòng hơn','Tàu ngược dòng hơn','Cả hai cập bến cùng lúc','Tùy vào bề rộng dòng sông'],2,'Vận tốc sang sông là vy = v0·sinα. Vì cùng vận tốc riêng và cùng góc bẻ lái nên thời gian qua sông t = d/vy là như nhau.'],
  ['Khi nào thì độ lớn của vectơ tổng bằng tổng các độ dài: |a + b| = |a| + |b|?',['Hai vectơ vuông góc','Hai vectơ cùng hướng','Hai vectơ ngược hướng','Luôn đúng với mọi cặp vectơ'],1,'Bất đẳng thức tam giác: |a + b| ≤ |a| + |b|. Dấu bằng xảy ra khi và chỉ khi hai vectơ cùng hướng (hoặc có ít nhất một vectơ bằng 0).']
];

const sections=[
  {
    tag:'BÀI 8 · TOÁN 10 · KẾT NỐI TRI THỨC',
    title:'Tổng và hiệu của hai vectơ',
    lead:'Quy tắc ba điểm · Quy tắc hình bình hành · Kéo pháo Điện Biên Phủ · Vận tốc qua sông',
    note:'SGK Toán 10 Tập 1 trang 51–54. Bài học xây dựng hoàn chỉnh phép cộng, trừ vectơ, hệ thức trung điểm - trọng tâm và ứng dụng vật lí cơ học.',
    html:split('cover','Mô hình cộng hai vectơ liên tiếp',`<p class="hero-title">Hai lực tác dụng.<br><em>Một hướng chuyển động!</em></p><p class="caption">Khám phá cách ghép nối các đại lượng có hướng trong không gian.</p><div class="links"><a class="action" href="/luyen/bai-08" target="_blank" rel="noopener">Mở Game Hub & Luyện tập</a><a class="action" href="/sgk/bai-08.html" target="_blank" rel="noopener">Xem SGK Trang 51–54</a></div>`)
  },
  {
    tag:'01 · MỞ ĐẦU · SGK TRANG 51',
    title:'Ca nô qua dòng sông nước chảy xiết',
    lead:'Động cơ đẩy thẳng sang bờ đối diện, dòng nước cuốn trôi xuôi dòng.',
    note:'Vận tốc thực tế của ca nô đối với bờ là sự kết hợp của hai vận tốc đồng thời.',
    html:split('river-boat','Sơ đồ vectơ vận tốc ca nô và dòng nước',`${pick('river-pick',['Ca nô đi thẳng sang điểm đối diện','Ca nô bị trôi dạt xiên chéo về phía hạ lưu','Ca nô quay tròn tại chỗ'])}${ribbon('Vận tốc thực tế đối với bờ: '+m('\\vec v = \\vec v_{\\text{ca nô}} + \\vec v_{\\text{nước}}'))}`)
  },
  {
    tag:'02 · HĐ1 · SGK TRANG 51',
    title:'Nối tiếp hai chặng đường đi',
    lead:'Từ vị trí ban đầu A, đi theo vectơ a đến B, rồi tiếp tục theo vectơ b đến C.',
    note:'HĐ1 SGK trang 51: Xây dựng vectơ tổng qua điểm ngọn nối điểm gốc.',
    html:split('triangle-add','Quy tắc ba điểm nối tiếp AB + BC = AC',`<div class="solution">${step('Vectơ '+V('AB')+' biểu diễn chặng thứ nhất: xuất phát từ A đến B.')}${step('Vectơ '+V('BC')+' biểu diễn chặng thứ hai: xuất phát từ B đến C.')}${step('Độ dịch chuyển tổng hợp cuối cùng từ đầu đến đích là '+V('AC')+'.')}</div>`)
  },
  {
    tag:'03 · TÍNH ĐỘC LẬP GỐC · SGK TRANG 51',
    title:'Chọn điểm gốc ban đầu khác: Tổng có đổi không?',
    lead:'Lấy điểm A\' khác A, vẽ A\'B\' = a và B\'C\' = b. So sánh AC và A\'C\'.',
    note:'HĐ1 phần b: Chứng minh AC = A\'C\' thông qua tính chất của hình bình hành.',
    html:split('independent-root','Hai tam giác dời chỗ nhau bảo toàn vectơ tổng',`<div class="solution">${step('Vì '+V('AB')+' = '+V('A\'B\'')+' nên tứ giác ABB\'A\' là hình bình hành ⇒ '+V('AA\'')+' = '+V('BB\'')+'.')}${step('Vì '+V('BC')+' = '+V('B\'C\'')+' nên '+V('BB\'')+' = '+V('CC\'')+'. Suy ra '+V('AA\'')+' = '+V('CC\'')+'.')}${step('Do đó tứ giác ACC\'A\' là hình bình hành ⇒ '+V('AC')+' = '+V('A\'C\'')+'.')}</div>`)
  },
  {
    tag:'04 · ĐỊNH NGHĨA TỔNG & QUY TẮC BA ĐIỂM',
    title:'Quy tắc ba điểm: Ghép ngọn vào gốc',
    lead:'Cho hai vectơ a và b. Tổng của chúng là vectơ AC khi AB = a và BC = b.',
    note:'Quy tắc cốt lõi: chữ cái ở giữa nối tiếp nhau: AB + BC = AC.',
    html:split('three-points','Quy tắc 3 điểm AB + BC = AC',`<div class="solution">${formula('\\vec a + \\vec b = \\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}')}${step('Điểm cuối của vectơ thứ nhất trùng điểm đầu của vectơ thứ hai.')}${step('Kí hiệu: '+m('\\vec a + \\vec b')+'.')}</div>`)
  },
  {
    tag:'05 · PHÒNG THÍ NGHIỆM TỔNG NỐI TIẾP',
    title:'Tự ghép chuỗi vectơ nối đuôi',
    lead:'Chọn các chặng để quan sát sự tạo thành vectơ tổng tổng quát.',
    note:'Mở rộng quy tắc ba điểm sang đa giác nhiều điểm: A1A2 + A2A3 + ... + An-1An = A1An.',
    html:split('chain-lab','Chuỗi nhiều vectơ nối tiếp',`<div class="pills">${['3 Chặng (A→B→C)','4 Chặng (A→B→C→D)','Khép kín về A (Tổng bằng 0)'].map((t,i)=>`<button class="action" data-chain="${i}">${t}</button>`).join('')}</div><div id="chain-result" class="metric">Chọn một cấu hình để xem hợp vectơ.</div>`)
  },
  {
    tag:'06 · HĐ2 · SGK TRANG 51',
    title:'Hai lực cùng tác dụng tại một điểm',
    lead:'Hai con thuyền hoặc hai người cùng kéo một vật tại mút A.',
    note:'HĐ2 SGK trang 51: Cơ sở vật lí của quy tắc hình bình hành.',
    html:split('force-pull','Hai lực cùng gốc tác dụng lên vật',`<div class="solution">${step('Lực thứ nhất kéo theo hướng '+V('AB')+'.')}${step('Lực thứ hai kéo theo hướng '+V('AD')+'.')}${step('Lực tổng hợp kéo vật chuyển động dọc theo đường chéo '+V('AC')+'.')}</div>`)
  },
  {
    tag:'07 · QUY TẮC HÌNH BÌNH HÀNH · SGK TRANG 51',
    title:'Quy tắc hình bình hành (Chung gốc)',
    lead:'Nếu ABCD là hình bình hành thì tổng hai cạnh kề bằng đường chéo chung gốc.',
    note:'AB + AD = AC. Chú ý: Cả ba vectơ đều xuất phát từ đỉnh A.',
    html:split('parallelogram-rule','Hình bình hành ABCD với đường chéo AC = AB + AD',`<div class="solution">${formula('\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}')}${step('Chứng minh: Vì ABCD là hình bình hành nên '+V('AD')+' = '+V('BC')+'.')}${step('Thay vào ta được: '+V('AB')+' + '+V('AD')+' = '+V('AB')+' + '+V('BC')+' = '+V('AC')+'.')}</div>`)
  },
  {
    tag:'08 · LAB QUY TẮC HÌNH BÌNH HÀNH',
    title:'Góc giữa hai lực thay đổi hợp lực thế nào?',
    lead:'Thay đổi góc kẹp giữa hai lực có độ lớn 10 N để xem độ dài đường chéo.',
    note:'Khám phá độ lớn hợp lực: F = 2·F0·cos(θ/2). Khi θ = 0° thì max = 20 N; khi θ = 180° thì min = 0 N.',
    html:split('parallelogram-lab','Mô phỏng hình bình hành với góc co giãn',`<label class="control" for="pbh-angle">Góc giữa hai lực <output id="pbh-angle-val">60°</output><input id="pbh-angle" type="range" min="0" max="180" step="15" value="60"></label><div id="pbh-result" class="metric">Hợp lực đang tính...</div>`)
  },
  {
    tag:'09 · TÍNH CHẤT PHÉP CỘNG · SGK TRANG 52',
    title:'Tính chất giao hoán, kết hợp & vectơ-không',
    lead:'Phép cộng vectơ thỏa mãn các định luật toán học tương tự số thực.',
    note:'HĐ3 SGK trang 52: Giao hoán, kết hợp và cộng với vectơ-không.',
    html:`<div class="grid three"><div class="card"><h3>1. Giao hoán</h3><p>${m('\\vec a + \\vec b = \\vec b + \\vec a')}</p><p class="caption">Đổi thứ tự không đổi tổng.</p></div><div class="card"><h3>2. Kết hợp</h3><p>${m('(\\vec a + \\vec b) + \\vec c = \\vec a + (\\vec b + \\vec c)')}</p><p class="caption">Nhóm tùy ý theo cặp thuận tiện.</p></div><div class="card"><h3>3. Cộng với \\(\\vec0\\)</h3><p>${m('\\vec a + \\vec0 = \\vec0 + \\vec a = \\vec a')}</p><p class="caption">Vectơ-không đóng vai trò phần tử trung hòa.</p></div></div>`
  },
  {
    tag:'10 · VÍ DỤ 1 · SGK TRANG 52',
    title:'Biến đổi tổng vectơ trong hình bình hành',
    lead:'Cho hình bình hành ABCD. Chứng minh hai đẳng thức triệt tiêu.',
    note:'Ví dụ 1 SGK trang 52: AB + CD = 0 và BA + DA + AC = 0.',
    html:split('vd1-scene','Hình bình hành ABCD cho Ví dụ 1',`<div class="solution">${step('a) Vì ABCD là HBH nên CD và AB ngược hướng, cùng độ dài ⇒ '+V('CD')+' = -'+V('AB')+'.')}${step('Do đó: '+V('AB')+' + '+V('CD')+' = '+V('AB')+' + (-'+V('AB')+') = \\vec0.')}${step('b) Theo quy tắc hình bình hành: '+V('BA')+' + '+V('DA')+' = '+V('CA')+'.')}${step('Do đó: '+V('BA')+' + '+V('DA')+' + '+V('AC')+' = '+V('CA')+' + '+V('AC')+' = '+V('CC')+' = \\vec0.')}</div>`)
  },
  {
    tag:'11 · LUYỆN TẬP 1 · SGK TRANG 52',
    title:'Tính độ lớn tổng vectơ trong hình thoi',
    lead:'Hình thoi ABCD cạnh a có góc BAD = 60°. Tính độ lớn |AB + AD|.',
    note:'Luyện tập 1 SGK trang 52: Tính độ dài đường chéo chính trong hình thoi góc 60°.',
    html:split('lt1-scene','Hình thoi ABCD góc BAD 60 độ',`<div class="solution">${step('Theo quy tắc hình bình hành: '+V('AB')+' + '+V('AD')+' = '+V('AC')+'.')}${step('Suy ra độ lớn: |'+V('AB')+' + '+V('AD')+'| = |'+V('AC')+'| = AC.')}${step('Vì tam giác ABD có AB = AD = a và góc A = 60° nên là tam giác đều.')}${step('Đường chéo AC = 2·(a√3 / 2) = a√3.')}${formula('|\\overrightarrow{AB} + \\overrightarrow{AD}| = a\\sqrt3')}</div>`)
  },
  {
    tag:'12 · HĐ4 · SGK TRANG 52',
    title:'Hai lực kéo giằng co: Khái niệm Vectơ đối',
    lead:'Hai bạn kéo sợi dây cùng độ lớn nhưng ngược chiều.',
    note:'HĐ4 SGK trang 52: Định nghĩa hai vectơ đối nhau và vectơ đối của a.',
    html:split('opposite-vectors','Hai vectơ IA và IB đối nhau qua trung điểm I',`<div class="solution">${step('Hai vectơ cùng phương, ngược hướng và có cùng độ dài gọi là hai vectơ đối nhau.')}${step('Vectơ đối của '+m('\\vec a')+' được kí hiệu là '+m('-\\vec a')+'.')}${step('Tổng của hai vectơ đối luôn bằng vectơ-không: '+m('\\vec a + (-\\vec a) = \\vec0')+'.')}${step('Đặc biệt: vectơ đối của '+V('AB')+' là -'+V('AB')+' = '+V('BA')+'.')}</div>`)
  },
  {
    tag:'13 · ĐỊNH NGHĨA HIỆU CỦA HAI VECTƠ',
    title:'Phép trừ là phép cộng với vectơ đối',
    lead:'Hiệu của vectơ a và vectơ b là tổng của a với vectơ đối của b.',
    note:'Định nghĩa phép trừ SGK trang 53: a - b = a + (-b).',
    html:split('subtraction-def','Minh họa a - b = a + (-b)',`<div class="solution">${formula('\\vec a - \\vec b = \\vec a + (-\\vec b)')}${step('Bước 1: Giữ nguyên vectơ số bị trừ a.')}${step('Bước 2: Lấy vectơ đối của vectơ số trừ b là -b.')}${step('Bước 3: Thực hiện phép cộng nối tiếp a + (-b).')}</div>`)
  },
  {
    tag:'14 · QUY TẮC HIỆU · SGK TRANG 53',
    title:'Quy tắc hiệu: Ngọn trừ Gốc (Chung gốc)',
    lead:'Với ba điểm O, A, B bất kì, ta luôn có OB - OA = AB.',
    note:'Quy tắc cực kì thông dụng: trừ hai vectơ cùng gốc thì ngọn trước trừ ngọn sau.',
    html:split('diff-rule','Tam giác OAB với OB - OA = AB',`<div class="solution">${formula('\\overrightarrow{OB} - \\overrightarrow{OA} = \\overrightarrow{AB}')}${step('Gốc chung là điểm O.')}${step('Kết quả là vectơ nối từ ngọn của số trừ (A) đến ngọn của số bị trừ (B).')}${step('Mẹo ghi nhớ: "Hiệu chung gốc = Ngọn trừ Ngọn, đuôi sau đầu trước".')}</div>`)
  },
  {
    tag:'15 · VÍ DỤ 2 · SGK TRANG 53',
    title:'Quy tắc hiệu trong tam giác ABC',
    lead:'Chứng minh rằng: AB - AC = CB.',
    note:'Ví dụ 2 SGK trang 53: Ứng dụng trực tiếp quy tắc hiệu.',
    html:split('vd2-scene','Tam giác ABC với AB - AC = CB',`<div class="solution">${step('Vế trái có gốc chung là đỉnh A.')}${step('Áp dụng quy tắc hiệu: '+V('AB')+' - '+V('AC')+' = '+V('CB')+'.')}${step('Cách biến đổi đại số: '+V('AB')+' - '+V('AC')+' = '+V('AB')+' + '+V('CA')+' = '+V('CA')+' + '+V('AB')+' = '+V('CB')+'.')}</div>`)
  },
  {
    tag:'16 · HỆ THỨC TRUNG ĐIỂM · SGK TRANG 53',
    title:'Ví dụ 3a: Tính chất trung điểm đoạn thẳng',
    lead:'I là trung điểm của AB khi và chỉ khi IA + IB = 0.',
    note:'Ví dụ 3a SGK trang 53: Hệ thức trung điểm và mở rộng cho điểm M bất kì: MA + MB = 2MI.',
    html:split('midpoint-rule','Đoạn thẳng AB với trung điểm I và điểm M tùy ý',`<div class="solution">${formula('\\overrightarrow{IA} + \\overrightarrow{IB} = \\vec0')}${formula('\\overrightarrow{MA} + \\overrightarrow{MB} = 2\\overrightarrow{MI}')}${step('Với mọi điểm M bất kì trong mặt phẳng, chèn điểm I vào vế trái.')}${step('MA + MB = (MI + IA) + (MI + IB) = 2MI + (IA + IB) = 2MI + 0 = 2MI.')}</div>`)
  },
  {
    tag:'17 · HỆ THỨC TRỌNG TÂM · SGK TRANG 53',
    title:'Ví dụ 3b: Tính chất trọng tâm tam giác',
    lead:'G là trọng tâm tam giác ABC khi và chỉ khi GA + GB + GC = 0.',
    note:'Ví dụ 3b SGK trang 53: Hệ thức trọng tâm và mở rộng cho điểm M bất kì: MA + MB + MC = 3MG.',
    html:split('centroid-rule','Tam giác ABC với trọng tâm G và các trung tuyến',`<div class="solution">${formula('\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec0')}${formula('\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} = 3\\overrightarrow{MG}')}${step('Mở rộng: Tâm của hệ 3 đỉnh triệt tiêu tổng vectơ khoảng cách.')}${step('Đây là công cụ then chốt để giải các bài toán cực trị hình học và tìm quỹ tích điểm.')}</div>`)
  },
  {
    tag:'18 · LUYỆN TẬP 2 · SGK TRANG 53',
    title:'Đoạn nối hai trung điểm trong tứ giác',
    lead:'Tứ giác ABCD có M, N là trung điểm của AB và CD. Chứng minh AC + BD = 2MN.',
    note:'Luyện tập 2 SGK trang 53: Kĩ thuật chèn hai điểm trung gian M, N.',
    html:split('lt2-scene','Tứ giác ABCD với hai trung điểm M và N',`<div class="solution">${step('Chèn hai điểm M và N vào các vectơ ở vế trái:')}${step(V('AC')+' = '+V('AM')+' + '+V('MN')+' + '+V('NC'))}${step(V('BD')+' = '+V('BM')+' + '+V('MN')+' + '+V('ND'))}${step('Cộng lại: '+V('AC')+' + '+V('BD')+' = 2'+V('MN')+' + ('+V('AM')+'+'+V('BM')+') + ('+V('NC')+'+'+V('ND')+') = 2'+V('MN')+'.')}</div>`)
  },
  {
    tag:'19 · VÍ DỤ 4 · SGK TRANG 53–54',
    title:'Hợp lực của hai lực 10 N góc 60°',
    lead:'Hai lực đồng quy F1 và F2 có cùng độ lớn 10 N, góc giữa chúng là 60°.',
    note:'Ví dụ 4 SGK trang 53–54: Tính độ lớn hợp lực theo hình thoi.',
    html:split('vd4-scene','Hai vectơ lực 10N hợp góc 60 độ',`<div class="solution">${step('Dựng hình thoi tạo bởi hai vectơ lực F1 và F2.')}${step('Đường chéo hợp lực chia góc 60° thành hai góc 30°.')}${step('Độ lớn hợp lực: F = 2 · 10 · cos(30°) = 20 · (√3 / 2) = 10√3 N.')}${formula('|\\vec F| = 10\\sqrt3\\text{ N} \\approx 17{,}32\\text{ N}')}</div>`)
  },
  {
    tag:'20 · VẬN DỤNG KÉO PHÁO · SGK TRANG 54',
    title:'Hào khí Điện Biên Phủ: Kéo pháo lên dốc 30°',
    lead:'Khẩu pháo 2 260 kg trên dốc nghiêng 30°. Cần bao nhiêu chiến sĩ kéo?',
    note:'Vận dụng SGK trang 54: Phân tích lực kéo pháo, triệt tiêu thành phần trượt dốc Px.',
    html:split('cannon-scene','Sơ đồ phân tích lực kéo pháo Điện Biên Phủ',`<div class="solution">${step('1. Trọng lực khẩu pháo: P = m·g = 2 260 × 9,8 = 22 148 N.')}${step('2. Thành phần kéo pháo trượt xuống dốc: Px = P·sin(30°) = 22 148 × 0,5 = 11 074 N.')}${step('3. Mỗi chiến sĩ kéo trung bình 100 N dọc theo dốc.')}${step('4. Số người tối thiểu = 11 074 / 100 = 110,74 ⇒ Cần ít nhất 111 chiến sĩ!')}</div>`)
  },
  {
    tag:'21 · MÔ PHỎNG SƯỜN DỐC KÉO PHÁO',
    title:'Phòng thí nghiệm lực trượt trên mặt dốc',
    lead:'Kéo thay đổi góc dốc để thấy lực kéo cần thiết biến thiên theo hàm sin.',
    note:'Tương tác trực quan: dốc càng nghiêng thì Px càng lớn, đòi hỏi càng nhiều chiến sĩ.',
    html:split('incline-lab','Mô phỏng động góc dốc và phân tích lực',`<label class="control" for="slope-angle">Góc nghiêng của dốc <output id="slope-angle-val">30°</output><input id="slope-angle" type="range" min="5" max="60" step="5" value="30"></label><div id="slope-result" class="metric">Lực trượt đang tính...</div>`)
  },
  {
    tag:'22 · BÀI TẬP 4.6 & 4.7 · SGK TRANG 54',
    title:'Đẳng thức bốn điểm & Hình bình hành',
    lead:'Bài 4.6: AB + CD = AD + CB · Bài 4.7: AB + AD + CA = 0.',
    note:'Bài tập 4.6 và 4.7 SGK trang 54: Rèn luyện kĩ thuật biến đổi quy tắc cộng và trừ.',
    html:`<div class="grid two"><div class="card"><h3>Bài 4.6: Đẳng thức 4 điểm</h3><p>${m('\\overrightarrow{AB} + \\overrightarrow{CD} = \\overrightarrow{AD} + \\overrightarrow{CB}')}</p><p class="caption">Chuyển vế: AB - AD = CB - CD ⇔ DB = DB (luôn đúng!).</p></div><div class="card"><h3>Bài 4.7: Hình bình hành</h3><p>${m('\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{CA} = \\vec0')}</p><p class="caption">Áp dụng HBH: AB + AD = AC ⇒ AC + CA = AA = 0.</p></div></div>`
  },
  {
    tag:'23 · BÀI TẬP 4.8 & 4.9 · SGK TRANG 54',
    title:'Tâm hình bình hành & Hợp lực góc 120°',
    lead:'Bài 4.8: Tâm O triệt tiêu 4 vectơ đỉnh · Bài 4.9: F1 = 3 N, F2 = 2 N, góc 120°.',
    note:'Bài 4.8 và 4.9 SGK trang 54: Tính tổng từ tâm HBH và định lí côsin tính hợp lực.',
    html:`<div class="grid two"><div class="card"><h3>Bài 4.8: Tâm hình bình hành</h3><p>${m('\\sum_{k=A,B,C,D} \\overrightarrow{OK} = \\vec0')}</p><p class="caption">(OA + OC) + (OB + OD) = 0 + 0 = 0. Với M bất kì: MA + MB + MC + MD = 4MO.</p></div><div class="card"><h3>Bài 4.9: Hợp lực góc 120°</h3><p>${m('F = \\sqrt{3^2 + 2^2 + 2\\cdot 3\\cdot 2\\cos 120^\\circ} = \\sqrt7\\text{ N}')}</p><p class="caption">Hợp lực có độ lớn xấp xỉ 2,65 N.</p></div></div>`
  },
  {
    tag:'24 · BÀI TẬP 4.10 · SGK TRANG 54',
    title:'Hai con tàu sang sông: Ai cập bến trước?',
    lead:'Cùng vận tốc riêng v0, cùng góc lái α so với bờ sông xiết.',
    note:'Bài 4.10 SGK trang 54: Phân tích hình chiếu vận tốc lên phương vuông góc với bờ.',
    html:split('boat-race','Hai con tàu bẻ cùng góc lái α qua sông',`<div class="solution">${step('Vận tốc của tàu đối với bờ: v = v_riêng + v_nước.')}${step('Dòng nước chảy dọc bờ nên không có thành phần vận tốc nào giúp tàu sang sông.')}${step('Vận tốc theo phương vuông góc với bờ là: vy = v0 · sin(α).')}${step('Thời gian sang sông t = d / (v0 · sin α). Vì v0 và α giống nhau nên cả hai tàu sang bờ cùng lúc!')}</div>`)
  },
  {
    tag:'25 · PHÒNG PHẢN BIỆN & SỬA SAI',
    title:'4 Sai lầm kinh điển cần tránh',
    lead:'Nhận diện ngay những cạm bẫy học sinh hay mắc phải nhất.',
    note:'Phản biện các kết luận vội vã: cộng độ dài, nhầm thứ tự quy tắc hiệu, quên vectơ-không.',
    html:`<div class="grid two"><div class="mistake"><span style="color:#f43f5e;font-weight:bold;">❌ SAI:</span> |a + b| = |a| + |b|<br><span style="color:#10b981;font-weight:bold;">✓ ĐÚNG:</span> |a + b| ≤ |a| + |b|. Dấu bằng chỉ xảy ra khi a, b cùng hướng!</div><div class="mistake"><span style="color:#f43f5e;font-weight:bold;">❌ SAI:</span> OB - OA = BA<br><span style="color:#10b981;font-weight:bold;">✓ ĐÚNG:</span> OB - OA = AB (ngọn bị trừ trừ ngọn trừ, ngọn B đứng sau thì viết trước).</div><div class="mistake"><span style="color:#f43f5e;font-weight:bold;">❌ SAI:</span> AB + BA = 0 (số 0)<br><span style="color:#10b981;font-weight:bold;">✓ ĐÚNG:</span> AB + BA = AA = 0 (vectơ-không, có mũi tên).</div><div class="mistake"><span style="color:#f43f5e;font-weight:bold;">❌ SAI:</span> I là trung điểm AB ⇒ IA = IB<br><span style="color:#10b981;font-weight:bold;">✓ ĐÚNG:</span> IA = -IB hay IA + IB = 0 (vì hai vectơ ngược hướng).</div></div>`
  },
  {
    tag:'26 · HOẠT ĐỘNG NHÓM · 3 PHÚT',
    title:'Thử thách giải mã: Phân tích lực trong thực tế',
    lead:'Thảo luận nhóm 3 phút: Nêu 1 ví dụ trong đời sống cần dùng phép cộng hoặc trừ vectơ.',
    note:'3 phút thảo luận: kéo co, máy bay bay đón gió, cano vượt thác, giàn treo đèn chùm.',
    html:`<div class="split"><div class="solution">${step('1. Xác định các vectơ lực / vận tốc tham gia vào bài toán.')}${step('2. Vận dụng quy tắc 3 điểm hoặc hình bình hành để dựng vectơ tổng.')}${step('3. Đại diện nhóm trình bày cách tính toán và bảo vệ kết quả.')}</div><div class="card timer"><output id="group-time">03:00</output><div class="pills"><button class="action primary" id="group-start">Bắt đầu</button><button class="action" id="group-pause">Tạm dừng</button><button class="action" id="group-reset">Đặt lại</button></div><p>Chuyển slide hoặc ẩn tab: đồng hồ tự động tạm dừng.</p></div></div>`
  },
  {
    tag:'27 · ĐẤU TRƯỜNG QUIZ · 12 CÂU HỎI',
    title:'Kiểm tra tốc độ & Độ chính xác',
    lead:'Chọn phương án đúng nhất. Có âm thanh phản hồi, giải thích và pháo hoa khi đạt điểm tối đa.',
    note:'12 câu hỏi trắc nghiệm phủ trọn nhận biết, thông hiểu, vận dụng Bài 8.',
    html:'<div class="quiz-layout" id="quiz"></div>'
  },
  {
    tag:'28 · TỔNG KẾT & BẢN ĐỒ NĂNG LỰC',
    title:'Làm chủ 4 Quy tắc vàng của Vectơ',
    lead:'Đánh dấu năng lực em đã chinh phục thành công hôm nay.',
    note:'Checklist tự đánh giá: Quy tắc 3 điểm, hình bình hành, quy tắc hiệu, hệ thức trung điểm - trọng tâm.',
    html:`<div class="checklist">${['Biết dựng và tính tổng của hai vectơ bằng quy tắc ba điểm nối tiếp.','Vận dụng thành thạo quy tắc hình bình hành để tổng hợp hai lực đồng quy.','Sử dụng chính xác quy tắc hiệu "ngọn trừ gốc" trong biến đổi đẳng thức.','Ứng dụng thuần thục hệ thức trung điểm và trọng tâm vào bài toán vật lí thực tiễn.'].map(t=>`<button class="check" aria-pressed="false"><span class="check-icon">□</span>${t}</button>`).join('')}</div><div class="links"><a class="action primary" href="/luyen/bai-08" target="_blank" rel="noopener">Luyện tập câu hỏi & Đấu trường game</a><a class="action" href="/sgk/bai-08.html" target="_blank" rel="noopener">Đọc SGK & Lời giải bài 4.6–4.10</a></div>`}
  }
];
