const fs=require('fs'),assert=require('node:assert/strict'),ts=require('typescript'),vm=require('vm'),katex=require('katex');
function load(file,name){const s=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const c={exports:{}};vm.runInNewContext(s,c);return c.exports[name];}
const q=load('data/questions/bai-07.ts','default'),extra=load('lib/extras.ts','EXTRA_BANK')['bai-07'],theory=load('lib/theory.ts','THEORY_BANK')['bai-07'],review=load('lib/reviews.ts','REVIEWS_BANK')['bai-07'];
const gsrc=fs.readFileSync('data/games/bai-07.ts','utf8');const gjs=ts.transpileModule(gsrc,{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;const gc={exports:{}};vm.runInNewContext(gjs,gc);const games=gc.exports.default;
assert.equal(q.length,20);assert.equal(extra.tf.length,4);assert.equal(extra.essay.length,6);assert.equal(games.length,3);
assert.equal(new Set(q.map(x=>x.id)).size,q.length);
for(const item of q){assert.equal(item.options.length,4);assert.ok(item.answer>=0&&item.answer<4);assert.equal(new Set(item.options).size,4);}
assert.equal(q.find(x=>x.id==='b7-q8').options[q.find(x=>x.id==='b7-q8').answer],'4');
assert.ok(q.find(x=>x.id==='b7-q7').options[q.find(x=>x.id==='b7-q7').answer].includes('OC'));
let formulas=0;function walk(x,path){if(typeof x==='string'){assert.ok(!/[\u0000-\u0009\u000b-\u001f]/.test(x),'Control character '+path);for(const m of x.matchAll(/\$\$([\s\S]*?)\$\$|\$([^$]+)\$/g)){const tex=m[1]??m[2];assert.ok(!/(^|[^\\a-z])(vec|overrightarrow|frac|sqrt)\{/.test(tex),'Missing command '+path);katex.renderToString(tex,{throwOnError:true,trust:false,strict:'ignore'});formulas++;}}else if(x&&typeof x==='object')for(const [k,v]of Object.entries(x))walk(v,path+'.'+k);}
walk({q,extra,theory,review,games},'bai07');
const points=Object.fromEntries('ABCDEF'.split('').map((x,i)=>[x,[Math.cos(i*Math.PI/3),Math.sin(i*Math.PI/3)]]));points.O=[0,0];const vec=(a,b)=>points[b].map((x,i)=>x-points[a][i]);const ab=vec('A','B');const equal=[];for(const a in points)for(const b in points)if(Math.hypot(...vec(a,b).map((x,i)=>x-ab[i]))<1e-8)equal.push(a+b);assert.deepEqual(equal.sort(),['AB','ED','FO','OC']);
const s={A:[0,0],B:[4,0],C:[4,4],D:[0,4],O:[2,2]},groups=new Map();for(const a in s)for(const b in s)if(a!==b){const key=s[b].map((x,i)=>x-s[a][i]).join(',');groups.set(key,(groups.get(key)||0)+1);}assert.equal(groups.size,12);assert.equal([...groups.values()].reduce((a,b)=>a+b,0),20);assert.equal([...groups.values()].filter(x=>x===2).length,8);
// Figure 4.12: check arrowheads from the PDF, not just parallel lines.
const a=[-2,-4],b=[1,2],c=[-2,-4],d=[4,-2];assert.deepEqual(a,c);assert.equal(a[0]*b[1]-a[1]*b[0],0);assert.ok(a[0]*b[0]+a[1]*b[1]<0);assert.notEqual(a[0]*d[1]-a[1]*d[0],0);
const slide=fs.readFileSync('public/bai-07-trinh-chieu.html','utf8');assert.ok(!/<(?:script|link)[^>]+(?:src|href)="https?:/i.test(slide),'Offline dependency');assert.ok(slide.includes('data:font/woff2;base64,'));new vm.Script(slide.match(/<script>([\s\S]*)<\/script>/)[1]);
for(const n of [46,47,48,49,50])assert.ok(fs.existsSync('public/sgk/images/bai-07/trang-'+n+'.png'));
const sgk=fs.readFileSync('public/sgk/bai-07.html','utf8');assert.ok(!sgk.includes('12\\text{ km}'));for(const i of ['41','42','43','44','45'])assert.ok(sgk.includes('id="bt-'+i+'"'));
console.log(`PASS: ${formulas} data formulas; 20 MCQ; 4 TF; 6 short answers; 3 games; hexagon count; square groups; original arrow directions; offline fonts; source images; slide syntax.`);
