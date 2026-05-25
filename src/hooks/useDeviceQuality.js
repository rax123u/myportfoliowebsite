import { useEffect, useState } from 'react'
 
export const useDeviceQuality = () => {
  const [quality, setQuality] = useState('high')
 
  useEffect(() => {

    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('webgl2')
    
    if (!gl) {
      setQuality('low')
      return
    }
 
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
    const gpuMemory = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : ''
 

    const deviceMemory = navigator.deviceMemory || 4
    const cpuCores = navigator.hardwareConcurrency || 2
 
   
    if (deviceMemory < 4 || cpuCores < 2) {
      setQuality('low')
    } else if (deviceMemory < 8) {
      setQuality('medium')
    } else {
      setQuality('high')
    }
  }, [])
 
  return {
    quality,
    isLowEnd: quality === 'low',
    isMedium: quality === 'medium',
    isHighEnd: quality === 'high',
    shouldDisableHeavyAnimations: quality === 'low',
    shouldReduceParticles: quality === 'low' || quality === 'medium',
  }
}