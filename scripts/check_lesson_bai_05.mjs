import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import katex from 'katex';

function load(file){
  const code=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
  const context={exports:{}};vm.runInNewContext(code,context,{filename:file});return context.exports;
}
const close=(actual,expected,message)=>assert.ok(Math.abs(actual-expected)<1e-10,`${message}: ${actual} ≠ ${expected}`);
const sin=a=>Math.sin(a*Math.PI/180),cos=a=>Math.cos(a*Math.PI/180),tan=a=>sin(a)/cos(a);
// A small parser for the exact constants in this lesson, without executing TeX as code.
function constant(tex){
  tex=tex.replace(/\$/g,'').replace(/\s/g,'').replace(/\\circ/g,'').replace(/\^/g,'');
  if(tex==='Vôsố')return Infinity;
  if(/^-?\d+\/-?\d+$/.test(tex)){const [a,b]=tex.split('/').map(Number);return a/b;}
  let i=0;
  function atom(){
    if(tex[i]==='-'){i++;return -atom();}
    if(tex.startsWith('\\frac',i)){i+=5;const a=atom(),b=atom();return a/b;}
    if(tex.startsWith('\\sqrt',i)){i+=5;return Math.sqrt(atom());}
    if(tex[i]==='{'){const start=++i;let depth=1;while(depth){if(tex[i]==='{')depth++;if(tex[i]==='}')depth--;i++;}return constant(tex.slice(start,i-1));}
    const number=tex.slice(i).match(/^\d/);assert.ok(number,`Unsupported constant ${tex}`);i++;return Number(number[0]);
  }
  // Bare numbers such as 120 are a single value, unlike unbraced frac12.
  if(/^-?\d+(?:\.\d+)?$/.test(tex))return Number(tex);
  const value=atom();assert.equal(i,tex.length,`Incomplete parse ${tex}`);return value;
}
const questions=load('data/questions/bai-05.ts').default;
const extra=load('lib/extras.ts').EXTRA_BANK['bai-05'];
const theory=load('lib/theory.ts').THEORY_BANK['bai-05'];
const review=load('lib/reviews.ts').REVIEWS_BANK['bai-05'];
const games=load('data/games/bai-05.ts').default;
assert.equal(questions.length,12);assert.equal(extra.tf.length,2);assert.equal(extra.essay.length,3);assert.equal(theory.sections.length,5);
const byId=id=>questions.find(q=>q.id===id);
assert.match(byId('b5-q1').options[byId('b5-q1').answer],/sin.*= y_0.*cos.*= x_0/);
assert.match(byId('b5-q2').options[byId('b5-q2').answer],/sin.*> 0.*cos.*< 0/);
assert.match(byId('b5-q4').options[byId('b5-q4').answer],/sin\^2.*\+.*cos\^2.*= 1/);
const identityErrors=[a=>sin(180-a)-sin(a),a=>cos(180-a)+cos(a),a=>tan(180-a)+tan(a),a=>1/tan(180-a)-1/tan(a)];
const falseIdentities=identityErrors.flatMap((fn,i)=>[20,40,80].some(a=>Math.abs(fn(a))>1e-10)?[i]:[]);
assert.equal(falseIdentities.length,1);assert.equal(byId('b5-q5').answer,falseIdentities[0]);
for(const [id,expected] of [['b5-q3',cos(120)],['b5-q6',-Math.sqrt(1-(4/5)**2)],['b5-q7',cos(20)+cos(40)+cos(140)+cos(160)],['b5-q8',1/(1+2**2)],['b5-q9',(2*(-3)-3)/(3*(-3)+2)],['b5-q10',((Math.sqrt(5)/2)**2-1)/2],['b5-q12',1]]){
  const q=byId(id),values=q.options.map(constant),valid=values.flatMap((v,i)=>Math.abs(v-expected)<1e-10?[i]:[]);
  assert.equal(valid.length,1,`${id} must have exactly one correct answer`);assert.equal(valid[0],q.answer,id);
}
// Regression: the old -cos(2α) distractor was identical to sin²α−cos²α.
function q11Value(tex,a){
  const t=tex.replace(/\$/g,'').replace(/\s/g,'');
  if(t==='-\\cos2\\alpha')return -cos(2*a);
  if(t==='\\cos^2\\alpha-\\sin^2\\alpha')return cos(a)**2-sin(a)**2;
  if(t==='\\sin^2\\alpha-\\cos^2\\alpha')return sin(a)**2-cos(a)**2;
  return Number(t);
}
const q11=byId('b5-q11'),samples=[15,30,60,75];
const correctOptions=q11.options.flatMap((tex,i)=>samples.every(a=>Math.abs(q11Value(tex,a)-(sin(90-a)*cos(180-a)+cos(90-a)*sin(180-a)))<1e-10)?[i]:[]);
assert.equal(correctOptions.length,1,'b5-q11 has multiple equivalent correct options');assert.equal(correctOptions[0],q11.answer);
const s=3/5,c=-Math.sqrt(1-s*s);
const expectedTf=[
 [c<0,Math.abs(c-4/5)<1e-10,Math.abs(s/c+3/4)<1e-10,Math.abs(2*s-5*c-26/5)<1e-10],
 [Math.abs(tan(25)*tan(65)-1)<1e-10,Math.abs(tan(25)*tan(65)/cos(120)-2)<1e-10,Math.abs(sin(80)**2-cos(10)**2)<1e-10,Math.abs(Array.from({length:9},(_,i)=>sin(10*(i+1))**2).reduce((a,b)=>a+b,0)-5)<1e-10]
];
extra.tf.forEach((q,i)=>q.statements.forEach((st,j)=>assert.equal(st.answer,expectedTf[i][j],`${q.id}, statement ${j+1}`)));
[ (4*(-2)+5)/(2*(-2)-3), cos(15)**2+cos(35)**2+cos(55)**2+cos(75)**2, 20*Math.SQRT2*Math.abs(cos(135)) ].forEach((v,i)=>close(constant(extra.essay[i].answer),v,extra.essay[i].id));
const sortValues=[sin(150),cos(135),tan(120),cos(45),1/tan(150),sin(120),cos(180),tan(60)];
games[0].items.forEach((item,i)=>assert.equal(item.isMatch,sortValues[i]>0,item.id));

let rendered=0;
function renderAll(value){
 if(typeof value==='string')for(const match of value.matchAll(/\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g)){katex.renderToString(match[1]??match[2],{throwOnError:true,strict:'ignore'});rendered++;}
 else if(Array.isArray(value))value.forEach(renderAll);
 else if(value&&typeof value==='object')Object.values(value).forEach(renderAll);
}
[questions,extra,theory,review,games].forEach(renderAll);

// Run the slide's actual model against geometric invariants for every integer angle.
const nodes=new Map();const context=vm.createContext({katex,document:{querySelector(id){if(!nodes.has(id))nodes.set(id,{innerHTML:'',setAttribute(){}});return nodes.get(id);}}});
vm.runInContext(fs.readFileSync('scripts/slide-bai-05/content.js','utf8'),context);
const activities=fs.readFileSync('scripts/slide-bai-05/activities.js','utf8');
vm.runInContext(activities.slice(0,activities.indexOf("drawCircle('#opening-circle'"))+'\nglobalThis.model={unit,values,drawCircle};globalThis.table={angles,exact};',context);
for(let a=0;a<=180;a++){
 const {x,y}=context.model.unit(a);close(x*x+y*y,1,`Unit radius at ${a}`);assert.ok(y>=0);
 context.model.drawCircle('#test',a,{mirror:true});
 const svg=nodes.get('#test').innerHTML;
 const p=svg.match(/class="point" cx="([^"]+)" cy="([^"]+)"/),q=svg.match(/class="mirror-point" cx="([^"]+)" cy="([^"]+)"/);
 close(Number(p[1])+Number(q[1]),620,`Mirror x at ${a}`);close(Number(p[2]),Number(q[2]),`Mirror y at ${a}`);
 close(Math.hypot(Number(p[1])-310,Number(p[2])-280),220,`Rendered radius at ${a}`);
}
context.table.angles.forEach((a,i)=>context.table.exact[i].forEach((tex,j)=>{
 const expected=[sin(a),cos(a),a===90?null:tan(a),a===0||a===180?null:cos(a)/sin(a)][j];
 if(expected===null)assert.equal(tex,null);else close(constant(tex),expected,`Exact table ${a}, function ${j}`);
}));
assert.ok(!context.model.values(90).includes('Infinity'));assert.equal((context.model.values(90).match(/Không xác định/g)||[]).length,1);
for(const a of [0,180])assert.equal((context.model.values(a).match(/Không xác định/g)||[]).length,1);
// Persist quarter points without rounding them to a tenth.
const saved=new Map();
const code=ts.transpileModule(fs.readFileSync('lib/progress.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;
const storageContext={exports:{},window:{},localStorage:{getItem:k=>saved.get(k)??null,setItem:(k,v)=>saved.set(k,v)}};vm.runInNewContext(code,storageContext);
storageContext.exports.updateLessonTFScore('bai-05',2,8,.25);assert.equal(storageContext.exports.getProgress()['bai-05'].tfScore.score,.25);
storageContext.exports.saveAttempt('bai-05',100,12,12);assert.equal(storageContext.exports.getProgress()['bai-05'].mcScore.total,12);
// Original SGK page 37: independently evaluate all numerical exercise results.
close((2*sin(30)+cos(135)-3*tan(150))*(cos(180)-1/tan(60)),-2-4*Math.sqrt(3)/3+Math.sqrt(2)/2+Math.sqrt(6)/6,'SGK 3.1a');
close(sin(90)**2+cos(120)**2+cos(0)**2-tan(60)**2+(1/tan(135))**2,1/4,'SGK 3.1b');
close(cos(60)*sin(30)+cos(30)**2,1,'SGK 3.1c');
close(sin(100)+sin(80)+cos(16)+cos(164),2*sin(80),'SGK 3.2a');
for(const a of [10,30,60,80])close(2*sin(180-a)/tan(a)-cos(180-a)*tan(a)/tan(180-a),cos(a),'SGK 3.2b');
close((2*3-3)/(3*3+2),3/11,'SGK 3.4');
const book=fs.readFileSync('public/sgk/bai-05.html','utf8');
for(const id of ['bt-31','bt-32','bt-33','bt-34'])assert.ok(book.includes(`id="${id}"`));
for(const tex of ['\\tan\\alpha=3','\\frac3{11}','\\cos135^\\circ','\\cos164^\\circ'])assert.ok(book.includes(tex),`Original SGK formula missing: ${tex}`);
for(let page=33;page<=37;page++)assert.ok(fs.existsSync(`public/sgk/images/bai-05/trang-${page}.png`));
console.log(`Lesson 5 audit passed: 12 MCQs, 8 true/false statements, 3 short answers, 8 sign cards, ${rendered} TeX formulas, exact table, 181 geometric angles and score persistence.`);
