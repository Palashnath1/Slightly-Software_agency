import { motion } from 'framer-motion'
import { FadeUpOnScroll, RevealGroup, RevealItem } from '../ui/DigiAnimations'

const clients = [
  { name: 'Cloudify',    symbol: '☁️' },
  { name: 'Nexaflow',   symbol: '⚡' },
  { name: 'Brightron',  symbol: '◆'  },
  { name: 'Scopeware',  symbol: '◉'  },
  { name: 'Engagespot', symbol: '✦'  },
  { name: 'Zoro',       symbol: '⬡'  },
]

// Running ticker text - like Digitz's marquee
const tickerItems = [
  'Web Development', '·', 'AI & Automation', '·', 'Brand Identity', '·',
  'SEO Optimization', '·', 'UI/UX Design', '·', 'Content Strategy', '·',
  'Social Media', '·', 'E-Commerce', '·',
]

export default function ClientsSection() {
  return (
    <section className="relative border-y border-white/5 overflow-hidden" style={{ background: 'rgba(13,1,24,0.8)' }}>

      {/* ── Marquee ticker strip (Digitz-style) ─────────────────── */}
      <div className="py-4 border-b border-white/5 overflow-hidden">
        <div className="digi-marq-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="font-mono text-[10px] tracking-[0.22em] uppercase"
              style={{ color: item === '·' ? '#e91e8c' : 'rgba(255,255,255,0.35)' }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FadeUpOnScroll className="text-center mb-10">
          <p className="digi-section-marker justify-center mb-3">Our Clients</p>
          <h2 className="text-xl font-semibold text-gray-300">Trusted by Industry Leaders</h2>
        </FadeUpOnScroll>

        {/* ── Client cells with Digitz bottom-line reveal ─────────── */}
        <RevealGroup className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 border border-white/5 rounded-2xl overflow-hidden" stagger={0.07}>
          {clients.map((client) => (
            <RevealItem key={client.name}>
              <div
                className="digi-client-cell flex flex-col items-center justify-center gap-3 py-8 px-4 border-r border-white/5 last:border-r-0"
              >
                <div
                  className="digi-client-logo w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(233,30,140,0.15), rgba(123,45,158,0.15))',
                    border: '1px solid rgba(233,30,140,0.15)',
                    opacity: 0.65,
                  }}
                >
                  {client.symbol}
                </div>
                <span
                  className="digi-client-logo text-sm font-semibold font-display tracking-wide"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                >
                  {client.name}
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
