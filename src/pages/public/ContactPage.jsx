import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowLeft,
  Sparkles,
  MessageSquare,
  Globe,
  Send
} from 'lucide-react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import { SocialTwitter, SocialInstagram, SocialFacebook, SocialLinkedin } from '../../components/ui/SocialIcons'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d0118] text-white selection:bg-vibrant-fuchsia selection:text-white">
      <Header />

      <main className="flex-1 relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute rounded-full opacity-25 blur-3xl"
            style={{
              width: 600,
              height: 600,
              top: '-10%',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'radial-gradient(circle, #e91e8c 0%, #7b2d9e 70%)'
            }}
          />
          <div
            className="absolute rounded-full opacity-15 blur-3xl"
            style={{ width: 400, height: 400, bottom: '10%', right: '10%', background: '#7b2d9e' }}
          />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Back button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-vibrant-fuchsia transition-colors mb-8 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vibrant-fuchsia/30 bg-vibrant-fuchsia/10 mb-4">
              <Sparkles size={14} className="text-vibrant-fuchsia" />
              <span className="text-xs font-semibold text-vibrant-fuchsia uppercase tracking-widest">
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black font-display tracking-tight mb-4">
              Contact <span className="gradient-text">Details</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Have questions, partnership inquiries, or need immediate assistance? Reach out to our team directly.
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Card 1: Direct Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 relative overflow-hidden group hover:border-vibrant-fuchsia/30 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-vibrant-fuchsia/10 border border-vibrant-fuchsia/20 flex items-center justify-center text-vibrant-fuchsia flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="text-xs font-bold text-vibrant-fuchsia uppercase tracking-widest mb-1">Direct Email</div>
                  <h3 className="text-xl font-bold text-white mb-2">hello@slightly.agency</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    Send us your project briefs, questions, or RFPs. We review incoming mail continuously.
                  </p>
                  <a
                    href="mailto:hello@slightly.agency"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-vibrant-fuchsia transition-colors"
                  >
                    Send Email <Send size={12} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Phone Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 relative overflow-hidden group hover:border-soft-purple/40 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-soft-purple/10 border border-soft-purple/20 flex items-center justify-center text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-1">Phone Support</div>
                  <h3 className="text-xl font-bold text-white mb-2">+1 (555) 234-5678</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    Speak directly with a client success advisor Monday through Friday, 9:00 AM – 6:00 PM EST.
                  </p>
                  <a
                    href="tel:+15552345678"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-purple-300 transition-colors"
                  >
                    Call Us Now <Phone size={12} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Headquarters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-8 relative overflow-hidden group hover:border-yellow-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-gold flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="text-xs font-bold text-gold uppercase tracking-widest mb-1">Headquarters</div>
                  <h3 className="text-lg font-bold text-white mb-1">123 Digital Ave, Suite 400</h3>
                  <p className="text-xs text-gray-400 mb-4">New York, NY 10001, United States</p>
                  <div className="text-xs text-gray-500 flex items-center gap-2">
                    <Globe size={14} className="text-gold" /> Global Remote Operations Available
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 4: Response Time & Privacy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-8 relative overflow-hidden group hover:border-green-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Clock size={22} />
                </div>
                <div>
                  <div className="text-xs font-bold text-green-400 uppercase tracking-widest mb-1">Guaranteed Response</div>
                  <h3 className="text-lg font-bold text-white mb-1">Avg 1-2 Hours Response</h3>
                  <p className="text-xs text-gray-400 mb-4">
                    Every inquiry receives rapid turnarounds from our lead strategist.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-green-400 font-semibold">
                    <ShieldCheck size={16} /> Protected Under Mutual NDA
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Links Banner & Send Email CTA */}
          <div className="glass-card p-8 text-center flex flex-col md:flex-row items-center justify-between gap-6 border-t-2 border-vibrant-fuchsia">
            <div className="text-left">
              <h3 className="text-lg font-bold text-white mb-1">Ready to start a project?</h3>
              <p className="text-xs text-gray-400">Fill out our quick client inquiry form to get a personalized quote.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 mr-4">
                {[SocialTwitter, SocialInstagram, SocialFacebook, SocialLinkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-vibrant-fuchsia transition-colors bg-white/5 border border-white/10"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
              <Link to="/send_email" className="btn-primary text-xs py-3 px-6 uppercase tracking-wider">
                Fill Inquiry Form ↗
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
