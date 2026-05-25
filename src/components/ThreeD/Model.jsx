
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { gsap } from 'gsap'

const Model = ({ path, scale = 1, position = [0, 0, 0], autoRotate = true }) => {
  const group = useRef(null)
  const { scene } = useGLTF(path)

  useEffect(() => {
    if (!group.current || !autoRotate) return


    const rotationAnimation = gsap.to(group.current.rotation, {
      y: Math.PI * 2,
      duration: 10,
      repeat: -1,
      ease: 'none',
    })

    return () => rotationAnimation.kill()
  }, [autoRotate])

  useEffect(() => {
    if (!scene) return


    scene.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true
        node.receiveShadow = true
        
   
        if (node.material) {
          node.material.metalness = 0.5
          node.material.roughness = 0.5
        }
      }
    })
  }, [scene])

  return (
    <group ref={group} position={position} scale={scale}>
      <primitive object={scene} />
    </group>
  )
}


export const preloadModel = (path) => {
  useGLTF.preload(path)
}

export default Model

