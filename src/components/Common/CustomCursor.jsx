import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
 
const CustomCursor = () => {
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)
  const mousePos = useRef({ x: 0, y: 0 })
 
  useEffect(() => {
    const cursor = cursorRef.current
    const dot = cursorDotRef.current
 
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
 
      
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      })
 
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
 
    const handleMouseEnterClickable = () => {
      gsap.to(cursor, { scale: 2, duration: 0.3 })
      gsap.to(dot, { scale: 0, duration: 0.3 })
    }
 
    const handleMouseLeaveClickable = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 })
      gsap.to(dot, { scale: 1, duration: 0.3 })
    }
 
    window.addEventListener('mousemove', handleMouseMove)
 
    const clickables = document.querySelectorAll('a, button, [role="button"]')
    clickables.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterClickable)
      el.addEventListener('mouseleave', handleMouseLeaveClickable)
    })
 
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clickables.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterClickable)
        el.removeEventListener('mouseleave', handleMouseLeaveClickable)
      })
    }
  }, [])
 
  return (
    <>
      <style>{`
        body {
          cursor: none;
        }
      `}</style>
      
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 border-2 border-accent rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
        style={{ boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)' }}
      />
      
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-accent rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
      />
    </>
  )
}
 
export default CustomCursor