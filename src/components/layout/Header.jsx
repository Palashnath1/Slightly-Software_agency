import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Phone, ChevronDown, Menu, X } from "lucide-react";

// Inline social SVG icons (lucide-react dropped social icons in v0.400+)
const SocialTwitter = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const SocialInstagram = ({ size = 15 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const SocialLinkedin = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  {
    label: "More",
    path: "#",
    children: [
      { label: "Web Development", path: "/services/web-development" },
      { label: "SEO", path: "/services/seo" },
      { label: "Branding", path: "/services/branding" },
      { label: "Content Marketing", path: "/services/content-marketing" },
      { label: "Social Media", path: "/services/social-media" },
    ],
  },
  // { label: "Dashboard", path: "/dashboard" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-deep-aubergine/95 backdrop-blur-md border-b border-vibrant-fuchsia/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #e91e8c, #7b2d9e)",
              }}
            >
              <span className="text-white font-black text-lg font-display">
                S
              </span>
            </div>
            <span className="text-white font-bold text-xl font-display tracking-wide group-hover:text-vibrant-fuchsia transition-colors">
              Slightly
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(item.label)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <button className="nav-link flex items-center gap-1.5">
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${dropdownOpen === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 glass-card py-2 shadow-2xl"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.path}
                            className="block px-4 py-2.5 text-base font-medium text-gray-300 hover:text-white hover:bg-vibrant-fuchsia/10 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`digi-nav-link text-gray-300 hover:text-white text-base font-semibold tracking-wide px-1 py-1 ${
                    location.pathname === item.path ? 'text-white' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/contact"
              className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              <Phone size={16} className="text-vibrant-fuchsia" />
              <span className="text-sm font-semibold">Contact us</span>
            </Link>
            <button className="text-gray-400 hover:text-white transition-colors">
              <Search size={18} />
            </button>
            <div className="flex items-center gap-3 text-gray-400">
              <a
                href="#"
                className="hover:text-vibrant-fuchsia transition-colors"
              >
                <SocialTwitter size={16} />
              </a>
              <a
                href="#"
                className="hover:text-vibrant-fuchsia transition-colors"
              >
                <SocialInstagram size={16} />
              </a>
              <a
                href="#"
                className="hover:text-vibrant-fuchsia transition-colors"
              >
                <SocialLinkedin size={16} />
              </a>
            </div>
            <Link to="/send_email" className="digi-btn text-sm">
              Get Started
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="digi-arrow">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
            style={{
              background: "rgba(13, 1, 24, 0.98)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-gray-200 hover:text-white text-base font-semibold py-2 border-b border-white/5"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="flex items-center gap-2 text-gray-200 text-base font-semibold py-2"
              >
                <Phone size={16} className="text-vibrant-fuchsia" />
                <span>Contact us</span>
              </Link>
              <Link to="/send_email" className="btn-primary text-center text-base font-semibold py-3 mt-2">
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
