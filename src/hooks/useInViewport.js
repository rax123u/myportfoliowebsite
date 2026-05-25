import { useEffect, useRef, useState } from 'react'
 
export const useInViewport = (options = {}) => {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
 
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        if (options.once) {
          observer.unobserve(entry.target)
        }
      } else {
        setIsVisible(false)
      }
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.margin || '0px',
    })
 
    if (elementRef.current) {
      observer.observe(elementRef.current)
    }
 
    return () => observer.disconnect()
  }, [options])
 
  return [elementRef, isVisible]
}