// Interactive SVG diagrams and labs for Bài 8: Tổng và hiệu của hai vectơ
const sub=(a,b)=>[b[0]-a[0],b[1]-a[1]];
const close=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1])<1e-8;

function diagram(id,points,arrows=[],options={}){
  const svg=$('#'+id);if(!svg)return;
  let xs=Object.values(points).map(p=>p[0]),ys=Object.values(points).map(p=>p[1]);
  const xmin=options.grid?0:Math.min(...xs),xmax=options.grid?8:Math.max(...xs),ymin=options.grid?0:Math.min(...ys),ymax=options.grid?8:Math.max(...ys);
  const scale=Math.min(460/(xmax-xmin||1),240/(ymax-ymin||1));
  const ox=310-(xmin+xmax)*scale/2,oy=170+(ymin+ymax)*scale/2;
  const xy=p=>[ox+p[0]*scale,oy-p[1]*scale];
  const colors=['#38bdf8','#fbbf24','#f43f5e','#10b981','#818cf8'];

  let html=`<defs>${colors.map(c=>`<marker id="${id}-${c.slice(1)}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z" fill="${c}"/></marker>`).join('')}</defs>`;

  if(options.polygon){
    const pts=options.polygon.map(k=>xy(points[k]).join(',')).join(' ');
    html+=`<polygon points="${pts}" fill="rgba(56, 189, 248, 0.05)" stroke="#334155" stroke-width="2"/>`;
  }

  // Draw aux dashed lines
  if(options.dashed){
    for(const [a,b] of options.dashed){
      const p=xy(points[a]),q=xy(points[b]);
      html+=`<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" stroke="#475569" stroke-width="2" stroke-dasharray="5 5"/>`;
    }
  }

  // Draw arrows
  for(const [i,item] of arrows.entries()){
    const [a,b,color=colors[i%colors.length],dash='']=item;
    if(!points[a]||!points[b])continue;
    const p=xy(points[a]),q=xy(points[b]);
    html+=`<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" stroke="${color}" stroke-width="4" marker-end="url(#${id}-${color.slice(1)})" ${dash?'stroke-dasharray="6 4"':''}/>`;
  }

  // Draw points & labels
  for(const [name,p] of Object.entries(points)){
    const [x,y]=xy(p);
    html+=`<circle cx="${x}" cy="${y}" r="4.5" fill="#f8fafc"/>`;
    if(!options.hideLabels){
      html+=`<text x="${x+9}" y="${y-10}" font-weight="bold" font-size="18">${esc(name)}</text>`;
    }
  }

  if(options.label){
    html+=`<text x="310" y="325" text-anchor="middle" class="small" fill="#94a3b8">${esc(options.label)}</text>`;
  }
  svg.innerHTML=html;
}

// 1. Cover
diagram('cover',{A:[0,0],B:[4,1],C:[7,5]},[['A','B','#38bdf8'],['B','C','#10b981'],['A','C','#fbbf24','dash']],{label:'AB + BC = AC (Quy tắc nối tiếp)'});

// 2. River Boat
diagram('river-boat',{O:[0,0],T:[0,4],N:[5,0],R:[5,4]},[['O','T','#38bdf8'],['O','N','#10b981'],['O','R','#fbbf24']],{dashed:[['T','R'],['N','R']],label:'Vectơ vận tốc thực tế: v = v_tàu + v_nước'});

// 3. Triangle Add
diagram('triangle-add',{A:[0,0],B:[5,0],C:[7,4]},[['A','B','#38bdf8'],['B','C','#10b981'],['A','C','#fbbf24']],{label:'HĐ1: AB + BC = AC'});

// 4. Independent Root
diagram('independent-root',{A:[0,0],B:[4,1],C:[6,4],A1:[0,6],B1:[4,7],C1:[6,10]},[['A','B','#38bdf8'],['B','C','#10b981'],['A','C','#fbbf24'],['A1','B1','#38bdf8'],['B1','C1','#10b981'],['A1','C1','#fbbf24']],{dashed:[['A','A1'],['C','C1']],label:'Vectơ tổng AC và A\'C\' hoàn toàn bằng nhau'});

// 5. Three Points
diagram('three-points',{A:[1,1],B:[5,2],C:[8,6]},[['A','B','#38bdf8'],['B','C','#10b981'],['A','C','#fbbf24']],{label:'Quy tắc ba điểm: Nối ngọn B vào gốc B'});

// 6. Chain Lab
function renderChain(mode){
  if(mode===0){
    diagram('chain-lab',{A:[0,0],B:[3,1],C:[6,4]},[['A','B','#38bdf8'],['B','C','#10b981'],['A','C','#fbbf24']],{label:'3 điểm: AB + BC = AC'});
    $('#chain-result').innerHTML='<strong>AB + BC = AC</strong><br><small>2 chặng nối tiếp.</small>';
  } else if(mode===1){
    diagram('chain-lab',{A:[0,0],B:[2,2],C:[5,3],D:[7,1]},[['A','B','#38bdf8'],['B','C','#10b981'],['C','D','#818cf8'],['A','D','#fbbf24']],{label:'4 điểm: AB + BC + CD = AD'});
    $('#chain-result').innerHTML='<strong>AB + BC + CD = AD</strong><br><small>3 chặng nối tiếp liên tục.</small>';
  } else {
    diagram('chain-lab',{A:[0,0],B:[3,3],C:[6,1]},[['A','B','#38bdf8'],['B','C','#10b981'],['C','A','#f43f5e']],{label:'Khép kín: AB + BC + CA = AA = 0'});
    $('#chain-result').innerHTML='<strong>AB + BC + CA = AA = \\(\\vec0\\)</strong><br><small>Đa giác khép kín có tổng bằng vectơ-không.</small>';
  }
}
$$('[data-chain]').forEach(b=>b.onclick=()=>renderChain(Number(b.dataset.chain)));
renderChain(0);

// 7. Force Pull
diagram('force-pull',{A:[0,0],B:[5,0],D:[3,4],C:[8,4]},[['A','B','#38bdf8'],['A','D','#10b981'],['A','C','#fbbf24']],{dashed:[['B','C'],['D','C']],label:'Hai lực kéo đồng quy F1 và F2 tạo nên hợp lực F'});

// 8. Parallelogram Rule
diagram('parallelogram-rule',{A:[0,0],B:[6,0],D:[2,4],C:[8,4]},[['A','B','#38bdf8'],['A','D','#10b981'],['A','C','#fbbf24']],{polygon:['A','B','C','D'],label:'Quy tắc HBH: AB + AD = AC'});

// 9. Parallelogram Lab (Interactive slider)
function updatePBHLab(){
  const deg=Number($('#pbh-angle').value);
  $('#pbh-angle-val').textContent=deg+'°';
  const rad=deg*Math.PI/180;
  const F1=10, F2=10;
  const Dx=F2*Math.cos(rad), Dy=F2*Math.sin(rad);
  const Cx=F1+Dx, Cy=Dy;
  const resF=Math.sqrt(F1*F1 + F2*F2 + 2*F1*F2*Math.cos(rad));

  diagram('parallelogram-lab',{A:[0,0],B:[F1,0],D:[Dx,Dy],C:[Cx,Cy]},[['A','B','#38bdf8'],['A','D','#10b981'],['A','C','#fbbf24']],{dashed:[['B','C'],['D','C']],label:`Góc θ = ${deg}° · Hợp lực F = ${resF.toFixed(2)} N`});
  $('#pbh-result').innerHTML=`<strong>Hợp lực |F| = ${resF.toFixed(2)} N</strong><br><small>${deg===0?'Cực đại F = 20 N (cùng hướng)':deg===180?'Cực tiểu F = 0 N (ngược hướng triệt tiêu)':`F = 2·10·cos(${deg/2}°) = ${(20*Math.cos(rad/2)).toFixed(2)} N`}</small>`;
}
if($('#pbh-angle')){
  $('#pbh-angle').oninput=updatePBHLab;
  updatePBHLab();
}

// 10. Ví dụ 1
diagram('vd1-scene',{A:[0,0],B:[6,0],C:[8,4],D:[2,4]},[['A','B','#38bdf8'],['C','D','#f43f5e'],['A','C','#fbbf24']],{polygon:['A','B','C','D'],label:'Ví dụ 1: AB + CD = 0 và BA + DA + AC = 0'});

// 11. Luyện tập 1
diagram('lt1-scene',{A:[0,0],B:[5,0],D:[2.5,4.33],C:[7.5,4.33]},[['A','B','#38bdf8'],['A','D','#10b981'],['A','C','#fbbf24']],{polygon:['A','B','C','D'],label:'Hình thoi cạnh a, góc 60°: AC = a√3'});

// 12. Opposite Vectors
diagram('opposite-vectors',{I:[0,0],A:[-4,0],B:[4,0]},[['I','A','#38bdf8'],['I','B','#f43f5e']],{label:'Hai vectơ đối: IA + IB = 0'});

// 13. Subtraction Def
diagram('subtraction-def',{O:[0,0],A:[4,2],B:[2,4],minusB:[-2,-4],Res:[2,-2]},[['O','A','#38bdf8'],['O','B','#10b981'],['O','minusB','#f43f5e','dash'],['O','Res','#fbbf24']],{label:'a - b = a + (-b)'});

// 14. Diff Rule
diagram('diff-rule',{O:[0,0],A:[3,4],B:[6,1]},[['O','A','#38bdf8'],['O','B','#10b981'],['A','B','#fbbf24']],{label:'OB - OA = AB (ngọn trừ gốc)'});

// 15. Ví dụ 2
diagram('vd2-scene',{A:[0,0],B:[5,1],C:[2,4]},[['A','B','#38bdf8'],['A','C','#10b981'],['C','B','#fbbf24']],{label:'AB - AC = CB'});

// 16. Midpoint Rule
diagram('midpoint-rule',{M:[2,5],I:[3,1],A:[0,1],B:[6,1]},[['M','A','#38bdf8'],['M','B','#10b981'],['M','I','#fbbf24'],['I','A','#475569','dash'],['I','B','#475569','dash']],{label:'MA + MB = 2MI (I là trung điểm AB)'});

// 17. Centroid Rule
diagram('centroid-rule',{A:[2,6],B:[0,0],C:[7,1],G:[3,2.33],M:[3.5,0.5]},[['G','A','#38bdf8'],['G','B','#10b981'],['G','C','#818cf8']],{dashed:[['A','M']],label:'GA + GB + GC = 0 (G là trọng tâm ABC)'});

// 18. Luyện tập 2
diagram('lt2-scene',{A:[0,4],B:[2,6],C:[7,3],D:[5,0],M:[1,5],N:[6,1.5]},[['A','C','#38bdf8'],['B','D','#10b981'],['M','N','#fbbf24']],{dashed:[['A','B'],['C','D']],label:'AC + BD = 2MN'});

// 19. Ví dụ 4
diagram('vd4-scene',{O:[0,0],F1:[6,0],F2:[3,5.19],F:[9,5.19]},[['O','F1','#38bdf8'],['O','F2','#10b981'],['O','F','#fbbf24']],{dashed:[['F1','F'],['F2','F']],label:'F1 = 10N, F2 = 10N, θ = 60° ⇒ F = 10√3 N ≈ 17,32 N'});

// 20. Cannon Scene
diagram('cannon-scene',{O:[0,0],L:[7,0],P:[4,0],G:[3.5,2],Px:[2.5,1.4],Py:[4,0.3],Fk:[5.5,3.2]},[['G','P','#f43f5e'],['G','Px','#fbbf24'],['G','Fk','#10b981']],{dashed:[['G','Py']],label:'Trọng lực P, thành phần trượt Px và lực kéo Fk'});

// 21. Incline Lab (Interactive slider)
function updateSlopeLab(){
  const deg=Number($('#slope-angle').value);
  $('#slope-angle-val').textContent=deg+'°';
  const rad=deg*Math.PI/180;
  const mass=2260; // kg
  const g=9.8;
  const P=mass*g;
  const Px=P*Math.sin(rad);
  const soldiers=Math.ceil(Px/100);

  const L=8;
  const H=L*Math.sin(rad);
  const W=L*Math.cos(rad);

  diagram('incline-lab',{O:[0,0],B:[W,0],T:[W,H],G:[W/2,H/2+0.5],Px:[W/2-1.5*Math.cos(rad),H/2+0.5-1.5*Math.sin(rad)],Fk:[W/2+2*Math.cos(rad),H/2+0.5+2*Math.sin(rad)]},[['G','Px','#fbbf24'],['G','Fk','#10b981']],{polygon:['O','B','T'],label:`Dốc ${deg}° · Lực tụt dốc Px = ${Px.toFixed(0)} N`});

  $('#slope-result').innerHTML=`<strong>Lực trượt: ${Px.toFixed(0)} N · Cần tối thiểu ${soldiers} chiến sĩ</strong><br><small>Góc càng dốc thì P·sin(α) càng lớn!</small>`;
}
if($('#slope-angle')){
  $('#slope-angle').oninput=updateSlopeLab;
  updateSlopeLab();
}

// 22. Boat Race
diagram('boat-race',{A:[0,0],B:[0,5],T1:[3,5],T2:[1,5]},[['A','T1','#38bdf8'],['A','T2','#10b981']],{label:'Cùng vy = v0·sinα ⇒ t = d/vy như nhau, cùng sang bờ!'});

// Group activity timer
let timerId, timeRemaining = 180;
const timerEl = $('#group-time');
function updateTimer(){
  const m = Math.floor(timeRemaining / 60);
  const s = timeRemaining % 60;
  if(timerEl) timerEl.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}
if($('#group-start')){
  $('#group-start').onclick=()=>{
    clearInterval(timerId);
    timerId=setInterval(()=>{
      if(timeRemaining>0){ timeRemaining--; updateTimer(); }
      else { clearInterval(timerId); sound('good'); notify('Hết 3 phút thảo luận nhóm!'); }
    },1000);
  };
  $('#group-pause').onclick=()=>clearInterval(timerId);
  $('#group-reset').onclick=()=>{ clearInterval(timerId); timeRemaining=180; updateTimer(); };
}

// Checkboxes checklist
$$('.check').forEach(b=>b.onclick=()=>{
  const val = b.getAttribute('aria-pressed')==='true';
  b.setAttribute('aria-pressed', String(!val));
  b.querySelector('.check-icon').textContent = !val ? '☑' : '□';
  sound();
});
