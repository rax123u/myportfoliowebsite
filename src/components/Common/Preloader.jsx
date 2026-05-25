import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
 
const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true)
 
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('preloaderShown')
    
    if (hasVisited) {
      setIsVisible(false)
      return
    }
 
    const timer = setTimeout(() => {
      setIsVisible(false)
      sessionStorage.setItem('preloaderShown', 'true')
    }, 2500)
 
    return () => clearTimeout(timer)
  }, [])
 
  if (!isVisible) return null
 
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-primary flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative w-20 h-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: isVisible ? Infinity : 0 }}
      >
        <div className="absolute inset-0 rounded-lg border-2 border-accent opacity-20" />
        <div className="absolute inset-2 rounded-lg border-2 border-accent-2 opacity-40" />
        <div className="absolute inset-4 rounded-lg border-2 border-accent-3 opacity-60" />
      </motion.div>
 
      <motion.div
        className="absolute bottom-20 text-center"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-accent font-mono text-sm">Loading experience...</p>
      </motion.div>
    </motion.div>
  )
}
 
export default Preloader