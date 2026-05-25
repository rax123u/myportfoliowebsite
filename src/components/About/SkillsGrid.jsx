import React from 'react'
import { motion } from 'framer-motion'
 
const SKILL_CATEGORIES = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js',],
  },
  {
    category: '3D & Graphics',
    skills: ['Three.js', 'WebGL',],
  },
  {
    category: 'Animations',
    skills: ['GSAP', 'Framer Motion', 'CSS Animations', 'Lenis', 'ScrollTrigger'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'MySQL',],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'CI/CD', 'Webpack', 'Vite'],
  },
  {
    category: 'Design',
    skills: ['Figma', 'UI/UX Design', 'Design Systems'],
  },
]
 
const SkillsGrid = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
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
      <h3 className="text-3xl font-bold mb-12 text-center">Technical Skills</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((category) => (
          <motion.div
            key={category.category}
            variants={itemVariants}
            className="glass rounded-xl p-6"
          >
            <h4 className="text-lg font-bold mb-4 text-accent">{category.category}</h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-mono hover:bg-accent/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
 
export default SkillsGrid