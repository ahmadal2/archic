
import React from 'react'
import {Instagram, Twitter, Linkedin, Mail} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Studio Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Studio</h3>
            <p className="text-gray-300 mb-4">
              Moderne Architektur für eine nachhaltige Zukunft. 
              Wir schaffen Räume, die inspirieren und verbinden.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/projects" className="text-gray-300 hover:text-white transition-colors">Projekte</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">Über uns</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Kontakt</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Impressum</a></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="text-gray-300 space-y-2">
              <p>Musterstraße 123</p>
              <p>80331 München</p>
              <p>Deutschland</p>
              <p className="mt-4">
                <a href="mailto:info@studio.de" className="hover:text-white transition-colors">
                  info@studio.de
                </a>
              </p>
              <p>
                <a href="tel:+49891234567" className="hover:text-white transition-colors">
                  +49 89 123 456 7
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Studio. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
