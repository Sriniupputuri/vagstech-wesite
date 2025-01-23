import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--dark-color)] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Vagstech</h3>
            <p className="text-[var(--light-color)]">
              Transforming ideas into digital reality with innovative solutions.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                admin@vagstech.com
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                +91 72072 76792
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                  8-2-611/10, Road No 10 Banjara<br /> Hills  Hyderabad, Telangana, India - 500034.
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-[var(--light-color)] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services/web-development" className="hover:text-[var(--light-color)] transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/services/game-development" className="hover:text-[var(--light-color)] transition-colors">
                Game Development
                </a>
              </li>
              <li>
                <a href="/services/ecommerce" className="hover:text-[var(--light-color)] transition-colors">
                E-commerce
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[var(--light-color)] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-600 text-center">
          <p>&copy; {new Date().getFullYear()} Vagstech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}