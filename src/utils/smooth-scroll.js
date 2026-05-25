
import Lenis from 'lenis'

let lenisInstance = null

export const initializeSmoothScroll = () => {
  if (lenisInstance) return lenisInstance

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease out expo
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
    wheelMultiplier: 1,
    infinite: false,
  })

  const raf = (time) => {
    lenisInstance.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return lenisInstance
}

export const scrollToElement = (element, options = {}) => {
  if (!lenisInstance) return

  const {
    offset = 0,
    duration = 1.2,
    easing = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  } = options

  if (typeof element === 'string') {
    const el = document.querySelector(element)
    if (!el) return
    lenisInstance.scrollTo(el, { offset, duration, easing })
  } else {
    lenisInstance.scrollTo(element, { offset, duration, easing })
  }
}

export const scrollToTop = (duration = 1.2) => {
  if (!lenisInstance) return
  lenisInstance.scrollTo(0, { duration })
}

export const scrollToBottom = (duration = 1.2) => {
  if (!lenisInstance) return
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  lenisInstance.scrollTo(maxScroll, { duration })
}

export const pauseScroll = () => {
  if (!lenisInstance) return
  lenisInstance.stop()
}

export const resumeScroll = () => {
  if (!lenisInstance) return
  lenisInstance.start()
}

export const destroySmoothScroll = () => {
  if (!lenisInstance) return
  lenisInstance.destroy()
  lenisInstance = null
}

export const getSmoothScrollInstance = () => lenisInstance