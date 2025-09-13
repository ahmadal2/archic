import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group glass-card"
    >
      <Link to={`/projects/${project.id}`}>
        
        {/* Project Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <motion.img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
          
          {/* Subtiler Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
        </div>

        {/* Project Info */}
        <div className="space-y-2 p-4">
          
          {/* Category */}
          <p className="text-xs font-normal tracking-[0.15em] text-cyan-400 uppercase">
            {project.category}
          </p>
          
          {/* Title */}
          <h3 className="text-lg lg:text-xl font-extralight text-white tracking-[-0.01em] group-hover:text-gray-300 transition-colors duration-300">
            {project.title}
          </h3>
          
          {/* Location & Year */}
          <p className="text-sm font-light text-gray-400">
            {project.location} • {project.year}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProjectCard