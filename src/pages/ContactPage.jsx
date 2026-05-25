import React from 'react'
import { motion } from 'framer-motion'
import { usePageTransition } from '../hooks/usePageTransition'
import { pageVariants } from '../animations/transitions'
import Contact from '../components/Contact/Contact'
 
const ContactPage = () => {
  usePageTransition('contact')
 
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="pt-20"
    >
      <Contact />
    </motion.div>
  )
}
 
export default ContactPage