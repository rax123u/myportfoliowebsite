import { gsap, TextPlugin } from './gsap-config'
 
export const createTextReveal = (element, options = {}) => {
  const {
    duration = 0.8,
    delay = 0,
    stagger = 0.02,
    ease = 'power2.out',
  } = options
 
  if (!element) return
 
  const text = element.textContent
  element.textContent = ''
 
  gsap.fromTo(
    element,
    { text: '' },
    {
      text,
      duration,
      delay,
      ease,
      textPlugin: {
        type: 'type',
      },
    }
  )
}
 
export const createLetterStagger = (element, options = {}) => {
  const {
    duration = 0.05,
    stagger = 0.05,
    delay = 0,
  } = options
 
  if (!element) return
 
  const letters = element.querySelectorAll('span')
  
  gsap.fromTo(
    letters,
    { opacity: 0, y: 10 },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      delay,
      ease: 'back.out',
    }
  )
}
 
export const wrapLetters = (element) => {
  if (!element) return
  
  const text = element.textContent
  const wrapped = text
    .split('')
    .map((char) => `<span>${char}</span>`)
    .join('')
  
  element.innerHTML = wrapped
}