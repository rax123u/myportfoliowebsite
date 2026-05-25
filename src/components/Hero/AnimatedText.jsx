import React, { useEffect, useRef } from 'react'
import { gsap, TextPlugin } from '../../animations/gsap-config'
 
const AnimatedText = ({ text, className = '' }) => {
  const textRef = useRef(null)
 
  useEffect(() => {
    if (!textRef.current) return
 
    const words = text.split(' ')
    textRef.current.innerHTML = words
      .map((word) => `<span class="inline-block">${word}</span>`)
      .join(' ')
 
    const spans = textRef.current.querySelectorAll('span')
    gsap.fromTo(
      spans,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: 'back.out',
        delay: 0.3,
      }
    )
  }, [text])
 
  return <div ref={textRef} className={className} />
}
 
export default AnimatedText