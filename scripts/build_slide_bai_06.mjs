import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const src=path.join(root,'scripts/slide-bai-06');
const katexDir=path.join(root,'node_modules/katex/dist');
// Embed formulas, fonts and interactions so the downloaded slide also works offline.
const mathCss=fs.readFileSync(path.join(katexDir,'katex.min.css'),'utf8').replace(/src:[^;}]+/g,rule=>{const file=rule.match(/url\(([^)]+\.woff2)\)/)?.[1];return file?`src:url(data:font/woff2;base64,${fs.readFileSync(path.join(katexDir,file)).toString('base64')}) format("woff2")`:rule;});
const css=[mathCss,...['base.css','deck.css'].map(f=>fs.readFileSync(path.join(src,f),'utf8'))].join('\n');
const js=[fs.readFileSync(path.join(katexDir,'katex.min.js'),'utf8'),...['content.js','engine.js','activities.js'].map(f=>fs.readFileSync(path.join(src,f),'utf8'))].join('\n').replace(/<\/script/gi,'<\\/script');
const html=`<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Bài 6 Toán 10: 26 slide tương tác về định lí côsin, định lí sin, giải tam giác và diện tích."><title>Bài 6 · Hệ thức lượng trong tam giác · Toán 10</title><style>${css}</style></head><body>
<header class="topbar"><div class="brand">TOÁN 10 <b> / BÀI 06</b></div><div class="spacer"></div><button class="tool" id="contents" aria-haspopup="dialog">☰ Mục lục</button><button class="tool" id="motion" aria-pressed="true">✨ Hiệu ứng: Bật</button><button class="tool" id="sound" aria-pressed="false">🔇 Âm thanh: Tắt</button><button class="tool" id="fullscreen" aria-label="Toàn màn hình" title="Toàn màn hình (F)">⛶</button></header>
<main class="stage" id="stage"><div id="deck"></div><noscript><h1>Bài 6: Hệ thức lượng trong tam giác</h1><p>Bật JavaScript để dùng bài trình chiếu.</p></noscript></main>
<footer class="bottom"><button class="nav" id="prev" aria-label="Trang trước">←</button><div class="progress" aria-hidden="true"><span id="progress"></span></div><span class="counter" id="counter">01 / 26</span><span class="footer-count" id="reveal-counter"></span><button class="action" id="all-ideas">Hiện hết</button><button class="action primary next-idea" id="next-idea">Hiện ý tiếp ↓</button><button class="nav" id="next" aria-label="Trang tiếp">→</button><span class="key-help">Space/→: hiện ý, rồi chuyển trang<br>↑: ẩn ý · F: toàn màn hình · M: âm thanh</span></footer>
<dialog id="toc" aria-labelledby="toc-title"><div class="dialog-head"><h2 id="toc-title">Hành trình Bài 6</h2><button class="action" id="close-toc">Đóng ✕</button></div><div id="toc-grid" class="toc-grid"></div></dialog><div id="toast" class="toast" role="status" hidden></div><div id="confetti" class="confetti" aria-hidden="true"></div><script>${js}</script></body></html>`;
for(const file of ['public/bai-06-trinh-chieu.html','bai-06-trinh-chieu.html']){fs.writeFileSync(path.join(root,file),html);console.log('Built '+file);}
