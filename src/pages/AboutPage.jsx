import React from 'react'
import { motion } from 'framer-motion'
import { usePageTransition } from '../hooks/usePageTransition'
import { pageVariants } from '../animations/transitions'
import About from '../components/About/About'
 
const AboutPage = () => {
  usePageTransition('about')
 
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="pt-20"
    >
      <About />
    </motion.div>
  )
}
 
export default AboutPage