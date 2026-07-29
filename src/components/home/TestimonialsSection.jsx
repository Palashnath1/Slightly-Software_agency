import AnimatedSection from '../ui/AnimatedSection'
import { Star, Quote } from 'lucide-react'
import testimonialsPhoto from '../../assets/images/testimonials_team.png'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, TechVision',
    text: 'Slightly transformed our entire digital presence. Our website traffic tripled and conversions are through the roof. The team is incredibly talented and professional.',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    name: 'James Okafor',
    role: 'Marketing Director, Nexaflow',
    text: "The SEO work they did was remarkable. We went from page 3 to the top of Google in under 4 months. I can't recommend them highly enough.",
    rating: 5,
    avatar: '👨‍💻',
  },
  {
    name: 'Priya Sharma',
    role: 'Founder, Brightron',
    text: 'Our brand identity is now something we are truly proud of. Slightly captured our vision perfectly and created a stunning visual language that speaks to our customers.',
    rating: 5,
    avatar: '👩‍🎨',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo side */}
          <AnimatedSection variant="fadeLeft" className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
            <img
              src={testimonialsPhoto}
              alt="Happy Clients"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(45,16,87,0.5), rgba(233,30,140,0.2))' }}
            />
            {/* Stat overlay */}
            <div className="absolute bottom-6 left-6 right-6 glass-card p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-black font-display gradient-text">500+</div>
                  <div className="text-xs text-gray-400">Happy Clients Worldwide</div>
                </div>
                <div className="flex -space-x-2">
                  {['👩‍💼', '👨‍💻', '👩‍🎨', '🧑‍🚀'].map((emoji, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm border-2 border-deep-aubergine"
                      style={{ background: 'rgba(233,30,140,0.2)' }}
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Testimonials */}
          <div className="space-y-6">
            <AnimatedSection variant="fadeRight">
              <p className="section-label mb-3">Testimonials</p>
              <h2 className="section-title text-4xl md:text-5xl mb-4">
                What Our <span className="gradient-text">Clients Say</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Don't just take our word for it. Here's what our clients say about working with Slightly.
              </p>
            </AnimatedSection>

            <AnimatedSection stagger staggerChildren={0.15} className="space-y-4">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="glass-card p-5 hover:border-vibrant-fuchsia/25 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: 'rgba(233,30,140,0.15)' }}
                    >
                      {t.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <span className="font-semibold text-white text-sm">{t.name}</span>
                          <span className="text-gray-500 text-xs ml-2">— {t.role}</span>
                        </div>
                        <Quote size={14} className="text-vibrant-fuchsia opacity-50" />
                      </div>
                      <div className="flex gap-0.5 mb-2">
                        {Array.from({ length: t.rating }).map((_, si) => (
                          <Star key={si} size={10} className="text-gold fill-gold" style={{ color: '#ffd700', fill: '#ffd700' }} />
                        ))}
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed">{t.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
