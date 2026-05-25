import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu, closeMenu } from '../../store/slices/uiSlice'
import { selectIsMenuOpen } from '../../store/selectors/selectors'

const Navbar = () => {
  const dispatch = useDispatch()
  const isMenuOpen = useSelector(selectIsMenuOpen)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      pointerEvents: 'none',
    },
    open: {
      opacity: 1,
      y: 0,
      pointerEvents: 'auto',
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 },
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-2xl">
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-4 group"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="flex items-center justify-center w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 backdrop-blur-xl shadow-[0_0_25px_rgba(34,211,238,0.25)]"
            >
              <span className="font-['Space_Grotesk'] text-cyan-400 font-black text-lg tracking-tight">
                MR
              </span>
            </motion.div>

            <div className="hidden sm:block">
              <h1 className="font-['Space_Grotesk'] text-xl font-bold tracking-tight text-white leading-none">
                Muhammad Rayyan
              </h1>

              <p className="text-xs text-gray-400 font-['Sora'] tracking-[3px] uppercase mt-1">
                Full Stack Developer
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="relative group"
              >
                <span className="font-['Sora'] text-sm uppercase tracking-[2px] text-gray-300 transition-all duration-300 group-hover:text-cyan-400">
                  {link.label}
                </span>

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
              </Link>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="hidden sm:flex items-center">
            <a href="/resume.pdf" download>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="px-7 py-3 rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-300 font-['Space_Grotesk'] font-bold tracking-wide backdrop-blur-xl transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(34,211,238,0.7)]"
              >
                Resume
              </motion.button>
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
            onClick={() => dispatch(toggleMenu())}
          >
            <span
              className={`h-0.5 w-full rounded-full bg-cyan-400 transition-all duration-300 ${
                isMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />

            <span
              className={`h-0.5 w-full rounded-full bg-cyan-400 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />

            <span
              className={`h-0.5 w-full rounded-full bg-cyan-400 transition-all duration-300 ${
                isMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        <motion.div
          initial="closed"
          animate={isMenuOpen ? 'open' : 'closed'}
          variants={menuVariants}
          className="md:hidden overflow-hidden"
        >
          <div className="mb-6 rounded-3xl border border-cyan-400/10 bg-black/40 backdrop-blur-2xl p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
            
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                variants={itemVariants}
              >
                <Link
                  to={link.href}
                  onClick={() => dispatch(closeMenu())}
                  className="flex items-center justify-between py-4 border-b border-white/5 last:border-none group"
                >
                  <span className="font-['Space_Grotesk'] text-lg font-bold tracking-wide text-gray-300 transition-all duration-300 group-hover:text-cyan-400">
                    {link.label}
                  </span>

                  <span className="text-cyan-400 opacity-0 translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    →
                  </span>
                </Link>
              </motion.div>
            ))}

            <a
              href="/resume.pdf"
              download
              className="block mt-6"
            >
              <button className="w-full rounded-2xl bg-cyan-400 py-4 font-['Space_Grotesk'] text-lg font-black tracking-wide text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.7)]">
                Download Resume
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar