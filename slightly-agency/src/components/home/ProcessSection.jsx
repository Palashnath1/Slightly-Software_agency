import { Link } from "react-router-dom";
import AnimatedSection from "../ui/AnimatedSection";
import { motion } from "framer-motion";
import { variants } from "../ui/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Discovery & Research",
    description:
      "We immerse ourselves in your brand, market, and goals to build a solid strategic foundation.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "Our experts craft a tailored roadmap with clear milestones and measurable KPIs.",
  },
  {
    number: "03",
    title: "Creative Execution",
    description:
      "Our talented team brings the strategy to life with stunning design and precision development.",
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description:
      "We deploy, monitor, and continuously optimize for maximum performance and ROI.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0d0118 0%, #110226 50%, #0d0118 100%)",
      }}
    >
      {/* Silhouette-style background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 80%, rgba(233,30,140,0.6) 0%, transparent 40%),
            radial-gradient(circle at 75% 20%, rgba(123,45,158,0.6) 0%, transparent 40%)
          `,
        }}
      />

      {/* Large silhouette team shape */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 opacity-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(233,30,140,0.3), transparent)",
          maskImage: "linear-gradient(to top, black, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <p className="section-label mb-3">How We Work</p>
          <h2 className="section-title text-4xl md:text-5xl mb-4">
            Our Process For{" "}
            <span className="gradient-text">Delivering Results</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            A proven, structured approach that consistently delivers excellence
            and exceeds client expectations.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <AnimatedSection
          stagger
          staggerChildren={0.2}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={variants.scaleIn}
              className="relative group text-center"
            >
              {/* Connector Line */}
              {i < steps.length - 1 && (
                <div
                  className="absolute top-10 left-1/2 w-full h-px hidden lg:block pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(233,30,140,0.5), transparent)",
                    transform: "translateY(-50%)",
                  }}
                />
              )}

              {/* Circle */}
              <div className="flex justify-center mb-6">
                <motion.div
                  className="process-circle relative"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 50px rgba(233,30,140,0.6)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-white font-black font-display text-xl">
                    {step.number}
                  </span>
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-vibrant-fuchsia/30 scale-125 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute inset-0 rounded-full border border-vibrant-fuchsia/15 scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </motion.div>
              </div>

              {/* Text */}
              <h3 className="font-bold text-white text-lg font-display mb-3 group-hover:text-vibrant-fuchsia transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed px-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </AnimatedSection>

        {/* CTA Banner */}
        <AnimatedSection variant="fadeUp" delay={0.4} className="mt-20">
          <div
            className="rounded-3xl p-10 text-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(233,30,140,0.15), rgba(123,45,158,0.1))",
              border: "1px solid rgba(233,30,140,0.2)",
            }}
          >
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, #e91e8c 0%, transparent 70%)",
              }}
            />
            <p className="text-gray-400 text-sm mb-3 relative z-10">
              Got a Question For Us Regarding Our Data Management Solution?
            </p>
            <h3 className="text-2xl font-bold text-white font-display mb-6 relative z-10">
              Let's Start Your{" "}
              <span className="gradient-text">Digital Transformation</span>
            </h3>
            <Link
              to="/contact"
              className="btn-primary inline-block relative z-10"
            >
              Contact Us Today
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
