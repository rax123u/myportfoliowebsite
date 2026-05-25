import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
 
const STATS = [
  { label: 'Years Experience', value: 2, suffix: '+' },
  { label: 'Projects Completed', value: 10, suffix: '+' },
  { label: 'Happy Clients', value: 10, suffix: '+' },
  { label: 'Open Source Repos', value: 15, suffix: '+' },
]
 
const Stats = () => {
  const statsRef = useRef([])
 
  useEffect(() => {
    
    const validStats = statsRef.current.filter(Boolean)

    validStats.forEach((stat, index) => {
      const number = stat.querySelector('[data-stat-number]')
      if (!number) return
 
      const finalValue = parseInt(number.dataset.statNumber)

      const counterObj = { value: 0 }
 
      gsap.to(counterObj, {
        value: finalValue,
        duration: 2,
        delay: index * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: stat,
          start: 'top 80%',
          once: true,
        },
        onUpdate: function () {
   
          number.textContent = Math.floor(counterObj.value) + (STATS[index].suffix || '')
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
 
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }
 
  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-6 my-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {STATS.map((stat, index) => (
        <motion.div
          key={stat.label}
          ref={(el) => (statsRef.current[index] = el)}
          variants={itemVariants}
          className="glass rounded-xl p-6 text-center"
        >
          <p
            data-stat-number={stat.value}
            className="text-4xl font-bold text-accent mb-2"
          >
            0
          </p>
          <p className="text-gray-400 font-medium">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}
 
export default Stats