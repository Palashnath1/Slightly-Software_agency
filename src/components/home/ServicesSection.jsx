import { Link } from 'react-router-dom'
import AnimatedSection from '../ui/AnimatedSection'
import { motion } from 'framer-motion'
import { variants } from '../ui/AnimatedSection'
import { serviceFeatures } from '../../data/services'
import teamPhoto from '../../assets/images/team_photo.png'
import { ArrowRight } from 'lucide-react'

function ProgressBar({ percentage, color }) {
  return (
    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}, rgba(123,45,158,0.8))` }}
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
      />
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      {/* Background glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: '#e91e8c' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Team Photo */}
          <AnimatedSection variant="fadeLeft" className="relative">
            <div className="relative rounded-3xl overflow-hidden" style={{ height: '520px' }}>
              <img src={teamPhoto} alt="Our Team" className="w-full h-full object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(13,1,24,0.3), rgba(45,16,87,0.2))' }}
              />
            </div>
            {/* Floating stat card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-6 -right-6 glass-card p-5"
            >
              <div className="text-3xl font-black font-display gradient-text">98%</div>
              <div className="text-xs text-gray-400 mt-1">Client Satisfaction</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
              className="absolute -top-6 -left-6 glass-card p-5"
            >
              <div className="text-3xl font-black font-display" style={{ color: '#ffd700' }}>150+</div>
              <div className="text-xs text-gray-400 mt-1">Projects Delivered</div>
            </motion.div>
          </AnimatedSection>

          {/* Right: Content */}
          <AnimatedSection variant="fadeRight" className="space-y-8">
            <div>
              <p className="section-label mb-3">Services We Offer</p>
              <h2 className="section-title text-4xl md:text-5xl mb-4">
                Grow Your{' '}
                <span className="gradient-text">Online Presence</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We combine creative excellence with data-driven strategies to build powerful digital presences. Our full-service approach ensures every aspect of your brand works together seamlessly.
              </p>
              <Link to="/services" className="digi-btn">
                Explore Services
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="digi-arrow">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </Link>
            </div>

            {/* Feature Cards */}
            <AnimatedSection stagger staggerChildren={0.15} className="space-y-4">
              {serviceFeatures.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={variants.fadeUp}
                  className="digi-service-card digi-card p-5 group"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: `${feature.color}20`, border: `1px solid ${feature.color}30` }}
                    >
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-white text-sm">{feature.title}</h3>
                        <span className="text-sm font-bold" style={{ color: feature.color }}>
                          {feature.percentage}%
                        </span>
                      </div>
                      <ProgressBar percentage={feature.percentage} color={feature.color} />
                      <p className="text-gray-500 text-xs mt-2 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
