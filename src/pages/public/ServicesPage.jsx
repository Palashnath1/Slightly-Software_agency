import { Link } from 'react-router-dom'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import AnimatedSection from '../../components/ui/AnimatedSection'
import { motion } from 'framer-motion'
import { variants } from '../../components/ui/AnimatedSection'
import { services } from '../../data/services'
import { ArrowRight } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-deep-aubergine">
      <Header />

      {/* Hero */}
      <section
        className="pt-36 pb-20 relative overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(45,16,87,0.5) 0%, transparent 70%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection variant="fadeUp">
            <p className="section-label mb-4">What We Do</p>
            <h1 className="text-5xl md:text-6xl font-black font-display mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Full-service digital solutions that drive growth, build brands, and deliver measurable results across every channel.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection stagger staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={variants.fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card p-7 group cursor-pointer relative overflow-hidden"
              >
                {/* Glow bg */}
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
                  style={{ background: service.color }}
                />

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300"
                  style={{ background: `${service.color}20`, border: `1px solid ${service.color}40` }}
                >
                  <service.icon size={22} style={{ color: service.color }} />
                </div>

                <h2 className="text-xl font-bold text-white font-display mb-3 group-hover:text-vibrant-fuchsia transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {service.features.slice(0, 3).map((f) => (
                    <span
                      key={f}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#9ca3af' }}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <div>
                      <div className="text-xl font-black" style={{ color: service.color }}>{service.stats.projects}+</div>
                      <div className="text-xs text-gray-500">Projects</div>
                    </div>
                    <div>
                      <div className="text-xl font-black text-white">{service.stats.satisfaction}%</div>
                      <div className="text-xs text-gray-500">Satisfaction</div>
                    </div>
                  </div>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                    style={{ color: service.color }}
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
