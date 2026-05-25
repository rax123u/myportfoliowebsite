import React from 'react'
import { motion } from 'framer-motion'
import { usePageTransition } from '../hooks/usePageTransition'
import { pageVariants } from '../animations/transitions'
import Projects from '../components/Projects/Projects'

const ProjectsPage = () => {
  usePageTransition('projects')

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="pt-28 bg-[#02040a] text-white font-['Sora'] min-h-screen"
    >
      {/* HEADER SECTION */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 text-center">

        {/* glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_60%)]" />

        <div className="relative">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-['Space_Grotesk'] text-5xl md:text-7xl font-black uppercase tracking-[-3px]"
          >
            {' '}
            <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.7)]">
              Projects
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
          </motion.p>
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <div className="relative">
        <Projects />
      </div>
    </motion.div>
  )
}

export default ProjectsPage