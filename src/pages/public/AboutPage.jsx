import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import AnimatedSection from '../../components/ui/AnimatedSection'
import { motion } from 'framer-motion'
import { variants } from '../../components/ui/AnimatedSection'
import aboutTeamPhoto from '../../assets/images/about_team_full.png'
import { Target, Eye, Heart, Zap, Award, Users, Globe, TrendingUp } from 'lucide-react'

const teamMembers = [
  { name: 'Alexandra Chen', role: 'CEO & Founder', emoji: '👩‍💼', bio: 'Former Google strategist with 12+ years building digital empires for Fortune 500 companies.', color: '#e91e8c' },
  { name: 'Marcus Williams', role: 'CTO', emoji: '👨‍💻', bio: 'Full-stack architect who has shipped products to 50M+ users. Former Stripe engineer.', color: '#7b2d9e' },
  { name: 'Priya Anand', role: 'Creative Director', emoji: '👩‍🎨', bio: 'Award-winning designer with an eye for brand identities that command premium prices.', color: '#c2185b' },
  { name: 'James Okafor', role: 'Head of SEO', emoji: '📈', bio: 'Built and scaled organic traffic from zero to 10M sessions/month for multiple clients.', color: '#ffd700' },
  { name: 'Sofia Rodriguez', role: 'Content Strategist', emoji: '✍️', bio: 'Storyteller who has helped brands achieve viral content reaching billions of impressions.', color: '#e91e8c' },
  { name: 'David Kim', role: 'Paid Media Director', emoji: '🎯', bio: 'Managed $50M+ in ad spend with consistent 4-8x ROAS across industries.', color: '#7b2d9e' },
]

const values = [
  { icon: Target, title: 'Results-Driven', desc: 'Every strategy we build is engineered toward measurable business outcomes.', color: '#e91e8c' },
  { icon: Eye, title: 'Transparent', desc: 'No black boxes. Full visibility into every campaign, metric, and decision.', color: '#7b2d9e' },
  { icon: Heart, title: 'Client-First', desc: 'Your success is our success. We treat every brand like our own.', color: '#c2185b' },
  { icon: Zap, title: 'Innovative', desc: 'We stay ahead of trends so your brand is always positioned at the frontier.', color: '#ffd700' },
]

const stats = [
  { icon: Award, value: '8+', label: 'Years of Excellence', color: '#e91e8c' },
  { icon: Users, value: '500+', label: 'Happy Clients', color: '#7b2d9e' },
  { icon: Globe, value: '35+', label: 'Countries Reached', color: '#c2185b' },
  { icon: TrendingUp, value: '$200M+', label: 'Revenue Generated', color: '#ffd700' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-deep-aubergine">
      <Header />

      {/* Hero */}
      <section
        className="pt-36 pb-20 relative overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(45,16,87,0.5) 0%, transparent 70%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection variant="fadeLeft">
              <p className="section-label mb-4">About Us</p>
              <h1 className="text-5xl md:text-6xl font-black font-display mb-6 text-white leading-tight">
                We Build Digital{' '}
                <span className="gradient-text">Empires</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Slightly was founded in 2016 with a bold mission: to help ambitious brands dominate their digital landscapes. We're not just an agency — we're your growth partners.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our team of 40+ specialists across design, development, SEO, and content work in harmony to deliver integrated digital strategies that produce extraordinary results. We've helped over 500 businesses across 35 countries grow their online presence.
              </p>
            </AnimatedSection>

            <AnimatedSection variant="fadeRight" className="relative">
              <div className="rounded-3xl overflow-hidden h-96">
                <img src={aboutTeamPhoto} alt="The Slightly Team" className="w-full h-full object-cover" />
                <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(45,16,87,0.3), transparent)' }} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection stagger staggerChildren={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={variants.scaleIn} className="text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: `${stat.color}20` }}
                >
                  <stat.icon size={20} style={{ color: stat.color }} />
                </div>
                <div className="text-3xl font-black font-display gradient-text mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-12">
            <p className="section-label mb-3">Our Values</p>
            <h2 className="section-title text-4xl md:text-5xl mb-4">
              What <span className="gradient-text">Drives</span> Us
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={variants.fadeUp}
                whileHover={{ y: -8 }}
                className="glass-card p-6 text-center group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${value.color}20`, border: `1px solid ${value.color}30` }}
                >
                  <value.icon size={22} style={{ color: value.color }} />
                </div>
                <h3 className="font-bold text-white font-display mb-2 group-hover:text-vibrant-fuchsia transition-colors">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-12">
            <p className="section-label mb-3">The Team</p>
            <h2 className="section-title text-4xl md:text-5xl mb-4">
              Meet the <span className="gradient-text">Experts</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Our team of specialists brings decades of combined experience in every facet of digital marketing and development.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger staggerChildren={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={variants.fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card p-6 group relative overflow-hidden"
              >
                <div
                  className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-2xl"
                  style={{ background: member.color }}
                />
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: `${member.color}20`, border: `1px solid ${member.color}30` }}
                  >
                    {member.emoji}
                  </div>
                  <div>
                    <h3 className="font-bold text-white font-display">{member.name}</h3>
                    <p className="text-xs font-semibold" style={{ color: member.color }}>{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
