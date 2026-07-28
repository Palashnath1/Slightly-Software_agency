import { useParams, Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import AnimatedSection from "../../components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { services } from "../../data/services";
import { Check, ArrowRight, TrendingUp, Users, Award } from "lucide-react";

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId) || services[0];

  return (
    <div className="min-h-screen bg-deep-aubergine">
      <Header />

      {/* Hero */}
      <section
        className="pt-36 pb-24 relative overflow-hidden"
        style={{
          background: `radial-gradient(ellipse at 30% 50%, ${service.color}20 0%, transparent 60%)`,
        }}
      >
        <div
          className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: service.color }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection variant="fadeLeft">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors"
              >
                ← Back to Services
              </Link>
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: `${service.color}20`,
                  border: `1px solid ${service.color}40`,
                }}
              >
                <service.icon size={28} style={{ color: service.color }} />
              </div>
              <p className="section-label mb-3">{service.shortTitle}</p>
              <h1 className="text-5xl md:text-6xl font-black font-display mb-6 text-white">
                {service.title}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {service.longDescription}
              </p>
              <div className="flex gap-4">
                <Link
                  to="/send_email"
                  className="btn-primary flex items-center gap-2"
                >
                  Get Started <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="btn-outline">
                  View All Services
                </Link>
              </div>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection variant="fadeRight">
              <div className="grid grid-cols-3 gap-4">
                {[
                  {
                    icon: TrendingUp,
                    label: "Projects",
                    value: `${service.stats.projects}+`,
                    color: service.color,
                  },
                  {
                    icon: Users,
                    label: "Clients",
                    value: `${service.stats.clients}+`,
                    color: "#7b2d9e",
                  },
                  {
                    icon: Award,
                    label: "Satisfaction",
                    value: `${service.stats.satisfaction}%`,
                    color: "#ffd700",
                  },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -5 }}
                    className="glass-card p-5 text-center"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                      style={{ background: `${stat.color}20` }}
                    >
                      <stat.icon size={18} style={{ color: stat.color }} />
                    </div>
                    <div
                      className="text-2xl font-black font-display"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection variant="fadeLeft">
              <h2 className="section-title text-3xl md:text-4xl mb-8">
                What's <span className="gradient-text">Included</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 glass-card px-4 py-3"
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}, #7b2d9e)`,
                      }}
                    >
                      <Check size={11} className="text-white" />
                    </div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Case Studies */}
            <AnimatedSection variant="fadeRight">
              <h2 className="section-title text-3xl md:text-4xl mb-8">
                Case <span className="gradient-text">Studies</span>
              </h2>
              <div className="space-y-4">
                {service.caseStudies.map((cs, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    className="glass-card p-6 border-l-4"
                    style={{ borderLeftColor: service.color }}
                  >
                    <h3 className="font-bold text-white mb-2">{cs.title}</h3>
                    <div
                      className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: `${service.color}15`,
                        color: service.color,
                      }}
                    >
                      <TrendingUp size={12} /> {cs.result}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div
                className="mt-8 rounded-2xl p-6"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(233,30,140,0.1), rgba(123,45,158,0.1))",
                  border: "1px solid rgba(233,30,140,0.2)",
                }}
              >
                <h3 className="font-bold text-white mb-2">
                  Ready to get results like these?
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Let's discuss how we can apply these strategies to your
                  business.
                </p>
                <Link
                  to="/send_email"
                  className="btn-primary inline-flex items-center gap-2 text-sm"
                >
                  Start Your Project <ArrowRight size={14} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
