// src/components/ThreeD/Camera.jsx
import React, { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { gsap } from 'gsap'

const Camera = ({ 
  position = [0, 0, 5], 
  fov = 50, 
  near = 0.1, 
  far = 1000,
  animate = false,
  animationDuration = 2,
}) => {
  const { camera } = useThree()

  useEffect(() => {
    if (animate) {
      gsap.to(camera.position, {
        x: position[0],
        y: position[1],
        z: position[2],
        duration: animationDuration,
        ease: 'power2.inOut',
      })
    } else {
      camera.position.set(position[0], position[1], position[2])
    }

    camera.fov = fov
    camera.near = near
    camera.far = far
    camera.updateProjectionMatrix()
  }, [camera, position, fov, near, far, animate, animationDuration])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      camera.updateProjectionMatrix()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [camera])

  return null 
}

export default Camera

export const useCameraAnimation = () => {
  const { camera } = useThree()

  const animateTo = (position, duration = 2) => {
    return gsap.to(camera.position, {
      x: position[0],
      y: position[1],
      z: position[2],
      duration,
      ease: 'power2.inOut',
    })
  }

  const lookAt = (target) => {
    camera.lookAt(target[0], target[1], target[2])
  }

  return { animateTo, lookAt }
}