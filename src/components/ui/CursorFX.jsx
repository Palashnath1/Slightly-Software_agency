/**
 * CursorFX.jsx
 * ─────────────────────────────────────────────────────────────────
 * Complete cursor + interaction system for Slightly Agency:
 *
 *  1. SMOKE TRAIL        — dense, mixed-color fuchsia/purple/gold canvas particles
 *  2. CUSTOM CURSOR      — dot + ring with spring lag, morphs per context
 *  3. CLICK RIPPLE       — fuchsia burst on every click
 *  4. MAGNETIC BUTTONS   — digi-btn / btn-primary get pulled toward cursor
 *  5. 3D CARD TILT       — digi-card / portfolio-card tilt toward cursor on hover
 *  6. SPARKLE BURST      — tiny stars spawn on link/button hover
 *  7. PROXIMITY SPOTLIGHT — radial glow follows cursor across each section
 *  8. TEXT SCRAMBLE      — section headings scramble on enter-view (once)
 * ─────────────────────────────────────────────────────────────────
 */
import { useEffect, useRef, useState, useCallback } from 'react';

/* ════════════════════════════════════════════════════════════════
   1. SMOKE TRAIL — dense mixed-color canvas particles
   ════════════════════════════════════════════════════════════════ */

const SMOKE_COLORS = [
  // Translucent fuchsia & purple glass tones
  { r: 233, g: 30,  b: 140 },   // fuchsia
  { r: 215, g: 80,  b: 180 },   // glassy pink
  { r: 123, g: 45,  b: 158 },   // soft purple
  { r: 180, g: 120, b: 220 },   // frosted violet
  { r: 245, g: 220, b: 245 },   // glass white highlight
];

function pickColor(alpha) {
  const c = SMOKE_COLORS[Math.floor(Math.random() * SMOKE_COLORS.length)];
  return { r: c.r, g: c.g, b: c.b, a: alpha };
}

function SmokeCanvas() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse     = useRef({ x: -999, y: -999 });
  const prev      = useRef({ x: -999, y: -999 });
  const raf       = useRef(null);
  const lastEmit  = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e) => {
      prev.current  = { ...mouse.current };
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);

    const emit = (x, y) => {
      const dx    = mouse.current.x - prev.current.x;
      const dy    = mouse.current.y - prev.current.y;
      const spd   = 0.2 + Math.random() * 0.8;
      const ang   = Math.random() * Math.PI * 2;
      // Low opacity for subtle glassy vapor look
      const { r, g, b, a } = pickColor(0.18 + Math.random() * 0.12);

      particles.current.push({
        x: x + (Math.random() - 0.5) * 6,
        y: y + (Math.random() - 0.5) * 6,
        vx: Math.cos(ang) * spd + dx * 0.08,
        vy: Math.sin(ang) * spd + dy * 0.08 - 0.4,
        life: 1,
        decay: 0.015 + Math.random() * 0.015,
        size: 10 + Math.random() * 16,
        r, g, b, a,
        blur:   10 + Math.random() * 12,
        wobble: (Math.random() - 0.5) * 0.03,
      });
    };

    const loop = (ts) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Light, subtle emit interval (every 24ms, 1-2 particles)
      if (ts - lastEmit.current > 24) {
        const isMoving = Math.abs(mouse.current.x - prev.current.x) > 1 || Math.abs(mouse.current.y - prev.current.y) > 1;
        if (isMoving) {
          emit(mouse.current.x, mouse.current.y);
          if (Math.random() > 0.6) emit(mouse.current.x, mouse.current.y);
        }
        lastEmit.current = ts;
      }

      ctx.save();
      ctx.globalCompositeOperation = 'screen'; // Translucent glassy layering
      particles.current = particles.current.filter(p => p.life > 0.02);

      for (const p of particles.current) {
        p.x  += p.vx + Math.sin(p.life * 6) * p.wobble;
        p.y  += p.vy;
        p.vy -= 0.005; // Gentle upward drift
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.life -= p.decay;
        p.size += 0.25; // Expands as glassy vapor

        const al = Math.max(0, p.life * p.a);
        const r  = Math.max(1, p.size);
        const g  = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 1.5);
        g.addColorStop(0,   `rgba(255, 255, 255, ${al * 0.8})`); // Glassy frosted center highlight
        g.addColorStop(0.3, `rgba(${p.r}, ${p.g}, ${p.b}, ${al * 0.7})`);
        g.addColorStop(0.7, `rgba(${p.r}, ${p.g}, ${p.b}, ${al * 0.2})`);
        g.addColorStop(1,   `rgba(${p.r}, ${p.g}, ${p.b}, 0)`);

        ctx.save();
        ctx.filter = `blur(${p.blur}px)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
        ctx.restore();
      }

      ctx.restore();
      raf.current = requestAnimationFrame(loop);
    };

    raf.current = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, zIndex: 99990, pointerEvents: 'none' }}
    />
  );
}

/* ════════════════════════════════════════════════════════════════
   2. CUSTOM CURSOR — dot + lagged ring, context-aware morphing
   ════════════════════════════════════════════════════════════════ */

function CursorRing() {
  const dotRef   = useRef(null);
  const ringRef  = useRef(null);
  const labelRef = useRef(null);
  const mouse    = useRef({ x: -200, y: -200 });
  const ring     = useRef({ x: -200, y: -200 });
  const raf      = useRef(null);

  const [state, setState] = useState('default');
  const stateRef = useRef('default');
  const setS = useCallback((s) => { stateRef.current = s; setState(s); }, []);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (!el) return;
      if (el.closest('[data-cursor="hidden"]'))       setS('hidden');
      else if (el.closest('input,textarea,[contenteditable]')) setS('text');
      else if (el.closest('.digi-img-zoom,.portfolio-card,[data-cursor="view"]')) setS('view');
      else if (el.closest('a,button,[role="button"],[data-cursor="hover"]'))      setS('hover');
      else setS('default');
    };
    const onClick   = (e) => spawnRipple(e.clientX, e.clientY);
    const onLeave   = () => setS('hidden');
    const onEnter   = () => setS('default');

    window.addEventListener('mousemove', onMove);
    window.addEventListener('click', onClick);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    const loop = () => {
      const s = 0.11;
      ring.current.x += (mouse.current.x - ring.current.x) * s;
      ring.current.y += (mouse.current.y - ring.current.y) * s;
      if (dotRef.current)
        dotRef.current.style.transform  = `translate(${mouse.current.x}px,${mouse.current.y}px)`;
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${ring.current.x}px,${ring.current.y}px)`;
      if (labelRef.current)
        labelRef.current.style.transform = `translate(${ring.current.x}px,${ring.current.y}px)`;
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, [setS]);

  const SIZE   = { default: 36, hover: 58, text: 4, view: 74, hidden: 0 }[state] ?? 36;
  const BG     = state === 'hover' ? 'rgba(233,30,140,0.1)' : state === 'view' ? 'rgba(123,45,158,0.18)' : 'transparent';
  const BORDER = state === 'view'  ? '2px solid rgba(156,77,204,0.85)' : '1.5px solid rgba(233,30,140,0.7)';

  return (
    <>
      {/* Dot */}
      <div ref={dotRef} style={{
        position:'fixed', top:0, left:0, width:7, height:7, borderRadius:'50%',
        background:'linear-gradient(135deg,#e91e8c,#7b2d9e)',
        zIndex:99999, pointerEvents:'none', translate:'-50% -50%',
        opacity: state === 'hidden' || state === 'text' ? 0 : 1,
        transition:'opacity 0.2s',
        boxShadow:'0 0 10px rgba(233,30,140,1), 0 0 20px rgba(233,30,140,0.5)',
      }} />

      {/* Ring */}
      <div ref={ringRef} style={{
        position:'fixed', top:0, left:0,
        width: SIZE, height: SIZE, borderRadius:'50%',
        border: BORDER, background: BG,
        zIndex:99998, pointerEvents:'none', translate:'-50% -50%',
        opacity: state === 'hidden' ? 0 : 1,
        transition:'width 0.22s cubic-bezier(.2,.8,.2,1), height 0.22s cubic-bezier(.2,.8,.2,1), opacity 0.18s, background 0.22s, border 0.22s',
        backdropFilter: state === 'hover' ? 'blur(2px)' : 'none',
      }} />

      {/* "View" label */}
      {state === 'view' && (
        <div ref={labelRef} style={{
          position:'fixed', top:0, left:0, zIndex:99999, pointerEvents:'none',
          translate:'-50% -50%', display:'flex', alignItems:'center',
          justifyContent:'center', width:74, height:74, borderRadius:'50%',
          fontFamily:"'JetBrains Mono',monospace", fontSize:9, fontWeight:700,
          letterSpacing:'0.18em', color:'#e91e8c', userSelect:'none', textTransform:'uppercase',
        }}>
          View
        </div>
      )}
    </>
  );
}

/* ════════════════════════════════════════════════════════════════
   3. CLICK RIPPLE
   ════════════════════════════════════════════════════════════════ */
function spawnRipple(x, y) {
  const el = document.createElement('div');
  Object.assign(el.style, {
    position:'fixed', left:`${x}px`, top:`${y}px`,
    width:'6px', height:'6px', borderRadius:'50%',
    border:'1.5px solid rgba(233,30,140,0.9)',
    transform:'translate(-50%,-50%) scale(0)',
    zIndex:99997, pointerEvents:'none',
    animation:'cursorRipple 0.6s cubic-bezier(.2,.8,.2,1) forwards',
  });
  document.body.appendChild(el);
  el.addEventListener('animationend', () => el.remove());

  // Second, bigger ripple (purple)
  const el2 = document.createElement('div');
  Object.assign(el2.style, {
    position:'fixed', left:`${x}px`, top:`${y}px`,
    width:'6px', height:'6px', borderRadius:'50%',
    border:'1px solid rgba(156,77,204,0.6)',
    transform:'translate(-50%,-50%) scale(0)',
    zIndex:99996, pointerEvents:'none',
    animation:'cursorRipple 0.8s cubic-bezier(.2,.8,.2,1) 0.08s forwards',
  });
  document.body.appendChild(el2);
  el2.addEventListener('animationend', () => el2.remove());
}

/* ════════════════════════════════════════════════════════════════
   4. MAGNETIC BUTTONS
   ════════════════════════════════════════════════════════════════ */
function useMagneticButtons() {
  useEffect(() => {
    const strength = 0.38;

    const onMove = (e) => {
      document.querySelectorAll('.digi-btn, .btn-primary, [data-magnetic]').forEach(el => {
        const rect = el.getBoundingClientRect();
        const cx   = rect.left + rect.width  / 2;
        const cy   = rect.top  + rect.height / 2;
        const dx   = e.clientX - cx;
        const dy   = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        const pull = rect.width * 0.85;          // activation radius

        if (dist < pull) {
          const factor = (1 - dist / pull) * strength;
          el.style.transform    = `translate(${dx * factor}px, ${dy * factor}px) scale(1.04)`;
          el.style.transition   = 'transform 0.15s cubic-bezier(.2,.7,.2,1)';
        } else {
          el.style.transform    = '';
          el.style.transition   = 'transform 0.35s cubic-bezier(.2,.7,.2,1)';
        }
      });
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
}

/* ════════════════════════════════════════════════════════════════
   5. 3D CARD TILT — digi-card & portfolio-card
   ════════════════════════════════════════════════════════════════ */
function use3DTilt() {
  useEffect(() => {
    const MAX_TILT = 10;   // degrees

    const onMove = (e) => {
      document.querySelectorAll('.digi-card, .portfolio-card, [data-tilt]').forEach(el => {
        const rect   = el.getBoundingClientRect();
        // Only tilt if cursor is inside the card
        if (
          e.clientX < rect.left || e.clientX > rect.right ||
          e.clientY < rect.top  || e.clientY > rect.bottom
        ) return;

        const rx = ((e.clientY - rect.top)  / rect.height - 0.5) * -MAX_TILT;
        const ry = ((e.clientX - rect.left) / rect.width  - 0.5) *  MAX_TILT;

        el.style.transform      = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
        el.style.transition     = 'transform 0.08s linear';
        el.style.willChange     = 'transform';
      });
    };

    const onLeave = (e) => {
      const el = e.target.closest('.digi-card, .portfolio-card, [data-tilt]');
      if (!el) return;
      el.style.transform  = '';
      el.style.transition = 'transform 0.45s cubic-bezier(.2,.8,.2,1)';
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave, true);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave, true);
    };
  }, []);
}

/* ════════════════════════════════════════════════════════════════
   6. SPARKLE BURST — brand-only stars on link/button hover
   ════════════════════════════════════════════════════════════════ */
// Only fuchsia + purple brand colors
const SPARKLE_COLORS = [
  '#e91e8c',   // vibrant-fuchsia
  '#c2185b',   // fuchsia-deep
  '#f050a0',   // fuchsia-light
  '#7b2d9e',   // soft-purple
  '#9c4dcc',   // mid-purple
  '#ffffff',   // white spark
];

function spawnSparkles(x, y, count = 8) {
  for (let i = 0; i < count; i++) {
    const s     = document.createElement('div');
    const angle = (Math.PI * 2 / count) * i + Math.random() * 0.5;
    const dist  = 18 + Math.random() * 28;
    const tx    = Math.cos(angle) * dist;
    const ty    = Math.sin(angle) * dist;
    const size  = 2 + Math.random() * 4;
    const color = SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)];
    const dur   = 0.4 + Math.random() * 0.35;

    Object.assign(s.style, {
      position:    'fixed',
      left:        `${x}px`,
      top:         `${y}px`,
      width:       `${size}px`,
      height:      `${size}px`,
      borderRadius:'50%',
      background:  color,
      boxShadow:   `0 0 ${size * 2}px ${color}`,
      zIndex:      99995,
      pointerEvents:'none',
      transform:   'translate(-50%,-50%) scale(1)',
      animation:   `sparkle ${dur}s cubic-bezier(.2,.8,.2,1) forwards`,
      '--tx':      `${tx}px`,
      '--ty':      `${ty}px`,
    });
    document.body.appendChild(s);
    s.addEventListener('animationend', () => s.remove());
  }
}

function useSparkles() {
  useEffect(() => {
    const onEnter = (e) => {
      const el = e.target.closest('a, button, .digi-btn, [data-sparkle]');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      spawnSparkles(rect.left + rect.width / 2, rect.top + rect.height / 2, 10);
    };
    document.addEventListener('mouseenter', onEnter, true);
    return () => document.removeEventListener('mouseenter', onEnter, true);
  }, []);
}

/* ════════════════════════════════════════════════════════════════
   7. PROXIMITY SPOTLIGHT — radial glow follows cursor per section
   ════════════════════════════════════════════════════════════════ */
function useSpotlight() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const onMove = (e) => {
      sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (
          e.clientX >= rect.left && e.clientX <= rect.right &&
          e.clientY >= rect.top  && e.clientY <= rect.bottom
        ) {
          const x = ((e.clientX - rect.left) / rect.width)  * 100;
          const y = ((e.clientY - rect.top)  / rect.height) * 100;
          sec.style.setProperty('--spot-x', `${x}%`);
          sec.style.setProperty('--spot-y', `${y}%`);
          sec.classList.add('has-spotlight');
        }
      });
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
}

/* ════════════════════════════════════════════════════════════════
   8. TEXT SCRAMBLE — headings scramble on scroll-enter (once)
   ════════════════════════════════════════════════════════════════ */
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%*';

function scramble(el, duration = 900) {
  const original = el.textContent;
  const len      = original.length;
  let   elapsed  = 0;
  const step     = 30;

  const tick = setInterval(() => {
    elapsed += step;
    const progress = Math.min(elapsed / duration, 1);
    const revealed = Math.floor(progress * len);

    el.textContent = original
      .split('')
      .map((ch, i) => {
        if (ch === ' ') return ' ';
        if (i < revealed) return original[i];
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      })
      .join('');

    if (progress >= 1) {
      clearInterval(tick);
      el.textContent = original;
    }
  }, step);
}

function useScramble() {
  useEffect(() => {
    const targets = document.querySelectorAll('h1, h2, .section-title');
    const done    = new WeakSet();

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting && !done.has(target)) {
            done.add(target);
            // Small delay so user sees the section first
            setTimeout(() => scramble(target, 800), 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    targets.forEach(t => obs.observe(t));
    return () => obs.disconnect();
  }, []);
}

/* ════════════════════════════════════════════════════════════════
   MAIN EXPORT — compose all systems
   ════════════════════════════════════════════════════════════════ */

export default function CursorFX() {
  // Skip on touch / mobile devices
  const isTouch =
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: none)').matches;

  // All hook-based effects
  useMagneticButtons();
  use3DTilt();
  useSparkles();
  useSpotlight();
  useScramble();

  if (isTouch) return null;

  return (
    <>
      <SmokeCanvas />
      <CursorRing />
    </>
  );
}
