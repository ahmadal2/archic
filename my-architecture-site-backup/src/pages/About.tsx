import React from 'react'
import TeamCard from '../components/TeamCard'
import { teamMembers } from '../data/team'
import { Target, Eye, Heart } from 'lucide-react'

const About = () => {
  return (
    <div
      className="min-h-screen bg-black"
    >
      {/* Hero Section - Modern 2026 style */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-space font-extralight text-white mb-6">
                Über unser Studio
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Seit über einem Jahrzehnt schaffen wir architektonische Meisterwerke, 
                die Innovation, Nachhaltigkeit und zeitloses Design miteinander verbinden. 
                Unser Team aus leidenschaftlichen Architekten und Designern arbeitet 
                daran, Räume zu schaffen, die das Leben bereichern.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center holographic-border p-4 rounded-lg">
                  <div className="text-3xl font-space font-bold text-purple-400 mb-2">12+</div>
                  <div className="text-gray-400">Jahre Erfahrung</div>
                </div>
                <div className="text-center holographic-border p-4 rounded-lg">
                  <div className="text-3xl font-space font-bold text-purple-400 mb-2">50+</div>
                  <div className="text-gray-400">Projekte</div>
                </div>
                <div className="text-center holographic-border p-4 rounded-lg">
                  <div className="text-3xl font-space font-bold text-purple-400 mb-2">15+</div>
                  <div className="text-gray-400">Auszeichnungen</div>
                </div>
              </div>
            </div>
            
            <div
              className="relative transform-3d"
            >
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Studio"
                className="w-full h-96 object-cover rounded-2xl shadow-magnetic-shadow"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Modern 2026 style */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-space font-extralight text-white mb-6">
              Unsere Philosophie
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Wir glauben, dass Architektur mehr ist als nur Gebäude – 
              sie formt Erfahrungen, Gemeinschaften und die Zukunft unserer Welt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="text-center p-8 bg-glass-bg rounded-2xl shadow-lg holographic-border transform-3d"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-space font-extralight text-white mb-4">Nachhaltigkeit</h3>
              <p className="text-gray-300 leading-relaxed">
                Jedes Projekt wird mit Blick auf Umweltverträglichkeit und 
                Energieeffizienz entwickelt, um eine bessere Zukunft zu schaffen.
              </p>
            </div>

            <div
              className="text-center p-8 bg-glass-bg rounded-2xl shadow-lg holographic-border transform-3d"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-space font-extralight text-white mb-4">Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                Wir nutzen modernste Technologien und kreative Ansätze, 
                um einzigartige architektonische Lösungen zu entwickeln.
              </p>
            </div>

            <div
              className="text-center p-8 bg-glass-bg rounded-2xl shadow-lg holographic-border transform-3d"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-space font-extralight text-white mb-4">Menschlichkeit</h3>
              <p className="text-gray-300 leading-relaxed">
                Im Zentrum unserer Arbeit stehen die Menschen, die in den 
                von uns gestalteten Räumen leben und arbeiten werden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Modern 2026 style */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-space font-extralight text-white mb-6">
              Unser Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Lernen Sie die kreativen Köpfe kennen, die hinter unseren 
              architektonischen Visionen stehen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section - Modern 2026 style */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center"
          >
            <h2 className="text-4xl font-space font-extralight text-white mb-12">
              Auszeichnungen & Anerkennungen
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-glass-bg rounded-xl shadow-lg holographic-border">
                <div className="text-2xl font-space font-bold text-purple-400 mb-2">2024</div>
                <h3 className="text-xl font-space font-semibold text-white mb-2">Deutscher Architekturpreis</h3>
                <p className="text-gray-300">Für nachhaltiges Design im Wohnungsbau</p>
              </div>
              
              <div className="p-6 bg-glass-bg rounded-xl shadow-lg holographic-border">
                <div className="text-2xl font-space font-bold text-purple-400 mb-2">2023</div>
                <h3 className="text-xl font-space font-semibold text-white mb-2">Green Building Award</h3>
                <p className="text-gray-300">Auszeichnung für umweltfreundliche Architektur</p>
              </div>
              
              <div className="p-6 bg-glass-bg rounded-xl shadow-lg holographic-border">
                <div className="text-2xl font-space font-bold text-purple-400 mb-2">2022</div>
                <h3 className="text-xl font-space font-semibold text-white mb-2">Innovation in Design</h3>
                <p className="text-gray-300">Für innovative Lösungen im modernen Bauen</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About