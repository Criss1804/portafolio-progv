/* Fondo espacial y efectos de viaje — ligero a propósito:
   · Un solo <canvas> con estrellas en 3 capas (parallax al bajar y al mover el cursor) y alguna estrella fugaz.
   · Se dibuja solo cuando la pestaña está visible; con «reducir movimiento» se dibuja una vez y queda quieto.
   · La nave del índice y el parallax de los planetas solo tocan `transform` (no provocan relayout). */
(function () {
  'use strict';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cv = document.getElementById('cielo');
  if (!cv) return;
  const ctx = cv.getContext('2d', { alpha: false });
  const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
  const CAPAS = [{ vel: 0.04, tam: 0.7, alfa: 0.55 }, { vel: 0.10, tam: 1.1, alfa: 0.8 }, { vel: 0.22, tam: 1.6, alfa: 1 }];
  const TINTES = ['#ffffff', '#ffffff', '#ffffff', '#c7d2fe', '#a5f3fc', '#fde68a'];
  let W = 0, H = 0, estrellas = [], fugaz = null, prox = performance.now() + 4000;
  let mx = 0, my = 0, tx = 0, ty = 0, sy = scrollY;

  function crear() {
    W = innerWidth; H = innerHeight;
    cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR);
    cv.style.width = W + 'px'; cv.style.height = H + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    const n = Math.min(320, Math.round(W * H / 5200));
    estrellas = Array.from({ length: n }, (_, i) => {
      const c = CAPAS[i % 3];
      return { x: Math.random() * W, y: Math.random() * H, c, r: c.tam * (0.6 + Math.random() * 0.7), f: Math.random() * 6.28, v: 0.6 + Math.random() * 1.6, t: TINTES[(Math.random() * TINTES.length) | 0] };
    });
  }

  function dibujar(ahora) {
    ctx.fillStyle = '#05060f'; ctx.fillRect(0, 0, W, H);
    tx += (mx - tx) * 0.06; ty += (my - ty) * 0.06;
    const t = ahora / 1000;
    for (const s of estrellas) {
      const c = s.c;
      let y = (s.y - sy * c.vel - ty * c.vel * 60) % H; if (y < 0) y += H;
      let x = (s.x - tx * c.vel * 60) % W; if (x < 0) x += W;
      const a = reduce ? c.alfa : c.alfa * (0.65 + 0.35 * Math.sin(t * s.v + s.f));
      ctx.globalAlpha = a; ctx.fillStyle = s.t;
      if (s.r < 1.2) ctx.fillRect(x, y, s.r, s.r);
      else { ctx.beginPath(); ctx.arc(x, y, s.r * 0.6, 0, 6.2832); ctx.fill(); }
    }
    ctx.globalAlpha = 1;
    if (!reduce) {
      if (!fugaz && ahora > prox) { fugaz = { x: Math.random() * W * 0.8 + W * 0.2, y: Math.random() * H * 0.4, vida: 0 }; }
      if (fugaz) {
        fugaz.vida += 1; const k = fugaz.vida / 45, x = fugaz.x - k * 340, y = fugaz.y + k * 170;
        const g = ctx.createLinearGradient(x, y, x + 90, y - 45);
        g.addColorStop(0, 'rgba(255,255,255,.9)'); g.addColorStop(1, 'rgba(165,243,252,0)');
        ctx.strokeStyle = g; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 90, y - 45); ctx.stroke();
        if (k >= 1) { fugaz = null; prox = ahora + 5000 + Math.random() * 7000; }
      }
    }
  }

  let corriendo = false;
  function bucle(ahora) { if (document.hidden) { corriendo = false; return; } dibujar(ahora); requestAnimationFrame(bucle); }
  function iniciar() { if (reduce) { dibujar(0); return; } if (!corriendo) { corriendo = true; requestAnimationFrame(bucle); } }

  crear(); iniciar();
  let rt = 0; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { crear(); if (reduce) dibujar(0); }, 150); });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) iniciar(); });
  addEventListener('pointermove', e => { mx = e.clientX / W - 0.5; my = e.clientY / H - 0.5; }, { passive: true });

  /* ---- Viaje al bajar: nave del índice, parallax de planetas y del sistema de la portada ---- */
  const ruta = document.querySelector('#cards'), nave = document.getElementById('nave');
  const sistema = document.querySelector('.sistema');
  const visibles = new Set();
  const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting ? visibles.add(e.target) : visibles.delete(e.target)), { rootMargin: '10% 0px' });
  document.querySelectorAll('.astro-lab .planeta').forEach(p => io.observe(p));

  let pend = false;
  function viaje() {
    pend = false; sy = scrollY;
    if (reduce) { dibujar(0); return; }
    if (ruta && nave) {
      const r = ruta.getBoundingClientRect();
      const k = Math.max(0, Math.min(1, (innerHeight * 0.55 - r.top) / Math.max(1, r.height)));
      nave.style.transform = `translate(-50%, ${(k * (r.height - 40)).toFixed(1)}px) rotate(180deg)`;
    }
    for (const p of visibles) {
      const r = p.getBoundingClientRect(), d = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
      p.style.transform = `translateY(${(d * 60).toFixed(1)}px) rotate(${(d * -25).toFixed(1)}deg)`;
    }
    if (sistema && sy < innerHeight * 1.2) {
      sistema.style.transform = `translateY(${(sy * 0.18).toFixed(1)}px) scale(${(1 - sy / innerHeight * 0.12).toFixed(3)})`;
    }
  }
  addEventListener('scroll', () => { if (!pend) { pend = true; requestAnimationFrame(viaje); } }, { passive: true });
  viaje();

  /* ---- Portada: el sistema planetario se inclina un poco hacia el cursor ---- */
  if (sistema && !reduce && matchMedia('(pointer: fine)').matches) {
    const hero = document.getElementById('inicio');
    hero.addEventListener('pointermove', e => {
      const r = hero.getBoundingClientRect();
      sistema.style.setProperty('--ry', (((e.clientX - r.left) / r.width - 0.5) * 14).toFixed(2) + 'deg');
      sistema.style.setProperty('--rx', (((e.clientY - r.top) / r.height - 0.5) * -10 + 58).toFixed(2) + 'deg');
    }, { passive: true });
    hero.addEventListener('pointerleave', () => { sistema.style.removeProperty('--ry'); sistema.style.removeProperty('--rx'); });
  }
})();
