import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Star, TrendingUp, Users } from "lucide-react";
import {
  SocialTwitter,
  SocialInstagram,
  SocialFacebook,
  SocialLinkedin,
} from "../ui/SocialIcons";
import heroPersonImg from "../../assets/images/photoA.jpg";

const valueCards = [
  { icon: "⚙️", title: "CUSTOMIZED", desc: "Tailored for your brand" },
  { icon: "📊", title: "DATA-DRIVEN", desc: "Analytics-backed decisions" },
  { icon: "🎨", title: "CREATIVE", desc: "Bold, breakthrough ideas" },
  { icon: "🏆", title: "EXPERT", desc: "Proven industry veterans" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 30% 60%, #1e0a35 0%, #0d0118 55%), radial-gradient(ellipse at 80% 20%, #2d1057 0%, transparent 50%)",
      }}
    >
      {/* Ambient orbs — static, no animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full digi-breath blur-3xl"
          style={{
            width: 500,
            height: 500,
            top: "-10%",
            right: "5%",
            background: "rgba(233,30,140,0.25)",
          }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 350,
            height: 350,
            bottom: "5%",
            left: "5%",
            background: "rgba(123,45,158,0.35)",
            animation: "digiBreath 10s ease-in-out infinite 2s",
            opacity: 0.25,
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* ── Two-column layout ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center min-h-[600px]">
          {/* ── LEFT: Text ── */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-vibrant-fuchsia/30 bg-vibrant-fuchsia/10 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-vibrant-fuchsia animate-pulse" />
              <span className="font-mono text-[10px] font-semibold text-vibrant-fuchsia tracking-[0.22em] uppercase">
                Premium Digital Agency
              </span>
            </div>

            {/* Title */}
            <h1 className="font-black font-display leading-none mb-6 text-4xl">
              {[
                {
                  text: "DIGITAL ",
                  gradient: "linear-gradient(135deg, #ffffff 0%, #d8b4fe 100%)",
                },
                {
                  text: " SERVICES",
                  gradient: "linear-gradient(135deg, #e91e8c 0%, #7b2d9e 100%)",
                },
              ].map(({ text, gradient }) => (
                <span
                  key={text}
                  className="block text-6xl md:text-7xl xl:text-8xl"
                  style={{
                    background: gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {text}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg font-semibold tracking-[0.2em] text-gray-300 uppercase mb-3">
              Building Your Empire Digitally
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-md">
              We craft data-driven digital experiences that transform brands,
              drive growth, and deliver measurable results across every channel.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link to="/send_email" className="digi-btn">
                Get Started
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="digi-arrow"
                >
                  <path
                    d="M4 10L10 4M10 4H5M10 4V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </Link>
              <Link to="/services" className="digi-btn digi-btn-ghost">
                Our Services
              </Link>
            </div>

            {/* Social */}
            <div className="flex items-center gap-5">
              <span className="text-xs text-gray-500 tracking-widest uppercase">
                Follow Us
              </span>
              <div className="flex items-center gap-3">
                {[
                  SocialTwitter,
                  SocialInstagram,
                  SocialFacebook,
                  SocialLinkedin,
                ].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-vibrant-fuchsia transition-colors duration-200"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <Icon size={13} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Photo + stat cards ── */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              {/* Glow ring */}
              <div
                className="absolute -inset-6 rounded-3xl opacity-30 blur-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, #e91e8c 0%, #7b2d9e 100%)",
                }}
              />

              {/* Photo — eager load for instant display */}
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  border: "1px solid rgba(233,30,140,0.3)",
                  height: "480px",
                }}
              >
                <img
                  src={heroPersonImg}
                  alt="Digital professional at work"
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                  className="w-full h-full"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
                {/* Light brand tint */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(45,16,87,0.2) 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Stat card — top left */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute -top-5 -left-5 glass-card px-4 py-3 flex items-center gap-3 shadow-glow-fuchsia z-20"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(233,30,140,0.2)" }}
                >
                  <Users size={16} style={{ color: "#e91e8c" }} />
                </div>
                <div>
                  <div
                    className="text-lg font-black font-display leading-none"
                    style={{
                      background: "linear-gradient(135deg,#e91e8c,#7b2d9e)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    500+
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    Happy Clients
                  </div>
                </div>
              </motion.div>

              {/* Stat card — bottom right */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-5 -right-5 glass-card px-4 py-3 flex items-center gap-3 z-20 shadow-glow-fuchsia"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,215,0,0.15)" }}
                >
                  <TrendingUp size={16} style={{ color: "#ffd700" }} />
                </div>
                <div>
                  <div
                    className="text-lg font-black font-display leading-none"
                    style={{
                      background: "linear-gradient(90deg,#ffd700,#ffec6e)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    +127%
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    Traffic Growth
                  </div>
                </div>
              </motion.div>

              {/* Stat card — bottom left */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4.5,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-5 -left-5 glass-card px-4 py-3 flex items-center gap-3 z-20 shadow-glow-fuchsia"
              >
                <div className="flex gap-0.5 mr-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={10}
                      style={{ fill: "#ffd700", color: "#ffd700" }}
                    />
                  ))}
                </div>
                <div>
                  <div className="text-sm font-bold text-white leading-none">
                    4.9 / 5
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    Client Rating
                  </div>
                </div>
              </motion.div>

              {/* Dot grid decoration */}
              <div
                className="absolute -top-8 -right-8 w-24 h-24 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(233,30,140,0.8) 1.5px, transparent 1.5px)",
                  backgroundSize: "12px 12px",
                }}
              />
            </div>
          </div>
        </div>

        {/* ── Value cards row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-16">
          {valueCards.map((card) => (
            <div
              key={card.title}
              className="digi-service-card digi-card p-4 group cursor-default relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(233,30,140,0.06), transparent 70%)",
                }}
              />
              <div className="text-2xl mb-2">{card.icon}</div>
              <h3 className="text-xs font-mono font-bold tracking-[0.18em] text-white mb-1 group-hover:text-vibrant-fuchsia transition-colors duration-220">
                {card.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {card.desc}
              </p>
              {/* Digitz bottom underline reveal */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[1px] scale-x-0 group-hover:scale-x-100 transition-transform duration-[360ms] origin-left"
                style={{
                  background: "linear-gradient(90deg, #e91e8c, #7b2d9e)",
                  transitionTimingFunction: "cubic-bezier(0.7,0,0.3,1)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
