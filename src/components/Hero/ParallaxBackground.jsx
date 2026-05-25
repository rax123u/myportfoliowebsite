import React, { useEffect } from 'react'
import { gsap, ScrollTrigger } from '../../animations/gsap-config'
 
const ParallaxBackground = () => {
  useEffect(() => {
    const bg = document.querySelector('[data-parallax-bg]')
    if (!bg) return
 
    gsap.to(bg, {
      y: 100,
      scrollTrigger: {
        trigger: 'section:first-child',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
        markers: false,
      },
    })
 
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])
 
  return (
    <div
      data-parallax-bg
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(255, 0, 110, 0.2) 0%, transparent 50%)
        `,
        backgroundSize: '200% 200%',
      }}
    />
  )
}
 
export default ParallaxBackground
 