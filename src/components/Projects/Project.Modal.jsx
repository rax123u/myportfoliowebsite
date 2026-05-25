// src/components/Projects/ProjectModal.jsx
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveModal } from '../../store/slices/uiSlice'
import { selectActiveModal } from '../../store/selectors/selectors'

const ProjectModal = ({ projects = [] }) => {
  const dispatch = useDispatch()
  const activeModalId = useSelector(selectActiveModal)

  const project = projects.find((p) => p.id === activeModalId)

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  }

  if (!project) return null

  return (
    <AnimatePresence>
      {activeModalId && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={() => dispatch(setActiveModal(null))}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => dispatch(setActiveModal(null))}
          />

          {/* Modal */}
          <motion.div
            className="relative z-10 bg-secondary/95 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto glass"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => dispatch(setActiveModal(null))}
              className="absolute top-6 right-6 p-2 rounded-lg bg-accent/20 text-accent hover:bg-accent/40 transition-all"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Content */}
            <div className="p-8">
              {/* Project image */}
              <motion.div
                className="w-full h-80 rounded-xl overflow-hidden mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Title */}
              <motion.h2
                className="text-3xl font-bold mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                {project.title}
              </motion.h2>

              {/* Category badge */}
              <motion.div
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-mono">
                  {project.category}
                </span>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-gray-400 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                {project.description}
              </motion.p>

              {/* Technologies */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-accent/10 text-accent text-sm font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Additional details */}
              <motion.div
                className="mb-6 p-4 rounded-lg bg-primary/50 border border-accent/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <h3 className="font-semibold mb-2">Project Details</h3>
                <p className="text-gray-400 text-sm">
                  This project showcases advanced web development techniques including
                  responsive design, performance optimization, and modern animation patterns.
                </p>
              </motion.div>

              {/* Action buttons */}
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 rounded-lg bg-gradient-cyan-pink text-primary font-bold text-center hover:shadow-glow-cyan transition-all"
                >
                  View Live Project
                </a>
                <button
                  onClick={() => dispatch(setActiveModal(null))}
                  className="flex-1 px-6 py-3 rounded-lg border border-accent text-accent hover:bg-accent/10 font-bold transition-all"
                >
                  Close
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal