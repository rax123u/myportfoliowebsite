import { useState, useEffect, useCallback } from 'react'
 
export const useMousePosition = (elementRef, scale = 1) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
 
  const handleMouseMove = useCallback((e) => {
    if (!elementRef?.current) return
 
    const rect = elementRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * scale
    const y = (e.clientY - rect.top - rect.height / 2) * scale
 
    setMousePos({ x, y })
  }, [scale])
 
  useEffect(() => {
    const element = elementRef?.current
    if (!element) return
 
    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', () => setMousePos({ x: 0, y: 0 }))
 
    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', () => {})
    }
  }, [handleMouseMove])
 
  return mousePos
}