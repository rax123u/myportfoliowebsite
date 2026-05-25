import React, { useRef, useEffect } from 'react'
import { useMousePosition } from '../../hooks/useMousePosition'
import { gsap } from 'gsap'
 
const FloatingObjects = () => {
  const containerRef = useRef(null)
  const mousePos = useMousePosition(containerRef, 0.3)
 
  useEffect(() => {
    const objects = containerRef.current?.querySelectorAll('[data-float]')
    if (!objects) return
 
    objects.forEach((obj, index) => {
      gsap.to(obj, {
        y: Math.sin(index) * 50,
        rotation: index * 45,
        duration: 4 + index,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })
  }, [])
 
  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-10"
      style={{
        perspective: '1200px',
      }}
    >
      {/* Floating cube */}
      <div
        data-float
        className="absolute top-20 left-10 w-32 h-32 opacity-20 mix-blend-screen"
        style={{
          transform: `translateX(${mousePos.x * 0.5}px) translateY(${mousePos.y * 0.5}px)`,
        }}
      >
        <div className="w-full h-full border-2 border-accent rounded-lg" />
      </div>
 
      {/* Floating circle */}
      <div
        data-float
        className="absolute bottom-32 right-20 w-40 h-40 opacity-15 mix-blend-screen"
        style={{
          transform: `translateX(${mousePos.x * 0.3}px) translateY(${mousePos.y * 0.3}px)`,
        }}
      >
        <div
          className="w-full h-full rounded-full border-2 border-accent-2"
          style={{ backdropFilter: 'blur(10px)' }}
        />
      </div>
 
      {/* Floating triangle */}
      <div
        data-float
        className="absolute top-1/2 right-32 w-48 h-48 opacity-10 mix-blend-screen"
        style={{
          transform: `translateX(${mousePos.x * 0.4}px) translateY(${mousePos.y * 0.4}px) rotate(45deg)`,
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          borderLeft: '2px solid #00d4ff',
          borderRight: '2px solid #00d4ff',
          borderBottom: '2px solid #00d4ff',
        }}
      />
    </div>
  )
}
 
export default FloatingObjects