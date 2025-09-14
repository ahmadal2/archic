import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects, categories } from '../data/projects'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Alle')

  const filteredProjects = selectedCategory === 'Alle' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div
      className="min-h-screen bg-black"
    >
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-space font-extralight text-white mb-6">
              Unsere Projekte
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Eine Sammlung unserer architektonischen Arbeiten, die Innovation, 
              Nachhaltigkeit und zeitloses Design vereinen.
            </p>
          </div>

          {/* Category Filter */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-space font-light transition-all duration-300 holographic-border magnetic-hover ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-glass-bg text-gray-300 hover:text-white shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="transform-3d"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div
              className="text-center py-20"
            >
              <p className="text-xl text-gray-400">
                Keine Projekte in dieser Kategorie gefunden.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Projects