import { Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Games", href: "/games" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "Game Development", href: "/services/game-development" },
  { label: "E-commerce", href: "/services/ecommerce" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] text-white">
      {/* Amber accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        {/* Main grid — 4 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <span className="text-xl font-extrabold tracking-tight block mb-3">VAGSTECH</span>
            <p className="text-white/50 text-sm leading-relaxed">
              A Hyderabad-based studio building games, web apps, and e-commerce platforms that people actually use.
            </p>
          </div>

          {/* Col 2 — Map */}
          <div className="lg:col-span-1">
            <p className="text-[10px] font-semibold tracking-widest uppercase text-[var(--accent-color)] mb-3">
              Our Location
            </p>
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <iframe
                src="https://maps.google.com/maps?q=8-2-611/10+Road+No+10+Banjara+Hills+Hyderabad+Telangana+500034&output=embed&z=15"
                width="100%"
                height="170"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VAGSTECH Office Location"
              />
            </div>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase text-[var(--accent-color)] mb-4">
              Contact
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:admin@vagstech.com"
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[var(--accent-color)]/40 transition-colors">
                    <Mail className="h-3.5 w-3.5 text-white/50 group-hover:text-[var(--accent-color)] transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/30 mb-0.5">Email</p>
                    <p className="text-sm text-white/80 group-hover:text-white transition-colors">admin@vagstech.com</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+917207276792"
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[var(--accent-color)]/40 transition-colors">
                    <Phone className="h-3.5 w-3.5 text-white/50 group-hover:text-[var(--accent-color)] transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/30 mb-0.5">Phone</p>
                    <p className="text-sm text-white/80 group-hover:text-white transition-colors">+91 72072 76792</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 w-8 h-8 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-3.5 w-3.5 text-white/50" />
                </div>
                <div>
                  <p className="text-[10px] text-white/30 mb-0.5">Address</p>
                  <p className="text-sm text-white/80 leading-relaxed">
                    8-2-611/10, Road No 10,<br />
                    Banjara Hills, Hyderabad,<br />
                    Telangana — 500034
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4 — Quick Links */}
          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase text-[var(--accent-color)] mb-4">
              Quick Links
            </p>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 block"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} VAGSTECH IT Services. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Designed &amp; built in Hyderabad, India
          </p>
        </div>
      </div>
    </footer>
  );
}
