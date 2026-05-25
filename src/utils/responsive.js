
export const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

export const BREAKPOINT_NAMES = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']

export const mobileFirst = (breakpoint) => {
  return `@media (min-width: ${BREAKPOINTS[breakpoint]}px)`
}

export const desktopFirst = (breakpoint) => {

  const maxWidth = BREAKPOINTS[breakpoint] - 1
  return `@media (max-width: ${maxWidth}px)`
}

export const between = (minBreakpoint, maxBreakpoint) => {
  const min = BREAKPOINTS[minBreakpoint]
  const max = BREAKPOINTS[maxBreakpoint] - 1
  return `@media (min-width: ${min}px) and (max-width: ${max}px)`
}

export const isBreakpoint = (name) => {
  return BREAKPOINT_NAMES.includes(name)
}

export const getResponsiveValue = (values, currentBreakpoint) => {
 
  return values[currentBreakpoint]
}

export const containerQueries = {
  sm: '@container (min-width: 300px)',
  md: '@container (min-width: 500px)',
  lg: '@container (min-width: 700px)',
  xl: '@container (min-width: 900px)',
}

export const clamp = (min, value, max) => {
  return Math.max(min, Math.min(value, max))
}

export const fluidSize = (minSize, maxSize, minViewport = 320, maxViewport = 1920) => {
  const minSizeRem = minSize / 16 
  const maxSizeRem = maxSize / 16
  const vwRange = (maxViewport - minViewport) / 100
  const sizeRange = maxSizeRem - minSizeRem
  const coefficient = sizeRange / vwRange

  return `calc(${minSizeRem}rem + ${coefficient}vw)`
}

export const mediaQueries = {
  portrait: '@media (orientation: portrait)',
  landscape: '@media (orientation: landscape)',
  retina: '@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',
  reducedMotion: '@media (prefers-reduced-motion: reduce)',
  darkMode: '@media (prefers-color-scheme: dark)',
  lightMode: '@media (prefers-color-scheme: light)',
  touchDevice: '@media (hover: none) and (pointer: coarse)',
  nonTouchDevice: '@media (hover: hover) and (pointer: fine)',
}

export const aspect = {
  square: 'aspect-square',
  video: 'aspect-video', // 16:9
  golden: 'aspect-[16/10]',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[21/9]',
}

export const useCurrentBreakpoint = () => {
  const [breakpoint, setBreakpoint] = React.useState('md')

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      
      if (width < BREAKPOINTS.sm) {
        setBreakpoint('xs')
      } else if (width < BREAKPOINTS.md) {
        setBreakpoint('sm')
      } else if (width < BREAKPOINTS.lg) {
        setBreakpoint('md')
      } else if (width < BREAKPOINTS.xl) {
        setBreakpoint('lg')
      } else if (width < BREAKPOINTS['2xl']) {
        setBreakpoint('xl')
      } else {
        setBreakpoint('2xl')
      }
    }

    handleResize() 
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return breakpoint
}

export const useTouchDevice = () => {
  const [isTouch, setIsTouch] = React.useState(false)

  React.useEffect(() => {
    const isTouchDevice = () => {
      return (
        (typeof window !== 'undefined' && 'ontouchstart' in window) ||
        (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) ||
        (typeof navigator !== 'undefined' && navigator.msMaxTouchPoints > 0)
      )
    }

    setIsTouch(isTouchDevice())
  }, [])

  return isTouch
}

export const getDeviceType = () => {
  const width = typeof window !== 'undefined' ? window.innerWidth : 0

  if (width < BREAKPOINTS.md) {
    return 'mobile'
  } else if (width < BREAKPOINTS.lg) {
    return 'tablet'
  } else {
    return 'desktop'
  }
}

export const isMobile = () => getDeviceType() === 'mobile'
export const isTablet = () => getDeviceType() === 'tablet'
export const isDesktop = () => getDeviceType() === 'desktop'

export const isViewportMobile = () => {
  return typeof window !== 'undefined' ? window.innerWidth < BREAKPOINTS.md : false
}

export const isViewportTablet = () => {
  return typeof window !== 'undefined' && 
    window.innerWidth >= BREAKPOINTS.md && 
    window.innerWidth < BREAKPOINTS.lg
}

export const isViewportDesktop = () => {
  return typeof window !== 'undefined' ? window.innerWidth >= BREAKPOINTS.lg : false
}