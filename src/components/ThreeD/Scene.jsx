
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'
import Lights from './Lights'
import Model from './Model'

const Scene = ({ modelPath, autoRotate = true, enableControls = true }) => {
  return (
    <div className="w-full h-screen">
      <Suspense fallback={<div className="flex items-center justify-center h-full">Loading 3D...</div>}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ 
            antialias: true, 
            alpha: true,
            logarithmicDepthBuffer: true,
          }}
          dpr={[1, 2]}
        >
          <color attach="background" args={['#0f0f1e']} />
          
          <Stars radius={100} depth={50} count={5000} factor={4} />

          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />

          <Lights />

          {modelPath && <Model path={modelPath} />}

          {enableControls && (
            <OrbitControls
              autoRotate={autoRotate}
              autoRotateSpeed={4}
              enableZoom={true}
              enablePan={true}
              enableRotate={true}
              maxDistance={10}
              minDistance={2}
            />
          )}
        </Canvas>
      </Suspense>
    </div>
  )
}

export default Scene