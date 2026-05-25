import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useMousePosition } from '../../hooks/useMousePosition'
import { gsap } from 'gsap'
 
const ProjectCard = ({ project, onClick }) => {
  const cardRef = useRef(null)
  const imageRef = useRef(null)
  const mousePos = useMousePosition(cardRef, 0.2)
 
  const handleHover = (isHovering) => {
    if (!cardRef.current) return
 
    gsap.to(cardRef.current, {
      y: isHovering ? -10 : 0,
      duration: 0.3,
      ease: 'power2.out',
    })
 
    gsap.to(imageRef.current, {
      scale: isHovering ? 1.1 : 1,
      duration: 0.3,
      ease: 'power2.out',
    })
  }
 
  return (
    <motion.div
      ref={cardRef}
      data-project-card
      className="group relative rounded-2xl overflow-hidden glass cursor-pointer h-96"
      onHoverStart={() => handleHover(true)}
      onHoverEnd={() => handleHover(false)}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image container */}
          <div className="relative w-full h-full overflow-hidden">
      <img
        ref={imageRef}
        src={project.image}
        alt={project.title}
        className=" h-full  object-center"
      />
    </div>
 
      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all">
        {/* Hover background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
 
        {/* Text content */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
            {project.description}
          </p>
 
          {/* Tags */}
          <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs bg-accent/20 text-accent font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
 
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 rounded-lg bg-accent text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              
              e.stopPropagation();
            }}
          >
            View Project →
          </motion.a>
        </div>
      </div>
 
 
      <motion.div
        className="absolute -inset-0.5 opacity-0 group-hover:opacity-100 rounded-2xl -z-10"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 212, 255, 0.3) 0%, transparent 70%)`,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
 
export default ProjectCard