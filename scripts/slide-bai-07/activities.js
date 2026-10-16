// Geometry is computed from the same points used for labels, answers and figures.
const sub=(a,b)=>[b[0]-a[0],b[1]-a[1]];
const close=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1])<1e-8;
function classify(u,v){
 const zu=Math.hypot(...u)<1e-8,zv=Math.hypot(...v)<1e-8;
 if(zu||zv)return {parallel:true,same:true,equal:zu&&zv,zero:true};
 const parallel=Math.abs(u[0]*v[1]-u[1]*v[0])<1e-8;
 return {parallel,same:parallel&&(u[0]*v[0]+u[1]*v[1]>0),equal:close(u,v),zero:false};
}
const squarePoints={A:[0,0],B:[4,0],C:[4,4],D:[0,4],O:[2,2]};
function vectorGroups(points){const groups=[];for(const a of Object.keys(points))for(const b of Object.keys(points)){if(a===b)continue;const v=sub(points[a],points[b]);const found=groups.find(g=>close(g.v,v));if(found)found.names.push(a+b);else groups.push({v,names:[a+b]});}return groups;}
const squareGroups=vectorGroups(squarePoints);
const hexPoints=Object.fromEntries('ABCDEF'.split('').map((c,i)=>[c,[Math.cos(i*Math.PI/3)*3,Math.sin(i*Math.PI/3)*3]]));hexPoints.O=[0,0];
function diagram(id,points,arrows=[],options={}){
 const svg=$('#'+id);if(!svg)return;
 let xs=Object.values(points).map(p=>p[0]),ys=Object.values(points).map(p=>p[1]);
 const xmin=options.grid?0:Math.min(...xs),xmax=options.grid?8:Math.max(...xs),ymin=options.grid?0:Math.min(...ys),ymax=options.grid?8:Math.max(...ys);
 const scale=Math.min(460/(xmax-xmin||1),245/(ymax-ymin||1));
 const ox=310-(xmin+xmax)*scale/2,oy=175+(ymin+ymax)*scale/2;
 const xy=p=>[ox+p[0]*scale,oy-p[1]*scale];
 const line=(a,b,color,width=4,marker=true,dash='')=>{const p=xy(a),q=xy(b);return `<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" stroke="${color}" stroke-width="${width}" ${marker?`marker-end="url(#${id}-${color.slice(1)})"`:''} ${dash?'stroke-dasharray="6 5"':''}/>`;};
 const colors=['#79e3d1','#ffd28b','#ffacbd','#b3c5d8'];
 let html=`<defs>${colors.map(c=>`<marker id="${id}-${c.slice(1)}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z" fill="${c}"/></marker>`).join('')}</defs>`;
 if(options.grid){for(let i=0;i<=8;i++){html+=line([i,0],[i,8],'#b3c5d8',.4,false)+line([0,i],[8,i],'#b3c5d8',.4,false);const a=xy([i,0]),b=xy([0,i]);html+=`<text class="small" x="${a[0]}" y="${a[1]+24}" text-anchor="middle">${i}</text><text class="small" x="${b[0]-25}" y="${b[1]+5}">${i}</text>`;}}
 if(options.polygon){const pts=options.polygon.map(k=>xy(points[k]).join(',')).join(' ');html+=`<polygon points="${pts}" fill="#79e3d108" stroke="#b3c5d860" stroke-width="2"/>`;}
 for(const [i,item]of arrows.entries()){const [a,b,color=colors[i%3]]=item;if(!points[a]||!points[b])continue;const p=points[a],q=points[b];if(close(p,q)){const [x,y]=xy(p);html+=`<circle cx="${x}" cy="${y}" r="11" fill="none" stroke="${color}" stroke-width="3"/>`;}
 else{if(options.lines){const d=sub(p,q);html+=line([p[0]-d[0]*3,p[1]-d[1]*3],[q[0]+d[0]*3,q[1]+d[1]*3],color,1,false,true);}html+=line(p,q,color);}}
 for(const [name,p]of Object.entries(points)){const [x,y]=xy(p);html+=`<circle cx="${x}" cy="${y}" r="4" fill="#eef5ff"/><text x="${x+9}" y="${y+(name==='C'||name==='D'?-13:24)}" font-size="20">${esc(name)}</text>`;}
 if(options.label)html+=`<text x="310" y="340" text-anchor="middle" class="small">${esc(options.label)}</text>`;
 svg.innerHTML=html;
}
const rect={A:[0,3],B:[5,3],C:[5,0],D:[0,0]};
diagram('cover',{A:[0,0],B:[4,2],C:[1,3],D:[3,7]},[['A','B'],['C','D']]);
diagram('ship',{A:[0,10],H:[10,10],B:[10,0]},[['A','H'],['H','B'],['A','B','#ffacbd']],{label:'Đi thẳng AB: Đông Nam · 10√2 km'});
diagram('definition',{A:[0,0],B:[5,2]},[['A','B']],{label:'Gốc A → Ngọn B'});
diagram('square-length',squarePoints,[['A','C'],['C','A','#ffd28b'],['B','D','#ffacbd']],{polygon:['A','B','C','D'],label:'Cạnh 1 · Đường chéo √2'});
const tri={A:[2,Math.sqrt(12)],B:[0,0],C:[4,0]};let triChosen=new Set();
function drawTriangle(){diagram('triangle',tri,[...triChosen].map(s=>[s[0],s[1]]),{polygon:['A','B','C'],label:'Mỗi cạnh dài a · Mỗi chiều là một vectơ'});$('#triangle-result').textContent=`Đã chọn ${triChosen.size}/6 mũi tên. ${triChosen.size===6?'Đủ 6 vectơ dài a; không chọn AA, BB, CC vì độ dài bằng 0.':''}`;}
$$('[data-triangle]').forEach(b=>b.onclick=()=>{const s=b.dataset.triangle;triChosen.has(s)?triChosen.delete(s):triChosen.add(s);b.setAttribute('aria-pressed',String(triChosen.has(s)));drawTriangle();});drawTriangle();
diagram('road',{A:[0,0],B:[5,0],C:[0,1],D:[5,1],E:[5,3],F:[0,3]},[['A','B'],['C','D'],['E','F','#ffacbd']],{label:'Các làn song song · Có hai chiều chuyển động'});
function reverse(i){diagram('reverse',{A:[0,0],B:[5,1]},i?[['B','A']]:[['A','B']]);$('#reverse-result').innerHTML=V(i?'BA':'AB')+' · Độ dài không đổi';}
$$('[data-reverse]').forEach(b=>b.onclick=()=>reverse(Number(b.dataset.reverse)));reverse(0);
function relation(i){const scenarios=[
 [{A:[0,0],B:[4,1],C:[0,2],D:[4,3]},'Cùng phương, cùng hướng, cùng độ dài ⇒ bằng nhau.'],
 [{A:[0,0],B:[2,1],C:[3,1.5],D:[5,2.5]},'Hai giá trùng nhau; cùng hướng nhưng khác độ dài ⇒ chưa bằng nhau.'],
 [{A:[0,0],B:[4,1],C:[4,3],D:[0,2]},'Cùng phương, ngược hướng. Ở hình này còn cùng độ dài.'],
 [{A:[0,0],B:[4,0],C:[2,-1],D:[2,3]},'Không cùng phương ⇒ không gọi là cùng hướng hoặc ngược hướng.'],
 [{A:[0,0],B:[0,0],C:[1,1],D:[4,3]},'AB là vectơ-không: quy ước cùng phương và cùng hướng với CD. Không vẽ một giá duy nhất cho AB.']
 ];const [pts,text]=scenarios[i];diagram('relation',pts,[['A','B'],['C','D']],{lines:i!==4});$('#relation-result').textContent=text;}
$$('[data-relation]').forEach(b=>b.onclick=()=>relation(Number(b.dataset.relation)));relation(0);
diagram('same-direction',{A:[0,0],B:[2,1],C:[0,2],D:[4,4]},[['A','B'],['C','D']],{label:'Độ dài CD gấp 2 AB'});
function rotate(){const deg=Number($('#rotate-angle').value),r=deg*Math.PI/180;$('#rotate-value').textContent=deg+'°';const pts={A:[0,0],B:[4,0],C:[2,4],D:[2+4*Math.cos(r),4+4*Math.sin(r)]};diagram('rotate',pts,[['A','B'],['C','D']]);$('#rotate-result').textContent=deg===0||deg===360?'Cùng hướng + cùng độ dài ⇒ bằng nhau.':deg===180?'Cùng độ dài nhưng ngược hướng ⇒ không bằng nhau.':'Cùng độ dài, khác hướng ⇒ không bằng nhau.';}
$('#rotate-angle').oninput=rotate;rotate();
const missions=[
 {A:[1,1],B:[5,3],C:[2,4],target:[6,6],text:'Đặt D để CD bằng AB. A(1;1), B(5;3), C(2;4).'},
 {A:[1,2],B:[5,2],C:[6,5],target:[2,5],text:'Sửa CD để ngược hướng và cùng độ dài với AB.'},
 {A:[1,1],B:[5,3],C:[3,4],target:[3,4],text:'Đặt D để CD là vectơ-không. Điểm nào phải trùng nhau?'},
 {A:[1,1],B:[5,3],C:[2,4],target:null,text:'Tự do thử. Thay đổi D và giải thích quan hệ giữa hai vectơ.'}
];
let missionDone=new Set();try{missionDone=new Set(JSON.parse(localStorage.getItem('toan10-bai07-missions-v2')||'[]').filter(n=>[0,1,2].includes(n)));}catch{}
function missionState(){const i=Number($('#mission-kind').value),m=missions[i],D=[Number($('#build-x').value),Number($('#build-y').value)],u=sub(m.A,m.B),v=sub(m.C,D);return {i,m,D,u,v,r:classify(u,v)};}
function drawBuild(){const s=missionState();$('#build-x-value').textContent=s.D[0];$('#build-y-value').textContent=s.D[1];$('#mission-text').textContent=s.m.text;diagram('build-scene',{A:s.m.A,B:s.m.B,C:s.m.C,D:s.D},[['A','B'],['C','D']],{grid:true});$('#mission-progress').textContent=`Đã đạt ${missionDone.size}/3 nhiệm vụ · Lưu trên trình duyệt này`;if(s.i===3)$('#build-feedback').textContent=s.r.equal?'Hai vectơ bằng nhau.':s.r.zero?'Có vectơ-không: cùng hướng theo quy ước.':s.r.same?'Cùng hướng nhưng khác độ dài.':s.r.parallel?'Cùng phương, ngược hướng.':'Không cùng phương.';}
function resetBuild(){$('#build-x').value=4;$('#build-y').value=3;$('#build-feedback').textContent='';drawBuild();}
$('#mission-kind').onchange=resetBuild;$('#build-reset').onclick=resetBuild;
for(const id of ['build-x','build-y'])$('#'+id).oninput=()=>{$('#build-feedback').textContent='';$('#build-feedback').classList.remove('good');drawBuild();};
$('#build-hint').onclick=()=>{const s=missionState();$('#build-feedback').textContent=s.i===0?'Từ A tới B: 4 ô sang phải, 2 ô lên. Đi như vậy từ C.':s.i===1?'AB đi 4 ô sang phải. Từ C, hãy đi 4 ô theo chiều ngược lại.':s.i===2?'Vectơ-không: hai mút phải trùng nhau. C đang ở (3;4).':'Giữ một tọa độ D rồi đổi tọa độ kia để quan sát.';};
$('#build-check').onclick=()=>{const s=missionState();if(s.i===3){drawBuild();return;}const ok=close(s.D,s.m.target);let msg;
 if(ok){missionDone.add(s.i);try{localStorage.setItem('toan10-bai07-missions-v2',JSON.stringify([...missionDone]));}catch{}msg='✓ Đúng. '+(s.i===2?'C và D trùng nhau, CD có độ dài 0.':'Em đã kiểm tra cả hướng và độ dài. Hãy giải thích vì sao D là duy nhất.');sound('good');}
 else {sound('bad');msg=s.i===2?'Chưa đạt: C và D chưa trùng nhau. Hãy sửa cả hai tọa độ.':!s.r.parallel?'Sai phương: hai mũi tên chưa song song. Kiểm tra số ô ngang và dọc.':s.i===0&&!s.r.same?'Sai hướng: D ở phía ngược với hướng A → B.':s.i===1&&s.r.same?'Sai hướng: cần đi từ C về phía ngược lại AB.':'Đã đúng hướng cần tìm nhưng sai độ dài. Đếm lại số ô.';}
 $('#build-feedback').textContent=msg;$('#build-feedback').classList.toggle('good',ok);drawBuild();};drawBuild();
diagram('zero',{A:[1,1],B:[1,1]},[['A','A']],{label:'A và B trùng nhau · Không còn mũi tên dài'});
diagram('unique',{M:[0,0],N:[3,1],O:[1,3],A:[4,4]},[['M','N'],['O','A']],{label:'Giữ 3 ô ngang, 1 ô lên khi chuyển gốc về O'});
diagram('rectangle',rect,[['A','D'],['B','C'],['A','C','#ffacbd'],['B','D','#b3c5d8']],{polygon:['A','B','C','D']});
diagram('trapezoid',{A:[1,3],B:[3,3],C:[4,0],D:[0,0]},[['A','D'],['B','C'],['A','C','#ffacbd'],['B','D','#b3c5d8']],{polygon:['A','B','C','D']});
diagram('collinear',{A:[0,0],B:[2,1],C:[5,2.5]},[['A','B'],['A','C','#ffd28b']]);
diagram('between',{A:[0,0],M:[2,0],B:[5,0]},[['M','A'],['M','B']],{label:'Hai tia MA và MB đối nhau'});
$('#square-group').innerHTML=squareGroups.map((g,i)=>`<option value="${i}">${g.names.join(' = ')}</option>`).join('');
function drawSquare(){const g=squareGroups[Number($('#square-group').value)];diagram('square-groups',squarePoints,g.names.map(s=>[s[0],s[1]]),{polygon:['A','B','C','D']});$('#square-result').innerHTML=g.names.map(V).join(' = ')+`<small>Nhóm này có ${g.names.length} mũi tên.</small>`;}
$('#square-group').onchange=drawSquare;drawSquare();
let hexChosen=new Set();function drawHex(){diagram('hexagon',hexPoints,[...hexChosen].map(s=>[s[0],s[1]]),{polygon:'ABCDEF'.split('')});$('#hex-result').textContent=`Đã tìm ${hexChosen.size}/4: ${[...hexChosen].join(', ')||'chưa chọn'}. ${hexChosen.size===4?'Có cả AB. Không bỏ chính vectơ đã cho.':''}`;}
$$('[data-hex]').forEach(b=>b.onclick=()=>{const s=b.dataset.hex;hexChosen.has(s)?hexChosen.delete(s):hexChosen.add(s);b.setAttribute('aria-pressed',String(hexChosen.has(s)));drawHex();});drawHex();
diagram('counterexample',{A:[0,0],B:[3,0],C:[1,1],D:[1,4]},[['A','B'],['C','D']]);
diagram('parallelogram',{A:[1,3],B:[5,3],C:[4,0],D:[0,0]},[['A','D'],['B','C']],{polygon:['A','B','C','D']});
diagram('forces',{A:[0,0],F:[0,1],P:[0,-3]},[['A','F'],['A','P']],{label:'Cùng tỉ lệ: trọng lực gấp 3 lực đẩy'});
diagram('boats',{O:[0,0],Nước:[3,0],A:[0,2],Xuôi:[18,2],B:[12,4],Ngược:[0,4]},[['O','Nước','#b3c5d8'],['A','Xuôi'],['B','Ngược']],{label:'Dòng: 3 · A: 18 · B: 12 km/h so với bờ'});
diagram('coordinate',{O:[0,0],A:[1,2],M:[0,-1],N:[3,5]},[['O','A'],['M','N']],{label:'MN cùng hướng, dài gấp ba OA · t = 3 giờ'});
const choices={
 'ship-pick':[1,'Hai chặng vuông góc 10 km: đường thẳng AB dài 10√2 km, hướng Đông Nam.'],
 'road-pick':[1,'Các giá song song: hai xe cùng chiều hoặc ngược chiều, vẫn cùng phương.'],
 'same-pick':[1,'Cùng hướng chưa đủ. Cần thêm cùng độ dài để bằng nhau.'],
 'trap-pick':[2,'AD và BC: khác phương. AB và CD: ngược hướng, khác độ dài. AC và BD: khác phương.'],
 'between-pick':[3,'M nằm giữa khi hai tia MA và MB đối nhau: các vectơ MA, MB ngược hướng.'],
 'repair-pick':[1,'Hai vectơ khác 0 ngược hướng cùng độ dài không bằng nhau. Đây là phản ví dụ.']
};
$$('[data-choice]').forEach(b=>b.onclick=()=>{const [correct,explain]=choices[b.dataset.choice],ok=Number(b.dataset.value)===correct;$('#'+b.dataset.choice+'-feedback').textContent=(ok?'✓ Đúng. ':'Chưa đúng. ')+explain;sound(ok?'good':'bad');});
$$('.check').forEach(b=>b.onclick=()=>{const v=b.getAttribute('aria-pressed')!=='true';b.setAttribute('aria-pressed',String(v));$('.check-icon',b).textContent=v?'✓':'□';});
let remaining=180000,deadline=0,timerHandle;
function renderTime(){const n=Math.ceil(remaining/1000);$('#group-time').textContent=`${String(Math.floor(n/60)).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`;}
function pauseTimer(){if(timerHandle){remaining=Math.max(0,deadline-Date.now());clearInterval(timerHandle);timerHandle=null;renderTime();$('#group-start').textContent='Tiếp tục';}}
$('#group-start').onclick=()=>{if(timerHandle)return;if(!remaining)remaining=180000;deadline=Date.now()+remaining;timerHandle=setInterval(()=>{remaining=Math.max(0,deadline-Date.now());renderTime();if(!remaining){pauseTimer();notify('Hết 3 phút. Hãy chia sẻ kết luận của nhóm.');}},200);$('#group-start').textContent='Đang chạy';};
$('#group-pause').onclick=pauseTimer;$('#group-reset').onclick=()=>{pauseTimer();remaining=180000;renderTime();$('#group-start').textContent='Bắt đầu';};
function onSlideLeave(){pauseTimer();}
document.addEventListener('visibilitychange',()=>{if(document.hidden)pauseTimer();});
const note=document.createElement('aside');note.className='notes';note.hidden=true;note.innerHTML='<strong>Gợi ý giáo viên</strong><p id="teacher-note-text"></p>';document.body.append(note);
const noteButton=document.createElement('button');noteButton.className='tool';noteButton.id='teacher-toggle';noteButton.textContent='Gợi ý GV (N)';noteButton.setAttribute('aria-expanded','false');$('.topbar').insertBefore(noteButton,$('#fullscreen'));
function toggleNote(){note.hidden=!note.hidden;noteButton.setAttribute('aria-expanded',String(!note.hidden));$('#teacher-note-text').textContent=sections[current].note;}
noteButton.onclick=toggleNote;document.addEventListener('keydown',e=>{if(e.key.toLowerCase()==='n'&&!e.target.closest('input,textarea,select,button')&&!$('#toc').open)toggleNote();});
const oldShowSlide=showSlide;showSlide=function(...args){oldShowSlide(...args);$('#teacher-note-text').textContent=sections[current].note;};
showSlide(0,false);
if(new URLSearchParams(location.search).get('lab')==='1'){document.body.classList.add('lab-only');showSlide(10,false);}
