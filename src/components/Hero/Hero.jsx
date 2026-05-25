import React, { useRef, useEffect, memo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment } from '@react-three/drei'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import * as THREE from 'three'
import { Link } from 'react-router-dom'


const fadeIn = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true, margin: '-100px' },
}

const cardClass =
  'p-8 rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300'

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Tailwind CSS', 'Framer Motion', 'Redux Toolkit'],
  },
  {
    category: 'Backend',
    items: ['Node.js','PHP','Laravel', 'MongoDB', 'PostgreSQL', 'REST APIs'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'Firebase', 'AWS'],
  },
]

const services = [
  {
    title: 'Frontend Development',
    icon: '🚀',
    description:
      'Building fast, responsive, and visually engaging frontend experiences with modern web technologies.',
  },
  {
    title: 'Backend Development',
    icon: '✨',
    description:
      'Building scalable backend systems, secure APIs, and efficient server-side solutions for modern web applications.',
  },
  {
    title: 'Full-Stack Solutions',
    icon: '⚙️',
    description:
      'Complete scalable frontend and backend application development.',
  },
  {
    title: 'Performance Optimization',
    icon: '⚡',
    description:
      'Improving speed and efficiency for better user experience.',
  },
]

const projects = [
  {
    title: 'E-Commerce Platform',
    subtitle: 'React + Tailwind CSS + Redux Toolkit + Rest API',
    image: '🛒',
    description:
      'Modern ecommerce application with authentication and payments.',
  },
  {
    title: 'AI Frontend Review Dashboard',
    subtitle: 'React.js + Redux Toolkit + Tailwind CSS',
    image: '📊',
    description:
      'Interactive dashboard with charts and realtime analytics.',
  },
  {
    title: 'Image Editor App',
    subtitle: 'HTML5 + CSS3 + JavaScript',
    image: '📱',
    description:
      'Realtime messaging and media sharing social platform.',
  },
]

const stats = [
  { label: 'Projects', value: '15+' },
  { label: 'Clients', value: '10+' },
  { label: 'Experience', value: '2+' },
  { label: 'Technologies', value: '15+' },
]


const Button = ({ children, secondary }) => (
  <button
    className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
      secondary
        ? 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
        : 'bg-cyan-400 text-black hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]'
    }`}
  >
    {children}
  </button>
)

function Section({ title, subtitle, children }) {
  return (
    <ScrollSection className="px-6 md:px-12">
      <div className="max-w-6xl w-full relative z-20">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            {title}
          </h2>

          {subtitle && (
            <p className="text-xl text-gray-400">{subtitle}</p>
          )}
        </motion.div>

        {children}
      </div>
    </ScrollSection>
  )
}

function CoreSystemMesh({ smoothScrollY }) {
  const { scene } = useGLTF('/models/explodedMesh.glb')
  const ref = useRef()

  useFrame(() => {
    if (!ref.current) return

    const scroll = smoothScrollY.get()

    ref.current.rotation.y += 0.003
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      scroll * 2,
      0.05
    )

    ref.current.position.y = THREE.MathUtils.lerp(
      ref.current.position.y,
      -scroll * 2,
      0.05
    )

    const scale = THREE.MathUtils.lerp(2.4, 1.8, scroll)
    ref.current.scale.setScalar(scale)
  })

  return (
    <group ref={ref} scale={2.4}>
      <primitive object={scene} />
    </group>
  )
}

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-40 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900" />
      <div className="absolute top-0 -left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
    </div>
  )
}

function ScrollSection({ children, className = '' }) {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  )

  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [100, 0, 0, -100]
  )

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y }}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${className}`}
    >
      {children}
    </motion.section>
  )
}


const HeroSection = memo(() => (
  <section className="min-h-screen flex items-center justify-center px-6 md:px-12 relative z-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl w-full items-center">
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <p className="text-cyan-400 uppercase tracking-[0.3em] font-mono">
          Welcome to my portfolio
        </p>

        <h1 className="text-6xl md:text-8xl font-black leading-none text-white">
          MUHAMMAD
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            RAYYAN
          </span>
        </h1>

        <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
          Full-Stack Developer crafting modern digital experiences with
          creative solutions and scalable technologies.
        </p>

        <div className="flex gap-6 pt-6">
          <Link to="/projects">
            <Button>View Work</Button>
          </Link>

          <Link to="/contact">
            <Button secondary>Contact Me</Button>
          </Link>
        </div>
      </motion.div>

      <div className="hidden md:flex h-[500px] items-center justify-center">
        <div className="text-center">
          
          <p className="text-gray-400">Scroll to explore</p>
        </div>
      </div>
    </div>
  </section>
))


function SkillsSection() {
  return (
    <Section title="Skills & Expertise" subtitle="Technologies I work with">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((group, idx) => (
          <motion.div
            key={idx}
            {...fadeIn}
            transition={{ delay: idx * 0.2 }}
            className={cardClass}
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              {group.category}
            </h3>

            <div className="space-y-3">
              {group.items.map((item) => (
                <p key={item} className="text-gray-300">
                  • {item}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function ServicesSection() {
  return (
    <Section title="Services">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            {...fadeIn}
            transition={{ delay: idx * 0.1 }}
            className={cardClass}
          >
            <div className="text-6xl mb-4">{service.icon}</div>

            <h3 className="text-2xl font-bold text-white mb-4">
              {service.title}
            </h3>

            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function ProjectsSection() {
  return (
    <Section title="Featured Projects" subtitle="Recent work and highlights">
      <div className="space-y-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            {...fadeIn}
            transition={{ delay: idx * 0.1 }}
            className={cardClass}
          >
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-7xl">{project.image}</div>

              <div className="md:col-span-2">
                <h3 className="text-3xl font-black text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-cyan-400 text-sm mb-4">
                  {project.subtitle}
                </p>

                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function StatsSection() {
  return (
    <Section title="Achievements">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            {...fadeIn}
            transition={{ delay: idx * 0.1 }}
            className="text-center"
          >
            <div className="text-5xl font-black text-cyan-400 mb-3">
              {stat.value}
            </div>

            <p className="text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function CTASection() {
  return (
    <ScrollSection className="px-6 md:px-12">
      <motion.div {...fadeIn} className="text-center max-w-3xl z-20">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
          Let’s Create Something Amazing
        </h2>

        <p className="text-xl text-gray-400 mb-12">
          I’m always open to exciting projects and collaborations.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/contact">
            <Button>Get In Touch</Button>
          </Link>

          <Link to="/projects">
            <Button secondary>See My Work</Button>
          </Link>
        </div>
      </motion.div>
    </ScrollSection>
  )
}





export default function Hero() {
  const containerRef = useRef()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const smoothScrollY = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 25,
  })

  return (
    <div
      ref={containerRef}
      className="relative overflow-x-hidden bg-black font-['Sora']"
    >
      <AnimatedBackground />

      {/* 3D */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.2} />

          <directionalLight
            position={[10, 20, 10]}
            intensity={3}
            color="#00f0ff"
          />

          <Environment preset="night" />

          <CoreSystemMesh smoothScrollY={smoothScrollY} />
        </Canvas>
      </div>

      {/* CONTENT */}
      <main className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <StatsSection />
        <CTASection />
      
      </main>
    </div>
  )
}