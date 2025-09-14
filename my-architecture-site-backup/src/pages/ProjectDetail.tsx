import React, { useRef, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectGallery from '../components/ProjectGallery'

// 🚀 TypingText: schneller, ohne Cursor, mit schwachem Hintergrund
const TypingText: React.FC<{ text: string; speed?: number; className?: string }> = ({ 
  text, 
  speed = 20, 
  className = "" 
}) => {
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1))
      i++
      if (i >= text.length) clearInterval(interval)
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return (
    <span
      className={`${className} px-1 rounded-md`}
      style={{ background: "rgba(255,255,255,0.05)" }}
    >
      {displayText}
    </span>
  )
}

const ProjectDetail = () => {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const titleRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const { scrollYProgress: titleProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const titleY = useTransform(titleProgress, [0, 1], [50, -50])
  const titleScale = useTransform(titleProgress, [0, 0.5, 1], [0.95, 1.02, 1])

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const ySpring = useSpring(y, springConfig)

  const isInView = useInView(titleRef, { once: false, amount: 0.3 })

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
        <div className="text-center">
          <h1 className="text-3xl font-space font-light text-white mb-4">
            Project not found
          </h1>
          <Link to="/projects" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            Back to projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Back Navigation */}
      <div className="fixed top-20 left-6 lg:left-8 z-50">
        <Link to="/projects" className="group inline-flex items-center">
          <div className="flex items-center space-x-2 text-cyan-300 hover:text-cyan-200 transition-all duration-300 magnetic-hover glass-button">
            <ArrowLeft size={16} strokeWidth={1} />
            <span className="text-sm font-space font-light tracking-wide">Back</span>
          </div>
        </Link>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y: ySpring }} className="absolute inset-0">
          <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover" />
        </motion.div>

        <motion.div style={{ opacity }} className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        <motion.div
          ref={titleRef}
          style={{ y: titleY, scale: titleScale }}
          className="absolute bottom-16 lg:bottom-20 left-6 lg:left-8 right-6 lg:right-8"
        >
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-space font-extralight tracking-tight leading-[0.9] text-white max-w-4xl">
            <TypingText text={project.title} speed={10} />
          </h1>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Content Area */}
            <div className="lg:col-span-2 px-6 lg:px-8 py-16 lg:py-24">
              <div>
                <p className="text-xs font-space font-medium tracking-widest uppercase text-cyan-400 mb-8">
                  <TypingText text={project.category} speed={20} />
                </p>

                <div className="space-y-6 text-base lg:text-lg font-light leading-relaxed text-gray-300 max-w-2xl">
                  <p>
                    <TypingText text={project.description} speed={10} />
                  </p>
                  <p>
                    <TypingText
                      text="This exceptional project embodies our vision of contemporary architecture that harmoniously merges with the natural environment."
                      speed={10}
                    />
                  </p>
                  <p>
                    <TypingText
                      text="The clean lines and open spatial design create a connection between interior and exterior spaces, while sustainable building techniques and energy-efficient solutions ensure environmentally conscious construction."
                      speed={10}
                    />
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 px-6 lg:px-8 py-16 lg:py-24 glass-card">
              <div className="space-y-8">
                {[
                  { label: 'Location', value: project.location },
                  { label: 'Completion', value: project.year },
                  { label: 'Architect', value: 'OH Architecture' },
                  { label: 'Area', value: project.area || '280 m²' }
                ].map((item, index) => (
                  <div key={item.label} className="glass-card p-4 rounded-lg">
                    <h3 className="text-xs font-space font-medium tracking-widest text-cyan-400 uppercase mb-2">
                      <TypingText text={item.label} speed={10} />
                    </h3>
                    <p className="text-base font-light text-white">
                      <TypingText text={item.value} speed={10} />
                    </p>
                  </div>
                ))}

                {/* Materials */}
                <div className="glass-card p-4 rounded-lg">
                  <h3 className="text-xs font-space font-medium tracking-widest text-cyan-400 uppercase mb-4">
                    <TypingText text="Materials" speed={10} />
                  </h3>
                  <div className="space-y-2">
                    {project.materials.map((material, index) => (
                      <p key={index} className="text-base font-light text-white">
                        <TypingText text={material} speed={10} />
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-space font-extralight text-white tracking-tight">
              <TypingText text="Project Gallery" speed={10} />
            </h2>
          </div>
          <ProjectGallery images={project.images} title={project.title} />
        </div>
      </section>

      {/* Next Project */}
      <section className="bg-gradient-to-r from-gray-900 to-black py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Link to="/projects" className="group inline-block">
            <button className="text-base font-space font-light tracking-wide text-white glass-button">
              <TypingText text="View All Projects" speed={10} />
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail
