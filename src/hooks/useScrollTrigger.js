import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../animations/gsap-config'
 
export const useScrollTrigger = (callback, options = {}) => {
  const elementRef = useRef(null)
 
  useEffect(() => {
    const element = elementRef.current
    if (!element) return
 
    const trigger = ScrollTrigger.create({
      trigger: element,
      start: options.start || 'top 80%',
      end: options.end || 'top center',
      onEnter: () => callback?.('enter'),
      onLeave: () => callback?.('leave'),
      onEnterBack: () => callback?.('enterBack'),
      onLeaveBack: () => callback?.('leaveBack'),
      ...options,
    })
 
    return () => trigger.kill()
  }, [callback, options])
 
  return elementRef
}
