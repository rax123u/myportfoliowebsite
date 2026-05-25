import React from 'react'
import { motion } from 'framer-motion'
import { usePageTransition } from '../hooks/usePageTransition'
import { pageVariants } from '../animations/transitions'
import Hero from '../components/Hero/Hero'


 
const HomePage = () => {
  usePageTransition('home')
 
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Hero />
      
    </motion.div>
  )
}
 
export default HomePage