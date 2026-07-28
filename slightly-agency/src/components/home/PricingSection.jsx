import AnimatedSection from '../ui/AnimatedSection'
import { motion } from 'framer-motion'
import { variants } from '../ui/AnimatedSection'
import { pricingPlans } from '../../data/pricing'
import { Check, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative">
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(45,16,87,0.6) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <p className="section-label mb-3">Pricing</p>
          <h2 className="section-title text-4xl md:text-5xl mb-4">
            Pricing <span className="gradient-text">Plans</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Transparent, flexible pricing designed to scale with your business needs.
          </p>
        </AnimatedSection>

        <AnimatedSection stagger staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={variants.scaleIn}
              className={`pricing-card relative ${plan.featured ? 'featured md:-mt-4' : ''}`}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1"
                  style={{ background: 'linear-gradient(90deg, #e91e8c, #7b2d9e)' }}
                >
                  <Zap size={10} />
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white font-display mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-xs">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-end gap-1">
                  <span className="text-sm text-gray-400">$</span>
                  <span
                    className="text-5xl font-black font-display leading-none"
                    style={plan.featured ? { background: 'linear-gradient(135deg, #e91e8c, #7b2d9e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' } : { color: 'white' }}
                  >
                    {plan.price.toLocaleString()}
                  </span>
                  <span className="text-gray-400 text-sm mb-1">/{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'linear-gradient(135deg, #e91e8c, #7b2d9e)' }}
                    >
                      <Check size={10} className="text-white" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to="/dashboard"
                className={`block text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  plan.featured
                    ? 'btn-primary'
                    : 'border border-white/15 text-gray-300 hover:border-vibrant-fuchsia/40 hover:text-white'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}
