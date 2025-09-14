import React from 'react'
import ContactForm from '../components/ContactForm'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-black"
    >
      {/* Header - Modern 2026 style */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-space font-extralight text-white mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Haben Sie ein Projekt im Kopf? Wir freuen uns darauf, 
              Ihre Visionen in beeindruckende Architektur zu verwandeln.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content - Modern 2026 style */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-space font-extralight text-white mb-8">
                Schreiben Sie uns
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-space font-extralight text-white mb-8">
                Kontaktinformationen
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4 holographic-border p-4 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-space font-semibold text-white mb-2">Adresse</h3>
                    <p className="text-gray-300">
                      Musterstraße 123<br />
                      80331 München<br />
                      Deutschland
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 holographic-border p-4 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-space font-semibold text-white mb-2">Telefon</h3>
                    <p className="text-gray-300">
                      <a href="tel:+49891234567" className="hover:text-purple-300 transition-colors">
                        +49 89 123 456 7
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 holographic-border p-4 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-space font-semibold text-white mb-2">E-Mail</h3>
                    <p className="text-gray-300">
                      <a href="mailto:info@studio.de" className="hover:text-purple-300 transition-colors">
                        info@studio.de
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 holographic-border p-4 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-space font-semibold text-white mb-2">Öffnungszeiten</h3>
                    <div className="text-gray-300 space-y-1">
                      <p>Montag - Freitag: 9:00 - 18:00</p>
                      <p>Samstag: 10:00 - 14:00</p>
                      <p>Sonntag: Geschlossen</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-6 bg-glass-bg rounded-xl holographic-border">
                <h3 className="text-lg font-space font-semibold text-white mb-4">
                  Kostenlose Erstberatung
                </h3>
                <p className="text-gray-300 mb-4">
                  Vereinbaren Sie einen Termin für ein unverbindliches Beratungsgespräch. 
                  Wir besprechen Ihre Ideen und entwickeln gemeinsam erste Konzepte.
                </p>
                <a
                  href="tel:+49891234567"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-space font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 gradient-button"
                >
                  <Phone size={20} className="mr-2" />
                  Jetzt anrufen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Modern 2026 style */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-space font-extralight text-white mb-4">
              Besuchen Sie uns
            </h2>
            <p className="text-lg text-gray-300">
              Unser Studio befindet sich im Herzen von München
            </p>
          </div>

          {/* Google Maps Placeholder */}
          <div
            className="relative h-96 bg-gray-800 rounded-xl overflow-hidden holographic-border transform-3d"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.2362150000003!2d11.5753822!3d48.1371079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf4b7842ad43%3A0x400af0f6614b1b0!2sMarienplatz%2C%2080331%20M%C3%BCnchen!5e0!3m2!1sde!2sde!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Standort München"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact