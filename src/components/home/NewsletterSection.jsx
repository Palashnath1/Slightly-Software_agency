import { useState } from 'react'
import AnimatedSection from '../ui/AnimatedSection'
import { Mail, ArrowRight } from 'lucide-react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section
      id="newsletter"
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #110226 0%, #0d0118 100%)' }}
    >
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #e91e8c, #7b2d9e)' }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimatedSection variant="fadeUp">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ background: 'linear-gradient(135deg, #e91e8c, #7b2d9e)' }}
          >
            <Mail size={24} className="text-white" />
          </div>
          <p className="section-label mb-3">Join Our Mailing List</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
            Stay Ahead of the{' '}
            <span className="gradient-text">Digital Curve</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Get weekly insights on digital marketing trends, SEO tips, and exclusive agency updates directly to your inbox.
          </p>

          {submitted ? (
            <div
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl"
              style={{ background: 'rgba(233,30,140,0.15)', border: '1px solid rgba(233,30,140,0.3)' }}
            >
              <span className="text-2xl">✅</span>
              <span className="text-white font-semibold">You're in! Welcome to the Slightly community.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="flex-1 relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl text-sm text-white placeholder-gray-500 outline-none focus:border-vibrant-fuchsia/50 transition-colors"
                  style={{
                    background: 'rgba(45,16,87,0.4)',
                    border: '1px solid rgba(233,30,140,0.2)',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(233,30,140,0.6)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(233,30,140,0.2)'}
                />
              </div>
              <button type="submit" className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap">
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
          )}

          <p className="text-gray-600 text-xs mt-4">No spam, ever. Unsubscribe at any time.</p>
        </AnimatedSection>
      </div>
    </section>
  )
}
