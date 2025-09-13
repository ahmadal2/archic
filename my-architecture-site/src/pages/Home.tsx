import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const Home = () => {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3)

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black perspective-container"
    >
      {/* Hero Section - Modern 2026 style */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="w-full h-full"
        >
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="OH Architecture"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Hero Content - Modern 2026 style */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="text-center text-white"
          >
            <h1 className="text-[3rem] lg:text-[5rem] xl:text-[6rem] font-space font-extralight tracking-[-0.02em] leading-[0.85] mb-6"
                 data-text="OH Architecture">
              OH Architecture
            </h1>
            <p className="text-sm lg:text-base font-light tracking-[0.15em] uppercase text-white/80">
              Future of Contemporary Design
            </p>
          </div>
        </div>

        {/* Holographic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </section>

      {/* Featured Projects Section - Modern 2026 style */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-2xl lg:text-4xl font-space font-extralight text-white tracking-[-0.01em] mb-4 text-hologram">
              Featured Projects
            </h2>
            <p className="text-base font-light text-gray-300 max-w-2xl">
              A selection of our most recent work, showcasing contemporary architecture 
              that harmoniously integrates with the natural environment.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
                className="transform-3d"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* View All Projects Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="text-center mt-12 lg:mt-16"
          >
            <Link
              to="/projects"
              className="inline-flex items-center glass-button"
            >
              View All Projects
              <ArrowRight size={14} className="ml-3 group-hover:translate-x-0.5 transition-transform duration-300" strokeWidth={1.5} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Studio Philosophy Section - Modern 2026 style */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl lg:text-4xl font-space font-extralight text-white tracking-[-0.01em] mb-6 text-hologram">
                Design Philosophy
              </h2>
              <div className="space-y-4 text-base lg:text-lg font-light leading-[1.7] text-gray-300">
                <p>
                  Our approach to architecture is rooted in the belief that great design 
                  emerges from the thoughtful integration of space, light, and material.
                </p>
                <p>
                  We create environments that not only respond to their context but 
                  enhance the daily experiences of those who inhabit them.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center glass-button"
                >
                  Learn More
                  <ArrowRight size={14} className="ml-3 group-hover:translate-x-0.5 transition-transform duration-300" strokeWidth={1.5} />
                </Link>
              </div>
            </motion.div>

            {/* Image with modern 2026 styling */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              className="relative glass-card transform-3d"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="https://images.pexels.com/photos/2724664/pexels-photo-2724664.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="OH Architecture Studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home