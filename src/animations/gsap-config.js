import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import TextPlugin from 'gsap/TextPlugin'
 
// Register plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin)
 
// Set defaults
gsap.defaults({
  duration: 0.6,
  ease: 'power2.out',
})
 
// ScrollTrigger defaults
ScrollTrigger.defaults({
  markers: false,
  toggleActions: 'play none none reverse',
})
 
export { gsap, ScrollTrigger, TextPlugin }