import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(root, 'scripts/slide-bai-08');

const baseCss = fs.readFileSync(path.join(src, 'base.css'), 'utf8');
const deckCss = fs.readFileSync(path.join(src, 'deck.css'), 'utf8');
const css = [baseCss, deckCss].join('\n');

const contentJs = fs.readFileSync(path.join(src, 'content.js'), 'utf8');
const engineJs = fs.readFileSync(path.join(src, 'engine.js'), 'utf8');
const activitiesJs = fs.readFileSync(path.join(src, 'activities.js'), 'utf8');
const js = [contentJs, engineJs, activitiesJs].join('\n').replace(/<\/script/gi, '<\\/script');

const html = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="Bài 8 Toán 10: 28 slide trình chiếu tương tác về tổng và hiệu của hai vectơ, quy tắc hình bình hành, kéo pháo Điện Biên Phủ và đấu trường quiz.">
  <title>Bài 8 · Tổng và hiệu của hai vectơ · Toán 10</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <style>${css}</style>
</head>
<body>
<header class="topbar">
  <div class="brand">TOÁN 10 <b> / BÀI 08</b></div>
  <div class="spacer"></div>
  <button class="tool" id="contents" aria-haspopup="dialog">☰ Mục lục</button>
  <button class="tool" id="motion" aria-pressed="true">✨ Hiệu ứng: Bật</button>
  <button class="tool" id="sound" aria-pressed="false">🔇 Âm thanh: Tắt</button>
  <button class="tool" id="fullscreen" aria-label="Toàn màn hình" title="Toàn màn hình (F)">⛶</button>
</header>
<main class="stage" id="stage">
  <div id="deck"></div>
  <noscript>
    <h1>Bài 8: Tổng và hiệu của hai vectơ</h1>
    <p>Bật JavaScript để dùng bài trình chiếu.</p>
  </noscript>
</main>
<footer class="bottom">
  <button class="nav" id="prev" aria-label="Trang trước">←</button>
  <div class="progress" aria-hidden="true"><span id="progress"></span></div>
  <span class="counter" id="counter">01 / 28</span>
  <span class="footer-count" id="reveal-counter"></span>
  <button class="action" id="all-ideas">Hiện hết</button>
  <button class="action primary next-idea" id="next-idea">Hiện ý tiếp ↓</button>
  <button class="nav" id="next" aria-label="Trang tiếp">→</button>
  <span class="key-help">Space/→: hiện ý, rồi chuyển trang<br>↑: ẩn ý · F: toàn màn hình · M: âm thanh</span>
</footer>
<dialog id="toc" aria-labelledby="toc-title">
  <div class="dialog-head">
    <h2 id="toc-title">Hành trình Bài 8 · 28 Slide</h2>
    <button class="action" id="close-toc">Đóng ✕</button>
  </div>
  <div id="toc-grid" class="toc-grid"></div>
</dialog>
<div id="toast" class="toast" role="status" hidden></div>
<div id="confetti" class="confetti" aria-hidden="true"></div>
<script>${js}</script>
</body>
</html>`;

for (const file of ['public/bai-08-trinh-chieu.html', 'bai-08-trinh-chieu.html']) {
  fs.writeFileSync(path.join(root, file), html);
  console.log('Built ' + file);
}
