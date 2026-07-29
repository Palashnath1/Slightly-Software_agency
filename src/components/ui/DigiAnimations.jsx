/**
 * DigiAnimations.jsx
 * Reusable Digitz-style animation primitives.
 * Inspired by https://digitz.fr
 */
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// ── Ease curves from Digitz ──────────────────────────────────────────────────
export const easeSnap  = [0.7, 0, 0.3, 1];   // cubic-bezier(.7,0,.3,1) — decisive
export const easeOut   = [0.2, 0.8, 0.2, 1];  // cubic-bezier(.2,.8,.2,1) — smooth land
export const easeSoft  = [0.2, 0.7, 0.2, 1];  // cubic-bezier(.2,.7,.2,1) — card lift

// ── Staggered scroll-reveal container ────────────────────────────────────────
export function RevealGroup({ children, className = '', stagger = 0.08, once = true }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '-80px 0px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

// ── Individual reveal item: fadeUp ───────────────────────────────────────────
export function RevealItem({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden:  { opacity: 0, y: 22 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut, delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

// ── CTA Button — slide fill from left ────────────────────────────────────────
// Matches digitz's .cta-slide animation
export function CtaButton({ children, href, className = '', variant = 'primary', onClick }) {
  const Tag = href ? motion.a : motion.button;
  const extra = href ? { href } : { onClick };

  const base = 'relative inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold tracking-wide overflow-hidden transition-colors duration-300 rounded-full';

  const styles = {
    primary: {
      outer: 'border border-vibrant-fuchsia text-white',
      fill:  'bg-gradient-to-r from-vibrant-fuchsia to-soft-purple',
      textHover: 'text-white',
    },
    outline: {
      outer: 'border border-white/20 text-gray-300',
      fill:  'bg-vibrant-fuchsia',
      textHover: 'text-white',
    },
  };

  const s = styles[variant] || styles.primary;

  return (
    <Tag
      {...extra}
      className={`${base} ${s.outer} ${className} group`}
    >
      {/* Fill layer */}
      <motion.span
        aria-hidden="true"
        className={`absolute inset-0 ${s.fill} z-0`}
        style={{ transformOrigin: 'left center' }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.38, ease: easeSnap }}
      />
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2 transition-colors duration-300">
        {children}
      </span>
    </Tag>
  );
}

// ── Underline Link — line grows from left on hover ───────────────────────────
// Matches digitz's .tl-reveal / .editorial-link animation
export function UnderlineLink({ children, href, to, className = '', color = '#e91e8c', Tag = 'a' }) {
  return (
    <Tag
      href={href}
      to={to}
      className={`relative inline-flex items-center gap-2 transition-colors duration-300 hover:text-vibrant-fuchsia cursor-pointer ${className}`}
    >
      {children}
      <motion.span
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: color, transformOrigin: 'left center' }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.36, ease: easeSnap }}
      />
    </Tag>
  );
}

// ── Arrow shift — icon nudges right on hover ──────────────────────────────────
// Matches digitz's .arrow-shift
export function ArrowShift({ children, className = '' }) {
  return (
    <motion.span
      className={`inline-flex items-center ${className}`}
      initial={{ x: 0 }}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.22, ease: easeSoft }}
    >
      {children}
    </motion.span>
  );
}

// ── Card lift — subtle translateY(-3px) + border accent ──────────────────────
// Matches digitz's .case-card hover
export function LiftCard({ children, className = '', borderHover = 'rgba(233,30,140,0.5)' }) {
  return (
    <motion.div
      className={className}
      style={{ willChange: 'transform' }}
      initial={{ y: 0, borderColor: 'rgba(233,30,140,0.15)' }}
      whileHover={{
        y: -4,
        borderColor: borderHover,
        transition: { duration: 0.28, ease: easeSoft },
      }}
    >
      {children}
    </motion.div>
  );
}

// ── Section entrance — single element fadeUp triggered by scroll ──────────────
export function FadeUpOnScroll({ children, className = '', delay = 0, once = true }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '-60px 0px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.62, ease: easeOut, delay }}
    >
      {children}
    </motion.div>
  );
}

// ── Marquee track (used by CTA buttons on hover) ─────────────────────────────
export function MarqueeTrack({ items, speed = 30 }) {
  const totalItems = [...items, ...items]; // duplicate for seamless loop
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        {totalItems.map((item, i) => (
          <span key={i} className="font-mono text-xs tracking-widest opacity-60 uppercase">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
