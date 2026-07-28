import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { portfolioItems, portfolioFilters } from "../../data/portfolio";
import AnimatedSection from "../ui/AnimatedSection";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filtered = portfolioItems.filter(
    (item) =>
      activeFilter === "ALL" ||
      item.category.toUpperCase() === activeFilter ||
      item.tags.some((t) => t.toUpperCase().includes(activeFilter)),
  );

  return (
    <section id="portfolio" className="py-24 relative">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 0%, rgba(45,16,87,0.5) 0%, transparent 70%)`,
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection variant="fadeUp" className="text-center mb-12">
          <p className="section-label mb-3">Our Portfolio</p>
          <h2 className="section-title text-4xl md:text-5xl mb-4">
            Creative Works & <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            A curated selection of our best projects across design, development,
            and marketing.
          </p>
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection
          variant="fadeUp"
          delay={0.2}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {portfolioFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-widest transition-all duration-300 ${
                activeFilter === filter
                  ? "text-white shadow-glow-fuchsia"
                  : "text-gray-400 hover:text-white border border-white/10 hover:border-vibrant-fuchsia/30"
              }`}
              style={
                activeFilter === filter
                  ? { background: "linear-gradient(90deg, #e91e8c, #7b2d9e)" }
                  : {}
              }
            >
              {filter}
            </button>
          ))}
        </AnimatedSection>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`portfolio-card digi-card group rounded-2xl overflow-hidden border border-vibrant-fuchsia/20 shadow-[0_0_10px_rgba(233,30,140,0.15)] hover:border-vibrant-fuchsia/50 hover:shadow-[0_0_18px_rgba(233,30,140,0.35)] transition-all duration-500 ${
                  i === 0 ? "md:row-span-2" : ""
                }`}
                style={{ minHeight: i === 0 ? "500px" : "240px" }}
              >
                <div className="digi-img-zoom w-full h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    style={{ minHeight: "inherit" }}
                  />
                </div>
                {/* Hover Overlay */}
                <div
                  className="portfolio-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(13,1,24,0.95) 0%, rgba(45,16,87,0.5) 60%, transparent 100%)",
                  }}
                >
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(233,30,140,0.2)",
                          color: "#e91e8c",
                          border: "1px solid rgba(233,30,140,0.3)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white font-bold text-lg font-display mb-3">
                    {item.title}
                  </h3>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-vibrant-fuchsia hover:text-white transition-colors"
                  >
                    View Project <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <AnimatedSection
          variant="fadeUp"
          delay={0.3}
          className="text-center mt-12"
        >
          <Link to="/services" className="digi-btn digi-btn-ghost inline-flex">
            View All Projects
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="digi-arrow">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
