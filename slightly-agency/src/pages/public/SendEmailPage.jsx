import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Send,
  Mail,
  User,
  Building,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  FileText
} from 'lucide-react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'

const servicesList = [
  'Web Development',
  'SEO Optimization',
  'Brand Identity',
  'Content Marketing',
  'Social Media Growth',
  'Custom Enterprise Project'
]

const budgetRanges = [
  '<$2,500',
  '$2,500 - $5,000',
  '$5,000 - $10,000',
  '$10,000+'
]

export default function SendEmailPage() {
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    companyName: '',
    selectedService: 'Web Development',
    budget: '$5,000 - $10,000',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState('idle') // idle | sending | success

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.clientEmail || !formData.clientName || !formData.message) {
      alert('Please fill out your Name, Email, and Message.')
      return
    }

    setStatus('sending')

    // Simulate sending email to server/agency inbox
    setTimeout(() => {
      setStatus('success')
    }, 1500)
  }

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

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Back button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-vibrant-fuchsia transition-colors mb-8 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vibrant-fuchsia/30 bg-vibrant-fuchsia/10 mb-4">
              <Sparkles size={14} className="text-vibrant-fuchsia" />
              <span className="text-xs font-semibold text-vibrant-fuchsia uppercase tracking-widest">
                Direct Client Inquiry
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black font-display tracking-tight mb-4">
              Let's Start Your <span className="gradient-text">Project</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Send an instant message directly to our strategy team using your client email. We reply to all inquiries within 2 hours.
            </p>
          </div>

          {/* Centered Form Card */}
          <div className="glass-card p-8 sm:p-12 relative max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center text-green-400 shadow-lg shadow-green-500/20">
                    <CheckCircle2 size={42} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold font-display text-white">Email Sent Successfully!</h3>
                    <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you <span className="text-vibrant-fuchsia font-semibold">{formData.clientName}</span>. We have received your inquiry from <span className="text-white font-mono bg-white/10 px-2 py-0.5 rounded">{formData.clientEmail}</span> and our lead team will reach out to you shortly.
                    </p>
                  </div>

                  <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={() => {
                        setStatus('idle')
                        setFormData({
                          clientName: '',
                          clientEmail: '',
                          companyName: '',
                          selectedService: 'Web Development',
                          budget: '$5,000 - $10,000',
                          subject: '',
                          message: ''
                        })
                      }}
                      className="px-6 py-3 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-white hover:bg-white/10 transition-colors w-full sm:w-auto"
                    >
                      Send Another Email
                    </button>
                    <Link
                      to="/"
                      className="btn-primary text-xs py-3 px-8 uppercase tracking-wider w-full sm:w-auto text-center"
                    >
                      Back to Home
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Form Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                      <FileText size={14} className="text-vibrant-fuchsia" /> Fill Client Inquiry Form
                    </span>
                  </div>

                  {/* Client Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                        Your Name <span className="text-vibrant-fuchsia">*</span>
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                          type="text"
                          name="clientName"
                          required
                          value={formData.clientName}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-vibrant-fuchsia focus:ring-1 focus:ring-vibrant-fuchsia transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                        Client Email ID <span className="text-vibrant-fuchsia">*</span>
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                          type="email"
                          name="clientEmail"
                          required
                          value={formData.clientEmail}
                          onChange={handleChange}
                          placeholder="john@yourcompany.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-vibrant-fuchsia focus:ring-1 focus:ring-vibrant-fuchsia transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company Name & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                        Company / Organization
                      </label>
                      <div className="relative">
                        <Building size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="Acme Corp"
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-vibrant-fuchsia focus:ring-1 focus:ring-vibrant-fuchsia transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="New Project Inquiry"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-vibrant-fuchsia focus:ring-1 focus:ring-vibrant-fuchsia transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                      Service Interested In
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {servicesList.map((service) => {
                        const isSelected = formData.selectedService === service
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => setFormData((prev) => ({ ...prev, selectedService: service }))}
                            className={`px-3 py-2.5 rounded-xl text-xs font-medium border transition-all text-left truncate ${
                              isSelected
                                ? 'bg-vibrant-fuchsia/20 border-vibrant-fuchsia text-white font-bold'
                                : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-gray-200'
                            }`}
                          >
                            {service}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                      Estimated Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetRanges.map((b) => {
                        const isSelected = formData.budget === b
                        return (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setFormData((prev) => ({ ...prev, budget: b }))}
                            className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                              isSelected
                                ? 'bg-gradient-to-r from-vibrant-fuchsia to-soft-purple border-vibrant-fuchsia text-white'
                                : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-gray-200'
                            }`}
                          >
                            {b}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Message details */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                      Project Details / Message <span className="text-vibrant-fuchsia">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your goals, timelines, or specific requirements..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-gray-500 outline-none focus:border-vibrant-fuchsia focus:ring-1 focus:ring-vibrant-fuchsia transition-all resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary w-full py-4 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-vibrant-fuchsia/20 disabled:opacity-50"
                    >
                      {status === 'sending' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending Email...
                        </>
                      ) : (
                        <>
                          <Send size={16} /> Send Email Directly
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
