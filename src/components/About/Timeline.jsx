import React from 'react'
import { motion } from 'framer-motion'
 
const TIMELINE_ITEMS = [
  {
    year: '2024',
    title: 'Started Learning Web Development',
    description: 'Began my coding journey with HTML, CSS, and vanilla JavaScript',
  },
  {
    year: '2025',
    title: 'Started to Learn React.JS',
    description: 'Started my React journey in 2025 and built projects that improved my frontend skills and component thinking.',
  },
  {
    year: '2025',
    title: 'Advanced into 3D Graphics',
    description: 'Started exploring Three.js and WebGL technologies',
  },
  {
    year: '2026',
    title: 'Full-Stack Developer',
    description: 'Became a full stack developer by building end-to-end applications and working with both frontend and backend systems.',
  },
]
 
const Timeline = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
 
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }
 
  return (
    <motion.div
      className="my-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-bold mb-12 text-center">Career Timeline</h3>
      
      <div className="space-y-8 max-w-3xl mx-auto">
        {TIMELINE_ITEMS.map((item, index) => (
          <motion.div
            key={item.year}
            variants={itemVariants}
            className="relative flex gap-6 pl-8 pb-8 border-l border-accent/30"
          >
            {/* Timeline dot */}
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-accent border-4 border-primary" />
 
            {/* Content */}
            <div>
              <p className="text-accent font-bold">{item.year}</p>
              <h4 className="text-xl font-bold mt-1">{item.title}</h4>
              <p className="text-gray-400 mt-2">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
 
export default Timeline