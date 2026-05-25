import { gsap, ScrollTrigger } from './gsap-config'
 
export const createScrollReveal = (element, options = {}) => {
  const {
    duration = 0.8,
    delay = 0,
    x = 0,
    y = 50,
    rotation = 0,
    scale = 1,
  } = options
 
  if (!element) return
 
  gsap.fromTo(
    element,
    {
      opacity: 0,
      x,
      y,
      rotation,
      scale,
    },
    {
      opacity: 1,
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      duration,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        once: true,
      },
    }
  )
}
 
export const createParallax = (element, speed = 0.5) => {
  if (!element) return
 
  gsap.to(element, {
    y: () => gsap.getProperty(window, 'scrollY') * speed,
    scrollTrigger: {
      trigger: element,
      onUpdate: (self) => {
        gsap.set(element, {
          y: self.getVelocity() * speed,
        })
      },
    },
    ease: 'none',
  })
}
 
export const createScrollCounter = (element, targetValue, options = {}) => {
  const {
    duration = 2,
    delay = 0,
    decimals = 0,
    suffix = '',
    prefix = '',
  } = options
 
  if (!element) return
 
  const counter = { value: 0 }
 
  gsap.to(counter, {
    value: targetValue,
    duration,
    delay,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      once: true,
    },
    onUpdate: () => {
      element.textContent = 
        prefix + 
        counter.value.toFixed(decimals) + 
        suffix
    },
  })
}
 
export const createStaggerLines = (container, options = {}) => {
  const {
    duration = 0.6,
    stagger = 0.1,
    delay = 0,
  } = options
 
  if (!container) return
 
  const lines = container.querySelectorAll('p, span, h1, h2, h3')
 
  gsap.fromTo(
    lines,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
      },
    }
  )
}