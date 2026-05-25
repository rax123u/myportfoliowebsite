import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
 
const NotFound = () => {
  return (
    <motion.div
      className="min-h-screen pt-20 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center">
        <motion.h1
          className="text-7xl md:text-8xl font-bold text-gradient mb-4"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          404
        </motion.h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-lg bg-accent text-primary font-bold hover:shadow-glow-cyan transition-all"
        >
          Back to Home
        </Link>
      </div>
    </motion.div>
  )
}
 
export default NotFound