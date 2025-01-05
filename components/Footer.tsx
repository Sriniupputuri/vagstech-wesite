import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--dark-color)] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">TechCorp</h3>
            <p className="text-[var(--light-color)]">
              Transforming ideas into digital reality with innovative solutions.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                info@techcorp.com
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                +1 (555) 123-4567
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                123 Tech Street, Silicon Valley, CA
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
                <a href="/services" className="hover:text-[var(--light-color)] transition-colors">
                  Services
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
          <p>&copy; {new Date().getFullYear()} TechCorp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}