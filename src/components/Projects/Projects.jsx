import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { setProjectFilter, setActiveModal } from '../../store/slices/uiSlice'
import { selectProjectFilter } from '../../store/selectors/selectors'
import ProjectCard from './ProjectCard'
import ProjectFilter from './ProjectFilter'
import portfolio from '../../assets/portfolio.png'
import ecommerce from '../../assets/e commerce.png'
import dashboard from '../../assets/dashboard.png'

const PROJECTS = [
  {
    id: 1,
    title: '3D Portfolio Showcase',
    description: 'Interactive 3D portfolio with GSAP animations and Three.js',
    category: 'webgl',
    image: 'src/assets/portfolio.png',
    tags: ['React', 'Three.js', 'GSAP', 'Framer Motion'],
    link: '#',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'High-performance e-commerce with advanced filtering and animations',
    category: 'commerce',
    image: 'src/assets/e commerce.png',
    tags: ['React', 'Redux', 'Tailwind', 'Stripe'],
    link: 'https://digital-retail-store.vercel.app/',
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    description: 'Real-time data visualization with animated charts and metrics',
    category: 'dashboard',
    image: 'src/assets/dashboard.png',
    tags: ['React', 'D3.js', 'Redux', 'Chart.js'],
    link: 'https://ai-review-app.vercel.app/',
  },
  
]

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'webgl', label: '3D / WebGL' },
  { id: 'commerce', label: 'E-Commerce' },
  { id: 'dashboard', label: 'Dashboards' },
  { id: 'design', label: 'UI / Tools' },
]

const Projects = () => {
  const dispatch = useDispatch()
  const activeFilter = useSelector(selectProjectFilter)

  const filteredProjects = useMemo(() => {
    return activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter)
  }, [activeFilter])

  return (
    <section className="relative w-full bg-[#02040a] py-24 text-white font-['Sora'] overflow-hidden">

  
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">

   
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-6xl font-black uppercase">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mt-4 mx-auto max-w-2xl text-gray-400 text-base md:text-lg">
            Modern web apps, dashboards, and 3D experiences built for performance.
          </p>
        </motion.div>

        {/* FILTER */}
        <div className="mb-10">
          <ProjectFilter
            categories={CATEGORIES}
            activeFilter={activeFilter}
            onFilterChange={(filter) => dispatch(setProjectFilter(filter))}
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.id} className="will-change-transform">
              <ProjectCard
                project={project}
                onClick={() => dispatch(setActiveModal(project.id))}
              />
            </div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-8 py-4 font-['Space_Grotesk'] text-base font-bold uppercase text-cyan-400 transition hover:bg-cyan-400 hover:text-black">
            View All Projects →
          </button>
        </motion.div>

      </div>
    </section>
  )
}

export default Projects