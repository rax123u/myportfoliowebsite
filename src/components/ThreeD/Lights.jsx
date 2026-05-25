
import React from 'react'

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} color="#ffffff" />

      <directionalLight
        position={[10, 10, 10]}
        intensity={1}
        color="#00d4ff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.1}
        shadow-camera-far={100}
      />

      <directionalLight
        position={[-10, 5, -10]}
        intensity={0.5}
        color="#ff006e"
        castShadow
      />

      <pointLight
        position={[5, 5, 5]}
        intensity={0.8}
        color="#00d4ff"
        distance={50}
        decay={2}
      />

      <pointLight
        position={[-5, -5, 5]}
        intensity={0.6}
        color="#ff006e"
        distance={50}
        decay={2}
      />

      <spotLight
        position={[0, 10, 0]}
        angle={Math.PI / 4}
        penumbra={1}
        intensity={0.5}
        color="#00f5ff"
        castShadow
      />

      <hemisphereLight
        skyColor="#00d4ff"
        groundColor="#ff006e"
        intensity={0.3}
      />
    </>
  )
}

export default Lights