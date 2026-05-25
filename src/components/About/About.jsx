import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from '../../animations/gsap-config'
import Timeline from './Timeline'
import Stats from './Stats'
import SkillsGrid from './SkillsGrid'
import rayan from '../../assets/rayyan.png'

const About = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    
    const anim = gsap.to(sectionRef.current, {
      backgroundPosition: '200% 200%',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
      },
    })

    return () => {
      if (anim.scrollTrigger) anim.scrollTrigger.kill()
      anim.kill()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#02040a] text-white font-['Sora'] overflow-hidden py-28"
    >
     
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
     
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-['Space_Grotesk'] text-5xl md:text-7xl font-black uppercase tracking-[-3px]">
            About <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.7)]">Me</span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A full-stack developer passionate about building modern, performant,
            and visually immersive web experiences.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* JOURNEY */}
            <div>
              <h3 className="font-['Space_Grotesk'] text-3xl font-bold mb-6">
                My Journey
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I started my journey by building simple frontend interfaces and
                gradually evolved into full-stack development, learning how to
                design, build, and deploy complete web applications.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today I focus on creating fast, scalable, and visually engaging
                applications using modern technologies across frontend and backend,
                with a strong emphasis on performance and user experience.
              </p>
            </div>

            {/* CURRENT FOCUS */}
            <div className="pt-8 border-t border-cyan-500/10">
              <h4 className="font-['Space_Grotesk'] text-xl font-bold mb-6 text-cyan-400">
                Current Focus
              </h4>
              <ul className="space-y-3">
                {[
                  'Full Stack Web Development',
                  'Modern UI/UX Design',
                  'Backend APIs & System Design',
                  'Databases (SQL / MongoDB)',
                  'Performance Optimization',
                  'Framer Motion & Animations',
                  'Scalable Architecture',
                  'Clean Code Practices',
                ].map((item, index) => (
                  <li
                    key={`focus-${index}`}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-[30px] overflow-hidden border border-cyan-500/20 bg-black/40 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,255,255,0.08)]">
              <img
                src={rayan}
                alt="Rayyan"
                className="h-full w-full object-cover object-[50%,30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent opacity-80" />
              <div className="absolute -inset-1 bg-cyan-400/10 blur-2xl" />
            </div>
          </motion.div>
        </div>

        {/* SECTIONS */}
        <div className="space-y-24">
          <Stats />
          <Timeline />
          <SkillsGrid />
        </div>
      </div>
    </section>
  )
}

export default About