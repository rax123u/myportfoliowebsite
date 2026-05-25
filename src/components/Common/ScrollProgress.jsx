import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
 
const ScrollProgress = () => {
  const progressRef = useRef(null)
 
  useEffect(() => {
    gsap.to(progressRef.current, {
      scaleX: () => window.scrollY / (document.documentElement.scrollHeight - window.innerHeight),
      scrollTrigger: {
        trigger: 'body',
        scrub: 0.5,
        onUpdate: () => {},
      },
    })
  }, [])
 
  return (
    <div
      ref={progressRef}
      className="fixed top-16 left-0 h-1 bg-gradient-cyan-pink z-40 transform-gpu"
      style={{
        transformOrigin: 'left',
        scaleX: 0,
      }}
    />
  )
}
 
export default ScrollProgress