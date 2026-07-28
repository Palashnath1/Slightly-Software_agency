import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import {
  SocialTwitter,
  SocialInstagram,
  SocialFacebook,
  SocialLinkedin,
} from "../ui/SocialIcons";

const footerLinks = {
  "Quick Links": [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/#portfolio" },
    { label: "Dashboard", path: "/dashboard" },
  ],
  "Our Services": [
    { label: "Web Development", path: "/services/web-development" },
    { label: "SEO Optimization", path: "/services/seo" },
    { label: "Branding", path: "/services/branding" },
    { label: "Content Marketing", path: "/services/content-marketing" },
    { label: "Social Media", path: "/services/social-media" },
  ],
  "Get Connected": [
    { label: "hello@slightly.agency", icon: Mail },
    { label: "+123 456 7890", icon: Phone },
    { label: "123 Digital Ave, NY 10001", icon: MapPin },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0d0118 0%, #060010 100%)",
      }}
      className="border-t border-white/5"
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-5">
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
              <span className="text-white font-bold text-xl font-display">
                Slightly
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              We are a premium digital services agency helping brands grow their
              digital presence with creative, data-driven strategies.
            </p>
            <div className="flex items-center gap-4">
              {[
                SocialTwitter,
                SocialInstagram,
                SocialFacebook,
                SocialLinkedin,
              ].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-gray-400 hover:text-white hover:border-vibrant-fuchsia hover:bg-vibrant-fuchsia/10 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            {/* Mini Map */}
            <div
              className="mt-6 rounded-xl overflow-hidden border border-white/10"
              style={{ height: "120px" }}
            >
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(45,16,87,0.8), rgba(13,1,24,0.9))",
                  backgroundImage: `
                    radial-gradient(circle at 50% 50%, rgba(233,30,140,0.15) 0%, transparent 60%),
                    repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255,255,255,0.03) 20px, rgba(255,255,255,0.03) 21px),
                    repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.03) 20px, rgba(255,255,255,0.03) 21px)
                  `,
                }}
              >
                <div className="flex flex-col items-center gap-1">
                  <MapPin size={20} className="text-vibrant-fuchsia" />
                  <span className="text-xs text-gray-400">
                    Agartala, West Tripura
                    </span>
                </div>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-5 flex items-center gap-2">
                <span
                  className="w-5 h-0.5 inline-block"
                  style={{
                    background: "linear-gradient(90deg, #e91e8c, #7b2d9e)",
                  }}
                />
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    {link.path ? (
                      <Link
                        to={link.path}
                        className="digi-footer-link text-gray-400 text-sm"
                      >
                        <span
                          className="digi-arrow"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                          }}
                        >
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 14 14"
                            fill="none"
                            style={{ opacity: 0, transition: "opacity 0.18s" }}
                          >
                            <path
                              d="M2 7h10M8 3l4 4-4 4"
                              stroke="#e91e8c"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </span>
                        {link.label}
                      </Link>
                    ) : (
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        {link.icon && (
                          <link.icon
                            size={13}
                            className="text-vibrant-fuchsia flex-shrink-0"
                          />
                        )}
                        {link.label}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © 2025 <span className="text-vibrant-fuchsia">Slightly Agency</span>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="digi-footer-link text-gray-500 text-xs"
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
