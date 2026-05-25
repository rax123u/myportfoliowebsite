import React from 'react'
import { motion } from 'framer-motion'
 
const ProjectFilter = ({ categories, activeFilter, onFilterChange }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }
 
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }
 
  return (
    <motion.div
      className="flex flex-wrap gap-3 justify-center mb-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {categories.map((category) => (
        <motion.button
          key={category.id}
          variants={itemVariants}
          onClick={() => onFilterChange(category.id)}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            activeFilter === category.id
              ? 'bg-accent text-primary shadow-glow-cyan'
              : 'bg-glass text-gray-300 hover:text-accent border border-accent/30'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category.label}
        </motion.button>
      ))}
    </motion.div>
  )
}
 
export default ProjectFilter