import { gsap } from './gsap-config'
 
export const createHoverScale = (element, scale = 1.05, duration = 0.3) => {
  if (!element) return
 
  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      scale,
      duration,
      ease: 'power2.out',
    })
  })
 
  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      scale: 1,
      duration,
      ease: 'power2.out',
    })
  })
}
 
export const createTiltEffect = (element) => {
  if (!element) return
 
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
 
    const rotateX = (y - rect.height / 2) * 0.02
    const rotateY = (rect.width / 2 - x) * 0.02
 
    gsap.to(element, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: 'power2.out',
    })
  })
 
  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.3,
      ease: 'power2.out',
    })
  })
}
 
export const createRipple = (element, color = '#00d4ff') => {
  element.addEventListener('click', (e) => {
    const rect = element.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2
 
    const ripple = document.createElement('span')
    ripple.style.position = 'absolute'
    ripple.style.width = size + 'px'
    ripple.style.height = size + 'px'
    ripple.style.left = x + 'px'
    ripple.style.top = y + 'px'
    ripple.style.backgroundColor = color
    ripple.style.borderRadius = '50%'
    ripple.style.pointerEvents = 'none'
    ripple.style.opacity = '0.5'
 
    element.style.position = 'relative'
    element.style.overflow = 'hidden'
    element.appendChild(ripple)
 
    gsap.to(ripple, {
      scale: 4,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      onComplete: () => ripple.remove(),
    })
  })
}