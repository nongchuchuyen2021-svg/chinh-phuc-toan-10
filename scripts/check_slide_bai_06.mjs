import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import katex from 'katex';
const source=fs.readFileSync('scripts/slide-bai-06/activities.js','utf8');
const near=(a,b,tol=1e-9)=>assert.ok(Math.abs(a-b)<tol,`${a} differs from ${b}`);
// Exercise the same numerical solver used by the interactive deck, independently of the UI.
const sandbox={Math,Number,console,katex};vm.createContext(sandbox);
const core=source.slice(0,source.indexOf('function triangleSVG'))+'\n'+source.slice(source.indexOf('function solveTriangle'),source.indexOf('function setSSS'));
vm.runInContext(core+'\nthis.solve=solveTriangle;this.sas=sas;this.angleAt=angleAt;',sandbox);
const {solve,sas,angleAt}=sandbox;
for(let A=5;A<=175;A+=5){for(const [b,c] of [[8,5],[13,14],[1,3],[20,10]]){
 const t=solve(0,[b,c,A]);assert.ok(!t.error,t.error);near(t.A+t.B+t.C,180,1e-8);
 near(t.a*t.a,b*b+c*c-2*b*c*Math.cos(A*Math.PI/180),1e-8);
 near(t.a/Math.sin(t.A*Math.PI/180),t.b/Math.sin(t.B*Math.PI/180),1e-7);
 const s=solve(1,[t.a,t.b,t.c]);assert.ok(!s.error);near(s.A,A,1e-7);near(s.S,t.S,1e-7);
 const g=solve(2,[t.a,t.A,t.B]);assert.ok(!g.error);near(g.c,c,1e-7);
}}
for(const [mode,v] of [[1,[2,3,5]],[1,[3,4,8]],[0,[5,8,180]],[0,[5,8,0]],[2,[10,100,80]],[2,[10,120,80]],[0,[NaN,4,60]],[1,[-1,4,5]]])assert.ok(solve(mode,v).error);
const t=solve(1,[13,14,15]);near(t.S,84);near(t.r,4);near(t.R,65/8);near(2*t.S/t.a,168/13);
near(sas(8,5,120).a,Math.sqrt(129));near(50*Math.sin(70*Math.PI/180)/Math.sin(Math.PI/3),54.25317875662492,1e-9);
near(Math.sqrt(500+200*Math.SQRT2),27.979326519318136,1e-9);
for(const a of [40,75,95,140,230,255,300,310]){const p=x=>({x:Math.cos(x*Math.PI/180)*5,y:Math.sin(x*Math.PI/180)*5}),A=angleAt(p(210),p(a),p(330)),chord=Math.hypot(p(210).x-p(330).x,p(210).y-p(330).y);near(chord/Math.sin(A*Math.PI/180),10);}
const content=fs.readFileSync('scripts/slide-bai-06/content.js','utf8');let formulas=0;
const contentSandbox={katex:{renderToString(s,opts){formulas++;return katex.renderToString(s,opts);}}};vm.createContext(contentSandbox);vm.runInContext(content+'\nthis.data={sections,quizQuestions};',contentSandbox);
const {sections,quizQuestions}=contentSandbox.data;assert.equal(sections.length,26);assert.equal(quizQuestions.length,12);assert.equal(new Set(sections.map(s=>s.title)).size,26);
quizQuestions.forEach(q=>{assert.equal(q[1].length,4);assert.ok(q[2]>=0&&q[2]<4);assert.equal(new Set(q[1]).size,4);});
const html=fs.readFileSync('public/bai-06-trinh-chieu.html','utf8');assert.ok(!/<(?:script|link)[^>]+(?:src|href)="https?:/i.test(html));new vm.Script(html.match(/<script>([\s\S]*)<\/script>/)[1]);
console.log(`PASS: 26 slides, 12 quizzes, ${formulas} initial TeX formulas, 140 valid triangle cases in all 3 solver modes, invalid inputs, circles, area and textbook results.`);
