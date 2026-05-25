import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
 
import store from './store'
import Navbar from './components/Common/Navbar'
import Footer from './components/Common/Footer'
import CustomCursor from './components/Common/CustomCursor'
import Preloader from './components/Common/Preloader'
import ScrollProgress from './components/Common/ScrollProgress'
 
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'
 
import './styles/globals.css'
 
const App = () => {
  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
    })
 
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
 
    const animationFrameId = requestAnimationFrame(raf)
 
    return () => {
      cancelAnimationFrame(animationFrameId)
      lenis.destroy()
    }
  }, [])
 
  return (
    <Provider store={store}>
      <Router>
        <CustomCursor />
        <Preloader />
        <ScrollProgress />
        
        
        <div className="relative w-full min-h-screen bg-[#030712] text-white overflow-x-hidden">
          
          <Navbar />
          
          <AnimatePresence mode="wait">
            <main className="relative z-10 w-full">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </AnimatePresence>
 
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}
 
export default App