
import React from 'react'
import { motion } from 'framer-motion'
import { TeamMember } from '../data/team'

interface TeamCardProps {
  member: TeamMember
  index?: number
}

const TeamCard: React.FC<TeamCardProps> = ({ member, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <motion.img
          src={member.image}
          alt={member.name}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-blue-600 font-medium mb-3">
          {member.role}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          {member.bio}
        </p>
      </div>
    </motion.div>
  )
}

export default TeamCard
